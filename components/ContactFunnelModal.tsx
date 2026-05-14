// components/ContactFunnelModal.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useContactModal, ModalFormData } from "@/context/ContactModalContext";

const INITIAL: ModalFormData = {
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

const FAHRZEUGTYPEN = [
  { id: "pkw",            label: "Pkw",            image: "/images/fahrzeug-pkw.jpg" },
  { id: "landwirtschaft", label: "Landwirtschaft",  image: "/images/fahrzeug-landwirtschaft.jpg" },
  { id: "nutzfahrzeug",   label: "Nutzfahrzeug",    image: "/images/fahrzeug-nutzfahrzeug.jpg" },
  { id: "lkw",            label: "Lkw",             image: "/images/fahrzeug-lkw.jpg" },
  { id: "geraete",        label: "Geräte/Zubehör",  image: "/images/fahrzeug-geraete.jpg" },
  { id: "sonstiges",      label: "Sonstiges",        image: "/images/fahrzeug-sonstiges.jpg" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = ((step - 1) / (total - 1)) * 100;
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", paddingRight: "44px" }}>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
          Schritt {step} von {total}
        </span>
        <span style={{ color: "#E15C55", fontSize: "13px", fontFamily: "'Quantico', sans-serif", fontWeight: 700 }}>
          {Math.round(pct)}%
        </span>
      </div>
      <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #E15C55, #c04840)", borderRadius: "2px", transition: "width 0.4s ease" }} />
      </div>
    </div>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(18px, 3vw, 22px)", marginBottom: "20px", fontWeight: 700 }}>
      {children}
    </h2>
  );
}

function TrustBar() {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "16px", marginTop: "8px" }}>
      {[
        { icon: "🔒", text: "SSL-verschlüsselt" },
        { icon: "✅", text: "Keine Schufa-Prüfung" },
        { icon: "⏱", text: "Antwort in 24h" },
      ].map((item) => (
        <span key={item.text} style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.4)", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>
          <span>{item.icon}</span>
          {item.text}
        </span>
      ))}
    </div>
  );
}

function InputField({ label, type = "text", value, onChange, placeholder, required }: {
  label: string; type?: string; value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "'Inter', sans-serif", marginBottom: "6px" }}>
        {label}{required && <span style={{ color: "#E15C55", marginLeft: "4px" }}>*</span>}
      </label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? label} required={required}
        style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "15px", fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
      />
    </div>
  );
}

