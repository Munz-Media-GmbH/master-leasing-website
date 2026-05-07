"use client";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

const checkItems = [
  "keine Schufa-Abfrage",
  "keine Bonitätsabfrage",
  "flexible Leasingkonditionen",
  "Fahrzeuge, Maschinen und Geräte",
];

const CheckSVG = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" fill="#E15C55">
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

export default function CTABanner() {
  const { openModal } = useContactModal();
  return (
    <section
      className="section-pad"
      style={{
        background: "linear-gradient(135deg, #110d0d 0%, #0c0c0c 50%, #110d0d 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container">
        <div className="cta-box scroll-scale">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left: text + checklist */}
            <div>
              <h2 style={{ marginBottom: "28px" }}>
                <span style={{ color: "#E15C55" }}>Jetzt trotz negativer SCHUFA </span>
                Auto leasen
              </h2>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {checkItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "16px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <CheckSVG />
                    {item}
                  </li>
                ))}
              </ul>

              <h4
                style={{
                  color: "#fff",
                  fontFamily: "'Quantico', sans-serif",
                  fontSize: "18px",
                  marginBottom: "24px",
                  fontWeight: 400,
                }}
              >
                Wunschfahrzeug, Maschine oder Gerät eintragen und schnelles Leasing-Angebot
                erhalten
              </h4>

              <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "none", cursor: "pointer" }}
                >
                  <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                  </svg>
                  Kontakt aufnehmen
                </button>

                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="16" height="16" viewBox="0 0 512 512" fill="rgba(255,255,255,0.5)">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                    </svg>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      schnelle Bearbeitung
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="16" height="16" viewBox="0 0 640 512" fill="rgba(255,255,255,0.5)">
                      <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2z" />
                    </svg>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      persönlicher Ansprechpartner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: car photo only */}
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "340px" }}>
              <Image
                src="/images/IMG_0148.jpeg"
                alt="Master Leasing – Ihr Fahrzeug wartet"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cta-box > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
