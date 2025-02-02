/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif']
      },
      gridTemplateColumns: {
       
        'custom': '1fr 3fr 1fr',
      },
    },
  },
  plugins: [tailwindScrollbar],
}