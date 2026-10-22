import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, topicMeta, type RatgeberTopic } from "@/lib/ratgeber";

export const metadata: Metadata = {
  title: "Ratgeber: Leasing ohne Schufa & Sale & Leaseback",
  description:
    "Antworten auf die häufigsten Fragen zu Leasing ohne Schufa und Sale & Leaseback / Fahrzeugbeleihung – kurz, verständlich und für Gewerbekunden.",
  alternates: { canonical: "https://master-leasing.com/ratgeber" },
  robots: "follow, index",
};

const order: RatgeberTopic[] = ["slb", "schufa"];

export default function RatgeberIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop: "150px", paddingBottom: "56px", background: "#0a0a0a" }}>
          <div className="container">
            <span className="overline">Ratgeber</span>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.15, maxWidth: "820px", margin: "8px 0 18px" }}>
              Fragen &amp; Antworten zu <span style={{ color: "#E15C55" }}>Leasing ohne Schufa</span> und Sale &amp; Leaseback
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "18px", lineHeight: 1.7, maxWidth: "640px", margin: 0 }}>
              Kurze, klare Antworten für Selbstständige, Unternehmen und Landwirte – direkt vom Leasingmakler.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {order.map((topic) => {
              const list = articles.filter((a) => a.topic === topic);
              if (list.length === 0) return null;
              return (
                <div key={topic}>
                  <h2 style={{ color: "#fff", fontSize: "clamp(24px, 2.6vw, 32px)", marginBottom: "20px" }}>
                    {topicMeta[topic].label}
                  </h2>
                  <div className="rgi-grid">
                    {list.map((a) => (
                      <a key={a.slug} href={`/ratgeber/${a.slug}`} className="rgi-card">
                        <span className="rgi-q">{a.question}</span>
                        <span className="rgi-a">{a.shortAnswer.slice(0, 150)}…</span>
                        <span className="rgi-more">Antwort lesen →</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .rgi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .rgi-card { display: flex; flex-direction: column; gap: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 26px 24px; transition: border-color 0.2s; }
        .rgi-card:hover { border-color: rgba(225,92,85,0.5); }
        .rgi-q { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 19px; line-height: 1.35; }
        .rgi-a { color: rgba(255,255,255,0.55); font-size: 15px; line-height: 1.6; }
        .rgi-more { color: #E15C55; font-size: 14px; margin-top: auto; }
        @media (max-width: 1024px) { .rgi-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .rgi-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
