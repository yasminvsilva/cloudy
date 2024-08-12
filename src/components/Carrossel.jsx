import React, { useState, useEffect } from 'react'
import lavanda from '../assets/iconeLavanda.svg'
import luminaria from '../assets/iconeLuminaria.svg'
import relogio from '../assets/iconeRelogio.svg'
import celular from '../assets/iconeCelular.svg'

const slides = [
  {
    image: lavanda,
    title: 'Óleo essencial de lavanda',
    description: 'Comprovadamente eficaz na redução de insônia'
  },
  {
    image: luminaria,
    title: 'Luminária',
    description: 'Com luzes que não interferem na produção de melatonina'
  },
  {
    image: relogio,
    title: 'Relógio',
    description: 'Controle os seus horários e sincronize seus ciclos'
  },
  {
    image: celular,
    title: 'Aplicativo',
    description: 'Oferece sugestões personalizadas e lembretes'
  }
];

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);}, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <div
        className={`transform transition-transform duration-500 ease-in-out ${ isAnimating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100' }`}>
        <div className='flex flex-col items-center'>
          <img className='w-10 mb-3' src={slides[currentIndex].image} alt={slides[currentIndex].title} />
          <h3 className='font-karla font-bold text-[15px] text-center mb-1.5'>{slides[currentIndex].title}</h3>
          <p className='font-overpass text-[13px] text-center'>{slides[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
