"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Lightning, GasCan, Palette, Wrench } from "@phosphor-icons/react";
import { useContactModal } from "@/context/ContactModalContext";
import type { VehicleListItem } from "@/lib/sanity";

// Vehicles werden über Sanity gepflegt — keine hardcoded Daten mehr.
// Pflege via Sanity-Studio: https://master-leasing.com/studio/

// ─── Filter config ─────────────────────────────────────────────────────────────────────────────

const TYPEN = [
  { id: "alle", label: "Fahrzeugtyp – Alle" },
  { id: "pkw", label: "PKW / Limousine" },
  { id: "kombi", label: "Kombi / Variant" },
  { id: "suv", label: "SUV / Crossover" },
  { id: "nutzfahrzeug", label: "Transporter / Kastenwagen" },
  { id: "lkw", label: "LKW / Schwertransport" },
  { id: "landwirtschaft", label: "Landmaschinen" },
  { id: "geraete", label: "Geräte & Zubehör" },
  { id: "anhaenger", label: "Anhänger" },
];

const MOTOREN = [
  { id: "alle", label: "Motorart – Alle" },
  { id: "diesel", label: "Diesel" },
  { id: "benzin", label: "Benzin" },
  { id: "elektro", label: "Elektro (BEV)" },
  { id: "hybrid", label: "Plug-in Hybrid (PHEV)" },
  { id: "mildhybrid", label: "Mild-Hybrid (MHEV)" },
  { id: "erdgas", label: "Erdgas (CNG)" },
];

const FARBEN = [
  { id: "alle", label: "Farbe – Alle" },
  { id: "Weiß", label: "Weiß" },
  { id: "Schwarz", label: "Schwarz" },
  { id: "Grau", label: "Grau" },
  { id: "Silber", label: "Silber / Metallic" },
  { id: "Blau", label: "Blau" },
  { id: "Rot", label: "Rot" },
  { id: "Grün", label: "Grün" },
  { id: "Beige", label: "Beige / Braun" },
  { id: "Orange", label: "Orange / Gelb" },
];

const LEISTUNG = [
  { id: "alle", label: "Leistung – Alle" },
  { id: "bis80", label: "bis 80 PS" },
  { id: "80bis120", label: "80 – 120 PS" },
  { id: "120bis160", label: "120 – 160 PS" },
  { id: "160bis220", label: "160 – 220 PS" },
  { id: "ueber220", label: "über 220 PS" },
];

