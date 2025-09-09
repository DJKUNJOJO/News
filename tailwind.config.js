/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14213d',
          dark: '#0a1832',
        },
        sky: {
          DEFAULT: '#38bdf8',
          light: '#e0f2fe',
        },
        pearl: {
          DEFAULT: '#f8fafc',
          white: '#fdfdfd',
        },
      },
    },
  },
  plugins: [],
}

