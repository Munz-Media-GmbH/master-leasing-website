import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Über uns – Master Leasing | Fair. Einfach. Seriös.",
  description:
    "Master Leasing ist eine der größten bankenunabhängigen Leasinggesellschaften Deutschlands. Leasing ohne Schufa, ohne Bankprüfung – für Unternehmer, Selbstständige und Existenzgründer.",
  alternates: { canonical: "https://master-leasing.com/ueberuns/" },
  robots: "follow, index",
};

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24h", label: "Leasingzusage" },
  { value: "0", label: "Schufa-Abfragen" },
  { value: "100%", label: "Bankenunabhängig" },
];

const advantages = [
  "Keine Bankprüfung erforderlich",
  "Keine Einkommensnachweise oder Bilanzen",
  "Auch für Existenzgründer geeignet",
  "Freie Fahrzeug- und Händlerwahl",
  "Neuwagen, Werksdienstwagen & Gebrauchtwagen",
  "LKWs, Bau- und Industriemaschinen",
  "Leasing-Zusage innerhalb 24 Stunden",
  "Keine Vorkosten",
];

const pillars = [
  {
    word: "Fair",
    text: "Wir behandeln jeden Kunden gleich – unabhängig von Schufa-Score oder Bonität. Leasing ist für alle da.",
  },
  {
    word: "Einfach",
    text: "Kein Papierkram, kein Banktermin. Anfrage stellen, Angebot erhalten, losfahren – so simpel ist Leasing bei uns.",
  },
  {
    word: "Seriös",
    text: "Als eine der größten bankenunabhängigen Leasinggesellschaften Deutschlands stehen wir für Transparenz und Verlässlichkeit.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Page Hero ─────────────────────────────────────────────────────── */}
        <section
          style={{
            position: "relative",
            paddingTop: "160px",
            paddingBottom: "100px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/hero-bg.jpg"
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
                "linear-gradient(135deg, rgba(5,5,5,0.92) 0%, rgba(10,5,5,0.82) 60%, rgba(5,5,5,0.7) 100%)",
              zIndex: 1,
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <span className="overline">Über uns</span>
            <h1 style={{ color: "#fff", marginBottom: "20px", maxWidth: "700px" }}>
              Ihr leasing{" "}
              <span style={{ color: "#E15C55" }}>master</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "20px",
                maxWidth: "580px",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
                marginBottom: "40px",
              }}
            >
              Fair. Einfach. Seriös. – Ihre Leasinglösung ohne Schufa, ohne Bankprüfung,
              ohne Vorkosten.
            </p>

            {/* Stats row in hero */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      color: "#E15C55",
                      fontFamily: "'Quantico', sans-serif",
                      fontSize: "clamp(28px, 4vw, 40px)",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                      margin: "6px 0 0",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillars: Fair | Einfach | Seriös ─────────────────────────────── */}
        <section
          className="section-pad"
          style={{ background: "#F5F2EC", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                marginBottom: "52px",
              }}
            >
              <span className="overline" style={{ color: "#E15C55", borderColor: "rgba(225,92,85,0.3)" }}>
                Unsere Werte
              </span>
              <h2 style={{ color: "#101010", marginTop: "12px" }}>
                Fair.{" "}
                <span style={{ color: "#E15C55" }}>Einfach.</span>{" "}
                Seriös.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
              className="pillars-grid"
            >
              {pillars.map((p, i) => (
                <div
                  key={p.word}
                  className="scroll-up"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    padding: "36px 28px",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(225,92,85,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#E15C55",
                        fontFamily: "'Quantico', sans-serif",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3
                    style={{
                      color: "#101010",
                      fontFamily: "'Quantico', sans-serif",
                      fontSize: "24px",
                      marginBottom: "12px",
                    }}
                  >
                    {p.word}
                  </h3>
                  <p
                    style={{
                      color: "rgba(0,0,0,0.55)",
                      fontSize: "15px",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .pillars-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Company Story ─────────────────────────────────────────────────── */}
        <section className="section-pad" style={{ background: "#101010" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "center",
              }}
              className="story-grid"
            >
              {/* Image */}
              <div
                className="scroll-up"
                style={{ position: "relative", borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}
              >
                <Image
                  src="/images/shutterstock_18982980191-scaled.jpg"
                  alt="Master Leasing – Fahrzeugübergabe an Kunden"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  }}
                />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    background: "#E15C55",
                    borderRadius: "12px",
                    padding: "12px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 512 512" fill="#fff">
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                  <span style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px" }}>
                    Zusage in 24h
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="scroll-up scroll-d1">
                <span className="overline">Wer wir sind</span>
                <h2 style={{ color: "#fff", margin: "16px 0 24px" }}>
                  Ihre Lösung für{" "}
                  <span style={{ color: "#E15C55" }}>finanzielle Freiheit</span>
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  Master Leasing ist eine der größten bankenunabhängigen Leasinggesellschaften
                  Deutschlands. Seit über 20 Jahren vermitteln wir Leasing-Lösungen für
                  Unternehmer, Selbstständige und Existenzgründer – schnell, unkompliziert
                  und zu Top-Konditionen.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.8,
                    marginBottom: "32px",
                  }}
                >
                  Was uns auszeichnet: Wir fragen keine Schufa ab, verlangen keine
                  Einkommensnachweise und benötigen keine Bilanzen. Unser Partnernetzwerk
                  aus zufriedenen Kunden, Autohäusern und Händlern erstreckt sich über
                  ganz Deutschland.
                </p>
                <a href="/kontakt" className="btn-primary">
                  Jetzt Anfrage stellen →
                </a>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </section>

        {/* ── Advantages ────────────────────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "center",
              }}
              className="adv-grid"
            >
              {/* Left: Heading */}
              <div className="scroll-up">
                <span className="overline">Warum Master Leasing</span>
                <h2 style={{ color: "#fff", margin: "16px 0 24px" }}>
                  Schnell, unkompliziert und zu{" "}
                  <span style={{ color: "#E15C55" }}>Top-Konditionen</span>
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  Wir bieten Leasing-Lösungen für gewerbliche Kunden, die von klassischen
                  Banken abgelehnt wurden oder einfach einen schnelleren, flexibleren
                  Weg suchen.
                </p>
              </div>

              {/* Right: Checklist */}
              <div className="scroll-up scroll-d1">
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {advantages.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "15px",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          minWidth: "22px",
                          borderRadius: "50%",
                          background: "rgba(225,92,85,0.15)",
                          border: "1px solid rgba(225,92,85,0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#E15C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .adv-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </section>

        {/* ── Vehicle offerings photo strip ─────────────────────────────────── */}
        <section
          className="section-pad"
          style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }} className="scroll-up">
              <span className="overline">Unser Angebot</span>
              <h2 style={{ color: "#fff", marginTop: "12px" }}>
                Was wir{" "}
                <span style={{ color: "#E15C55" }}>leasen</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "12px",
              }}
              className="offer-grid scroll-up scroll-d1"
            >
              {[
                { img: "/images/fahrzeug-pkw.jpg", label: "Pkw & Limousinen" },
                { img: "/images/fahrzeug-nutzfahrzeug.jpg", label: "LKW & Transporter" },
                { img: "/images/fahrzeug-landwirtschaft.jpg", label: "Landmaschinen" },
                { img: "/images/fahrzeug-geraete.jpg", label: "Maschinen & Geräte" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 50vw, 25vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .offer-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 540px) {
              .offer-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          className="section-pad"
          style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="container">
            <div
              style={{
                background: "rgba(225,92,85,0.06)",
                border: "1px solid rgba(225,92,85,0.18)",
                borderRadius: "20px",
                padding: "60px 48px",
                textAlign: "center",
              }}
              className="scroll-scale"
            >
              <span className="overline" style={{ color: "#E15C55", borderColor: "rgba(225,92,85,0.3)" }}>
                Jetzt starten
              </span>
              <h2 style={{ color: "#fff", margin: "16px 0 20px" }}>
                Bereit für Ihr{" "}
                <span style={{ color: "#E15C55" }}>Leasingangebot?</span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "17px",
                  fontFamily: "'Inter', sans-serif",
                  maxWidth: "500px",
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                Stellen Sie jetzt Ihre unverbindliche Anfrage. Wir melden uns in der Regel
                innerhalb von 24 Stunden mit einem konkreten Angebot.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a href="/kontakt" className="btn-primary">
                  Leasinganfrage stellen →
                </a>
                <a
                  href="tel:+4903331297792"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "10px",
                    padding: "13px 24px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                  03331 – 29 77 92
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
