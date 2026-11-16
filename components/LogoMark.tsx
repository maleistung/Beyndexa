import { cn } from "@/lib/cn";
export default function LogoMark({ className, rounded = 22, gid = "bxg" }: { className?: string; rounded?: number; gid?: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={cn("block", className)}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22D3EE" /><stop offset=".5" stopColor="#3B82F6" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient></defs>
      <rect width="100" height="100" rx={rounded} fill="#070B14" />
      <path d="M22 66 A 28 28 0 0 1 78 66" fill="none" stroke={`url(#${gid})`} strokeWidth="7" strokeLinecap="round" />
      <line x1="18" y1="72" x2="82" y2="72" stroke="#F5F7FB" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="30" r="6" fill="#F5F7FB" />
    </svg>
  );
}
