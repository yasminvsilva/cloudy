import certo from '../assets/iconeCerto.svg'
import imagensBeneficios from '../assets/imagensBeneficios.svg'

import { motion } from 'framer-motion';

export default function Beneficios() {
    return (

        <div className='md:flex md:gap-10 lg:gap-6 xl:gap-16 2xl:gap-20'>

            <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className='md:order-2 md:flex-1'>
                <h2 className='
            font-karla font-bold text-[23px] mb-16
            md:w-[100%] md:text-[3vw] md:mb-[4vw]
            lg:text-[2.55vw] lg:mb-[3.2vw]
            xl:text-[2.73vw]
            2xl:text-[2.05vw]
          '>
                    Para nós, a qualidade do <br></br> seu sono é <span className='text-roxo-titulo'>prioridade</span>
                </h2>
                <p className='
            font-overpass text-[16px] mb-16 text-justify
            md:w-[100%] md:text-[2vw] md:mb-[4vw]
            lg:text-[1.6vw] lg:mb-[3.2vw]
            xl:text-[1.4vw]
            2xl:text-[1.04vw]
          '>
                    Dormir bem é ser saudável. Conheça alguns dos benefícios que você vai ter ao adquirir o Cloudy:
                </p>

                <div className='md:flex md:flex-wrap md:gap-6 md:items-center xl:gap-10'>
                    <div className='md:flex-grow md:basis-[45%] flex flex-col justify-between'>
                        <div className='flex gap-2 mb-2.5 md:mb-4 items-center xl:gap-4'>
                            <img className='w-5 md:w-4 xl:w-5' src={certo} />
                            <p className='font-overpass text-[16px] md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.04vw]'>Redução do distúrbio de insônia</p>
                        </div>
                        <div className='flex gap-2 mb-2.5 md:mb-4 items-center xl:gap-4'>
                            <img className='w-5 md:w-4 xl:w-5' src={certo} />
                            <p className='font-overpass text-[16px] md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.04vw]'>Criação de hábitos saudáveis de sono</p>
                        </div>
                        <div className='flex gap-2 mb-2.5 md:mb-4 items-center xl:gap-4'>
                            <img className='w-5 md:w-4 xl:w-5' src={certo} />
                            <p className='font-overpass text-[16px] md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.04vw]'>Melhora na qualidade do sono</p>
                        </div>
                    </div>

                    <div className='md:flex-grow md:basis-[45%] flex flex-col justify-between'>
                        <div className='flex gap-2 mb-2.5 md:mb-4 items-center xl:gap-4'>
                            <img className='w-5 md:w-4 xl:w-5' src={certo} />
                            <p className='font-overpass text-[16px] md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.04vw]'>Aumento da energia diurna</p>
                        </div>
                        <div className='flex gap-2 mb-2.5 md:mb-4 items-center xl:gap-4'>
                            <img className='w-5 md:w-4 xl:w-5' src={certo} />
                            <p className='font-overpass text-[16px] md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.04vw]'>Diminuição do estresse</p>
                        </div>
                        <div className='flex gap-2 mb-2.5 md:mb-4 items-center xl:gap-4'>
                            <img className='w-5 md:w-4 xl:w-5' src={certo} />
                            <p className='font-overpass text-[16px] md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.4vw] 2xl:text-[1.04vw]'>Conveniência e facilidade de uso</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className='
            md:flex-1 md:flex md:justify-center md:items-align'>
                <img className='mt-16 md:mt-12 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[500px] xl:h-[380px] xl:mt-6' src={imagensBeneficios} alt="Benefícios" />
            </motion.div>
        </div>
    )
}

