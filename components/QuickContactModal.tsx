"use client";
import { useState, useEffect, useCallback } from "react";

interface Props {
  label?: string;
  className?: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  padding: "10px 14px",
  color: "#fff",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    wunsch: "",
    nachricht: "",
    agb: false,
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set =
    (k: keyof typeof form) => (v: string | boolean) =>
      setForm((prev) => ({ ...prev, [k]: v }));

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleClose]);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vorname: form.vorname,
          nachname: form.nachname,
          email: form.email,
          telefon: form.telefon,
          nachricht: form.nachricht,
          fahrzeugtyp: "sonstiges",
          marke: "",
          modell: form.wunsch,
          baujahr: "",
          kilometerstand: "",
          preis: "",
          unternehmen: "",
          land: "Deutschland",
          strasse: "",
          plz: "",
          stadt: "",
        }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    } finally {
      setLoading(false);
    }
  };

  const required = form.vorname && form.nachname && form.email && form.telefon && form.agb;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "520px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "18px",
          }}
        >
          ✕
        </button>

        {done ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(72,199,116,0.12)",
                border: "2px solid rgba(72,199,116,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                <path
                  d="M2 11L10 19L26 2"
                  stroke="#48C774"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                marginBottom: "12px",
              }}
            >
              Anfrage gesendet!
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                lineHeight: 1.6,
              }}
            >
              Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.
            </p>
            <button
              onClick={handleClose}
              style={{
                marginTop: "24px",
                background: "#E15C55",
                border: "none",
                borderRadius: "10px",
                padding: "12px 28px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
              }}
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Quantico', sans-serif",
                fontSize: "22px",
                marginBottom: "8px",
              }}
            >
              Leasinganfrage stellen
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "24px",
              }}
            >
              Wir melden uns in 24 Stunden bei Ihnen
            </p>

            {/* Vorname + Nachname */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              {(
                [
                  { label: "Vorname", key: "vorname" },
                  { label: "Nachname", key: "nachname" },
                ] as const
              ).map((f) => (
                <div key={f.key}>
                  <label
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "5px",
                    }}
                  >
                    {f.label} <span style={{ color: "#E15C55" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={form[f.key]}
                    onChange={(e) => set(f.key)(e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              ))}
            </div>

            {/* E-Mail */}
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "5px",
                }}
              >
                E-Mail-Adresse <span style={{ color: "#E15C55" }}>*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Telefon */}
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "5px",
                }}
              >
                Telefon / Handy <span style={{ color: "#E15C55" }}>*</span>
              </label>
              <input
                type="tel"
                value={form.telefon}
                onChange={(e) => set("telefon")(e.target.value)}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Wunsch */}
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "5px",
                }}
              >
                Wunsch (Fahrzeug / Gerät / Sonstiges)
              </label>
              <input
                type="text"
                value={form.wunsch}
                onChange={(e) => set("wunsch")(e.target.value)}
                placeholder="z.B. BMW 3er, Gabelstapler, …"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Nachricht */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "5px",
                }}
              >
                Nachricht (optional)
              </label>
              <textarea
                value={form.nachricht}
                onChange={(e) => set("nachricht")(e.target.value)}
                rows={2}
                placeholder="Weitere Infos zu Ihrer Anfrage…"
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(225,92,85,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* AGB */}
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              <div
                onClick={() => set("agb")(!form.agb)}
                style={{
                  width: "18px",
                  height: "18px",
                  minWidth: "18px",
                  border: `2px solid ${form.agb ? "#E15C55" : "rgba(255,255,255,0.25)"}`,
                  borderRadius: "4px",
                  background: form.agb ? "#E15C55" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                {form.agb && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span
                onClick={() => set("agb")(!form.agb)}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                }}
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
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  padding: "10px 14px",
                  background: "rgba(225,92,85,0.1)",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!required || loading}
              style={{
                width: "100%",
                background: !required || loading ? "rgba(225,92,85,0.4)" : "#E15C55",
                border: "none",
                borderRadius: "10px",
                padding: "14px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: !required || loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
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
                  />{" "}
                  Wird gesendet…
                </>
              ) : (
                "Anfrage senden →"
              )}
            </button>
          </>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function QuickContactModal({ label = "Kontakt aufnehmen", className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className || "btn-primary"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          border: "none",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 256 512" fill="currentColor">
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg>
        {label}
      </button>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}
