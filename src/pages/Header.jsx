import logo from '../assets/logo.svg'
import iconeHeader from '../assets/icone-header-mobile.svg'
import iconeContato from '../assets/icone-contato-mobile.svg'

// mobile
export default function Header() {
  return (
    <div className='flex justify-between'>
      <div className='hover:cursor-pointer flex justify-between'>
        <img src={logo} alt="" />
      </div>

      <div className='hidden md:flex gap-10 font-overpass'>
        <button>Home</button>
        <button>Guia</button>
        <button>Materiais</button>
        <button>Referências</button>
      </div>

      <div className='hidden md:flex font-karla'>
        <button className='border-2 border-roxo-claro rounded-[13px] w-[180px] h-[40px] text-roxo-claro hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out'>Entre em contato</button>
      </div>

      <div className='block md:hidden flex justify-between gap-1'>
        <img className='hover:cursor-pointer' src={iconeHeader} alt="" />
        <img className='hover:cursor-pointer' src={iconeContato} alt="" />
      </div>
    </div>
  )
}
