/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto : ['Noto Naskh Arabic','serif'],
        conver: ['Convergence', 'serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

