"use client";
import { useMemo, useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/app/hooks/useTracking";

/**
 * Sale-and-Leaseback Bewertungs-Rechner (Preview).
 *
 * ⚠️ ZAHLEN MÜSSEN MIT GREGOR ABGESTIMMT WERDEN
 *
 * Gibt eine erste, unverbindliche Indikation:
 *   – Auszahlungsbetrag (was bekommen wir für das Objekt)
 *   – Monatliche Leasingrate zurück (für die Weiternutzung)
 *
 * Annahmen (PLATZHALTER):
 *   – PAYOUT_RATIO: typischer Anteil des Objektwertes der ausgezahlt wird
 *     (Risikoabschlag wegen Schufa-frei). Aktuell 65–80 % je nach
 *     Objekttyp und Alter.
 *   – LEASE_BACK_FACTOR: monatlicher Faktor auf den Auszahlungsbetrag,
 *     ähnlich Leasing-Rechner.
 *
 * Vor Live-Schaltung: mit Gregor Konditionen verifizieren und Faktoren in
 * den TUNING-Parametern oben anpassen.
 */

// === TUNING (Platzhalter – mit Gregor abstimmen) ====================
type ObjectType = "pkw" | "nutzfahrzeug" | "lkw" | "maschine" | "landmaschine";

const OBJECT_OPTIONS: { id: ObjectType; label: string }[] = [
  { id: "pkw", label: "PKW" },
  { id: "nutzfahrzeug", label: "Nutzfahrzeug" },
  { id: "lkw", label: "LKW" },
  { id: "maschine", label: "Bau-/Industriemaschine" },
  { id: "landmaschine", label: "Landmaschine" },
];

// Auszahlungsquote: % vom Objektwert der ausgezahlt wird.
// Höhere Quote bei besser bewertbaren Objekten (Maschinen mit Markt-Index).
const PAYOUT_RATIO: Record<ObjectType, number> = {
  pkw: 0.72,
  nutzfahrzeug: 0.7,
  lkw: 0.78,
  maschine: 0.8,
  landmaschine: 0.78,
};

// Altersabschlag pro Jahr ab Baujahr.
const AGE_PENALTY_PER_YEAR = 0.015;
const MAX_AGE_PENALTY = 0.25;

// Monatliche Rate als Faktor vom Auszahlungsbetrag, je Laufzeit.
const LEASEBACK_MONTHLY_FACTOR: Record<number, number> = {
  24: 0.052,
  36: 0.038,
  48: 0.032,
  60: 0.028,
};

const TERMS = [24, 36, 48, 60] as const;
const MIN_VALUE = 10_000; // <10k disqualifiziert per AGB §6
const MAX_VALUE = 200_000;
const CURRENT_YEAR = new Date().getFullYear();
// ====================================================================

function fmt(n: number) {
  return n.toLocaleString("de-DE", { maximumFractionDigits: 0 });
}

export default function SlbValueCalculator({
  variant = "preview",
}: {
  variant?: "preview" | "embedded";
}) {
  const { openModal } = useContactModal();
  const [objectType, setObjectType] = useState<ObjectType>("pkw");
  const [value, setValue] = useState(25_000);
  const [year, setYear] = useState(2020);
  const [term, setTerm] = useState<number>(48);

  const result = useMemo(() => {
    const age = Math.max(0, CURRENT_YEAR - year);
    const agePenalty = Math.min(age * AGE_PENALTY_PER_YEAR, MAX_AGE_PENALTY);
    const baseRatio = PAYOUT_RATIO[objectType] ?? 0.7;
    const effectiveRatio = Math.max(0.45, baseRatio - agePenalty);
    const payoutLow = value * (effectiveRatio - 0.05);
    const payoutHigh = value * (effectiveRatio + 0.03);
    const payoutMid = (payoutLow + payoutHigh) / 2;
    const factor = LEASEBACK_MONTHLY_FACTOR[term] ?? 0.035;
    const monthly = payoutMid * factor;
    const qualified = value >= MIN_VALUE;
    return {
      payoutLow,
      payoutHigh,
      payoutMid,
      monthly,
      effectiveRatio,
      qualified,
    };
  }, [objectType, value, year, term]);

  const handleAnfrage = () => {
    trackEvent("cta_click", undefined, {
      cta_type: "slb_calculator_submit",
      object_type: objectType,
      value: String(value),
      year: String(year),
      term: String(term),
      payout_mid: String(Math.round(result.payoutMid)),
    });
    openModal({
      initialData: { preis: String(value), baujahr: String(year) },
    });
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
          🚧 <strong>Preview / TODO:</strong> Auszahlungsquoten und
          Monatsfaktoren sind Platzhalter — mit Gregor abstimmen.
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
        Sale-and-Leaseback-Bewertung
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          marginBottom: "28px",
        }}
      >
        Was bekommen Sie für Ihr Objekt + welche Rate fällt für die
        Weiternutzung an? Verbindliche Bewertung nach Begutachtung.
      </p>

      {/* Objekt-Typ */}
      <div>
        <Label>Was möchten Sie beleihen?</Label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {OBJECT_OPTIONS.map((o) => (
            <Chip
              key={o.id}
              active={objectType === o.id}
              onClick={() => setObjectType(o.id)}
            >
              {o.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Wert */}
      <div style={{ marginTop: "24px" }}>
        <SliderField
          label="Geschätzter aktueller Marktwert"
          value={value}
          onChange={setValue}
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={500}
          format={(v) => `${fmt(v)} €`}
        />
        {!result.qualified && (
          <p
            style={{
              marginTop: "8px",
              color: "#ffc850",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Hinweis: Mindestwert für Sale-and-Leaseback liegt bei 10.000 €.
          </p>
        )}
      </div>

      {/* Baujahr */}
      <div style={{ marginTop: "24px" }}>
        <SliderField
          label="Baujahr"
          value={year}
          onChange={setYear}
          min={2005}
          max={CURRENT_YEAR}
          step={1}
          format={(v) => `${v}`}
        />
      </div>

      {/* Laufzeit */}
      <div style={{ marginTop: "24px" }}>
        <Label>Laufzeit Leaseback</Label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {TERMS.map((t) => (
            <Chip key={t} active={term === t} onClick={() => setTerm(t)}>
              {t} Monate
            </Chip>
          ))}
        </div>
      </div>

      {/* Ergebnis */}
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
          Indikative Auszahlung
        </div>
        <div
          style={{
            color: "#E15C55",
            fontFamily: "'Quantico', sans-serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            margin: "8px 0",
          }}
        >
          {fmt(Math.round(result.payoutLow))} – {fmt(Math.round(result.payoutHigh))} €
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            marginTop: "4px",
          }}
        >
          ≈ {Math.round(result.effectiveRatio * 100)} % vom Marktwert
        </div>

        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <div
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Monatliche Leaseback-Rate
            </div>
            <div
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {fmt(Math.round(result.monthly))} € / Monat
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAnfrage}
        disabled={!result.qualified}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "16px",
          background: result.qualified ? "#E15C55" : "rgba(255,255,255,0.1)",
          color: result.qualified ? "#fff" : "rgba(255,255,255,0.4)",
          border: "none",
          borderRadius: "12px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "16px",
          fontWeight: 700,
          cursor: result.qualified ? "pointer" : "not-allowed",
        }}
      >
        {result.qualified
          ? "Jetzt verbindlich bewerten lassen →"
          : "Mindestwert 10.000 € erforderlich"}
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
        🔒 DSGVO-konform · Keine Schufa-Abfrage · 24h-Bewertung
      </p>
    </section>
  );
}

// ─── Bausteine ────────────────────────────────────────────────────────────────

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
        style={{ width: "100%", accentColor: "#E15C55", cursor: "pointer" }}
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
