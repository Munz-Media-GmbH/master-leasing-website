// Ratgeber: eine Frage = ein Beitrag.
// Aufbau: Frage (H1) → Kurzantwort (AI Overview / Featured Snippet) → Vertiefung → Conversion-Teil.
// Inline-Links im Fließtext: [Linktext](/pfad)

export type RatgeberTopic = "slb" | "schufa";

export interface RatgeberSection {
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
}

export interface RatgeberArticle {
  slug: string;
  topic: RatgeberTopic;
  question: string;
  seoTitle: string;
  description: string;
  shortAnswer: string;
  published: string;
  updated: string;
  readingMinutes: number;
  sections: RatgeberSection[];
  faq: { q: string; a: string }[];
}

export const topicMeta: Record<
  RatgeberTopic,
  { label: string; landing: { href: string; label: string } }
> = {
  slb: {
    label: "Sale & Leaseback / Fahrzeugbeleihung",
    landing: { href: "/sale-und-leaseback", label: "Sale & Leaseback / Fahrzeugbeleihung" },
  },
  schufa: {
    label: "Leasing ohne Schufa",
    landing: { href: "/", label: "Leasing ohne Schufa" },
  },
};

export const articles: RatgeberArticle[] = [
  {
    slug: "alternativen-zum-bankkredit",
    topic: "slb",
    question: "Welche Alternativen zum Bankkredit gibt es für Unternehmen?",
    seoTitle: "Alternativen zum Bankkredit für Unternehmen – ohne Bank & Schufa | Master Leasing",
    description:
      "Leasing, Mietkauf, Factoring oder Sale & Leaseback: die wichtigsten Alternativen zum Bankkredit im Vergleich. So setzen Sie Kapital aus Fahrzeugen frei – ohne Bank und Schufa.",
    shortAnswer:
      "Die wichtigsten Alternativen zum Bankkredit sind Leasing, Mietkauf, Factoring und Sale & Leaseback. Wer bereits Fahrzeuge oder Maschinen besitzt, kommt mit Sale & Leaseback am schnellsten an Kapital: Das Fahrzeug wird an eine Leasinggesellschaft verkauft und direkt zurückgeleast. Sie erhalten sofort Liquidität – ohne Bankkredit und ohne Schufa-Abfrage – und nutzen das Fahrzeug weiter.",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 4,
    sections: [
      {
        h2: "Die Alternativen zum Bankkredit im Überblick",
        paragraphs: [
          "Ein Bankkredit ist für viele Betriebe nicht die beste Wahl: Die Prüfung dauert oft Wochen, verlangt Bilanzen, Sicherheiten und eine saubere Schufa – und belastet die Kreditlinie. Diese Finanzierungsformen kommen ohne klassischen Bankkredit aus:",
        ],
        table: {
          head: ["Alternative", "So funktioniert es", "Geeignet für", "Bonitätsprüfung"],
          rows: [
            [
              "Sale & Leaseback",
              "Vorhandenes Fahrzeug an eine Leasinggesellschaft verkaufen und direkt zurückleasen",
              "Liquidität aus dem vorhandenen Fuhrpark",
              "Über Master Leasing ohne Schufa – entscheidend ist der Fahrzeugwert",
            ],
            [
              "Leasing",
              "Fahrzeug oder Maschine gegen feste Monatsrate nutzen statt kaufen",
              "Neuanschaffungen ohne hohen Kapitaleinsatz",
              "Bei Banken üblich – über Master Leasing ohne Schufa möglich",
            ],
            [
              "Mietkauf",
              "Feste Raten, am Vertragsende gehört das Objekt Ihnen",
              "Wer Eigentum erwerben möchte",
              "Wie beim Leasing",
            ],
            [
              "Factoring",
              "Offene Rechnungen an einen Factor verkaufen",
              "Betriebe mit vielen Rechnungen an Geschäftskunden",
              "Geprüft wird vor allem Ihr Kunde",
            ],
            [
              "Lieferantenkredit",
              "Längeres Zahlungsziel beim Lieferanten",
              "Kurzfristige Warenkäufe",
              "Entscheidung des Lieferanten",
            ],
          ],
        },
      },
      {
        h2: "Warum Sale & Leaseback oft die schnellste Lösung ist",
        paragraphs: [
          "Bei einem Bankkredit zählt Ihre Bonität. Bei [Sale & Leaseback](/sale-und-leaseback) zählt der Wert Ihres Fahrzeugs: Es dient selbst als Sicherheit. Deshalb ist die Finanzierung auch dann möglich, wenn die Hausbank abgelehnt hat oder ein Schufa-Eintrag besteht.",
          "Sie verkaufen Ihr Fahrzeug oder Ihre Maschine an eine Leasinggesellschaft und leasen es im selben Zug zurück. Der Kaufpreis fließt als Liquidität in Ihr Unternehmen, das Fahrzeug bleibt ohne Unterbrechung im Einsatz. Kennzeichen und Versicherung bleiben in der Regel bestehen.",
          "Weil es sich um einen Verkauf mit anschließendem Leasing handelt, entsteht kein neuer Kredit. Die Leasingraten sind planbar und gelten als Betriebsausgaben.",
        ],
      },
      {
        h2: "Welche Fahrzeuge und Maschinen eignen sich?",
        bullets: [
          "PKW und Firmenwagen",
          "Transporter und Nutzfahrzeuge",
          "LKW, Zugmaschinen und Anhänger",
          "Traktoren, Schlepper und [Landmaschinen](/landmaschinen-leasing)",
          "Bagger, Baumaschinen und Produktionsmaschinen",
        ],
      },
      {
        h2: "Für wen ist Sale & Leaseback die richtige Alternative?",
        bullets: [
          "Selbstständige und Handwerksbetriebe mit bezahltem Fuhrpark",
          "Landwirte und Lohnunternehmer, die vor der Saison Liquidität brauchen",
          "Transport- und Logistikunternehmen mit eigenen LKW",
          "Unternehmen, deren Bankfinanzierung abgelehnt wurde oder die einen Schufa-Eintrag haben",
          "Betriebe, die schnell Kapital für Aufträge, Wachstum oder Engpässe brauchen",
        ],
      },
      {
        h2: "Worauf Sie achten sollten",
        paragraphs: [
          "Sale & Leaseback ist kein Pfandhaus: Beim Pfandleihhaus geben Sie das Fahrzeug ab und können es während der Laufzeit nicht nutzen. Bei Sale & Leaseback fahren Sie einfach weiter.",
          "Achten Sie auf einen klaren Vertrag mit fester Rate und Laufzeit, eine nachvollziehbare Bewertung des Fahrzeugs und einen persönlichen Ansprechpartner. Seriöse Anbieter verlangen keine Vorkasse.",
        ],
      },
    ],
    faq: [
      {
        q: "Ist Sale & Leaseback ein Kredit?",
        a: "Nein. Sie verkaufen Ihr Fahrzeug an eine Leasinggesellschaft und leasen es direkt zurück. Es wird kein Kredit aufgenommen – Sie zahlen eine feste Leasingrate.",
      },
      {
        q: "Bekomme ich Sale & Leaseback auch mit negativer Schufa?",
        a: "Ja. Über Master Leasing ist Sale & Leaseback ohne Schufa-Abfrage möglich. Entscheidend ist der Wert des Fahrzeugs oder der Maschine, nicht Ihre Bonität.",
      },
      {
        q: "Wie schnell bekomme ich das Geld?",
        a: "Nach der kurzen Anfrage erhalten Sie in der Regel innerhalb von 1–3 Werktagen ein Angebot. Nach Vertragsabschluss erfolgt die Auszahlung zeitnah.",
      },
      {
        q: "Kann ich das Fahrzeug während der Laufzeit weiter nutzen?",
        a: "Ja. Das Fahrzeug bleibt die ganze Zeit in Ihrem Betrieb im Einsatz – das ist der entscheidende Unterschied zum Pfandhaus.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
