/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./molecules/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '.31rem',
      '3xl': '10rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

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
    fontSize: {
      '4xl': "2.56em",
      '3xl': '2.4em',
      '2xl': '2em',
      'xl': '1.56em',
      'lg': '1.25em',
      'base': '1em',
      'sm': '.75em',
      'xs': '.5em',
    },
    extend: {
      colors: {

        coral: {
          alpha: "rgba(221, 117, 117, 0.5)",
          100: "#FFBBA5",
          200: "#FF9877",
          300: "#FF794E",
        },
        reglisse: {
          100: "#514351",
          200: "#433544",
          300: "#352835",
        },
        mint: {
          alpha: "rgba(133, 174, 105, 0.5)",
          100: "#C4E3AE",
          200: "#A4CD88",
          300: "#85AE69",
        },
        gum: {
          alpha: "rgba(215, 131, 211, 0.5)",
          100: "#FBC2F8",
          200: "#EA9FE6",
          300: "#D783D3",
        },
        purple: {
          100: "#D2BCFF",
          200: "#B697F6",
          300: "#9C74EE",
        },
      },
      fontFamily: {
        labil: ["Labil Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
