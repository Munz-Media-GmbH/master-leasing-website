import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ModalOpenButton from "@/components/ModalOpenButton";

export const metadata: Metadata = {
  title: "Landmaschinen-Leasing & Traktor-Finanzierung ohne Schufa | Master Leasing",
  description:
    "Landmaschinen leasen ohne Schufa: Traktoren, Mähdrescher, Anbaugeräte & Landtechnik – auch gebraucht. Traktor-Finanzierung & Sale & Leaseback für Liquidität. Zusage oft in 24 Stunden.",
  alternates: { canonical: "https://master-leasing.com/landmaschinen-leasing/" },
  robots: "follow, index",
};

const objects = [
  {
    title: "Traktoren & Schlepper",
    desc: "Standard-, Groß- und Kompaktschlepper aller Marken – neu oder gebraucht",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 34.1C194.3 58.5 164 89.6 160.1 128l-96.1 0c-17.7 0-32 14.3-32 32c0 12.6 7.3 23.5 18 28.8L32 288l0 112c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-112 32.6-99.2C120.3 200.8 128 212.5 128 226c0 43.7-33.1 79.7-75.7 84.1C38.7 311.8 32 320.4 32 330.5c0 11.1 9.5 19.9 20.5 18.9C103.9 344.9 144 300.3 144 246c0-21.3-6.7-41.1-18.1-57.3L224 188.7l0 115.9c-14.1 12-23.2 29.9-23.8 49.9L192 362l-16 0c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l16 0 112 0 16 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-16 0-8.2-7.5c-.6-20-9.7-37.9-23.8-49.9l0-110.5L376 128c0-17.7-14.3-32-32-32l-16 0c-6.7-22.3-22.3-40.7-42.5-51.9L272 16zM256 96a64 64 0 1 1 0 128A64 64 0 1 1 256 96z" />
      </svg>
    ),
  },
  {
    title: "Mähdrescher & Erntetechnik",
    desc: "Mähdrescher, Feldhäcksler, Ballenpressen & Erntemaschinen",
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
        <path d="M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l273.2 0C403.6 12.9 424.3 0 448 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.2c19.1 11 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-273.2 0C108.4 499.1 87.7 512 64 512c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.2zM119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.2c9.7 5.6 17.8 13.7 23.4 23.4l273.2 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.2c-9.7-5.6-17.8-13.7-23.4-23.4L119.4 96zM192 192c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64z" />
      </svg>
    ),
  },
  {
    title: "Anbau- & Bodengeräte",
    desc: "Pflüge, Sämaschinen, Feldspritzen, Grubber & Anbaugeräte",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 334.1C7.4 344.2 0 359.3 0 375.4C0 402.8 22.4 425.3 49.9 425.3c16 0 31.1-7.4 41.2-19.9L210.5 224c17 6.1 35.4 9.5 54.5 9.5c88.4 0 160-71.6 160-160z" />
      </svg>
    ),
  },
  {
    title: "Melk- & Stalltechnik",
    desc: "Melkroboter, Fütterungsanlagen & Stalleinrichtung",
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
        <path d="M384 96l0 224-256 0 0-224 256 0zM128 32C57.3 32 0 89.3 0 160L0 352c0 70.7 57.3 128 128 128l384 0c70.7 0 128-57.3 128-128l0-192c0-70.7-57.3-128-128-128L128 32zm32 64l256 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32L160 384c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32z" />
      </svg>
    ),
  },
  {
    title: "Transporter & Nutzfahrzeuge",
    desc: "Anhänger, Kipper, Ladewagen & landwirtschaftliche Nutzfahrzeuge",
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
        <path d="M112 0C50.1 0 0 50.1 0 112L0 336c0 44.2 35.8 80 80 80l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l16 0c26.5 0 48-21.5 48-48l0-48c0-33.9-17.9-63.6-44.8-80.2L512 96c0-53-43-96-96-96L112 0zM480 128l38.4 0c17.7 0 32 14.3 32 32l0 32-70.4 0 0-64zM192 464a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
      </svg>
    ),
  },
  {
    title: "Gebrauchte Landmaschinen",
    desc: "Auch für gebrauchte Landtechnik – flexibel und ohne Bonitätsprüfung",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z" />
      </svg>
    ),
  },
];

