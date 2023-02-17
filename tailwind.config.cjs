/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize:{
        'xxs':'10px'
    },
      colors: {
        'primary': '#282835',
        'secondary': '#818992',
        'blue': '#0046CB',
        'orange':'#FD7D86',
        'green':'#00D793'
      },
    },

  plugins: [],
};
