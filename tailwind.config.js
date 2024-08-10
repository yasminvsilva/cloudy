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
        // página inicial
        'branco': '#FFF',
        'roxo-titulo': '#735EA0',
        'roxo-claro': '#C0AEE7',
        'verde-titulo': '#5EA079',
        'azul-titulo': '#4C8293',
        'secao-diferencial': '#E9EFFF',

        // página de referências/sobre nós
        'cinza': '#616161',

        // página de guia
        // página de materiais
      },
    },
  },
  plugins: [],
}
