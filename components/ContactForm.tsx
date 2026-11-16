"use client";
import { useState } from "react";
import { site } from "@/lib/site";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Inquiry from ${f.get("name")} — ${f.get("topic")}`);
    const body = encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nCompany: ${f.get("company") || "-"}\nTopic: ${f.get("topic")}\n\n${f.get("message")}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`; setSent(true); };
  const field = "w-full rounded-xl border border-line bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition placeholder:text-ink-soft focus:border-azure focus:ring-2 focus:ring-azure/20";
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2"><input name="name" required placeholder="Full name" className={field} /><input name="email" type="email" required placeholder="Email address" className={field} /></div>
      <div className="grid gap-4 sm:grid-cols-2"><input name="company" placeholder="Company (optional)" className={field} />
        <select name="topic" className={field} defaultValue="General inquiry"><option>General inquiry</option><option>Partnership</option><option>Acquisition</option><option>Supplier</option><option>Careers</option><option>Press</option></select></div>
      <textarea name="message" required rows={6} placeholder="Tell us about your project" className={field} />
      <div className="flex flex-wrap items-center gap-4"><button type="submit" className="btn-grad rounded-full px-7 py-3 font-sans text-sm font-semibold">Send message</button>{sent && <span className="font-sans text-sm text-ink-mute">Opening your email client…</span>}</div>
      <p className="font-sans text-xs text-ink-mute">By submitting, you agree to our <a href="/privacy" className="underline">privacy policy</a>.</p>
    </form>
  );
}
