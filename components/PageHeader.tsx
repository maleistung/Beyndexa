import Reveal from "@/components/Reveal";
export default function PageHeader({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: React.ReactNode; intro?: string; dark?: boolean }) {
  return (
    <section className={`relative overflow-hidden border-b ${dark ? "border-line-dark bg-night text-white" : "border-line bg-white"}`}>
      {dark && <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" style={{ maskImage: "radial-gradient(ellipse at 70% 0%, #000 20%, transparent 65%)" }} />}
      <div className="relative mx-auto max-w-wide px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
        <Reveal className="max-w-3xl">
          <p className={`eyebrow ${dark ? "!text-cyan" : ""}`}>{eyebrow}</p>
          <h1 className={`mt-5 font-display text-hero font-bold ${dark ? "text-white" : "text-ink"}`}>{title}</h1>
          {intro && <p className={`mt-6 max-w-xl font-sans text-lg leading-relaxed md:text-xl ${dark ? "text-snow/65" : "text-ink-mute"}`}>{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
