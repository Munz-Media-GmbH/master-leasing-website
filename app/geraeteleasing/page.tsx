import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ModalOpenButton from "@/components/ModalOpenButton";

export const metadata: Metadata = {
  title: "Geräteleasing – Maschinen & Geräte leasen | Master Leasing",
  description:
    "Geräteleasing ohne Schufa bei Master Leasing: Landmaschinen, Nutzfahrzeuge, Baumaschinen, IT-Geräte und mehr – flexibel, schnell, ohne Bonitätsprüfung.",
  alternates: { canonical: "https://master-leasing.com/geraeteleasing/" },
  robots: "follow, index",
};

const equipmentTypes = [
  {
    title: "Baumaschinen & Bagger",
    desc: "Bagger, Radlader, Kompaktmaschinen & Spezialgerät",
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
        <path d="M192 0c-17.7 0-32 14.3-32 32L160 42.7 97.8 5.3C80.9-4.5 59.5 .4 48.3 16.5L9.5 75.8C3.4 84.9 1.3 96.1 3.7 106.8s9.5 19.6 19.5 24L96 160.8l0 35.2-64 0c-17.7 0-32 14.3-32 32l0 288c0 17.7 14.3 32 32 32l64 0 32 0L512 548l0 0c0 0 0 0 0 0l64 0c17.7 0 32-14.3 32-32l0-208c0-17.7-14.3-32-32-32l-64 0 0-51.2 58.8-23.5c10-4 17.1-13 19.5-23.7s-.3-21.9-6.9-30.7l-44.7-61c-11.7-16-33.2-20.7-50.3-10.7L448 128l0-96c0-17.7-14.3-32-32-32L192 0zM224 64l192 0 0 160-192 0L224 64zM160 480l-64 0 0-256 64 0 0 256zm320 0L192 480l0-208 192 0 0 48c0 17.7 14.3 32 32 32l64 0 0 128zm64 0-32 0 0-128 32 0 0 128zM496 224l-48 19.2L448 208l48.7-27.8L496 224z" />
      </svg>
    ),
  },
  {
    title: "Landmaschinen & Traktoren",
    desc: "Traktoren, Mähdrescher, Anbaugeräte & Erntemaschinen",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 34.1C194.3 58.5 164 89.6 160.1 128l-96.1 0c-17.7 0-32 14.3-32 32c0 12.6 7.3 23.5 18 28.8L32 288l0 112c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-112 32.6-99.2C120.3 200.8 128 212.5 128 226c0 43.7-33.1 79.7-75.7 84.1C38.7 311.8 32 320.4 32 330.5c0 11.1 9.5 19.9 20.5 18.9C103.9 344.9 144 300.3 144 246c0-21.3-6.7-41.1-18.1-57.3L224 188.7l0 115.9c-14.1 12-23.2 29.9-23.8 49.9L192 362l-16 0c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l16 0 112 0 16 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-16 0-8.2-7.5c-.6-20-9.7-37.9-23.8-49.9l0-110.5L376 128c0-17.7-14.3-32-32-32l-16 0c-6.7-22.3-22.3-40.7-42.5-51.9L272 16zM256 96a64 64 0 1 1 0 128A64 64 0 1 1 256 96z" />
      </svg>
    ),
  },
  {
    title: "IT & EDV-Geräte",
    desc: "Server, Workstations, Netzwerktechnik & Peripherie",
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
        <path d="M384 96l0 224-256 0 0-224 256 0zM128 32C57.3 32 0 89.3 0 160L0 352c0 70.7 57.3 128 128 128l384 0c70.7 0 128-57.3 128-128l0-192c0-70.7-57.3-128-128-128L128 32zm32 64l256 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32L160 384c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32zm-32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM288 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
      </svg>
    ),
  },
  {
    title: "Medizin & Labortechnik",
    desc: "Diagnostik, Behandlungsgeräte & Laborausstattung",
    icon: (
      <svg viewBox="0 0 576 512" fill="currentColor" width="28" height="28">
        <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1 96 192c0 53 43 96 96 96s96-43 96-96l0-120.9-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1L352 192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-48c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l0 48C496 453.3 422.5 512 336 512c-76.2 0-139.4-53.1-155-124.7C108.6 333.6 64 269.3 64 192L64 71.1c0-27.6 17.6-52 44.1-61.2l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2l-32.3 20.5z" />
      </svg>
    ),
  },
  {
    title: "Gabelstapler & Flurförderzeuge",
    desc: "Elektro- und Diesel-Stapler, Regalbediengeräte & Hubwagen",
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
        <path d="M0 32C0 14.3 14.3 0 32 0L336 0c17.7 0 32 14.3 32 32l0 0 0 384 64 0 0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32L592 416c26.5 0 48 21.5 48 48s-21.5 48-48 48l-80 0c-.9 0-1.8 0-2.7-.1L176 512c-.9 .1-1.8 .1-2.7 .1L80 512c-26.5 0-48-21.5-48-48s21.5-48 48-48l96 0 0-352L32 112C14.3 112 0 97.7 0 80L0 32zM96 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm400 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
      </svg>
    ),
  },
  {
    title: "Werkzeugmaschinen",
    desc: "CNC-Fräsen, Drehmaschinen, Pressen & Fertigungsanlagen",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
        <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 334.1C7.4 344.2 0 359.3 0 375.4C0 402.8 22.4 425.3 49.9 425.3c16 0 31.1-7.4 41.2-19.9L210.5 224c17 6.1 35.4 9.5 54.5 9.5c88.4 0 160-71.6 160-160z" />
      </svg>
    ),
  },
];

