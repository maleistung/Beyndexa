import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { cn } from "@/lib/cn";
export default function Wordmark({ className, inverted = false, gid = "wm" }: { className?: string; inverted?: boolean; gid?: string }) {
  return (
    <Link href="/" aria-label="Beyondexa — Home" className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoMark className="h-7 w-7" rounded={8} gid={gid} />
      <span className={cn("font-display text-[1.2rem] font-bold leading-none tracking-[-0.025em]", inverted ? "text-white" : "text-ink")}>Beyondexa</span>
    </Link>
  );
}
