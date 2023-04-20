/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
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
    borderRadius: {
      DEFAULT: '.31rem',
      '3xl': '10rem',
      'lg': '2.75rem',
      'md': '0.75rem',
      'xs': '0.1rem',
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
    fontSize: {
      '4xl': "3em",
      '3xl': '2.5em',
      '2xl': '2em',
      'xl': '1.56em',
      'lg': '1.18em',
      'base': '1em',
      'sm': '.85em',
      'xs': '.5em',
    },
    extend: {
      fontFamily: {
        labil: ["Labil Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
