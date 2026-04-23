// ─── Master Leasing E-Mail Design-System ───────────────────────────────────
const DUNKEL = "#101010";
const AKZENT = "#E15C55";
const TEXT = "#1a1a1a";
const MUTED = "#666666";
const BG = "#F5F5F5";
const LOGO_URL =
  "https://master-leasing.com/images/LogoFinalFile-01-1024x305.png";
const FIRMA = "Master Leasing";
const TELEFON = "+49 3331 29 77 92";
const TELEFON_HREF = "tel:+4903331297792";
const WEBSITE = "master-leasing.com";

// ─── Layout-Bausteine ───────────────────────────────────────────────────────

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#E8E8E8;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#E8E8E8;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.15);">
      ${content}
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function header(subtitle: string): string {
  return `<tr>
  <td style="background:${DUNKEL};padding:32px 40px;text-align:center;">
    <img src="${LOGO_URL}" alt="Master Leasing" height="48" style="height:48px;max-width:220px;object-fit:contain;display:block;margin:0 auto 16px;">
    <p style="margin:0;color:rgba(255,255,255,0.55);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">${subtitle}</p>
  </td>
</tr>`;
}

function footer(): string {
  return `<tr>
  <td style="background:${DUNKEL};padding:20px 40px;text-align:center;">
    <p style="margin:0;color:rgba(255,255,255,0.45);font-size:12px;line-height:1.6;">
      ${FIRMA} &nbsp;·&nbsp;
      <a href="${TELEFON_HREF}" style="color:rgba(255,255,255,0.45);text-decoration:none;">${TELEFON}</a>
      &nbsp;·&nbsp;
      <a href="https://${WEBSITE}" style="color:rgba(255,255,255,0.45);text-decoration:none;">${WEBSITE}</a>
    </p>
  </td>
</tr>`;
}

function tableRow(label: string, value: string): string {
  return `<tr>
  <td style="padding:7px 0;color:${MUTED};font-size:14px;width:170px;vertical-align:top;">${label}</td>
  <td style="padding:7px 0;color:${TEXT};font-size:14px;font-weight:600;">${value}</td>
</tr>`;
}

function quoteBlock(text: string): string {
  return `<div style="background:white;border-left:3px solid ${AKZENT};padding:14px 18px;margin-top:8px;border-radius:0 6px 6px 0;">
  <p style="margin:0;color:${TEXT};font-size:14px;line-height:1.7;">${text.replace(/\n/g, "<br>")}</p>
</div>`;
}

function infoBox(lines: string[]): string {
  return `<div style="background:white;border-left:4px solid ${AKZENT};padding:16px 20px;border-radius:0 8px 8px 0;margin:20px 0;">
  ${lines.map((l) => `<p style="margin:0 0 4px;color:${TEXT};font-size:14px;">${l}</p>`).join("")}
</div>`;
}

function statusBadge(qualified: boolean): string {
  const bg = qualified ? "#e8f5ee" : "#fef3f2";
  const color = qualified ? "#1a7a3e" : "#c0392b";
  const label = qualified ? "✅ QUALIFIZIERT" : "❌ NICHT QUALIFIZIERT";
  return `<div style="background:${bg};border-radius:6px;padding:10px 16px;margin-bottom:20px;font-weight:bold;color:${color};font-size:14px;">${label}</div>`;
}

function timestamp(datum: string): string {
  return `<p style="margin-top:24px;color:${MUTED};font-size:12px;">Eingegangen am ${datum}</p>`;
}

// ─── Kontaktformular: Team-Mail ─────────────────────────────────────────────

export interface KontaktData {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  unternehmen?: string;
  land?: string;
  strasse?: string;
  plz?: string;
  stadt?: string;
  fahrzeugtyp: string;
  marke?: string;
  modell?: string;
  baujahr?: string;
  kilometerstand?: string;
  preis?: string;
  nachricht?: string;
  datum: string;
}

const FAHRZEUGTYP_LABEL: Record<string, string> = {
  pkw: "PKW",
  landwirtschaft: "Landwirtschaft",
  nutzfahrzeug: "Nutzfahrzeug",
  lkw: "LKW",
  geraete: "Geräte / Zubehör",
  sonstiges: "Sonstiges",
};

