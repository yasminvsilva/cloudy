import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logo.svg'
import iconeHeader from '../assets/icone-header-mobile.svg'
import iconeContato from '../assets/icone-contato-mobile.svg'
import iconeContatoHover from '../assets/icone-contato-hover-mobile.svg'

// mobile
export default function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const navegacao = useNavigate()

  return (
    <div className='flex justify-between'>
      <div className='hover:cursor-pointer flex justify-between' onClick={() => navegacao('/')}>
        <img src={logo} alt="Logo" />
      </div>

      {/* header desktop */}
      {/* <div className='hidden md:flex gap-10 font-overpass'>
        <button>Home</button>
        <button>Guia</button>
        <button>Materiais</button>
        <button>Referências</button>
      </div>

      <div className='hidden md:flex font-karla'>
        <button className='border-2 border-roxo-claro rounded-[13px] w-[180px] h-[40px] text-roxo-claro hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out'>Entre em contato</button>
      </div> */}
      
      {/* header mobile */}
      <div className='flex justify-between gap-1'>
        <img className='hover:cursor-pointer' src={iconeHeader} alt="" />
        <img
        className="hover:cursor-pointer transition-transform duration-300 ease-in-out"
        src={isHovered ? iconeContatoHover : iconeContato}
        alt="Ícone de Contato"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
        {/* <img className='hover:cursor-pointer' src={iconeContato} alt="" /> */}
      </div>
    </div>
  )
}
