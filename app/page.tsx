import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQ";

const stats = [
  { to: 2023, label: "Founded in Wyoming", raw: true },
  { to: 5, label: "Operating capabilities" },
  { to: 20, suffix: "+", label: "Markets reached" },
  { to: 100, suffix: "%", label: "Ventures operated in-house" },
];
const capabilities = [
  { no: "01", title: "Brand Creation", body: "Consumer brands built on real demand — positioning, product, identity, and launch.", href: "/services#create" },
  { no: "02", title: "Acquisition & Growth", body: "We acquire brands with proven demand and give them capital, systems, and discipline.", href: "/services#acquire" },
  { no: "03", title: "Commerce Operations", body: "Storefronts, merchandising, fulfilment, and care, run end to end to one standard.", href: "/services#operate" },
  { no: "04", title: "Global Expansion", body: "Localization, logistics, and compliance to take a brand beyond its first market.", href: "/services#expand" },
  { no: "05", title: "Supply & Sourcing", body: "Qualified suppliers and resilient logistics that hold quality as volume scales.", href: "/services#supply" },
];
const method = [
  { no: "01", title: "Find the signal", body: "We start where demand already exists and the data says it's growing." },
  { no: "02", title: "Build the system", body: "Brand, product, operations, and growth are designed together, not bolted on." },
  { no: "03", title: "Operate relentlessly", body: "We run the business hands-on, measure everything, and fix what the numbers show." },
  { no: "04", title: "Go beyond", body: "Once it works in one market, our infrastructure carries it into the next." },
];
const insights = [
  { tag: "Perspective", title: "Why the second market is harder than the first", body: "Localization, logistics, and trust don't transfer automatically. Here's how we plan for it." },
  { tag: "Operations", title: "The operating metrics we review every Monday", body: "Five numbers that tell us whether a venture is healthy before the P&L does." },
  { tag: "Acquisition", title: "What makes a brand worth acquiring", body: "Proven demand, fixable operations, and a founder who wants to see it scale." },
];
const faq = [
  { q: "What is Beyondexa?", a: "A global operating group. We build, acquire, and run consumer brands and commerce ventures ourselves — as owners and operators, not advisers." },
  { q: "Do you acquire businesses?", a: "Yes. We look for consumer brands and commerce businesses with proven demand and room to grow with better operations or new markets. Send a short summary through the contact page." },
  { q: "What does \"global\" mean in practice?", a: "We take brands beyond their first market — handling localization, cross-border logistics, compliance, and customer care in each new region." },
  { q: "Do you work with suppliers and partners?", a: "We maintain long-term relationships with manufacturers, logistics providers, and service partners. Supplier and partnership inquiries are welcome." },
  { q: "Where are you based?", a: "Beyondexa LLC is registered in Sheridan, Wyoming, United States, and operates across international markets." },
];

