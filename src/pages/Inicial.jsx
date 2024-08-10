import scroll from '../assets/scroll.svg'
import images from '../assets/imagensTeste.svg'
import ScrollComponent from '../components/ScrollComponent'

export default function Inicial() {
  return (
    <div>
        <div>
            <h1 className='font-karla font-bold text-[28px] mt-16 mb-10 '><span className='text-roxo-titulo'>Recupere</span> suas noites, <span className='text-roxo-titulo'>renove</span> suas energias</h1>
            <p className='font-overpass text-[18px] text-justify mb-10'>Experimente o Cloudy como uma abordagem para melhorar as suas noites de sono</p>
      
            <div className='flex justify-between gap-3 mb-20'>
                <button className='w-[160px] h-[38px] font-karla text-branco text-[14px] bg-roxo-claro rounded-l-xl rounded-br-3xl hover:cursor-pointer border-2 border-transparent hover:bg-branco hover:text-roxo-claro hover:border-roxo-claro hover:border-2 transition-colors duration-300 ease-in-out'>Saiba mais</button>

                <button className='w-[160px] h-[38px] font-karla text-[14px] text-roxo-claro border-2 border-roxo-claro rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg hover:cursor-pointer hover:bg-roxo-claro hover:text-white hover:border-roxo-claro transition-colors duration-300 ease-in-out' onClick={() => window.location.href = './SobreNos'}>Sobre nós</button>
            </div>

            <div className='flex justify-center'>
              <img src={images} alt="" />
            </div>

            <ScrollComponent />
            {/* <div className='mt-[60px] mb-[94px] flex items-center justify-center'>
              <img className='hover:cursor-pointer'src={scroll} alt="" />
            </div> */}
        </div>
    </div>
  )
}
