import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ModalOpenButton from "@/components/ModalOpenButton";
import { articles } from "@/lib/ratgeber";

const URL = "https://master-leasing.com/auto-leasen-trotz-negativer-schufa";

export const metadata: Metadata = {
  title: "Auto leasen trotz negativer Schufa | Master Leasing",
  description:
    "Auto leasen trotz negativer Schufa: Leasing ohne Schufa-Abfrage für Selbstständige und Firmen. Neu & gebraucht, Zusage oft in 24 Stunden.",
  alternates: { canonical: URL },
  robots: "follow, index",
};

const Check = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14" style={{ color: "#E15C55", marginTop: "4px", flexShrink: 0 }}>
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
  </svg>
);

const usps = [
  { title: "Keine Schufa-Abfrage", desc: "Kein Schufa-Check und kein neuer Eintrag – ein negativer Eintrag ist kein Ausschlussgrund." },
  { title: "Keine Bankauskunft", desc: "Bankenunabhängig: Ihre Hausbank wird nicht gefragt." },
  { title: "Zusage oft in 24 Stunden", desc: "Schlanker Prozess auf Basis Ihrer Selbstauskunft und Unterlagen." },
  { title: "Freie Fahrzeug- & Händlerwahl", desc: "Neu oder gebraucht, alle Marken – Sie entscheiden." },
  { title: "Unbegrenzte Kilometer", desc: "Fahren Sie so viel, wie Ihr Geschäft verlangt." },
  { title: "Restwert steht fest", desc: "Kein Gutachten, keine Nachberechnung am Vertragsende." },
];

const steps = [
  { number: "01", title: "Wunschauto nennen", duration: "5–10 Min.", desc: "Modell, Händlerangebot oder Link – neu oder gebraucht" },
  { number: "02", title: "Selbstauskunft & Unterlagen", duration: "unter 30 Min.", desc: "Ohne Schufa und ohne Bankauskunft" },
  { number: "03", title: "Leasingzusage", duration: "oft in 24 h", desc: "Transparentes Angebot mit Rate, Laufzeit und Sonderzahlung" },
  { number: "04", title: "Losfahren", duration: "wenige Werktage", desc: "Zulassung auf Ihre Firma bzw. Ihren Namen" },
];

const audiences = [
  { title: "Selbstständige & Freiberufler", desc: "Auch mit Schufa-Eintrag oder kurzer Selbstständigkeit." },
  { title: "Kleinunternehmer & Handwerker", desc: "Firmenwagen und Transporter für den täglichen Einsatz." },
  { title: "GmbHs & UGs", desc: "Auch nach einem schwachen Geschäftsjahr oder einer Bank-Absage." },
  { title: "Existenzgründer", desc: "Ohne lange Bonitätshistorie und ohne mehrere Jahresabschlüsse." },
];

const vehicles = [
  { title: "PKW & Firmenwagen", href: "/fahrzeuge" },
  { title: "Gebrauchtwagen", href: "/ratgeber/gebrauchtwagen-leasing-ohne-schufa" },
  { title: "Transporter & Nutzfahrzeuge", href: "/fahrzeuge" },
  { title: "Traktoren & Schlepper", href: "/traktor-leasing" },
  { title: "Landmaschinen", href: "/landmaschinen-leasing" },
  { title: "Maschinen & Geräte", href: "/geraeteleasing" },
];

