/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '5rem',
        '110': '6rem',
        '111': '8rem',
        '112': '14rem'
      },
      colors: {
        cardSky: 'hsl(174, 78%, 86%)',
        logoBlue: 'hsl(240, 100%, 11%)',
        logoGreen: 'hsl(174, 83%, 34%)',
        dusty: 'hsl(252, 45%, 98%)',
        lightSky: 'hsl(174, 64%, 91%)',
        darkSky: 'hsl(174, 78%, 86%)',
        overBlue: 'hsl(231, 100%, 7%)',
        whity: '#FFFFFF',
        lightGreen: 'hsl(174, 64%, 91%)'
      }
    },
  },
  plugins: [
  ],
}

