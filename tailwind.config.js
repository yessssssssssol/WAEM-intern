/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#7795A2',
        second: '#14403F',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