function NavButtons({ onBack, onNext, nextLabel = "Weiter", nextDisabled = false, loading = false }: {
  onBack?: () => void; onNext?: () => void; nextLabel?: string; nextDisabled?: boolean; loading?: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
      {onBack && (
        <button type="button" onClick={onBack}
          style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", padding: "12px 24px", color: "rgba(255,255,255,0.7)", fontSize: "15px", fontFamily: "'Inter', sans-serif", cursor: "pointer" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
        >
          ← Zurück
        </button>
      )}
      {onNext && (
        <button type="button" onClick={onNext} disabled={nextDisabled || loading}
          style={{ background: nextDisabled || loading ? "rgba(225,92,85,0.4)" : "#E15C55", border: "none", borderRadius: "10px", padding: "12px 28px", color: "#fff", fontSize: "15px", fontWeight: 600, fontFamily: "'Inter', sans-serif", cursor: nextDisabled || loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "8px" }}
          onMouseEnter={(e) => { if (!nextDisabled && !loading) (e.currentTarget as HTMLElement).style.background = "#c04840"; }}
          onMouseLeave={(e) => { if (!nextDisabled && !loading) (e.currentTarget as HTMLElement).style.background = "#E15C55"; }}
        >
          {loading ? (
            <><span style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} /> Wird gesendet…</>
          ) : (
            <>{nextLabel} →</>
          )}
        </button>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ContactFunnelModal() {
  const { isOpen, initialData, closeModal } = useContactModal();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ModalFormData>({ ...INITIAL });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Reset form state each time modal opens; lock body scroll
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setData({ ...INITIAL, ...initialData });
      setError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = (field: keyof ModalFormData) => (value: string | boolean) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleClose = useCallback(() => closeModal(), [closeModal]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

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
      setStep(6);
    } catch {
      setError("Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  // ── Steps ──────────────────────────────────────────────────────────────────

  // Step 1: Fahrzeugtyp wählen
  const step1Content = (
    <>
      <ProgressBar step={1} total={5} />
      <StepTitle>Um welche Art Fahrzeug geht es?</StepTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {FAHRZEUGTYPEN.map((typ) => {
          const selected = data.fahrzeugtyp === typ.id;
          return (
            <button key={typ.id} type="button" onClick={() => set("fahrzeugtyp")(typ.id)}
              style={{ position: "relative", border: selected ? "2px solid #E15C55" : "2px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3", padding: 0, background: "#1a1a1a" }}>
              <Image src={typ.image} alt={typ.label} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 50vw, 180px" />
              <div style={{ position: "absolute", inset: 0, background: selected ? "linear-gradient(to top, rgba(225,92,85,0.7) 0%, rgba(0,0,0,0.1) 60%)" : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)" }} />
              {selected && (
                <div style={{ position: "absolute", top: "8px", right: "8px", width: "22px", height: "22px", borderRadius: "50%", background: "#E15C55", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              )}
              <span style={{ position: "absolute", bottom: "10px", left: 0, right: 0, textAlign: "center", fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>{typ.label}</span>
            </button>
          );
        })}
      </div>
      <NavButtons onNext={() => setStep(2)} nextDisabled={!data.fahrzeugtyp} />
      <TrustBar />
    </>
  );

  // Step 2: Marke, Modell, Baujahr
  const step2Content = (
    <>
      <ProgressBar step={2} total={5} />
      <StepTitle>Welches Fahrzeug / Objekt möchten Sie leasen?</StepTitle>
      <InputField label="Marke / Leasingobjekt" value={data.marke} onChange={set("marke")} placeholder="z.B. BMW, Mercedes, Fendt…" required />
      <InputField label="Modell" value={data.modell} onChange={set("modell")} placeholder="z.B. 3er, C-Klasse, 724…" />
      <InputField label="Baujahr" value={data.baujahr} onChange={set("baujahr")} placeholder="z.B. 2020" />
      <NavButtons onBack={() => setStep(1)} onNext={() => setStep(3)} nextDisabled={!data.marke} />
      <TrustBar />
    </>
  );

  // Step 3: Kilometerstand + Preis
  const step3Content = (
    <>
      <ProgressBar step={3} total={5} />
      <StepTitle>Kilometerstand & Wert des Objekts</StepTitle>
      <InputField label="Kilometerstand / Betriebsstunden" value={data.kilometerstand} onChange={set("kilometerstand")} placeholder="z.B. 45.000 km" />
      <InputField label="Preis inkl. MwSt. (€)" value={data.preis} onChange={set("preis")} placeholder="z.B. 35.000" required />
      <NavButtons onBack={() => setStep(2)} onNext={() => setStep(4)} nextDisabled={!data.preis} />
      <TrustBar />
    </>
  );

  // Step 4: Persönliche Angaben
  const step4Content = (
    <>
      <ProgressBar step={4} total={5} />
      <StepTitle>Persönliche Angaben</StepTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField label="Vorname" value={data.vorname} onChange={set("vorname")} required />
        <InputField label="Nachname" value={data.nachname} onChange={set("nachname")} required />
      </div>
      <InputField label="E-Mail-Adresse" type="email" value={data.email} onChange={set("email")} placeholder="ihre@email.de" required />
      <div style={{ marginBottom: "14px" }}>
        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "'Inter', sans-serif", marginBottom: "6px" }}>
          Telefon / Handy <span style={{ color: "#E15C55" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRight: "none", borderRadius: "10px 0 0 10px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
            <span style={{ fontSize: "18px" }}>🇩🇪</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}>+49</span>
          </div>
          <input type="tel" value={data.telefon} onChange={(e) => set("telefon")(e.target.value)} placeholder="0170 1234567" required
            style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0 10px 10px 0", padding: "12px 16px", color: "#fff", fontSize: "15px", fontFamily: "'Inter', sans-serif", outline: "none" }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>
      </div>
      <NavButtons onBack={() => setStep(3)} onNext={() => setStep(5)} nextDisabled={!data.vorname || !data.nachname || !data.email || !data.telefon} />
      <TrustBar />
    </>
  );

  // Step 5: Unternehmen + Nachricht (vereinfacht)
  const step5Content = (
    <>
      <ProgressBar step={5} total={5} />
      <StepTitle>Fast geschafft! Ihr Unternehmen</StepTitle>
      <InputField label="Unternehmen / Firma" value={data.unternehmen} onChange={set("unternehmen")} placeholder="Muster GmbH" required />
      <div style={{ marginBottom: "14px" }}>
        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "'Inter', sans-serif", marginBottom: "6px" }}>Nachricht (optional)</label>
        <textarea value={data.nachricht} onChange={(e) => set("nachricht")(e.target.value)} placeholder="Weitere Informationen zu Ihrer Anfrage…" rows={3}
          style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "15px", fontFamily: "'Inter', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
        />
      </div>
      {/* AGB */}
      <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", marginBottom: "8px" }}>
        <div onClick={() => set("agb")(!data.agb)}
          style={{ width: "20px", height: "20px", minWidth: "20px", border: `2px solid ${data.agb ? "#E15C55" : "rgba(255,255,255,0.25)"}`, borderRadius: "5px", background: data.agb ? "#E15C55" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", transition: "all 0.2s", cursor: "pointer" }}>
          {data.agb && <svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        </div>
        <span onClick={() => set("agb")(!data.agb)} style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
          Ich habe die{" "}
          <a href="https://master-leasing.com/agb/" target="_blank" rel="noopener noreferrer" style={{ color: "#E15C55" }} onClick={(e) => e.stopPropagation()}>AGB</a>
          {" "}und die{" "}
          <a href="/datenschutz" target="_blank" rel="noopener noreferrer" style={{ color: "#E15C55" }} onClick={(e) => e.stopPropagation()}>Datenschutzerklärung</a>
          {" "}gelesen und stimme zu. <span style={{ color: "#E15C55" }}>*</span>
        </span>
      </label>
      {error && (
        <p style={{ color: "#E15C55", fontSize: "14px", fontFamily: "'Inter', sans-serif", marginTop: "16px", padding: "12px 16px", background: "rgba(225,92,85,0.1)", border: "1px solid rgba(225,92,85,0.2)", borderRadius: "8px" }}>
          {error}
        </p>
      )}
      <NavButtons onBack={() => setStep(4)} onNext={handleSubmit} nextLabel="Anfrage absenden" nextDisabled={!data.unternehmen || !data.agb} loading={loading} />
      <TrustBar />
    </>
  );

  // Step 6: Danke
  const step6Content = (
    <div style={{ textAlign: "center", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(72,199,116,0.12)", border: "2px solid rgba(72,199,116,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none"><path d="M3 14L13 24L33 3" stroke="#48C774" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <Image src="/images/LogoFinalFile-01-1024x305.png" alt="Master Leasing" width={180} height={54} style={{ height: "48px", width: "auto", objectFit: "contain" }} />
      <div>
        <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(22px, 3vw, 28px)", marginBottom: "12px" }}>Vielen Dank!</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: 1.7, maxWidth: "420px" }}>
          Wir melden uns in der Regel innerhalb von <strong style={{ color: "#fff" }}>24 Stunden</strong> bei Ihnen.
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { icon: "🔒", text: "Sicher & diskret" },
          { icon: "⭐", text: "20 J. Erfahrung" },
          { icon: "✅", text: "Keine Schufa" },
        ].map((item) => (
          <span key={item.text} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.5)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
            {item.icon} {item.text}
          </span>
        ))}
      </div>
      <button onClick={handleClose}
        style={{ background: "#E15C55", border: "none", borderRadius: "10px", padding: "12px 28px", color: "#fff", fontSize: "15px", fontWeight: 600, fontFamily: "'Inter', sans-serif", cursor: "pointer" }}>
        Schließen
      </button>
    </div>
  );

  // ── Render overlay ──────────────────────────────────────────────────────────
  return (
    <>
      <div
        onClick={(e) => e.target === e.currentTarget && handleClose()}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backdropFilter: "blur(4px)" }}
      >
        <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", width: "100%", maxWidth: "680px", maxHeight: "90vh", overflowY: "auto", padding: "36px", position: "relative" }}>
          {/* Close button */}
          <button onClick={handleClose}
            style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", fontSize: "18px", zIndex: 1 }}>
            ✕
          </button>

          {step === 1 && step1Content}
          {step === 2 && step2Content}
          {step === 3 && step3Content}
          {step === 4 && step4Content}
          {step === 5 && step5Content}
          {step === 6 && step6Content}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
