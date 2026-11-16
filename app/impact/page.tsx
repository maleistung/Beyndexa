import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
export const metadata: Metadata = { title: "Impact", description: "How Beyondexa approaches responsibility — suppliers, products, people, and the places we operate." };
const commitments = [
  { title: "Responsible sourcing", body: "We qualify suppliers on quality, labor standards, and compliance before the first order — and audit as we scale." },
  { title: "Products that last", body: "We design for repeat use, not disposability. Durability and honest claims are part of every product brief." },
  { title: "Fair work", body: "Clear roles, fair pay, and real ownership for the people who run our ventures, wherever they are." },
  { title: "Data and privacy", body: "We collect only what we need to serve customers, protect it, and never sell it." },
  { title: "Local markets", body: "When we enter a market we hire, partner, and pay taxes locally — we build presence, not just reach." },
  { title: "Transparent reporting", body: "We publish what we measure. This page will carry our annual impact figures as the group grows." },
];
export default function ImpactPage() {
  return (<>
    <PageHeader dark eyebrow="Impact" title={<>Growth that <span className="text-grad">holds up</span>.</>} intro="Taking brands beyond their first market comes with responsibility — to suppliers, customers, employees, and the places we operate." />
    <section className="border-b border-line bg-snow"><div className="mx-auto grid max-w-wide grid-cols-2 divide-x divide-line md:grid-cols-4">
      {[{ to: 100, s: "%", l: "Suppliers qualified before first order" }, { to: 20, s: "+", l: "Markets with local partners" }, { to: 0, s: "", l: "Customer data sold — ever" }, { to: 2, s: "×", l: "Sourcing redundancy on critical SKUs" }].map((m, i) => (
        <Reveal key={m.l} delay={i * .06} className="px-6 py-10 md:py-12"><p className="font-display text-display-lg font-extrabold text-ink"><Counter to={m.to} suffix={m.s} /></p><p className="mt-2 font-sans text-sm text-ink-mute">{m.l}</p></Reveal>))}
    </div></section>
    <section className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28"><Reveal className="max-w-2xl"><p className="eyebrow">Our commitments</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">Six things we hold ourselves to.</h2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{commitments.map((c, i) => <Reveal key={c.title} delay={i * .06}><div className="card h-full rounded-4xl p-8"><div className="bg-grad h-1 w-10 rounded-full" /><h3 className="mt-6 font-display text-display-md font-bold text-ink">{c.title}</h3><p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{c.body}</p></div></Reveal>)}</div></section>
  </>);
}
