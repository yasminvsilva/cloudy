import Header from "./Header"
import bolinhas from "../assets/bolinhasGuia.svg"
import tracejado from "../assets/linhaTracejada.svg"
import confsImg from "../assets/confsIniciais.svg"
import personal from "../assets/personal.svg"
import manutencao from "../assets/manutencao.svg"
import experimente from "../assets/experimente.svg"


export default function Guia() {
  return (
    <div>
        <Header />
        <div>
            <h1 className="font-karla font-bold text-[25px] text-center mt-16 mb-12 leading-[125%]">Veja como é <span className="text-roxo-titulo">fácil</span> <br></br> utilizar o Cloudy</h1>
            <img className="mb-16 m-auto w-[8px]" src={bolinhas} />
        </div>

        <div>
            <div>
                <p className="text-roxo-titulo font-bold uppercase text-[12px]">Configurações iniciais</p>
                <h2 className="text-[20px]">Dê o primeiro passo iniciando o <span className="text-roxo-titulo">Cloudy</span></h2>
                <p>Primeiro, conecte o Cloudy à energia elétrica usando o cabo fornecido. Depois, configure o relógio de acordo com suas preferências. Por último, adicione água e óleo de lavanda ao reservatório para iniciar a aromaterapia.</p>
            </div>

            <div>
                <img src={confsImg} alt="" />
            </div>
        </div>

        <div>
            <div>
                <p className="text-azul-titulo font-bold uppercase">Personalização das configurações</p>
                <h2>Aqui trabalhamos à <span className="text-azul-titulo">sua</span> maneira</h2>
                <p>Ajuste a duração da difusão do óleo essencial para se adequar ao seu ciclo de sono e escolha entre músicas relaxantes e ruídos brancos. Ajuste o volume do som conforme necessário.</p>
            </div>

            <div>
                <img src={personal} alt="" />
            </div>
        </div>
        
        <div> {/* div para aplicar flex e deixar bolinhas-textos-bolinhas */}
            <div>
                {/* div para colocar as bolinhas */}
            </div>

            <div>
                <div>
                    <p className="text-verde-titulo font-bold uppercase">Utilização diária</p>
                    <h2>Se atente ao <span className="text-verde-titulo">uso diário</span> </h2>
                </div>

                <div>
                    <p>Verifique se todas as configurações estão ajustadas.</p>
                    <p>Ative o Cloudy pressionando o botão de ligar/desligar.</p>
                </div>
            </div>

            <div>
                {/* div para colocar as bolinhas */}
            </div>
        </div>

        <div>

            <div>
                <p className="text-roxo-titulo font-bold uppercase">Manutenção e cuidados</p>
                <h2>Cuidar do <span className="text-roxo-titulo">Cloudy</span> é cuidar de <span className="text-roxo-titulo">você</span></h2>
                <p>Limpe regularmente o reservatório de água e o difusor de aromaterapia e substitua o óleo essencial de lavanda conforme necessário. Armazene o Cloudy em local fresco e seco quando não estiver em uso.</p>
            </div>

            <div>
                <img src={manutencao} alt="" />
            </div>
        </div>

        <div>
            <p>Experimente agora!</p>
        </div>

        <div>
            <div>
                <p>Agora é só desfrutar dos benefícios do Cloudy! Transforme sua rotina de sono e desfrute de uma noite verdadeiramente rejuvenescedora.</p>
                <button>Voltar</button>
            </div>

            <div>
                <img src={experimente} alt="" />
            </div>
        </div>
    </div>
  )
}
