import certo from '../assets/iconeCerto.svg'

export default function Beneficios() {
  return (
    <div>
        <div>
            <h2 className='font-karla font-bold text-[20px] mb-16'>Para nós, a qualidade do seu sono é <span className='text-roxo-titulo'>prioridade</span></h2>
            <p className='font-overpass text-[14px] mb-16 text-justify'>Dormir bem é ser saudável. Conheça alguns dos benefícios que você vai ter ao adquirir o Cloudy:</p>
        </div>
        <div>
            <div>
                <div className='flex gap-2 mb-1'>
                    <img className='w-4' src={certo} />
                    <p className='font-overpass text-[14px]'>Redução da insônia</p>
                </div>
                <div className='flex gap-2 mb-1'>
                    <img className='w-4' src={certo} />
                    <p className='font-overpass text-[14px]'>Criação de hábitos saudáveis de sono</p>
                </div>
                <div className='flex gap-2 mb-1'>
                    <img className='w-4' src={certo} />
                    <p className='font-overpass text-[14px]'>Melhora na qualidade do sono</p>
                </div>
            </div>
            <div>
                <div className='flex gap-2 mb-1'>
                    <img className='w-4' src={certo} />
                    <p className='font-overpass text-[14px]'>Aumento da energia diurna</p>
                </div>
                <div className='flex gap-2 mb-1'>
                    <img className='w-4' src={certo} />
                    <p className='font-overpass text-[14px]'>Diminuição do estresse</p>
                </div>
                <div className='flex gap-2 mb-1'>
                    <img className='w-4' src={certo} />
                    <p className='font-overpass text-[14px]'>Conveniência e facilidade de uso</p>
                </div>
            </div>

            <div>
                {/* imagens */}
            </div>
        </div>
    </div>
  )
}
