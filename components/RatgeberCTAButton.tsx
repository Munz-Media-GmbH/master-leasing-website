"use client";
import { useState } from "react";
import SaleLeaseBackForm from "./SaleLeaseBackForm";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/app/hooks/useTracking";
import type { RatgeberTopic } from "@/lib/ratgeber";

interface Props {
  topic: RatgeberTopic;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function RatgeberCTAButton({ topic, children, className = "btn-primary", style }: Props) {
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  const ctaType = topic === "slb" ? "slb_form" : "contact_form";

  return (
    <>
      <button
        type="button"
        onClick={() => {
          trackEvent("cta_click", undefined, { cta_type: ctaType, source: "ratgeber" });
          if (typeof window !== "undefined") {
            const w = window as Window & { dataLayer?: object[] };
            w.dataLayer = w.dataLayer ?? [];
            w.dataLayer.push({ event: "cta_click", cta_type: ctaType, page_path: window.location.pathname });
          }
          if (topic === "slb") setOpen(true);
          else openModal();
        }}
        className={className}
        style={{ border: "none", cursor: "pointer", ...style }}
      >
        {children}
      </button>

      {open && <SaleLeaseBackForm onClose={() => setOpen(false)} />}
    </>
  );
}
