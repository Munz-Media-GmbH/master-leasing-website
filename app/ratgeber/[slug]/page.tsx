import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RatgeberCTAButton from "@/components/RatgeberCTAButton";
import { articles, getArticle, topicMeta, type RatgeberTopic } from "@/lib/ratgeber";

const SITE = "https://master-leasing.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Beitrag nicht gefunden" };
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: `${SITE}/ratgeber/${article.slug}` },
    robots: "follow, index",
    openGraph: {
      type: "article",
      title: article.question,
      description: article.description,
      url: `${SITE}/ratgeber/${article.slug}`,
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
  };
}

// ── Topic-spezifischer Conversion-Teil ──────────────────────────────
const conversion: Record<
  RatgeberTopic,
  {
    heroImage: string;
    ctaLabel: string;
    benefits: { title: string; desc: string }[];
    steps: { number: string; title: string; duration: string; desc: string }[];
    sidebar: { title: string; points: string[] };
  }
> = {
  slb: {
    heroImage: "/images/shutterstock_18982980191-scaled.jpg",
    ctaLabel: "Sale & Leaseback unverbindlich anfragen",
    benefits: [
      { title: "Sofortige Liquidität", desc: "Gebundenes Kapital aus Fahrzeugen und Maschinen wird frei – einmalig und planbar." },
      { title: "Fahrzeug bleibt im Einsatz", desc: "Sie fahren einfach weiter. Kennzeichen und Versicherung bleiben in der Regel bestehen." },
      { title: "Ohne Bank & Schufa", desc: "Entscheidend ist der Wert des Fahrzeugs – nicht Ihre Bonität oder die Hausbank." },
      { title: "Keine neue Kreditbelastung", desc: "Verkauf statt Kredit. Die Leasingraten gelten als Betriebsausgaben." },
    ],
    steps: [
      { number: "01", title: "Kurze Einordnung", duration: "ca. 10–15 Min.", desc: "Unverbindliche Anfrage und erste Einschätzung" },
      { number: "02", title: "Prüfung & Angebot", duration: "1–3 Werktage", desc: "Bewertung des Fahrzeugs und konkretes Angebot" },
      { number: "03", title: "Entscheidung & Vertrag", duration: "unter 30 Min.", desc: "Durchsicht der Unterlagen und Vertragsabschluss" },
      { number: "04", title: "Auszahlung & Nutzung", duration: "5–7 Werktage", desc: "Zeitnahe Auszahlung, Fahrzeug bleibt im Einsatz" },
    ],
    sidebar: {
      title: "Kapital aus Ihrem Fuhrpark freisetzen",
      points: ["Ohne Bank & Schufa", "Fahrzeug bleibt im Einsatz", "PKW, LKW, Traktor & Maschinen", "Persönlicher Ansprechpartner"],
    },
  },
  schufa: {
    heroImage: "/images/fahrzeug-pkw.jpg",
    ctaLabel: "Leasing ohne Schufa anfragen",
    benefits: [
      { title: "Ohne Schufa-Abfrage", desc: "Keine Bankauskunft, keine klassische Bonitätsprüfung." },
      { title: "Zusage oft in 24 Stunden", desc: "Schlanker Prozess statt wochenlanger Bankprüfung." },
      { title: "Neu & gebraucht", desc: "PKW, Transporter, LKW, Traktoren und Maschinen aller Marken." },
      { title: "Für Gewerbekunden", desc: "Selbstständige, Kleinunternehmer, GmbHs und Start-ups." },
    ],
    steps: [
      { number: "01", title: "Fahrzeug benennen", duration: "5–10 Min.", desc: "Modell, Baujahr, Preis – unverbindlich" },
      { number: "02", title: "Angebot erhalten", duration: "oft in 24 h", desc: "Konditionen passend zu Ihrem Betrieb" },
      { number: "03", title: "Unterlagen prüfen", duration: "unter 30 Min.", desc: "Ohne Bankauskunft und Papierberg" },
      { number: "04", title: "Fahrzeug erhalten", duration: "3–7 Werktage", desc: "Lieferung oder Abholung" },
    ],
    sidebar: {
      title: "Leasing ohne Schufa für Ihr Gewerbe",
      points: ["Keine Schufa-Abfrage", "Zusage oft in 24 Stunden", "Neu & gebraucht, alle Marken", "Persönlicher Ansprechpartner"],
    },
  },
};

const trustPoints = [
  { title: "Persönlicher Ansprechpartner", desc: "Kein Callcenter – Sie sprechen direkt mit uns." },
  { title: "Sitz in Angermünde", desc: "Am Waldrand 10, 16278 Angermünde – deutschlandweit für Gewerbekunden tätig." },
  { title: "Bankenunabhängig", desc: "Als Leasingmakler finden wir die passende Leasinggesellschaft für Sie." },
];

