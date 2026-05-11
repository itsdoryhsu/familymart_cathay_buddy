/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#5cb464',
        'bg-light': '#f5f8f7',
        dark: '#0f231c'
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
