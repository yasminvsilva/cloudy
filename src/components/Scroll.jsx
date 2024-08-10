import scroll from '../assets/scroll.svg'

const Scroll = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById('referencia')

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="mt-[60px] mb-[94px] flex items-center justify-center">
      <img
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
        src={scroll}
        alt="Scroll"
        onClick={handleScroll}
      />
    </div>
  );
};

export default Scroll;