const advantages = [
  {
    title: "Kapital schonen",
    lines: [
      "Investitionen ohne Eigenkapitalbelastung",
      "Liquidität bleibt im Unternehmen",
    ],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
        <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 1.2-9.2 2.4-13.7 3.6c-28.3 8.1-53.4 19.4-73.4 34.2c-1.4-.8-2.9-1.7-4.5-2.5C249.3 268.8 199 256 144 256c-59.6 0-112.5 14.9-148.8 38.2C-4.7 294.4 0 287.6 0 280l0-112c0-17.3 12.9-32.9 33.6-46.1c19.9-12.7 48.1-22.8 80.6-28.5c14.4-2.5 30-4 46.5-4.4zM192 336c5.8 0 11.5 .1 17.1 .4c-3.4 9.2-5.1 18.9-5.1 28.8c0 12.4 2.5 24.2 7.1 35.1C202.4 400.7 192 400 192 400c-59.1 0-112.3 13.4-148.7 35.6c-10.5 6.5-20.7 15-24.4 26.6L17 477c-.2-1-.3-2-.3-3l0-200c0-2.2 .2-4.4 .5-6.5C50.2 249.7 94.8 240 144 240c56.5 0 107.4 14.2 140.4 36.3c16.2 10.7 27.6 23.2 27.6 37.7c0 4-.7 7.9-2.1 11.7c-4.6 1.2-9.2 2.4-13.7 3.6c-28.3 8.1-53.4 19.4-73.4 34.2c-1.4-.8-2.9-1.7-4.5-2.5c-8.3-4.5-17.2-8.4-26.3-11.6zm26.1 80.9c0-1.6-.1-3.3-.1-4.9s.1-3.3 .1-4.9l0-71.9 0-68.6C257 313.6 288 304 320 304c56.5 0 107.4 14.2 140.4 36.3c16.2 10.7 27.6 23.2 27.6 37.7l0 161.3c-35.2 22.5-87.5 36.7-147 36.7C279.6 576 228.4 561.8 192 539.3l.1-122.4zM512 384c0 2.9-.3 5.7-.7 8.5C511.4 389.7 512 386.9 512 384z" />
      </svg>
    ),
  },
  {
    title: "Steuervorteile nutzen",
    lines: [
      "Leasingraten als Betriebsausgaben absetzen",
      "Klare Kostenplanung durch feste Raten",
    ],
    icon: (
      <svg viewBox="0 0 384 512" fill="currentColor" width="24" height="24">
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 224c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 240c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 304c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 368c-8.8 0-16-7.2-16-16z" />
      </svg>
    ),
  },
  {
    title: "Flexibel bleiben",
    lines: [
      "Laufzeit und Rate individuell anpassen",
      "Geräte bei Bedarf modernisieren",
    ],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Objekt benennen",
    duration: "5–10 Min.",
    desc: "Fahrzeug, Gerät oder Maschine nennen – unverbindlich und schnell",
  },
  {
    number: "02",
    title: "Angebot erhalten",
    duration: "1–2 Werktage",
    desc: "Individuelle Konditionen und Laufzeiten auf Ihr Objekt zugeschnitten",
  },
  {
    number: "03",
    title: "Unterlagen prüfen",
    duration: "unter 30 Min.",
    desc: "Einfacher Prozess, kein unnötiger Papierkram",
  },
  {
    number: "04",
    title: "Gerät erhalten",
    duration: "3–7 Werktage",
    desc: "Lieferung oder Abholung nach Ihrer Wahl",
  },
];

