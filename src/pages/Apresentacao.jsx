import { motion } from 'framer-motion';

export default function Apresentacao() {
  return (
    <div className="lg:flex lg:justify-between lg:items-start w-full lg:gap-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }} 
        className="lg:w-1/2">
        <h2 id="referencia" className="
        xl:w-[450px] xl:text-[35px] xl:leading-[135%]
        lg:w-82
        font-karla font-bold text-[23px] lg:text-[26px] mb-20">
          O Cloudy é a <span className="text-verde-titulo">melhor opção</span> para evitar noites em claro
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }} 
        className="lg:w-1/2 lg:text-right">
        <p className="
        2xl:mb-[100px]
        xl:text-[18px] xl-w-[500px]
        font-overpass text-[16px] text-justify mb-16">
          Encontramos a solução para transformar suas noites e proporcionar uma qualidade de vida melhor. Com nossa abordagem inovadora, você finalmente encontrará o sono profundo e restaurador que merece.
        </p>
      </motion.div>
    </div>
  )
}
