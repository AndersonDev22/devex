/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },

    colors:{
      "white": "#ffffff",
      "blue-100": "#ABADC6",
      "blue-900": "#1E2235",
      "gray-200": "#bbbbbb",
      "gray-800": "#515050",
    },

    extend: {},
  },
  plugins: [],
}
