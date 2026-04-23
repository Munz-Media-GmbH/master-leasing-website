"use client";
import Image from "next/image";

const cards = [
  { img: "/images/fahrzeug-pkw.jpg", label: "Pkw & Limousinen" },
  { img: "/images/fahrzeug-nutzfahrzeug.jpg", label: "LKW & Transporter" },
  { img: "/images/fahrzeug-landwirtschaft.jpg", label: "Landmaschinen" },
  { img: "/images/fahrzeug-geraete.jpg", label: "Maschinen & Geräte" },
];

interface WasWirLeasenSectionProps {
  heading?: string;
  overline?: string;
  accentWord?: string;
}

export default function WasWirLeasenSection({
  heading = "Was wir leasen",
  overline = "Unser Angebot",
  accentWord = "leasen",
}: WasWirLeasenSectionProps) {
  const renderHeading = () => {
    if (!accentWord || !heading.includes(accentWord)) {
      return <>{heading}</>;
    }
    const parts = heading.split(accentWord);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#E15C55" }}>{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className="section-pad"
      style={{
        background: "#101010",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="overline">{overline}</span>
          <h2
            style={{
              fontFamily: "var(--font-quantico)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {renderHeading()}
          </h2>
        </div>

        <div className="was-wir-leasen-grid">
          {cards.map((card) => (
            <div
              key={card.label}
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src={card.img}
                alt={card.label}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%)",
                  pointerEvents: "none",
                }}
              />
              {/* Label */}
              <span
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontFamily: "var(--font-quantico)",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  padding: "0 8px",
                }}
              >
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .was-wir-leasen-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 640px) {
          .was-wir-leasen-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
