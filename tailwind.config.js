/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,ts,,tsx}'],
  theme: {
    extend: {
      colors: {
        DarkGray: 'hsl(0, 0%, 63%)',
        Black: 'hsl(0, 0%, 0%)',
        White: 'hsl(0, 0%, 100%)',
        VeryDarkGray: 'hsl(0, 0%, 27%)',
      },
    },
  },
  plugins: [],
}

