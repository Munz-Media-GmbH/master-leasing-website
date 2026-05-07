"use client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "ml_cookie_consent";

type ConsentStatus = "accepted" | "declined";

function updateGtmConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ConsentStatus | null;
    if (saved === "accepted") {
      updateGtmConsent(true);
    } else if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    updateGtmConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    updateGtmConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        flexWrap: "wrap",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <p
        style={{
          color: "#aaa",
          fontSize: "13px",
          lineHeight: "1.6",
          margin: 0,
          flex: "1 1 300px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        Wir nutzen Cookies und Google Analytics, um unsere Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.
        Mit „Alle akzeptieren" stimmen Sie dem Einsatz zu. Mehr dazu in unserer{" "}
        <a
          href="/datenschutz"
          style={{ color: "#E15C55", textDecoration: "underline" }}
        >
          Datenschutzerklärung
        </a>
        .
      </p>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexShrink: 0,
          alignItems: "center",
        }}
      >
        <button
          onClick={handleDecline}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#aaa",
            padding: "9px 18px",
            borderRadius: "6px",
            fontSize: "13px",
            cursor: "pointer",
            fontFamily: "system-ui, -apple-system, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Nur notwendige
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: "#E15C55",
            border: "none",
            color: "#fff",
            padding: "9px 20px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "system-ui, -apple-system, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
