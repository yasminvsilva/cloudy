import Header from "./Header"

export default function Materiais() {
  return (
    <div>
        <Header />

        <div className="
        2xl:px-[180px]
        xl:px-[160px]
        lg:pt-[50px] lg:px-[80px]
        md:px-[40px] md:pt-[20px]">
          <div>
            <h1 className="
            2xl:mt-20
            xl:text-[36px]
            lg:text-[32px] lg:mb-20
            font-karla font-bold text-[25px] text-center mt-16 mb-16 leading-[125%]">Conheça os <span className="text-roxo-titulo">materiais</span> <br></br> por trás do Cloudy</h1>
            <p className="
            xl:text-[18px]
            font-overpass text-justify mb-6 text-[16px]">Aqui você encontrará uma visão completa e detalhada dos componentes que utilizamos para dar vida ao nosso projeto. Nosso objetivo é proporcionar uma referência clara e organizada dos materiais, facilitando a compreensão e a montagem do projeto.</p>
            <p className="
            xl:text-[18px]
            font-overpass text-justify text-[16px]">O nosso projeto é composto por várias partes integradas, cada uma desempenhando um papel crucial na funcionalidade geral. Desde o controle do aromatizador até a reprodução de música, iluminação RGB e a exibição do tempo, cada seção apresenta componentes específicos que colaboram para o funcionamento harmonioso do sistema.</p>
          </div>
        </div>
    </div>
  )
}
