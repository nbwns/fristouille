/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./safelist.txt",
    "./components/**/*.{js,vue,ts}",
    "./molecules/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "960px",
        md: "960px",
        lg: "960px",
        xl: "960px",
        "2xl": "960px",
      },
    },
    borderRadius: {
      DEFAULT: ".31rem",
      "3xl": "10rem",
      lg: "2.75rem",
      md: "0.75rem",
      xs: "0.1rem",
    },

    fontSize: {
      "4xl": "4.95rem",
      "3xl": "3.75rem",
      "2xl": "2.5rem",
      xl: "1.95rem",
      lg: "1.5rem",
      base: "1.25rem",
      sm: ".95rem",
      xs: ".825rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--labil-font)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--martian-font)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        alt: "hsl(var(--alt))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        label: {
          DEFAULT: "hsl(var(--label))",
          foreground: "hsl(var(--label-foreground))",
        },

        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",

        transparent: "transparent",
        current: "currentColor",

        typography: ({ theme }) => ({
          fristouille: {
            css: {
              "--tw-prose-body": "hsl(var(--primary-foreground))",
              "--tw-prose-headings": "hsl(var(--primary-foreground))",
              "--tw-prose-lead": "hsl(var(--primary-foreground))",
              "--tw-prose-links": "hsl(var(--accent))",
              "--tw-prose-bold": "hsl(var(--primary-foreground))",
              "--tw-prose-counters": "hsl(var(--primary-foreground))",
              "--tw-prose-bullets": "hsl(var(--primary-foreground))",
              "--tw-prose-quotes": "hsl(var(--label))",
              "--tw-prose-quote-borders": "hsl(var(--primary-foreground))",
              "--tw-prose-captions": "hsl(var(--primary-foreground))",
              "--tw-prose-code": "hsl(var(--label))",
              "--tw-prose-pre-bg": "hsl(var(--label))",
            },
          },
        }),

        orange: {
          100: "#FFD9C3",
          200: "#FFA06A",
          300: "#FC762B",
        },

        purple: {
          100: "#D1B9DF",
          200: "#B390C9",
          300: "#734490",
        },

        green: {
          100: "#B6D9C8",
          200: "#50A77D",
          300: "#0C7945",
        },

        red: {
          100: "#F9C5C6",
          200: "#E55F5F",
          300: "#D03030",
        },

        pink: {
          100: "#F4D1F4",
          200: "#EB8DED",
          300: "#D450D7",
        },

        black: {
          50: "#6C5C6D",
          100: "#423343",
          200: "#2D1F2E",
          300: "#190B1A",
        },

        white: {
          100: "#F3E9F4",
          200: "#FCF7FB",
          300: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
