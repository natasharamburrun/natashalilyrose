/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      fontFamily: {
        'harlow': ['harlow', 'sans-serif'], // Add 'sans-serif' as a fallback
        'neues': ['neues', 'sans-serif'],
        'margo': ['margo', 'sans-script'],
      },
         colors: {
          'brand-nude': '#f7e6dd;',
          'brand-black': '#45494c;',
          'brand-white': '#e2d8d7;',
          'brand-blue': '#323b5d;',
          'brand-pinky': '#edded7;',
          'brand-beige': '#f0ebe8;',
          'brand-brown': '#917171;',
          'brand-button-blue': '#112c4f',
          'brand-button-hover-grey':'#b1b0ac',
          'brand-green-blue': '#49646a',
          'brand-bronze': '#c8b69a',
      },
        backgroundColor: theme => ({
          ...theme('colors'),
          'primary': '#f5f3f1',
          'secondary': '#917171', 
          'tertiary':'#e9e3e0'
        }),
    },
  
  },

   variants: {
     extend: {},
   },
   plugins: [],
 }
