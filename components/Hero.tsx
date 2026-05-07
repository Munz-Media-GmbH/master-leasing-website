"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Counter from "./Counter";

const checkItems = [
  "keine Schufa-Abfrage",
  "keine Bonitätsabfrage",
  "flexible Leasingkonditionen",
  "Fahrzeuge, Maschinen und Geräte",
];

const CheckIcon = () => (
  <svg
    className="check-icon"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile — too slow & not needed on small screens
    const noParallax = window.matchMedia("(max-width: 768px)").matches;
    if (noParallax) return;

    let rafId: number;
    let lastY = -1;

    const onScroll = () => {
      const y = window.scrollY;
      if (y === lastY) return;
      lastY = y;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (parallaxRef.current) {
          // 0.35 = image moves at 35% of scroll speed → strong but natural parallax
          parallaxRef.current.style.transform = `translateY(${y * 0.35}px)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "110px",
        paddingBottom: "32px",
        overflow: "hidden",
      }}
    >
      {/* ── Parallax background image ─────────────────────────────────
          Extends 20% above & below the section so the image never shows
          a gap while the transform shifts it downward on scroll.
      ─────────────────────────────────────────────────────────────── */}
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          right: 0,
          bottom: "-20%",
          zIndex: 0,
          willChange: "transform",
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Auto Leasing ohne Schufa – Master Leasing"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.92) 0%, rgba(10,10,10,0.85) 50%, rgba(20,5,5,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Red glow accent – floating pulse */}
      <div
        className="glow-float"
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(225,92,85,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2, width: "100%" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left: Content */}
          <div>
            <h1
              className="hero-enter hero-d0"
              style={{ color: "#fff", marginBottom: "16px", lineHeight: 1.05 }}
            >
              Auto leasen{" "}
              <span style={{ color: "#E15C55" }}>ohne Schufa</span>
            </h1>

            <p
              className="hero-enter hero-d1"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "16px",
                maxWidth: "520px",
              }}
            >
              Sie haben einen{" "}
              <strong style={{ color: "#fff" }}>Schufa-Eintrag</strong>, Sie
              sind ein frisch{" "}
              <strong style={{ color: "#fff" }}>gegründetes Unternehmen</strong>{" "}
              und haben noch{" "}
              <strong style={{ color: "#fff" }}>keine Bonität</strong> und
              brauchen aber jetzt ein{" "}
              <strong style={{ color: "#fff" }}>Fahrzeug</strong> oder ein{" "}
              <strong style={{ color: "#fff" }}>Gerät?</strong>
            </p>

            {/* Checklist */}
            <ul
              className="hero-enter hero-d2"
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "14px",
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
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <p
              className="hero-enter hero-d3"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "15px",
                marginBottom: "18px",
              }}
            >
              Bei Master Leasing sind Sie in besten Händen. Wir machen Ihr
              Leasing möglich.
            </p>

            {/* CTAs */}
            <div
              className="hero-enter hero-d4"
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <a href="/kontakt" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Jetzt Leasing starten
              </a>
              <a href="tel:+4903331297792" className="btn-outline">
                03331 – 29 77 92
              </a>
            </div>

            {/* Stats */}
            <div
              className="hero-enter hero-d5"
              style={{ display: "flex", alignItems: "center", gap: "32px" }}
            >
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontFamily: "'Quantico', sans-serif",
                    fontSize: "42px",
                    color: "#E15C55",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    margin: 0,
                  }}
                >
                  <Counter target={20} suffix="+" />
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    margin: "4px 0 0",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Jahre Erfahrung
                </p>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background: "rgba(255,255,255,0.15)",
                }}
              />

              <Image
                src="/images/auto-repair-divider_result.webp"
                alt=""
                width={40}
                height={56}
                style={{ opacity: 0.6 }}
              />

              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background: "rgba(255,255,255,0.15)",
                }}
              />

              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontFamily: "'Quantico', sans-serif",
                    fontSize: "42px",
                    color: "#E15C55",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    margin: 0,
                  }}
                >
                  <Counter target={10} suffix="k+" />
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    margin: "4px 0 0",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  zufriedene Kunden
                </p>
              </div>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="hero-right hero-d2" style={{ position: "relative" }}>
            <div
              style={{
                background: "rgba(225,92,85,0.08)",
                border: "1px solid rgba(225,92,85,0.2)",
                borderRadius: "20px",
                padding: "32px",
                position: "relative",
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  background: "rgba(225,92,85,0.15)",
                  border: "1px solid rgba(225,92,85,0.3)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#E15C55",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 512 512" fill="white">
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "'Quantico', sans-serif",
                      margin: 0,
                    }}
                  >
                    Keine Schufa-Prüfung
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "13px",
                      margin: "2px 0 0",
                    }}
                  >
                    Kein Eintrag – absolute Freiheit
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(225,92,85,0.2)",
                    borderRadius: "50%",
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
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "'Quantico', sans-serif",
                      margin: 0,
                    }}
                  >
                    Zusage in 24 Stunden
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "13px",
                      margin: "2px 0 0",
                    }}
                  >
                    Schnell & unkompliziert
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(225,92,85,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83z" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "15px",
                      fontFamily: "'Quantico', sans-serif",
                      margin: 0,
                    }}
                  >
                    Freie Fahrzeugwahl
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "13px",
                      margin: "2px 0 0",
                    }}
                  >
                    PKW, LKW, Maschinen & mehr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
