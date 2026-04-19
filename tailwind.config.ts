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
          "8%": { transform: "translateY(-120px) translateX(80px)" },
          "16%": { transform: "translateY(0) translateX(150px)" },
          "24%": { transform: "translateY(-100px) translateX(60px)" },
          "32%": { transform: "translateY(0) translateX(-80px)" },
          "40%": { transform: "translateY(-140px) translateX(-120px)" },
          "48%": { transform: "translateY(0) translateX(-60px)" },
          "56%": { transform: "translateY(-90px) translateX(100px)" },
          "64%": { transform: "translateY(0) translateX(40px)" },
          "72%": { transform: "translateY(-110px) translateX(-100px)" },
          "80%": { transform: "translateY(0) translateX(-40px)" },
          "88%": { transform: "translateY(-80px) translateX(20px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "shadow-pulse": {
          "0%": { transform: "translateX(-50%) scaleX(1)", opacity: "0.3" },
          "16%": { transform: "translateX(100%) scaleX(0.3)", opacity: "0.1" },
          "32%": { transform: "translateX(-130%) scaleX(1)", opacity: "0.3" },
          "48%": { transform: "translateX(-110%) scaleX(0.4)", opacity: "0.15" },
          "64%": { transform: "translateX(50%) scaleX(1)", opacity: "0.3" },
          "80%": { transform: "translateX(-90%) scaleX(0.5)", opacity: "0.2" },
          "100%": { transform: "translateX(-50%) scaleX(1)", opacity: "0.3" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rise-up": {
          "0%": { opacity: "0", transform: "translateY(60px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "flip-in": {
          "0%": { opacity: "0", transform: "perspective(1000px) rotateX(-35deg) translateY(40px)" },
          "100%": { opacity: "1", transform: "perspective(1000px) rotateX(0deg) translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-80px) rotate(-3deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(80px) rotate(3deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
        },
        "zoom-fade": {
          "0%": { opacity: "0", transform: "scale(0.7)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "scale(1)", filter: "blur(0)" },
        },
        "dashboard-reveal": {
          "0%": {
            opacity: "0",
            transform: "perspective(1200px) rotateY(25deg) translateY(40px) translateZ(-80px)",
            filter: "blur(6px)",
          },
          "60%": {
            opacity: "1",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "perspective(1200px) rotateY(0deg) translateY(0) translateZ(0)",
            filter: "blur(0)",
          },
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
        "ball-bounce": "ball-bounce 12s ease-in-out infinite",
        "shadow-pulse": "shadow-pulse 12s ease-in-out infinite",
        "scroll-x": "scroll-x 20s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "rise-up": "rise-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "flip-in": "flip-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "zoom-fade": "zoom-fade 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
