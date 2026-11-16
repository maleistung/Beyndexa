"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const r = useReducedMotion();
  return <motion.div className={className} initial={r ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}>{children}</motion.div>;
}
