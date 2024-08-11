import images from '../assets/imagensTeste.svg'
import Scroll from '../components/Scroll'
import BotaoScroll from '../components/BotaoScroll'
import NavegacaoBotao from '../components/NavegacaoBotao'

export default function Inicial() {
  return (
    <div>
        <div>
            <h1 className='font-karla font-bold text-[30px] mt-16 mb-10 leading-[113%]'><span className='text-roxo-titulo'>Recupere</span> suas noites, <span className='text-roxo-titulo'>renove</span> suas energias</h1>
            <p className='font-overpass text-[18px] text-justify mb-10'>Experimente o Cloudy como uma abordagem para melhorar as suas noites de sono</p>
      
            <div className='flex justify-between gap-3 mb-20'>
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
