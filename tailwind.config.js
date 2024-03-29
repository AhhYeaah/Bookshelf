/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      colors: {
        "sidebar-bg": "#313a46",
        "sidebar-item": "#8391a2",
        "sidebar-item-hover": "#bccee4",
        "sidebar-item-active": "#fff",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'card-pristine': '416px',
        'card-pristine-image': '322px',
        'card-touched-image': '191px',

        'minified-sidebar-button': '56px'
      },
      width: {
        'card': '300px',

        'sidebar-button': '196px'
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
