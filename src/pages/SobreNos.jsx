import Header from './Header'

import logoUnasp from '../assets/logo-unasp.svg'
import imagens from '../assets/imagens-sobre-nos.svg'

export default function SobreNos() {
  return (
    <div>
        <Header />

        <div>   
            <h1 className='font-karla font-bold text-[26px] mt-16 mb-16 text-center leading-[125%]'><span className='text-verde-titulo'>Saiba</span> quem são os nossos <span className='text-roxo-titulo'>desenvolvedores</span></h1>
            <p className='font-overpass text-[16px] text-justify mb-6'>Somos um grupo de estudantes do Centro Universitário Adventista de São Paulo, cursando o terceiro ano do ensino médio. Nossa equipe é formada por: João Pedro Costa, Mariana Alves e Yasmin Vitória.</p>
            <p className='font-overpass text-[16px] text-justify mb-6'>Nosso projeto surgiu da compreensão das dificuldades enfrentadas pelas pessoas em relação aos distúrbios de sono. Nosso objetivo é criar soluções que melhorem a qualidade de vida por meio de tecnologias acessíveis e eficazes.</p>
            <p className='font-overpass text-[16px] text-justify mb-12'>Vimos na aromaterapia uma oportunidade de desenvolver um dispositivo que, não apenas ajudasse a combater os distúrbios do sono, mas também oferecesse um ambiente relaxante por meio da música e iluminação âmbar.</p>
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
