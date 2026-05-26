import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        moss: {
          DEFAULT: "#2F3D2A",
          deep: "#1F2A1B",
          soft: "#475C40",
        },
        sage: {
          DEFAULT: "#c8d4c1",
          deep: "#a4b69b",
          soft: "#dde5d8",
        },
        bone: {
          DEFAULT: "#F4EFE6",
          warm: "#EDE6D6",
          paper: "#FBF8F1",
        },
        clay: {
          DEFAULT: "#B4593A",
          deep: "#8E4127",
        },
        ink: {
          DEFAULT: "#1A1A17",
          soft: "#4A4A44",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        marginalia: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        editorial: ["1.125rem", { lineHeight: "1.7" }],
        "display-lg": [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(3.5rem, 10vw, 9rem)",
          { lineHeight: "0.9", letterSpacing: "-0.03em" },
        ],
      },
      letterSpacing: {
        "tightest-display": "-0.04em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "draw-down": {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
        "mask-up": {
          from: { transform: "translateY(110%)" },
          to: { transform: "translateY(0%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "draw-down": "draw-down 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "mask-up": "mask-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
