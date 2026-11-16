"use client";
import { motion, useReducedMotion } from "framer-motion";
/** A global network: nodes across a horizon arc, links drawing in, one node pulsing beyond. */
export default function Network({ className }: { className?: string }) {
  const r = useReducedMotion();
  const nodes = [[60,170],[120,120],[190,150],[250,105],[310,140],[150,60],[270,50]];
  const links = [[0,1],[1,2],[2,3],[3,4],[1,5],[5,6],[3,6],[2,5]];
  return (
    <svg viewBox="0 0 360 220" className={className} aria-hidden="true">
      <defs><linearGradient id="nl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#22D3EE" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient></defs>
      <motion.path d="M20 200 A 220 220 0 0 1 340 200" fill="none" stroke="url(#nl)" strokeWidth="1.5" strokeOpacity=".6"
        initial={r ? { pathLength: 1 } : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: [0.22,1,0.36,1] }} />
      {links.map(([a,b],i) => (
        <motion.line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#F5F7FB" strokeOpacity=".22" strokeWidth="1.2"
          initial={r ? { pathLength: 1 } : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .8, delay: .4 + i * .08, ease: [0.22,1,0.36,1] }} />
      ))}
      {nodes.map(([x,y],i) => (
        <motion.circle key={i} cx={x} cy={y} r={i === 6 ? 7 : 4.5} fill={i === 6 ? "#22D3EE" : "#F5F7FB"}
          initial={r ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ transformOrigin: `${x}px ${y}px` }}
          transition={{ duration: .5, delay: .5 + i * .07, ease: [0.22,1,0.36,1] }} className={i === 6 ? "animate-pulseDot" : ""} />
      ))}
    </svg>
  );
}
