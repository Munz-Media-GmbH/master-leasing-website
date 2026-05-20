"use client";

import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    mmTrack?: (type: string, data?: Record<string, string>) => void;
  }
}

type EventType =
  | "page_view"
  | "form_start"
  | "form_step_completed"
  | "form_submit"
  | "cta_click"
  | "modal_open"
  | "direktkontakt";

function mm(type: string, data?: Record<string, string | unknown>) {
  if (typeof window !== "undefined" && window.mmTrack) {
    window.mmTrack(type, data as Record<string, string> | undefined);
  }
}

/**
 * Haupt-Tracking-Funktion. Sendet an mm.js (zentrale Münz-Media-DB / Kundenportal).
 * Script-Tag wird in app/layout.tsx geladen — der Hook verwendet window.mmTrack
 * sobald es bereit ist (defer load).
 */
export function trackEvent(
  eventType: EventType,
  pagePath?: string,
  metadata?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  mm(eventType, {
    page_path: pagePath || window.location.pathname,
    ...metadata,
  });
}

/** Shorthand für Client-Komponenten */
export function track(
  eventType: EventType,
  metadata?: Record<string, string>,
) {
  trackEvent(eventType, undefined, metadata);
}

export function usePageView(skip?: boolean) {
  const tracked = useRef(false);
  useEffect(() => {
    if (skip) return;
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("page_view");
    }
  }, [skip]);
}

export function useTrackFormStart() {
  const tracked = useRef(false);
  return useCallback((pagePath?: string) => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("form_start", pagePath);
    }
  }, []);
}

export function useTrackFormSubmit() {
  return useCallback(
    (pagePath?: string, metadata?: Record<string, unknown>) => {
      trackEvent("form_submit", pagePath, metadata);
    },
    [],
  );
}
