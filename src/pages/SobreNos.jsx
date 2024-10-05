import { motion } from 'framer-motion';

import logoUnasp from '../assets/logo-unasp.svg';
import imagens from '../assets/imagens-sobre-nos.svg';

import unaspDark from '../assets/unaspDark.svg';

export default function SobreNos({ isDarkMode }) {
  return (
    <div>
      <div className='
      2xl:px-[100px]
      xl:px-[30px]
      lg:pt-[50px] lg:px-[0px]
      md:px-[40px] md:pt-[20px]'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className='
          2xl:mt-20
          xl:text-[36px]
          lg:text-[32px] lg:mb-24
          font-karla font-bold text-[26px] mt-16 mb-16 text-center leading-[125%] dark:text-white'>
            <span className=''>Saiba</span> quem são os <br></br> nossos{' '} 
            <span className='text-roxo-titulo'>desenvolvedores</span>
          </h1>
        </motion.div>

        <div className='lg:flex lg:justify-between'>
          <div className='lg:w-2/4'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className='
              xl:text-[18px]
              font-overpass text-[16px] text-justify mb-6 dark:text-white'>
                Somos um grupo de estudantes do Centro Universitário Adventista de São Paulo, cursando o terceiro ano do ensino médio. Nossa equipe é formada por: João Pedro Costa, Mariana Alves e Yasmin Vitória.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className='
              xl:text-[18px]
              font-overpass text-[16px] text-justify mb-6 dark:text-white'>
                Nosso projeto surgiu da compreensão das dificuldades enfrentadas pelas pessoas em relação aos <span className='font-bold text-azul-titulo'>distúrbios de sono</span>. Nosso objetivo é criar soluções que melhorem a <span className='font-bold text-azul-titulo'>qualidade de vida</span> por meio de tecnologias acessíveis e eficazes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className='
              xl:text-[18px]
              font-overpass text-[16px] text-justify mb-12 dark:text-white'>
                Vimos na <span className='font-bold text-azul-titulo'>aromaterapia</span> uma oportunidade de desenvolver um dispositivo que, não apenas ajudasse a combater os distúrbios do sono, mas também oferecesse um ambiente relaxante por meio da <span className='font-bold text-azul-titulo'>música</span> e <span className='font-bold text-azul-titulo'>iluminação âmbar</span>.
              </p>
            </motion.div>
          </div>

          <div className='2xl:mt-8 2xl:mr-8 xl:mt-6 lg:mt-10'>
            <motion.div
              className='flex justify-center mb-10'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <img className='
              xl:w-[350px]
              hover:cursor-pointer' src={imagens} alt="" />
            </motion.div>

            <motion.div
              className='flex justify-center'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <img src={isDarkMode ? unaspDark : logoUnasp} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
