import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.svg';
import iconeHeader from '../assets/icone-header-mobile.svg';
import iconeContato from '../assets/icone-contato-mobile.svg';
import iconeContatoHover from '../assets/icone-contato-hover-mobile.svg';
import x from '../assets/x.svg'
import xDark from '../assets/xDark.svg'

import iconeHDark from '../assets/iconeHDark.svg'
import iconeCDark from '../assets/iconeCDark.svg'

import logoDark from '../assets/logoDark.svg'

import luaMobile from '../assets/luaMobile.svg'
import luaHovered from '../assets/luaHovered.svg'
import solMobile from '../assets/solMobile.svg'

import luaDesktop from '../assets/luaDesktop.svg'
import luaDeskHover from '../assets/luaDeskHover.svg'

import solLight from '../assets/solLight.svg'

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLuaHovered, setLuaisHovered] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

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
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    // <div className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
    //   hasScrolled ? 'bg-white dark:bg-background-black shadow-lg py-6' : ''
    // }`}>

      <div className='flex w-full justify-between max-w-[1440px]'>
        <div className='
      md:w-[80px]
      hover:cursor-pointer flex justify-between dark:w-[83px]' onClick={() => navegacao('/')}>
          <img src={isDarkMode ? logoDark : logo} alt="Logo" />
        </div>

        <div className='
      lg:flex lg:gap-10
      md:flex md:text-[14px] md:gap-5 justify-center
      gap-8 font-karla hidden'>
          <button
            onClick={() => navegacao('/')}
            className={`${location.pathname === '/' ? 'text-roxo-claro' : 'dark:text-branco dark:hover:text-roxo-claro hover:text-roxo-claro'}`}
          >
            Home
          </button>
          <button
            onClick={() => navegacao('/guia')}
            className={`${location.pathname === '/guia' ? 'text-roxo-claro' : 'dark:text-branco dark:hover:text-roxo-claro hover:text-roxo-claro'}`}
          >
            Guia
          </button>
          <button
            onClick={() => navegacao('/materiais')}
            className={`${location.pathname === '/materiais' ? 'text-roxo-claro' : 'dark:text-branco dark:hover:text-roxo-claro hover:text-roxo-claro'}`}
          >
            Materiais
          </button>
          <button
            onClick={() => navegacao('/referencias')}
            className={`${location.pathname === '/referencias' ? ' text-roxo-claro' : 'dark:text-branco dark:hover:text-roxo-claro hover:text-roxo-claro'} `}
          >
            Referências
          </button>
        </div>

        <div className='hidden md:flex md:gap-3'>
          <a href="mailto:contate.allways@gmail.com">
            <button className='
          lg:w-[170px]
          md:text-[14px] md:w-[145px] md:h-[32px]
          font-karla border-2 border-roxo-claro rounded-[15px] text-roxo-claro hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out
          
          dark:text-roxo-titulo dark:border-roxo-titulo dark:hover:bg-roxo-titulo dark:hover:text-white dark:hover:border-roxo-titulo'>
              Entre em contato
            </button>
          </a>

          <button onClick={() => setIsDarkMode(!isDarkMode)} className="">
            <img className='hidden md:block md:w-8'
              src={isDarkMode ? solLight : luaDesktop}
              alt="Ícone de lua"
              onMouseEnter={() => setLuaisHovered(true)}
              onMouseLeave={() => setLuaisHovered(false)} />
          </button>
        </div>

        <div className='block md:hidden flex justify-between gap-1'>
          <img
            className='hover:cursor-pointer'
            src={isDarkMode ? iconeHDark : iconeHeader}
            alt=""
            onClick={toggleHeader}
          />
          <a href="mailto:contate.allways@gmail.com">
            <img
              className="hover:cursor-pointer transition-transform duration-300 ease-in-out"
              src={isDarkMode ? iconeCDark : iconeContato}
              alt="Ícone de Contato"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </div>

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
                className="fixed top-0 left-0 w-[250px] h-full bg-white border border-gray-300 shadow-lg p-4 z-50 dark:bg-background-black dark:border-background-black"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.15 }}
              >
                <div className='flex justify-between items-center h-16 mb-6 mr-2'>
                  <img className='w-[70px] ml-4 mt-1' src={isDarkMode ? logoDark : logo} alt="" />
                  <img className='w-[25px] cursor-pointer' src={isDarkMode ? xDark : x} alt="" onClick={() => setIsHeaderOpen(false)} />
                </div>

                <hr className='border-1 mb-6 ml-4 mr-2 dark:border-linha' />

                <nav>
                  <ul className="mb-6 flex flex-col ml-4 gap-6">
                    <li><button onClick={() => navegacao('/')}
                      className={`${location.pathname === '/' ? 'text-roxo-claro font-karla dark:hover:text-roxo-titulo' : 'dark:text-white dark:hover:text-roxo-titulo hover:text-roxo-claro font-karla'}`}>Home</button></li>
                    <li><button onClick={() => navegacao('/guia')}
                      className={`${location.pathname === '/guia' ? 'text-roxo-claro font-karla dark:hover:text-roxo-titulo' : 'dark:text-white dark:hover:text-roxo-titulo hover:text-roxo-claro font-karla'}`}>Guia</button></li>
                    <li><button onClick={() => navegacao('/referencias')}
                      className={`${location.pathname === '/referencias' ? 'text-roxo-claro font-karla dark:hover:text-roxo-titulo' : 'dark:text-white hover:text-roxo-claro font-karla'}`}>Referências</button></li>
                    <li><button onClick={() => navegacao('/materiais')}
                      className={`${location.pathname === '/materiais' ? 'text-roxo-claro font-karla dark:hover:text-roxo-titulo' : 'dark:text-white hover:text-roxo-claro font-karla'}`}>Materiais</button></li>
                  </ul>
                </nav>

                <hr className='border-1 mb-6 ml-4 mr-2 dark:border-linha' />

                <nav>
                  <ul className='ml-4'>
                    <li>
                      <button
                        className='flex gap-3 text-roxo-claro font-medium dark:text-roxo-titulo'
                        onClick={() => setIsDarkMode(!isDarkMode)}
                      >
                        <img src={isDarkMode ? solMobile : luaMobile} alt="" />
                        {isDarkMode ? 'Modo claro' : 'Modo escuro'}  {/* Muda o texto conforme o estado */}
                      </button>
                    </li>
                  </ul>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    // </div>
  );
}
