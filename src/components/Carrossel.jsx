import React, { useState, useEffect } from 'react'

import lavanda from '../assets/iconeLavanda.svg'
import luminaria from '../assets/iconeLuminaria.svg'
import relogio from '../assets/iconeRelogio.svg'
import celular from '../assets/iconeCelular.svg'

const slides = [
  {
    imagem: lavanda,
    titulo: 'Óleo essencial de lavanda',
    descricao: 'Comprovadamente eficaz na redução de insônia'
  },
  {
    imagem: luminaria,
    titulo: 'Luminária',
    descricao: 'Com luzes que não interferem na produção de melatonina'
  },
  {
    imagem: relogio,
    titulo: 'Relógio',
    descricao: 'Controle os seus horários e sincronize seus ciclos'
  },
  {
    imagem: celular,
    titulo: 'Aplicativo',
    descricao: 'Oferece sugestões personalizadas e lembretes'
  }
];

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);}, 600);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <div
        className={`transform transition-transform duration-500 ease-in-out ${ isAnimating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100' }`}>
        <div className='flex flex-col items-center'>
          <img className='w-10 mb-3' src={slides[currentIndex].imagem} alt={slides[currentIndex].titulo} />
          <h3 className='font-karla font-bold text-[15px] text-center mb-1.5'>{slides[currentIndex].titulo}</h3>
          <p className='font-overpass text-[13px] text-center'>{slides[currentIndex].descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
