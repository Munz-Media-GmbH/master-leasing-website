import { NextRequest, NextResponse } from "next/server";
import { sendTeamMail, sendCustomerMail } from "@/lib/mailer";
import { kontaktTeamMail, kontaktKundeMail, type KontaktData } from "@/lib/email-templates";

const FAHRZEUGTYP_LABEL: Record<string, string> = {
  pkw: "PKW",
  landwirtschaft: "Landwirtschaft",
  nutzfahrzeug: "Nutzfahrzeug",
  lkw: "LKW",
  geraete: "Geräte / Zubehör",
  sonstiges: "Sonstiges",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fahrzeugtyp,
      marke,
      modell,
      baujahr,
      kilometerstand,
      preis,
      vorname,
      nachname,
      email,
      telefon,
      unternehmen,
      land,
      strasse,
      plz,
      stadt,
      nachricht,
      agb,
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

    const data: KontaktData = {
      fahrzeugtyp,
      marke,
      modell,
      baujahr,
      kilometerstand,
      preis,
      vorname,
      nachname,
      email,
      telefon,
      unternehmen,
      land,
      strasse,
      plz,
      stadt,
      nachricht,
      agb: Boolean(agb),
      datum,
    };

    const fahrzeugLabel =
      FAHRZEUGTYP_LABEL[fahrzeugtyp] ?? fahrzeugtyp ?? "Leasing";

    const emailResults = await Promise.allSettled([
      // 1. Team-Benachrichtigung
      sendTeamMail({
        to: ["anfrage@master-leasing.com"],
        bcc: ["info@muenzmedia.de"],
        subject: `Neue Leasinganfrage von ${vorname} ${nachname} – ${fahrzeugLabel}`,
        html: kontaktTeamMail(data),
        replyTo: email,
      }),
      // 2. Bestätigung an Interessenten
      sendCustomerMail({
        to: [email],
        subject: `Ihre Leasinganfrage ist eingegangen – Master Leasing`,
        html: kontaktKundeMail(data),
      }),
    ]);

    emailResults.forEach((result, i) => {
      if (result.status === "rejected") {
        console.error(
          `[Kontakt API] E-Mail ${i === 0 ? "Team" : "Kunde"} fehlgeschlagen:`,
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
            phone: telefon || "",
            company: unternehmen || "",
            source: "/kontakt",
            form_id: "kontaktformular",
            data: {
              fahrzeugtyp: fahrzeugLabel,
              marke: marke || "",
              modell: modell || "",
              baujahr: baujahr || "",
              kilometerstand: kilometerstand || "",
              preis: preis || "",
              nachricht: nachricht || "",
              agb: data.agb ? "akzeptiert" : "nicht bestätigt",
              adresse: [strasse, plz, stadt, land].filter(Boolean).join(", "),
            },
          },
        }),
      });
    } catch (trackErr) {
      // Tracking darf nie den Submit blockieren
      console.error("[Kontakt API] Lead-Tracking fehlgeschlagen:", trackErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Kontakt API] Error:", err);
    return NextResponse.json(
      { error: "Fehler beim Senden." },
      { status: 500 }
    );
  }
}
