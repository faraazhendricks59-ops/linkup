import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Linkup Brand Palette
        brand: {
          50:  "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc5fc",
          400: "#36a7f8",
          500: "#0c8ce9", // Primary
          600: "#006fc7",
          700: "#0159a1",
          800: "#064b85",
          900: "#0b3f6e",
          950: "#072849",
        },
        accent: {
          50:  "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef", // Accent magenta
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },
        surface: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        success: {
          DEFAULT: "#10b981",
          foreground: "#ecfdf5",
        },
        warning: {
          DEFAULT: "#f59e0b",
          foreground: "#fffbeb",
        },
        danger: {
          DEFAULT: "#ef4444",
          foreground: "#fef2f2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "brand-sm": "0 1px 2px 0 rgb(12 140 233 / 0.05)",
        "brand": "0 4px 14px 0 rgb(12 140 233 / 0.15)",
        "brand-lg": "0 10px 40px -10px rgb(12 140 233 / 0.25)",
        "accent": "0 4px 14px 0 rgb(217 70 239 / 0.2)",
        "glow": "0 0 20px rgb(12 140 233 / 0.4)",
        "glow-accent": "0 0 24px rgb(217 70 239 / 0.35)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-right": "slide-in-right 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0c8ce9 0%, #d946ef 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #e0effe 0%, #fae8ff 100%)",
        "surface-gradient": "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
