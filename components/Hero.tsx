"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Network from "@/components/Network";
export default function Hero() {
  const r = useReducedMotion();
  const fade = (delay: number) => ({ initial: r ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: .85, ease: [0.22,1,0.36,1] as const, delay } });
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" style={{ maskImage: "radial-gradient(ellipse at 60% 10%, #000 20%, transparent 70%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-20rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]" style={{ background: "radial-gradient(closest-side, #3B82F6, #8B5CF6 50%, transparent)" }} />
      <div className="relative mx-auto grid max-w-wide items-center gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.3fr_1fr] md:px-10 md:pb-32 md:pt-28">
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5"><span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulseDot" /><span className="font-sans text-xs text-snow/70">Beyondexa LLC &middot; Global operating group</span></motion.div>
          <motion.h1 {...fade(0.08)} className="mt-7 max-w-3xl font-display text-hero font-extrabold">Commerce, taken <span className="text-grad">further</span>.</motion.h1>
          <motion.p {...fade(0.16)} className="mt-7 max-w-lg font-sans text-lg leading-relaxed text-snow/65 md:text-xl">Beyondexa builds, acquires, and scales consumer brands and commerce ventures — with the systems to take them beyond their first market.</motion.p>
          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-grad rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-semibold">Start a conversation</Link>
            <Link href="/portfolio" className="rounded-full border border-white/20 px-7 py-3.5 font-sans text-[0.95rem] font-medium text-white transition hover:bg-white/[0.06]">View portfolio</Link>
          </motion.div>
          <motion.div {...fade(0.34)} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs uppercase tracking-[0.14em] text-snow/45"><span>Build</span><span className="text-cyan">·</span><span>Acquire</span><span className="text-cyan">·</span><span>Operate</span><span className="text-cyan">·</span><span>Scale</span></motion.div>
        </div>
        <div className="hidden justify-self-end md:block"><Network className="w-[24rem]" /></div>
      </div>
    </section>
  );
}
