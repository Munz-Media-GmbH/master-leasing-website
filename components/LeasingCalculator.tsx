"use client";
import { useMemo, useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/app/hooks/useTracking";

/**
 * Leasing-Rechner (Preview).
 *
 * ⚠️ ZAHLEN MÜSSEN MIT GREGOR ABGESTIMMT WERDEN
 * Aktuell verwendete Annahmen sind Platzhalter, basierend auf der
 * Faustregel aus AGB §6 (LSZ-Tarife 10/25/30/35/40/45/50 % Sonderzahlung)
 * und einer monatlichen Rate von ~1,5–2,2 % vom Fahrzeugpreis.
 * Vor Live-Schaltung: Konditionen mit Gregor verifizieren und MONTHLY_FACTOR,
 * INTEREST_BPS, TERM_OPTIONS, MIN_MONTHLY anpassen.
 */

// === TUNING-PARAMETER (Platzhalter – mit Gregor abstimmen) ===========
const TERM_OPTIONS = [24, 36, 48, 60] as const;
const DOWNPAYMENT_OPTIONS = [0, 10, 20, 30] as const; // %
const MIN_PRICE = 5_000;
const MAX_PRICE = 150_000;

// Monatsfaktor (vom finanzierten Anteil) abhängig von Laufzeit.
// Werte sind PLATZHALTER und nähern sich typischen Schufa-frei-Konditionen
// (höher als Bank-Leasing wegen Risikoaufschlag).
const MONTHLY_FACTOR: Record<number, number> = {
  24: 0.0235, // 24 Monate
  36: 0.0185, // 36 Monate
  48: 0.0165, // 48 Monate
  60: 0.0155, // 60 Monate
};
// ====================================================================

function fmt(n: number) {
  return n.toLocaleString("de-DE", { maximumFractionDigits: 0 });
}

export default function LeasingCalculator({
  variant = "preview",
}: {
  variant?: "preview" | "embedded";
}) {
  const { openModal } = useContactModal();
  const [price, setPrice] = useState(25_000);
  const [term, setTerm] = useState<number>(48);
  const [downPct, setDownPct] = useState<number>(10);

  const result = useMemo(() => {
    const down = price * (downPct / 100);
    const financed = price - down;
    const factor = MONTHLY_FACTOR[term] ?? 0.018;
    const monthly = financed * factor;
    const total = monthly * term + down;
    return {
      down,
      financed,
      monthly,
      total,
      effectiveCostOverPrice: total / price,
    };
  }, [price, term, downPct]);

  const handleAnfrage = () => {
    trackEvent("cta_click", undefined, {
      cta_type: "leasing_calculator_submit",
      price: String(price),
      term: String(term),
      down_pct: String(downPct),
      monthly: String(Math.round(result.monthly)),
    });
    openModal({ initialData: { preis: String(price) } });
  };

  return (
    <section
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "32px",
        maxWidth: "780px",
        margin: "0 auto",
      }}
    >
      {variant === "preview" && (
        <div
          style={{
            background: "rgba(255,200,80,0.08)",
            border: "1px solid rgba(255,200,80,0.3)",
            borderRadius: "10px",
            padding: "12px 16px",
            marginBottom: "24px",
            color: "#ffc850",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
          }}
        >
          🚧 <strong>Preview / TODO:</strong> Monatsfaktoren noch nicht final —
          mit Gregor abstimmen, bevor Live-Schaltung im Hero.
        </div>
      )}

      <h2
        style={{
          color: "#fff",
          fontFamily: "'Quantico', sans-serif",
          fontSize: "clamp(22px, 3vw, 32px)",
          marginBottom: "8px",
        }}
      >
        Leasing-Rechner
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          marginBottom: "28px",
        }}
      >
        Unverbindliche Indikation für Ihre monatliche Rate. Verbindliche
        Konditionen nach individueller Prüfung.
      </p>

      {/* Fahrzeugpreis */}
      <SliderField
        label="Fahrzeugpreis"
        value={price}
        onChange={setPrice}
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={500}
        format={(v) => `${fmt(v)} €`}
      />

      {/* Laufzeit */}
      <div style={{ marginTop: "24px" }}>
        <Label>Laufzeit</Label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {TERM_OPTIONS.map((t) => (
            <Chip key={t} active={term === t} onClick={() => setTerm(t)}>
              {t} Monate
            </Chip>
          ))}
        </div>
      </div>

      {/* Sonderzahlung */}
      <div style={{ marginTop: "24px" }}>
        <Label>Anzahlung / Leasingsonderzahlung</Label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {DOWNPAYMENT_OPTIONS.map((p) => (
            <Chip
              key={p}
              active={downPct === p}
              onClick={() => setDownPct(p)}
            >
              {p}%
            </Chip>
          ))}
        </div>
      </div>

      {/* Ergebnis-Block */}
      <div
        style={{
          marginTop: "32px",
          padding: "24px",
          background: "rgba(225,92,85,0.08)",
          border: "1px solid rgba(225,92,85,0.3)",
          borderRadius: "14px",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Quantico', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Ihre indikative Rate
        </div>
        <div
          style={{
            color: "#E15C55",
            fontFamily: "'Quantico', sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            margin: "8px 0",
          }}
        >
          {fmt(Math.round(result.monthly))} €
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "16px",
              fontWeight: 400,
              marginLeft: "8px",
            }}
          >
            / Monat netto
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
            marginTop: "16px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
          }}
        >
          <KV label="Sonderzahlung" value={`${fmt(result.down)} €`} />
          <KV label="Finanzierter Anteil" value={`${fmt(result.financed)} €`} />
          <KV label="Gesamtkosten" value={`${fmt(result.total)} €`} />
        </div>
      </div>

      <button
        type="button"
        onClick={handleAnfrage}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "16px",
          background: "#E15C55",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "16px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Diese Konfiguration unverbindlich anfragen →
      </button>

      <p
        style={{
          marginTop: "12px",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        🔒 DSGVO-konform · Keine Schufa-Abfrage · Zusage in 24h
      </p>
    </section>
  );
}

// ─── UI-Bausteine ─────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        color: "rgba(255,255,255,0.6)",
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 16px",
        background: active ? "#E15C55" : "rgba(255,255,255,0.06)",
        color: active ? "#fff" : "rgba(255,255,255,0.7)",
        border: `1px solid ${active ? "#E15C55" : "rgba(255,255,255,0.12)"}`,
        borderRadius: "10px",
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      {children}
    </button>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "10px",
        }}
      >
        <Label>{label}</Label>
        <span
          style={{
            color: "#E15C55",
            fontFamily: "'Quantico', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        style={{
          width: "100%",
          accentColor: "#E15C55",
          cursor: "pointer",
        }}
        aria-label={label}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "11px",
          marginTop: "4px",
        }}
      >
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        {label}
      </div>
      <div style={{ color: "#fff", fontWeight: 600, marginTop: "2px" }}>
        {value}
      </div>
    </div>
  );
}
