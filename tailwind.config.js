/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'card': '26rem',
      },
      width: {
        'card': '20rem',
      },
    },
  },
  plugins: [],
};
