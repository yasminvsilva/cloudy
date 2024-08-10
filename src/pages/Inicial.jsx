import images from '../assets/imagensTeste.svg'
import Scroll from '../components/Scroll'
import BotaoScroll from '../components/BotaoScroll'
import NavegacaoBotao from '../components/NavegacaoBotao'

export default function Inicial() {
  return (
    <div>
        <div>
            <h1 className='
            lg:w-[600px] lg:text-[45px] lg:leading-[50px] lg:mt-[150px]
            font-karla font-bold text-[28px] mt-16 mb-10 '><span className='text-roxo-titulo'>Recupere</span> suas noites, <span className='text-roxo-titulo'>renove</span> suas energias</h1>
            <p className='
            lg:w-[440px] lg:text-[18px]
            font-overpass text-[18px] text-justify mb-10'>Experimente o Cloudy como uma abordagem para melhorar as suas noites de sono</p>
      
            <div className='
            lg:h-[56px] lg:pr-[700px]
            flex justify-between gap-3 mb-20'>
              <BotaoScroll />
              <NavegacaoBotao />
            </div>

            <div className='flex justify-center'>
              <img src={images} alt="" />
            </div>

            <Scroll />
        </div>
    </div>
  )
}
