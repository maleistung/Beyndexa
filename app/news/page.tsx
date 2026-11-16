import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Newsroom", description: "Company announcements and press information from Beyondexa LLC." };
const posts = [
  { date: "November 2026", tag: "Company", title: "Beyondexa launches its new corporate website", body: "A new home for the group, with information on our services, portfolio, insights, and how to work with us." },
  { date: "2025", tag: "Portfolio", title: "First venture enters its second market", body: "Beyondexa takes its first consumer brand into a new region, with localized operations and customer care." },
  { date: "2025", tag: "Portfolio", title: "Beyondexa completes its first brand acquisition", body: "The group welcomes its first acquired brand and consolidates shared operating infrastructure." },
  { date: "2024", tag: "Portfolio", title: "First consumer brands launch", body: "Beyondexa's first own-brand products go to market, with sourcing and fulfilment operated in-house." },
  { date: "2023", tag: "Company", title: "Beyondexa LLC founded in Wyoming", body: "The company is registered in Sheridan, Wyoming, with a mandate to build and operate commerce ventures internationally." },
];
export default function NewsPage() {
  return (<>
    <PageHeader eyebrow="Newsroom" title={<>News and <span className="text-grad">announcements</span>.</>} intro="Updates from the group. For press inquiries, contact our team directly." />
    <section className="mx-auto max-w-wide px-6 py-20 md:px-10 md:py-28">
      <div className="divide-y divide-line border-y border-line">{posts.map((p, i) => (<Reveal key={p.title} delay={i * .05}><article className="grid gap-4 py-8 md:grid-cols-[10rem_1fr] md:gap-10"><div><p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-azure">{p.tag}</p><p className="mt-1 font-sans text-sm text-ink-mute">{p.date}</p></div><div><h2 className="font-display text-display-md font-bold text-ink">{p.title}</h2><p className="mt-2 max-w-2xl font-sans text-[0.97rem] leading-relaxed text-ink-mute">{p.body}</p></div></article></Reveal>))}</div>
      <Reveal className="mt-14 rounded-4xl border border-line bg-snow p-8"><p className="eyebrow">Press</p><p className="mt-3 font-sans text-[0.97rem] text-ink-mute">Media inquiries: <a href={`mailto:${site.email}`} className="font-medium text-ink underline">{site.email}</a></p></Reveal>
    </section>
  </>);
}
