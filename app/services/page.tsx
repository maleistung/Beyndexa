import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
export const metadata: Metadata = { title: "Services", description: "Brand creation, acquisition and growth, commerce operations, global expansion, and supply — the five capabilities Beyondexa operates." };
const services = [
  { id: "create", no: "01", title: "Brand Creation", lead: "Built on demand, not trends.", body: "We develop consumer brands from the ground up — positioning, identity, product, and packaging — starting from demand we can measure.", points: ["Demand and market research", "Positioning and identity", "Product development", "Launch and storefront"] },
  { id: "acquire", no: "02", title: "Acquisition & Growth", lead: "Potential, realized.", body: "We acquire brands with proven demand and room to grow, then apply capital, operating systems, and new markets to take them further.", points: ["Deal sourcing and evaluation", "Operational integration", "Growth capital", "Performance management"] },
  { id: "operate", no: "03", title: "Commerce Operations", lead: "One standard, every order.", body: "We run online retail end to end — storefront, merchandising, fulfilment, and customer care — with documented, measured processes.", points: ["DTC and marketplace storefronts", "Merchandising and catalog", "Fulfilment coordination", "Customer care and retention"] },
  { id: "expand", no: "04", title: "Global Expansion", lead: "Beyond the first market.", body: "We take brands into new regions — localization, cross-border logistics, compliance, payments, and local customer care — without losing what made them work.", points: ["Market selection and entry", "Localization and compliance", "Cross-border logistics and payments", "Regional customer care"] },
  { id: "supply", no: "05", title: "Supply & Sourcing", lead: "Consistent quality at scale.", body: "Long-term supplier partnerships and resilient logistics — so products arrive on time, to spec, at healthy margins, in every market.", points: ["Supplier discovery and qualification", "Quality control and compliance", "Logistics and inventory planning", "Cost optimization"] },
];
export default function ServicesPage() {
  return (<>
    <PageHeader dark eyebrow="Services" title={<>Five capabilities, <span className="text-grad">operated</span> end to end.</>} intro="We don't advise from the sidelines. We own and run the businesses we build — every capability below is one we operate every day." />
    <div className="mx-auto max-w-wide px-6 md:px-10">{services.map((s, i) => (
      <section key={s.id} id={s.id} className={`grid gap-10 py-20 md:grid-cols-[1fr_1.3fr] md:py-28 ${i < services.length - 1 ? "border-b border-line" : ""}`}>
        <Reveal><span className="font-display text-sm font-bold text-grad">{s.no}</span><h2 className="mt-4 font-display text-display-lg font-bold text-ink">{s.title}</h2><p className="mt-3 font-display text-display-md font-semibold text-ink-mute">{s.lead}</p></Reveal>
        <Reveal delay={.1}><p className="font-sans text-lg leading-relaxed text-ink-mute">{s.body}</p><ul className="mt-8 grid gap-3 sm:grid-cols-2">{s.points.map((p) => <li key={p} className="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3 font-sans text-sm text-ink"><span className="bg-grad mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />{p}</li>)}</ul></Reveal>
      </section>))}</div>
    <section className="border-t border-line bg-snow"><div className="mx-auto max-w-shell px-6 py-20 text-center md:py-28"><Reveal><h2 className="font-display text-display-lg font-bold text-ink">Have a project in mind?</h2><p className="mx-auto mt-4 max-w-md font-sans text-lg text-ink-mute">Tell us about it. We&rsquo;ll tell you honestly whether we&rsquo;re the right fit.</p><Link href="/contact" className="btn-dark mt-8 inline-block rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-medium">Contact us</Link></Reveal></div></section>
  </>);
}
