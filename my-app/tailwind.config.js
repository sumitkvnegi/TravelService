/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mountain': "url('../public/images/bg.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
