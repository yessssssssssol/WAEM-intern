/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      main: '#7795A2',
      second: '#14403F',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
