import { articles, topicMeta, type RatgeberTopic } from "@/lib/ratgeber";

// Startseite → Ratgeber + Leistungsseiten (interne Verlinkung mit Keyword-Ankern)
const featured: Record<RatgeberTopic, string[]> = {
  schufa: [
    "leasing-trotz-schlechter-bonitaet",
    "ist-leasing-ohne-schufa-serioes",
    "gebrauchtwagen-leasing-ohne-schufa",
    "bank-hat-finanzierung-abgelehnt",
  ],
  slb: [
    "auto-beleihen-und-weiterfahren",
    "wie-funktioniert-sale-and-leaseback",
    "auto-verpfaenden-oder-sale-and-leaseback",
    "traktor-landmaschinen-beleihen",
  ],
};

const landingAnchor: Record<RatgeberTopic, string> = {
  schufa: "Auto leasen trotz negativer Schufa →",
  slb: "Auto beleihen mit Sale & Leaseback →",
};

export default function RatgeberTeaser() {
  return (
    <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="scroll-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="overline">Ratgeber</span>
          <h2 style={{ marginTop: "12px", color: "#fff" }}>
            Ihre Fragen – <span style={{ color: "#E15C55" }}>unsere Antworten</span>
          </h2>
        </div>
        <div className="rgt-grid">
          {(["schufa", "slb"] as RatgeberTopic[]).map((topic) => (
            <div key={topic} className="rgt-col">
              <p className="rgt-title">{topicMeta[topic].label}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {featured[topic]
                  .map((slug) => articles.find((a) => a.slug === slug))
                  .filter((a) => a !== undefined)
                  .map((a) => (
                    <a key={a.slug} href={`/ratgeber/${a.slug}`} className="rgt-item">
                      {a.question}
                    </a>
                  ))}
              </div>
              <a href={topicMeta[topic].landing.href} className="rgt-landing">
                {landingAnchor[topic]}
              </a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a href="/ratgeber" className="btn-outline">
            Alle Fragen im Ratgeber
          </a>
        </div>
      </div>
      <style>{`
        .rgt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .rgt-col { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px 26px; display: flex; flex-direction: column; gap: 18px; }
        .rgt-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 20px; margin: 0; }
        .rgt-item { color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.5; padding: 12px 14px; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; transition: border-color 0.2s, color 0.2s; }
        .rgt-item:hover { border-color: rgba(225,92,85,0.5); color: #fff; }
        .rgt-landing { color: #E15C55; font-weight: 500; font-size: 16px; margin-top: auto; }
        @media (max-width: 768px) { .rgt-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
