import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
export const metadata: Metadata = { title: "Insights", description: "Perspectives from Beyondexa on building, operating, and scaling brands across markets." };
const posts = [
  { tag: "Perspective", date: "November 2026", title: "Why the second market is harder than the first", body: "Localization, logistics, and trust don't transfer automatically. The brands that make it plan for the second market before the first one is finished.", read: "5 min" },
  { tag: "Operations", date: "October 2026", title: "The operating metrics we review every Monday", body: "Contribution margin by channel, fulfilment time, return rate, repeat rate, and cash conversion. Five numbers that show health before the P&L does.", read: "4 min" },
  { tag: "Acquisition", date: "September 2026", title: "What makes a brand worth acquiring", body: "Proven demand, fixable operations, a product people reorder, and a founder who wants to see it scale further than they can take it alone.", read: "6 min" },
  { tag: "Supply", date: "August 2026", title: "Resilient sourcing isn't about one supplier", body: "How we qualify a second source for every critical product before we need one.", read: "4 min" },
  { tag: "Growth", date: "July 2026", title: "Paid media is a thermometer, not a thermostat", body: "Advertising reveals product-market fit; it doesn't create it. What we look for before we scale spend.", read: "5 min" },
  { tag: "Expansion", date: "June 2026", title: "Choosing the next market", body: "Demand signals, logistics cost, regulatory load, and payment habits — our scorecard for market entry.", read: "6 min" },
];
export default function InsightsPage() {
  return (<>
    <PageHeader eyebrow="Insights" title={<>How we <span className="text-grad">think</span>.</>} intro="Perspectives from operating brands across markets — what we've learned, and what we're still learning." />
    <section className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((p, i) => (
      <Reveal key={p.title} delay={i * .05}><article className="card flex h-full flex-col rounded-4xl p-8"><div className="flex items-center justify-between"><span className="eyebrow">{p.tag}</span><span className="font-sans text-xs text-ink-soft">{p.read}</span></div><h2 className="mt-4 font-display text-display-md font-bold text-ink">{p.title}</h2><p className="mt-3 flex-1 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{p.body}</p><p className="mt-6 font-sans text-xs text-ink-soft">{p.date}</p></article></Reveal>))}</div></section>
  </>);
}
