import Header from "./Header"

export default function Materiais() {
  return (
    <div>
        <Header />

        <div>
            <h1 className="font-karla font-bold text-[25px] text-center mt-16 mb-16">Conheça os <span style={{background: 'linear-gradient(to right, #735EA0 0%, #5EA079 50%, #4C8293 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>materiais</span> <br></br> por trás do Cloudy</h1>
            <p className="font-overpass text-justify mb-6 text-[16px]">Aqui você encontrará uma visão completa e detalhada dos componentes que utilizamos para dar vida ao nosso projeto. Nosso objetivo é proporcionar uma referência clara e organizada dos materiais, facilitando a compreensão e a montagem do projeto.</p>
            <p className="font-overpass text-justify text-[16px]">O nosso projeto é composto por várias partes integradas, cada uma desempenhando um papel crucial na funcionalidade geral. Desde o controle do aromatizador até a reprodução de música, iluminação RGB e a exibição do tempo, cada seção apresenta componentes específicos que colaboram para o funcionamento harmonioso do sistema.</p>
        </div>
    </div>
  )
}
