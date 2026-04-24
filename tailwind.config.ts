import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Instrument Serif'", "serif"],
      },
      colors: {
        navy: {
          950: "#060F18",
          900: "#0A1826",
          800: "#0E2036",
          700: "#102C47",
          600: "#153860",
          500: "#1B4A7A",
          400: "#235E97",
          300: "#3A7AB5",
        },
        gold: {
          50:  "#FDF8EC",
          100: "#F8EDCC",
          200: "#F0D98A",
          300: "#E6C34A",
          400: "#C69A27",
          500: "#A87E1A",
          600: "#856113",
        },
        parchment: {
          50:  "#FAFAF6",
          100: "#F5F0E8",
          200: "#E8E0D0",
          300: "#C8BDAA",
          400: "#9A8F7E",
        },
        "slate-blue": {
          100: "#C4D4E4",
          200: "#8AAAC8",
          300: "#5A84A8",
        },
      },
      backgroundImage: {
        "gold-shine": "linear-gradient(110deg, #C69A27 0%, #F0D98A 40%, #C69A27 70%, #A87E1A 100%)",
        "navy-gradient": "linear-gradient(135deg, #0A1826 0%, #102C47 50%, #0A1826 100%)",
      },
      keyframes: {
        "shine": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "menu-in": {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shine:     "shine 4s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "menu-in": "menu-in 0.25s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
