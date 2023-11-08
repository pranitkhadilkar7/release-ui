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
    colors: {
      guyabano: '#f8f8f8',
    },
    minHeight: {
      100: '25rem',
    },
    minWidth: {
      100: '25rem',
    },
    maxWidth: {
      125: '31.25rem',
    },
    extend: {
      backgroundImage: {
        'back-swerl': "url('/src/assets/images/back-swerl.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '25%': '25%',
        '50%': '50%',
      },
      backgroundPosition: {
        'left-24': 'center left 6rem',
      },
      spacing: {
        100: '25rem',
      },
    },
  },
  plugins: [],
}
