import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      night: "#070B14", "night-2": "#0C1220", "night-3": "#111A2C",
      snow: "#F5F7FB", "snow-2": "#EBEFF6", white: "#FFFFFF",
      ink: "#0B1020", "ink-mute": "#5B6578", "ink-soft": "#8A94A6",
      line: "#DDE3EE", "line-dark": "#1C2638",
      cyan: "#22D3EE", violet: "#8B5CF6", azure: "#3B82F6",
    },
    fontFamily: { display: ["var(--font-plus)", "system-ui", "sans-serif"], sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    fontSize: {
      hero: ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
      "display-xl": ["clamp(2.4rem, 5.2vw, 4.6rem)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
      "display-lg": ["clamp(1.9rem, 3.8vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
      "display-md": ["clamp(1.4rem, 2.4vw, 1.85rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
    },
    maxWidth: { shell: "1140px", wide: "1400px" },
    borderRadius: { "4xl": "1.75rem", "5xl": "2.5rem" },
    keyframes: { marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } }, pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".35" } } },
    animation: { marquee: "marquee 40s linear infinite", pulseDot: "pulseDot 2s ease-in-out infinite" },
  } }, plugins: [],
};
export default config;
