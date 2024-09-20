import React, { useState, useEffect } from 'react';

import arduino from '../assets/materiais/arduino.svg';
import arduinoNano from '../assets/materiais/arduino-nano.svg';
import moduloRTC from '../assets/materiais/moduloRTC.svg';
import diodo from '../assets/materiais/diodo.svg';
import botao from '../assets/materiais/botao.svg';
import conversor from '../assets/materiais/conversor.svg';
import capacitor from '../assets/materiais/capacitor.svg';
import dfPlayer from '../assets/materiais/df.svg';
import jumpers from '../assets/materiais/jumpers.svg';
import moduloTP4056 from '../assets/materiais/modulo-tp4056.svg';
import resistor from '../assets/materiais/resistor.svg';
import umidificadora from '../assets/materiais/umidificadora.svg';
import protoboard from '../assets/materiais/protoboard.svg';
import leds from '../assets/materiais/leds.svg';
import altoFalante from '../assets/materiais/alto-falante.svg';

const slides = [
  { imagem: arduino, titulo: 'Arduíno Uno', descricao: 'Microcontrolador versátil para diversos projetos.' },
  { imagem: arduinoNano, titulo: 'Arduíno Nano', descricao: 'Versão compacta do Arduíno, ideal para protótipos menores.' },
  { imagem: moduloRTC, titulo: 'Módulo RTC', descricao: 'Módulo de relógio para projetos que requerem controle preciso de tempo.' },
  { imagem: diodo, titulo: 'Diodo', descricao: 'Componente eletrônico que permite a passagem de corrente em uma única direção.' },
  { imagem: botao, titulo: 'Botão', descricao: 'Interruptor básico utilizado em uma variedade de circuitos eletrônicos.' },
  { imagem: conversor, titulo: 'Conversor de Tensão', descricao: 'Dispositivo para ajustar a tensão elétrica em circuitos.' },
  { imagem: capacitor, titulo: 'Capacitor', descricao: 'Componente utilizado para armazenar energia elétrica temporariamente.' },
  { imagem: dfPlayer, titulo: 'DFPlayer Mini', descricao: 'Módulo de áudio para reproduzir sons e músicas em projetos eletrônicos.' },
  { imagem: jumpers, titulo: 'Jumpers', descricao: 'Cabos utilizados para conectar componentes em uma protoboard.' },
  { imagem: moduloTP4056, titulo: 'Módulo TP4056', descricao: 'Carregador de baterias de lítio, com proteção contra sobrecarga.' },
  { imagem: resistor, titulo: 'Resistor', descricao: 'Componente que limita a corrente em um circuito.' },
  { imagem: umidificadora, titulo: 'Umidificadora', descricao: 'Dispositivo utilizado para aumentar a umidade do ar em ambientes fechados.' },
  { imagem: protoboard, titulo: 'Protoboard', descricao: 'Componente que limita a corrente em um circuito.' },
  { imagem: leds, titulo: 'LEDs', descricao: 'Diodos emissores de luz, eficientes e amplamente utilizados em projetos eletrônicos.' },
  { imagem: altoFalante, titulo: 'Alto-Falante', descricao: 'Dispositivo para emissão de som em sistemas eletrônicos.' },
];

const MaterialCarrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);
      }, 600);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <div className={`transform transition-transform duration-500 ease-in-out ${isAnimating ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-10 mb-7 w-[60px]' src={slides[currentIndex].imagem} alt={slides[currentIndex].titulo} />
          <h3 className='font-karla font-bold text-[16px] text-center mb-1.5'>{slides[currentIndex].titulo}</h3>
          <p className='font-overpass text-[14px] text-center'>{slides[currentIndex].descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default MaterialCarrossel;
