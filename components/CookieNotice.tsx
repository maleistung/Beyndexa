"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { if (!localStorage.getItem("bx-cookie-ok")) setShow(true); } catch { setShow(true); } }, []);
  const accept = () => { try { localStorage.setItem("bx-cookie-ok", "1"); } catch {} setShow(false); };
  if (!show) return null;
  return (
    <div role="dialog" aria-label="Cookie notice" className="fixed inset-x-4 bottom-4 z-[55] mx-auto max-w-xl rounded-2xl border border-line bg-white p-5 shadow-2xl shadow-ink/20">
      <p className="font-sans text-sm text-ink-mute">We use essential cookies to make this site work and privacy-respecting analytics to improve it. See our <Link href="/privacy" className="underline">privacy policy</Link>.</p>
      <div className="mt-4 flex gap-3"><button onClick={accept} className="btn-dark rounded-full px-5 py-2 font-sans text-sm font-medium">Accept</button><button onClick={accept} className="btn-outline rounded-full px-5 py-2 font-sans text-sm font-medium">Essential only</button></div>
    </div>
  );
}
