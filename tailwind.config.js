/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    colors:{
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'red' : '#ff0000',
      'white': '#ffffff',
      'lightred': '#fc5454',
      'black' : '#000000',
      'lightgreen' : '#7bff00'
    },
    extend: {

    },
  },
  plugins: [],
}