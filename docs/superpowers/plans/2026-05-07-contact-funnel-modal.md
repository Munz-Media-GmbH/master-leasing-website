# Contact Funnel Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all CTA buttons with a unified 4-step contact funnel modal (centered dark overlay, existing form steps) triggered via React context.

**Architecture:** A `ContactModalContext` holds open/close state + optional pre-fill data. `ContactFunnelModal` reads the context and renders the 4-step form as a modal overlay. `ContactModalProvider` + `ContactFunnelModal` are mounted once in `layout.tsx`; all trigger components call `useContactModal().openModal()`.

**Tech Stack:** Next.js 16.2 App Router, TypeScript, React Context, inline styles (project convention), `/api/kontakt` POST endpoint.

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| CREATE | `context/ContactModalContext.tsx` | State (isOpen, initialData), openModal, closeModal, Provider, useContactModal hook |
| CREATE | `components/ContactFunnelModal.tsx` | 4-step form in modal overlay, reads context |
| MODIFY | `app/layout.tsx` | Wrap body with Provider, add modal |
| MODIFY | `components/Hero.tsx` | Convert `<a href="/kontakt">` → button via context |
| MODIFY | `components/Header.tsx` | Convert both nav anchors → buttons via context |
| MODIFY | `components/CTABanner.tsx` | Replace QuickContactModal → button via context |
| MODIFY | `components/VehicleInquiryButton.tsx` | Replace local InquiryModal → openModal with pre-fill |
| DELETE | `components/QuickContactModal.tsx` | No longer used |

---

### Task 1: Create ContactModalContext

**Files:**
- Create: `context/ContactModalContext.tsx`

- [ ] **Step 1: Create the context file**

```tsx
// context/ContactModalContext.tsx
"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface ModalFormData {
  fahrzeugtyp: string;
  marke: string;
  modell: string;
  baujahr: string;
  kilometerstand: string;
  preis: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  unternehmen: string;
  land: string;
  strasse: string;
  plz: string;
  stadt: string;
  nachricht: string;
  agb: boolean;
}

interface ContactModalContextValue {
  isOpen: boolean;
  initialData: Partial<ModalFormData>;
  openModal: (config?: { initialData?: Partial<ModalFormData> }) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<Partial<ModalFormData>>({});

  const openModal = useCallback((config?: { initialData?: Partial<ModalFormData> }) => {
    setInitialData(config?.initialData ?? {});
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, initialData, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
```

- [ ] **Step 2: Commit**

```bash
git add context/ContactModalContext.tsx
git commit -m "feat: add ContactModalContext with open/close state and pre-fill support"
```

---

### Task 2: Create ContactFunnelModal

**Files:**
- Create: `components/ContactFunnelModal.tsx`

This component reads `isOpen`, `initialData`, and `closeModal` from the context. It re-initialises form state each time the modal opens via a `useEffect`.

- [ ] **Step 1: Create the modal component**

