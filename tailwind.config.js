/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#854477'
      },
      boxShadow:{
        sp:'0px 4px 4px 2px #00000040'
      },
      maxWidth:{
        xxs:'6rem',
        xxxs:'2rem',
        xxsm:'4rem'
      },
      gridTemplateColumns:{
        cart:'75%, 25%'
      },
      fontSize:{
        xxs:'0.5rem'
      },
    },
  },
  plugins: [],
}
