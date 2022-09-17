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
      "transparent":"transparent",
      "white": "#FFFFFF",
      "black": "#000000",
      "blue-100": "#ABADC6",
      "blue-600": "#2563EB",
      "blue-700": "#1d4ed8",
      "blue-900": "#1E2235",
      "gray-200": "#BBBBBB",
      "gray-800": "#515050",
      "zinc-100": "#F4F4F4",
      "red-200": "#FECACA",
    },

    extend: {
      
    },
  },
  plugins: [],
}
