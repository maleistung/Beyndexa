import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/site";
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-snow">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10">
        <div className="grid gap-12 border-b border-line-dark pb-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm"><Wordmark inverted gid="foot" /><p className="mt-5 font-sans text-sm leading-relaxed text-snow/60">{site.description}</p></div>
          <div><p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-cyan">Company</p>
            <ul className="space-y-3 font-sans text-sm text-snow/75">{site.nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}<li><Link href="/news" className="hover:text-white">Newsroom</Link></li></ul></div>
          <div><p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-cyan">Contact</p>
            <ul className="space-y-3 font-sans text-sm text-snow/75"><li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li><li><Link href="/contact" className="hover:text-white">Contact form</Link></li></ul></div>
          <div><p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-cyan">Registered Office</p>
            <address className="not-italic font-sans text-sm leading-relaxed text-snow/75">{site.legalName}<br />{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}<br />{site.address.country}</address></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 font-sans text-xs text-snow/45 md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} {site.legalName}. All rights reserved.</span>
          <div className="flex gap-6"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link><span>Registered in Wyoming, USA</span></div>
        </div>
      </div>
    </footer>
  );
}
