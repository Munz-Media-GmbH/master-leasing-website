import { articles, type RatgeberTopic } from "@/lib/ratgeber";

interface Props {
  title: React.ReactNode;
  topic?: RatgeberTopic;
  slugs?: string[];
}

// Leistungsseite → passende Ratgeber-Beiträge (Cluster-Verlinkung)
export default function RatgeberLinks({ title, topic, slugs }: Props) {
  const list = slugs
    ? slugs.map((s) => articles.find((a) => a.slug === s)).filter((a) => a !== undefined)
    : articles.filter((a) => a.topic === topic);
  if (list.length === 0) return null;

  return (
    <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="scroll-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="overline">Ratgeber</span>
          <h2 style={{ marginTop: "12px", color: "#fff" }}>{title}</h2>
        </div>
        <div className="rgl-grid">
          {list.map((a) => (
            <a key={a.slug} href={`/ratgeber/${a.slug}`} className="rgl-card">
              <span className="rgl-q">{a.question}</span>
              <span className="rgl-more">Antwort lesen →</span>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .rgl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .rgl-card { display: flex; flex-direction: column; gap: 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px 22px; transition: border-color 0.2s; }
        .rgl-card:hover { border-color: rgba(225,92,85,0.5); }
        .rgl-q { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 17px; line-height: 1.35; }
        .rgl-more { color: #E15C55; font-size: 14px; margin-top: auto; }
        @media (max-width: 1024px) { .rgl-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .rgl-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
