import scroll from '../assets/scroll.svg'

const Scroll = () => {
  const ativarScroll = () => {
    const pegarElemento = document.getElementById('referencia')

    if (pegarElemento) {
      pegarElemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="~
    2xl:mt-[32px] 2xl:mb-[150px]
    lg:mt-[40px]
    md:mt-[16px]
    mt-[60px] mb-[94px] flex items-center justify-center">
      <img
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
        src={scroll}
        alt="Scroll"
        onClick={ativarScroll}
      />
    </div>
  );
};

export default Scroll;