// ─── Dropdown select ──────────────────────────────────────────────────────────────────────────────

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { id: string; label: string }[];
}) {
  const active = value !== "alle";
  return (
    <div style={{ position: "relative", flex: "1 1 180px", minWidth: "160px" }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          appearance: "none",
          WebkitAppearance: "none",
          background: active ? "rgba(225,92,85,0.08)" : "rgba(255,255,255,0.04)",
          border: `1.5px solid ${active ? "#E15C55" : "rgba(255,255,255,0.12)"}`,
          borderRadius: "10px",
          padding: "11px 40px 11px 14px",
          color: active ? "#E15C55" : "rgba(255,255,255,0.7)",
          fontSize: "13px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          cursor: "pointer",
          outline: "none",
          transition: "border-color 0.2s, background 0.2s",
        }}
      >
        {options.map((o) => (
          <option key={o.id} value={o.id} style={{ background: "#1a1a1a", color: "#fff" }}>
            {o.label}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#E15C55" : "rgba(255,255,255,0.4)"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

// ─── Spec badge ──────────────────────────────────────────────────────────────────────────────────

function SpecBadge({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "6px",
        padding: "4px 8px",
        fontSize: "12px",
        color: "rgba(255,255,255,0.6)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {icon} {value}
    </span>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────────────────────────

export default function VehiclesSection({
  vehicles = [],
}: {
  vehicles?: VehicleListItem[];
}) {
  const [activeTyp, setActiveTyp] = useState("alle");
  const [activeMotor, setActiveMotor] = useState("alle");
  const [activeFarbe, setActiveFarbe] = useState("alle");
  const [activeLeistung, setActiveLeistung] = useState("alle");
  const { openModal } = useContactModal();

  // ── Dynamisch: nur Optionen anzeigen, die wirklich vorkommen ──
  const availableTypen = useMemo(() => {
    const found = new Set(vehicles.map((v) => v.typ));
    return TYPEN.filter((t) => t.id === "alle" || found.has(t.id));
  }, [vehicles]);

  const availableMotoren = useMemo(() => {
    const found = new Set(vehicles.map((v) => v.motor));
    return MOTOREN.filter((m) => m.id === "alle" || found.has(m.id));
  }, [vehicles]);

  const availableFarben = useMemo(() => {
    const found = new Set(vehicles.map((v) => v.farbe));
    return FARBEN.filter((f) => f.id === "alle" || found.has(f.id));
  }, [vehicles]);

  const availableLeistung = useMemo(() => {
    return LEISTUNG.filter((l) => {
      if (l.id === "alle") return true;
      return vehicles.some((v) => {
        const ps = v.leistung;
        if (l.id === "bis80") return ps < 80;
        if (l.id === "80bis120") return ps >= 80 && ps < 120;
        if (l.id === "120bis160") return ps >= 120 && ps < 160;
        if (l.id === "160bis220") return ps >= 160 && ps < 220;
        if (l.id === "ueber220") return ps >= 220;
        return false;
      });
    });
  }, [vehicles]);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (activeTyp !== "alle" && v.typ !== activeTyp) return false;
      if (activeMotor !== "alle" && v.motor !== activeMotor) return false;
      if (activeFarbe !== "alle" && v.farbe !== activeFarbe) return false;
      if (activeLeistung !== "alle") {
        const ps = v.leistung;
        if (activeLeistung === "bis80" && ps >= 80) return false;
        if (activeLeistung === "80bis120" && (ps < 80 || ps >= 120)) return false;
        if (activeLeistung === "120bis160" && (ps < 120 || ps >= 160)) return false;
        if (activeLeistung === "160bis220" && (ps < 160 || ps >= 220)) return false;
        if (activeLeistung === "ueber220" && ps < 220) return false;
      }
      return true;
    });
  }, [vehicles, activeTyp, activeMotor, activeFarbe, activeLeistung]);

  const filtersActive =
    activeTyp !== "alle" || activeMotor !== "alle" || activeFarbe !== "alle" || activeLeistung !== "alle";

  return (
    <section
      className="section-pad"
      style={{ background: "#101010", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        {/* ── Heading ── */}
        <div className="scroll-up" style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "8px" }}>
            Ihr Weg{" "}
            <span style={{ color: "#E15C55" }}>zu Ihrem Wunschfahrzeug</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Alle Fahrzeuge ohne Schufa-Prüfung leasbar. Direkte Anfrage – Zusage in 24h.
          </p>
        </div>

        {/* ── Filter bar ── */}
        <div className="scroll-up scroll-d1" style={{ marginBottom: "40px" }}>
          {/* Dropdowns row */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <FilterSelect value={activeTyp} onChange={setActiveTyp} options={availableTypen} />
            <FilterSelect value={activeMotor} onChange={setActiveMotor} options={availableMotoren} />
            <FilterSelect value={activeFarbe} onChange={setActiveFarbe} options={availableFarben} />
            <FilterSelect value={activeLeistung} onChange={setActiveLeistung} options={availableLeistung} />
            {filtersActive && (
              <button
                onClick={() => {
                  setActiveTyp("alle");
                  setActiveMotor("alle");
                  setActiveFarbe("alle");
                  setActiveLeistung("alle");
                }}
                style={{
                  background: "none",
                  border: "1.5px solid rgba(225,92,85,0.3)",
                  borderRadius: "10px",
                  color: "#E15C55",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "11px 16px",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.2s",
                }}
              >
                ✕ Zurücksetzen
              </button>
            )}
          </div>
          {/* Result count */}
          {filtersActive && (
            <p style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              marginTop: "10px",
            }}>
              {filtered.length} Fahrzeug{filtered.length !== 1 ? "e" : ""} gefunden
            </p>
          )}
        </div>

        {/* ── Vehicle grid ── */}
        {vehicles.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Inter', sans-serif",
              background: "rgba(255,255,255,0.02)",
              border: "1px dashed rgba(255,255,255,0.1)",
              borderRadius: "16px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "8px", color: "#fff", fontFamily: "'Quantico', sans-serif" }}>
              Aktuell keine Bestandsfahrzeuge gelistet
            </p>
            <p style={{ fontSize: "14px", marginBottom: "20px", maxWidth: "480px", margin: "0 auto 20px" }}>
              Sie haben freie Händlerwahl — nennen Sie uns Ihr Wunschfahrzeug und wir beschaffen es.
              Zusage innerhalb von 24 Stunden, ohne Schufa-Prüfung.
            </p>
            <button
              type="button"
              onClick={() => openModal()}
              className="btn-primary"
              style={{ border: "none", cursor: "pointer" }}
            >
              Wunschfahrzeug anfragen →
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "8px" }}>Keine Fahrzeuge gefunden</p>
            <p style={{ fontSize: "14px" }}>
              Versuchen Sie andere Filtereinstellungen oder stellen Sie eine direkte Anfrage.
            </p>
          </div>
        ) : (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
            className="vehicles-grid"
          >
            {filtered.map((v, i) => {
              const stagger =
                i % 3 === 1 ? " scroll-d1" : i % 3 === 2 ? " scroll-d2" : "";
              return (
                <a
                  key={v.id}
                  href={`/fahrzeuge/${v.slug}/`}
                  className={`vehicle-card scroll-up${stagger} vehicle-card-link`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div style={{ position: "relative", aspectRatio: "4/3", width: "100%", overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
                    {v.imageUrl ? (
                      <Image
                        src={v.imageUrl}
                        alt={v.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <div className="vehicle-card-body">
                    <h3 style={{ marginBottom: "4px", color: "#fff" }}>{v.title}</h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "12px",
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: "14px",
                      }}
                    >
                      {v.subtitel}
                    </p>
                    {/* Spec badges — nur Felder mit echten Werten anzeigen */}
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        flexWrap: "wrap",
                        marginBottom: "16px",
                      }}
                    >
                      {v.leistung > 0 && (
                        <SpecBadge
                          icon={<Lightning size={12} weight="fill" />}
                          value={`${v.leistung} PS`}
                        />
                      )}
                      {v.verbrauch && v.verbrauch !== "—" && (
                        <SpecBadge
                          icon={<GasCan size={12} weight="fill" />}
                          value={`${v.verbrauch} l/100km`}
                        />
                      )}
                      {v.farbe && v.farbe !== "—" && (
                        <SpecBadge
                          icon={<Palette size={12} weight="fill" />}
                          value={v.farbe}
                        />
                      )}
                      {v.motor && (
                        <SpecBadge
                          icon={<Wrench size={12} weight="fill" />}
                          value={v.motor.charAt(0).toUpperCase() + v.motor.slice(1)}
                        />
                      )}
                    </div>
                    {/* Subtle text link */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#E15C55",
                      fontSize: "13px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      paddingTop: "12px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      Details ansehen
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div style={{
          textAlign: "center",
          marginTop: "56px",
          padding: "32px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
        }}>
          <p style={{
            color: "#fff",
            fontFamily: "'Quantico', sans-serif",
            fontSize: "20px",
            marginBottom: "8px",
          }}>
            Ihr Wunschfahrzeug nicht dabei?
          </p>
          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "14px",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "20px",
          }}>
            Wir beschaffen jedes Fahrzeug — einfach Anfrage stellen, wir melden uns in 24h.
          </p>
          <button
            type="button"
            onClick={() => openModal()}
            className="btn-primary"
            style={{ border: "none", cursor: "pointer" }}
          >
            Individuelle Anfrage stellen →
          </button>
        </div>
      </div>

      <style>{`
        .vehicle-card-link { cursor: pointer; }
        .vehicle-card-link:hover { border-color: rgba(225,92,85,0.3) !important; transform: translateY(-2px); }
        .vehicle-card-link:hover .vehicle-card-body > div:last-child { gap: 10px !important; }
        @media (max-width: 1024px) {
          .vehicles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .vehicles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
