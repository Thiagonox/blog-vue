/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'principal': ['Source Sans Pro'],
      'secundaria': ['Quicksand'],
    },
    extend: {
      colors: {
        'principal': '#1B1C18',
        'secundaria':'#2B4C4A',
        'tertiary': '#414937',
        'text': '#DDE6CD',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
