import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
export const metadata: Metadata = { title: "Portfolio", description: "The brands and ventures Beyondexa builds, acquires, and operates across markets." };
const items = [
  { name: "Consumer brand", cat: "Direct-to-consumer", stage: "Operating", markets: "3 markets", body: "An own-brand consumer product line built for repeat demand, now selling in three regions." },
  { name: "Commerce venture", cat: "Marketplace retail", stage: "Operating", markets: "2 markets", body: "A multi-channel storefront operated end to end, from sourcing to customer care." },
  { name: "Acquired brand", cat: "Growth stage", stage: "Expanding", markets: "Entering new market", body: "A brand with proven demand, now backed by our operating systems and entering its second region." },
  { name: "Supply operation", cat: "Sourcing & logistics", stage: "Operating", markets: "Group-wide", body: "The shared supply backbone that serves every venture in the group." },
  { name: "In development", cat: "New venture", stage: "Building", markets: "Launch planned", body: "The next brand in the group, currently in product development." },
  { name: "In evaluation", cat: "Acquisition", stage: "Reviewing", markets: "—", body: "Opportunities under review that fit our model." },
];
export default function PortfolioPage() {
  return (<>
    <PageHeader eyebrow="Portfolio" title={<>A group built to <span className="text-grad">travel</span>.</>} intro="Every venture shares infrastructure, supply, and know-how — so each one starts further ahead, and goes further, than the last." />
    <section className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((it, i) => (
        <Reveal key={it.name} delay={i * .06}><div className="card flex h-full flex-col rounded-4xl p-8">
          <div className="flex items-center justify-between"><span className="eyebrow">{it.cat}</span><span className="rounded-full bg-snow-2 px-3 py-1 font-sans text-[0.7rem] font-semibold text-ink">{it.stage}</span></div>
          <h3 className="mt-5 font-display text-display-md font-bold text-ink">{it.name}</h3><p className="mt-1 font-sans text-xs font-medium text-azure">{it.markets}</p>
          <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{it.body}</p></div></Reveal>))}</div>
      <Reveal className="mt-16 rounded-4xl bg-night p-10 text-center text-white"><h2 className="font-display text-display-md font-bold">Own a brand that fits?</h2><p className="mx-auto mt-3 max-w-md font-sans text-[0.97rem] text-snow/65">We review consumer brands and commerce businesses with proven demand and room to grow — especially those ready for a second market.</p><Link href="/contact" className="btn-grad mt-6 inline-block rounded-full px-6 py-3 font-sans text-sm font-semibold">Talk to us about an acquisition</Link></Reveal>
    </section>
  </>);
}