```tsx
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

const LAENDER = [
  "Deutschland","Österreich","Schweiz","Belgien","Dänemark","Frankreich",
  "Italien","Luxemburg","Niederlande","Polen","Tschechien","Ungarn","Sonstige",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = ((step - 1) / (total - 1)) * 100;
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
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
    <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(18px, 3vw, 22px)", marginBottom: "24px", fontWeight: 700 }}>
      {children}
    </h2>
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

function SelectField({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "'Inter', sans-serif", marginBottom: "6px" }}>
        {label}
      </label>
      <select
        value={value} onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "12px 16px", color: "#fff", fontSize: "15px", fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box", cursor: "pointer", appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: "40px" }}
      >
        {options.map((opt) => <option key={opt} value={opt} style={{ background: "#1a1a1a", color: "#fff" }}>{opt}</option>)}
      </select>
    </div>
  );
}

function NavButtons({ onBack, onNext, nextLabel = "Weiter", nextDisabled = false, loading = false }: {
  onBack?: () => void; onNext?: () => void; nextLabel?: string; nextDisabled?: boolean; loading?: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
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

  // Reset form state each time modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setData({ ...INITIAL, ...initialData });
      setError("");
    }
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
      setStep(5);
    } catch {
      setError("Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  // ── Steps ──────────────────────────────────────────────────────────────────

  const step1Content = (
    <>
      <ProgressBar step={1} total={4} />
      <StepTitle>Um welche Art Fahrzeug geht es?</StepTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {FAHRZEUGTYPEN.map((typ) => {
          const selected = data.fahrzeugtyp === typ.id;
          return (
            <button key={typ.id} type="button" onClick={() => set("fahrzeugtyp")(typ.id)}
              style={{ position: "relative", border: selected ? "2px solid #E15C55" : "2px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3", padding: 0, background: "#1a1a1a" }}>
              <Image src={typ.image} alt={typ.label} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 50vw, 200px" />
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
    </>
  );

  const step2Content = (
    <>
      <ProgressBar step={2} total={4} />
      <StepTitle>Fahrzeug-/Objektdaten</StepTitle>
      <InputField label="Marke / Leasingobjekt" value={data.marke} onChange={set("marke")} placeholder="z.B. BMW, Mercedes, Fendt…" required />
      <InputField label="Modell" value={data.modell} onChange={set("modell")} placeholder="z.B. 3er, C-Klasse, 724…" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField label="Baujahr" value={data.baujahr} onChange={set("baujahr")} placeholder="z.B. 2020" />
        <InputField label="Kilometerstand / Betriebsstunden" value={data.kilometerstand} onChange={set("kilometerstand")} placeholder="z.B. 45.000 km" />
      </div>
      <InputField label="Preis inkl. MwSt. (€)" value={data.preis} onChange={set("preis")} placeholder="z.B. 35.000" required />
      <NavButtons onBack={() => setStep(1)} onNext={() => setStep(3)} nextDisabled={!data.marke || !data.preis} />
    </>
  );

  const step3Content = (
    <>
      <ProgressBar step={3} total={4} />
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
      <NavButtons onBack={() => setStep(2)} onNext={() => setStep(4)} nextDisabled={!data.vorname || !data.nachname || !data.email || !data.telefon} />
    </>
  );

  const step4Content = (
    <>
      <ProgressBar step={4} total={4} />
      <StepTitle>Unternehmensdaten</StepTitle>
      <InputField label="Unternehmen / Firma" value={data.unternehmen} onChange={set("unternehmen")} placeholder="Muster GmbH" required />
      <SelectField label="Land" value={data.land} onChange={set("land")} options={LAENDER} />
      <InputField label="Straße + Hausnummer" value={data.strasse} onChange={set("strasse")} placeholder="Musterstraße 1" />
      <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "12px" }}>
        <InputField label="Postleitzahl" value={data.plz} onChange={set("plz")} placeholder="10115" />
        <InputField label="Stadt" value={data.stadt} onChange={set("stadt")} placeholder="Berlin" />
      </div>
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
      <NavButtons onBack={() => setStep(3)} onNext={handleSubmit} nextLabel="Anfrage absenden" nextDisabled={!data.unternehmen || !data.agb} loading={loading} />
    </>
  );

  const step5Content = (
    <div style={{ textAlign: "center", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(72,199,116,0.12)", border: "2px solid rgba(72,199,116,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none"><path d="M3 14L13 24L33 3" stroke="#48C774" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <Image src="/images/LogoFinalFile-01-1024x305.png" alt="Master Leasing" width={180} height={54} style={{ height: "48px", width: "auto", objectFit: "contain" }} />
      <div>
        <h2 style={{ color: "#fff", fontFamily: "'Quantico', sans-serif", fontSize: "clamp(22px, 3vw, 28px)", marginBottom: "12px" }}>Vielen Dank!</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: 1.7, maxWidth: "420px" }}>
          Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.
        </p>
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
        <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", width: "100%", maxWidth: "580px", maxHeight: "90vh", overflowY: "auto", padding: "36px", position: "relative" }}>
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
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ContactFunnelModal.tsx
git commit -m "feat: add ContactFunnelModal with 4-step form and modal overlay"
```

---

### Task 3: Update layout.tsx

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add imports and wrap body**

In `app/layout.tsx`, add two imports after the existing imports:

```tsx
import { ContactModalProvider } from "@/context/ContactModalContext";
import ContactFunnelModal from "@/components/ContactFunnelModal";
```

Then replace the `<body>` block (currently lines 138–152):

```tsx
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W93TZT3D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ContactModalProvider>
          <ScrollRevealInit />
          {children}
          <CookieBanner />
          <ContactFunnelModal />
        </ContactModalProvider>
      </body>
```

- [ ] **Step 2: Verify dev server compiles without errors**

Run: `export PATH="/Users/patrick/.ScreamingFrogSEOSpider/node/5.4/node/bin:$PATH" && npm run dev`

