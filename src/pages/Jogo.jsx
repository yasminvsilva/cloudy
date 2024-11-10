import { motion } from 'framer-motion';

export default function Jogo() {
  return (
    <div className="xl:px-[160px] lg:pt-[50px] md:px-[40px] md:pt-[20px]">
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="
            xl:text-[36px] xl:mb-20
            lg:text-[32px] lg:mb-20
            font-karla font-bold text-[26px] mt-16 mb-16 text-center leading-[125%] dark:text-white">Desvende o jogo<br></br> <span className="font-bold text-roxo-titulo">Lost Essences</span></h1>
        <p className='xl:text-[18px]
            font-overpass text-justify mb-6 text-[16px] dark:text-white'>O <span className="font-bold text-azul-titulo">Lost Essences</span> é um jogo que mistura os estilos <span className="font-bold text-azul-titulo">top-down</span> e <span className="font-bold text-azul-titulo">plataforma</span>, dando uma dinamicidade maior na experiência de jogo. A história se contextualiza na aldeia Hayakimura, onde os primogênitos das três famílias mais influentes são enviados em uma missão: recuperar os quatro <span className="font-bold text-azul-titulo">óleos essenciais</span> que foram roubados da aldeia.</p>
        <p className='xl:text-[18px]
            font-overpass text-justify text-[16px] mb-16 dark:text-white'>O jogo foi feito pixel por pixel pelos nossos desenvolvedores, desde a criação dos personagens até o desenho dos cenários. Nossas inspirações para o desenvolvimento do jogo foram <span className="font-bold text-azul-titulo">Cuphead</span>, <span className="font-bold text-azul-titulo">Omori</span> e <span className="font-bold text-azul-titulo">Stardew Valley</span>, influenciando na jogabilidade, estilo e estética. No vídeo a seguir, confira uma rápida preview do <span className="font-bold text-azul-titulo">Lost Essences</span>.</p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }} className='lg:flex lg:justify-center'>
        <iframe
          className='w-[100%] lg:w-[80%]'
          height="315"
          src="https://www.youtube.com/embed/uOXS-Qd1lq4"
          title="Lost Essences Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </div>
  )
}
