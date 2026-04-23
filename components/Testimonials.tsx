"use client";
import { useState, useEffect } from "react";

const StarFull = () => (
  <svg width="18" height="18" viewBox="0 0 576 512" fill="#E15C55">
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
  </svg>
);

const StarHalf = () => (
  <svg width="18" height="18" viewBox="0 0 576 512" fill="#E15C55">
    <path d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z" />
  </svg>
);

const testimonials = [
  {
    stars: 5,
    text: '"Ich möchte mich auf diesem weg auch noch einmal herzlich bedanken für Ihre schnelle Arbeitsweise, dass trotz Ihrer internen Regelung zum Ende des Jahres keine Zahlungen mehr erfolgen, an Leasingnehmer oder Händler, diese doch noch möglich gemacht haben. Vielen Dank! Das war ein außergewöhnlicher Einsatz Ihrerseits"',
    name: "Autohaus J",
    job: "",
  },
  {
    stars: 4.5,
    text: '"Mein Leasingantrag war doppelt so schnell durch wie gedacht. Alles lief reibungslos – absolut empfehlenswert."',
    name: "Lena Martins",
    job: "Fahrerin eines Honda Civic",
  },
  {
    stars: 5,
    text: '"Top Service! Selbst als es bei anderen schwierig wurde, hat hier alles reibungslos geklappt. Mein John Deere war schneller da, als ich dachte – klare Empfehlung!"',
    name: "Karl Jäger",
    job: "Fahrer eines John Deere",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section
      className="section-pad"
      style={{
        background: "#F5F2EC",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="container">
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "52px" }} className="scroll-up">
          <span
            className="overline"
            style={{ color: "#E15C55", borderColor: "rgba(225,92,85,0.3)" }}
          >
            Kundenstimmen
          </span>
          <h2 style={{ color: "#101010", marginTop: "12px" }}>
            Was unsere Kunden{" "}
            <span style={{ color: "#E15C55" }}>sagen</span>
          </h2>
        </div>

        <div
          className="scroll-up scroll-d1"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative" }}
        >
          {/* Decorative large quote mark */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-32px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "140px",
              lineHeight: 1,
              color: "#E15C55",
              opacity: 0.1,
              fontFamily: "Georgia, 'Times New Roman', serif",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            ❝
          </div>

          {/* Stars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
              marginBottom: "24px",
              position: "relative",
            }}
          >
            {Array.from({ length: 5 }, (_, i) => {
              if (i < Math.floor(t.stars)) return <StarFull key={i} />;
              if (i < t.stars) return <StarHalf key={i} />;
              return (
                <svg key={i} width="18" height="18" viewBox="0 0 576 512" fill="rgba(0,0,0,0.15)">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
              );
            })}
          </div>

          {/* Quote text */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.75,
              color: "#2d2d2d",
              fontStyle: "italic",
              marginBottom: "32px",
              fontFamily: "'Inter', sans-serif",
              minHeight: "100px",
              position: "relative",
            }}
          >
            {t.text}
          </p>

          {/* Author */}
          <div>
            <p
              style={{
                color: "#101010",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "18px",
                margin: 0,
              }}
            >
              {t.name}
            </p>
            {t.job && (
              <p
                style={{
                  color: "rgba(0,0,0,0.45)",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  margin: "4px 0 0",
                }}
              >
                {t.job}
              </p>
            )}
          </div>

          {/* Dot navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "32px",
            }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Bewertung ${i + 1} anzeigen`}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === current ? "#E15C55" : "rgba(0,0,0,0.18)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
