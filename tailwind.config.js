/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cinza-900': '#171716',
        'cinza-800': '#212121',
        'cinza-700': '#363636',
        'cinza-500': '#474747',
        'cinza-400': '#6b6b6b',
        'cinza-300': '#9e9e9e',
        'cinza-200': '#bab8b8',
        'cinza-100': '#d6d6d6',
        'cinza-50': '#f5f5f5'
      }
    },
  },
  plugins: [],
}