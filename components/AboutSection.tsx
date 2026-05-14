import Image from "next/image";
import ModalOpenButton from "@/components/ModalOpenButton";

export default function AboutSection() {
  return (
    <>
      {/* ── Section 1: Autoleasing ohne Schufa ──────────────────────────── */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #101010 0%, #0d0d0d 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* Left: Überschrift */}
            <div className="scroll-up">
              <span className="overline" style={{ marginBottom: "20px", display: "inline-block" }}>Autoleasing ohne Schufa</span>
              <h2 style={{ lineHeight: 1.05 }}>
                <span style={{ color: "#E15C55" }}>Autoleasing</span> ohne Schufa<br />
                und ohne Bonität:{" "}
                <span style={{ color: "#E15C55" }}>Freiheit genießen</span>
              </h2>
            </div>
            {/* Right: Text */}
            <div className="scroll-up scroll-d1">
              <h3 style={{ fontFamily: "'Quantico', sans-serif", color: "#fff", fontSize: "18px", marginBottom: "12px" }}>
                Warum MasterLeasing?
              </h3>
              <p style={{ marginBottom: "20px" }}>
                Das Besondere bei Master Leasing ist, dass wir Ihnen die Möglichkeit bieten, Auto Leasing ohne Schufa zu nutzen. Sie können Ihr Traumfahrzeug leasen, ganz ohne die typischen Einschränkungen durch die Schufa – diskret, schnell und unkompliziert.
              </p>
              <h3 style={{ fontFamily: "'Quantico', sans-serif", color: "#fff", fontSize: "18px", marginBottom: "12px" }}>
                Leasinganfrage stellen: Der einfache Weg
              </h3>
              <p style={{ marginBottom: "32px" }}>
                Egal, ob Opel, Mercedes, Hyundai oder Skoda – bei uns haben Sie die freie Händlerwahl. Master Leasing sorgt für eine schnelle Leasingzusage, oft bereits in 24 Stunden!
              </p>
              <ModalOpenButton className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
                Leasinganfrage stellen
              </ModalOpenButton>
              <div style={{ display: "flex", gap: "20px", marginTop: "14px", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.45)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
                  <svg width="13" height="13" viewBox="0 0 512 512" fill="#E15C55"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm114.7-167.3c-5.3 5.3-12.2 7.9-19.1 7.9s-13.8-2.6-19.1-7.9l-58.5-58.5V112c0-14.9-12.1-27-27-27s-27 12.1-27 27v144c0 7.2 2.9 14 8 19.1l66.5 66.5c10.6 10.5 27.6 10.5 38.2-.1 10.5-10.6 10.5-27.6-.1-38.2l.1.4z"/></svg>
                  Antwort in 24h
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.45)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
                  <svg width="13" height="13" viewBox="0 0 512 512" fill="#E15C55"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3z"/></svg>
                  Keine Schufa-Prüfung
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Über Master Leasing ──────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div className="scroll-up">
              <span className="overline">Über Master Leasing</span>
              <h2 style={{ marginBottom: "20px" }}>
                <span style={{ color: "#E15C55" }}>Auto leasen</span> trotz negativer SCHUFA
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 700,
                  fontSize: "17px",
                  marginBottom: "8px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Ihr Traumauto wartet – holen Sie es sich jetzt!
              </p>
              <p style={{ marginBottom: "8px" }}>
                Stellen Sie sich vor: Ihr Wunschfahrzeug, ganz ohne Schufa, ohne Bankprüfung,
                ohne Stress!
              </p>
              <p style={{ marginBottom: "8px" }}>
                Egal, ob Neu- oder Gebrauchtwagen, ob Pkw, Transporter oder Lkw –{" "}
                <strong style={{ color: "#fff" }}>wir machen es möglich!</strong>
              </p>
              <p
                style={{
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "24px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Fahren Sie, was Sie wollen!
              </p>

              <p
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "12px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Auszeichnung:
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                }}
              >
                <Image
                  src="/images/Bildschirmfoto-2025-08-12-um-08.25.42.png"
                  alt="DUP UNTERNEHMER Magazin Award"
                  width={160}
                  height={62}
                  style={{ height: "50px", width: "auto", objectFit: "contain" }}
                />
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      margin: 0,
                    }}
                  >
                    DUP UNTERNEHMER Magazin
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                      margin: "2px 0 0",
                    }}
                  >
                    Unternehmen der Zukunft – 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Feature cards */}
            <div
              className="scroll-up scroll-d1"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="dark-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(225,92,85,0.15)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 512 512" fill="#E15C55">
                      <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        fontFamily: "'Quantico', sans-serif",
                        marginBottom: "8px",
                      }}
                    >
                      Warum warten?
                    </h3>
                    <p style={{ fontSize: "15px" }}>
                      Andere lassen sich von der Schufa bremsen –{" "}
                      <strong style={{ color: "#fff" }}>Sie nicht!</strong> Erfüllen Sie sich
                      jetzt Ihren Autotraum und genießen Sie maximale Freiheit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="dark-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(225,92,85,0.15)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 512 512" fill="#E15C55">
                      <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        fontFamily: "'Quantico', sans-serif",
                        marginBottom: "8px",
                      }}
                    >
                      Schnell und unkompliziert!
                    </h3>
                    <p style={{ fontSize: "15px" }}>
                      Leasingzusage oft schon in 24 Stunden.{" "}
                      <strong style={{ color: "#fff" }}>
                        Keine Schufa, keine Bankprüfung!
                      </strong>{" "}
                      Fair, transparent und flexibel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .about-float-card { display: none !important; }
        }
      `}</style>
    </>
  );
}
