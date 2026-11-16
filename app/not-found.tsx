import Link from "next/link";
export default function NotFound() {
  return (<section className="mx-auto max-w-shell px-6 py-32 text-center"><p className="eyebrow">404</p><h1 className="mt-4 font-display text-display-xl font-bold text-ink">Beyond the map.</h1><p className="mx-auto mt-5 max-w-md font-sans text-lg text-ink-mute">This page doesn&rsquo;t exist or has moved.</p><Link href="/" className="btn-dark mt-8 inline-block rounded-full px-7 py-3 font-sans text-sm font-medium">Back to home</Link></section>);
}
