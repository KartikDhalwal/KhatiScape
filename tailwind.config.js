/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B8860B', // dark goldenrod
          light: '#DAA520', // goldenrod
          dark: '#996515', // darker goldenrod
        },
        secondary: {
          DEFAULT: '#333333', // dark gray
          light: '#555555',
          dark: '#111111',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}