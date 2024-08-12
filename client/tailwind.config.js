/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg': '#F5F5F5',
        'dark': '#092635',
        'text': '#1A1A2F',
        'main': '#364F6B',
        'second': '#FC5185',
        'third': '#3FC1C9',
        'main-shadow': '#364F6B6e',
        'second-shadow': '#FC51855e',
        'third-shadow': '#3FC1C95e',
      },
    },
    screens: {
      'full': {'max': '1919px'},
      '2xl': {'max': '1600px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1000px'},
      'md': {'max': '850px'},
      'sm': {'max': '600px'},
    }
  },
  plugins: [],
}