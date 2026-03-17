import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      colors: {
        bg: "#0c0c0e",
        surface: "#141416",
        border: "#1e1e22",
        muted: "#3a3a42",
        subtle: "#6b6b78",
        text: "#e8e8f0",
        accent: "#13df00",
        "accent-dim": "#085a00",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e8e8f0",
            a: { color: "#13df00" },
            h1: { color: "#e8e8f0" },
            h2: { color: "#e8e8f0" },
            h3: { color: "#e8e8f0" },
            code: { color: "#13df00", background: "#141416" },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: { borderLeftColor: "#13df00", color: "#6b6b78" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