// [Linktext](/pfad) → <a>
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <a key={i} href={m[2]} className="rg-link">
            {m[1]}
          </a>
        );
      })}
    </>
  );
}

function stripLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

const Check = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14" style={{ color: "#E15C55", marginTop: "4px", flexShrink: 0 }}>
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 256 512" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
  </svg>
);

export default async function RatgeberArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const topic = topicMeta[article.topic];
  const conv = conversion[article.topic];
  const url = `${SITE}/ratgeber/${article.slug}`;
  const related = articles.filter((a) => a.slug !== article.slug && a.topic === article.topic).slice(0, 3);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.question,
      description: article.description,
      datePublished: article.published,
      dateModified: article.updated,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Master Leasing", url: SITE },
      publisher: {
        "@type": "Organization",
        name: "Master Leasing",
        logo: { "@type": "ImageObject", url: `${SITE}/images/LogoFinalFile-01-1024x305.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: article.question, acceptedAnswer: { "@type": "Answer", text: article.shortAnswer } },
        ...article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: SITE },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${SITE}/ratgeber` },
        { "@type": "ListItem", position: 3, name: article.question, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        {/* ── Hero: Frage ── */}
        <section style={{ position: "relative", paddingTop: "150px", paddingBottom: "64px", overflow: "hidden" }}>
          <Image
            src={article.image ?? conv.heroImage}
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(5,5,5,0.96) 0%, rgba(10,10,10,0.92) 55%, rgba(20,5,5,0.9) 100%)",
              zIndex: 1,
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <nav aria-label="Breadcrumb" className="rg-breadcrumb">
              <a href="/">Startseite</a>
              <span>›</span>
              <a href="/ratgeber">Ratgeber</a>
              <span>›</span>
              <span style={{ color: "rgba(255,255,255,0.75)" }}>{topic.label}</span>
            </nav>
            <span className="overline">Ratgeber · {topic.label}</span>
            <h1 className="rg-h1">{article.question}</h1>
            <p className="rg-meta">
              Aktualisiert am {formatDate(article.updated)} · {article.readingMinutes} Min. Lesezeit · Redaktion Master Leasing
            </p>
          </div>
        </section>

        {/* ── Artikel + Sidebar ── */}
        <section style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 0 90px" }}>
          <div className="container rg-layout">
            <article className="rg-article">
              {/* Kurzantwort */}
              <div className="rg-answer">
                <p className="rg-answer-label">Kurz beantwortet</p>
                <p className="rg-answer-text">{article.shortAnswer}</p>
              </div>

              {article.sections.map((s) => (
                <div key={s.h2} className="rg-section">
                  <h2 className="rg-h2">{s.h2}</h2>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="rg-p">
                      <RichText text={p} />
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="rg-list">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <Check />
                          <span>
                            <RichText text={b} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.table && (
                    <div className="rg-table-wrap">
                      <table className="rg-table">
                        <thead>
                          <tr>
                            {s.table.head.map((h) => (
                              <th key={h}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row, ri) => (
                            <tr key={ri} className={ri === 0 ? "rg-row-highlight" : undefined}>
                              {row.map((cell, ci) => (
                                <td key={ci}>{stripLinks(cell)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              {/* Inline-CTA im Artikel */}
              <div className="rg-inline-cta">
                <div>
                  <p className="rg-inline-cta-title">{conv.sidebar.title}</p>
                  <p className="rg-inline-cta-text">Unverbindlich prüfen lassen – wir melden uns zeitnah persönlich bei Ihnen.</p>
                </div>
                <RatgeberCTAButton topic={article.topic}>
                  <Arrow />
                  Jetzt anfragen
                </RatgeberCTAButton>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="rg-sidebar">
              <div className="rg-sidebar-card">
                <span className="overline" style={{ marginBottom: "14px" }}>Unverbindlich</span>
                <p className="rg-sidebar-title">{conv.sidebar.title}</p>
                <ul className="rg-list rg-list-small">
                  {conv.sidebar.points.map((p) => (
                    <li key={p}>
                      <Check />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <RatgeberCTAButton topic={article.topic} style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}>
                  <Arrow />
                  Jetzt anfragen
                </RatgeberCTAButton>
                <a href="tel:+4903331297792" className="rg-sidebar-phone">
                  oder anrufen: 03331 – 29 77 92
                </a>
              </div>
              <a href={topic.landing.href} className="rg-sidebar-link">
                Mehr zu {topic.landing.label} →
              </a>
            </aside>
          </div>
        </section>

        {/* ── Vorteile ── */}
        <section className="section-pad" style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">Ihre Vorteile</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                {topic.label} mit <span style={{ color: "#E15C55" }}>Master Leasing</span>
              </h2>
            </div>
            <div className="rg-grid-4">
              {conv.benefits.map((b, i) => (
                <div key={b.title} className={`rg-card scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}>
                  <div className="rg-card-icon">
                    <Check />
                  </div>
                  <h3 className="rg-card-title">{b.title}</h3>
                  <p className="rg-card-text">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ablauf ── */}
        <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">Der Ablauf</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                In 4 Schritten <span style={{ color: "#E15C55" }}>zum Ziel</span>
              </h2>
            </div>
            <div className="rg-grid-4">
              {conv.steps.map((s, i) => (
                <div key={s.number} className={`rg-step scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}>
                  <div className={`rg-step-num${i === 0 ? " rg-step-num-active" : ""}`}>{s.number}</div>
                  <p className="rg-step-duration">{s.duration}</p>
                  <p className="rg-step-title">{s.title}</p>
                  <p className="rg-card-text">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vertrauen + CTA ── */}
        <section className="section-pad" style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="rg-trust">
              <div>
                <span className="overline">Warum Master Leasing</span>
                <h2 style={{ marginTop: "12px", color: "#fff", marginBottom: "28px" }}>
                  Persönlich. <span style={{ color: "#E15C55" }}>Schnell. Bankenunabhängig.</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {trustPoints.map((t) => (
                    <div key={t.title} style={{ display: "flex", gap: "14px" }}>
                      <Check />
                      <div>
                        <p className="rg-trust-title">{t.title}</p>
                        <p className="rg-card-text">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rg-cta-box">
                <p className="rg-cta-box-title">Jetzt unverbindlich prüfen lassen</p>
                <p className="rg-card-text" style={{ marginBottom: "28px" }}>
                  Wenige Angaben genügen. Wir prüfen Ihre Situation und melden uns zeitnah mit einer ehrlichen Einschätzung.
                </p>
                <RatgeberCTAButton topic={article.topic} style={{ width: "100%", justifyContent: "center" }}>
                  <Arrow />
                  {conv.ctaLabel}
                </RatgeberCTAButton>
                <p className="rg-cta-box-note">Kostenlos · unverbindlich · Mo–Fr 07:00–16:00 Uhr</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="overline">FAQ</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Weitere <span style={{ color: "#E15C55" }}>Fragen &amp; Antworten</span>
              </h2>
            </div>
            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              {article.faq.map((f) => (
                <details key={f.q} className="rg-faq">
                  <summary>
                    <span>{f.q}</span>
                    <svg viewBox="0 0 448 512" fill="currentColor" width="14" height="14" style={{ color: "#E15C55", flexShrink: 0 }}>
                      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>

            <div style={{ maxWidth: "800px", margin: "48px auto 0" }}>
              <p className="rg-related-label">Weiterlesen</p>
              <div className="rg-related">
                {related.map((r) => (
                  <a key={r.slug} href={`/ratgeber/${r.slug}`} className="rg-related-item">
                    {r.question} →
                  </a>
                ))}
                <a href={topic.landing.href} className="rg-related-item">
                  {topic.landing.label} – alle Infos →
                </a>
                {article.topic === "slb" && (
                  <a href="/traktor-leasing" className="rg-related-item">
                    Traktor beleihen, leasen &amp; finanzieren →
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .rg-breadcrumb { display: flex; flex-wrap: wrap; gap: 8px; font-size: 13px; color: rgba(255,255,255,0.45); margin-bottom: 20px; font-family: 'Inter', sans-serif; }
        .rg-breadcrumb a { color: rgba(255,255,255,0.55); }
        .rg-breadcrumb a:hover { color: #E15C55; }
        .rg-h1 { color: #fff; font-size: clamp(30px, 4.2vw, 50px); line-height: 1.15; max-width: 860px; margin: 8px 0 18px; }
        .rg-meta { color: rgba(255,255,255,0.5); font-size: 14px; margin: 0; font-family: 'Inter', sans-serif; }

        .rg-layout { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 56px; align-items: start; }
        .rg-article { max-width: 760px; min-width: 0; }
        .rg-answer { background: rgba(225,92,85,0.07); border: 1px solid rgba(225,92,85,0.25); border-left: 4px solid #E15C55; border-radius: 12px; padding: 26px 28px; margin-bottom: 48px; }
        .rg-answer-label { color: #E15C55; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px; }
        .rg-answer-text { color: #fff; font-size: 18px; line-height: 1.7; margin: 0; }

        .rg-section { margin-bottom: 44px; }
        .rg-h2 { color: #fff; font-size: clamp(24px, 2.6vw, 30px); line-height: 1.25; margin: 0 0 16px; }
        .rg-p { color: rgba(255,255,255,0.7); font-size: 17px; line-height: 1.8; margin: 0 0 16px; }
        .rg-link { color: #E15C55; text-decoration: underline; text-underline-offset: 3px; }
        .rg-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .rg-list li { display: flex; gap: 12px; color: rgba(255,255,255,0.75); font-size: 17px; line-height: 1.6; }
        .rg-list-small li { font-size: 15px; }

        .rg-table-wrap { overflow-x: auto; margin-top: 8px; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; }
        .rg-table { width: 100%; border-collapse: collapse; font-size: 15px; min-width: 620px; }
        .rg-table th { text-align: left; background: rgba(255,255,255,0.05); color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; padding: 14px 16px; font-size: 14px; }
        .rg-table td { color: rgba(255,255,255,0.68); padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.06); vertical-align: top; line-height: 1.55; }
        .rg-table td:first-child { color: #fff; font-weight: 600; white-space: nowrap; }
        .rg-row-highlight td { background: rgba(225,92,85,0.08); }

        .rg-inline-cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; background: #151515; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 24px 28px; margin-top: 12px; }
        .rg-inline-cta-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 19px; margin: 0 0 6px; }
        .rg-inline-cta-text { color: rgba(255,255,255,0.55); font-size: 15px; margin: 0; line-height: 1.6; }

        .rg-sidebar { position: sticky; top: 110px; display: flex; flex-direction: column; gap: 16px; }
        .rg-sidebar-card { background: #151515; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px 24px; }
        .rg-sidebar-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 21px; line-height: 1.3; margin: 0 0 18px; }
        .rg-sidebar-phone { display: block; text-align: center; color: rgba(255,255,255,0.5); font-size: 14px; margin-top: 14px; }
        .rg-sidebar-phone:hover, .rg-sidebar-link:hover { color: #E15C55; }
        .rg-sidebar-link { color: rgba(255,255,255,0.6); font-size: 14px; padding: 0 4px; }

        .rg-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .rg-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 26px 22px; }
        .rg-card-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(225,92,85,0.12); border: 1px solid rgba(225,92,85,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .rg-card-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 18px; margin: 0 0 8px; line-height: 1.3; }
        .rg-card-text { color: rgba(255,255,255,0.55); font-size: 15px; margin: 0; line-height: 1.6; }

        .rg-step { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .rg-step-num { width: 56px; height: 56px; border-radius: 50%; background: #1a1a1a; border: 2px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-family: 'Quantico', sans-serif; font-weight: 700; color: #fff; margin-bottom: 20px; }
        .rg-step-num-active { background: #E15C55; border-color: #E15C55; }
        .rg-step-duration { color: #E15C55; font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; margin: 0 0 8px; }
        .rg-step-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 18px; margin: 0 0 8px; }

        .rg-trust { display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: center; }
        .rg-trust-title { color: #fff; font-weight: 600; font-size: 17px; margin: 0 0 4px; }
        .rg-cta-box { background: #151515; border: 1px solid rgba(225,92,85,0.3); border-radius: 18px; padding: 36px 32px; }
        .rg-cta-box-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 24px; margin: 0 0 12px; line-height: 1.3; }
        .rg-cta-box-note { color: rgba(255,255,255,0.4); font-size: 13px; text-align: center; margin: 14px 0 0; }

        .rg-faq { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
        .rg-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 26px; cursor: pointer; list-style: none; color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 17px; line-height: 1.4; }
        .rg-faq summary::-webkit-details-marker { display: none; }
        .rg-faq summary svg { transition: transform 0.2s ease; }
        .rg-faq[open] summary svg { transform: rotate(180deg); }
        .rg-faq p { color: rgba(255,255,255,0.62); font-size: 16px; line-height: 1.75; margin: 0; padding: 18px 26px 22px; border-top: 1px solid rgba(255,255,255,0.06); }

        .rg-related-label { color: rgba(255,255,255,0.45); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 14px; }
        .rg-related { display: flex; flex-direction: column; gap: 10px; }
        .rg-related-item { color: #fff; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px 20px; font-size: 16px; transition: border-color 0.2s, color 0.2s; }
        .rg-related-item:hover { border-color: rgba(225,92,85,0.5); color: #E15C55; }

        @media (max-width: 1024px) {
          .rg-layout { grid-template-columns: minmax(0, 1fr); gap: 40px; }
          .rg-sidebar { position: static; }
          .rg-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .rg-trust { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .rg-grid-4 { grid-template-columns: 1fr; }
          .rg-inline-cta { flex-direction: column; align-items: flex-start; }
          .rg-answer { padding: 22px 20px; }
          .rg-answer-text { font-size: 17px; }
          .rg-cta-box { padding: 28px 22px; }
          .btn-primary { white-space: normal; }
        }
      `}</style>
    </>
  );
}
