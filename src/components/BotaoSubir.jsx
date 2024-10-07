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

    <div>
      <button
        onClick={scrollToTop}
        className="cursor-pointer transition-transform duration-300 hover:scale-110 hidden md:block fixed bottom-14 right-10 bg-roxo-claro text-white p-3 rounded-full shadow-lg hover:bg-roxo-titulo dark:bg-roxo-titulo dark:hover:bg-roxo-claro focus:outline-none"
      >
        <img className='w-6' src={isDarkMode ? subirDark : subir} alt="Setas apontadas para cima" />
      </button>
    </div>
  );
};

export default BotaoSubir;
