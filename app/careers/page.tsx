import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
export const metadata: Metadata = { title: "Careers", description: "Join Beyondexa — a global operating group building and scaling consumer brands." };
const values = [
  { title: "Ownership", body: "You run things. Clear responsibility, real authority, visible results." },
  { title: "Global by default", body: "Every role touches more than one market. You'll learn how commerce works across borders." },
  { title: "Pace with rigor", body: "We move fast and measure what we do — speed with discipline, not chaos." },
  { title: "Compounding", body: "As the group grows into new markets, so do the people who build it." },
];
const roles = [
  { title: "International Operations Manager", type: "Full-time · Remote", body: "Own storefront, fulfilment, and customer-care operations across regions." },
  { title: "Market Expansion Lead", type: "Full-time · Remote", body: "Run market entry — localization, compliance, logistics, and launch — for the next region." },
  { title: "Performance Marketing Lead", type: "Full-time · Remote", body: "Run paid acquisition and data across the portfolio and set the pace of growth." },
  { title: "Sourcing & Supply Associate", type: "Full-time · Remote", body: "Manage supplier relationships, quality control, and cross-border logistics." },
];
export default function CareersPage() {
  return (<>
    <PageHeader dark eyebrow="Careers" title={<>Build what goes <span className="text-grad">beyond</span>.</>} intro="We're a hands-on team running real businesses in real markets. If you like ownership, pace, and the world beyond one border, you'll fit in." />
    <section className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28"><Reveal className="max-w-2xl"><p className="eyebrow">How we work</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">What it&rsquo;s like here.</h2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map((v, i) => <Reveal key={v.title} delay={i * .06}><div className="card h-full rounded-4xl p-7"><div className="bg-grad h-1 w-10 rounded-full" /><h3 className="mt-5 font-display text-[1.3rem] font-bold text-ink">{v.title}</h3><p className="mt-2 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{v.body}</p></div></Reveal>)}</div></section>
    <section className="border-y border-line bg-snow"><div className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28"><Reveal className="max-w-2xl"><p className="eyebrow">Open roles</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">Current opportunities.</h2></Reveal>
      <div className="mt-12 divide-y divide-line border-y border-line">{roles.map((r, i) => (<Reveal key={r.title} delay={i * .05}><div className="flex flex-col gap-4 py-7 md:flex-row md:items-center md:justify-between"><div><h3 className="font-display text-display-md font-bold text-ink">{r.title}</h3><p className="mt-1 font-sans text-sm text-azure">{r.type}</p><p className="mt-2 max-w-xl font-sans text-[0.95rem] text-ink-mute">{r.body}</p></div><Link href="/contact" className="btn-outline shrink-0 rounded-full px-6 py-2.5 font-sans text-sm font-medium">Apply</Link></div></Reveal>))}</div>
      <Reveal className="mt-10"><p className="font-sans text-sm text-ink-mute">Don&rsquo;t see your role? Send a note through the <Link href="/contact" className="underline">contact page</Link> — we read every message.</p></Reveal></div></section>
  </>);
}
