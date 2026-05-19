"use client";
import { useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/app/hooks/useTracking";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SLBData {
  fuerWen: string[];      // step 1 – multi-select
  objektTyp: string;      // step 2 – single, auto-advance
  wert: string;           // step 3 – single, auto-advance
  gewerblich: string;     // step 4 – single, auto-advance
  hauptgrund: string;     // step 5 – single, auto-advance
  zeitrahmen: string;     // step 6 – single, auto-advance
  zusatzInfo: string;     // step 7 – textarea
  vorname: string;
  nachname: string;
  email: string;
  mobil: string;
  unternehmen: string;
}

const INITIAL: SLBData = {
  fuerWen: [],
  objektTyp: "",
  wert: "",
  gewerblich: "",
  hauptgrund: "",
  zeitrahmen: "",
  zusatzInfo: "",
  vorname: "",
  nachname: "",
  email: "",
  mobil: "",
  unternehmen: "",
};

// Disqualification: value too low OR non-commercial use
function isDisqualified(data: SLBData): boolean {
  return data.wert === "unter_10k" || data.gewerblich === "nein";
}

// ─── Shared UI ────────────────────────────────────────────────────────────────

function ProgressBar({ step, total = 8 }: { step: number; total?: number }) {
  const pct = Math.round(((step - 1) / (total - 1)) * 100);
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>
          Schritt {step} von {total}
        </span>
        <span style={{ color: "#E15C55", fontSize: "12px", fontFamily: "'Quantico', sans-serif", fontWeight: 700 }}>
          {pct}%
        </span>
      </div>
      <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#E15C55,#c04840)", borderRadius: "2px", transition: "width 0.35s ease" }} />
      </div>
    </div>
  );
}

function QuestionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, marginBottom: "24px", lineHeight: 1.35 }}>
      {children}
    </h2>
  );
}

/** Full-width clickable option card */
function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        background: selected ? "rgba(225,92,85,0.12)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${selected ? "rgba(225,92,85,0.55)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: "10px",
        padding: "14px 18px",
        color: selected ? "#fff" : "rgba(255,255,255,0.75)",
        fontSize: "15px",
        fontFamily: "'Inter', sans-serif",
        cursor: "pointer",
        marginBottom: "10px",
        transition: "all 0.18s",
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,92,85,0.35)";
          (e.currentTarget as HTMLElement).style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
        }
      }}
    >
      <span style={{ marginRight: "10px", color: selected ? "#E15C55" : "rgba(255,255,255,0.25)" }}>
        {selected ? "●" : "○"}
      </span>
      {label}
    </button>
  );
}

/** Weiter button */
function WeiterButton({
  onClick,
  disabled = false,
  loading = false,
  label = "Weiter →",
}: {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        background: disabled || loading ? "rgba(225,92,85,0.4)" : "#E15C55",
        border: "none",
        borderRadius: "10px",
        padding: "14px 28px",
        color: "#fff",
        fontSize: "15px",
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        marginTop: "8px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => { if (!disabled && !loading) (e.currentTarget as HTMLElement).style.background = "#c04840"; }}
      onMouseLeave={(e) => { if (!disabled && !loading) (e.currentTarget as HTMLElement).style.background = "#E15C55"; }}
    >
      {loading ? (
        <>
          <span style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "slb-spin 0.8s linear infinite" }} />
          Wird gesendet…
        </>
      ) : label}
    </button>
  );
}

