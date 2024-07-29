/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
      './src/pages/**/*.{html,js,jsx}',
      './src/components/**/*.{html,js,jsx}',
      './src/utils/**/*.{html,js,jsx}',
    ],

  theme: {
    fontFamily: {
    },
    extend: {
      boxShadow: {
        "3xl": "0vw 0vw 0.5vw 0vw rgb(32 32 32 / 12%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
      },
      colors: {
        'defult': '#2f3091',
        'defult-secondary': '#FFFFFF',
        'defult-button': '#F57C00',
      },
    },
  },
  plugins: [],
};