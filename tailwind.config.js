/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veloraBrown: 'rgb(124,78,48)', 
        veloraBrownDark: 'rgb(100,60,35)', 
      },
    },
  },
  plugins: [],
};
