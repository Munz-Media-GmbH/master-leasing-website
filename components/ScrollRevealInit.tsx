"use client";
import { useEffect } from "react";

/**
 * Cross-browser scroll reveal via IntersectionObserver.
 * Works as a progressive enhancement alongside the CSS animation-timeline approach.
 * Adds `is-visible` class to elements once they enter the viewport.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".scroll-up, .scroll-fade, .scroll-scale"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
