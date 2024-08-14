import { useNavigate } from 'react-router-dom'

function NavegacaoBotao() {
    const navigate = useNavigate();
  
    const irParaSobreNos = () => {
      navigate('/sobrenos');
    };
  
    return (
      <button
        className='
        2xl:w-[180px] 2xl:h-[46px] 2xl:text-[17px]
        lg:w-[160px] lg:h-[42px] lg:text-[16px]
        w-[140px] h-[38px] font-karla text-[14px] text-roxo-claro border-2 border-roxo-claro rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg hover:cursor-pointer hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out'
        onClick={irParaSobreNos}
      >
        Sobre nós
      </button>
    );
  }
  
  export default NavegacaoBotao;
  