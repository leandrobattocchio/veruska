/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-blue':'#4A6A93',
        'primary-ligthblue':'#93B6D4',
        'primary-ligtherblue':'#E6F4FF',
        'primary-black':'#303335',
        'primary-darkblue':'#0F4C83',
        'primary-darkerblue':'#213558',
      }
    },
  },
  plugins: [],
}

