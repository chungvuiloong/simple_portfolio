/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "off-white": "#F5F5F5",
        cyan: {
          DEFAULT: "#00D8D6",
          light: "#7be8e8",
        },
        navy: {
          DEFAULT: "#0d2a3a",
          light: "rgba(13,42,58,0.75)",
        },
        blue: {
          DEFAULT: "#00224C",
          dark: "#00224C",
        },
        cream: {
          DEFAULT: "#f5f2ed",
          border: "#e8e4dc",
        },
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
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
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(.25,.46,.45,.94) both',
        'fade-in': 'fadeIn 0.35s ease both',
        'fade-slide-in': 'fadeSlideIn 0.4s cubic-bezier(.25,.46,.45,.94) both',
        'expand-x': 'expandX 0.6s cubic-bezier(.25,.46,.45,.94) both',
        'blink': 'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeSlideIn: {
          'from': { opacity: '0', transform: 'translateY(14px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        expandX: {
          'from': { transform: 'scaleX(0)' },
          'to': { transform: 'scaleX(1)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
