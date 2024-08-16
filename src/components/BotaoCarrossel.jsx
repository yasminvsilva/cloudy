import React, { useState, useEffect } from 'react';

const slides = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

const BotaoCarrossel = () => {
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
    <div className="flex justify-center mt-4 space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-[11px] rounded-[10px] transition-all duration-600 ${
            index === currentIndex ? 'w-11 bg-azul-carrossel' : 'w-4 bg-cinza-carrossel'
          } ${isAnimating && index === currentIndex ? 'animate-pulse' : ''}`}
          onClick={() => {
            setIsAnimating(true);
            setTimeout(() => {
              setCurrentIndex(index);
              setIsAnimating(false);
            }, 600);
          }}
        />
      ))}
    </div>
  );
};

export default BotaoCarrossel;
