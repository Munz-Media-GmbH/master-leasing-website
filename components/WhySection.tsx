import ModalOpenButton from "@/components/ModalOpenButton";

export default function WhySection() {
  return (
    <section
      className="section-pad"
      style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        {/* Heading */}
        <div className="scroll-up" style={{ maxWidth: "700px", marginBottom: "60px" }}>
          <h2>
            Warum Auto Leasing{" "}
            <span style={{ color: "#E15C55" }}>ohne Schufa </span>
            eine kluge Entscheidung ist
          </h2>
        </div>

        {/* Two column text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            marginBottom: "80px",
          }}
        >
          <div className="scroll-up">
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Kein Risiko durch negative Schufa
            </h3>
            <p>
              Viele Menschen haben eine negative Schufa oder einen Schufa-Eintrag und glauben,
              dass sie deshalb kein Auto Leasing in Anspruch nehmen können. Bei Master Leasing
              sehen wir das anders. Ein schlechter Schufa-Eintrag oder eine Bonitätsprüfung
              hindern uns nicht daran, Ihnen den Leasingvertrag für Ihr Wunschfahrzeug zu
              ermöglichen. Wir bieten Ihnen eine flexible Lösung, die sich Ihren Bedürfnissen
              anpasst, ohne dass Sie sich um Ihre Bonität sorgen müssen.
            </p>
          </div>
          <div className="scroll-up scroll-d1">
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Flexible Leasingverträge ohne Kilometerbegrenzung
            </h3>
            <p>
              Unsere Leasingverträge bieten Ihnen maximale Flexibilität, ohne
              Kilometerbegrenzung und ohne versteckte Kosten. Master Leasing stellt sicher,
              dass Sie das Fahrzeug Ihrer Wahl fahren können, ohne sich um Einschränkungen
              kümmern zu müssen. Eine große Fahrzeugauswahl ermöglicht es Ihnen, das Modell zu
              wählen, das perfekt zu Ihrem Geschäft und Ihrer persönlichen Situation passt.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div
          className="scroll-up"
          style={{
            background: "#0c0c0c",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Left */}
            <div style={{ padding: "48px" }}>
              <span className="overline">So funktioniert es</span>
              <h3
                style={{
                  color: "#fff",
                  fontFamily: "'Quantico', sans-serif",
                  marginBottom: "16px",
                }}
              >
                Fahrzeug Leasing ohne Bankauskunft
              </h3>
              <p style={{ marginBottom: "24px" }}>
                Bei Master Leasing legen wir großen Wert auf Seriosität und Verlässlichkeit.
                Als erfahrener Anbieter im Bereich Auto Leasing ohne Schufa bieten wir
                gewerblichen Kunden eine attraktive Möglichkeit, Fahrzeuge zu leasen, ohne
                sich einer Bankauskunft oder Bonitätsprüfung unterziehen zu müssen. Mit mehr
                als Jahren Erfahrung in der Branche sind wir Ihr seriöser Partner, auf den
                Sie sich verlassen können.
              </p>
            </div>

            {/* Right */}
            <div
              style={{
                padding: "48px",
                background: "rgba(225,92,85,0.05)",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(225,92,85,0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 384 512" fill="#E15C55">
                    <path d="M296 192h-79.9V128H296c35.3 0 64 28.7 64 64s-28.7 64-64 64H192.1V192H296zM0 448V64C0 28.7 28.7 0 64 0h192c88.4 0 160 71.6 160 160s-71.6 160-160 160H128v128c0 35.3-28.7 64-64 64H0V448z" />
                  </svg>
                </div>
                <div>
                  <h4
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontSize: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    Leasingvertrag mit transparenter und flexibler Laufzeit
                  </h4>
                  <p style={{ fontSize: "15px" }}>
                    Ob kurzfristiges Leasing oder eine längere Laufzeit – bei Master Leasing
                    haben Sie die Freiheit, den Leasingvertrag so zu gestalten, dass er
                    perfekt zu Ihren Bedürfnissen passt. Monatliche Leasingraten werden
                    transparent und fair kalkuliert, ohne versteckte Kosten oder Gebühren.
                  </p>
                </div>
              </div>

              <ModalOpenButton className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Jetzt anfragen
              </ModalOpenButton>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
