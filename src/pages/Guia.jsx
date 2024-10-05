import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

import bolinhas from "../assets/bolinhasGuia.svg"
import confsImg from "../assets/confsIniciais.svg"
import personal from "../assets/personal.svg"
import manutencao from "../assets/manutencao.svg"
import experimente from "../assets/experimente.svg"
import ladoE from "../assets/usoDbolinhasLadoE.svg"
import ladoD from "../assets/usoDbolinhasLadoD.svg"

import bolinhasDark from '../assets/bolinhasGuiaDark.svg'

export default function Guia({ isDarkMode }) {
    const navegacao = useNavigate()
  return (
    <div>
        <div className='
        xl:px-[160px]
        lg:pt-[50px]
        md:px-[40px] md:pt-[20px]
        '>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }} 
            className="
            xl:text-[36px] xl:mb-20
            lg:text-[32px] lg:mb-20
            font-karla font-bold text-[26px] mt-16 mb-16 text-center leading-[125%] dark:text-white">Veja como é <span className="text-roxo-titulo">fácil</span> <br></br> utilizar o Cloudy
            </motion.h1>

            <motion.img
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            className="
            xl:w-[12px] xl:mb-20
            lg:w-[10px] lg:mb-20
            mb-16 m-auto w-[8px]" src={isDarkMode ? bolinhasDark : bolinhas} />
        </div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="xl:mb-32 lg:mb-24 md:mb-20 flex flex-wrap"
        >
            <div className="
            md:w-1/2 md:pr-4
            w-full
            ">
                <p className="
                xl:text-[14px]
                lg:text-[13px]
                text-roxo-titulo font-karla font-bold uppercase text-[12px] mb-2">Configurações iniciais</p>
                <h2 className="
                xl:text-[30px]
                lg:text-[25px]
                text-[21px] font-karla font-bold mb-12 dark:text-white">Dê o primeiro passo <br /> iniciando o <span className="text-roxo-titulo">Cloudy</span></h2>
                <p className="
                xl:text-[18px]
                md:w-[95%] md:mb-0
                font-overpass text-[16px] text-justify mb-12 dark:text-white">
                Primeiro, conecte o Cloudy à energia elétrica usando o cabo fornecido. Depois, configure o relógio de acordo com suas preferências. Por último, adicione água e óleo de lavanda ao reservatório para iniciar a aromaterapia.
                </p>
            </div>

            <div className="
            2xl:w-[390px]
            xl:w-[350px]
            lg:w-[310px]
            md:w-[280px] md:pl-4 md:py-4 md:mb-0
            w-[280px] mb-20 m-auto">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                src={confsImg} alt="" />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='flex flex-wrap xl:mb-32 lg:mb-24 mb-20'
        >
            <div className='
            md:w-1/2 md:pl-4
            w-full order-1 md:order-2'>
                <p className="
                xl:text-[14px]
                lg:text-[13px]
                md:text-right
                text-azul-titulo font-karla font-bold uppercase text-[12px] mb-2">Personalização das configurações</p>
                <h2 className="
                xl:text-[30px]
                lg:text-[25px]
                md:text-right
                text-[21px] font-karla font-bold mb-12 dark:text-white">Aqui trabalhamos <br></br> à <span className="text-azul-titulo">sua</span> maneira</h2>
                
                <div className='text-left'>
                    <p className="
                    xl:text-[18px]
                    md:mb-0 
                    font-overpass text-[16px] text-justify mb-12 dark:text-white">Ajuste a duração da difusão do óleo essencial para se adequar ao seu ciclo de sono e escolha entre músicas relaxantes e ruídos brancos. Ajuste o volume do som conforme necessário.</p>
                </div>
            </div>

            <div className="
            2xl:w-[390px]
            xl:w-[350px]
            lg:w-[310px]
            md:w-[280px] md:pr-4 md:py-4 md:mb-0
            w-[280px] m-auto order-2 md:order-1">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                src={personal} alt="" />
            </div>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }} 
        className="
        2xl:-mx-[300px] 2xl:justify-center 2xl:px-12
        lg:-mx-[110px] lg:py-8
        md:flex md:-mx-12 md:px-4
        bg-guia -mx-8 
        
        dark:bg-bg-usodiario">
            <div className='flex justify-center'>
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className='hidden md:block md:w-[200px] xl:w-[280px]' src={ladoE} alt="" />
            </div>

            <div className='
            2xl:py-24 2xl:px-40
            lg:py-16
            md:py-12 md:px-20
            py-12 px-6'>
                <div>
                    <p className="
                    xl:text-[14px]
                    lg:text-[13px]
                    flex justify-center text-verde-titulo font-karla font-bold uppercase text-[12px] mb-2">Utilização diária</p>
                    <h2 className="
                    xl:text-[30px] xl:mb-20
                    lg:text-[25px] lg:mb-16
                    flex flex-col justify-center items-center text-[21px] font-karla font-bold mb-12 leading-[130%] dark:text-white">Se atente ao <br></br> <span className="text-verde-titulo">uso diário</span> </h2>
                </div>

                <div className="
                xl:px-16
                lg:flex lg:flex-row lg:gap-8 lg:px-14
                px-10 flex flex-col items-center">
                    <p className="
                    xl:text-[18px]
                    lg:mb-0
                    font-overpass text-[16px] text-center mb-8 dark:text-white">Verifique se todas as configurações estão ajustadas.</p>
                    <p className="
                    xl:text-[18px]
                    font-overpass text-[16px] text-center dark:text-white">Ative o Cloudy pressionando o botão de ligar/desligar.</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className='hidden md:block md:w-[200px] xl:w-[280px]' src={ladoD} alt="" />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }} 
            className='xl:mt-32 xl:mb-10 md:mt-20 lg:mt-24 flex flex-wrap'>
            <div className='
            md:w-1/2 md:pr-4
            w-full
            '>
                <p className="
                xl:text-[14px]
                lg:text-[13px]
                md:mt-0
                text-roxo-titulo font-karla font-bold uppercase text-[12px] mb-2 mt-20">Manutenção e cuidados</p>
                <h2 className="
                xl:text-[30px]
                lg:text-[25px]
                text-[21px] font-karla font-bold mb-12 dark:text-white">Cuidar do <span className="text-roxo-titulo">Cloudy</span> é <br></br> cuidar de <span className="text-roxo-titulo">você</span></h2>
                <p className="
                xl:text-[18px]
                md:w-[95%]
                font-overpass text-[16px] text-justify mb-12 dark:text-white">Limpe regularmente o reservatório de água e o difusor de aromaterapia e substitua o óleo essencial de lavanda conforme necessário. Armazene o Cloudy em local fresco e seco quando não estiver em uso.</p>
            </div>

            <div className="
            xl:w-[330px]
            lg:w-[290px]
            md:w-[280px] md:pl-4 md:py-4
            mb-20 w-[280px] m-auto">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 }} src={manutencao} alt="" />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }} 
            className="
        2xl:-mx-[300px] 2xl:h-36
        xl:h-32
        lg:mb-24 lg:-mx-[110px] lg:h-28
        md:-mx-12
        flex justify-center items-center bg-azul-guia h-24 -mx-8 mb-16 dark:bg-bg-usodiario">
            <p className="
            xl:text-[30px]
            lg:text-[25px]
            font-karla font-bold text-[21px] dark:text-white">Experimente <span className="text-azul-titulo">agora!</span></p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }} 
            className='md:flex md:flex-wrap'>
            <div className='
            md:w-1/2 md:pr-4
            w-full
            '>
                <p className="
                xl:text-[18px]
                md:w-[95%]
                font-overpass text-[16px] text-justify mb-12 dark:text-white">Agora é só desfrutar dos benefícios do Cloudy! Transforme sua rotina de sono e desfrute de uma noite verdadeiramente rejuvenescedora.</p>
                
                <div className="flex justify-center">
                    <button 
                        className="text-azul-carrossel border-azul-carrossel border-2 rounded-2xl w-[120px] h-[42px] font-overpass text-[16px] text-center mb-12 hover:bg-azul-titulo hover:text-white hover:border-azul-titulo transition-colors duration-300 ease-in-out
                        
                        dark:text-azul-titulo dark:border-azul-titulo dark:hover:text-background-black" 
                        onClick={() => {
                            navegacao('/guia');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Voltar
                    </button>
                </div>

            </div>

            <div className="
            2xl:w-[390px]
            xl:w-[350px]
            lg:w-[310px]
            md:w-[280px] md:pl-4 md:py-4
            mb-10 w-[280px] m-auto">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }} src={experimente} alt="" />
            </div>
        </motion.div>
    </div>
  )
}
