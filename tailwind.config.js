/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "Off-white": "#F5F5F5",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Open Sans", "sans-serif"],
      },
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
    },
  },
  plugins: [require("daisyui")],
};
