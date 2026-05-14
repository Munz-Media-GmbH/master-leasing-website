"use client";

export default function ContactCTA() {
  return (
    <section
      className="section-pad"
      style={{
        background: "#101010",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shape divider top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "80px", display: "block" }}
        >
          <path
            fill="#0c0c0c"
            d="M738,99l262-93V0H0v5.6L738,99z"
          />
        </svg>
      </div>

      {/* Red glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(225,92,85,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <h2 style={{ marginBottom: "16px" }}>
              Kontaktieren Sie uns{" "}
              <span style={{ color: "#E15C55" }}>für Ihre Anfrage</span>
            </h2>
            <h4
              style={{
                color: "#E15C55",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                marginBottom: "20px",
              }}
            >
              Ihr Master für gewerbliches Leasing
            </h4>
            <p style={{ marginBottom: "16px" }}>
              Nutzen Sie die Möglichkeit, ohne Schufa und Bonitätsprüfung Ihr Wunschfahrzeug
              zu leasen! Master Leasing ist Ihr seriöser Partner, wenn es um Auto Leasing ohne
              Schufa geht.
            </p>
            <p
              style={{
                color: "#fff",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                marginBottom: "32px",
              }}
            >
              Jetzt Anfrage stellen und Kontakt aufnehmen – Ihr Traumauto wartet auf
              Sie!
            </p>
            <a href="https://master-leasing.com/kontakt/" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
              Kontakt aufnehmen
            </a>
          </div>

          {/* Right: Contact info */}
          <div
            style={{
              background: "#0c0c0c",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "20px",
                marginBottom: "28px",
              }}
            >
              Kontakt
            </h3>
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 384 512" fill="#E15C55">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                ),
                label: "Am Waldrand 10\n16278 Angermünde",
                href: "https://maps.app.goo.gl/V6VpdRrRxhJVBLLU7",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                ),
                label: "+49 3331 297792",
                href: "tel:+4903331297792",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416z" />
                  </svg>
                ),
                label: "anfrage@master-leasing.com",
                href: "mailto:anfrage@master-leasing.com",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                  </svg>
                ),
                label: "Mo – Fr\n07:00 – 16:00 Uhr",
                href: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "12px 0",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div style={{ flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "15px",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#E15C55")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")
                    }
                  >
                    {item.label}
                  </a>
                ) : (
                  <p
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "15px",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