Expected: no TypeScript or compilation errors in the terminal.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: mount ContactModalProvider and ContactFunnelModal in root layout"
```

---

### Task 4: Update Hero.tsx

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Add useContactModal import**

At the top of `components/Hero.tsx`, after the existing imports, add:

```tsx
import { useContactModal } from "@/context/ContactModalContext";
```

- [ ] **Step 2: Call the hook inside the Hero component**

Inside the `Hero` function body (after the `useRef` and `useEffect` calls), add:

```tsx
  const { openModal } = useContactModal();
```

- [ ] **Step 3: Replace the CTA anchor**

Find (around line 217):
```tsx
              <a href="/kontakt" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Jetzt Leasing starten
              </a>
```

Replace with:
```tsx
              <button type="button" onClick={() => openModal()} className="btn-primary" style={{ border: "none", cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Jetzt Leasing starten
              </button>
```

- [ ] **Step 4: Open browser at http://localhost:PORT, click "Jetzt Leasing starten"**

Expected: modal opens with step 1 (Fahrzeugtyp selection). Click outside or press Escape — modal closes.

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: Hero CTA opens contact funnel modal instead of navigating to /kontakt"
```

---

### Task 5: Update Header.tsx

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Add useContactModal import**

At the top of `components/Header.tsx`, after existing imports:

```tsx
import { useContactModal } from "@/context/ContactModalContext";
```

- [ ] **Step 2: Call the hook inside the Header component**

Inside the `Header` function body (after the existing `useState`/`useEffect` calls):

```tsx
  const { openModal } = useContactModal();
```

- [ ] **Step 3: Replace the desktop nav CTA anchor**

Find (around line 86):
```tsx
          <a
            href="/kontakt"
            className="btn-primary"
            style={{ fontSize: "14px", padding: "12px 24px" }}
          >
            Leasinganfrage stellen
          </a>
```

Replace with:
```tsx
          <button
            type="button"
            onClick={() => openModal()}
            className="btn-primary"
            style={{ fontSize: "14px", padding: "12px 24px", border: "none", cursor: "pointer" }}
          >
            Leasinganfrage stellen
          </button>
```

- [ ] **Step 4: Replace the mobile menu CTA anchor**

Find (around line 158):
```tsx
          <a
            href="/kontakt"
            className="btn-primary"
            style={{ marginTop: "20px", display: "inline-flex" }}
          >
            Leasinganfrage stellen
          </a>
```

Replace with:
```tsx
          <button
            type="button"
            onClick={() => { setMobileOpen(false); openModal(); }}
            className="btn-primary"
            style={{ marginTop: "20px", display: "inline-flex", border: "none", cursor: "pointer" }}
          >
            Leasinganfrage stellen
          </button>
```

Note: `setMobileOpen(false)` closes the mobile menu before opening the modal.

- [ ] **Step 5: Verify**

Click "Leasinganfrage stellen" in the desktop nav → modal opens. On mobile, open the hamburger menu → click the button → menu closes and modal opens.

- [ ] **Step 6: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: Header CTA buttons open contact funnel modal"
```

---

### Task 6: Update CTABanner.tsx

**Files:**
- Modify: `components/CTABanner.tsx`

- [ ] **Step 1: Replace QuickContactModal import with useContactModal**

Remove:
```tsx
import QuickContactModal from "./QuickContactModal";
```

Add:
```tsx
import { useContactModal } from "@/context/ContactModalContext";
```

- [ ] **Step 2: Call the hook and replace the trigger**

After `const checkItems = [...]`, the component is currently a default export with no hooks. Since we need `useContactModal`, we need to add it inside the function body.

Find the function signature:
```tsx
export default function CTABanner() {
```

Add the hook call as the first line of the function:
```tsx
export default function CTABanner() {
  const { openModal } = useContactModal();
```

Then find (around line 85):
```tsx
                <QuickContactModal label="Kontakt aufnehmen" />
```

Replace with:
```tsx
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "none", cursor: "pointer" }}
                >
                  <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                  </svg>
                  Kontakt aufnehmen
                </button>
```

- [ ] **Step 3: Verify**

Scroll to the CTABanner section → click "Kontakt aufnehmen" → modal opens at step 1.

- [ ] **Step 4: Commit**

```bash
git add components/CTABanner.tsx
git commit -m "feat: CTABanner uses contact funnel modal instead of QuickContactModal"
```

---

### Task 7: Update VehicleInquiryButton.tsx

**Files:**
- Modify: `components/VehicleInquiryButton.tsx`

- [ ] **Step 1: Rewrite the file**

Replace the entire contents of `components/VehicleInquiryButton.tsx` with:

```tsx
"use client";
import { useContactModal } from "@/context/ContactModalContext";

interface Props {
  vehicleTitle: string;
  vehicleImg: string;
  vehicleTyp?: string;
}

export default function VehicleInquiryButton({ vehicleTitle, vehicleImg: _vehicleImg, vehicleTyp }: Props) {
  const { openModal } = useContactModal();

  const handleClick = () => {
    openModal({
      initialData: {
        fahrzeugtyp: vehicleTyp ?? "pkw",
        marke: vehicleTitle.split(" ")[0],
        modell: vehicleTitle,
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn-primary"
      style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", border: "none" }}
    >
      <svg width="14" height="14" viewBox="0 0 256 512" fill="currentColor">
        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
      </svg>
      Jetzt anfragen
    </button>
  );
}
```

Note: `vehicleImg` is prefixed with `_vehicleImg` to suppress the unused-variable warning (the vehicle photo header was removed per spec).

- [ ] **Step 2: Verify**

Navigate to `/fahrzeuge` → click "Jetzt anfragen" on a vehicle card → modal opens with Fahrzeugtyp pre-selected and Marke/Modell pre-filled in step 2.

- [ ] **Step 3: Commit**

```bash
git add components/VehicleInquiryButton.tsx
git commit -m "feat: VehicleInquiryButton uses global modal with pre-filled vehicle data"
```

---

### Task 8: Delete QuickContactModal and final verification

**Files:**
- Delete: `components/QuickContactModal.tsx`

- [ ] **Step 1: Delete the file**

```bash
rm "components/QuickContactModal.tsx"
```

- [ ] **Step 2: Verify no remaining imports**

```bash
grep -r "QuickContactModal" . --include="*.tsx" --include="*.ts"
```

Expected: no output (zero matches).

- [ ] **Step 3: Run the dev build to confirm no errors**

```bash
export PATH="/Users/patrick/.ScreamingFrogSEOSpider/node/5.4/node/bin:$PATH" && npm run build 2>&1 | tail -30
```

Expected: build completes successfully with no TypeScript errors.

- [ ] **Step 4: Manual smoke test**

Test each trigger point:
1. Hero "Jetzt Leasing starten" → modal opens, step 1
2. Nav "Leasinganfrage stellen" (desktop) → modal opens, step 1
3. Mobile hamburger → "Leasinganfrage stellen" → menu closes, modal opens
4. CTABanner "Kontakt aufnehmen" → modal opens, step 1
5. Fahrzeuge page "Jetzt anfragen" → modal opens, step 1 pre-selected, step 2 pre-filled
6. Walk through all 4 steps → submit → success screen → close
7. Press Escape → modal closes
8. Click outside modal card → modal closes

- [ ] **Step 5: Commit and deploy**

```bash
git add -A
git commit -m "chore: remove QuickContactModal (replaced by ContactFunnelModal)"

export PATH="/Users/patrick/.ScreamingFrogSEOSpider/node/5.4/node/bin:$PATH" && vercel --token "$VERCEL_TOKEN" --prod --yes
```

Expected: deployment completes, aliased to `master-leasing.vercel.app`.

---

## Self-Review

**Spec coverage:**
- ✅ All CTA buttons trigger the modal (Hero, Header desktop+mobile, CTABanner, VehicleInquiryButton)
- ✅ 4-step funnel with progress bar (Steps 1–4 + success)
- ✅ Centered modal overlay with blur backdrop
- ✅ Close via ✕, Escape, click-outside
- ✅ VehicleInquiryButton pre-fills fahrzeugtyp + marke + modell
- ✅ `POST /api/kontakt` unchanged
- ✅ QuickContactModal deleted
- ✅ `/kontakt` page untouched

**Placeholder scan:** No TBDs, all code complete.

**Type consistency:**
- `ModalFormData` defined in `ContactModalContext.tsx`, imported by `ContactFunnelModal.tsx` ✅
- `openModal(config?: { initialData?: Partial<ModalFormData> })` consistent across all call sites ✅
- `useContactModal()` returns `{ isOpen, initialData, openModal, closeModal }` — all used correctly ✅
