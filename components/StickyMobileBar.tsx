"use client";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/app/hooks/useTracking";

/**
 * Mobile-Bottom-Bar: 2 immer sichtbare CTAs auf <768px.
 * Links: Telefon (tel: + GTM-Track). Rechts: Anfrage-Modal.
 * Desktop blendet die Bar via CSS-Media-Query aus (siehe globals.css).
 */
export default function StickyMobileBar() {
  const { openModal } = useContactModal();

  return (
    <div
      className="sticky-mobile-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: "flex",
        background: "rgba(10,10,10,0.96)",
        backdropFilter: "blur(14px)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        padding: "10px 12px",
        gap: "10px",
        boxShadow: "0 -8px 24px rgba(0,0,0,0.4)",
      }}
    >
      <a
        href="tel:+4903331297792"
        onClick={() =>
          trackEvent("cta_click", undefined, { cta_type: "mobile_bar_call" })
        }
        style={{
          flex: "0 0 auto",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "14px 16px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "10px",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
        }}
        aria-label="Anrufen 03331 29 77 92"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 512 512"
          fill="#E15C55"
          aria-hidden="true"
        >
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 248.5 201.5 450 450 450 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L312.1 411c-67.6-30.3-122.4-85.1-152.7-152.7l37.3-37.6c13.7-11.1 18.4-30 11.6-46.3l-40-96z" />
        </svg>
        Anrufen
      </a>
      <button
        type="button"
        onClick={() => {
          trackEvent("cta_click", undefined, { cta_type: "mobile_bar_modal" });
          openModal();
        }}
        style={{
          flex: "1 1 auto",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "14px 20px",
          background: "#E15C55",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Anfrage stellen
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