export function kontaktTeamMail(d: KontaktData): string {
  const fahrzeugLabel = FAHRZEUGTYP_LABEL[d.fahrzeugtyp] ?? d.fahrzeugtyp;
  const adresse = d.strasse
    ? `${d.strasse}, ${d.plz} ${d.stadt}`
    : "–";

  const content = `
    ${header("NEUE LEASINGANFRAGE")}
    <tr><td style="background:${BG};padding:32px 40px;">
      <h2 style="margin:0 0 20px;color:${DUNKEL};font-size:20px;font-weight:700;border-bottom:2px solid ${AKZENT};padding-bottom:12px;">
        Neue Leasinganfrage von ${d.vorname} ${d.nachname}
      </h2>

      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Fahrzeugtyp</h3>
      <p style="margin:0 0 16px;color:${TEXT};font-size:14px;font-weight:600;">${fahrzeugLabel}</p>

      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Fahrzeug- / Objektdaten</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${tableRow("Marke / Leasingobjekt", d.marke || "–")}
        ${tableRow("Modell", d.modell || "–")}
        ${tableRow("Baujahr", d.baujahr || "–")}
        ${tableRow("km / Betriebsstunden", d.kilometerstand || "–")}
        ${tableRow("Preis inkl. MwSt.", d.preis ? d.preis + " €" : "–")}
      </table>

      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Kontaktdaten</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${tableRow("Name", `${d.vorname} ${d.nachname}`)}
        ${tableRow("E-Mail", `<a href="mailto:${d.email}" style="color:${AKZENT};">${d.email}</a>`)}
        ${tableRow("Telefon", `<a href="tel:${d.telefon}" style="color:${AKZENT};">${d.telefon}</a>`)}
      </table>

      ${d.unternehmen ? `
      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Unternehmen</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${tableRow("Firma", d.unternehmen)}
        ${tableRow("Land", d.land || "–")}
        ${tableRow("Adresse", adresse)}
      </table>` : ""}

      ${d.nachricht ? `
      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Nachricht</h3>
      ${quoteBlock(d.nachricht)}` : ""}

      ${timestamp(d.datum)}
    </td></tr>
    ${footer()}
  `;

  return emailWrapper(content);
}

// ─── Kontaktformular: Kunden-Bestätigung ────────────────────────────────────

export function kontaktKundeMail(d: KontaktData): string {
  const fahrzeugLabel = FAHRZEUGTYP_LABEL[d.fahrzeugtyp] ?? d.fahrzeugtyp;
  const fahrzeugText =
    [d.marke, d.modell, d.baujahr].filter(Boolean).join(" ") ||
    fahrzeugLabel;

  const content = `
    ${header("IHRE ANFRAGE")}
    <tr><td style="background:${BG};padding:32px 40px;">
      <p style="margin:0 0 20px;color:${TEXT};font-size:16px;">Hallo ${d.vorname},</p>
      <p style="margin:0 0 20px;color:${TEXT};font-size:14px;line-height:1.7;">
        vielen Dank für Ihre Leasinganfrage. Wir haben alles erhalten und melden uns schnellstmöglich bei Ihnen – in der Regel innerhalb von 24 Stunden.
      </p>

      ${infoBox([
        `<strong style="font-size:16px;color:${DUNKEL};">${fahrzeugText}</strong>`,
        `<span style="color:${MUTED};font-size:13px;">${fahrzeugLabel}</span>`,
      ])}

      <p style="margin:20px 0 8px;color:${TEXT};font-size:14px;">Bei Rückfragen erreichen Sie uns direkt:</p>
      <a href="${TELEFON_HREF}" style="display:inline-block;background:${AKZENT};color:white;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">${TELEFON}</a>

      <p style="margin:28px 0 0;color:${TEXT};font-size:14px;line-height:1.7;">Mit freundlichen Grüßen,<br>Das Team von ${FIRMA}</p>
    </td></tr>
    ${footer()}
  `;

  return emailWrapper(content);
}

// ─── Sale & Lease Back: Team-Mail ───────────────────────────────────────────

const FUER_WEN: Record<string, string> = {
  unternehmen: "Für mein Unternehmen",
  selbststaendig: "Für mich als Selbstständiger",
  informieren: "Ich informiere mich aktuell nur",
  sonstiges: "Sonstiges",
};
const OBJEKT_TYP: Record<string, string> = {
  pkw: "PKW",
  nutzfahrzeug: "Nutzfahrzeug",
  maschine: "Maschine / Arbeitsgerät",
  mehrere: "Mehrere Fahrzeuge / Maschinen",
};
const WERT: Record<string, string> = {
  unter_10k: "Unter 10.000 €",
  "10k_25k": "10.000 € – 25.000 €",
  "25k_50k": "25.000 € – 50.000 €",
  ueber_50k: "Über 50.000 €",
};
const GEWERBLICH: Record<string, string> = {
  ja: "Ja",
  nein: "Nein",
  teilweise: "Teilweise",
};
const HAUPTGRUND: Record<string, string> = {
  liquiditaet: "Liquidität freisetzen",
  investitionen: "Investitionen oder Wachstum finanzieren",
  puffer: "Liquiditätspuffer aufbauen",
  kreditlinien: "Kreditlinien nicht weiter belasten",
  sonstiges: "Sonstiges",
};
const ZEITRAHMEN: Record<string, string> = {
  kurzfristig: "Kurzfristig (in den nächsten Wochen)",
  mittelfristig: "Mittelfristig (1–3 Monate)",
  informieren: "Ich informiere mich aktuell",
};

