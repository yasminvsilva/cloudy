/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Overpass', 'sans-serif'],
        overpass: ['Karla', 'sans-serif'],
      },

      colors: {
        'branco': '#FFF',
        'roxo-claro': '#C0AEE7',
        'roxo-titulo': '#735EA0',
        'verde-titulo': '#5EA079',
        'azul-titulo': '#4C8293',
        'azul-carrossel': '#9EBFD1',
        'secao-diferencial': '#E9EFFF',
        'cinza': '#616161',
        // página de guia
        // página de materiais
      },
    },
  },
  plugins: [],
}
