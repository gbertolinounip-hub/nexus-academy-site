import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cada token lê a variável definida em globals.css, então segue o tema.
        // O formato `rgb(var(--x) / <alpha-value>)` é o que mantém `bg-ink/40` funcionando.
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
        },
        brand: {
          300: "rgb(var(--brand-300) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          900: "rgb(var(--brand-900) / <alpha-value>)",
        },
        // as cores da NexusIA são a identidade do gradiente: não mudam com o tema
        ia: {
          teal: "#2BB6A3",
          green: "#56C271",
          amber: "#F0B419",
          red: "#E43B3B",
          magenta: "#D8207F",
          indigo: "#4A5CB0",
        },
        fog: "rgb(var(--fog) / <alpha-value>)",
        /** neutro que inverte com o tema: substitui `white` em superfície, borda e texto */
        paper: "rgb(var(--paper) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1240px" },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        float: "float 7s ease-in-out infinite",
        "fade-up": "fadeUp .5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
