import ModalOpenButton from "@/components/ModalOpenButton";
export default function SaleLeaseBack() {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
          <path d="M32 448c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 384zm128-240c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-16zm0 96c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-16zm-48-192l192 0 0 64L112 208l0-96z" />
        </svg>
      ),
      title: "Schnelle Auszahlung",
      desc: "Nach Vertragsabschluss erfolgt die Auszahlung zeitnah.",
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.5 33.3-6.5s4.5-25.9-6.5-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      ),
      title: "Kennzeichen bleibt bestehen",
      desc: "Das Fahrzeug behält sein bestehendes Kennzeichen.",
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
      ),
      title: "Versicherung unverändert",
      desc: "Die bestehende Versicherung kann in der Regel weitergeführt werden.",
    },
    {
      icon: (
        <svg viewBox="0 0 640 512" fill="currentColor" width="24" height="24">
          <path d="M480 80C480 35.8 515.8 0 560 0C622.8 0 656.4 72.5 616.1 119.8L608 128l0 32-352 0 0-32-8.1-8.2C207.6 72.5 241.2 0 304 0c44.2 0 80 35.8 80 80c0 9.5-1.7 18.7-4.9 27.1C391.2 100 403.2 96 416 96c12.8 0 24.8 4 36.9 11.1C449.7 98.7 448 89.5 448 80zM0 336c0-79.5 64.5-144 144-144l48 0 0 96-96 0 0 32 96 0 0 32-96 0 0 32 96 0 0 32-48 0c-79.5 0-144-64.5-144-144zm384 144l-48 0 0-32 96 0 0-32-96 0 0-32 96 0 0-32-96 0 0-96 48 0c79.5 0 144 64.5 144 144s-64.5 144-144 144z" />
        </svg>
      ),
      title: "Für PKW und Maschinen",
      desc: "Sale and Leaseback ist nicht nur auf PKW beschränkt.",
    },
    {
      icon: (
        <svg viewBox="0 0 384 512" fill="currentColor" width="24" height="24">
          <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L96 416c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32zm0 160l192 0 0-128L96 256l0 128z" />
        </svg>
      ),
      title: "Steuerlich klar einzuordnen",
      desc: "Leasingraten gelten als Betriebsausgaben.",
    },
    {
      icon: (
        <svg viewBox="0 0 576 512" fill="currentColor" width="24" height="24">
          <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM272 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zM164 152l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.1 2.8 16.1 13.3 13.3 23.4s-13.3 16.1-23.4 13.3c-3.9-1.1-8-2-12.2-2.7c-4-.7-8.2-.9-12.1-.7c-3.9 .2-7 1-9.2 2.1c-1.9 1-3.4 2.4-4.5 4.7c-1.1 2.4-1.8 6-1.6 11.1c.1 4.3 1.1 7.4 2.8 9.8c2 2.8 5.1 5.4 9.9 7.7c10.2 5 24.2 7.6 41.4 11.2l4.3 .9c17.2 3.6 34.3 8.4 47.8 17.4c7.1 4.6 13.5 10.7 18 18.9c4.6 8.3 6.6 17.8 6.7 28c.1 13.1-3.5 24.6-10.5 34c-6.8 9.2-16.6 15.7-27.4 19.7c-5.3 2-10.8 3.4-16.4 4.3L168 360l0 14c0 10.6-8.6 19.2-19.2 19.2c-10.6 0-19.2-8.6-19.2-19.2l0-14c-10.7-1.9-20.5-5.3-28.5-8.2c-2.4-.9-4.7-1.7-6.8-2.4c-10.1-3.4-15.5-14.3-12.1-24.4s14.3-15.5 24.4-12.1c2.9 1 5.9 2 9 3c12.2 4 25 8.2 38.2 8.2c4.4 0 8.7-.5 12.5-1.4c3.9-.9 7-2.3 9.4-4.2c2.1-1.7 4.1-4.2 4.7-9.1c.3-2.9 .1-5.8-.7-8.3c-1-3.2-3-5.7-6.3-8.1c-8.6-6.1-22.2-9.5-39.5-13.2l-3.8-.8c-16.7-3.5-34.6-8.6-48.3-18.6c-7.7-5.5-14.4-12.8-18.8-22c-4.4-9.1-6.1-19.3-6-29.9c.1-12.6 3.5-23.7 9.8-32.8c5.6-8.1 13.5-14.1 22.4-18c6.8-3 14.2-4.9 21.8-5.8L168 152c0-10.6 8.6-19.2 19.2-19.2c10.6 0 19.2 8.6 19.2 19.2l-2.4 0z" />
        </svg>
      ),
      title: "Keine neue Kreditbelastung",
      desc: "Sale and Leaseback erfolgt ohne klassische Kreditaufnahme.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Kurze Einordnung",
      duration: "ca. 10–15 Min.",
      desc: "Unverbindliche Anfrage und erste Einschätzung",
    },
    {
      number: "02",
      title: "Prüfung & Angebot",
      duration: "1–3 Werktage",
      desc: "Bewertung des Fahrzeugs und konkretes Angebot",
    },
    {
      number: "03",
      title: "Entscheidung & Vertrag",
      duration: "unter 30 Min.",
      desc: "Durchsicht der Unterlagen und Vertragsabschluss",
    },
    {
      number: "04",
      title: "Auszahlung & Nutzung",
      duration: "5–7 Werktage",
      desc: "Zeitnahe Auszahlung, Fahrzeug bleibt im Einsatz",
    },
  ];

  const useCases = [
    {
      icon: (
        <svg viewBox="0 0 448 512" fill="currentColor" width="28" height="28">
          <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
        </svg>
      ),
      title: "Wachstum finanzieren",
      desc: "Setzen Sie gebundenes Kapital aus dem Fuhrpark frei und investieren Sie es gezielt in Wachstum, neue Aufträge oder Expansion.",
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
          <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zm48 32c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm112-32c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      ),
      title: "Liquidität überbrücken",
      desc: "Kurzfristige Engpässe überbrücken – ohne Bankkredit, ohne Bonitätsprüfung, ohne operative Einschränkungen.",
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
          <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM294.6 135.1c-3.9 4-5.9 9.4-5.6 14.9l8.2 147.9c.6 10.9 9.6 19.4 20.5 19.4l112 0c11 0 20-9 20-20s-9-20-20-20l-93.3 0-7.7-138.5c-.6-10.4-9-18.6-19.4-18.6c-5.5 0-10.7 2.2-14.7 5.8zm-199.2 5.8c-4 3.6-6.3 8.8-6.3 14.2l0 56c0 9.7 3.5 19.1 9.8 26.4l60.7 71.4C176.4 338.5 192 365.3 192 396c0 11 9 20 20 20s20-9 20-20c0-41.7-20.4-79.1-54.5-103l-53.7-63.2 0-44.8 89.4 0c10.4 0 18.8-8.2 19.4-18.6l1.4-25.1c.6-10.9-7.6-20.1-18.5-20.7L128 118.5c-.3 0-.7 0-1 0c-5.5 0-10.8 2.2-14.8 6.1l-17.8 16.3z" />
        </svg>
      ),
      title: "Flexibel bleiben",
      desc: "Reagieren Sie auf Marktchancen, ohne Kapital in Fahrzeugen zu blockieren. Operative Freiheit und finanzielle Beweglichkeit zugleich.",
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
      ),
      title: "Puffer aufbauen",
      desc: "Einen finanziellen Puffer anlegen, bevor er gebraucht wird – proaktiv und ohne Ihr Tagesgeschäft zu beeinträchtigen.",
    },
  ];

  const faqItems = [
    {
      q: "Bleibt das Fahrzeug wirklich in meinem Unternehmen?",
      a: "Ja. Sie nutzen das Fahrzeug weiterhin uneingeschränkt im Tagesgeschäft. Der einzige Unterschied: Das Eigentum geht auf uns über, während Sie es per Leasingvertrag zurückleasen.",
    },
    {
      q: "Ist Sale and Leaseback teurer als ein Kredit?",
      a: "Sale and Leaseback ist kein Kredit und nicht direkt vergleichbar. Die Konditionen hängen vom Fahrzeugwert, der Laufzeit und Ihrer individuellen Situation ab. Für viele Unternehmen ist es eine günstigere oder zumindest planbarer kalkulierbare Alternative.",
    },
    {
      q: "Was passiert mit Versicherung und Kennzeichen?",
      a: "In der Regel bleiben Versicherung und Kennzeichen unverändert bestehen. Details klären wir im Rahmen des Angebots gemeinsam mit Ihnen.",
    },
    {
      q: "Muss ich mehrere Fahrzeuge einbringen?",
      a: "Nein. Sale and Leaseback ist sowohl für einzelne als auch mehrere Fahrzeuge oder ganze Fuhrparks möglich – sofern die jeweiligen Voraussetzungen erfüllt sind.",
    },
    {
      q: "Wie schnell erhalte ich die Auszahlung?",
      a: "Nach Vertragsabschluss in vielen Fällen innerhalb weniger Tage. Unser Prozess ist darauf ausgelegt, schnell und unkompliziert abzuwickeln.",
    },
  ];

  return (
    <>
      {/* ── Sektion 1: Warum Sale and Leaseback ── */}
      <section
        id="sale-leaseback"
        className="section-pad"
        style={{
          background: "#101010",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="scroll-up" style={{ maxWidth: "700px", marginBottom: "16px" }}>
            <span className="overline">Sale and Leaseback</span>
            <h2 style={{ marginTop: "12px", marginBottom: "20px" }}>
              Warum{" "}
              <span style={{ color: "#E15C55" }}>Sale and Leaseback</span>{" "}
              für Unternehmen interessant sein kann
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", lineHeight: "1.75" }}>
              Für viele Unternehmen ist Sale and Leaseback ein Weg, finanzielle Flexibilität zu
              gewinnen, ohne operative Abläufe oder Mobilität einzuschränken.
            </p>
          </div>

          <div
            className="slb-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "56px",
            }}
          >
            {[
              {
                title: "Sofortige Liquidität",
                desc: "Durch Sale and Leaseback wird gebundenes Kapital aus dem Fahrzeugbestand freigesetzt. Sie erhalten einmalig Liquidität, während das Fahrzeug weiterhin uneingeschränkt in Ihrem Unternehmen genutzt wird.",
              },
              {
                title: "Planbare Kosten",
                desc: "Anstelle von Kapital, das im Fahrzeug gebunden ist, zahlen Sie eine klar kalkulierbare Leasingrate. Laufzeit und Konditionen sind von Beginn an festgelegt.",
              },
              {
                title: "Auch für Flotten",
                desc: "Nicht nur einzelne Fahrzeuge – auch ganze Fuhrparks können einbezogen werden, sofern die Voraussetzungen erfüllt sind.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`scroll-up${i > 0 ? ` scroll-d${i}` : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    background: "#E15C55",
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Quantico', sans-serif",
                    fontSize: "22px",
                    color: "#fff",
                    marginBottom: "14px",
                    lineHeight: "1.2",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "rgba(255,255,255,0.6)" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sektion 2: Einfach & Praktisch – 6 Vorteile ── */}
      <section
        className="section-pad"
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="scroll-up" style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="overline">Ihre Vorteile</span>
            <h2 style={{ marginTop: "12px", marginBottom: "16px" }}>Einfach &amp; Praktisch</h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", maxWidth: "540px", margin: "0 auto" }}>
              Wir von Master-Leasing achten darauf, dass Sie alle Vorteile bekommen, damit Ihr
              Alltag erleichtert wird.
            </p>
          </div>

          <div
            className="slb-benefits-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`scroll-up${i % 3 !== 0 ? ` scroll-d${Math.min(i % 3, 2)}` : ""}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                  padding: "28px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(225,92,85,0.12)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#E15C55",
                    flexShrink: 0,
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      margin: 0,
                      marginBottom: "6px",
                      lineHeight: "1.3",
                    }}
                  >
                    {b.title}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "15px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sektion 3: Übersichtstabelle ── */}
      <section
        className="section-pad"
        style={{
          background: "#101010",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="overline">Entscheidungshilfe</span>
            <h2 style={{ marginTop: "12px", marginBottom: "16px" }}>Ein Überblick für Sie</h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)" }}>
              Wann Sale and Leaseback sinnvoll ist
            </p>
          </div>

          <div
            className="slb-table-grid scroll-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Left: WENIGER sinnvoll */}
            <div
              style={{
                padding: "40px 36px",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(225,92,85,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 384 512" fill="#E15C55" width="12" height="12">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </div>
                <p
                  style={{
                    color: "#E15C55",
                    fontFamily: "'Quantico', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Weniger sinnvoll
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Fahrzeugwert liegt unter 10.000 €",
                  "Private Nutzung ohne gewerblichen Bezug",
                  "Kurzfristige Nutzung des Fahrzeugs geplant",
                  "Fahrzeug soll zeitnah verkauft werden",
                  "Leasingrate passt nicht zur Liquiditätsplanung",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <svg
                      viewBox="0 0 384 512"
                      fill="#E15C55"
                      width="14"
                      height="14"
                      style={{ marginTop: "4px", flexShrink: 0, opacity: 0.7 }}
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.5" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SEHR sinnvoll */}
            <div
              style={{
                padding: "40px 36px",
                background: "rgba(225,92,85,0.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 448 512" fill="#22c55e" width="13" height="13">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>
                <p
                  style={{
                    color: "#22c55e",
                    fontFamily: "'Quantico', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Sehr sinnvoll
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Liquidität wird kurzfristig benötigt",
                  "Kapital ist im Fahrzeugbestand gebunden",
                  "Fahrzeuge sind bereits vollständig bezahlt",
                  "Investitionen oder Wachstum stehen an",
                  "Ein Liquiditätspuffer soll aufgebaut werden",
                  "Kreditlinien sollen nicht weiter belastet werden",
                  "Finanzielle Flexibilität hat Priorität",
                  "Fahrzeuge werden weiterhin im Tagesgeschäft benötigt",
                  "Klare, planbare Kosten sind gewünscht",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <svg
                      viewBox="0 0 448 512"
                      fill="#22c55e"
                      width="14"
                      height="14"
                      style={{ marginTop: "4px", flexShrink: 0 }}
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: "1.5" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sektion 4: Prozess / Timeline ── */}
      <section
        className="section-pad"
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="scroll-up" style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="overline">Der Ablauf</span>
            <h2 style={{ marginTop: "12px" }}>
              So läuft Sale and Leaseback{" "}
              <span style={{ color: "#E15C55" }}>bei uns ab</span>
            </h2>
          </div>

          <div
            className="slb-process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: "28px",
                left: "calc(12.5% + 20px)",
                right: "calc(12.5% + 20px)",
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                zIndex: 0,
              }}
            />

            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Step number circle */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: i === 0 ? "#E15C55" : "#1a1a1a",
                    border: `2px solid ${i === 0 ? "#E15C55" : "rgba(255,255,255,0.12)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Quantico', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#fff",
                    marginBottom: "24px",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>

                <p
                  style={{
                    color: "#E15C55",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  {step.duration}
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontFamily: "'Quantico', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    margin: 0,
                    marginBottom: "10px",
                    lineHeight: "1.3",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "15px",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="scroll-up" style={{ textAlign: "center", marginTop: "56px" }}>
            <ModalOpenButton className="btn-primary">
              <svg viewBox="0 0 256 512" fill="currentColor" width="14" height="14">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
              Unverbindlich anfragen
            </ModalOpenButton>
          </div>
        </div>
      </section>

      {/* ── Sektion 5: Use Cases 2x2 ── */}
      <section
        className="section-pad"
        style={{
          background: "#101010",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="scroll-up" style={{ maxWidth: "600px", marginBottom: "56px" }}>
            <span className="overline">Anwendungsfälle</span>
            <h2 style={{ marginTop: "12px", marginBottom: "16px" }}>
              Liquidität wieder{" "}
              <span style={{ color: "#E15C55" }}>freisetzen</span>
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)" }}>
              Wenn Kapital im Fuhrpark gebunden ist
            </p>
          </div>

          <div
            className="slb-usecases-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`scroll-up${i % 2 !== 0 ? " scroll-d1" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "rgba(225,92,85,0.1)",
                    border: "1px solid rgba(225,92,85,0.2)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#E15C55",
                    flexShrink: 0,
                  }}
                >
                  {uc.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontFamily: "'Quantico', sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      margin: 0,
                      marginBottom: "10px",
                      lineHeight: "1.2",
                    }}
                  >
                    {uc.title}
                  </p>
                  <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.7" }}>
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sektion 6: FAQ ── */}
      <section
        className="section-pad"
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="overline">FAQ</span>
            <h2 style={{ marginTop: "12px" }}>
              Häufige <span style={{ color: "#E15C55" }}>Fragen</span>
            </h2>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {faqItems.map((item, i) => (
              <details
                key={item.q}
                className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "22px 28px",
                    cursor: "pointer",
                    listStyle: "none",
                    color: "#fff",
                    fontFamily: "'Quantico', sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    lineHeight: "1.4",
                    gap: "16px",
                  }}
                >
                  <span>{item.q}</span>
                  <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    width="14"
                    height="14"
                    style={{ color: "#E15C55", flexShrink: 0 }}
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </summary>
                <div
                  style={{
                    padding: "0 28px 24px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "20px",
                  }}
                >
                  <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: "1.75" }}>
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .slb-cards-grid { grid-template-columns: 1fr !important; }
          .slb-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .slb-process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .slb-process-grid > div { padding: 0 !important; }
          .slb-table-grid { grid-template-columns: 1fr !important; }
          .slb-table-grid > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; }
        }
        @media (max-width: 768px) {
          .slb-benefits-grid { grid-template-columns: 1fr !important; }
          .slb-usecases-grid { grid-template-columns: 1fr !important; }
          .slb-process-grid { grid-template-columns: 1fr !important; }
        }
        details[open] summary svg:last-child {
          transform: rotate(180deg);
        }
        details summary svg {
          transition: transform 0.2s ease;
        }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
