import Header from "./Header"
import bolinhas from "../assets/bolinhasGuia.svg"
import tracejado from "../assets/linhaTracejada.svg"

export default function Guia() {
  return (
    <div>
        <Header />
        <div>
            <h1 className="font-karla font-bold text-[25px] text-center mt-16 mb-8 leading-[125%]">Veja como é <span className="text-roxo-titulo">fácil</span> <br></br> <span className="text-roxo-claro">utilizar</span> o Cloudy</h1>
            <img className="mb-20 m-auto" src={bolinhas} />
        </div>

        <div className="flex">
            <div className="rounded-l-2xl w-36 max-h-[220px] bg-roxo-guia"></div>

            <div className="rounded-r-2xl rounded-l border border-l-0 border-linha px-5 py-5">
                <h2 className="font-karla font-bold text-roxo-titulo text-lg mb-3">Configurações iniciais</h2>
                <p className="font-overpass text-justify text-[14px] leading-tight">Primeiro, conecte o Cloudy à energia elétrica usando o cabo fornecido. Depois, configure o relógio de acordo com suas preferências. Por último, adicione água e óleo de lavanda ao reservatório para iniciar a aromaterapia.</p>  
            </div>
        </div>

        <img className="mt-8 mb-8 m-auto" src={tracejado} />

        <div className="flex">
            <div className="rounded-l-2xl rounded-r border border-r-0 border-linha px-5 py-5">
                <h2 className="font-karla font-bold text-verde-titulo text-lg mb-3">Personalização das configurações</h2>
                <p className="font-overpass text-justify text-[14px] leading-tight">Ajuste a duração da difusão do óleo essencial para se adequar ao seu ciclo de sono e escolha entre músicas relaxantes e ruídos brancos. Ajuste o volume do som conforme necessário.</p>  
            </div>

            <div className="rounded-r-2xl w-28 max-h-[240px] bg-verde-guia"></div>
        </div>

        <img className="mt-8 mb-8 m-auto" src={tracejado} />

        <div className="flex">
            <div className="rounded-l-2xl w-16 max-h-[220px] bg-azul-guia"></div>

            <div className="rounded-r-2xl rounded-l border border-l-0 border-linha px-5 py-5">
                <h2 className="font-karla font-bold text-azul-titulo text-lg mb-3">Utilização diária</h2>
                <p className="font-overpass text-justify text-[14px] leading-tight">Ative o Cloudy pressionando o botão de ligar/desligar. Verifique se todas as configurações estão ajustadas.</p>  
            </div>
        </div>

        <img className="mt-8 mb-8 m-auto" src={tracejado} />

        <div className="flex">
            <div className="rounded-l-2xl rounded-r border border-r-0 border-linha px-5 py-5">
                <h2 className="font-karla font-bold text-roxo-titulo text-lg mb-3">Manutenção e cuidados</h2>
                <p className="font-overpass text-justify text-[14px] leading-tight">Limpe regularmente o reservatório de água e o difusor de aromaterapia e substitua o óleo essencial de lavanda conforme necessário. Armazene o Cloudy em local fresco e seco quando não estiver em uso.</p>  
            </div>

            <div className="rounded-r-2xl w-28 max-h-[240px] bg-roxo-guia"></div>
        </div>

        <img className="mt-8 mb-8 m-auto" src={tracejado} />

        <div className="flex">
            <div className="rounded-l-2xl w-20 max-h-[220px] bg-verde-guia"></div>

            <div className="rounded-r-2xl rounded-l border border-l-0 border-linha px-5 py-5">
                <h2 className="font-karla font-bold text-verde-titulo text-lg mb-3">Experimente agora</h2>
                <p className="font-overpass text-justify text-[14px] leading-tight">Agora é só desfrutar dos benefícios do Cloudy! Transforme a sua rotina de sono e desfrute de uma noite rejuvenescedora.</p>  
            </div>
        </div>
    </div>
  )
}
