import { motion } from 'framer-motion';
import images from '../assets/imagensTeste.svg'
import Scroll from '../components/Scroll'
import BotaoScroll from '../components/BotaoScroll'
import NavegacaoBotao from '../components/NavegacaoBotao'
import imagensDark from '../assets/fotoInicialDark.svg'

export default function Inicial({ isDarkMode }) {
  return (
    
    <div>
        <div className='
        lg:mt-[40px]
        md:flex md:justify-between md:mt-[20px]'>
            <div className=''>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }} className='
              2xl:text-[55px]
              xl:text-[50px]
              lg:text-[40px] lg:mt-24
              md:mt-20 md:text-[29px]
              font-karla font-bold text-[8vw] mt-16 mb-10 leading-[113%] dark:text-white'><span className='text-roxo-titulo dark:text-roxo-claro'>Recupere</span> suas noites, <br></br> <span className='text-roxo-titulo dark:text-roxo-claro'>renove</span> suas energias</motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}className='
              2xl:w-[520px] 2xl:text-[20px] 2xl:mt-14 2xl:mb-16
              xl:w-[450px]
              lg:w-96 lg:mt-12 lg:mb-12
              md:w-72
              font-overpass text-[18px] text-justify mb-10 dark:text-white'>O Cloudy é um aromatizador de óleo essencial de lavanda feito para melhorar as suas noites de sono.</motion.p>
      
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }} className='
              md:justify-normal
              flex gap-4 mb-20'>
                <BotaoScroll />
                <NavegacaoBotao />
              </motion.div>
            </div>
            
            <div className='
            lg:w-5/12
            md:w-[330px]
            flex justify-center w-auto h-auto'>
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src={(isDarkMode ? imagensDark : images)}
                alt=""
              />
            </div>
        </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='
        flex justify-center mt-16'
      >
        <Scroll isDarkMode={isDarkMode} />
      </motion.div>
        
    </div>
  )
}
