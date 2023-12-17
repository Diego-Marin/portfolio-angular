/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bamboo': {
          '50': '#fffaea',
          '100': '#fff1c5',
          '200': '#ffe187',
          '300': '#ffcc48',
          '400': '#ffb51e',
          '500': '#fc9204',
          '600': '#d56600',
          '700': '#b94804',
          '800': '#96370a',
          '900': '#7b2e0c',
          '950': '#471501',
        },
        'brand-principal':{
          'background-brand': '#d56600'
        }
      }
    },
  },
  plugins: [],
}

