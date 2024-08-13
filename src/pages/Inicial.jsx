import images from '../assets/imagensTeste.svg'
import Scroll from '../components/Scroll'
import BotaoScroll from '../components/BotaoScroll'
import NavegacaoBotao from '../components/NavegacaoBotao'

export default function Inicial() {
  return (
    <div>
        <div className='
        lg:mt-[40px]
        md:flex md:justify-between md:mt-[20px]'>

            <div className=''>
              <h1 className='
              xl:text-[50px]
              lg:text-[40px] lg:mt-24
              md:mt-20
              font-karla font-bold text-[29px] mt-16 mb-10 leading-[113%]'><span className='text-roxo-titulo'>Recupere</span> suas noites, <br></br> <span className='text-roxo-titulo'>renove</span> suas energias</h1>
              <p className='
              lg:w-96 lg:mt-12 lg:mb-12
              md:w-72
              font-overpass text-[18px] text-justify mb-10'>Experimente o Cloudy como uma abordagem para melhorar as suas noites de sono</p>
      
              <div className='
              md:justify-normal
              flex justify-between gap-3 mb-20'>
                <BotaoScroll />
                <NavegacaoBotao />
              </div>
            </div>
            

            <div className='
            lg:w-5/12
            flex justify-center w-auto h-auto'>
              <img src={images} alt="" />
            </div>
        </div>
        <Scroll />
    </div>
  )
}
