import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logo.svg'
import iconeHeader from '../assets/icone-header-mobile.svg'
import iconeContato from '../assets/icone-contato-mobile.svg'
import iconeContatoHover from '../assets/icone-contato-hover-mobile.svg'

// mobile
export default function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)
  const navegacao = useNavigate()
  const headerRef = useRef(null)

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen)
  }

const clicarFora = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsHeaderOpen(false)
    }
  }

  useEffect(() => {
    if (isHeaderOpen) {
      document.addEventListener('mousedown', clicarFora)
    } else {
      document.removeEventListener('mousedown', clicarFora)
    }

    return () => {
      document.removeEventListener('mousedown', clicarFora)
    }
  }, [isHeaderOpen])

  return (
    <div className='flex justify-between'>
      <div className='
      md:w-[80px]
      hover:cursor-pointer flex justify-between' onClick={() => navegacao('/')}>
        <img src={logo} alt="Logo" />
      </div>

      {/* header desktop */}
      <div className=' 
      lg:flex lg:gap-10
      md:flex md:text-[14px] md:gap-5 justify-center
      gap-8 font-karla hidden'>
        <button onClick={() => navegacao('/')}>Home</button>
        <button onClick={() => navegacao('/guia')}>Guia</button>
        <button onClick={() => navegacao('/materiais')}>Materiais</button>
        <button onClick={() => navegacao('/referencias')}>Referências</button>
      </div>

      <div className='hidden md:flex'>
        <button className='
        lg:w-[170px]
        md:text-[14px] md:w-[145px] md:h-[30px]
        font-karla border-2 border-roxo-claro rounded-[15px] text-roxo-claro hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out'>
          Entre em contato
        </button>
      </div>
      
      {/* header mobile */}
      <div className='block md:hidden flex justify-between gap-1'>
        <img 
          className='hover:cursor-pointer' 
          src={iconeHeader} 
          alt="" 
          onClick={toggleHeader} 
        />
        <img
          className="hover:cursor-pointer transition-transform duration-300 ease-in-out"
          src={isHovered ? iconeContatoHover : iconeContato}
          alt="Ícone de Contato"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* menu mobile */}
      {isHeaderOpen && (
        <div ref={headerRef} className='font-karla text-[16px] block md:hidden w-[200px] h-[250px] flex items-center absolute top-0 left-0 right-0 bg-branco border-1 shadow-lg p-4'>
          <nav>
            <ul className='flex flex-col ml-6 gap-6'>
              <li><button onClick={() => navegacao('/')}>Home</button></li>
              <li><button onClick={() => navegacao('/guia')}>Guia</button></li>
              <li><button onClick={() => navegacao('/referencias')}>Referências</button></li>
              <li><button onClick={() => navegacao('/materiais')}>Materiais</button></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
