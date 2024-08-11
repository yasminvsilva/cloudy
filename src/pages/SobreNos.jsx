import { motion } from 'framer-motion';
import Header from './Header';

import logoUnasp from '../assets/logo-unasp.svg';
import imagens from '../assets/imagens-sobre-nos.svg';

export default function SobreNos() {
  return (
    <div>
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1 className='font-karla font-bold text-[26px] mt-16 mb-16 text-center leading-[125%]'>
          <span className='text-verde-titulo'>Saiba</span> quem são os nossos{' '}
          <span className='text-roxo-titulo'>desenvolvedores</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <p className='font-overpass text-[16px] text-justify mb-6'>
          Somos um grupo de estudantes do Centro Universitário Adventista de São Paulo, cursando o terceiro ano do ensino médio. Nossa equipe é formada por: João Pedro Costa, Mariana Alves e Yasmin Vitória.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className='font-overpass text-[16px] text-justify mb-6'>
          Nosso projeto surgiu da compreensão das dificuldades enfrentadas pelas pessoas em relação aos distúrbios de sono. Nosso objetivo é criar soluções que melhorem a qualidade de vida por meio de tecnologias acessíveis e eficazes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <p className='font-overpass text-[16px] text-justify mb-12'>
          Vimos na aromaterapia uma oportunidade de desenvolver um dispositivo que, não apenas ajudasse a combater os distúrbios do sono, mas também oferecesse um ambiente relaxante por meio da música e iluminação âmbar.
        </p>
      </motion.div>

      <motion.div
        className='flex justify-center mb-10'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <img className='hover:cursor-pointer' src={imagens} alt="" />
      </motion.div>

      <motion.div
        className='flex justify-center'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <img src={logoUnasp} alt="" />
      </motion.div>
    </div>
  );
}
