import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeasingCalculator from "@/components/LeasingCalculator";

export const metadata: Metadata = {
  title: "Preview · Leasing-Rechner | Master Leasing",
  description:
    "Interne Preview-Seite für den geplanten Leasing-Rechner. Konditionen sind Platzhalter — vor Live-Schaltung mit Gregor abstimmen.",
  robots: { index: false, follow: false },
};

export default function LeasingRechnerPreview() {
  return (
    <>
      <Header />
      <main style={{ background: "#0a0a0a", padding: "120px 16px 80px" }}>
        <div
          className="container"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 10px",
              background: "rgba(255,200,80,0.12)",
              border: "1px solid rgba(255,200,80,0.4)",
              borderRadius: "999px",
              color: "#ffc850",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              marginBottom: "16px",
            }}
          >
            INTERNE PREVIEW · NICHT INDEXIERT
          </span>
          <h1
            style={{
              fontFamily: "'Quantico', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              marginBottom: "12px",
            }}
          >
            Leasing-Rechner
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
            Konzept für den Hero auf master-leasing.com. Zahlen sind
            Platzhalter — bitte mit Gregor abstimmen, dann lebt die Komponente
            in den Hero.
          </p>
          <LeasingCalculator variant="preview" />

          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              color: "rgba(255,255,255,0.75)",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            <h2
              style={{
                fontFamily: "'Quantico', sans-serif",
                fontSize: "18px",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              ⚙️ Mit Gregor abzustimmende Parameter
            </h2>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
              <li>
                <strong>MONTHLY_FACTOR pro Laufzeit</strong> (24/36/48/60 Monate)
                — aktuell Platzhalter 0.0155 – 0.0235
              </li>
              <li>
                <strong>Anzahlungs-Optionen</strong> — passen 0/10/20/30 % zu
                den LSZ-Tarifen aus AGB §6? Eventuell LSZ10/25/30/35/40/45/50
                exakt mappen.
              </li>
              <li>
                <strong>Min/Max-Preis</strong> — aktuell 5.000 € bis 150.000 €
              </li>
              <li>
                <strong>Disclaimer-Text</strong> — Wording für „unverbindlich"
                + „verbindliche Konditionen nach Prüfung"
              </li>
              <li>
                <strong>Vermittlungsgebühr</strong> aus AGB §7 (2,9–4,9 %) —
                soll diese im Rechner angezeigt oder versteckt sein?
              </li>
            </ul>
            <p style={{ marginTop: "8px", fontSize: "13px", opacity: 0.7 }}>
              Datei zur Konfiguration:{" "}
              <code
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                }}
              >
                components/LeasingCalculator.tsx
              </code>{" "}
              · Block „TUNING-PARAMETER" oben in der Datei.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
