/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // extend the colors theme with a new gray100 color
      colors: {
        gray:{
          100: "#ececec",
        }
      },
    },
  },
  plugins: [],
}