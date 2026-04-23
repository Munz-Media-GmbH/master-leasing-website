"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Main footer */}
      <div className="container" style={{ padding: "80px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "60px",
          }}
        >
          {/* Col 1: Logo + Kurzbeschreibung */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "24px" }}>
              <Image
                src="/images/LogoFinalFile-01-1024x305.png"
                alt="Master Leasing Logo"
                width={200}
                height={60}
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", lineHeight: 1.7, maxWidth: "280px" }}>
              Ihr Partner für Fahrzeug- und Geräteleasing ohne Schufa. Für gewerbliche
              Kunden in ganz Deutschland – Zusage oft in 24 Stunden.
            </p>
          </div>

          {/* Col 2: Kontakt */}
          <div>
            <p
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              Kontakt
            </p>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 384 512" fill="#E15C55">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                ),
                text: "Am Waldrand 10, 16278 Angermünde",
                href: "https://maps.app.goo.gl/V6VpdRrRxhJVBLLU7",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                ),
                text: "+49 3331 297792",
                href: "tel:+4903331297792",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416z" />
                  </svg>
                ),
                text: "anfrage@master-leasing.com",
                href: "mailto:anfrage@master-leasing.com",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                  </svg>
                ),
                text: "Mo – Fr, 07:00 – 16:00 Uhr",
                href: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ flexShrink: 0, marginTop: "1px" }}>{item.icon}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'Inter', sans-serif",
                      transition: "color 0.2s",
                      lineHeight: 1.5,
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#E15C55")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {item.text}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Col 3: Navigation */}
          <div>
            <p
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              Navigation
            </p>
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "AGB", href: "https://master-leasing.com/agb/" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E15C55")}
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 4: Leistungen */}
          <div>
            <p
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              Leistungen
            </p>
            {[
              { label: "Über uns", href: "/ueberuns" },
              { label: "Fahrzeuge", href: "/fahrzeuge" },
              { label: "Geräteleasing", href: "/geraeteleasing" },
              { label: "Sale & Lease Back", href: "/sale-und-leaseback" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E15C55")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Münz Media credit bar */}
          <a
            href="https://www.muenzmedia.de/?utm_source=client_website&utm_medium=footer_credit&utm_campaign=master-leasing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#888",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            powered by{" "}
            <Image
              src="/images/M-logo-muenzmedia_gold.svg"
              alt="Münz Media"
              width={16}
              height={16}
              style={{ height: "1em", width: "auto", borderRadius: 0 }}
              onError={() => {}}
            />{" "}
            Münz Media GmbH
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
