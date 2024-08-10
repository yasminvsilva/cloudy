import Header from './Header'

import logoUnasp from '../assets/logo-unasp.svg'
import imagens from '../assets/imagens-sobre-nos.svg'

export default function SobreNos() {
  return (
    <div>
        {/* bg-gradient-to-r from-roxo-titulo from-0% via-verde-titulo via-50% to-azul-titulo to-100% */}
        <Header />
        <div>   
            <h1 className='font-karla font-bold text-[25px] mt-16 mb-16'>Saiba quem são os nossos <span style={{background: 'linear-gradient(to right, #735EA0 0%, #5EA079 50%, #4C8293 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>desenvolvedores</span></h1>
            <p className='font-overpass text-[14px] text-justify mb-6'>Somos um grupo de estudantes do Centro Universitário Adventista de São Paulo, cursando o terceiro ano do ensino médio. Nossa equipe é formada por três membros: João Pedro Costa, Mariana Alves e Yasmin Vitória</p>
            <p className='font-overpass text-[14px] text-justify mb-6'>Nosso projeto surgiu da compreensão das dificuldades enfrentadas pelas pessoas em relação aos distúrbios de sono. Nosso objetivo é criar soluções que melhorem a qualidade de vida por meio de tecnologias acessíveis e eficazes.</p>
            <p className='font-overpass text-[14px] text-justify mb-20'>Vimos na aromaterapia uma oportunidade para desenvolver um dispositivo que não apenas ajudasse a combater os distúrbios do sono, mas também oferecesse um ambiente relaxante por meio da música e iluminação âmbar.</p>
        </div>

        <div className='flex justify-center mb-10'>
            <img hover:cursor-pointer src={imagens} alt="" />
        </div>
        <div className='flex justify-center'>
            <img src={logoUnasp} alt="" />
        </div>
    </div>
  )
}
