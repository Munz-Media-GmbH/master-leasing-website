import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ModalOpenButton from "@/components/ModalOpenButton";

export const metadata: Metadata = {
  title: "Traktor Leasing & Finanzierung ohne Schufa | Master Leasing",
  description:
    "Traktor leasen oder finanzieren – neu und gebraucht, alle Marken. Traktor-Finanzierung, Leasing & Mietkauf ohne Bank & Schufa. Auch Trecker & Schlepper. Zusage oft in 24 Stunden.",
  alternates: { canonical: "https://master-leasing.com/traktor-leasing/" },
  robots: "follow, index",
};

const options = [
  {
    title: "Traktor-Leasing",
    desc: "Traktor leasen gegen feste monatliche Rate – ideal, um den Fuhrpark aktuell zu halten und Liquidität zu schonen.",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 34.1C194.3 58.5 164 89.6 160.1 128l-96.1 0c-17.7 0-32 14.3-32 32c0 12.6 7.3 23.5 18 28.8L32 288l0 112c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-112 32.6-99.2C120.3 200.8 128 212.5 128 226c0 43.7-33.1 79.7-75.7 84.1C38.7 311.8 32 320.4 32 330.5c0 11.1 9.5 19.9 20.5 18.9C103.9 344.9 144 300.3 144 246c0-21.3-6.7-41.1-18.1-57.3L224 188.7l0 115.9c-14.1 12-23.2 29.9-23.8 49.9L192 362l-16 0c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l16 0 112 0 16 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-16 0-8.2-7.5c-.6-20-9.7-37.9-23.8-49.9l0-110.5L376 128c0-17.7-14.3-32-32-32l-16 0c-6.7-22.3-22.3-40.7-42.5-51.9L272 16zM256 96a64 64 0 1 1 0 128A64 64 0 1 1 256 96z" />
      </svg>
    ),
  },
  {
    title: "Traktor-Finanzierung",
    desc: "Traktor finanzieren mit fester Laufzeit – am Ende gehört die Maschine Ihnen. Bankenunabhängig, ohne Schufa-Abfrage.",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 26.2-59 48-160 48S64 266.2 64 240c0-18.3 14.7-35.1 39.5-48.6c-.7 4.3 15.2-9.3 57.2-30.3zM384 320c0 26.2-59 48-160 48S64 346.2 64 320l0-25.9C99.8 317.8 158.4 328 224 328s124.2-10.2 160-33.9l0 25.9zm0 80c0 26.2-59 48-160 48S64 426.2 64 400l0-25.9C99.8 397.8 158.4 408 224 408s124.2-10.2 160-33.9l0 25.9z" />
      </svg>
    ),
  },
  {
    title: "Traktor-Mietkauf",
    desc: "Mietkauf verbindet feste Raten mit dem Eigentumserwerb am Ende – steuerlich klar und planbar.",
    icon: (
      <svg viewBox="0 0 384 512" fill="currentColor" width="28" height="28">
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 224l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 256c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 320c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    ),
  },
  {
    title: "Sale & Leaseback",
    desc: "Vorhandenen Traktor beleihen: an die Leasinggesellschaft verkaufen, direkt zurückleasen und sofort Kapital freisetzen.",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM294.6 135.1c-3.9 4-5.9 9.4-5.6 14.9l8.2 147.9c.6 10.9 9.6 19.4 20.5 19.4l112 0c11 0 20-9 20-20s-9-20-20-20l-93.3 0-7.7-138.5c-.6-10.4-9-18.6-19.4-18.6c-5.5 0-10.7 2.2-14.7 5.8zm-199.2 5.8c-4 3.6-6.3 8.8-6.3 14.2l0 56c0 9.7 3.5 19.1 9.8 26.4l60.7 71.4C176.4 338.5 192 365.3 192 396c0 11 9 20 20 20s20-9 20-20c0-41.7-20.4-79.1-54.5-103l-53.7-63.2 0-44.8 89.4 0c10.4 0 18.8-8.2 19.4-18.6l1.4-25.1c.6-10.9-7.6-20.1-18.5-20.7L128 118.5c-.3 0-.7 0-1 0c-5.5 0-10.8 2.2-14.8 6.1l-17.8 16.3z" />
      </svg>
    ),
  },
];

const advantages = [
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
    title: "Neu & gebraucht",
    lines: [
      "Auch gebrauchte Traktoren finanzierbar",
      "Alle Marken – Fendt, John Deere, Deutz, Claas u.a.",
    ],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
        <path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z" />
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
      <svg viewBox="0 0 448 512" fill="currentColor" width="24" height="24">
        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-40 0C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
      </svg>
    ),
  },
];

const processSteps = [
  { number: "01", title: "Traktor benennen", duration: "5–10 Min.", desc: "Modell, Baujahr, Preis nennen – neu oder gebraucht, unverbindlich" },
  { number: "02", title: "Angebot erhalten", duration: "1–2 Werktage", desc: "Konditionen für Leasing, Finanzierung oder Mietkauf – auf Ihren Betrieb zugeschnitten" },
  { number: "03", title: "Unterlagen prüfen", duration: "unter 30 Min.", desc: "Schlanker Prozess, ohne Bankauskunft und Papierberg" },
  { number: "04", title: "Traktor erhalten", duration: "3–7 Werktage", desc: "Lieferung oder Abholung – dann geht's aufs Feld" },
];

