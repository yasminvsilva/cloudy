import certo from '../assets/iconeCerto.svg'
import imagensBeneficios from '../assets/imagensBeneficios.svg'

export default function Beneficios() {
  return (
    <div className='
    md:flex
    '>
        <div>
            <h2 className='
            2xl:w-3/5 2xl:mb-18
            xl:text-[35px] xl:w-4/5 xl:mb-16
            lg:text-[26px] lg:w-3/4 lg:mb-8
            md:w-3/4 md:mb-8
            font-karla font-bold text-[23px] mb-16'>Para nós, a qualidade do <br></br> seu sono é <span className='text-roxo-titulo'>prioridade</span></h2>
            <p className='
            2xl:w-3/5 2xl:mb-18
            xl:text-[18px] xl:mb-16 xl:w-4/5
            lg:mb-10 lg:w-3/4
            md:w-3/4 md:mb-8
            font-overpass text-[16px] mb-16 text-justify'>Dormir bem é ser saudável. Conheça alguns dos benefícios que você vai ter ao adquirir o Cloudy:</p>

            <div className='
            lg:flex lg:gap-6 2xl:gap-10
            '>
                <div className='2xl:w-1/4 xl:w-2/5 lg:w-2/5'>
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
                
                <div className='
                2xl:w-1/4
                xl:w-1/3
                lg:w-2/5'>
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
            </div>    
        </div>
        <div>
            <div className='
            2xl:mt-[0px]
            xl:mt-[28px]
            lg:mt-[35px]
            md:flex md:mt-[135px] md:mr-4'>
                <img className='mt-16' src={imagensBeneficios} alt="" />
            </div>
        </div>
    </div>
  )
}
