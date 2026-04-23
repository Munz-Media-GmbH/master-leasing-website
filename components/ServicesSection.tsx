"use client";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" />
      </svg>
    ),
    title: "Keine Vorkosten",
    desc: "Sie zahlen nichts im Voraus!",
  },
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
      </svg>
    ),
    title: "Unbegrenzte Kilometer",
    desc: "Egal ob 2.500 km oder 210.000 km!",
  },
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99z" />
      </svg>
    ),
    title: "Keine Schufa-Prüfung & kein Eintrag",
    desc: "Absolute Freiheit!",
  },
  {
    icon: (
      <svg viewBox="0 0 448 512" fill="currentColor">
        <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    title: "Keine Bankauskunft erforderlich",
    desc: "Unkompliziert & schnell!",
  },
  {
    icon: (
      <svg viewBox="0 0 384 512" fill="currentColor">
        <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z" />
      </svg>
    ),
    title: "Steuerlich sofort absetzbar",
    desc: "Maximale Vorteile für Ihr Unternehmen!",
  },
  {
    icon: (
      <svg viewBox="0 0 448 512" fill="currentColor">
        <path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48z" />
      </svg>
    ),
    title: "Kein Gutachten, keine Nachberechnung",
    desc: "Der Restwert steht von Anfang an fest!",
  },
  {
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor">
        <path d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80 26.3 0 49.4-12.9 64-32.4 14.6 19.6 37.7 32.4 64 32.4 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2z" />
      </svg>
    ),
    title: "Leasing für alle Fahrzeuge",
    desc: "Transporter, LKW, Landmaschinen, Schlepper & mehr!",
  },
  {
    icon: (
      <svg viewBox="0 0 640 512" fill="currentColor">
        <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
      </svg>
    ),
    title: "Freie Fahrzeug- und Händlerwahl",
    desc: "Sie entscheiden!",
  },
  {
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" />
      </svg>
    ),
    title: "Superschnelle Abwicklung",
    desc: "Leasing-Zusage innerhalb von 24 Stunden!",
  },
  {
    icon: (
      <svg viewBox="0 0 576 512" fill="currentColor">
        <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288z" />
      </svg>
    ),
    title: "Zulassung auf Ihre Firma/Ihren Namen",
    desc: "Sofort startklar!",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="section-pad"
      style={{
        background: "#101010",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="overline">Unsere Leistungen</span>
          <h2 style={{ marginBottom: "16px" }}>
            <span style={{ color: "#E15C55" }}>Ihr Auto leasing</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)" }}>
            Einfach, Schnell &amp; Sorgenfrei!
          </p>
        </div>

        {/* Car banner image */}
        <div style={{ marginBottom: "60px", borderRadius: "16px", overflow: "hidden" }}>
          <Image
            src="/images/ai-5er-Bild-2-1024x292.png"
            alt="Master Leasing Fahrzeuge"
            width={1000}
            height={285}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`scroll-up${i % 2 === 1 ? " scroll-d1" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(225,92,85,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)")
              }
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  color: "#E15C55",
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "'Quantico', sans-serif",
                    margin: 0,
                    marginBottom: "2px",
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "13px",
                    fontFamily: "'Inter', sans-serif",
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
