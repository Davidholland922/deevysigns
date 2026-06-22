import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Extracted from the faceted "dv" logo
        crimson: {
          DEFAULT: "#C2182B",
          50: "#FCEAEC",
          100: "#F6C5CB",
          200: "#EE8E99",
          300: "#E35867",
          400: "#D62E41",
          500: "#C2182B",
          600: "#9E1322",
          700: "#7A0E1A",
          800: "#560A12",
          900: "#33060B",
        },
        charcoal: {
          DEFAULT: "#121212",
          50: "#f5f5f5",
          800: "#1a1a1a",
          900: "#121212",
          950: "#0a0a0a",
        },
        warmgrey: "#EAEAEA",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      backgroundImage: {
        "crimson-gradient":
          "linear-gradient(135deg, #E35867 0%, #C2182B 45%, #7A0E1A 100%)",
        "crimson-radial":
          "radial-gradient(circle at center, rgba(194,24,43,0.35) 0%, rgba(194,24,43,0) 70%)",
        "facet-dark":
          "linear-gradient(135deg, #1a1a1a 0%, #121212 60%, #0a0a0a 100%)",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