const faqItems = [
  {
    q: "Kann ich einen Traktor ohne Schufa leasen oder finanzieren?",
    a: "Ja. Master Leasing vermittelt Traktor-Leasing und Traktor-Finanzierung ohne Schufa-Abfrage und ohne klassische Bankprüfung – bankenunabhängig für Landwirte, Lohnunternehmer und Gewerbe in ganz Deutschland.",
  },
  {
    q: "Kann ich auch einen gebrauchten Traktor finanzieren?",
    a: "Ja. Auch gebrauchte Traktoren, Trecker und Schlepper lassen sich finanzieren oder leasen. Wir bewerten das Objekt individuell nach Zustand und Marktwert – markenunabhängig (Fendt, John Deere, Deutz-Fahr, Massey Ferguson, Case IH, New Holland, Claas u.a.).",
  },
  {
    q: "Was ist der Unterschied zwischen Traktor leasen, finanzieren und Mietkauf?",
    a: "Beim Leasing nutzen Sie den Traktor gegen feste Raten, ohne den vollen Kaufpreis zu stemmen. Bei der Finanzierung erwerben Sie ihn über eine feste Laufzeit – am Ende gehört er Ihnen. Beim Mietkauf zahlen Sie feste Raten und werden am Vertragsende Eigentümer. Wir finden die Variante, die zu Ihrem Betrieb passt.",
  },
  {
    q: "Kann ich Kapital aus einem vorhandenen Traktor freisetzen?",
    a: "Ja. Über Sale & Leaseback (Fahrzeugbeleihung) beleihen Sie einen bereits bezahlten Traktor: Sie verkaufen ihn an die Leasinggesellschaft und leasen ihn direkt zurück – so erhalten Sie kurzfristig Liquidität und fahren die Maschine weiter.",
  },
  {
    q: "Wie schnell bekomme ich eine Zusage?",
    a: "In vielen Fällen liegt die Rückmeldung innerhalb von 24 Stunden vor. Der Prozess ist bewusst schlank gehalten, damit Sie zur Saison einsatzbereit sind.",
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

export default function TraktorLeasingPage() {
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
            <span className="overline">Traktor Leasing &amp; Finanzierung</span>
            <h1 style={{ color: "#fff", marginBottom: "20px", maxWidth: "760px" }}>
              Traktor leasen &amp; finanzieren{" "}
              <span style={{ color: "#E15C55" }}>ohne Schufa</span> – neu oder gebraucht
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
              Ob Traktor-Leasing, Finanzierung oder Mietkauf – bei Master Leasing
              finanzieren Sie Traktoren, Trecker und Schlepper aller Marken,
              bankenunabhängig und ohne Bonitätsprüfung. Auch für gebrauchte
              Maschinen. Leasingzusage oft schon in 24 Stunden.
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

        {/* ── Section A: Optionen ── */}
        <section
          className="section-pad"
          style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Ihre Optionen</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Traktor <span style={{ color: "#E15C55" }}>leasen, finanzieren oder mietkaufen</span>
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
                Vier Wege zur neuen Maschine – wir finden die Variante, die zu Ihrem
                Betrieb und Ihrer Liquiditätsplanung passt.
              </p>
            </div>

            <div
              className="tl-grid-4"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}
            >
              {options.map((item, i) => (
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
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="scroll-up"
              style={{ textAlign: "center", marginTop: "28px", color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.7 }}
            >
              Auch andere Landtechnik?{" "}
              <a href="/landmaschinen-leasing/" style={{ color: "#E15C55" }}>
                Zum Landmaschinen-Leasing (Mähdrescher, Anbaugeräte &amp; mehr) →
              </a>
            </p>
          </div>
        </section>

        {/* ── Section B: Vorteile ── */}
        <section
          className="section-pad"
          style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Ihre Vorteile</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Warum Traktoren über <span style={{ color: "#E15C55" }}>Master Leasing</span>
              </h2>
            </div>

            <div
              className="tl-grid-3"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
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
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {adv.lines.map((line) => (
                      <li
                        key={line}
                        style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: "1.55" }}
                      >
                        <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14" style={{ color: "#E15C55", marginTop: "3px", flexShrink: 0 }}>
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

        {/* ── Section C: Ablauf ── */}
        <section
          className="section-pad"
          style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Der Ablauf</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                So kommt der <span style={{ color: "#E15C55" }}>Traktor aufs Feld</span>
              </h2>
            </div>

            <div
              className="tl-process-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", position: "relative" }}
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
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", margin: 0, lineHeight: "1.6" }}>
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
          style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">FAQ</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Häufige <span style={{ color: "#E15C55" }}>Fragen zum Traktor-Leasing</span>
              </h2>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
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
                    <svg viewBox="0 0 448 512" fill="currentColor" width="14" height="14" style={{ color: "#E15C55", flexShrink: 0 }}>
                      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </summary>
                  <div style={{ padding: "0 28px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}>
                    <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: "1.75" }}>
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
            .tl-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
            .tl-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
            .tl-process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
            .tl-process-grid > div { padding: 0 !important; }
          }
          @media (max-width: 640px) {
            .tl-grid-4 { grid-template-columns: 1fr !important; }
            .tl-grid-3 { grid-template-columns: 1fr !important; }
            .tl-process-grid { grid-template-columns: 1fr !important; }
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
