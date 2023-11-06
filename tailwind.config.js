/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  prefix: 'tw-',
  theme: {
    fontFamily: {
      proxima_novaregular: [
        'proxima_novaregular',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {},
  },
  plugins: [],
}
