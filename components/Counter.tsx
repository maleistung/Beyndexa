"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
export default function Counter({ to, suffix = "", prefix = "", duration = 1.6 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true, margin: "-40px" }); const r = useReducedMotion();
  const [val, setVal] = useState(r ? to : 0);
  useEffect(() => { if (!inView || r) return; let raf = 0; const s = performance.now();
    const tick = (t: number) => { const p = Math.min(1, (t - s) / (duration * 1000)); setVal(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf); }, [inView, to, duration, r]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}
