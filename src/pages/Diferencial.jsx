import lavanda from '../assets/iconeLavanda.svg'
import luminaria from '../assets/iconeLuminaria.svg'
import relogio from '../assets/iconeRelogio.svg'
import celular from '../assets/iconeCelular.svg'

export default function Diferencial() {
  return (
    <div>
        <div>
            <h2 className='font-karla font-bold text-[20px] mb-16'>Qual é o <span className='text-azul-titulo'>diferencial</span> do Cloudy?</h2>
            <p className='font-overpass text-[14px] text-justify mb-16'>O nosso produto te oferece diversas funcionalidades que se destacam, tudo para garantir a sua qualidade de sono.</p>
        </div>

        <div className='bg-secao-diferencial w-52 px-8 py-6 rounded-3xl flex items-center justify-center mb-8 mx-auto'>
            <section className='flex flex-col items-center'>
                <img className='w-10 mb-2.5' src={lavanda} />
                <h3 className='font-karla font-bold text-[14px] text-center mb-1.5'>Óleo essencial de lavanda</h3>
                <p className='font-overpass text-[12px] text-center'>Comprovadamente eficaz na redução de insônia</p>
            </section>
        </div>

        <div className='mb-16 flex justify-center space-x-1'>
            <button className="bg-azul-carrossel rounded-full h-3 w-[40px]"></button>
            <button className="bg-[#CFCFCF] rounded-full h-3 w-[16px]"></button>
            <button className="bg-[#CFCFCF] rounded-full h-3 w-[16px]"></button>
            <button className="bg-[#CFCFCF] rounded-full h-3 w-[16px]"></button>
        </div>
    </div>
  )
}

{/* se precisar pro carrossel */}
            {/* 
            <div>
                <img src={luminaria} />
                <h3 className='font-karla'>Luminária</h3>
                <p className='font-overpass'>Com luzes que não interferem na produção de melatonina</p>
            </div>
            <div>
                <img src={relogio} />
                <h3 className='font-karla'>Relógio</h3>
                <p className='font-overpass'>Controle os seus horários e sincronize seus ciclos</p>
            </div>
            <div>
                <img src={celular} />
                <h3 className='font-karla'>Aplicativo</h3>
                <p className='font-overpass'>Oferece sugestões personalizadas e lembretes</p>
            </div>
            */}