export interface SlbData {
  fuerWen: string[];
  objektTyp: string;
  wert: string;
  gewerblich: string;
  hauptgrund: string;
  zeitrahmen: string;
  zusatzInfo?: string;
  vorname: string;
  nachname: string;
  email: string;
  mobil: string;
  unternehmen?: string;
  qualified: boolean;
  datum: string;
}

export function slbTeamMail(d: SlbData): string {
  const content = `
    ${header("SALE & LEASE BACK ANFRAGE")}
    <tr><td style="background:${BG};padding:32px 40px;">
      <h2 style="margin:0 0 20px;color:${DUNKEL};font-size:20px;font-weight:700;border-bottom:2px solid ${AKZENT};padding-bottom:12px;">
        Sale &amp; Lease Back: ${d.vorname} ${d.nachname}
      </h2>

      ${statusBadge(d.qualified)}

      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Qualifizierungsdaten</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${tableRow("Für wen", d.fuerWen.map((v) => FUER_WEN[v] ?? v).join(", "))}
        ${tableRow("Objekt-Typ", OBJEKT_TYP[d.objektTyp] ?? d.objektTyp)}
        ${tableRow("Aktueller Wert", WERT[d.wert] ?? d.wert)}
        ${tableRow("Gewerblich genutzt", GEWERBLICH[d.gewerblich] ?? d.gewerblich)}
        ${tableRow("Hauptgrund", HAUPTGRUND[d.hauptgrund] ?? d.hauptgrund)}
        ${tableRow("Zeitrahmen", ZEITRAHMEN[d.zeitrahmen] ?? d.zeitrahmen)}
      </table>

      ${d.zusatzInfo ? `
      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Zusatzinformation</h3>
      ${quoteBlock(d.zusatzInfo)}` : ""}

      <h3 style="margin:20px 0 10px;color:${DUNKEL};font-size:14px;text-transform:uppercase;letter-spacing:0.06em;">Kontaktdaten</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${tableRow("Name", `${d.vorname} ${d.nachname}`)}
        ${tableRow("E-Mail", `<a href="mailto:${d.email}" style="color:${AKZENT};">${d.email}</a>`)}
        ${tableRow("Mobil", `<a href="tel:${d.mobil}" style="color:${AKZENT};">${d.mobil}</a>`)}
        ${d.unternehmen ? tableRow("Unternehmen", d.unternehmen) : ""}
      </table>

      ${timestamp(d.datum)}
    </td></tr>
    ${footer()}
  `;

  return emailWrapper(content);
}

// ─── Sale & Lease Back: Kunden-Bestätigung (nur qualifiziert) ───────────────

export function slbKundeMail(d: SlbData): string {
  const objektLabel = OBJEKT_TYP[d.objektTyp] ?? d.objektTyp;
  const wertLabel = WERT[d.wert] ?? d.wert;

  const content = `
    ${header("IHRE ANFRAGE")}
    <tr><td style="background:${BG};padding:32px 40px;">
      <p style="margin:0 0 20px;color:${TEXT};font-size:16px;">Hallo ${d.vorname},</p>
      <p style="margin:0 0 20px;color:${TEXT};font-size:14px;line-height:1.7;">
        vielen Dank für Ihr Interesse an unserem Sale &amp; Lease Back Angebot. Ihre Anfrage ist bei uns eingegangen – wir prüfen Ihren Fall und melden uns innerhalb weniger Werktage bei Ihnen.
      </p>

      ${infoBox([
        `<strong style="font-size:16px;color:${DUNKEL};">${objektLabel}</strong>`,
        `<span style="color:${MUTED};font-size:13px;">Geschätzter Wert: ${wertLabel}</span>`,
      ])}

      <p style="margin:8px 0 8px;color:${TEXT};font-size:14px;font-weight:600;">Was passiert als nächstes?</p>
      <p style="margin:0 0 20px;color:${TEXT};font-size:14px;line-height:1.7;">
        Unser Team prüft Ihre Angaben und meldet sich für ein unverbindliches Erstgespräch. Bei Fragen erreichen Sie uns jederzeit:
      </p>
      <a href="${TELEFON_HREF}" style="display:inline-block;background:${AKZENT};color:white;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">${TELEFON}</a>

      <p style="margin:28px 0 0;color:${TEXT};font-size:14px;line-height:1.7;">Mit freundlichen Grüßen,<br>Das Team von ${FIRMA}</p>
    </td></tr>
    ${footer()}
  `;

  return emailWrapper(content);
}
