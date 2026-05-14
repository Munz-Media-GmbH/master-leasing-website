"use client";
import { useState } from "react";
import SaleLeaseBackForm from "./SaleLeaseBackForm";

export default function SaleLeaseBackCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "100px",
          paddingBottom: "100px",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "680px" }}>
          <span className="overline">Unverbindliche Anfrage</span>
          <h2 style={{ color: "#fff", marginBottom: "20px" }}>
            Jetzt Situation prüfen –{" "}
            <span style={{ color: "#E15C55" }}>in wenigen Minuten</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.75, marginBottom: "36px" }}>
            Beantworten Sie wenige Fragen zu Ihrem Fahrzeug oder Ihrer Maschine.
            Wir prüfen unverbindlich, ob Sale &amp; Lease Back für Sie sinnvoll ist – und melden uns zeitnah.
          </p>

          <button
            type="button"
            onClick={() => {
              setOpen(true);
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
            style={{ border: "none", cursor: "pointer", fontSize: "16px", padding: "16px 36px" }}
          >
            Sale &amp; Lease Back Anfrage starten →
          </button>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.45)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
              <svg width="13" height="13" viewBox="0 0 512 512" fill="#E15C55">
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.5 33.3-6.5s4.5-25.9-6.5-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              Schnelle Bearbeitung
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.45)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
              <svg width="13" height="13" viewBox="0 0 512 512" fill="#E15C55">
                <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9z" />
              </svg>
              Persönlicher Ansprechpartner
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.45)", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
              <svg width="13" height="13" viewBox="0 0 576 512" fill="#E15C55">
                <path d="M290.7 57.4L57.4 176l67 33.5C194.3 201.7 244.3 192 288 192s93.7 9.7 163.6 17.5L518.6 176 290.7 57.4zM288 224c-45.1 0-88.5 9.1-130 17.3L128 320c0 53 93.1 96 160 96s160-43 160-96l-30-78.7C376.5 233.1 333.1 224 288 224zM192 352a16 16 0 1 1 0-32 16 16 0 0 1 0 32zm96 0a16 16 0 1 1 0-32 16 16 0 0 1 0 32zm96 0a16 16 0 1 1 0-32 16 16 0 0 1 0 32z" />
              </svg>
              Keine Schufa-Prüfung
            </span>
          </div>
        </div>
      </section>

      {open && <SaleLeaseBackForm onClose={() => setOpen(false)} />}
    </>
  );
}
