import subir from '../assets/botao-subir.svg'
import subirDark from '../assets/subirDark.svg'

const BotaoSubir = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="hidden md:block fixed bottom-11 right-10 bg-roxo-claro text-white p-3 rounded-full shadow-lg hover:bg-roxo-titulo dark:bg-roxo-titulo dark:hover:bg-roxo-claro focus:outline-none"
    >
      <img className='w-6' src={isDarkMode ? subirDark : subir} alt="Setas apontadas para cima" />
    </button>
  );
};

export default BotaoSubir;
