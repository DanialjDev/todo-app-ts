/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         animation: {
            float: 'move 1.1s linear forwards',
         },
         keyframes: {
            move: {
               '0%': { transform: 'translateX(0)' },
               '20%': { transform: 'translateX(10px)' },
               '40%': { transform: 'translateX(-10px)' },
               '60%': { transform: 'translateX(10px)' },
               '80%': { transform: 'translateX(-10px)' },
               '100%': { transform: 'translateX(0)' },
            },
         },
      },
   },
   plugins: [],
};
