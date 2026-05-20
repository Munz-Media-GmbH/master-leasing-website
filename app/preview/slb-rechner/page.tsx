import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlbValueCalculator from "@/components/SlbValueCalculator";

export const metadata: Metadata = {
  title: "Preview · Sale-and-Leaseback-Bewertung | Master Leasing",
  description:
    "Interne Preview-Seite für den geplanten SLB-Rechner. Auszahlungsquoten sind Platzhalter — vor Live-Schaltung mit Gregor abstimmen.",
  robots: { index: false, follow: false },
};

export default function SlbRechnerPreview() {
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
            Sale-and-Leaseback-Bewertung
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
            Konzept für die SLB-Seite (Hero oder eigene Sektion). Zahlen sind
            Platzhalter — bitte mit Gregor abstimmen.
          </p>

          <SlbValueCalculator variant="preview" />

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
                <strong>PAYOUT_RATIO pro Objekttyp</strong> — aktuell 70–80 %
                (PKW 72 %, Nutzfahrzeug 70 %, LKW 78 %, Maschine 80 %,
                Landmaschine 78 %)
              </li>
              <li>
                <strong>Altersabschlag</strong> aktuell 1,5 % pro Jahr,
                gedeckelt bei 25 %
              </li>
              <li>
                <strong>Min-Quote</strong> Hard-Floor bei 45 % — passt das?
              </li>
              <li>
                <strong>LEASEBACK_MONTHLY_FACTOR</strong> 24/36/48/60 Monate —
                aktuell 0.052 / 0.038 / 0.032 / 0.028 vom Auszahlungsbetrag
              </li>
              <li>
                <strong>Min-Wert 10.000 €</strong> ist per AGB Pflicht — Code
                sperrt CTA und zeigt Hinweis. OK so?
              </li>
              <li>
                <strong>Wording</strong> &quot;ca. X % vom Marktwert&quot;:
                Risiko für Gregor falls Erwartung &gt; Realangebot. Eventuell
                großzügigeren Range zeigen (±10 % statt ±4 %)?
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
                components/SlbValueCalculator.tsx
              </code>{" "}
              · Block „TUNING" oben in der Datei.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
