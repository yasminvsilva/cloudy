import images from '../assets/imagensTeste.svg'
import Scroll from '../components/Scroll'
import BotaoScroll from '../components/BotaoScroll'

export default function Inicial() {
  return (
    <div>
        <div>
            <h1 className='
            lg:w-[600px] lg:text-[50px] lg:leading-[50px] lg:mt-[150px]
            font-karla font-bold text-[28px] mt-16 mb-10 '><span className='text-roxo-titulo'>Recupere</span> suas noites, <span className='text-roxo-titulo'>renove</span> suas energias</h1>
            <p className='
            lg:w-[440px] lg:text-[20px]
            font-overpass text-[18px] text-justify mb-10'>Experimente o Cloudy como uma abordagem para melhorar as suas noites de sono</p>
      
            <div className='flex justify-between gap-3 mb-20'>
              <BotaoScroll />
              <button className='
              lg:w-[167px] lg:h-[56px] rounded-2xl
              w-[160px] h-[38px] font-karla text-[14px] text-roxo-claro border-2 border-roxo-claro rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg hover:cursor-pointer hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out' onClick={() => window.location.href = './SobreNos'}>Sobre nós</button>
            </div>

            <div className='flex justify-center'>
              <img src={images} alt="" />
            </div>

            <Scroll />
        </div>
    </div>
  )
}
