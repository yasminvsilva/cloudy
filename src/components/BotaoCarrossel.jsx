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
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);
      }, 600); // Tempo da animação
    }, 3000); // Intervalo para mudar o índice

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-[11px] rounded-[10px] transition-all duration-600 ${
            index === currentIndex ? 'w-11 bg-[#9EBFD1]' : 'w-4 bg-[#CFCFCF]'
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
