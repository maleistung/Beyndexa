import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Network from "@/components/Network";
export const metadata: Metadata = { title: "About", description: "Beyondexa LLC is a global operating group that builds, acquires, and scales consumer brands and commerce ventures from Sheridan, Wyoming." };
const pillars = [
  { label: "Who we are", body: "A global operating group. We build, acquire, and run consumer brands and commerce ventures — as owners, hands-on, in every market we enter." },
  { label: "Why Beyondexa", body: "Most brands never make it past their first market. We built the company to take them beyond it — and \"exa\" is the scale we design for." },
  { label: "What we believe", body: "A brand is only as strong as the systems behind it. Operations, supply, and data are what let good ideas travel." },
];
const timeline = [
  { year: "2023", title: "Founded", body: "Beyondexa LLC is registered in Sheridan, Wyoming, with a mandate to build and operate commerce ventures internationally." },
  { year: "2024", title: "First ventures", body: "Our first consumer brands launch, with sourcing, fulfilment, and customer care run in-house." },
  { year: "2025", title: "First acquisition and second market", body: "The group adds its first acquired brand and takes its first venture into a second region." },
  { year: "Today", title: "Going beyond", body: "A growing portfolio across 20+ markets, operated to one standard." },
];
const leadership = [
  { role: "Management", body: "An operating team with backgrounds in consumer brands, international e-commerce, and cross-border supply chains." },
  { role: "Operations", body: "Dedicated leads for sourcing, fulfilment, and customer care in each region we operate." },
  { role: "Expansion", body: "Specialists in localization, compliance, and market entry who take each brand into its next market." },
];
export default function AboutPage() {
  return (<>
    <PageHeader dark eyebrow="About" title={<>Built to go <span className="text-grad">beyond</span>.</>} intro="Beyondexa is a global operating group that builds, acquires, and scales consumer brands and commerce ventures — with the systems to take them further." />
    <section className="mx-auto grid max-w-wide gap-5 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">{pillars.map((p, i) => <Reveal key={p.label} delay={i * .07}><div className="card h-full rounded-4xl p-8"><p className="eyebrow">{p.label}</p><p className="mt-4 font-display text-display-md font-semibold leading-snug text-ink">{p.body}</p></div></Reveal>)}</section>
    <section className="border-y border-line bg-snow"><div className="mx-auto grid max-w-wide items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-28">
      <Reveal><p className="eyebrow">Our story</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">From one market to many.</h2>
        <div className="mt-10 space-y-8 border-l border-line pl-8">{timeline.map((t) => (<div key={t.year} className="relative"><span className="bg-grad absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full ring-2 ring-snow" /><p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-azure">{t.year}</p><h3 className="mt-1 font-display text-[1.3rem] font-bold text-ink">{t.title}</h3><p className="mt-1.5 max-w-lg font-sans text-[0.95rem] leading-relaxed text-ink-mute">{t.body}</p></div>))}</div></Reveal>
      <Reveal delay={.1} className="hidden justify-self-center md:block"><div className="rounded-4xl bg-night p-8"><Network className="w-80" /></div></Reveal>
    </div></section>
    <section className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28"><Reveal className="max-w-2xl"><p className="eyebrow">Leadership</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">The team behind the group.</h2></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">{leadership.map((l, i) => <Reveal key={l.role} delay={i * .07}><div className="card h-full rounded-4xl p-8"><div className="bg-grad h-1 w-10 rounded-full" /><h3 className="mt-6 font-display text-display-md font-bold text-ink">{l.role}</h3><p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{l.body}</p></div></Reveal>)}</div></section>
    <section className="border-t border-line bg-snow"><div className="mx-auto max-w-shell px-6 py-20 text-center md:py-28"><Reveal><h2 className="font-display text-display-lg font-bold text-ink">Want to work with us?</h2><p className="mx-auto mt-4 max-w-md font-sans text-lg text-ink-mute">Partners, suppliers, founders, and talent — we&rsquo;d like to hear from you.</p><Link href="/contact" className="btn-dark mt-8 inline-block rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-medium">Get in touch</Link></Reveal></div></section>
  </>);
}
