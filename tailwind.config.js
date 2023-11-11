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
    minHeight: {
      50: '12.5rem',
      100: '25rem',
      112.5: '28.125rem',
      125: '31.25rem',
      150: '37.5rem',
    },
    minWidth: {
      50: '12.5rem',
      100: '25rem',
      112.5: '28.125rem',
      125: '31.25rem',
      150: '37.5rem',
      full: '100%',
    },
    maxWidth: {
      50: '12.5rem',
      100: '25rem',
      112.5: '28.125rem',
      125: '31.25rem',
      150: '37.5rem',
      full: '100%',
    },
    extend: {
      colors: {
        primary: '#c0933e',
        guyabano: '#f8f8f8',
      },
      backgroundImage: {
        'back-swerl': "url('/src/assets/images/back-swerl.png')",
        'white-house': "url('/src/assets/images/whitehouse.png')",
        rocket: "url('/src/assets/images/rocket.png')",
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
        4.5: '1.125rem',
        100: '25rem',
      },
      lineHeight: {
        6.5: '1.625rem',
      },
    },
  },
  plugins: [],
}
