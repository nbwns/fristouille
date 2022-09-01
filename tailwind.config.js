/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**.html",
    ".design_system.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
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
      white: {
        100: "#FFFFFF",
        200: "#F3EEE6",
        300: "#DFD7CA",
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
    extend: {
      fontFamily: {
        labil: ["Labil Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
