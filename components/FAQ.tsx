"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => { const o = open === i; return (
        <div key={it.q}>
          <button onClick={() => setOpen(o ? null : i)} aria-expanded={o} className="flex w-full items-center justify-between gap-6 py-6 text-left">
            <span className="font-display text-[1.15rem] font-semibold text-ink md:text-[1.3rem]">{it.q}</span>
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition ${o ? "rotate-45 border-azure text-azure" : ""}`}>+</span>
          </button>
          <AnimatePresence initial={false}>{o && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }} className="overflow-hidden"><p className="max-w-2xl pb-6 font-sans text-[0.97rem] leading-relaxed text-ink-mute">{it.a}</p></motion.div>)}</AnimatePresence>
        </div>); })}
    </div>
  );
}