const faqItems = [
  {
    q: "Kann ich ein Auto trotz negativer Schufa leasen?",
    a: "Ja. Master Leasing vermittelt Autoleasing ohne Schufa-Abfrage und ohne Bankauskunft. Ein negativer Schufa-Eintrag ist deshalb kein Ausschlussgrund. Das Angebot richtet sich an gewerbliche Kunden – Selbstständige, Freiberufler, Kleinunternehmer, GmbHs und Existenzgründer.",
  },
  {
    q: "Wird bei der Anfrage meine Schufa abgefragt?",
    a: "Nein. Es findet keine Schufa-Abfrage statt und es entsteht kein neuer Schufa-Eintrag.",
  },
  {
    q: "Brauche ich eine Anzahlung?",
    a: "In der Regel ja. Weil keine Schufa-Abfrage stattfindet, arbeitet Leasing ohne Schufa mit einer Leasingsonderzahlung – je nach Tarif ab 15 Prozent des Fahrzeugpreises. Je höher die Sonderzahlung, desto niedriger die monatliche Rate.",
  },
  {
    q: "Wie schnell bekomme ich eine Zusage?",
    a: "Oft innerhalb von 24 Stunden. Grundlage sind Ihre Selbstauskunft und die eingereichten Unterlagen – eine langwierige Bankprüfung entfällt.",
  },
  {
    q: "Kann ich auch einen Gebrauchtwagen trotz Schufa leasen?",
    a: "Ja. Neue und gebrauchte Fahrzeuge aller Marken sind möglich, mit freier Händlerwahl und unbegrenzten Kilometern.",
  },
  {
    q: "Was kostet die Vermittlung?",
    a: "Master Leasing berechnet eine Vermittlungsgebühr von 2,9 bis max. 4,9 Prozent vom Fahrzeugpreis zzgl. MwSt. Die Gebühr steht vorher im Auftrag und wird erst nach der Leasingzusage fällig. Kommt keine Zusage zustande, entstehen Ihnen keine Kosten.",
  },
  {
    q: "Kann ich als Privatperson ohne Schufa leasen?",
    a: "Nein. Leasing ohne Schufa über Master Leasing ist ausschließlich für gewerbliche Kunden möglich. Eine rein private Nutzung ohne gewerblichen Bezug ist ausgeschlossen.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto leasen trotz negativer Schufa",
    serviceType: "Leasing ohne Schufa für Gewerbekunden",
    areaServed: "DE",
    url: URL,
    provider: {
      "@type": "Organization",
      name: "Master Leasing",
      url: "https://master-leasing.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Am Waldrand 10",
        postalCode: "16278",
        addressLocality: "Angermünde",
        addressCountry: "DE",
      },
    },
  },
];

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "26px 22px",
};

