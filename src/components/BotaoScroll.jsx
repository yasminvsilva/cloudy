const BotaoScroll = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById('referencia');

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  };

  return (
    <button
      className='
      lg:w-[160px] lg:h-[42px] lg:text-[16px]
      w-[140px] h-[38px] font-karla text-branco text-[14px] bg-roxo-claro rounded-l-xl rounded-br-3xl hover:cursor-pointer border-2 border-transparent hover:bg-branco hover:text-roxo-claro hover:border-roxo-claro hover:border-2 transition-colors duration-300 ease-in-out'
      onClick={handleScroll}>
      Saiba mais
    </button>
  );
};

export default BotaoScroll;
