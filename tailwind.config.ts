import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        button: "var(--shadow-button)",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "bounce-varied": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "25%": { transform: "translateY(-12px) scale(1.02)" },
          "50%": { transform: "translateY(-6px) scale(1)" },
          "75%": { transform: "translateY(-10px) scale(1.01)" },
        },
        "ball-bounce": {
          "0%": { transform: "translateY(0) translateX(0)" },
          "10%": { transform: "translateY(-25px) translateX(8px)" },
          "20%": { transform: "translateY(0) translateX(12px)" },
          "30%": { transform: "translateY(-18px) translateX(4px)" },
          "40%": { transform: "translateY(0) translateX(-6px)" },
          "50%": { transform: "translateY(-22px) translateX(-10px)" },
          "60%": { transform: "translateY(0) translateX(-8px)" },
          "70%": { transform: "translateY(-15px) translateX(0px)" },
          "80%": { transform: "translateY(0) translateX(6px)" },
          "90%": { transform: "translateY(-12px) translateX(3px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "shadow-pulse": {
          "0%": { transform: "translateX(-50%) scaleX(1)", opacity: "0.3" },
          "10%": { transform: "translateX(-40%) scaleX(0.5)", opacity: "0.15" },
          "20%": { transform: "translateX(-38%) scaleX(1)", opacity: "0.3" },
          "30%": { transform: "translateX(-45%) scaleX(0.6)", opacity: "0.18" },
          "40%": { transform: "translateX(-56%) scaleX(1)", opacity: "0.3" },
          "50%": { transform: "translateX(-60%) scaleX(0.5)", opacity: "0.15" },
          "60%": { transform: "translateX(-58%) scaleX(1)", opacity: "0.3" },
          "70%": { transform: "translateX(-50%) scaleX(0.6)", opacity: "0.18" },
          "80%": { transform: "translateX(-44%) scaleX(1)", opacity: "0.3" },
          "90%": { transform: "translateX(-47%) scaleX(0.7)", opacity: "0.2" },
          "100%": { transform: "translateX(-50%) scaleX(1)", opacity: "0.3" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "bounce-varied": "bounce-varied 2s ease-in-out infinite",
        "ball-bounce": "ball-bounce 2.5s ease-in-out infinite",
        "shadow-pulse": "shadow-pulse 2.5s ease-in-out infinite",
        "scroll-x": "scroll-x 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
