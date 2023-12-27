/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:  {
        '98':'98%'
      },
      height: {
        'inherit' : 'calc(100% - 85px)'
      },
      backgroundColor:{
        'primary': '#2F434F',
        'secondary':'#F2F7F7',
      },
      textColor:{
        'light': '#2F434F',
        'dark': '#9AA09F'
      },
      fontFamily:{
        'poppins':['Poppins', 'sans serif']
      },
      borderColor:{
        'primary': '#2F434F',
        'secondary':'#F2F7F7',
      }
    },
  },
  plugins: [],
}

