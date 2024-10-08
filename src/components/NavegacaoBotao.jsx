import { useNavigate } from 'react-router-dom'

function NavegacaoBotao() {
    const navegacao = useNavigate();
  
    const irParaSobreNos = () => {
      navegacao('/sobrenos');
    };
  
    return (
      <button
        className='
        2xl:w-[180px] 2xl:h-[46px] 2xl:text-[17px]
        lg:w-[160px] lg:h-[42px] lg:text-[16px]
        w-[140px] h-[38px] font-karla text-[14px] text-roxo-claro border-2 border-roxo-claro rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg hover:cursor-pointer hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out
        
        dark:text-roxo-titulo dark:border-roxo-titulo dark:hover:bg-roxo-titulo dark:hover:text-background-black dark:hover:border-roxo-titulo'
        onClick={irParaSobreNos}
      >
        Sobre nós
      </button>
    );
  }
  
  export default NavegacaoBotao;
  