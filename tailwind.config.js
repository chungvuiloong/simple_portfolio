/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica Neue', 'Open Sans', 'sans-serif'],
      },
      fontWeight: {
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
      },
    },
  },
  plugins: [],
}
