/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      fontFamily: {
        'harlow': ['harlow', 'sans-serif'], // Add 'sans-serif' as a fallback
        'neues': ['neues', 'sans-serif']
      }
    },
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }
