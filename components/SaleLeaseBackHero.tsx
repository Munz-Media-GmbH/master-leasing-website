"use client";
import { useState } from "react";
import Image from "next/image";
import SaleLeaseBackForm from "./SaleLeaseBackForm";
import { trackEvent } from "@/app/hooks/useTracking";

const benefits = [
  "Sofortige Liquidität freisetzen",
  "Fahrzeug oder Maschine weiterhin voll nutzen",
  "Keine Schufa-Prüfung erforderlich",
  "Persönliche Beratung & schnelle Abwicklung",
];

export default function SaleLeaseBackHero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .slb-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .slb-hero-img-col {
            min-height: 300px !important;
            height: 300px !important;
            order: -1;
          }
          .slb-hero-text-col {
            padding-bottom: 60px !important;
            padding-top: 0 !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#0a0a0a",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          className="slb-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "100vh",
          }}
        >
          {/* ── Left: Text ─────────────────────────────────────────── */}
          <div
            className="slb-hero-text-col"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "clamp(90px, 10vh, 140px)",
              paddingBottom: "clamp(40px, 5vh, 80px)",
              paddingLeft: "clamp(24px, 6vw, 100px)",
              paddingRight: "clamp(24px, 5vw, 80px)",
            }}
          >
            <span className="overline">Sale &amp; Lease Back</span>

            <h1 style={{ color: "#fff", marginBottom: "20px", marginTop: "12px" }}>
              Kapital freisetzen –{" "}
              <span style={{ color: "#E15C55" }}>Fahrzeug behalten</span>
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "17px",
                lineHeight: 1.8,
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Verkaufen Sie Ihr Fahrzeug oder Ihre Maschine an uns und leasen Sie es
              direkt zurück. Sofortige Liquidität – weiterhin volle Nutzung.
            </p>

            {/* Benefit bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
              {benefits.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      minWidth: "22px",
                      borderRadius: "50%",
                      background: "#E15C55",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setOpen(true);
                  trackEvent("cta_click", undefined, { cta_type: "slb_form" });
                  if (typeof window !== "undefined") {
                    (window as Window & { dataLayer?: object[] }).dataLayer =
                      (window as Window & { dataLayer?: object[] }).dataLayer ?? [];
                    (window as Window & { dataLayer?: object[] }).dataLayer!.push({
                      event: "cta_click",
                      cta_type: "slb_form",
                      page_path: window.location.pathname,
                    });
                  }
                }}
                className="btn-primary"
                style={{ border: "none", cursor: "pointer", fontSize: "15px" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 512"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                Jetzt unverbindlich anfragen
              </button>

              {/* Trust micro-copy */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "14px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.5 33.3-6.5s4.5-25.9-6.5-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  Schnelle Bearbeitung
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 512 512" fill="#E15C55">
                    <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9z" />
                  </svg>
                  Persönlicher Ansprechpartner
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Image ────────────────────────────────────────── */}
          <div
            className="slb-hero-img-col"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/shutterstock_18982980191-scaled.jpg"
              alt="Sale und Lease Back – Fahrzeug verkaufen und direkt zurückleasen"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            {/* Left fade to blend with text column */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.5) 25%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "120px",
                background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "32px",
                background: "rgba(10,10,10,0.85)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "16px 20px",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  color: "#E15C55",
                  fontFamily: "'Quantico', sans-serif",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                Sale &amp; Lease Back
              </p>
              <p
                style={{
                  color: "#fff",
                  fontFamily: "'Quantico', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                Kapital freisetzen –<br />Fahrzeug behalten
              </p>
            </div>
          </div>
        </div>
      </section>

      {open && <SaleLeaseBackForm onClose={() => setOpen(false)} />}
    </>
  );
}
