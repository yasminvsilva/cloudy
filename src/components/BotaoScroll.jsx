const BotaoScroll = () => {
  const ativarScroll = () => {
    const pegarElemento = document.getElementById('referencia');

    if (pegarElemento) {
      pegarElemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  };

  return (
    <button
      className='
      2xl:w-[180px] 2xl:h-[46px] 2xl:text-[17px]
      lg:w-[160px] lg:h-[42px] lg:text-[16px]
      w-[140px] h-[38px] font-karla text-branco text-[14px] bg-roxo-claro rounded-l-xl rounded-br-3xl hover:cursor-pointer border-2 border-transparent hover:bg-branco hover:text-roxo-claro hover:border-roxo-claro hover:border-2 transition-colors duration-300 ease-in-out
      
      dark:text-background-black dark:bg-roxo-titulo dark:hover:bg-background-black dark:hover:text-roxo-titulo dark:hover:border-roxo-titulo'
      onClick={ativarScroll}>
      Saiba mais
    </button>
  );
};

export default BotaoScroll;
