import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "Merriweather",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-in-pos": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-35%)" },
          "60%": { transform: "translateY(-35%)" },
          "100%": { transform: "translateY(0px)" },
        },
        zoom: {
          "0%": {
            transform: "translateY(-62%) translateX(-30%) scale(1.5)",
          },
          "5%": {
            transform: "translateY(-62%) translateX(-30%) scale(1.5)",
          },
          "35%": {
            transform: "translateX(0) translateY(0) scale(1.0)",
          },
          "70%": {
            transform: "translateX(0) translateY(0) scale(1.0)",
          },
          "90%": {
            transform: "translateY(-62%) translateX(-30%) scale(1.5)",
          },
          "100%": {
            transform: "translateY(-62%) translateX(-30%) scale(1.5)",
          },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "10%": { transform: "translateX(100%)" },
          "20%": { transform: "translateX(0)" },
          "70%": { transform: "translateX(0)" },
          "80%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "swin-in-1": {
          "0%": { transform: "translateX(0) rotate(-20deg)" },
          "20%": { transform: "translateX(120%) rotate(3deg)" },
          "100%": { transform: "translateX(120%) rotate(3deg)" },
        },
        "swin-in-2": {
          "0%": { transform: "translateY(140%) rotate(-120deg)" },
          "20%": { transform: "translateY(0) rotate(-6deg)" },
          "100%": { transform: "translateY(0) rotate(-6deg)" },
        },
        "swin-in-3": {
          "0%": {
            transform:
              "translateY(40%) translateX(40%) rotate(-70deg)",
          },
          "20%": { transform: "translateX(40%) rotate(20deg)" },
          "100%": { transform: "translateX(40%) rotate(20deg)" },
        },
        "swin-in-4": {
          "0%": {
            transform:
              "translateY(90%) translateX(200%) rotate(-70deg)",
          },
          "20%": {
            transform:
              "translateX(70%) translateY(14%) rotate(-6deg)",
          },
          "100%": {
            transform:
              "translateX(70%) translateY(14%) rotate(-6deg)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in-pos 1s ease-in-out",
        "fade-in-1": "fade-in-pos 1.2s ease-in-out",
        "fade-in-2": "fade-in-pos 1.4s ease-in-out",
        "fade-in-3": "fade-in-pos 1.6s ease-in-out",
        "fade-in-opacity": "fade-in 0.6s ease-in-out",
        scroll: "scroll 8s ease-in-out infinite",
        zoom: "zoom 8s ease-in-out infinite",
        "slide-in": "slide-in 5s ease-in-out infinite",
        "swin-1": "swin-in-1 4s ease-out",
        "swin-2": "swin-in-2 4s ease-out",
        "swin-3": "swin-in-3 4s ease-out",
        "swin-4": "swin-in-4 4s ease-out",
      },
      boxShadow: {
        body: "0px 0px 20px -5px hsl(var(--primary)/0.6)",
        "news-card": "3px 2px 4px 0px hsl(var(--primary) / 0.1)",
        workspace: "inset 3px 2px 4px 0px hsl(var(--primary) / 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