const faqItems = [
  {
    q: "Welche Geräte können geleast werden?",
    a: "Grundsätzlich alle gewerblich genutzten Objekte – Baumaschinen, Landtechnik, IT-Geräte, Medizintechnik, Flurförderzeuge und mehr. Wir prüfen jeden Fall individuell.",
  },
  {
    q: "Ist Geräteleasing ohne Schufa möglich?",
    a: "Ja. Master Leasing bietet Geräteleasing ohne Schufa-Prüfung und ohne Bonitätsprüfung – für gewerbliche Kunden in ganz Deutschland.",
  },
  {
    q: "Wie lange dauert die Zusage?",
    a: "In vielen Fällen erhalten Sie innerhalb von 24 Stunden eine Rückmeldung. Unser Prozess ist darauf ausgelegt, schnell und unkompliziert zu sein.",
  },
  {
    q: "Gibt es Mindest- oder Maximalwerte?",
    a: "Wir bearbeiten Anfragen ab einem Objektwert von ca. 5.000 €. Nach oben gibt es in der Regel keine feste Grenze – auch größere Maschinen oder Fuhrparks sind möglich.",
  },
];

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "28px 24px",
};

export default function GeraeteLeasingPage() {
  return (
    <>
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
            src="/images/fahrzeug-geraete.jpg"
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
            <span className="overline">Geräteleasing</span>
            <h1 style={{ color: "#fff", marginBottom: "20px", maxWidth: "700px" }}>
              Geräteleasing{" "}
              <span style={{ color: "#E15C55" }}>ohne Schufa</span> –
              <br />
              Maschinen, Fahrzeuge & mehr
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
                maxWidth: "580px",
                marginBottom: "36px",
                lineHeight: 1.7,
              }}
            >
              Landmaschinen, Nutzfahrzeuge, Baugeräte oder IT-Equipment – bei Master
              Leasing leasen Sie jedes gewerbliche Objekt ohne Bonitätsprüfung.
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

        {/* ── Section A: Was wir leasen ── */}
        <section
          className="section-pad"
          style={{
            background: "#101010",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Objektarten</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Was wir <span style={{ color: "#E15C55" }}>leasen</span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "17px",
                  maxWidth: "560px",
                  margin: "16px auto 0",
                  lineHeight: 1.7,
                }}
              >
                Von der Baustelle bis zum Operationssaal – wir finanzieren alle
                gewerblich genutzten Objekte, schnell und ohne Bonitätsprüfung.
              </p>
            </div>

            <div
              className="gl-equipment-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {equipmentTypes.map((item, i) => (
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

        {/* ── Section B: Warum Geräteleasing? ── */}
        <section
          className="section-pad"
          style={{
            background: "#0c0c0c",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Ihre Vorteile</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Warum <span style={{ color: "#E15C55" }}>Geräteleasing?</span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "17px",
                  maxWidth: "540px",
                  margin: "16px auto 0",
                  lineHeight: 1.7,
                }}
              >
                Leasing schont Ihre Ressourcen und hält Ihr Unternehmen handlungsfähig –
                ohne Kompromisse bei Ausstattung oder Qualität.
              </p>
            </div>

            <div
              className="gl-advantages-grid"
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
                  style={{
                    ...cardStyle,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                  }}
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

        {/* ── Section C: So funktioniert Geräteleasing ── */}
        <section
          className="section-pad"
          style={{
            background: "#101010",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="overline">Der Ablauf</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                So funktioniert{" "}
                <span style={{ color: "#E15C55" }}>Geräteleasing</span>
              </h2>
            </div>

            <div
              className="gl-process-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0",
                position: "relative",
              }}
            >
              {/* Connecting line */}
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
                  {/* Step number circle */}
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
                Häufige <span style={{ color: "#E15C55" }}>Fragen</span>
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
            .gl-equipment-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .gl-advantages-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .gl-process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
            .gl-process-grid > div { padding: 0 !important; }
          }
          @media (max-width: 640px) {
            .gl-equipment-grid { grid-template-columns: 1fr !important; }
            .gl-advantages-grid { grid-template-columns: 1fr !important; }
            .gl-process-grid { grid-template-columns: 1fr !important; }
          }
          details[open] summary svg:last-child {
            transform: rotate(180deg);
          }
          details summary svg {
            transition: transform 0.2s ease;
          }
          details summary::-webkit-details-marker { display: none; }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
