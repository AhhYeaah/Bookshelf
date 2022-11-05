/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      "sidebar-bg": "#313a46",
      "sidebar-item": "#8391a2",
      "sidebar-item-hover": "#bccee4",
      "sidebar-item-active": "#fff",
    },
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
