// Ratgeber: eine Frage = ein Beitrag.
// Aufbau: Frage (H1) → Kurzantwort (AI Overview / Featured Snippet) → Vertiefung → Conversion-Teil.
// Inline-Links im Fließtext und in Listen: [Linktext](/pfad)

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
  image?: string;
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
    landing: { href: "/auto-leasen-trotz-negativer-schufa", label: "Auto leasen trotz negativer Schufa" },
  },
};

const D = "2026-10-19";
const IMG_AGRAR = "/images/fahrzeug-landwirtschaft.jpg";

export const articles: RatgeberArticle[] = [
  // ══════════════════════════════════════════════════════════════════
  // Sale & Leaseback / Fahrzeugbeleihung
  // ══════════════════════════════════════════════════════════════════
  {
    slug: "alternativen-zum-bankkredit",
    topic: "slb",
    question: "Welche Alternativen zum Bankkredit gibt es für Unternehmen?",
    seoTitle: "Alternativen zum Bankkredit für Unternehmen – ohne Bank & Schufa | Master Leasing",
    description:
      "Leasing, Mietkauf, Factoring oder Sale & Leaseback: die wichtigsten Alternativen zum Bankkredit im Vergleich. So setzen Sie Kapital aus Fahrzeugen frei – ohne Bank und Schufa.",
    shortAnswer:
      "Die wichtigsten Alternativen zum Bankkredit sind Leasing, Mietkauf, Factoring und Sale & Leaseback. Wer bereits Fahrzeuge oder Maschinen besitzt, kommt mit Sale & Leaseback am schnellsten an Kapital: Das Fahrzeug wird an eine Leasinggesellschaft verkauft und direkt zurückgeleast. Sie erhalten sofort Liquidität – ohne Bankkredit und ohne Schufa-Abfrage – und nutzen das Fahrzeug weiter.",
    published: D,
    updated: D,
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
            ["Sale & Leaseback", "Vorhandenes Fahrzeug an eine Leasinggesellschaft verkaufen und direkt zurückleasen", "Liquidität aus dem vorhandenen Fuhrpark", "Über Master Leasing ohne Schufa – entscheidend ist der Fahrzeugwert"],
            ["Leasing", "Fahrzeug oder Maschine gegen feste Monatsrate nutzen statt kaufen", "Neuanschaffungen ohne hohen Kapitaleinsatz", "Bei Banken üblich – über Master Leasing ohne Schufa möglich"],
            ["Mietkauf", "Feste Raten, am Vertragsende gehört das Objekt Ihnen", "Wer Eigentum erwerben möchte", "Wie beim Leasing"],
            ["Factoring", "Offene Rechnungen an einen Factor verkaufen", "Betriebe mit vielen Rechnungen an Geschäftskunden", "Geprüft wird vor allem Ihr Kunde"],
            ["Lieferantenkredit", "Längeres Zahlungsziel beim Lieferanten", "Kurzfristige Warenkäufe", "Entscheidung des Lieferanten"],
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
          "[LKW, Zugmaschinen und Anhänger](/ratgeber/lkw-beleihen)",
          "[Traktoren, Schlepper und Landmaschinen](/ratgeber/traktor-landmaschinen-beleihen)",
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
          "Sale & Leaseback ist kein Pfandhaus: Beim Pfandleihhaus geben Sie das Fahrzeug ab und können es während der Laufzeit nicht nutzen. Bei Sale & Leaseback fahren Sie einfach weiter – mehr dazu im Vergleich [Auto verpfänden oder Sale & Leaseback](/ratgeber/auto-verpfaenden-oder-sale-and-leaseback).",
          "Achten Sie auf einen klaren Vertrag mit fester Rate und Laufzeit, eine nachvollziehbare Bewertung des Fahrzeugs und einen persönlichen Ansprechpartner. Seriöse Anbieter verlangen keine Vorkasse.",
        ],
      },
    ],
    faq: [
      { q: "Ist Sale & Leaseback ein Kredit?", a: "Nein. Sie verkaufen Ihr Fahrzeug an eine Leasinggesellschaft und leasen es direkt zurück. Es wird kein Kredit aufgenommen – Sie zahlen eine feste Leasingrate." },
      { q: "Bekomme ich Sale & Leaseback auch mit negativer Schufa?", a: "Ja. Über Master Leasing ist Sale & Leaseback ohne Schufa-Abfrage möglich. Entscheidend ist der Wert des Fahrzeugs oder der Maschine, nicht Ihre Bonität." },
      { q: "Wie schnell bekomme ich das Geld?", a: "Nach der kurzen Anfrage erhalten Sie in der Regel innerhalb von 1–3 Werktagen ein Angebot. Nach Vertragsabschluss erfolgt die Auszahlung zeitnah." },
      { q: "Kann ich das Fahrzeug während der Laufzeit weiter nutzen?", a: "Ja. Das Fahrzeug bleibt die ganze Zeit in Ihrem Betrieb im Einsatz – das ist der entscheidende Unterschied zum Pfandhaus." },
    ],
  },
  {
    slug: "kurzfristig-liquiditaet-fuer-unternehmen",
    topic: "slb",
    question: "Wie bekomme ich kurzfristig Liquidität für mein Unternehmen?",
    seoTitle: "Kurzfristig Liquidität für Unternehmen – ohne Bankkredit | Master Leasing",
    description:
      "Liquiditätsengpass im Betrieb? So kommen Unternehmen kurzfristig an Kapital: Sale & Leaseback, Kontokorrent und Factoring im Vergleich – ohne Bank und Schufa aus dem eigenen Fuhrpark.",
    shortAnswer:
      "Am schnellsten kommen Unternehmen an Liquidität, wenn sie vorhandene Werte nutzen. Mit Sale & Leaseback verkaufen Sie ein bezahltes Fahrzeug oder eine Maschine an eine Leasinggesellschaft und leasen es direkt zurück. Der Kaufpreis wird ausgezahlt, das Fahrzeug bleibt im Einsatz – ohne Bankkredit und ohne Schufa-Abfrage. Ein Angebot liegt meist nach 1–3 Werktagen vor.",
    published: D,
    updated: D,
    readingMinutes: 4,
    sections: [
      {
        h2: "Typische Gründe für einen Liquiditätsengpass",
        paragraphs: [
          "Volle Auftragsbücher und trotzdem knapp bei Kasse – das ist in vielen Betrieben normal. Meist kommen mehrere Dinge zusammen:",
        ],
        bullets: [
          "Kunden zahlen Rechnungen verspätet",
          "Material und Personal müssen für große Aufträge vorfinanziert werden",
          "Saisonale Schwankungen, z. B. in Landwirtschaft und Bau",
          "Unerwartete Steuernachzahlungen oder Reparaturen",
          "Die Hausbank erhöht den Kreditrahmen nicht",
        ],
      },
      {
        h2: "Die schnellsten Wege zu frischem Kapital",
        table: {
          head: ["Weg", "Tempo", "Voraussetzung", "Nachteil"],
          rows: [
            ["Sale & Leaseback", "Angebot in 1–3 Werktagen", "Bezahltes Fahrzeug oder Maschine", "Monatliche Leasingrate"],
            ["Kontokorrentkredit", "Sofort, wenn vorhanden", "Bestehender Rahmen bei der Bank", "Hohe Zinsen, Rahmen oft ausgeschöpft"],
            ["Factoring", "Einige Tage bis Wochen", "Offene Rechnungen an Geschäftskunden", "Gebühren, Vertrag mit einem Factor"],
            ["Neuer Bankkredit", "Oft mehrere Wochen", "Gute Bonität, Bilanzen, Sicherheiten", "Langsam, Ablehnung möglich"],
          ],
        },
      },
      {
        h2: "Liquidität aus dem eigenen Fuhrpark",
        paragraphs: [
          "In bezahlten Fahrzeugen und Maschinen steckt oft viel gebundenes Kapital. Über [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback) machen Sie es verfügbar, ohne auf die Fahrzeuge zu verzichten: Der Kaufpreis fließt auf Ihr Konto, die Fahrzeuge bleiben im Einsatz.",
          "Weil der Wert des Fahrzeugs als Sicherheit dient, spielt Ihre Bonität keine entscheidende Rolle. Auch mit Schufa-Eintrag oder nach einer Absage der Bank ist das möglich. Wie das im Detail abläuft, erklärt [Wie funktioniert Sale & Leaseback bei Fahrzeugen?](/ratgeber/wie-funktioniert-sale-and-leaseback) – einen Überblick über weitere Wege gibt [Alternativen zum Bankkredit](/ratgeber/alternativen-zum-bankkredit).",
        ],
      },
      {
        h2: "So gehen Sie vor",
        bullets: [
          "Bezahlte Fahrzeuge und Maschinen im Betrieb auflisten",
          "Ungefähren Kapitalbedarf festlegen",
          "Unverbindliche Anfrage stellen – wir prüfen den Wert und machen ein Angebot",
          "Vertrag abschließen, Auszahlung erhalten, Fahrzeug weiter nutzen",
        ],
        paragraphs: [
          "Mehrere Fahrzeuge? Lesen Sie, wie Sie [Kapital aus dem ganzen Fuhrpark freisetzen](/ratgeber/kapital-aus-fuhrpark-freisetzen).",
        ],
      },
    ],
    faq: [
      { q: "Wie schnell ist das Geld bei Sale & Leaseback auf dem Konto?", a: "Ein Angebot erhalten Sie in der Regel innerhalb von 1–3 Werktagen. Nach Vertragsabschluss erfolgt die Auszahlung zeitnah, meist innerhalb weniger Werktage." },
      { q: "Brauche ich dafür eine gute Bonität?", a: "Nein. Entscheidend ist der Wert des Fahrzeugs. Über Master Leasing ist Sale & Leaseback ohne Schufa-Abfrage möglich." },
      { q: "Belastet Sale & Leaseback meinen Kreditrahmen?", a: "Nein. Es handelt sich um einen Verkauf mit anschließendem Leasing, nicht um einen Kredit. Ihre Kreditlinie bei der Bank bleibt unberührt." },
    ],
  },
  {
    slug: "kapital-aus-fuhrpark-freisetzen",
    topic: "slb",
    question: "Wie kann ich Kapital aus meinem Fuhrpark freisetzen?",
    seoTitle: "Kapital aus dem Fuhrpark freisetzen – Fuhrpark beleihen | Master Leasing",
    description:
      "Bezahlte Firmenfahrzeuge binden Kapital. So setzen Sie es mit Sale & Leaseback frei – für einzelne Fahrzeuge oder den ganzen Fuhrpark, ohne Bank und Schufa.",
    shortAnswer:
      "Kapital aus dem Fuhrpark setzen Sie mit Sale & Leaseback frei: Sie verkaufen bezahlte Fahrzeuge an eine Leasinggesellschaft und leasen sie direkt zurück. Der Kaufpreis fließt als Liquidität ins Unternehmen, die Fahrzeuge bleiben im Einsatz. Das funktioniert für einzelne Fahrzeuge oder den ganzen Fuhrpark – ohne Bankkredit und ohne Schufa-Abfrage.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum im Fuhrpark so viel Kapital steckt",
        paragraphs: [
          "Wer Fahrzeuge bar oder über einen inzwischen abbezahlten Kredit gekauft hat, hat sein Kapital fest gebunden. Ein Transporter, ein LKW oder ein Traktor ist schnell einen fünf- bis sechsstelligen Betrag wert – Geld, das in der Bilanz steht, aber nicht für Aufträge, Personal oder Investitionen zur Verfügung steht.",
        ],
      },
      {
        h2: "So funktioniert die Fuhrpark-Beleihung",
        bullets: [
          "Sie nennen uns die Fahrzeuge, die Sie beleihen möchten",
          "Die Fahrzeuge werden nach Marktwert bewertet",
          "Eine Leasinggesellschaft kauft die Fahrzeuge an",
          "Sie leasen sie im selben Zug zurück und fahren weiter",
          "Der Kaufpreis wird ausgezahlt – Kennzeichen und Versicherung bleiben in der Regel bestehen",
        ],
      },
      {
        h2: "Ganzer Fuhrpark oder einzelne Fahrzeuge?",
        paragraphs: [
          "Sie entscheiden selbst, wie viel Kapital Sie freisetzen. Oft reicht es, ein oder zwei wertvolle Fahrzeuge zu beleihen. Bei größerem Bedarf lässt sich auch der gesamte Fuhrpark einbeziehen – vom PKW über Transporter und [LKW](/ratgeber/lkw-beleihen) bis zu [Traktoren und Landmaschinen](/ratgeber/traktor-landmaschinen-beleihen).",
        ],
      },
      {
        h2: "Was Sie davon haben",
        bullets: [
          "Sofortige Liquidität ohne neuen Kredit",
          "Planbare monatliche Leasingraten als Betriebsausgaben",
          "Kein Ausfall im Tagesgeschäft – die Fahrzeuge bleiben im Einsatz",
          "Unabhängig von Hausbank und Schufa",
        ],
        paragraphs: [
          "Alle Details zum Ablauf finden Sie auf der Seite [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback).",
        ],
      },
    ],
    faq: [
      { q: "Welche Fahrzeuge aus dem Fuhrpark eignen sich?", a: "PKW, Transporter, LKW, Anhänger, Traktoren, Landmaschinen und Baumaschinen. Entscheidend ist ein ausreichender Marktwert." },
      { q: "Muss ich den ganzen Fuhrpark beleihen?", a: "Nein. Sie können einzelne Fahrzeuge auswählen und so genau den Betrag freisetzen, den Sie brauchen." },
      { q: "Ändert sich für meine Fahrer etwas?", a: "Nein. Die Fahrzeuge bleiben im Einsatz, Kennzeichen und Versicherung bleiben in der Regel bestehen. Im Alltag ändert sich für Ihre Mitarbeiter nichts." },
    ],
  },
  {
    slug: "auto-beleihen-und-weiterfahren",
    topic: "slb",
    question: "Kann ich mein Auto beleihen und trotzdem weiterfahren?",
    seoTitle: "Auto beleihen und weiterfahren – ohne Pfandhaus | Master Leasing",
    description:
      "Auto beleihen und weiterfahren: Mit Sale & Leaseback bekommen Gewerbekunden sofort Kapital und behalten ihr Fahrzeug im Einsatz – ohne Pfandhaus, Bank und Schufa.",
    shortAnswer:
      "Ja. Mit Sale & Leaseback beleihen Sie Ihr Auto und fahren weiter: Sie verkaufen das Fahrzeug an eine Leasinggesellschaft und leasen es direkt zurück. Sie erhalten sofort Kapital, das Auto bleibt bei Ihnen – anders als beim Pfandhaus, wo es abgestellt wird. Das Angebot richtet sich an Gewerbekunden und ist ohne Schufa-Abfrage möglich.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Auto beleihen: zwei Wege im Vergleich",
        table: {
          head: ["", "Pfandhaus / Autopfand", "Sale & Leaseback"],
          rows: [
            ["Auto während der Laufzeit", "Wird abgestellt", "Sie fahren weiter"],
            ["Kosten", "Zinsen und Gebühren pro Monat", "Feste Leasingrate"],
            ["Schufa", "Meist ohne", "Über Master Leasing ohne"],
            ["Geeignet für", "Privat und Gewerbe", "Gewerbekunden"],
            ["Firmenfahrzeug im täglichen Einsatz", "Ungeeignet", "Ideal"],
          ],
        },
      },
      {
        h2: "So funktioniert es Schritt für Schritt",
        bullets: [
          "Kurze Anfrage mit Angaben zum Fahrzeug",
          "Bewertung nach Marktwert und konkretes Angebot in 1–3 Werktagen",
          "Vertrag: Verkauf an die Leasinggesellschaft und Leasing zurück",
          "Auszahlung – und Sie fahren einfach weiter",
        ],
        paragraphs: [
          "Den kompletten Ablauf mit Dauer je Schritt finden Sie unter [Wie funktioniert Sale & Leaseback bei Fahrzeugen?](/ratgeber/wie-funktioniert-sale-and-leaseback). Mehrere Fahrzeuge? Dann lesen Sie, wie Sie [Kapital aus dem Fuhrpark freisetzen](/ratgeber/kapital-aus-fuhrpark-freisetzen).",
        ],
      },
      {
        h2: "Welche Fahrzeuge lassen sich beleihen?",
        paragraphs: [
          "Nicht nur PKW: Auch Transporter, Nutzfahrzeuge, LKW, Traktoren und Maschinen können Sie über [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback) beleihen. Voraussetzung ist eine gewerbliche Nutzung.",
        ],
      },
      {
        h2: "Für wen sich das lohnt",
        paragraphs: [
          "Für Selbstständige, Handwerker und Unternehmen, die ihr Fahrzeug täglich brauchen und trotzdem kurzfristig Kapital benötigen. Ein Pfandhaus scheidet hier aus – wer auf sein Auto angewiesen ist, kann es nicht wochenlang abgeben. Den ausführlichen Vergleich finden Sie unter [Auto verpfänden oder Sale & Leaseback](/ratgeber/auto-verpfaenden-oder-sale-and-leaseback).",
        ],
      },
    ],
    faq: [
      { q: "Behalte ich mein Kennzeichen?", a: "Ja. Das Fahrzeug behält in der Regel sein bestehendes Kennzeichen, auch die Versicherung kann meist weitergeführt werden." },
      { q: "Geht Auto beleihen auch als Privatperson?", a: "Sale & Leaseback über Master Leasing richtet sich an gewerbliche Kunden – Selbstständige, Freiberufler und Unternehmen." },
      { q: "Brauche ich eine gute Schufa?", a: "Nein. Entscheidend ist der Wert des Fahrzeugs, nicht Ihre Bonität. Eine Schufa-Abfrage findet nicht statt." },
    ],
  },
  {
    slug: "wie-funktioniert-sale-and-leaseback",
    topic: "slb",
    question: "Wie funktioniert Sale & Leaseback bei Fahrzeugen?",
    seoTitle: "Sale and Leaseback bei Fahrzeugen einfach erklärt | Master Leasing",
    description:
      "Sale and Leaseback einfach erklärt: Fahrzeug verkaufen, zurückleasen, weiterfahren. Ablauf, Vorteile und Voraussetzungen für Gewerbekunden.",
    shortAnswer:
      "Bei Sale & Leaseback verkaufen Sie ein Fahrzeug, das Ihnen gehört, an eine Leasinggesellschaft und leasen es im selben Zug zurück. Sie erhalten den Kaufpreis als Liquidität und zahlen danach eine feste monatliche Leasingrate. Das Fahrzeug bleibt die ganze Zeit in Ihrem Betrieb im Einsatz.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Das Prinzip in drei Sätzen",
        paragraphs: [
          "„Sale“ heißt Verkauf, „Leaseback“ heißt Zurückleasen. Das Eigentum am Fahrzeug wechselt für die Laufzeit zur Leasinggesellschaft, die Nutzung bleibt bei Ihnen. Aus gebundenem Kapital wird so frei verfügbare Liquidität.",
          "Typische Anwendungsfälle: [Auto beleihen und weiterfahren](/ratgeber/auto-beleihen-und-weiterfahren), [LKW beleihen](/ratgeber/lkw-beleihen) oder [Traktor und Landmaschinen beleihen](/ratgeber/traktor-landmaschinen-beleihen).",
        ],
      },
      {
        h2: "Der Ablauf bei Master Leasing",
        table: {
          head: ["Schritt", "Was passiert", "Dauer"],
          rows: [
            ["1. Anfrage", "Kurze Angaben zu Fahrzeug und Kapitalbedarf", "ca. 10–15 Min."],
            ["2. Prüfung & Angebot", "Bewertung des Fahrzeugs, konkretes Angebot", "1–3 Werktage"],
            ["3. Vertrag", "Durchsicht der Unterlagen und Abschluss", "unter 30 Min."],
            ["4. Auszahlung", "Kaufpreis wird ausgezahlt, Fahrzeug bleibt im Einsatz", "5–7 Werktage"],
          ],
        },
      },
      {
        h2: "Was den Auszahlungsbetrag bestimmt",
        bullets: [
          "Marktwert des Fahrzeugs: Marke, Modell, Alter, Laufleistung, Zustand",
          "Gewünschte Laufzeit",
          "Art des Fahrzeugs – PKW, Nutzfahrzeug, Landmaschine oder Baumaschine",
        ],
      },
      {
        h2: "Vorteile für Unternehmen",
        bullets: [
          "Sofortige Liquidität ohne Kreditaufnahme",
          "Fahrzeug bleibt uneingeschränkt nutzbar",
          "Leasingraten gelten als Betriebsausgaben",
          "Möglich ohne Schufa-Abfrage und ohne Hausbank",
        ],
        paragraphs: [
          "Alle Details zu Ablauf und Konditionen finden Sie auf unserer Seite [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback).",
        ],
      },
    ],
    faq: [
      { q: "Ist Sale & Leaseback seriös?", a: "Ja. Sale & Leaseback ist ein etabliertes Finanzierungsinstrument, das Unternehmen seit Jahrzehnten nutzen – auch für Immobilien und Maschinen. Wichtig sind ein klarer Vertrag, eine nachvollziehbare Bewertung und keine Vorkasse." },
      { q: "Ist das Fahrzeug dann noch versichert?", a: "Die bestehende Versicherung kann in der Regel weitergeführt werden. Die Details klären wir vor Vertragsabschluss." },
      { q: "Was ist der Unterschied zum normalen Leasing?", a: "Beim normalen Leasing wird ein neues Fahrzeug angeschafft. Bei Sale & Leaseback geht es um ein Fahrzeug, das Sie bereits besitzen – Sie machen das darin gebundene Kapital verfügbar." },
    ],
  },
  {
    slug: "auto-verpfaenden-oder-sale-and-leaseback",
    topic: "slb",
    question: "Auto verpfänden oder Sale & Leaseback – was ist der Unterschied?",
    seoTitle: "Auto verpfänden oder Sale & Leaseback? Der Vergleich | Master Leasing",
    description:
      "Auto verpfänden beim Pfandhaus oder Sale & Leaseback? Unterschiede bei Nutzung, Kosten und Laufzeit – und warum Gewerbekunden ihr Fahrzeug behalten sollten.",
    shortAnswer:
      "Beim Verpfänden geben Sie Ihr Auto im Pfandhaus ab und bekommen ein Pfanddarlehen – fahren können Sie in dieser Zeit nicht. Bei Sale & Leaseback verkaufen Sie das Fahrzeug an eine Leasinggesellschaft, leasen es direkt zurück und fahren weiter. Für Betriebe, die ihr Fahrzeug täglich brauchen, ist Sale & Leaseback deshalb meist die bessere Wahl.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Der Vergleich auf einen Blick",
        table: {
          head: ["Kriterium", "Auto verpfänden", "Sale & Leaseback"],
          rows: [
            ["Nutzung", "Auto steht im Pfandhaus", "Sie fahren weiter"],
            ["Prinzip", "Kurzfristiges Pfanddarlehen", "Verkauf + Leasing zurück"],
            ["Laufzeit", "Meist wenige Monate", "Planbare Laufzeit"],
            ["Kosten", "Zinsen und Gebühren", "Feste monatliche Leasingrate"],
            ["Zielgruppe", "Privat und Gewerbe", "Gewerbekunden"],
          ],
        },
      },
      {
        h2: "Wann das Pfandhaus passt – und wann nicht",
        paragraphs: [
          "Ein Pfandhaus kann sinnvoll sein, wenn Sie ein Zweitfahrzeug kurzfristig nicht brauchen. Für ein Firmenfahrzeug, das jeden Tag im Einsatz ist, passt es nicht: ohne Auto keine Aufträge, keine Kundentermine, keine Baustelle.",
        ],
      },
      {
        h2: "Warum Sale & Leaseback für Gewerbekunden passt",
        bullets: [
          "Das Fahrzeug bleibt im Betrieb",
          "Feste Rate statt laufender Pfandgebühren",
          "Auch für Transporter, LKW, Traktoren und Maschinen",
          "Ohne Bank und ohne Schufa-Abfrage",
        ],
        paragraphs: [
          "Mehr dazu: [Auto beleihen und weiterfahren](/ratgeber/auto-beleihen-und-weiterfahren), [So funktioniert Sale & Leaseback](/ratgeber/wie-funktioniert-sale-and-leaseback) und unsere Seite [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback).",
        ],
      },
    ],
    faq: [
      { q: "Kann ich beim Verpfänden mein Auto verlieren?", a: "Wird das Pfanddarlehen nicht rechtzeitig zurückgezahlt, kann das Pfandhaus das Fahrzeug verwerten. Bei Sale & Leaseback zahlen Sie dagegen eine planbare Leasingrate und nutzen das Fahrzeug weiter." },
      { q: "Was ist schneller?", a: "Beide Wege sind deutlich schneller als ein Bankkredit. Bei Sale & Leaseback über Master Leasing liegt ein Angebot meist nach 1–3 Werktagen vor." },
      { q: "Kann ich auch einen Transporter oder LKW so beleihen?", a: "Ja. Sale & Leaseback funktioniert für PKW, Transporter, LKW, Traktoren und Maschinen – genau dort, wo ein Pfandhaus meist an seine Grenzen kommt." },
    ],
  },
  {
    slug: "traktor-landmaschinen-beleihen",
    topic: "slb",
    image: IMG_AGRAR,
    question: "Kann ich meinen Traktor oder meine Landmaschinen beleihen?",
    seoTitle: "Traktor & Landmaschinen beleihen – Sale & Leaseback | Master Leasing",
    description:
      "Traktor beleihen und weiter aufs Feld: Mit Sale & Leaseback setzen Landwirte und Lohnunternehmer Kapital aus Schleppern, Mähdreschern und Landtechnik frei.",
    shortAnswer:
      "Ja. Traktoren, Schlepper und Landmaschinen lassen sich per Sale & Leaseback beleihen: Sie verkaufen die Maschine an eine Leasinggesellschaft und leasen sie direkt zurück. Sie erhalten sofort Kapital, die Maschine bleibt auf Ihrem Hof im Einsatz. Das geht markenunabhängig, für neue und gebrauchte Technik – ohne Bank und ohne Schufa-Abfrage.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Welche Landtechnik sich beleihen lässt",
        bullets: [
          "Traktoren und Schlepper – Standard-, Groß- und Kompaktschlepper",
          "Mähdrescher und Erntetechnik",
          "Feldhäcksler, Pressen und Ladewagen",
          "Anbau- und Bodenbearbeitungsgeräte",
          "Teleskop- und Hoflader",
        ],
        paragraphs: [
          "Markenunabhängig: Fendt, John Deere, Claas, Deutz-Fahr, Case IH, New Holland, Massey Ferguson und weitere.",
        ],
      },
      {
        h2: "Warum Landwirte ihre Maschinen beleihen",
        paragraphs: [
          "In der Landwirtschaft steckt viel Kapital in der Technik, während die Einnahmen saisonal kommen. Vor der Saison fallen Saatgut, Dünger, Pacht und Personal an – das Geld aus der Ernte kommt erst Monate später. Mit Sale & Leaseback überbrücken Sie diese Lücke, ohne eine einzige Maschine abzugeben.",
          "Sie möchten stattdessen einen neuen Traktor ohne Bankprüfung? Lesen Sie [Kann ich einen Traktor ohne Schufa leasen?](/ratgeber/traktor-leasen-ohne-schufa)",
        ],
      },
      {
        h2: "So läuft es ab",
        bullets: [
          "Maschine mit Baujahr, Betriebsstunden und Zustand nennen",
          "Bewertung nach Marktwert und Angebot in 1–3 Werktagen",
          "Vertrag abschließen – die Maschine bleibt auf dem Hof",
          "Auszahlung und weiter aufs Feld",
        ],
        paragraphs: [
          "Sie suchen eine neue Maschine statt Kapital? Dann lesen Sie unsere Seiten zum [Traktor-Leasing](/traktor-leasing) und zum [Landmaschinen-Leasing](/landmaschinen-leasing). Ob sich das für Ihren Betrieb rechnet, lesen Sie unter [Lohnt sich Sale & Leaseback für Landwirte?](/ratgeber/sale-and-leaseback-landwirtschaft)",
        ],
      },
    ],
    faq: [
      { q: "Kann ich auch einen älteren Traktor beleihen?", a: "Ja, auch gebrauchte Traktoren und Landmaschinen. Entscheidend ist der aktuelle Marktwert, den wir individuell bewerten." },
      { q: "Brauche ich dafür meine Hausbank?", a: "Nein. Sale & Leaseback über Master Leasing läuft bankenunabhängig und ohne Schufa-Abfrage." },
      { q: "Kann ich Laufzeit und Rate an meinen Betrieb anpassen?", a: "Ja. Laufzeit und Rate stimmen wir individuell auf Ihren Betrieb und Ihren Kapitalbedarf ab." },
    ],
  },
  {
    slug: "lkw-beleihen",
    topic: "slb",
    image: "/images/fahrzeug-lkw.jpg",
    question: "Kann ich meinen LKW beleihen, um schnell Liquidität zu bekommen?",
    seoTitle: "LKW beleihen und weiterfahren – Sale & Leaseback | Master Leasing",
    description:
      "LKW, Sattelzug oder Anhänger beleihen: Mit Sale & Leaseback bekommen Transportunternehmen schnell Kapital – und der LKW bleibt auf der Straße. Ohne Bank & Schufa.",
    shortAnswer:
      "Ja. Mit Sale & Leaseback beleihen Sie Ihren LKW, ohne ihn abzugeben: Sie verkaufen ihn an eine Leasinggesellschaft und leasen ihn direkt zurück. Der Kaufpreis wird ausgezahlt, der LKW bleibt auf Tour. Das funktioniert für Zugmaschinen, Sattelzüge, Anhänger und schwere Nutzfahrzeuge – ohne Bank und ohne Schufa-Abfrage.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum Transportunternehmen ihre LKW beleihen",
        paragraphs: [
          "Im Transportgewerbe sind die Margen knapp und die laufenden Kosten hoch: Diesel, Maut, Reifen, Personal. Gleichzeitig zahlen Auftraggeber oft erst nach Wochen. Ein LKW steht mit hohem Wert in der Bilanz – mit Sale & Leaseback wird dieser Wert zu Liquidität. Weitere Wege bei Engpässen: [Kurzfristig Liquidität für Unternehmen](/ratgeber/kurzfristig-liquiditaet-fuer-unternehmen).",
        ],
      },
      {
        h2: "Was sich beleihen lässt",
        bullets: [
          "Sattelzugmaschinen und Solo-LKW",
          "Auflieger und Anhänger",
          "Kipper, Pritschen- und Kofferfahrzeuge",
          "Transporter und leichte Nutzfahrzeuge",
        ],
      },
      {
        h2: "Der Ablauf",
        bullets: [
          "Fahrzeugdaten nennen: Marke, Baujahr, Laufleistung, Zustand",
          "Bewertung und Angebot in 1–3 Werktagen",
          "Vertrag abschließen – das Kennzeichen bleibt in der Regel bestehen",
          "Auszahlung, der LKW fährt weiter",
        ],
        paragraphs: [
          "Mehrere Fahrzeuge? Lesen Sie, wie Sie [Kapital aus dem ganzen Fuhrpark freisetzen](/ratgeber/kapital-aus-fuhrpark-freisetzen). Alle Infos zur Fahrzeugbeleihung: [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback).",
        ],
      },
    ],
    faq: [
      { q: "Kann ich auch einen gebrauchten LKW beleihen?", a: "Ja. Entscheidend ist der aktuelle Marktwert, nicht allein das Alter." },
      { q: "Bleibt der LKW im Einsatz?", a: "Ja. Der LKW bleibt ohne Unterbrechung auf der Straße – Ihre Touren laufen weiter." },
      { q: "Brauche ich eine gute Schufa?", a: "Nein. Über Master Leasing ist Sale & Leaseback ohne Schufa-Abfrage möglich." },
    ],
  },
  {
    slug: "sale-and-leaseback-landwirtschaft",
    topic: "slb",
    image: IMG_AGRAR,
    question: "Lohnt sich Sale & Leaseback für Landwirte?",
    seoTitle: "Sale and Leaseback für Landwirte – lohnt sich das? | Master Leasing",
    description:
      "Wann sich Sale & Leaseback für landwirtschaftliche Betriebe lohnt: Liquidität vor der Saison, Investitionen und Engpässe überbrücken – mit Traktor und Landtechnik.",
    shortAnswer:
      "Für viele Landwirte lohnt sich Sale & Leaseback, weil Ausgaben und Einnahmen zeitlich weit auseinanderliegen. Sie verkaufen eine bezahlte Maschine an eine Leasinggesellschaft, leasen sie zurück und haben sofort Kapital für Saatgut, Pacht oder Investitionen. Die Technik bleibt auf dem Hof im Einsatz – ohne Bank und ohne Schufa-Abfrage.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Wann es sich lohnt",
        bullets: [
          "Vor der Saison, wenn Betriebsmittel vorfinanziert werden müssen",
          "Nach einer schwachen Ernte oder bei niedrigen Erzeugerpreisen",
          "Für Investitionen in Stall, Hofstelle oder neue Technik",
          "Wenn die Bank keinen weiteren Kredit gibt",
          "Bei Lohnunternehmern mit großem Maschinenpark",
        ],
      },
      {
        h2: "Wann es sich eher nicht lohnt",
        paragraphs: [
          "Wenn Sie nur einen sehr kleinen Betrag brauchen oder die Maschine ohnehin bald verkaufen wollen, gibt es oft einfachere Wege. Sale & Leaseback ist auch kein Ersatz für eine dauerhaft unwirtschaftliche Kostenstruktur. Wir sagen Ihnen ehrlich, ob es für Ihren Betrieb passt. Brauchen Sie eine neue Maschine statt Kapital, ist [Traktor leasen ohne Schufa](/ratgeber/traktor-leasen-ohne-schufa) oft der bessere Weg.",
        ],
      },
      {
        h2: "Was Landwirte konkret davon haben",
        bullets: [
          "Liquidität genau dann, wenn sie gebraucht wird",
          "Keine Maschine fällt in der Saison aus",
          "Feste, planbare Raten als Betriebsausgaben",
          "Unabhängigkeit von Hausbank und Kreditrahmen",
        ],
        paragraphs: [
          "Wie das Beleihen konkret funktioniert, lesen Sie unter [Traktor und Landmaschinen beleihen](/ratgeber/traktor-landmaschinen-beleihen). Für Neuanschaffungen: [Landmaschinen-Leasing](/landmaschinen-leasing).",
        ],
      },
    ],
    faq: [
      { q: "Welche Maschinen eignen sich am besten?", a: "Maschinen mit hohem Marktwert wie Traktoren, Mähdrescher oder Häcksler. Aber auch kleinere Technik kann einbezogen werden." },
      { q: "Geht das auch für Lohnunternehmer?", a: "Ja. Gerade Lohnunternehmer mit großem Maschinenpark können so gezielt Kapital freisetzen." },
      { q: "Wie schnell bekomme ich ein Angebot?", a: "In der Regel innerhalb von 1–3 Werktagen nach Ihrer Anfrage – rechtzeitig vor der Saison." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // Leasing ohne Schufa
  // Hinweis: Tarife LSZ15–LSZ50 = Leasingsonderzahlung 15–50 % (AGB),
  // Vermittlungsgebühr 2,9–4,9 % erst nach Leasingzusage fällig (AGB § 7).
  // ══════════════════════════════════════════════════════════════════
  {
    slug: "schnellste-leasing-zusage",
    topic: "schufa",
    question: "Welcher Leasinganbieter gibt die schnellste Zusage?",
    seoTitle: "Leasing mit schneller Zusage – oft in 24 Stunden | Master Leasing",
    description:
      "Leasing schnell bekommen: Warum Banken oft lange brauchen und wie Gewerbekunden ohne Schufa-Abfrage oft innerhalb von 24 Stunden eine Leasingzusage erhalten.",
    shortAnswer:
      "Am schnellsten sind Leasinganbieter, die ohne klassische Bankprüfung und ohne Schufa-Abfrage entscheiden. Bei Master Leasing liegt die Leasingzusage für Gewerbekunden oft schon innerhalb von 24 Stunden vor. Bank- und Herstellerleasing brauchen dafür meist deutlich länger, weil Bilanzen, Bankauskunft und Schufa ausführlich geprüft werden.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum Leasinganfragen oft so lange dauern",
        bullets: [
          "Schufa- und Bankauskunft werden eingeholt",
          "Bilanzen, BWA und Steuerunterlagen werden angefordert",
          "Die Entscheidung läuft über mehrere Stellen",
          "Schon kleine Auffälligkeiten in der Bonität führen zur Ablehnung",
        ],
      },
      {
        h2: "So geht es schneller",
        paragraphs: [
          "Bei Master Leasing entfallen Schufa-Abfrage und Bankauskunft. Die Leasingentscheidung basiert auf Ihrer Selbstauskunft, den eingereichten Unterlagen und dem Fahrzeug selbst. Dadurch ist der Prozess schlank – die Zusage liegt oft innerhalb von 24 Stunden vor. Das gilt auch, wenn [die Bank die Finanzierung bereits abgelehnt hat](/ratgeber/bank-hat-finanzierung-abgelehnt).",
        ],
        table: {
          head: ["Anbieter", "Typische Dauer", "Schufa-Abfrage"],
          rows: [
            ["Master Leasing", "Oft innerhalb von 24 Stunden", "Nein"],
            ["Bank-Leasing", "Mehrere Tage bis Wochen", "Ja"],
            ["Hersteller-Leasing", "Mehrere Tage", "Ja"],
          ],
        },
      },
      {
        h2: "Damit es wirklich schnell geht",
        bullets: [
          "Wunschfahrzeug mit Angebot oder Link bereithalten",
          "Gewerbenachweis bzw. Handelsregisterauszug zur Hand haben",
          "Gewünschte Laufzeit und Sonderzahlung überlegen",
          "Für kurze Rückfragen erreichbar sein",
        ],
        paragraphs: [
          "Welche Unterlagen genau nötig sind, lesen Sie im Beitrag [Unterlagen für Leasing ohne Schufa](/ratgeber/unterlagen-leasing-ohne-schufa). Speziell für PKW: [Auto leasen trotz negativer Schufa](/auto-leasen-trotz-negativer-schufa).",
        ],
      },
    ],
    faq: [
      { q: "Wie schnell bekomme ich das Fahrzeug nach der Zusage?", a: "Je nach Fahrzeug und Händler meist innerhalb weniger Werktage. Sie haben freie Fahrzeug- und Händlerwahl." },
      { q: "Gilt die schnelle Zusage auch bei negativer Schufa?", a: "Ja. Da keine Schufa-Abfrage stattfindet, beeinflusst ein Eintrag die Bearbeitung nicht." },
      { q: "Für wen gilt das Angebot?", a: "Für gewerbliche Kunden: Selbstständige, Freiberufler, Kleinunternehmer, GmbHs und Existenzgründer." },
    ],
  },
  {
    slug: "leasing-fuer-start-ups",
    topic: "schufa",
    question: "Leasing für Start-ups: Wer least Fahrzeuge und Maschinen ohne Bonitätshistorie?",
    seoTitle: "Leasing für Start-ups & Existenzgründer – ohne Schufa | Master Leasing",
    description:
      "Junge Firma ohne Bilanzen? So bekommen Start-ups und Existenzgründer Fahrzeug- und Maschinenleasing ohne Schufa-Abfrage und ohne Bonitätshistorie.",
    shortAnswer:
      "Start-ups und Existenzgründer scheitern bei Banken oft an fehlenden Bilanzen und fehlender Bonitätshistorie. Master Leasing vermittelt Leasing ohne Schufa-Abfrage und ohne Bankauskunft – auch für junge Unternehmen. Geleast werden können PKW, Transporter, LKW, Maschinen und Geräte, neu oder gebraucht. Die Zusage liegt oft innerhalb von 24 Stunden vor.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum Banken Gründern selten Leasing geben",
        paragraphs: [
          "Banken bewerten vor allem die Vergangenheit: mehrere Jahresabschlüsse, stabile Umsätze, eine saubere Schufa. Ein Start-up hat genau das noch nicht. Die Folge: Ablehnung, obwohl Aufträge da sind und das Fahrzeug dringend gebraucht wird. Welche Nachweise Gründer stattdessen brauchen, steht in [Unterlagen für Leasing ohne Schufa](/ratgeber/unterlagen-leasing-ohne-schufa).",
        ],
      },
      {
        h2: "Was Start-ups leasen können",
        bullets: [
          "Firmenwagen und Transporter für Service und Lieferung",
          "LKW und Nutzfahrzeuge für Logistik",
          "Maschinen und Geräte, z. B. für Bau, Handwerk und Produktion",
          "Neu- und Gebrauchtfahrzeuge aller Marken",
        ],
        paragraphs: [
          "Mehr zum Leasing von Maschinen und Geräten finden Sie unter [Geräteleasing](/geraeteleasing).",
        ],
      },
      {
        h2: "Vorteile für junge Unternehmen",
        bullets: [
          "Kapital bleibt für Wachstum und Personal im Unternehmen",
          "Leasingraten als Betriebsausgaben absetzbar",
          "Ohne Schufa-Abfrage und ohne Bankauskunft",
          "Zusage oft innerhalb von 24 Stunden",
        ],
        paragraphs: [
          "Wenn die Bank bereits abgelehnt hat: [Bank hat die Finanzierung abgelehnt – was nun?](/ratgeber/bank-hat-finanzierung-abgelehnt)",
        ],
      },
    ],
    faq: [
      { q: "Kann ich direkt nach der Gründung leasen?", a: "Ja, Master Leasing ist auch für Existenzgründer geeignet. Welche Unterlagen nötig sind, klären wir im persönlichen Gespräch." },
      { q: "Brauche ich Jahresabschlüsse?", a: "Nicht unbedingt. Gerade junge Unternehmen haben noch keine Abschlüsse – wir prüfen, was für Ihre Situation möglich ist." },
      { q: "Gilt das auch für Einzelunternehmer?", a: "Ja. Leasing über Master Leasing richtet sich an alle gewerblichen Kunden – vom Einzelunternehmer bis zur GmbH." },
    ],
  },
  {
    slug: "leasing-trotz-schlechter-bonitaet",
    topic: "schufa",
    question: "Gibt es Leasing für Kleinunternehmer und Selbstständige mit schlechter Bonität?",
    seoTitle: "Leasing trotz schlechter Bonität für Selbstständige | Master Leasing",
    description:
      "Schlechte Bonität, Schufa-Eintrag oder Bank-Absage? So bekommen Kleinunternehmer und Selbstständige trotzdem Fahrzeugleasing – ohne Schufa-Abfrage.",
    shortAnswer:
      "Ja. Master Leasing vermittelt Leasing für Kleinunternehmer und Selbstständige auch bei schlechter Bonität – ohne Schufa-Abfrage und ohne Bankauskunft. Ein negativer Schufa-Eintrag ist damit kein Ausschlussgrund. Geleast werden PKW, Transporter, LKW und Maschinen, neu oder gebraucht. Eine Zusage gibt es oft innerhalb von 24 Stunden.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum schlechte Bonität bei Banken das Aus bedeutet",
        paragraphs: [
          "Schon ein einzelner Schufa-Eintrag, ein schwaches Geschäftsjahr oder eine kurze Selbstständigkeit reicht, damit eine Bank ablehnt. Für Kleinunternehmer ist das besonders hart – sie brauchen ihr Fahrzeug, um überhaupt Umsatz zu machen. Was Sie nach einer Absage tun können, lesen Sie unter [Bank hat die Finanzierung abgelehnt](/ratgeber/bank-hat-finanzierung-abgelehnt).",
        ],
      },
      {
        h2: "So funktioniert Leasing trotz schlechter Bonität",
        bullets: [
          "Keine Schufa-Abfrage und kein Schufa-Eintrag",
          "Keine Bankauskunft erforderlich",
          "Entscheidung auf Basis Ihrer Selbstauskunft und Unterlagen",
          "Freie Fahrzeug- und Händlerwahl",
          "Unbegrenzte Kilometer",
        ],
        paragraphs: [
          "Speziell für PKW: [Auto leasen trotz negativer Schufa](/auto-leasen-trotz-negativer-schufa) und [Gebrauchtwagen ohne Schufa leasen](/ratgeber/gebrauchtwagen-leasing-ohne-schufa). Woran Sie einen seriösen Anbieter erkennen: [Ist Leasing ohne Schufa seriös?](/ratgeber/ist-leasing-ohne-schufa-serioes)",
        ],
      },
      {
        h2: "Für wen das Angebot gedacht ist",
        bullets: [
          "Kleinunternehmer und Einzelunternehmer",
          "Handwerker, Dienstleister und Freiberufler",
          "GmbHs und UGs",
          "Existenzgründer",
        ],
        paragraphs: [
          "Das Angebot richtet sich ausschließlich an gewerbliche Kunden. Eine rein private Nutzung ohne gewerblichen Bezug ist nicht möglich.",
        ],
      },
    ],
    faq: [
      { q: "Wird bei der Anfrage die Schufa abgefragt?", a: "Nein. Es findet keine Schufa-Abfrage statt und es entsteht kein Eintrag." },
      { q: "Ist das teurer als normales Leasing?", a: "Die Konditionen hängen vom Fahrzeug, der Laufzeit, der Sonderzahlung und Ihrer Situation ab. Sie erhalten vorab ein transparentes Angebot und entscheiden dann in Ruhe." },
      { q: "Welche Fahrzeuge sind möglich?", a: "PKW, Transporter, LKW, Landmaschinen, Schlepper und Geräte – neu oder gebraucht, mit freier Händlerwahl." },
    ],
  },
  {
    slug: "unterlagen-leasing-ohne-schufa",
    topic: "schufa",
    question: "Welche Unterlagen brauche ich für Leasing ohne Schufa?",
    seoTitle: "Unterlagen für Leasing ohne Schufa – die Checkliste | Master Leasing",
    description:
      "Welche Unterlagen braucht man für Leasing ohne Schufa? Checkliste für Gewerbekunden: Selbstauskunft, Nachweise, Fahrzeugdaten – und was im Vergleich zum Bank-Leasing wegfällt.",
    shortAnswer:
      "Für Leasing ohne Schufa brauchen Gewerbekunden deutlich weniger Unterlagen als bei einer Bank. In der Regel genügen eine Selbstauskunft, ein Ausweis, ein Gewerbenachweis oder Handelsregisterauszug und die Angaben zum Wunschfahrzeug. Schufa-Auskunft und Bankauskunft entfallen. Welche Unterlagen im Einzelfall noch nötig sind, klären wir nach Ihrer Anfrage persönlich.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Checkliste: Diese Unterlagen sollten Sie bereithalten",
        bullets: [
          "Ausgefüllte Selbstauskunft",
          "Personalausweis oder Reisepass",
          "Gewerbeanmeldung oder Handelsregisterauszug",
          "Angebot, Link oder Daten zum Wunschfahrzeug",
          "Gewünschte Laufzeit und Höhe der Sonderzahlung – mehr dazu unter [Leasing ohne Schufa und ohne Anzahlung?](/ratgeber/leasing-ohne-schufa-ohne-anzahlung)",
          "Je nach Situation: aktuelle Geschäftsunterlagen",
        ],
        paragraphs: [
          "Gründer ohne Jahresabschlüsse finden Hinweise im Beitrag [Leasing für Start-ups](/ratgeber/leasing-fuer-start-ups).",
        ],
      },
      {
        h2: "Was im Vergleich zur Bank wegfällt",
        table: {
          head: ["Unterlage", "Bank-Leasing", "Master Leasing"],
          rows: [
            ["Schufa-Auskunft", "Ja", "Nein"],
            ["Bankauskunft", "Ja", "Nein"],
            ["Mehrere Jahresabschlüsse", "Meist ja", "Je nach Situation"],
          ],
        },
      },
      {
        h2: "Tipps für eine schnelle Zusage",
        bullets: [
          "Unterlagen vollständig und gut lesbar einreichen",
          "Fahrzeug möglichst konkret benennen",
          "Angaben in der Selbstauskunft wahrheitsgemäß und belegbar machen",
          "Für kurze Rückfragen erreichbar sein",
        ],
        paragraphs: [
          "Mit vollständigen Unterlagen liegt die Zusage oft innerhalb von 24 Stunden vor – mehr dazu im Beitrag [Leasing mit schneller Zusage](/ratgeber/schnellste-leasing-zusage).",
        ],
      },
    ],
    faq: [
      { q: "Brauche ich als Existenzgründer andere Unterlagen?", a: "Teilweise. Da noch keine Abschlüsse vorliegen, schauen wir gemeinsam, welche Nachweise für Ihre Situation sinnvoll sind." },
      { q: "Wird meine Schufa trotzdem geprüft?", a: "Nein. Bei Master Leasing gibt es keine Schufa-Abfrage und keine Bankauskunft." },
      { q: "Wie lange dauert die Prüfung der Unterlagen?", a: "Die Durchsicht dauert meist unter 30 Minuten. Die Zusage liegt oft innerhalb von 24 Stunden vor." },
    ],
  },
  {
    slug: "ist-leasing-ohne-schufa-serioes",
    topic: "schufa",
    question: "Ist Leasing ohne Schufa seriös?",
    seoTitle: "Ist Leasing ohne Schufa seriös? So erkennen Sie gute Anbieter | Master Leasing",
    description:
      "Leasing ohne Schufa – seriös oder Abzocke? Woran Sie seriöse Anbieter erkennen, welche Warnsignale es gibt und worauf Gewerbekunden achten sollten.",
    shortAnswer:
      "Leasing ohne Schufa ist seriös, wenn der Anbieter transparent arbeitet: mit klarem Vertrag, fester Rate, vorab genannten Kosten und ohne Vorkasse. Statt der Schufa werden Selbstauskunft, Unterlagen und das Fahrzeug geprüft. Vorsicht ist geboten bei Anbietern, die Geld vor der Leasingzusage verlangen oder keine Adresse und keinen festen Ansprechpartner haben.",
    published: D,
    updated: D,
    readingMinutes: 4,
    sections: [
      {
        h2: "Warum Leasing ohne Schufa überhaupt funktioniert",
        paragraphs: [
          "Beim Leasing bleibt das Fahrzeug Eigentum der Leasinggesellschaft und dient damit selbst als Sicherheit. Zusätzlich sichert eine Leasingsonderzahlung das Risiko ab. Deshalb kann eine Leasinggesellschaft auch ohne Schufa-Abfrage entscheiden – auf Basis der eingereichten [Unterlagen](/ratgeber/unterlagen-leasing-ohne-schufa) und des Fahrzeugs. Warum die Sonderzahlung dazugehört, erklärt [Leasing ohne Schufa und ohne Anzahlung?](/ratgeber/leasing-ohne-schufa-ohne-anzahlung)",
        ],
      },
      {
        h2: "Daran erkennen Sie seriöse Anbieter",
        bullets: [
          "Vollständiges Impressum mit Adresse und Ansprechpartner",
          "Persönliche Beratung statt anonymer Hotline",
          "Schriftliches Angebot mit Rate, Laufzeit, Sonderzahlung und allen Gebühren",
          "Keine Zahlung vor der Leasingzusage",
          "Klare, jederzeit einsehbare AGB",
        ],
      },
      {
        h2: "Warnsignale",
        bullets: [
          "Vorkasse oder „Bearbeitungsgebühr“, bevor überhaupt eine Zusage vorliegt",
          "Garantierte Zusage ohne jede Prüfung",
          "Kein Impressum, nur Handynummer oder Messenger",
          "Druck, sofort zu unterschreiben",
        ],
      },
      {
        h2: "So arbeitet Master Leasing",
        paragraphs: [
          "Master Leasing ist ein bankenunabhängiger Leasingmakler mit Sitz in Angermünde (Brandenburg) und arbeitet mit gewerblichen Kunden in ganz Deutschland. Die Vermittlungsgebühr steht immer vorher im Auftrag und wird erst nach der Leasingzusage fällig – kommt keine Zusage zustande, entstehen Ihnen keine Kosten. Alle Bedingungen finden Sie in unseren [AGB](/agb), mehr über uns unter [Über uns](/ueberuns).",
        ],
      },
    ],
    faq: [
      { q: "Ist Leasing ohne Schufa legal?", a: "Ja. Es gibt keine Pflicht, vor einem gewerblichen Leasingvertrag die Schufa abzufragen. Die Leasinggesellschaft entscheidet selbst, wie sie das Risiko bewertet." },
      { q: "Warum fragen Banken immer die Schufa ab?", a: "Banken arbeiten mit standardisierten Bonitätsprüfungen. Spezialisierte Leasingmakler wie Master Leasing setzen auf andere Kriterien, vor allem das Fahrzeug, die Sonderzahlung und Ihre Unterlagen." },
      { q: "Bekomme ich durch die Anfrage einen Schufa-Eintrag?", a: "Nein. Es findet keine Schufa-Abfrage statt, also entsteht auch kein Eintrag." },
    ],
  },
  {
    slug: "bank-hat-finanzierung-abgelehnt",
    topic: "schufa",
    question: "Meine Bank hat die Finanzierung abgelehnt – wie komme ich trotzdem an ein Firmenfahrzeug?",
    seoTitle: "Bank lehnt Finanzierung ab? So kommen Sie trotzdem an ein Firmenfahrzeug | Master Leasing",
    description:
      "Finanzierung abgelehnt? Diese Wege bleiben Selbstständigen und Unternehmen: Leasing ohne Schufa, Sale & Leaseback und Mietkauf – ohne Bankprüfung.",
    shortAnswer:
      "Wenn die Bank ablehnt, ist Leasing ohne Schufa der direkteste Weg zum Firmenfahrzeug: Die Leasinggesellschaft entscheidet ohne Schufa-Abfrage und ohne Bankauskunft – bei Master Leasing oft innerhalb von 24 Stunden. Besitzen Sie bereits bezahlte Fahrzeuge, können Sie zusätzlich per Sale & Leaseback Kapital freisetzen, etwa für die Sonderzahlung.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Typische Gründe für eine Ablehnung",
        bullets: [
          "Negativer Schufa-Eintrag",
          "Zu kurze Selbstständigkeit oder fehlende Jahresabschlüsse",
          "Schwaches Geschäftsjahr oder Verlust in der Bilanz",
          "Bereits ausgeschöpfter Kreditrahmen",
          "Branche gilt bei der Bank als riskant",
        ],
      },
      {
        h2: "Ihre Möglichkeiten nach der Absage",
        table: {
          head: ["Option", "Wie es funktioniert", "Ohne Schufa?"],
          rows: [
            ["Leasing ohne Schufa", "Neues oder gebrauchtes Fahrzeug gegen Monatsrate", "Ja, über Master Leasing"],
            ["Sale & Leaseback", "Vorhandenes Fahrzeug beleihen und weiterfahren", "Ja, über Master Leasing"],
            ["Mietkauf", "Feste Raten, am Ende gehört das Fahrzeug Ihnen", "Ja, über Master Leasing"],
          ],
        },
      },
      {
        h2: "Was Sie jetzt tun sollten",
        bullets: [
          "Nicht wahllos bei vielen Banken nacheinander anfragen",
          "Fahrzeugbedarf konkret festlegen",
          "Unverbindliche Anfrage bei Master Leasing stellen",
          "Bei vorhandenen Fahrzeugen: [Sale & Leaseback](/sale-und-leaseback) prüfen",
        ],
        paragraphs: [
          "Mehr zum Thema: [Leasing trotz schlechter Bonität](/ratgeber/leasing-trotz-schlechter-bonitaet) und [Alternativen zum Bankkredit](/ratgeber/alternativen-zum-bankkredit).",
        ],
      },
    ],
    faq: [
      { q: "Hat die Bank-Absage Einfluss auf meine Leasinganfrage?", a: "Nein. Master Leasing fragt weder die Schufa noch Ihre Bank ab." },
      { q: "Wie schnell komme ich an das Fahrzeug?", a: "Die Zusage liegt oft innerhalb von 24 Stunden vor, das Fahrzeug meist wenige Werktage später." },
      { q: "Kann ich auch einen Gebrauchtwagen leasen?", a: "Ja. Neue und gebrauchte Fahrzeuge aller Marken sind möglich, mit freier Händlerwahl." },
    ],
  },
  {
    slug: "gebrauchtwagen-leasing-ohne-schufa",
    topic: "schufa",
    image: "/images/fahrzeug-pkw.jpg",
    question: "Kann ich einen Gebrauchtwagen ohne Schufa leasen?",
    seoTitle: "Gebrauchtwagen leasen ohne Schufa – für Gewerbekunden | Master Leasing",
    description:
      "Gebrauchtwagen-Leasing ohne Schufa: freie Händlerwahl, alle Marken, unbegrenzte Kilometer. So leasen Selbstständige und Firmen gebrauchte Fahrzeuge ohne Bankprüfung.",
    shortAnswer:
      "Ja. Bei Master Leasing können Gewerbekunden auch Gebrauchtwagen ohne Schufa leasen. Sie wählen das Fahrzeug bei einem Händler Ihrer Wahl, wir vermitteln das Leasing ohne Schufa-Abfrage und ohne Bankauskunft. Möglich sind PKW, Transporter und Nutzfahrzeuge aller Marken – mit unbegrenzten Kilometern und einer Zusage oft innerhalb von 24 Stunden.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum ein Gebrauchtwagen oft die bessere Wahl ist",
        bullets: [
          "Deutlich niedrigerer Preis als ein Neuwagen – und damit eine geringere Rate",
          "Sofort verfügbar statt langer Lieferzeit",
          "Der größte Wertverlust ist bereits passiert",
        ],
      },
      {
        h2: "So funktioniert Gebrauchtwagen-Leasing ohne Schufa",
        bullets: [
          "Wunschfahrzeug beim Händler Ihrer Wahl aussuchen",
          "Angebot oder Link an uns senden",
          "Leasingzusage ohne Schufa, oft innerhalb von 24 Stunden – [warum das so schnell geht](/ratgeber/schnellste-leasing-zusage)",
          "Zulassung auf Ihre Firma bzw. Ihren Namen – und losfahren",
        ],
        paragraphs: [
          "Eine Auswahl an Fahrzeugen finden Sie auch direkt in unserem [Fahrzeugbestand](/fahrzeuge).",
        ],
      },
      {
        h2: "Die Vorteile",
        bullets: [
          "Freie Fahrzeug- und Händlerwahl",
          "Unbegrenzte Kilometer",
          "Kein Gutachten, keine Nachberechnung – der Restwert steht von Anfang an fest",
          "Keine Schufa-Prüfung und kein Eintrag",
        ],
        paragraphs: [
          "Alle Infos für PKW: [Auto leasen trotz negativer Schufa](/auto-leasen-trotz-negativer-schufa). Zur Sonderzahlung: [Leasing ohne Schufa und ohne Anzahlung?](/ratgeber/leasing-ohne-schufa-ohne-anzahlung)",
        ],
      },
    ],
    faq: [
      { q: "Wie alt darf der Gebrauchtwagen sein?", a: "Das hängt vom Fahrzeug und seinem Wert ab. Nennen Sie uns Ihr Wunschfahrzeug – wir prüfen es individuell." },
      { q: "Gibt es eine Kilometerbegrenzung?", a: "Nein. Bei Master Leasing fahren Sie so viele Kilometer, wie Sie möchten." },
      { q: "Kann ich auch privat einen Gebrauchtwagen leasen?", a: "Das Angebot richtet sich an gewerbliche Kunden – Selbstständige, Freiberufler und Unternehmen." },
    ],
  },
  {
    slug: "traktor-leasen-ohne-schufa",
    topic: "schufa",
    image: IMG_AGRAR,
    question: "Kann ich einen Traktor ohne Schufa leasen?",
    seoTitle: "Traktor leasen ohne Schufa – für Landwirte & Lohnunternehmer | Master Leasing",
    description:
      "Traktor ohne Schufa leasen: neu oder gebraucht, alle Marken, bankenunabhängig. So bekommen Landwirte und Lohnunternehmer ihren Schlepper ohne Bankprüfung.",
    shortAnswer:
      "Ja. Master Leasing vermittelt Traktor-Leasing ohne Schufa-Abfrage und ohne klassische Bankprüfung – für Landwirte, Lohnunternehmer und Gewerbebetriebe in ganz Deutschland. Möglich sind neue und gebrauchte Traktoren aller Marken, von Fendt bis John Deere. Neben Leasing gibt es auch Finanzierung und Mietkauf. Die Zusage liegt oft innerhalb von 24 Stunden vor.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum Landwirte ohne Schufa leasen",
        paragraphs: [
          "Gerade in der Landwirtschaft passen die Kriterien der Banken oft nicht: schwankende Erträge, hohe Investitionen, lange Zyklen. Ein schwaches Erntejahr reicht, damit die Bank vorsichtiger wird. Beim Leasing ohne Schufa steht dagegen der Traktor selbst im Mittelpunkt. Ob sich für vorhandene Maschinen eher Sale & Leaseback lohnt, lesen Sie unter [Lohnt sich Sale & Leaseback für Landwirte?](/ratgeber/sale-and-leaseback-landwirtschaft)",
        ],
      },
      {
        h2: "Ihre Optionen",
        table: {
          head: ["Option", "Ergebnis"],
          rows: [
            ["Traktor-Leasing", "Feste Rate, der Traktor wird genutzt, Liquidität bleibt erhalten"],
            ["Traktor-Finanzierung", "Feste Laufzeit, am Ende gehört der Traktor Ihnen"],
            ["Mietkauf", "Feste Raten und Eigentum am Vertragsende"],
            ["Sale & Leaseback", "Vorhandenen Traktor beleihen und weiterfahren"],
          ],
        },
      },
      {
        h2: "Was Sie mitbringen sollten",
        bullets: [
          "Modell, Baujahr und Preis des Wunschtraktors",
          "Nachweis Ihres landwirtschaftlichen oder gewerblichen Betriebs",
          "Gewünschte Laufzeit",
        ],
        paragraphs: [
          "Alle Details zu Konditionen und Ablauf finden Sie auf unserer Seite [Traktor-Leasing](/traktor-leasing). Andere Landtechnik? [Landmaschinen-Leasing](/landmaschinen-leasing). Vorhandene Maschinen beleihen: [Traktor und Landmaschinen beleihen](/ratgeber/traktor-landmaschinen-beleihen).",
        ],
      },
    ],
    faq: [
      { q: "Kann ich auch einen gebrauchten Traktor ohne Schufa leasen?", a: "Ja. Auch gebrauchte Traktoren, Trecker und Schlepper sind möglich – markenunabhängig." },
      { q: "Welche Marken sind möglich?", a: "Alle gängigen Marken, z. B. Fendt, John Deere, Deutz-Fahr, Massey Ferguson, Case IH, New Holland und Claas." },
      { q: "Kann ich einen vorhandenen Traktor beleihen?", a: "Ja, über Sale & Leaseback / Fahrzeugbeleihung: Sie verkaufen den Traktor an eine Leasinggesellschaft, leasen ihn direkt zurück und fahren weiter." },
    ],
  },
  {
    slug: "leasing-ohne-schufa-ohne-anzahlung",
    topic: "schufa",
    question: "Leasing ohne Schufa und ohne Anzahlung – geht das?",
    seoTitle: "Leasing ohne Schufa und ohne Anzahlung – geht das? | Master Leasing",
    description:
      "Auto leasen ohne Schufa und ohne Anzahlung: Warum beim Leasing ohne Schufa meist eine Sonderzahlung nötig ist und wie Sie das Kapital dafür trotzdem aufbringen.",
    shortAnswer:
      "Komplett ohne Anzahlung ist Leasing ohne Schufa in der Regel nicht möglich. Weil keine Schufa-Abfrage stattfindet, sichert die Leasinggesellschaft ihr Risiko über eine Leasingsonderzahlung ab – bei Master Leasing je nach Tarif ab 15 Prozent des Fahrzeugpreises. Fehlt dafür das Kapital, lässt es sich oft per Sale & Leaseback aus einem vorhandenen Fahrzeug freisetzen.",
    published: D,
    updated: D,
    readingMinutes: 3,
    sections: [
      {
        h2: "Warum Leasing ohne Schufa eine Sonderzahlung braucht",
        paragraphs: [
          "Bei klassischem Leasing prüft die Bank Ihre Bonität ausführlich. Beim Leasing ohne Schufa entfällt diese Prüfung – das Risiko wird stattdessen über das Fahrzeug und eine Leasingsonderzahlung abgesichert. Das ist der Grund, warum Angebote mit „0 € Anzahlung und ohne Schufa“ meist unrealistisch sind – woran Sie seriöse Anbieter erkennen, steht in [Ist Leasing ohne Schufa seriös?](/ratgeber/ist-leasing-ohne-schufa-serioes)",
        ],
      },
      {
        h2: "Die Tarife bei Master Leasing",
        paragraphs: [
          "Die Tarife unterscheiden sich vor allem durch die Höhe der Leasingsonderzahlung. Die Zahl im Tarifnamen steht für den Prozentsatz:",
        ],
        table: {
          head: ["Tarif", "Leasingsonderzahlung", "Wirkung auf die Rate"],
          rows: [
            ["LSZ15", "15 %", "Geringste Sonderzahlung"],
            ["LSZ30 / LSZ35", "30–35 %", "Mittlere Sonderzahlung, niedrigere Rate"],
            ["LSZ40 bis LSZ50", "40–50 %", "Hohe Sonderzahlung, niedrigste Rate"],
          ],
        },
      },
      {
        h2: "Tipp: Sonderzahlung über Sale & Leaseback finanzieren",
        paragraphs: [
          "Sie brauchen ein neues Fahrzeug, haben aber kein freies Kapital für die Sonderzahlung? Wenn Sie bereits ein bezahltes Fahrzeug oder eine Maschine besitzen, können Sie es per [Sale & Leaseback / Fahrzeugbeleihung](/sale-und-leaseback) beleihen und das freigesetzte Kapital für die Sonderzahlung nutzen – ohne Bank und ohne Schufa.",
        ],
        bullets: [
          "Vorhandenes Fahrzeug beleihen und weiterfahren – siehe [Auto beleihen und weiterfahren](/ratgeber/auto-beleihen-und-weiterfahren)",
          "Freigesetztes Kapital als Leasingsonderzahlung einsetzen",
          "Neues Fahrzeug ohne Schufa leasen",
        ],
      },
    ],
    faq: [
      { q: "Wie hoch ist die Sonderzahlung mindestens?", a: "Je nach Tarif ab 15 Prozent des Fahrzeugpreises. Welcher Tarif zu Ihnen passt, sehen Sie im individuellen Angebot." },
      { q: "Welche Laufzeiten sind möglich?", a: "Üblich sind Laufzeiten zwischen 24 und 60 Monaten. Die passende Laufzeit stimmen wir mit Ihnen ab." },
      { q: "Wird für die Sonderzahlung die Schufa geprüft?", a: "Nein. Bei Master Leasing findet keine Schufa-Abfrage statt – unabhängig vom Tarif." },
    ],
  },
];

