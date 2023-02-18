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
      'xxs':'8px',
      'xs':'9px',
      's':'10px',
      'md':'15px',
      'lg':'22px'

    },
      colors: {
        'primary': '#282835',
        'secondary': '#818992',
        'blue': '#0046CB',
        'lightBlue':'#AABEE5',
        'circleBlue':'#0D50CE',
        'orange':'#FD7D86',
        'lightOrange':'#F0CED1',
        'green':'#00D793',
        'lightGreen':'#C4F0E2'
      },
    },

  plugins: [],
};
