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
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Sora", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#061018",
          900: "#081722",
          800: "#0E2430",
          700: "#163644",
          600: "#1E4A5D",
          500: "#2A647A",
          400: "#377F98",
          300: "#6EAFC0",
        },
        gold: {
          50: "#FFF8E8",
          100: "#F9EBC3",
          200: "#F2D77A",
          300: "#E3BD43",
          400: "#C9972B",
          500: "#A87520",
          600: "#7A5317",
        },
        parchment: {
          50: "#FFFDF6",
          100: "#F6F0E4",
          200: "#E7DDCC",
          300: "#CFC1AD",
          400: "#9E907E",
        },
        "slate-blue": {
          100: "#D2E0E7",
          200: "#9FB9C4",
          300: "#7194A1",
        },
        ember: {
          400: "#D96E3A",
        },
      },
      backgroundImage: {
        "gold-shine": "linear-gradient(110deg, #C9972B 0%, #F2D77A 42%, #C9972B 72%, #A87520 100%)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shine: "shine 4s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "menu-in": "menu-in 0.25s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
