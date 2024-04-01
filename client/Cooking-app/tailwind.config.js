/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico'],
        roboto : ['Roboto']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}