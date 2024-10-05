import React, { useState, useEffect } from 'react';

import lavanda from '../assets/iconeLavanda.svg';
import lavandaDark from '../assets/lavandaDark.svg'; // Adicione a imagem para o modo escuro
import luminaria from '../assets/iconeLuminaria.svg';
import luminariaDark from '../assets/luminariaDark.svg'; // Adicione a imagem para o modo escuro
import relogio from '../assets/iconeRelogio.svg';
import relogioDark from '../assets/relogioDark.svg'; // Adicione a imagem para o modo escuro
import celular from '../assets/iconeCelular.svg';
import celularDark from '../assets/celularDark.svg'; // Adicione a imagem para o modo escuro

const slides = [
  {
    imagem: lavanda,
    imagemDark: lavandaDark, // Adicione a imagem do modo escuro
    titulo: 'Óleo essencial de lavanda',
    descricao: 'Comprovadamente eficaz na redução de insônia',
  },
  {
    imagem: luminaria,
    imagemDark: luminariaDark, // Adicione a imagem do modo escuro
    titulo: 'Luminária',
    descricao: 'Com luzes que não interferem na produção de melatonina',
  },
  {
    imagem: relogio,
    imagemDark: relogioDark, // Adicione a imagem do modo escuro
    titulo: 'Relógio',
    descricao: 'Controle os seus horários e sincronize seus ciclos',
  },
  {
    imagem: celular,
    imagemDark: celularDark, // Adicione a imagem do modo escuro
    titulo: 'Aplicativo',
    descricao: 'Oferece sugestões personalizadas e lembretes',
  },
];

const Carrossel = ({ isDarkMode }) => { // Receba a prop isDarkMode
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <div
        className={`transform transition-transform duration-500 ease-in-out ${isAnimating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
        <div className='flex flex-col items-center'>
          <img 
            className='w-10 mb-3' 
            src={isDarkMode ? slides[currentIndex].imagemDark : slides[currentIndex].imagem} // Use a imagem de acordo com o modo
            alt={slides[currentIndex].titulo} 
          />
          <h3 className='font-karla font-bold text-[15px] text-center mb-1.5'>{slides[currentIndex].titulo}</h3>
          <p className='font-overpass text-[13px] text-center'>{slides[currentIndex].descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
