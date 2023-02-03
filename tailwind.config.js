const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Varela Round"', ...defaultTheme.fontFamily.sans],
      },
      // extend the colors theme with a new gray100 color
      colors: {
        gray:{
          100: "#ececec",
          800: '#a5a7ab',
        }
      },
    },
  },
  plugins: [],
}