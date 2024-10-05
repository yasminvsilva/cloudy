import Carrossel from '../components/Carrossel'
import BotaoCarrossel from '../components/BotaoCarrossel'
import Cards from '../components/Cards'

import { motion } from 'framer-motion';

export default function Diferencial({ isDarkMode }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div>
          <h2 className='
            xl:text-[35px]
            lg:text-[26px] lg:mt-10 lg:mb-8
            font-karla font-bold text-[23px] mb-20 dark:text-white'>Qual é o <span className='text-azul-titulo'>diferencial</span> do Cloudy?</h2>
          <p className='
            xl:text-[18px] xl:w-2/4 xl:mt-12
            lg:w-2/3
            font-overpass text-[16px] text-justify mb-16 dark:text-white'>O nosso produto te oferece diversas funcionalidades que se destacam, tudo para garantir a sua qualidade de sono.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >

        <div className='md:hidden lg:block'>
          <Cards isDarkMode={isDarkMode} />
        </div>

        <div className='
        lg:hidden
        relative bg-secao-diferencial w-56 h-48 px-6 py-6 rounded-3xl flex flex-col items-center justify-center mb-7 mx-auto'>
          <Carrossel />
        </div>

        <div className='
        lg:hidden
        mb-20'>
          <BotaoCarrossel />
        </div>
      </motion.div>

    </div>
  )
}