const advantages = [
  {
    title: "Liquidität für den Hof",
    lines: [
      "Investieren ohne Eigenkapital zu binden",
      "Betriebsmittel für Saat, Ernte & Vieh bleiben frei",
    ],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
        <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 1.2-9.2 2.4-13.7 3.6c-28.3 8.1-53.4 19.4-73.4 34.2c-1.4-.8-2.9-1.7-4.5-2.5C249.3 268.8 199 256 144 256c-59.6 0-112.5 14.9-148.8 38.2C-4.7 294.4 0 287.6 0 280l0-112c0-17.3 12.9-32.9 33.6-46.1c19.9-12.7 48.1-22.8 80.6-28.5c14.4-2.5 30-4 46.5-4.4zM192 336c5.8 0 11.5 .1 17.1 .4c-3.4 9.2-5.1 18.9-5.1 28.8c0 12.4 2.5 24.2 7.1 35.1C202.4 400.7 192 400 192 400c-59.1 0-112.3 13.4-148.7 35.6c-10.5 6.5-20.7 15-24.4 26.6L17 477c-.2-1-.3-2-.3-3l0-200c0-2.2 .2-4.4 .5-6.5C50.2 249.7 94.8 240 144 240c56.5 0 107.4 14.2 140.4 36.3c16.2 10.7 27.6 23.2 27.6 37.7c0 4-.7 7.9-2.1 11.7c-4.6 1.2-9.2 2.4-13.7 3.6c-28.3 8.1-53.4 19.4-73.4 34.2c-1.4-.8-2.9-1.7-4.5-2.5c-8.3-4.5-17.2-8.4-26.3-11.6zm26.1 80.9c0-1.6-.1-3.3-.1-4.9s.1-3.3 .1-4.9l0-71.9 0-68.6C257 313.6 288 304 320 304c56.5 0 107.4 14.2 140.4 36.3c16.2 10.7 27.6 23.2 27.6 37.7l0 161.3c-35.2 22.5-87.5 36.7-147 36.7C279.6 576 228.4 561.8 192 539.3l.1-122.4z" />
      </svg>
    ),
  },
  {
    title: "Ohne Bank & ohne Schufa",
    lines: [
      "Keine Bankprüfung, keine Schufa-Abfrage",
      "Bankenunabhängig – Zusage oft in 24 Stunden",
    ],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8z" />
      </svg>
    ),
  },
  {
    title: "Saisonal planbar",
    lines: [
      "Raten an Ernte- und Saisonzyklen anpassbar",
      "Leasingraten als Betriebsausgaben absetzbar",
    ],
    icon: (
      <svg viewBox="0 0 384 512" fill="currentColor" width="24" height="24">
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 224c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 240c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 304c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 368c-8.8 0-16-7.2-16-16z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Maschine benennen",
    duration: "5–10 Min.",
    desc: "Traktor, Mähdrescher oder Anbaugerät nennen – unverbindlich",
  },
  {
    number: "02",
    title: "Angebot erhalten",
    duration: "1–2 Werktage",
    desc: "Konditionen und Laufzeiten auf Ihren Betrieb zugeschnitten",
  },
  {
    number: "03",
    title: "Unterlagen prüfen",
    duration: "unter 30 Min.",
    desc: "Schlanker Prozess, ohne Bankauskunft und Papierberg",
  },
  {
    number: "04",
    title: "Maschine erhalten",
    duration: "3–7 Werktage",
    desc: "Lieferung oder Abholung – dann geht's aufs Feld",
  },
];

