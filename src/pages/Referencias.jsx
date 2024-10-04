import { motion } from 'framer-motion';
import Header from './Header'

export default function SobreNos() {
  return (
    <div>
        <Header />
      
        <div className='
        2xl:px-[180px]
        xl:px-[160px]
        lg:pt-[50px] lg:px-[80px]
        md:px-[40px] md:pt-[20px]
        '>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className='
            2xl:mt-20
            xl:text-[36px]
            lg:text-[32px] lg:mb-24
            font-karla font-bold text-[26px] mt-16 mb-16 text-center leading-[125%] dark:text-white'>A <span className='text-roxo-titulo'>credibilidade</span> é a <br></br> chave para a <span className=''>confiança</span></h1>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className='
              xl:text-[18px]
              font-overpass text-[16px] text-justify mb-6 dark:text-white'>A ciência comprova que o sono é de extrema importância para promover a <span className='font-bold text-azul-titulo'>saúde</span> e o <span className='font-bold text-azul-titulo'>bem-estar</span>. Um sono de má qualidade pode propiciar má disposição, um desempenho ruim em atividades, estresse e ocasionar distúrbios do sono, como a <span className='font-bold text-azul-titulo'>insônia</span>.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className='
            xl:text-[18px]
            font-overpass text-[16px] text-justify mb-6 dark:text-white'>Apesar de os mitos populares relatarem que a <span className='font-bold text-azul-titulo'>aromaterapia</span> é uma medida ineficaz, pesquisas indicam que a utilização terapêutica dos óleos essenciais surge como uma estratégia promissora na <span className='font-bold text-azul-titulo'>melhoria da qualidade do sono</span>.</p>
          </motion.div>
              
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className='
            xl:text-[18px]
            font-overpass text-[16px] text-justify mb-6 dark:text-white'>Estudos aprofundam ainda mais essa questão, revelando que o <span className='font-bold text-azul-titulo'>óleo essencial de lavanda</span> demonstra efeitos relaxantes e sedativos, atuando no sistema nervoso central para reduzir sintomas de <span className='font-bold text-azul-titulo'>ansiedade e insônia</span>.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className='
            xl:text-[18px]
            font-overpass text-[16px] text-justify mb-16 dark:text-white'>Portanto, não há como negar que a aromaterapia é uma opção <span className='font-bold text-azul-titulo'>valiosa</span> para aqueles que buscam aprimorar seu sono de maneira <span className='font-bold text-azul-titulo'>natural</span>, pois, além de melhorar a qualidade do sono, melhora a qualidade de vida.</p>
          </motion.div>
              
          <div className=''>
            <motion.div className='flex flex-col items-center justify-center px-[16px]'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h2 className='
              2xl:text-[21px] 2xl:mt-8
              xl:text-[20px]
              font-karla font-medium text-[18px] mb-[8px] text-center leading-tight dark:text-white'>Artigos de embasamento científico</h2>
              <p className='
              2xl:text-[15px]
              xl:text-[14px]
              lg:text-[13px]
              font-overpass text-cinza mb-10 text-[12px] dark:text-branco-t'>Clique para ser direcionado</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className='
            2xl:gap-20
            xl:text-[16px] xl:gap-12
            lg:flex lg:flex-row lg:gap-10 lg:mt-6
            text-roxo-titulo text-[14px] font-medium text-justify flex flex-col justify-center px-[20px] leading-[113%] dark:text-roxo-claro'>
                <a className='hover:cursor-pointer mb-8 text-center' href="https://recima21.com.br/index.php/recima21/article/view/2415" target="_blank">Influência dos ruídos brancos na qualidade do sono</a>
                <a className='hover:cursor-pointer mb-8 text-center' href="http://www.mastereditora.com.br/periodico/20140702_165353.pdf" target="_blank">Transtornos do ciclo sono vigília/circadiano</a>
                <a className='hover:cursor-pointer text-center' href="https://bjihs.emnuvens.com.br/bjihs/article/view/1462" target="_blank">Influência dos óleos essenciais na melhoria do sono</a>
          </motion.div>
        </div>
    </div>
  )
}
