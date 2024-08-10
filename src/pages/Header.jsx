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

      <div className='flex justify-between gap-1'>
        <img className='hover:cursor-pointer' src={iconeHeader} alt="" />
        <img className='hover:cursor-pointer' src={iconeContato} alt="" />
      </div>
    </div>
  )
}
