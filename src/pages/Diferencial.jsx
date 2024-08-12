import Carrossel from '../components/Carrossel'
export default function Diferencial() {
  return (
    <div>
        <div>
            <h2 className='font-karla font-bold text-[23px] mb-16'>Qual é o <span className='text-azul-titulo'>diferencial</span> do Cloudy?</h2>
            <p className='font-overpass text-[16px] text-justify mb-16'>O nosso produto te oferece diversas funcionalidades que se destacam, tudo para garantir a sua qualidade de sono.</p>
        </div>

        <div className='relative bg-secao-diferencial w-56 h-48 px-6 py-6 rounded-3xl flex flex-col items-center justify-center mb-20 mx-auto'>
            <Carrossel />
        </div>
    </div>
  )
}

