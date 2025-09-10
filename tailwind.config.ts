import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        muted: "var(--muted)",
        border: "var(--border)",
        text: "var(--text)",
        accent: { orange: "var(--accent-orange)" },
        steel: "var(--steel)",
      },
      boxShadow: {
        ember: "0 0 24px rgba(255,77,0,0.25)",
        solid: "0 4px 12px rgba(0,0,0,0.15)",
      },
      backdropBlur: { xs: "2px" }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".stripe-45": {
          background: "repeating-linear-gradient(45deg, var(--accent-orange) 0 12px, transparent 12px 24px)",
          opacity: "0.1",
        },
        ".stripe-orange": {
          background: "repeating-linear-gradient(45deg, var(--accent-orange) 0 12px, transparent 12px 24px)",
          opacity: "0.1",
        },
        ".panel": {
          background: "var(--card)",
          border: "2px solid var(--border)",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
        ".grid-noise": {
          backgroundImage: "radial-gradient(var(--steel) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
          opacity: "0.3",
        },
      });
    }),
  ],
} satisfies Config;