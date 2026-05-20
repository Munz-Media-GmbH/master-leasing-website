import { NextRequest, NextResponse } from "next/server";
import { sendTeamMail, sendCustomerMail } from "@/lib/mailer";
import { slbTeamMail, slbKundeMail, type SlbData } from "@/lib/email-templates";

function isDisqualified(data: { wert: string; gewerblich: string }): boolean {
  return data.wert === "unter_10k" || data.gewerblich === "nein";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fuerWen,
      objektTyp,
      wert,
      gewerblich,
      hauptgrund,
      zeitrahmen,
      zusatzInfo,
      vorname,
      nachname,
      email,
      mobil,
      unternehmen,
    } = body;

    if (!vorname || !nachname || !email) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    const datum = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    });

    const qualified = !isDisqualified({ wert, gewerblich });

    const data: SlbData = {
      fuerWen,
      objektTyp,
      wert,
      gewerblich,
      hauptgrund,
      zeitrahmen,
      zusatzInfo,
      vorname,
      nachname,
      email,
      mobil,
      unternehmen,
      qualified,
      datum,
    };

    const statusLabel = qualified ? "Qualifiziert" : "Nicht qualifiziert";

    const mailJobs = [
      // 1. Team-Benachrichtigung (immer – auch bei Nicht-Qualifizierung)
      sendTeamMail({
        to: ["anfrage@master-leasing.com"],
        bcc: ["info@muenzmedia.de"],
        subject: `SLB-Anfrage: ${vorname} ${nachname} – ${statusLabel}`,
        html: slbTeamMail(data),
        replyTo: email,
      }),
    ];

    // 2. Bestätigung an Interessenten – nur wenn qualifiziert
    if (qualified) {
      mailJobs.push(
        sendCustomerMail({
          to: [email],
          subject: `Ihre Sale & Lease Back Anfrage ist eingegangen – Master Leasing`,
          html: slbKundeMail(data),
        })
      );
    }

    const emailResults = await Promise.allSettled(mailJobs);

    emailResults.forEach((result, i) => {
      if (result.status === "rejected") {
        console.error(
          `[SLB API] E-Mail ${i === 0 ? "Team" : "Kunde"} fehlgeschlagen:`,
          result.reason
        );
      }
    });

    // Zentrales Tracking → Münz Media Lead-Portal (server-to-server, kein CORS)
    try {
      await fetch("https://base.muenzmedia.de/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: "master-leasing",
          type: "lead",
          data: {
            name: `${vorname} ${nachname}`.trim(),
            email,
            phone: mobil || "",
            company: unternehmen || "",
            source: "/sale-und-leaseback",
            form_id: "sale_and_leaseback",
            data: {
              status: statusLabel,
              fuerWen: Array.isArray(fuerWen) ? fuerWen.join(", ") : (fuerWen || ""),
              objektTyp: objektTyp || "",
              wert: wert || "",
              gewerblich: gewerblich || "",
              hauptgrund: hauptgrund || "",
              zeitrahmen: zeitrahmen || "",
              zusatzInfo: zusatzInfo || "",
            },
          },
        }),
      });
    } catch (trackErr) {
      // Tracking darf nie den Submit blockieren
      console.error("[SLB API] Lead-Tracking fehlgeschlagen:", trackErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[SLB API] Error:", err);
    return NextResponse.json(
      { error: "Fehler beim Senden." },
      { status: 500 }
    );
  }
}
