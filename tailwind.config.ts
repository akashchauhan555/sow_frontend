import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B68B2D",
          50: "#FBF6EA",
          100: "#F5EACB",
          200: "#EAD69C",
          300: "#DFC26D",
          400: "#D0A94A",
          500: "#B68B2D",
          600: "#8F6D24",
          700: "#6C511B",
          800: "#493712",
          900: "#271D09",
        },
        cream: {
          DEFAULT: "#FBF8F2",
          dark: "#F3ECDD",
        },
        beige: {
          DEFAULT: "#EDE4D3",
          dark: "#DCCFB4",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2B2B2B",
        },
        cta: {
          DEFAULT: "#E06B27",
          hover: "#C7581C",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        card: "0 10px 40px rgba(182,139,45,0.12)",
        glass: "0 8px 32px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
      },
    },
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
} satisfies Config;
