"use client";
import { useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/app/hooks/useTracking";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1
  fahrzeugtyp: string;
  // Step 2
  marke: string;
  modell: string;
  baujahr: string;
  kilometerstand: string;
  preis: string;
  // Step 3
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  // Step 4
  unternehmen: string;
  land: string;
  strasse: string;
  plz: string;
  stadt: string;
  nachricht: string;
  agb: boolean;
}

const INITIAL: FormData = {
  fahrzeugtyp: "",
  marke: "",
  modell: "",
  baujahr: "",
  kilometerstand: "",
  preis: "",
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  unternehmen: "",
  land: "Deutschland",
  strasse: "",
  plz: "",
  stadt: "",
  nachricht: "",
  agb: false,
};

// ─── Vehicle type options ─────────────────────────────────────────────────────

const FAHRZEUGTYPEN = [
  { id: "pkw",           label: "Pkw",            image: "/images/fahrzeug-pkw.jpg" },
  { id: "landwirtschaft",label: "Landwirtschaft",  image: "/images/fahrzeug-landwirtschaft.jpg" },
  { id: "nutzfahrzeug",  label: "Nutzfahrzeug",    image: "/images/fahrzeug-nutzfahrzeug.jpg" },
  { id: "lkw",          label: "Lkw",             image: "/images/fahrzeug-lkw.jpg" },
  { id: "geraete",      label: "Geräte/Zubehör",  image: "/images/fahrzeug-geraete.jpg" },
  { id: "sonstiges",    label: "Sonstiges",        image: "/images/fahrzeug-sonstiges.jpg" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const LAENDER = [
  "Deutschland", "Österreich", "Schweiz", "Belgien", "Dänemark", "Frankreich",
  "Italien", "Luxemburg", "Niederlande", "Polen", "Tschechien", "Ungarn",
  "Sonstige",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = ((step - 1) / (total - 1)) * 100;
  return (
    <div style={{ marginBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "13px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Schritt {step} von {total}
        </span>
        <span
          style={{
            color: "#E15C55",
            fontSize: "13px",
            fontFamily: "'Quantico', sans-serif",
            fontWeight: 700,
          }}
        >
          {Math.round(pct)}%
        </span>
      </div>
      <div
        style={{
          height: "4px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg, #E15C55, #c04840)",
            borderRadius: "2px",
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        color: "#fff",
        fontFamily: "'Quantico', sans-serif",
        fontSize: "clamp(20px, 3vw, 26px)",
        marginBottom: "28px",
        fontWeight: 700,
      }}
    >
      {children}
    </h2>
  );
}

function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        style={{
          display: "block",
          color: "rgba(255,255,255,0.6)",
          fontSize: "13px",
          fontFamily: "'Inter', sans-serif",
          marginBottom: "6px",
        }}
      >
        {label}
        {required && <span style={{ color: "#E15C55", marginLeft: "4px" }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? label}
        required={required}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "10px",
          padding: "12px 16px",
          color: "#fff",
          fontSize: "15px",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        style={{
          display: "block",
          color: "rgba(255,255,255,0.6)",
          fontSize: "13px",
          fontFamily: "'Inter', sans-serif",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "10px",
          padding: "12px 16px",
          color: "#fff",
          fontSize: "15px",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          boxSizing: "border-box",
          cursor: "pointer",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          paddingRight: "40px",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#1a1a1a", color: "#fff" }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function NavButtons({
  onBack,
  onNext,
  nextLabel = "Weiter",
  nextDisabled = false,
  loading = false,
}: {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  loading?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "28px",
        flexWrap: "wrap",
      }}
    >
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "10px",
            padding: "12px 24px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px",
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
          }}
        >
          ← Zurück
        </button>
      )}
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled || loading}
          style={{
            background: nextDisabled || loading ? "rgba(225,92,85,0.4)" : "#E15C55",
            border: "none",
            borderRadius: "10px",
            padding: "12px 28px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            cursor: nextDisabled || loading ? "not-allowed" : "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            if (!nextDisabled && !loading)
              (e.currentTarget as HTMLElement).style.background = "#c04840";
          }}
          onMouseLeave={(e) => {
            if (!nextDisabled && !loading)
              (e.currentTarget as HTMLElement).style.background = "#E15C55";
          }}
        >
          {loading ? (
            <>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  border: "2px solid rgba(255,255,255,0.4)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              Wird gesendet…
            </>
          ) : (
            <>
              {nextLabel} →
            </>
          )}
        </button>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (field: keyof FormData) => (value: string | boolean) =>
    setData((prev) => ({ ...prev, [field]: value }));

  // ── Step 1 ──────────────────────────────────────────────────────────────────
  const step1 = (
    <>
      <ProgressBar step={1} total={4} />
      <StepTitle>Um welche Art Fahrzeug geht es?</StepTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {FAHRZEUGTYPEN.map((typ) => {
          const selected = data.fahrzeugtyp === typ.id;
          return (
            <button
              key={typ.id}
              type="button"
              onClick={() => set("fahrzeugtyp")(typ.id)}
              style={{
                position: "relative",
                border: selected
                  ? "2px solid #E15C55"
                  : "2px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "4/3",
                padding: 0,
                transition: "border-color 0.2s",
                background: "#1a1a1a",
              }}
            >
              {/* Photo */}
              <Image
                src={typ.image}
                alt={typ.label}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 50vw, 200px"
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: selected
                    ? "linear-gradient(to top, rgba(225,92,85,0.7) 0%, rgba(0,0,0,0.1) 60%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)",
                  transition: "background 0.2s",
                }}
              />
              {/* Selected checkmark */}
              {selected && (
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "#E15C55",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {/* Label */}
              <span
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  color: "#fff",
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                }}
              >
                {typ.label}
              </span>
            </button>
          );
        })}
      </div>
      <NavButtons
        onNext={() => setStep(2)}
        nextDisabled={!data.fahrzeugtyp}
      />
    </>
  );

  // ── Step 2 ──────────────────────────────────────────────────────────────────
  const step2 = (
    <>
      <ProgressBar step={2} total={4} />
      <StepTitle>Fahrzeug-/Objektdaten</StepTitle>
      <InputField
        label="Marke / Leasingobjekt"
        value={data.marke}
        onChange={set("marke")}
        placeholder="z.B. BMW, Mercedes, Fendt…"
        required
      />
      <InputField
        label="Modell"
        value={data.modell}
        onChange={set("modell")}
        placeholder="z.B. 3er, C-Klasse, 724…"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField
          label="Baujahr"
          value={data.baujahr}
          onChange={set("baujahr")}
          placeholder="z.B. 2020"
        />
        <InputField
          label="Kilometerstand / Betriebsstunden"
          value={data.kilometerstand}
          onChange={set("kilometerstand")}
          placeholder="z.B. 45.000 km"
        />
      </div>
      <InputField
        label="Preis inkl. MwSt. (€)"
        value={data.preis}
        onChange={set("preis")}
        placeholder="z.B. 35.000"
        required
      />
      <NavButtons
        onBack={() => setStep(1)}
        onNext={() => setStep(3)}
        nextDisabled={!data.marke || !data.preis}
      />
    </>
  );

  // ── Step 3 ──────────────────────────────────────────────────────────────────
  const step3 = (
    <>
      <ProgressBar step={3} total={4} />
      <StepTitle>Persönliche Angaben</StepTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField
          label="Vorname"
          value={data.vorname}
          onChange={set("vorname")}
          required
        />
        <InputField
          label="Nachname"
          value={data.nachname}
          onChange={set("nachname")}
          required
        />
      </div>
      <InputField
        label="E-Mail-Adresse"
        type="email"
        value={data.email}
        onChange={set("email")}
        placeholder="ihre@email.de"
        required
      />
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            color: "rgba(255,255,255,0.6)",
            fontSize: "13px",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "6px",
          }}
        >
          Telefon / Handy <span style={{ color: "#E15C55" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRight: "none",
              borderRadius: "10px 0 0 10px",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "18px" }}>🇩🇪</span>
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              +49
            </span>
          </div>
          <input
            type="tel"
            value={data.telefon}
            onChange={(e) => set("telefon")(e.target.value)}
            placeholder="0170 1234567"
            required
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "0 10px 10px 0",
              padding: "12px 16px",
              color: "#fff",
              fontSize: "15px",
              fontFamily: "'Inter', sans-serif",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>
      </div>
      <NavButtons
        onBack={() => setStep(2)}
        onNext={() => setStep(4)}
        nextDisabled={!data.vorname || !data.nachname || !data.email || !data.telefon}
      />
    </>
  );

  // ── Step 4 ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      trackEvent("form_submit", undefined, {
        form: "kontakt_page",
        fahrzeugtyp: data.fahrzeugtyp,
        marke: data.marke,
      });
      setStep(5);
    } catch {
      setError(
        "Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an."
      );
    } finally {
      setLoading(false);
    }
  };

  const step4 = (
    <>
      <ProgressBar step={4} total={4} />
      <StepTitle>Unternehmensdaten</StepTitle>
      <InputField
        label="Unternehmen / Firma"
        value={data.unternehmen}
        onChange={set("unternehmen")}
        placeholder="Muster GmbH"
        required
      />
      <SelectField
        label="Land"
        value={data.land}
        onChange={set("land")}
        options={LAENDER}
      />
      <InputField
        label="Straße + Hausnummer"
        value={data.strasse}
        onChange={set("strasse")}
        placeholder="Musterstraße 1"
      />
      <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "12px" }}>
        <InputField
          label="Postleitzahl"
          value={data.plz}
          onChange={set("plz")}
          placeholder="10115"
        />
        <InputField
          label="Stadt"
          value={data.stadt}
          onChange={set("stadt")}
          placeholder="Berlin"
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            color: "rgba(255,255,255,0.6)",
            fontSize: "13px",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "6px",
          }}
        >
          Nachricht (optional)
        </label>
        <textarea
          value={data.nachricht}
          onChange={(e) => set("nachricht")(e.target.value)}
          placeholder="Weitere Informationen zu Ihrer Anfrage…"
          rows={4}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "10px",
            padding: "12px 16px",
            color: "#fff",
            fontSize: "15px",
            fontFamily: "'Inter', sans-serif",
            outline: "none",
            resize: "vertical",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
        />
      </div>

      {/* AGB */}
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          cursor: "pointer",
          marginBottom: "8px",
        }}
      >
        <div
          onClick={() => set("agb")(!data.agb)}
          style={{
            width: "20px",
            height: "20px",
            minWidth: "20px",
            border: `2px solid ${data.agb ? "#E15C55" : "rgba(255,255,255,0.25)"}`,
            borderRadius: "5px",
            background: data.agb ? "#E15C55" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
        >
          {data.agb && (
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path
                d="M1 4L4.5 7.5L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "13px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.5,
          }}
          onClick={() => set("agb")(!data.agb)}
        >
          Ich habe die{" "}
          <a
            href="https://master-leasing.com/agb/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E15C55" }}
            onClick={(e) => e.stopPropagation()}
          >
            AGB
          </a>{" "}
          und die{" "}
          <a
            href="/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E15C55" }}
            onClick={(e) => e.stopPropagation()}
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme zu. <span style={{ color: "#E15C55" }}>*</span>
        </span>
      </label>

      {error && (
        <p
          style={{
            color: "#E15C55",
            fontSize: "14px",
            fontFamily: "'Inter', sans-serif",
            marginTop: "16px",
            padding: "12px 16px",
            background: "rgba(225,92,85,0.1)",
            border: "1px solid rgba(225,92,85,0.2)",
            borderRadius: "8px",
          }}
        >
          {error}
        </p>
      )}

      <NavButtons
        onBack={() => setStep(3)}
        onNext={handleSubmit}
        nextLabel="Anfrage absenden"
        nextDisabled={!data.unternehmen || !data.agb}
        loading={loading}
      />
    </>
  );

  // ── Step 5 – Success ─────────────────────────────────────────────────────────
  const step5 = (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* Checkmark */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(72,199,116,0.12)",
          border: "2px solid rgba(72,199,116,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
          <path
            d="M3 14L13 24L33 3"
            stroke="#48C774"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Image
        src="/images/LogoFinalFile-01-1024x305.png"
        alt="Master Leasing"
        width={180}
        height={54}
        style={{ height: "48px", width: "auto", objectFit: "contain" }}
      />

      <div>
        <h2
          style={{
            color: "#fff",
            fontFamily: "'Quantico', sans-serif",
            fontSize: "clamp(22px, 3vw, 28px)",
            marginBottom: "12px",
          }}
        >
          Vielen Dank!
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            maxWidth: "420px",
          }}
        >
          Vielen Dank, dass Sie uns kontaktiert haben. Wir melden uns in der Regel
          innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
        <a
          href="/"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "10px",
            padding: "11px 22px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
          }}
        >
          Zur Startseite
        </a>
        <a
          href="/fahrzeuge"
          style={{
            background: "#E15C55",
            border: "none",
            borderRadius: "10px",
            padding: "11px 22px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
          }}
        >
          Fahrzeuge ansehen →
        </a>
      </div>
    </div>
  );

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          .form-vehicle-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        style={{
          background: "#101010",
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* ── Left: Form card ─────────────────────────────────────────────── */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            {step === 1 && step1}
            {step === 2 && step2}
            {step === 3 && step3}
            {step === 4 && step4}
            {step === 5 && step5}
          </div>

          {/* ── Right: Contact info ──────────────────────────────────────────── */}
          <div>
            <p
              className="overline"
              style={{ marginBottom: "12px" }}
            >
              Direkter Kontakt
            </p>
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                marginBottom: "8px",
              }}
            >
              Wir sind für Sie da
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "15px",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Haben Sie Fragen? Rufen Sie uns direkt an oder schreiben Sie uns eine
              E-Mail. Wir beraten Sie kostenlos und unverbindlich.
            </p>

            {/* Contact items */}
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                ),
                label: "Telefon",
                value: "03331 – 29 77 92",
                href: "tel:+4903331297792",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416z" />
                  </svg>
                ),
                label: "E-Mail",
                value: "anfrage@master-leasing.com",
                href: "mailto:anfrage@master-leasing.com",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 384 512" fill="#E15C55">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                ),
                label: "Adresse",
                value: "Am Waldrand 10, 16278 Angermünde",
                href: "https://maps.app.goo.gl/V6VpdRrRxhJVBLLU7",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                  </svg>
                ),
                label: "Öffnungszeiten",
                value: "Mo – Fr, 07:00 – 16:00 Uhr",
                href: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    minWidth: "44px",
                    background: "rgba(225,92,85,0.08)",
                    border: "1px solid rgba(225,92,85,0.18)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "15px",
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#E15C55")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)")
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "15px",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Trust badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "36px",
              }}
            >
              {[
                { icon: "✓", text: "Ohne Schufa-Prüfung" },
                { icon: "⚡", text: "Zusage in 24 Stunden" },
                { icon: "🏢", text: "Freie Händlerwahl" },
                { icon: "🔒", text: "100% vertraulich" },
              ].map((badge, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{badge.icon}</span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: stack below 900px */}
        <style>{`
          @media (max-width: 900px) {
            .kontakt-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 540px) {
            .form-two-col { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