const faqItems = [
  {
    q: "Ist Landmaschinen-Leasing ohne Schufa möglich?",
    a: "Ja. Master Leasing vermittelt Landmaschinen-Leasing ohne Schufa-Abfrage und ohne klassische Bankprüfung – bankenunabhängig für Landwirte, Lohnunternehmer und Gewerbe in ganz Deutschland.",
  },
  {
    q: "Kann ich auch gebrauchte Traktoren oder Maschinen leasen?",
    a: "Ja. Auch gebrauchte Landtechnik – vom Schlepper bis zum Mähdrescher – lässt sich leasen oder finanzieren. Wir bewerten das Objekt individuell nach Zustand und Marktwert.",
  },
  {
    q: "Was ist der Unterschied zwischen Leasing, Finanzierung und Sale & Leaseback?",
    a: "Beim Leasing nutzen Sie die Maschine gegen feste Raten. Bei der Finanzierung erwerben Sie sie schrittweise. Beim Sale & Leaseback verkaufen Sie eine bereits vorhandene Maschine an die Leasinggesellschaft und leasen sie direkt zurück – so setzen Sie sofort gebundenes Kapital frei und fahren die Maschine weiter.",
  },
  {
    q: "Kann ich Kapital aus meinem bestehenden Maschinenpark freisetzen?",
    a: "Ja. Über Sale & Leaseback beleihen Sie vorhandene Traktoren oder Maschinen und erhalten kurzfristig Liquidität, ohne die Maschine abzugeben. Mehr dazu auf unserer Seite Sale & Leaseback.",
  },
  {
    q: "Wie schnell erhalte ich eine Zusage?",
    a: "In vielen Fällen liegt die Rückmeldung innerhalb von 24 Stunden vor. Der Prozess ist bewusst schlank gehalten, damit Sie zur Saison einsatzbereit sind.",
  },
  {
    q: "Ab welchem Wert lohnt sich das Leasing?",
    a: "Wir bearbeiten Anfragen ab einem Objektwert von ca. 5.000 €. Nach oben gibt es in der Regel keine feste Grenze – auch ganze Maschinenparks sind möglich.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "28px 24px",
};

export default function LandmaschinenLeasingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            paddingTop: "160px",
            paddingBottom: "100px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/fahrzeug-landwirtschaft.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(5,5,5,0.93) 0%, rgba(10,10,10,0.85) 50%, rgba(20,5,5,0.88) 100%)",
              zIndex: 1,
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <span className="overline">Landmaschinen-Leasing</span>
            <h1 style={{ color: "#fff", marginBottom: "20px", maxWidth: "760px" }}>
              Landmaschinen-Leasing{" "}
              <span style={{ color: "#E15C55" }}>ohne Schufa</span> –<br />
              Traktoren, Mähdrescher & Landtechnik
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
                maxWidth: "600px",
                marginBottom: "36px",
                lineHeight: 1.7,
              }}
            >
              Leasing und Finanzierung für Landtechnik – neu oder gebraucht,
              bankenunabhängig und ohne Bonitätsprüfung. Oder setzen Sie über
              Sale & Leaseback Kapital aus Ihrem bestehenden Maschinenpark frei.
              Leasingzusage oft schon in 24 Stunden.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <ModalOpenButton className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Jetzt anfragen
              </ModalOpenButton>
              <a href="tel:+4903331297792" className="btn-outline">
                03331 – 29 77 92
              </a>
            </div>
          </div>
        </section>

        {/* ── Section A: Was wir finanzieren ── */}
        <section
          className="section-pad"
          style={{
            background: "#101010",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Landtechnik</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Diese Landmaschinen{" "}
                <span style={{ color: "#E15C55" }}>leasen wir</span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "17px",
                  maxWidth: "600px",
                  margin: "16px auto 0",
                  lineHeight: 1.7,
                }}
              >
                Vom Schlepper bis zur Erntemaschine – wir finanzieren Landtechnik für
                Landwirte, Lohnunternehmer und Agrarbetriebe, schnell und ohne
                Bonitätsprüfung.
              </p>
            </div>

            <div
              className="ll-grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {objects.map((item, i) => (
                <div
                  key={item.title}
                  className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}
                  style={cardStyle}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: "rgba(225,92,85,0.12)",
                      border: "1px solid rgba(225,92,85,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E15C55",
                      marginBottom: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      margin: "0 0 8px",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "14px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section B: Leasing, Finanzierung & Sale & Leaseback ── */}
        <section
          className="section-pad"
          style={{
            background: "#0c0c0c",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="overline">Ihre Optionen</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Leasing, Finanzierung oder{" "}
                <span style={{ color: "#E15C55" }}>Kapital freisetzen</span>
              </h2>
            </div>

            <div
              style={{
                maxWidth: "780px",
                margin: "0 auto",
                color: "rgba(255,255,255,0.72)",
                fontSize: "16px",
                lineHeight: 1.85,
              }}
            >
              <p style={{ marginTop: 0 }}>
                <strong style={{ color: "#fff" }}>Traktor-Leasing &amp; Landmaschinen-Leasing:</strong>{" "}
                Sie nutzen die Maschine gegen planbare monatliche Raten, ohne den vollen
                Kaufpreis auf einmal zu stemmen. Ideal, um den Fuhrpark aktuell zu
                halten und Liquidität für Saatgut, Betriebsmittel und Personal zu
                behalten.
              </p>
              <p>
                <strong style={{ color: "#fff" }}>Traktor-Finanzierung:</strong> Wenn
                die Maschine am Ende Ihnen gehören soll, strukturieren wir eine
                Finanzierung mit fester Laufzeit – bankenunabhängig und ohne
                Schufa-Abfrage.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong style={{ color: "#fff" }}>Sale & Leaseback:</strong> Sie
                besitzen bereits Traktoren oder Maschinen? Dann verkaufen Sie diese an
                die Leasinggesellschaft und leasen sie direkt zurück. So setzen Sie
                sofort gebundenes Kapital frei und nutzen die Maschine ohne
                Unterbrechung weiter.{" "}
                <a href="/sale-und-leaseback/" style={{ color: "#E15C55" }}>
                  Mehr zu Sale &amp; Leaseback →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── Section C: Vorteile ── */}
        <section
          className="section-pad"
          style={{
            background: "#101010",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Ihre Vorteile</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Warum Landtechnik über{" "}
                <span style={{ color: "#E15C55" }}>Master Leasing</span>
              </h2>
            </div>

            <div
              className="ll-grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {advantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}
                  style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: "0" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      background: "rgba(225,92,85,0.12)",
                      border: "1px solid rgba(225,92,85,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E15C55",
                      marginBottom: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {adv.icon}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "19px",
                      margin: "0 0 16px",
                      lineHeight: "1.3",
                    }}
                  >
                    {adv.title}
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {adv.lines.map((line) => (
                      <li
                        key={line}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "15px",
                          lineHeight: "1.55",
                        }}
                      >
                        <svg
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          width="14"
                          height="14"
                          style={{ color: "#E15C55", marginTop: "3px", flexShrink: 0 }}
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section D: Ablauf ── */}
        <section
          className="section-pad"
          style={{
            background: "#0c0c0c",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Der Ablauf</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                So einfach kommt die{" "}
                <span style={{ color: "#E15C55" }}>Maschine aufs Feld</span>
              </h2>
            </div>

            <div
              className="ll-process-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "28px",
                  left: "calc(12.5% + 20px)",
                  right: "calc(12.5% + 20px)",
                  height: "1px",
                  background: "rgba(255,255,255,0.1)",
                  zIndex: 0,
                }}
              />
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "0 20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: i === 0 ? "#E15C55" : "#1a1a1a",
                      border: `2px solid ${i === 0 ? "#E15C55" : "rgba(255,255,255,0.12)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fff",
                      marginBottom: "24px",
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>
                  <p
                    style={{
                      color: "#E15C55",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: 0,
                      marginBottom: "8px",
                    }}
                  >
                    {step.duration}
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      margin: 0,
                      marginBottom: "10px",
                      lineHeight: "1.3",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="scroll-up" style={{ textAlign: "center", marginTop: "56px" }}>
              <ModalOpenButton className="btn-primary">
                <svg viewBox="0 0 256 512" fill="currentColor" width="14" height="14">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Unverbindlich anfragen
              </ModalOpenButton>
            </div>
          </div>
        </section>

        <CTABanner />

        {/* ── FAQ ── */}
        <section
          className="section-pad"
          style={{
            background: "#0c0c0c",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">FAQ</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Häufige{" "}
                <span style={{ color: "#E15C55" }}>Fragen zum Landmaschinen-Leasing</span>
              </h2>
            </div>

            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {faqItems.map((item, i) => (
                <details
                  key={item.q}
                  className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "22px 28px",
                      cursor: "pointer",
                      listStyle: "none",
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      lineHeight: "1.4",
                      gap: "16px",
                    }}
                  >
                    <span>{item.q}</span>
                    <svg
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      width="14"
                      height="14"
                      style={{ color: "#E15C55", flexShrink: 0 }}
                    >
                      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </summary>
                  <div
                    style={{
                      padding: "0 28px 24px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "rgba(255,255,255,0.6)",
                        margin: 0,
                        lineHeight: "1.75",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 1024px) {
            .ll-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
            .ll-process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
            .ll-process-grid > div { padding: 0 !important; }
          }
          @media (max-width: 640px) {
            .ll-grid-3 { grid-template-columns: 1fr !important; }
            .ll-process-grid { grid-template-columns: 1fr !important; }
          }
          details[open] summary svg:last-child { transform: rotate(180deg); }
          details summary svg { transition: transform 0.2s ease; }
          details summary::-webkit-details-marker { display: none; }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
