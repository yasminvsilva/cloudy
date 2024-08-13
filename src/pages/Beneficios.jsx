import certo from '../assets/iconeCerto.svg'

export default function Beneficios() {
  return (
    <div>
        <div>
            <h2 className='
            xl:text-[35px]
            lg:text-[26px] lg:w-1/2 lg:mb-8
            font-karla font-bold text-[23px] mb-16'>Para nós, a qualidade do seu sono é <span className='text-roxo-titulo'>prioridade</span></h2>
            <p className='
            xl:text-[18px]
            lg:mb-10 lg:w-1/2
            font-overpass text-[16px] mb-16 text-justify'>Dormir bem é ser saudável. Conheça alguns dos benefícios que você vai ter ao adquirir o Cloudy:</p>
        </div>
        <div className='
        lg:flex lg:gap-5'>
            <div className='lg:w-1/4'>
                <div className='lg:gap-3 lg:mb-5 flex gap-2 mb-2.5'>
                    <img className='w-5' src={certo} />
                    <p className='xl:text-[18px] lg:leading-5 font-overpass text-[16px]'>Redução da insônia</p>
                </div>
                <div className='lg:gap-3 lg:mb-5 flex gap-2 mb-2.5'>
                    <img className='w-5' src={certo} />
                    <p className='xl:text-[18px] lg:leading-5 font-overpass text-[16px]'>Criação de hábitos saudáveis de sono</p>
                </div>
                <div className='lg:gap-3 lg:mb-5 flex gap-2 mb-2.5'>
                    <img className='w-5' src={certo} />
                    <p className='xl:text-[18px] lg:leading-5 font-overpass text-[16px]'>Melhora na qualidade do sono</p>
                </div>
            </div>
            <div className='lg:w-1/4'>
                <div className='lg:gap-3 flex gap-2 mb-2.5'>
                    <img className='w-5' src={certo} />
                    <p className='xl:text-[18px] lg:leading-5 font-overpass text-[16px]'>Aumento da energia diurna</p>
                </div>
                <div className='lg:gap-3 flex gap-2 mb-2.5'>
                    <img className='w-5' src={certo} />
                    <p className='xl:text-[18px] lg:leading-5 font-overpass text-[16px]'>Diminuição do estresse</p>
                </div>
                <div className='lg:gap-3 flex gap-2 mb-2.5'>
                    <img className='w-5' src={certo} />
                    <p className='xl:text-[18px] lg:leading-5 font-overpass text-[16px]'>Conveniência e facilidade de uso</p>
                </div>
            </div>

            <div>
                {/* imagens */}
            </div>
        </div>
    </div>
  )
}
