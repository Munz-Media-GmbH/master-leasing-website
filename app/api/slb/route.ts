import { NextRequest, NextResponse } from "next/server";
import { notifyLeadToMM } from "@/lib/mm-lead-notify";

function isDisqualified(data: { wert?: string; gewerblich?: string }): boolean {
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
      return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    const qualified = !isDisqualified({ wert, gewerblich });
    const statusLabel = qualified ? "Qualifiziert" : "Nicht qualifiziert";

    // Sprint 81: Zentraler Versand via Münz-Media-API.
    const cleanData: Record<string, unknown> = {
      Status: statusLabel,
      "Für wen": Array.isArray(fuerWen) ? fuerWen.join(", ") : fuerWen,
      Objekttyp: objektTyp,
      Wert: wert,
      Gewerblich: gewerblich,
      Hauptgrund: hauptgrund,
      Zeitrahmen: zeitrahmen,
      Zusatzinfo: zusatzInfo,
    };
    for (const k of Object.keys(cleanData)) {
      if (cleanData[k] === null || cleanData[k] === undefined || cleanData[k] === "") {
        delete cleanData[k];
      }
    }

    await notifyLeadToMM({
      leadType: "anfrage",
      formId: "sale_and_leaseback",
      name: `${vorname} ${nachname}`.trim(),
      email,
      phone: mobil ?? null,
      company: unternehmen ?? null,
      source: "/sale-und-leaseback",
      data: cleanData,
      // Bei nicht-qualifiziert KEINE Customer-Reply (war auch vorher so)
      skipCustomerReply: !qualified,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[SLB API] Error:", err);
    return NextResponse.json({ error: "Fehler beim Senden." }, { status: 500 });
  }
}