// Kuratierte Querverweise je Beitrag (inkl. Brücken zwischen den Themen)
export const relatedSlugs: Record<string, string[]> = {
  "alternativen-zum-bankkredit": ["kurzfristig-liquiditaet-fuer-unternehmen", "wie-funktioniert-sale-and-leaseback", "bank-hat-finanzierung-abgelehnt"],
  "kurzfristig-liquiditaet-fuer-unternehmen": ["kapital-aus-fuhrpark-freisetzen", "alternativen-zum-bankkredit", "auto-beleihen-und-weiterfahren"],
  "kapital-aus-fuhrpark-freisetzen": ["lkw-beleihen", "kurzfristig-liquiditaet-fuer-unternehmen", "wie-funktioniert-sale-and-leaseback"],
  "auto-beleihen-und-weiterfahren": ["auto-verpfaenden-oder-sale-and-leaseback", "wie-funktioniert-sale-and-leaseback", "leasing-ohne-schufa-ohne-anzahlung"],
  "wie-funktioniert-sale-and-leaseback": ["auto-beleihen-und-weiterfahren", "auto-verpfaenden-oder-sale-and-leaseback", "alternativen-zum-bankkredit"],
  "auto-verpfaenden-oder-sale-and-leaseback": ["auto-beleihen-und-weiterfahren", "wie-funktioniert-sale-and-leaseback", "kurzfristig-liquiditaet-fuer-unternehmen"],
  "traktor-landmaschinen-beleihen": ["sale-and-leaseback-landwirtschaft", "traktor-leasen-ohne-schufa", "kapital-aus-fuhrpark-freisetzen"],
  "lkw-beleihen": ["kapital-aus-fuhrpark-freisetzen", "auto-beleihen-und-weiterfahren", "kurzfristig-liquiditaet-fuer-unternehmen"],
  "sale-and-leaseback-landwirtschaft": ["traktor-landmaschinen-beleihen", "traktor-leasen-ohne-schufa", "kurzfristig-liquiditaet-fuer-unternehmen"],
  "schnellste-leasing-zusage": ["unterlagen-leasing-ohne-schufa", "bank-hat-finanzierung-abgelehnt", "ist-leasing-ohne-schufa-serioes"],
  "leasing-fuer-start-ups": ["unterlagen-leasing-ohne-schufa", "leasing-trotz-schlechter-bonitaet", "schnellste-leasing-zusage"],
  "leasing-trotz-schlechter-bonitaet": ["bank-hat-finanzierung-abgelehnt", "ist-leasing-ohne-schufa-serioes", "gebrauchtwagen-leasing-ohne-schufa"],
  "unterlagen-leasing-ohne-schufa": ["schnellste-leasing-zusage", "leasing-fuer-start-ups", "leasing-ohne-schufa-ohne-anzahlung"],
  "ist-leasing-ohne-schufa-serioes": ["leasing-ohne-schufa-ohne-anzahlung", "unterlagen-leasing-ohne-schufa", "leasing-trotz-schlechter-bonitaet"],
  "bank-hat-finanzierung-abgelehnt": ["leasing-trotz-schlechter-bonitaet", "alternativen-zum-bankkredit", "schnellste-leasing-zusage"],
  "gebrauchtwagen-leasing-ohne-schufa": ["leasing-ohne-schufa-ohne-anzahlung", "schnellste-leasing-zusage", "leasing-trotz-schlechter-bonitaet"],
  "traktor-leasen-ohne-schufa": ["traktor-landmaschinen-beleihen", "sale-and-leaseback-landwirtschaft", "unterlagen-leasing-ohne-schufa"],
  "leasing-ohne-schufa-ohne-anzahlung": ["auto-beleihen-und-weiterfahren", "ist-leasing-ohne-schufa-serioes", "gebrauchtwagen-leasing-ohne-schufa"],
};

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
