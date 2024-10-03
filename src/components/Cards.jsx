import lavanda from '../assets/iconeLavanda.svg'
import luminaria from '../assets/iconeLuminaria.svg'
import relogio from '../assets/iconeRelogio.svg'
import celular from '../assets/iconeCelular.svg'

export default function Cards() {
  return (
    <div className='hidden lg:block 2xl:mt-24 2xl:mb-24'>
        <div className='flex gap-2.5 mb-20 flex justify-center xl:gap-8 xl:mb-24'>
            <section className='
            xl:justify-center
            bg-secao-diferencial w-56 h-48 rounded-3xl py-6 px-6 flex flex-col items-center'>
                <img className='w-10 mb-3' src={lavanda} alt="" />
                <h2 className='font-karla font-bold text-[15px] text-center mb-1.5'>Óleo essencial de lavanda</h2>
                <p className='font-overpass text-[13px] text-center'>Comprovadamente eficaz na redução de insônia</p>
            </section>

            <section className='
            xl:justify-center
            bg-secao-diferencial w-56 h-48 rounded-3xl py-6 px-6 flex flex-col items-center'>
                <img className='w-10 mb-3' src={luminaria} alt="" />
                <h2 className='font-karla font-bold text-[15px] text-center mb-1.5'>Luminária</h2>
                <p className='font-overpass text-[13px] text-center'>Com luzes que não interferem na produção de melatonina</p>
            </section>

            <section className='
            xl:justify-center
            bg-secao-diferencial w-56 h-48 rounded-3xl py-6 px-6 flex flex-col items-center'>
                <img className='w-10 mb-3' src={relogio} alt="" />
                <h2 className='font-karla font-bold text-[15px] text-center mb-1.5'>Relógio</h2>
                <p className='font-overpass text-[13px] text-center'>Controle os seus horários e sincronize seus ciclos</p>
            </section>

            <section className='
            xl:justify-center
            bg-secao-diferencial w-56 h-48 rounded-3xl py-6 px-6 flex flex-col items-center'>
                <img className='w-10 mb-3' src={celular} alt="" />
                <h2 className='font-karla font-bold text-[15px] text-center mb-1.5'>Aplicativo</h2>
                <p className='font-overpass text-[13px] text-center'>Oferece sugestões personalizadas e lembretes</p>
            </section>
        </div>
    </div>
  )
}
