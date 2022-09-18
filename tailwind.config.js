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
        'card-pristine': '416px',
        'card-pristine-image': '322px',

        'card-touched-image': '191px'
      },
      width: {
        'card': '300px',
      },
      maxHeight: {
        'card-pristine': '416px',
      },  
      fontWeight: {
        'extra-light': 100,
      }
    },
  },
  plugins: [],
};
