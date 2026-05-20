"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ target, suffix = "", duration = 1600 }: Props) {
  // SSR + initial paint zeigt direkt den Zielwert — kein "0+"-Flash mehr.
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (animatedRef.current) return;

    // Bei prefers-reduced-motion: keine Animation, einfach Endwert lassen.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animatedRef.current = true;
      return;
    }

    // Above-the-fold-Counter (Hero) sind bereits im Viewport beim Mount:
    // → keine Animation, Endwert bleibt stehen. Kein 20 → 0 → 20 Flicker.
    const rect = el.getBoundingClientRect();
    const visibleOnMount =
      rect.top < window.innerHeight && rect.bottom > 0;

    if (visibleOnMount) {
      animatedRef.current = true;
      return;
    }

    // Below-the-fold-Counter: bei Sichtbarkeit von 0 hochzählen.
    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
