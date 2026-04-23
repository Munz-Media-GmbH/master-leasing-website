"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Welche Fahrzeuge kann ich leasen? Habe ich eine freie Händlerwahl?",
    a: "Wir bieten eine große Auswahl an Fahrzeugen, von Opel Corsa bis hin zu Mercedes oder Skoda. Wählen Sie einfach das Fahrzeug, das zu Ihrem Geschäft oder Ihrem Leben passt!",
  },
  {
    q: "Wie schnell bekomme ich eine Leasingzusage?",
    a: "Oft schon innerhalb von 24 Stunden – bei Master Leasing geht alles schnell und unkompliziert. Keine Schufa-Prüfung, keine Bankauskunft, sondern sofortige Leasingzusage!",
  },
  {
    q: "Gibt es eine Kilometerbegrenzung?",
    a: "Bei uns gibt es keine Einschränkungen – fahren Sie so viele Kilometer, wie Sie möchten!",
  },
  {
    q: "Kann ich auch mit einem negativen Schufaeintrag leasen?",
    a: "Ja, bei Master Leasing ist das möglich. Wir bieten Ihnen Leasingverträge auch ohne Schufa-Abfrage oder Bankauskunft.",
  },
  {
    q: "Wie stelle ich eine Leasinganfrage?",
    a: "Füllen Sie einfach das Leasinganfrage-Formular aus und wir melden uns schnell bei Ihnen, um alle Details zu klären.",
  },
  {
    q: "Kann ich Fahrzeugleasing auch mit schlechter Schufa bekommen?",
    a: "Ja, bei Master Leasing ist Fahrzeugleasing auch mit einer schlechten Schufa möglich. Eine Schufa-Auskunft oder Bankprüfung ist bei uns nicht erforderlich. Wir bieten Ihnen flexible Leasingkonditionen, die Ihnen auch mit einem negativen Schufa-Eintrag den nötigen finanziellen Spielraum verschaffen, um Ihr Wunschfahrzeug zu leasen.",
  },
];

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
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
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <span className="overline">FAQ</span>
            <h2>
              <span style={{ color: "#E15C55" }}>Häufige Fragen zum</span>
              <br />
              Auto Leasing ohne Schufa
            </h2>
            <p style={{ marginTop: "20px" }}>
              Haben Sie noch Fragen? Hier finden Sie Antworten auf die häufigsten Fragen rund
              um unser Auto Leasing ohne Schufa.
            </p>
            <a
              href="https://master-leasing.com/kontakt/"
              className="btn-primary"
              style={{ marginTop: "32px", display: "inline-flex" }}
            >
              Weitere Fragen? Kontakt aufnehmen
            </a>
          </div>

          {/* Right: Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="accordion-item">
                <button
                  className="accordion-btn"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span style={{ flex: 1 }}>{faq.q}</span>
                  <span
                    style={{
                      color: open === i ? "#E15C55" : "rgba(255,255,255,0.4)",
                      transition: "color 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    {open === i ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div className={`accordion-content ${open === i ? "open" : ""}`}>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