/** Input field for contact step */
function Field({
  placeholder,
  type = "text",
  value,
  onChange,
  prefix,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", marginBottom: "12px" }}>
      {prefix && (
        <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRight: "none", borderRadius: "10px 0 0 10px", padding: "13px 14px", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, color: "rgba(255,255,255,0.6)", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}>
          {prefix}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: prefix ? "0 10px 10px 0" : "10px",
          padding: "13px 16px",
          color: "#fff",
          fontSize: "15px",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          boxSizing: "border-box",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
  const bullets = ["Klare Einordnung", "Geringer Aufwand", "Transparente Bedingungen", "Unverbindlich & kostenfrei"];
  return (
    <div>
      {/* Person card */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
        {/* Avatar placeholder */}
        <div style={{ width: "64px", height: "64px", minWidth: "64px", borderRadius: "50%", background: "linear-gradient(135deg,#E15C55,#9a2e2a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700, color: "#fff", fontFamily: "'Quantico', sans-serif", border: "2px solid rgba(225,92,85,0.3)" }}>
          GW
        </div>
        <div>
          <p style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px", marginBottom: "2px" }}>Gregor Wernicke</p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", fontSize: "13px" }}>Inhaber Master Leasing</p>
        </div>
      </div>

      <p style={{ color: "#E15C55", fontFamily: "'Quantico', sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
        Sale and Leaseback
      </p>
      <h3 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(20px,2.5vw,26px)", lineHeight: 1.25, marginBottom: "16px" }}>
        Unverbindlich prüfen statt vorschnell entscheiden
      </h3>
      <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.75, marginBottom: "24px" }}>
        Sie müssen heute noch nichts festlegen. Das Formular dient ausschließlich dazu, Ihre Situation kurz einzuordnen. So können wir gezielt prüfen, ob Sale and Leaseback für Sie sinnvoll ist.
        <br /><br />
        Die Beantwortung dauert nur wenige Minuten. Das anschließende Gespräch ist unverbindlich und dient der klaren Einordnung Ihrer Möglichkeiten.
      </p>

      {bullets.map((b) => (
        <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <div style={{ width: "20px", height: "20px", minWidth: "20px", borderRadius: "50%", background: "#E15C55", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>{b}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Vehicle type grid (step 2) ───────────────────────────────────────────────

const OBJEKT_TYPEN = [
  {
    id: "pkw",
    label: "PKW",
    icon: (
      <svg viewBox="0 0 80 52" fill="none" width="80" height="52">
        <rect x="3" y="22" width="74" height="22" rx="5" fill="currentColor" opacity="0.15"/>
        <path d="M12 22L24 10h32l12 12H12z" fill="currentColor" opacity="0.4"/>
        <rect x="26" y="12" width="12" height="10" rx="1.5" fill="currentColor" opacity="0.35"/>
        <rect x="42" y="12" width="12" height="10" rx="1.5" fill="currentColor" opacity="0.35"/>
        <circle cx="20" cy="42" r="7" fill="currentColor" opacity="0.75"/>
        <circle cx="60" cy="42" r="7" fill="currentColor" opacity="0.75"/>
        <circle cx="20" cy="42" r="3.5" fill="currentColor" opacity="0.4"/>
        <circle cx="60" cy="42" r="3.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: "nutzfahrzeug",
    label: "Nutzfahrzeug",
    icon: (
      <svg viewBox="0 0 80 52" fill="none" width="80" height="52">
        <rect x="3" y="18" width="74" height="26" rx="4" fill="currentColor" opacity="0.12"/>
        <rect x="3" y="12" width="28" height="24" rx="3" fill="currentColor" opacity="0.35"/>
        <rect x="9" y="16" width="14" height="12" rx="1.5" fill="currentColor" opacity="0.3"/>
        <circle cx="18" cy="42" r="6.5" fill="currentColor" opacity="0.75"/>
        <circle cx="62" cy="42" r="6.5" fill="currentColor" opacity="0.75"/>
        <circle cx="18" cy="42" r="3" fill="currentColor" opacity="0.4"/>
        <circle cx="62" cy="42" r="3" fill="currentColor" opacity="0.4"/>
        <rect x="31" y="12" width="46" height="30" rx="3" fill="currentColor" opacity="0.22"/>
      </svg>
    ),
  },
  {
    id: "maschine",
    label: "Maschine / Arbeitsgerät",
    icon: (
      <svg viewBox="0 0 80 58" fill="none" width="80" height="58">
        <rect x="4" y="22" width="50" height="22" rx="4" fill="currentColor" opacity="0.15"/>
        <path d="M10 22L20 10h28l8 12H10z" fill="currentColor" opacity="0.4"/>
        <rect x="22" y="12" width="10" height="10" rx="1.5" fill="currentColor" opacity="0.35"/>
        <circle cx="18" cy="44" r="8" fill="currentColor" opacity="0.7"/>
        <circle cx="18" cy="44" r="4" fill="currentColor" opacity="0.35"/>
        <circle cx="62" cy="38" r="13" fill="currentColor" opacity="0.5"/>
        <circle cx="62" cy="38" r="7" fill="currentColor" opacity="0.3"/>
        <path d="M55 22h14l6 16H50l5-16z" fill="currentColor" opacity="0.45"/>
      </svg>
    ),
  },
  {
    id: "mehrere",
    label: "Mehrere Fahrzeuge / Maschinen",
    icon: (
      <svg viewBox="0 0 80 52" fill="none" width="80" height="52">
        {/* 3 stacked vans */}
        <rect x="5" y="8" width="42" height="14" rx="2.5" fill="currentColor" opacity="0.35"/>
        <circle cx="14" cy="22" r="4" fill="currentColor" opacity="0.6"/>
        <circle cx="38" cy="22" r="4" fill="currentColor" opacity="0.6"/>
        <rect x="12" y="22" width="42" height="14" rx="2.5" fill="currentColor" opacity="0.28"/>
        <circle cx="21" cy="36" r="4" fill="currentColor" opacity="0.55"/>
        <circle cx="45" cy="36" r="4" fill="currentColor" opacity="0.55"/>
        <rect x="20" y="36" width="42" height="12" rx="2.5" fill="currentColor" opacity="0.18"/>
        <circle cx="30" cy="48" r="3.5" fill="currentColor" opacity="0.45"/>
        <circle cx="53" cy="48" r="3.5" fill="currentColor" opacity="0.45"/>
      </svg>
    ),
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SaleLeaseBackForm({ onClose }: { onClose?: () => void } = {}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<SLBData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (field: keyof SLBData) => (value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const toggleFuerWen = (val: string) =>
    setData((prev) => ({
      ...prev,
      fuerWen: prev.fuerWen.includes(val) ? prev.fuerWen.filter((v) => v !== val) : [...prev.fuerWen, val],
    }));

  // Auto-advance helper for single-select steps
  const select = (field: keyof SLBData, value: string, nextStep: number) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(nextStep), 180);
  };

  // ── Step 1 ──────────────────────────────────────────────────────────────────
  const fuerWenOptions = [
    { id: "unternehmen", label: "Für mein Unternehmen" },
    { id: "selbststaendig", label: "Für mich als Selbstständiger" },
    { id: "informieren", label: "Ich informiere mich aktuell nur" },
    { id: "sonstiges", label: "Sonstiges" },
  ];

  // ── Step 3 ──────────────────────────────────────────────────────────────────
  const wertOptions = [
    { id: "unter_10k", label: "Unter 10.000 €" },
    { id: "10k_25k", label: "10.000 € – 25.000 €" },
    { id: "25k_50k", label: "25.000 € – 50.000 €" },
    { id: "ueber_50k", label: "Über 50.000 €" },
  ];

  // ── Step 4 ──────────────────────────────────────────────────────────────────
  const gewerblichOptions = [
    { id: "ja", label: "Ja" },
    { id: "nein", label: "Nein" },
    { id: "teilweise", label: "Teilweise" },
  ];

  // ── Step 5 ──────────────────────────────────────────────────────────────────
  const hauptgrundOptions = [
    { id: "liquiditaet", label: "Liquidität freisetzen" },
    { id: "investitionen", label: "Investitionen oder Wachstum finanzieren" },
    { id: "puffer", label: "Liquiditätspuffer aufbauen" },
    { id: "kreditlinien", label: "Kreditlinien nicht weiter belasten" },
    { id: "sonstiges", label: "Sonstiges" },
  ];

  // ── Step 6 ──────────────────────────────────────────────────────────────────
  const zeitrahmenOptions = [
    { id: "kurzfristig", label: "Kurzfristig (in den nächsten Wochen)" },
    { id: "mittelfristig", label: "Mittelfristig (1–3 Monate)" },
    { id: "informieren", label: "Ich informiere mich aktuell" },
  ];

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!data.vorname || !data.nachname || !data.email || !data.mobil) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/slb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Fehler");
      trackEvent("form_submit", undefined, {
        form: "slb_form",
        qualified: !isDisqualified(data) ? "true" : "false",
        objektTyp: data.objektTyp,
        wert: data.wert,
      });
      setStep(isDisqualified(data) ? 10 : 9);
    } catch {
      setError("Es gab einen Fehler. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.");
    } finally {
      setLoading(false);
    }
  };

  // ── Render steps ─────────────────────────────────────────────────────────────

  const renderForm = () => {
    switch (step) {

      // ── STEP 1 ────────────────────────────────────────────────────────────
      case 1:
        return (
          <>
            <ProgressBar step={1} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontFamily: "'Inter', sans-serif", marginBottom: "6px" }}>(Mehrfachauswahl möglich)</p>
            <QuestionTitle>Für wen möchten Sie Sale and Leaseback prüfen?</QuestionTitle>
            {fuerWenOptions.map((o) => (
              <OptionCard key={o.id} label={o.label} selected={data.fuerWen.includes(o.id)} onClick={() => toggleFuerWen(o.id)} />
            ))}
            <WeiterButton onClick={() => setStep(2)} disabled={data.fuerWen.length === 0} />
          </>
        );

      // ── STEP 2 ────────────────────────────────────────────────────────────
      case 2:
        return (
          <>
            <ProgressBar step={2} />
            <QuestionTitle>Worum geht es konkret?</QuestionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {OBJEKT_TYPEN.map((typ) => {
                const sel = data.objektTyp === typ.id;
                return (
                  <button
                    key={typ.id}
                    type="button"
                    onClick={() => select("objektTyp", typ.id, 3)}
                    style={{
                      background: sel ? "rgba(225,92,85,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${sel ? "rgba(225,92,85,0.6)" : "rgba(255,255,255,0.09)"}`,
                      borderRadius: "12px",
                      padding: "20px 14px 14px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      color: sel ? "#E15C55" : "rgba(255,255,255,0.45)",
                      transition: "all 0.18s",
                    }}
                    onMouseEnter={(e) => { if (!sel) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,92,85,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(225,92,85,0.65)"; } }}
                    onMouseLeave={(e) => { if (!sel) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; } }}
                  >
                    {typ.icon}
                    <span style={{ fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>{typ.label}</span>
                  </button>
                );
              })}
            </div>
          </>
        );

      // ── STEP 3 ────────────────────────────────────────────────────────────
      case 3:
        return (
          <>
            <ProgressBar step={3} />
            <QuestionTitle>Wie hoch ist der ungefähre aktuelle Wert des Fahrzeugs / der Maschine?</QuestionTitle>
            {wertOptions.map((o) => (
              <OptionCard key={o.id} label={o.label} selected={data.wert === o.id} onClick={() => select("wert", o.id, o.id === "unter_10k" ? 10 : 4)} />
            ))}
          </>
        );

      // ── STEP 4 ────────────────────────────────────────────────────────────
      case 4:
        return (
          <>
            <ProgressBar step={4} />
            <QuestionTitle>Ist das Fahrzeug / die Maschine überwiegend gewerblich genutzt?</QuestionTitle>
            {gewerblichOptions.map((o) => (
              <OptionCard key={o.id} label={o.label} selected={data.gewerblich === o.id} onClick={() => select("gewerblich", o.id, 5)} />
            ))}
          </>
        );

      // ── STEP 5 ────────────────────────────────────────────────────────────
      case 5:
        return (
          <>
            <ProgressBar step={5} />
            <QuestionTitle>Was ist aktuell der Hauptgrund für Ihr Interesse?</QuestionTitle>
            {hauptgrundOptions.map((o) => (
              <OptionCard key={o.id} label={o.label} selected={data.hauptgrund === o.id} onClick={() => select("hauptgrund", o.id, 6)} />
            ))}
          </>
        );

      // ── STEP 6 ────────────────────────────────────────────────────────────
      case 6:
        return (
          <>
            <ProgressBar step={6} />
            <QuestionTitle>Wie zeitnah möchten Sie eine Lösung prüfen?</QuestionTitle>
            {zeitrahmenOptions.map((o) => (
              <OptionCard key={o.id} label={o.label} selected={data.zeitrahmen === o.id} onClick={() => select("zeitrahmen", o.id, 7)} />
            ))}
          </>
        );

      // ── STEP 7 ────────────────────────────────────────────────────────────
      case 7:
        return (
          <>
            <ProgressBar step={7} />
            <QuestionTitle>Gibt es etwas, das wir vorab wissen sollten?</QuestionTitle>
            <textarea
              value={data.zusatzInfo}
              onChange={(e) => set("zusatzInfo")(e.target.value)}
              placeholder="Schreiben Sie Ihren Text hier.."
              rows={5}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                padding: "14px 16px",
                color: "#fff",
                fontSize: "15px",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                resize: "vertical",
                boxSizing: "border-box",
                marginBottom: "8px",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <WeiterButton onClick={() => setStep(8)} label="Weiter →" />
          </>
        );

      // ── STEP 8 – Contact ──────────────────────────────────────────────────
      case 8:
        return (
          <>
            <ProgressBar step={8} />
            <QuestionTitle>Fast geschafft – wie können wir dich erreichen?</QuestionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <Field placeholder="Vorname" value={data.vorname} onChange={set("vorname")} />
              <Field placeholder="Nachname" value={data.nachname} onChange={set("nachname")} />
            </div>
            <Field placeholder="E-Mail" type="email" value={data.email} onChange={set("email")} />
            <Field
              placeholder="Mobilnummer"
              type="tel"
              value={data.mobil}
              onChange={set("mobil")}
              prefix={<><span style={{ fontSize: "16px" }}>🇩🇪</span></>}
            />
            <Field placeholder="Unternehmen" value={data.unternehmen} onChange={set("unternehmen")} />

            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'Inter', sans-serif", marginBottom: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
              🔒 Deine Daten nutzen wir ausschließlich zur Kontaktaufnahme.
            </p>

            {error && (
              <p style={{ color: "#E15C55", fontSize: "14px", fontFamily: "'Inter', sans-serif", padding: "12px 16px", background: "rgba(225,92,85,0.1)", border: "1px solid rgba(225,92,85,0.2)", borderRadius: "8px", marginBottom: "12px" }}>
                {error}
              </p>
            )}

            <WeiterButton
              onClick={handleSubmit}
              disabled={!data.vorname || !data.nachname || !data.email || !data.mobil}
              loading={loading}
              label="Meine Anfrage absenden"
            />
          </>
        );

      // ── STEP 9 – Success ──────────────────────────────────────────────────
      case 9:
        return (
          <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(72,199,116,0.12)", border: "2px solid rgba(72,199,116,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path d="M2 12L10.5 20.5L30 2" stroke="#48C774" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ color: "#E15C55", fontFamily: "'Quantico', sans-serif", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Das hat geklappt</p>
            <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(22px,3vw,28px)", marginBottom: "16px" }}>Vielen Dank für Ihre Anfrage</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 24px" }}>
              Ihre Angaben sind bei uns eingegangen. Wir prüfen Ihre Situation und melden uns zeitnah bei Ihnen, um die nächsten Schritte zu besprechen.
            </p>
            <p style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "17px", fontWeight: 700 }}>Wir rufen Sie an</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "28px", flexWrap: "wrap" }}>
              <a href="/" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", padding: "11px 20px", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>Zur Startseite</a>
              <a href="/fahrzeuge" style={{ background: "#E15C55", border: "none", borderRadius: "10px", padding: "11px 20px", color: "#fff", fontSize: "14px", fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>Fahrzeuge ansehen →</a>
            </div>
          </div>
        );

      // ── STEP 10 – Rejection ───────────────────────────────────────────────
      case 10:
        return (
          <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255,200,80,0.1)", border: "2px solid rgba(255,200,80,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 8v7M14 19v1.5" stroke="#ffc850" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="14" cy="14" r="12" stroke="#ffc850" strokeWidth="2"/>
              </svg>
            </div>
            <p style={{ color: "#E15C55", fontFamily: "'Quantico', sans-serif", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Oh, das tut uns Leid</p>
            <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(22px,3vw,28px)", marginBottom: "16px" }}>Vielen Dank für Ihr Interesse</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 12px" }}>
              Vielen Dank für Ihre Angaben. Nach erster Prüfung können wir Sale and Leaseback unter den genannten Voraussetzungen aktuell leider nicht anbieten.
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 28px" }}>
              Wir hoffen auf Ihr Verständnis und wünschen Ihnen für Ihre weiteren Schritte alles Gute.
            </p>
            <a href="/" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", padding: "11px 22px", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>Zur Startseite</a>
          </div>
        );

      default:
        return null;
    }
  };

  // ── Shared styles ─────────────────────────────────────────────────────────
  const sharedStyles = `
    @keyframes slb-spin { to { transform: rotate(360deg); } }
    @keyframes slb-fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slb-slide-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 900px) {
      .slb-layout { grid-template-columns: 1fr !important; }
      .slb-sidebar { order: -1; }
    }
    @media (max-width: 540px) {
      .slb-grid-2 { grid-template-columns: 1fr !important; }
      .slb-contact-row { grid-template-columns: 1fr !important; }
    }
  `;

  const innerContent = (
    <div
      className="container slb-layout"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
    >
      {/* Form card */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
        {renderForm()}
      </div>

      {/* Sidebar */}
      <div className="slb-sidebar">
        <Sidebar />
      </div>
    </div>
  );

  // ── Modal Layout ───────────────────────────────────────────────────────────
  if (onClose) {
    return (
      <>
        <style>{sharedStyles}</style>
        <div
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9000,
            background: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 16px",
            animation: "slb-fade-in 0.25s ease",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              background: "#101010",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "1100px",
              position: "relative",
              padding: "60px 60px 60px",
              animation: "slb-slide-up 0.3s ease",
              margin: "auto",
            }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "20px",
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
            {innerContent}
          </div>
        </div>
      </>
    );
  }

  // ── Inline Layout ──────────────────────────────────────────────────────────
  return (
    <>
      <style>{sharedStyles}</style>
      <section style={{ background: "#101010", paddingTop: "80px", paddingBottom: "100px" }}>
        {innerContent}
      </section>
    </>
  );
}
