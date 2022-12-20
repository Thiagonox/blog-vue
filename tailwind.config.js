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
      'Souse': ['Source Sans Pro'],
      'Quicksand': ['Quicksand'],
    },
    extend: {
      colors: {
        'principal': '#FEFCF6',
        'esverdeado': '#FEFCF6',
        'verde':'#FEFCF6',
        'branco': '#000',
      },
    },
  },
  plugins: [],
}
