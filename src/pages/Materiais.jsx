import { motion } from 'framer-motion';
import Header from "./Header"
import MaterialCarrossel from '../components/MaterialCarrossel'

export default function Materiais() {
  return (
    <div>
        <Header />

        <div className="
        2xl:px-[180px]
        xl:px-[160px]
        lg:pt-[50px] lg:px-[80px]
        md:px-[40px] md:pt-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="
            2xl:mt-20
            xl:text-[36px]
            lg:text-[32px] lg:mb-20
            font-karla font-bold text-[25px] text-center mt-16 mb-16 leading-[125%]">Conheça os <span className="text-roxo-titulo">materiais</span> <br></br> por trás do Cloudy</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="
            xl:text-[18px]
            font-overpass text-justify mb-6 text-[16px]">Aqui você encontrará uma visão completa e detalhada dos componentes que utilizamos para dar vida ao <span className='font-bold text-azul-titulo'>Cloudy</span>. O nosso projeto é composto por várias partes integradas, cada uma desempenhando um papel crucial na funcionalidade geral.</p>
          </motion.div>
            
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="
            xl:text-[18px]
            font-overpass text-justify text-[16px] mb-20"> Desde o controle do <span className='font-bold text-azul-titulo'>aromatizador</span> até a reprodução de <span className='font-bold text-azul-titulo'>música</span>, iluminação <span className='font-bold text-azul-titulo'>RGB</span> e a exibição do <span className='font-bold text-azul-titulo'>tempo</span>, cada seção apresenta componentes específicos que colaboram para o funcionamento harmonioso do sistema.</p>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }} 
            className='relative border-2 border-roxo-claro w-[270px] h-[250px] px-8 py-8 rounded-3xl flex flex-col items-center justify-center mb-4 mx-auto'>
          <MaterialCarrossel />
        </motion.div>
    </div>
  )
}
