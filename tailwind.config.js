/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
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
        'cinza-carrossel': '#CFCFCF',
        'secao-diferencial': '#E9EFFF',
        'cinza': '#616161',
        // página de guia
        'roxo-guia': '#DCD2F3',
        'verde-guia': '#E5FFDC',
        'azul-guia': '#F9FAFF',
        'linha': '#B1B1B1',
        'guia': '#FAFFF9',
        // página de materiais
        'texto-materiais': 'rgba(0, 0, 0, 0.75)',

        // modo escuro
        'background-black': '#1B1B2C',
        'bg-cards': '#2C2C4A',
        'bg-img-cards': '#8B8CB5',
        'bg-usodiario': '#212131',
        'branco-t': 'rgba(255, 255, 255, 0.85)',
        'linha': '#666666',
        'botaoCarrossel': '#4C4C6E',
        'botaoTransicao': '#2A2A3C'
      },
    },
  },
  plugins: [],
}
