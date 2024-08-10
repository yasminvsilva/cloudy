import { useNavigate } from 'react-router-dom'

function NavegacaoBotao() {
    const navigate = useNavigate();
  
    const irParaSobreNos = () => {
      navigate('/sobrenos');
    };
  
    return (
      <button
        className='
          lg:w-[167px] lg:h-[56px] lg:rounded-[15px] lg:text-[18px] lg:w-[190px]
          w-[160px] h-[38px] font-karla text-[14px] text-roxo-claro border-2 border-roxo-claro rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg hover:cursor-pointer hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out'
        onClick={irParaSobreNos}
      >
        Sobre nós
      </button>
    );
  }
  
  export default NavegacaoBotao;
  