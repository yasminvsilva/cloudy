import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.svg';
import iconeHeader from '../assets/icone-header-mobile.svg';
import iconeContato from '../assets/icone-contato-mobile.svg';
import iconeContatoHover from '../assets/icone-contato-hover-mobile.svg';
import x from '../assets/x.svg'

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const navegacao = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const clicarFora = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsHeaderOpen(false);
    }
  };

  useEffect(() => {
    if (isHeaderOpen) {
      document.addEventListener('mousedown', clicarFora);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', clicarFora);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', clicarFora);
      document.body.style.overflow = 'auto';
    };
  }, [isHeaderOpen]);

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
      gap-8 font-karla hidden bg-branco'>
        <button
        onClick={() => navegacao('/')}
        className={`${location.pathname === '/' ? 'text-roxo-claro' : 'hover:text-roxo-claro'}`}
      >
        Home
      </button>
      <button
        onClick={() => navegacao('/guia')}
        className={`${location.pathname === '/guia' ? 'text-roxo-claro' : 'hover:text-roxo-claro'}`}
      >
        Guia
      </button>
      <button
        onClick={() => navegacao('/materiais')}
        className={`${location.pathname === '/materiais' ? 'text-roxo-claro' : 'hover:text-roxo-claro'}`}
      >
        Materiais
      </button>
      <button
        onClick={() => navegacao('/referencias')}
        className={`${location.pathname === '/referencias' ? 'text-roxo-claro' : 'hover:text-roxo-claro'}`}
      >
        Referências
      </button>

      </div>

      <div className='hidden md:flex'>
        <button className='
        lg:w-[170px]
        md:text-[14px] md:w-[145px] md:h-[32px]
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
      <AnimatePresence>
        {isHeaderOpen && (
          
            <>
              <motion.div
                className="fixed inset-0 bg-black opacity-55 z-40" 
                onClick={() => setIsHeaderOpen(false)} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              ></motion.div>
              
              <motion.div 
                ref={headerRef} 
                className="fixed top-0 left-0 w-[200px] bg-white border border-gray-300 shadow-lg p-4 z-50"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.15 }}
              >
                <div className='flex justify-between items-center h-12 mb-6 mr-2'>
                  <img className='w-[70px] ml-4 mt-1' src={logo} alt="" />
                  <img className='w-[25px] cursor-pointer' src={x} alt="" onClick={() => setIsHeaderOpen(false)} />
                </div>
                <nav>
                  <ul className="mb-6 flex flex-col ml-4 gap-6">
                    <li><button onClick={() => navegacao('/')}>Home</button></li>
                    <li><button onClick={() => navegacao('/guia')}>Guia</button></li>
                    <li><button onClick={() => navegacao('/referencias')}>Referências</button></li>
                    <li><button onClick={() => navegacao('/materiais')}>Materiais</button></li>
                  </ul>
                </nav>
              </motion.div>
            </>
        )}
      </AnimatePresence>
    </div>
  );
}
