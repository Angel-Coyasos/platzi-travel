/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //or 'media' or 'class'
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url(../images/sanFrancisco.jpg)",
        'sanFranciscoDesktop': "url(../images/sanFranciscoDesktop.jpg)",
        'yosemite': "url(../images/yosemite.jpg)",
        'LA': "url(../images/LA.jpg)",
        'seattle': "url(../images/seattle.jpg)",
        'new_york': "url(../images/new_york.jpg)",
        'norway': "url(../images/norway.jpg)",
        'sydney': "url(../images/sydney.jpg)",
        'miami': "url(../images/miami.jpg)",
        'switzerland': "url(../images/switzerland.jpg)",
        'bali': "url(../images/bali.jpg)",
        'chicago': "url(../images/chicago.jpg)",
        'europa': "url(../images/europa.jpg)",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        '80': '20rem',
        '100': '28rem',
      }
    },
  },
  variants: {
    with: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}