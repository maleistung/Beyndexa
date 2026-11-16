"use client";
import { useRef } from "react";
import Link from "next/link";
export default function Carousel({ items }: { items: { no: string; title: string; body: string; href: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const go = (d: number) => ref.current?.scrollBy({ left: d * 360, behavior: "smooth" });
  return (
    <div>
      <div ref={ref} className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:-mx-10 md:px-10">
        {items.map((it) => (
          <Link key={it.no} href={it.href} className="card-dark block w-[20rem] shrink-0 snap-start rounded-4xl p-8 md:w-[24rem]">
            <span className="font-display text-sm font-bold text-grad">{it.no}</span>
            <h3 className="mt-5 font-display text-display-md font-bold text-white">{it.title}</h3>
            <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-snow/60">{it.body}</p>
            <span className="mt-6 inline-block font-sans text-sm font-medium text-cyan">Learn more &rarr;</span>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={() => go(-1)} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10">&larr;</button>
        <button onClick={() => go(1)} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10">&rarr;</button>
      </div>
    </div>
  );
}
