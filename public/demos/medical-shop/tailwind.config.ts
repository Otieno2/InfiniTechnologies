import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // InfiniTechnologies Brand Colors - for consistency with main site
        brand: {
          navy: '#0A1A33',
          blue: '#0B6FA4',
          cyan: '#22B8EF',
          cyanLight: '#7FD3F5',
          orange: '#FF7A1A',
          orangeHover: '#FF8F3F',
          mist: '#BFD3E6',
          muted: '#4E617A',
          body: '#1E2E45',
          ink: '#0E1B2E',
          line: '#DCE5EE',
          surface: '#F4F7FB',
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(246,139,31,0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(246,139,31,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(246,139,31,0)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "15%": { transform: "scale(1.1)" },
          "30%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.08)" },
          "60%": { transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "pulse-ring": "pulse-ring 2s infinite",
        heartbeat: "heartbeat 1.8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "scroll-left": "scroll-left 20s linear infinite",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0B6FA4 0%, #22B8EF 50%, #FF7A1A 100%)",
        "brand-radial":
          "radial-gradient(circle at top left, rgba(11,111,164,0.2), transparent 50%), radial-gradient(circle at bottom right, rgba(255,122,26,0.2), transparent 55%)",
      },
      boxShadow: {
        panel: '0 20px 50px -12px rgba(10, 26, 51, 0.25)',
        dramatic: '0 12px 32px -8px rgba(10, 26, 51, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