export default function HomePage() {
  return (<>
    <Hero />
    {/* STATS */}
    <section className="border-b border-line bg-snow"><div className="mx-auto grid max-w-wide grid-cols-2 divide-x divide-line md:grid-cols-4">
      {stats.map((s, i) => (<Reveal key={s.label} delay={i * .06} className="px-6 py-10 md:py-12"><p className="font-display text-display-lg font-extrabold text-ink">{s.raw ? s.to : <Counter to={s.to} suffix={s.suffix} />}</p><p className="mt-2 font-sans text-sm text-ink-mute">{s.label}</p></Reveal>))}
    </div></section>

    {/* CAPABILITIES CAROUSEL (dark) */}
    <section className="bg-night-2 text-white"><div className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl"><p className="eyebrow !text-cyan">What we do</p><h2 className="mt-4 font-display text-display-lg font-bold">Five capabilities. One operating group.</h2></div>
        <Link href="/services" className="font-sans text-sm font-medium text-cyan hover:text-white">All services &rarr;</Link>
      </Reveal>
      <div className="mt-14"><Carousel items={capabilities} /></div>
    </div></section>

    {/* STATEMENT */}
    <section className="mx-auto max-w-shell px-6 py-28 text-center md:py-36"><Reveal>
      <h2 className="mx-auto max-w-3xl font-display text-display-xl font-extrabold text-ink">The first market proves the idea. <span className="text-grad">The next ones prove the company.</span></h2>
      <p className="mx-auto mt-6 max-w-xl font-sans text-lg text-ink-mute">We build the systems — operations, supply, and growth — that let a brand travel. That&rsquo;s what &ldquo;beyond&rdquo; means to us.</p>
    </Reveal></section>

    {/* METHOD */}
    <section className="border-y border-line bg-snow"><div className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
      <Reveal className="max-w-2xl"><p className="eyebrow">How we work</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">From signal to scale, in four moves.</h2></Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-line bg-line md:grid-cols-4">
        {method.map((m, i) => (<Reveal key={m.no} delay={i * .06}><div className="h-full bg-white p-8"><span className="font-display text-sm font-bold text-grad">{m.no}</span><h3 className="mt-5 font-display text-[1.4rem] font-bold text-ink">{m.title}</h3><p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{m.body}</p></div></Reveal>))}
      </div>
    </div></section>

    {/* PORTFOLIO TEASER */}
    <section className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="eyebrow">Portfolio</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">A group built to travel.</h2></div><Link href="/portfolio" className="font-sans text-sm font-medium text-azure hover:text-ink">Full portfolio &rarr;</Link></Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[["Consumer brand", "Direct-to-consumer · 3 markets"], ["Commerce venture", "Marketplace retail · 2 markets"], ["Acquired brand", "Growth stage · expanding"], ["In development", "Coming soon"]].map(([n, t], i) => (
          <Reveal key={n} delay={i * .06}><div className="card flex h-full min-h-[11rem] flex-col justify-between rounded-4xl p-7"><div className="bg-grad h-9 w-9 rounded-xl" /><div><h3 className="font-display text-[1.2rem] font-bold text-ink">{n}</h3><p className="mt-1 font-sans text-xs text-ink-mute">{t}</p></div></div></Reveal>))}
      </div>
    </section>

    {/* INSIGHTS */}
    <section className="border-t border-line bg-snow"><div className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="eyebrow">Insights</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">How we think.</h2></div><Link href="/insights" className="font-sans text-sm font-medium text-azure hover:text-ink">All insights &rarr;</Link></Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {insights.map((p, i) => (<Reveal key={p.title} delay={i * .07}><Link href="/insights" className="card block h-full rounded-4xl p-8"><span className="eyebrow">{p.tag}</span><h3 className="mt-4 font-display text-display-md font-bold text-ink">{p.title}</h3><p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{p.body}</p><span className="mt-6 inline-block font-sans text-sm font-medium text-azure">Read &rarr;</span></Link></Reveal>))}
      </div>
    </div></section>

    {/* FAQ */}
    <section className="mx-auto max-w-shell px-6 py-24 md:py-32"><Reveal className="mb-12"><p className="eyebrow">FAQ</p><h2 className="mt-4 font-display text-display-lg font-bold text-ink">Common questions.</h2></Reveal><Reveal delay={.1}><FAQ items={faq} /></Reveal></section>

    {/* CTA */}
    <section className="px-6 pb-24 md:pb-32"><Reveal className="mx-auto max-w-wide">
      <div className="relative overflow-hidden rounded-5xl bg-night px-6 py-20 text-center text-white md:py-28">
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-full h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-[100px]" style={{ background: "radial-gradient(closest-side,#3B82F6,#8B5CF6 50%,transparent)" }} />
        <h2 className="relative mx-auto max-w-2xl font-display text-display-xl font-extrabold">Ready to take it further?</h2>
        <p className="relative mx-auto mt-5 max-w-md font-sans text-lg text-snow/65">Tell us what you&rsquo;re working on. We reply personally, usually within one business day.</p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4"><Link href="/contact" className="btn-grad rounded-full px-7 py-3.5 font-sans text-[0.95rem] font-semibold">Contact us</Link><a href="mailto:contact@beyondexa.com" className="rounded-full border border-white/25 px-7 py-3.5 font-sans text-[0.95rem] font-medium text-white transition hover:bg-white/10">contact@beyondexa.com</a></div>
      </div>
    </Reveal></section>
  </>);
}
