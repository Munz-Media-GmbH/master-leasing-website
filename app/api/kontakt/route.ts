import { NextRequest, NextResponse } from "next/server";
import { notifyLeadToMM } from "@/lib/mm-lead-notify";

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
      return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    const fahrzeugLabel =
      FAHRZEUGTYP_LABEL[fahrzeugtyp] ?? fahrzeugtyp ?? "Leasing";

    // Sprint 81: Zentraler Versand via Münz-Media-API.
    const cleanData: Record<string, unknown> = {
      Fahrzeugtyp: fahrzeugLabel,
      Marke: marke,
      Modell: modell,
      Baujahr: baujahr,
      Kilometerstand: kilometerstand,
      Preis: preis,
      Adresse: [strasse, plz, stadt, land].filter(Boolean).join(", "),
      Nachricht: nachricht,
      AGB: agb ? "akzeptiert" : "nicht bestätigt",
    };
    for (const k of Object.keys(cleanData)) {
      if (cleanData[k] === null || cleanData[k] === undefined || cleanData[k] === "") {
        delete cleanData[k];
      }
    }

    await notifyLeadToMM({
      leadType: "anfrage",
      formId: "kontaktformular",
      name: `${vorname} ${nachname}`.trim(),
      email,
      phone: telefon ?? null,
      company: unternehmen ?? null,
      source: "/kontakt",
      data: cleanData,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Kontakt API] Error:", err);
    return NextResponse.json({ error: "Fehler beim Senden." }, { status: 500 });
  }
}