export default function AutoLeasenTrotzSchufaPage() {
  const ratgeber = articles.filter((a) => a.topic === "schufa");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        {/* ── Hero ── */}
        <section style={{ position: "relative", paddingTop: "160px", paddingBottom: "100px", overflow: "hidden" }}>
          <Image
            src="/images/fahrzeug-pkw.jpg"
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
              background: "linear-gradient(135deg, rgba(5,5,5,0.94) 0%, rgba(10,10,10,0.86) 50%, rgba(20,5,5,0.88) 100%)",
              zIndex: 1,
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <span className="overline">Leasing ohne Schufa</span>
            <h1 style={{ color: "#fff", marginBottom: "20px", maxWidth: "780px" }}>
              Auto leasen <span style={{ color: "#E15C55" }}>trotz negativer Schufa</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", maxWidth: "620px", marginBottom: "32px", lineHeight: 1.7 }}>
              Schufa-Eintrag oder Absage der Bank? Bei Master Leasing leasen Selbstständige und
              Unternehmen ihr Auto ohne Schufa-Abfrage und ohne Bankauskunft – neu oder gebraucht,
              alle Marken. Leasingzusage oft schon in 24 Stunden.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {["Keine Schufa-Abfrage, kein neuer Eintrag", "Freie Fahrzeug- und Händlerwahl", "Unbegrenzte Kilometer", "Nur für Gewerbekunden"].map((b) => (
                <div key={b} style={{ display: "flex", gap: "10px", color: "rgba(255,255,255,0.8)", fontSize: "15px" }}>
                  <Check />
                  {b}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <ModalOpenButton className="btn-primary">
                <Arrow />
                Jetzt Leasing anfragen
              </ModalOpenButton>
              <a href="tel:+4903331297792" className="btn-outline">
                03331 – 29 77 92
              </a>
            </div>
          </div>
        </section>

        {/* ── Kurzantwort ── */}
        <section style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 0" }}>
          <div className="container" style={{ maxWidth: "880px" }}>
            <div className="ats-answer">
              <p className="ats-answer-label">Kurz beantwortet</p>
              <h2 className="ats-answer-q">Kann man ein Auto trotz negativer Schufa leasen?</h2>
              <p className="ats-answer-text">
                Ja – als Gewerbekunde. Master Leasing vermittelt Autoleasing ohne Schufa-Abfrage und ohne
                Bankauskunft. Statt der Schufa zählen Ihre Selbstauskunft, Ihre Unterlagen und das Fahrzeug.
                Das Risiko wird über eine Leasingsonderzahlung ab 15 Prozent abgesichert. Die Zusage liegt
                oft innerhalb von 24 Stunden vor.
              </p>
            </div>
          </div>
        </section>

        {/* ── Vorteile ── */}
        <section className="section-pad" style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">Ihre Vorteile</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Leasing ohne Schufa mit <span style={{ color: "#E15C55" }}>Master Leasing</span>
              </h2>
            </div>
            <div className="ats-grid-3">
              {usps.map((u, i) => (
                <div key={u.title} className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`} style={cardStyle}>
                  <div className="ats-icon">
                    <Check />
                  </div>
                  <h3 className="ats-card-title">{u.title}</h3>
                  <p className="ats-card-text">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Für wen ── */}
        <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">Für wen</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Autoleasing trotz Schufa für <span style={{ color: "#E15C55" }}>Gewerbekunden</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "17px", maxWidth: "620px", margin: "16px auto 0", lineHeight: 1.7 }}>
                Ob negativer Schufa-Eintrag, schlechte Bonität oder fehlende Bilanzen – entscheidend ist,
                dass Sie das Fahrzeug gewerblich nutzen.
              </p>
            </div>
            <div className="ats-grid-4">
              {audiences.map((a, i) => (
                <div key={a.title} className={`scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`} style={cardStyle}>
                  <h3 className="ats-card-title">{a.title}</h3>
                  <p className="ats-card-text">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ablauf ── */}
        <section className="section-pad" style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="overline">Der Ablauf</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                In 4 Schritten <span style={{ color: "#E15C55" }}>zum Leasingauto</span>
              </h2>
            </div>
            <div className="ats-grid-4">
              {steps.map((s, i) => (
                <div key={s.number} className={`ats-step scroll-up${i > 0 ? ` scroll-d${Math.min(i, 3)}` : ""}`}>
                  <div className={`ats-step-num${i === 0 ? " ats-step-num-active" : ""}`}>{s.number}</div>
                  <p className="ats-step-duration">{s.duration}</p>
                  <p className="ats-step-title">{s.title}</p>
                  <p className="ats-card-text">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="scroll-up" style={{ textAlign: "center", marginTop: "56px" }}>
              <ModalOpenButton className="btn-primary">
                <Arrow />
                Unverbindlich anfragen
              </ModalOpenButton>
            </div>
          </div>
        </section>

        {/* ── Kosten & Transparenz ── */}
        <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container ats-two-col">
            <div>
              <span className="overline">Transparent</span>
              <h2 style={{ marginTop: "12px", color: "#fff", marginBottom: "20px" }}>
                Was Leasing ohne Schufa <span style={{ color: "#E15C55" }}>kostet</span>
              </h2>
              <p className="ats-p">
                Ohne Schufa-Abfrage sichert die Leasinggesellschaft ihr Risiko über eine
                Leasingsonderzahlung ab. Die Tarife LSZ15 bis LSZ50 stehen für eine Sonderzahlung von
                15 bis 50 Prozent – je höher die Sonderzahlung, desto niedriger die Rate.
              </p>
              <p className="ats-p">
                Für die Vermittlung berechnet Master Leasing 2,9 bis max. 4,9 Prozent vom Fahrzeugpreis
                zzgl. MwSt. Die Gebühr steht vorher im Auftrag und wird erst nach der Leasingzusage fällig.
                Ohne Zusage entstehen Ihnen keine Kosten. Details in unseren <a href="/agb" className="ats-link">AGB</a>.
              </p>
              <p className="ats-p">
                Kein Kapital für die Sonderzahlung? Setzen Sie es per{" "}
                <a href="/sale-und-leaseback" className="ats-link">Sale &amp; Leaseback</a> aus einem
                vorhandenen Fahrzeug frei.
              </p>
            </div>
            <div style={cardStyle}>
              <p className="ats-card-title" style={{ marginBottom: "18px" }}>Was Sie leasen können</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {vehicles.map((v) => (
                  <a key={v.title} href={v.href} className="ats-vehicle">
                    <span>{v.title}</span>
                    <span style={{ color: "#E15C55" }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner />

        {/* ── Ratgeber ── */}
        <section className="section-pad" style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="overline">Ratgeber</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Fragen rund um <span style={{ color: "#E15C55" }}>Leasing ohne Schufa</span>
              </h2>
            </div>
            <div className="ats-grid-3">
              {ratgeber.map((r) => (
                <a key={r.slug} href={`/ratgeber/${r.slug}`} className="ats-rg-card">
                  <span className="ats-card-title" style={{ fontSize: "17px" }}>{r.question}</span>
                  <span style={{ color: "#E15C55", fontSize: "14px", marginTop: "auto" }}>Antwort lesen →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-pad" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="scroll-up" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="overline">FAQ</span>
              <h2 style={{ marginTop: "12px", color: "#fff" }}>
                Häufige Fragen: <span style={{ color: "#E15C55" }}>Auto leasen trotz Schufa</span>
              </h2>
            </div>
            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              {faqItems.map((f) => (
                <details key={f.q} className="ats-faq">
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
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .ats-answer { background: rgba(225,92,85,0.07); border: 1px solid rgba(225,92,85,0.25); border-left: 4px solid #E15C55; border-radius: 12px; padding: 28px 30px; }
        .ats-answer-label { color: #E15C55; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px; }
        .ats-answer-q { color: #fff; font-size: clamp(22px, 2.4vw, 28px); line-height: 1.3; margin: 0 0 12px; }
        .ats-answer-text { color: rgba(255,255,255,0.85); font-size: 18px; line-height: 1.7; margin: 0; }
        .ats-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ats-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .ats-two-col { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: start; }
        .ats-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(225,92,85,0.12); border: 1px solid rgba(225,92,85,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .ats-card-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 18px; margin: 0 0 8px; line-height: 1.3; }
        .ats-card-text { color: rgba(255,255,255,0.55); font-size: 15px; margin: 0; line-height: 1.6; }
        .ats-p { color: rgba(255,255,255,0.68); font-size: 17px; line-height: 1.8; margin: 0 0 16px; }
        .ats-link { color: #E15C55; text-decoration: underline; text-underline-offset: 3px; }
        .ats-vehicle { display: flex; justify-content: space-between; color: #fff; padding: 12px 14px; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; font-size: 15px; transition: border-color 0.2s; }
        .ats-vehicle:hover, .ats-rg-card:hover { border-color: rgba(225,92,85,0.5); }
        .ats-rg-card { display: flex; flex-direction: column; gap: 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px 22px; transition: border-color 0.2s; }
        .ats-step { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .ats-step-num { width: 56px; height: 56px; border-radius: 50%; background: #1a1a1a; border: 2px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-family: 'Quantico', sans-serif; font-weight: 700; color: #fff; margin-bottom: 20px; }
        .ats-step-num-active { background: #E15C55; border-color: #E15C55; }
        .ats-step-duration { color: #E15C55; font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; margin: 0 0 8px; }
        .ats-step-title { color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 18px; margin: 0 0 8px; }
        .ats-faq { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
        .ats-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 26px; cursor: pointer; list-style: none; color: #fff; font-family: 'Quantico', sans-serif; font-weight: 700; font-size: 17px; line-height: 1.4; }
        .ats-faq summary::-webkit-details-marker { display: none; }
        .ats-faq summary svg { transition: transform 0.2s ease; }
        .ats-faq[open] summary svg { transform: rotate(180deg); }
        .ats-faq p { color: rgba(255,255,255,0.62); font-size: 16px; line-height: 1.75; margin: 0; padding: 18px 26px 22px; border-top: 1px solid rgba(255,255,255,0.06); }
        @media (max-width: 1024px) {
          .ats-grid-3, .ats-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .ats-two-col { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .ats-grid-3, .ats-grid-4 { grid-template-columns: 1fr; }
          .ats-answer { padding: 22px 20px; }
          .ats-answer-text { font-size: 17px; }
        }
      `}</style>
    </>
  );
}
