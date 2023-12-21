/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'blue1': 'linear-gradient(to bottom,#009ce4 0%,#0094d5 100%)',
        'blue2': '#00648f',
        'blue3': '#004B69',
        'yellow': 'linear-gradient(180deg,#ffc933,#f7901d)',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}

