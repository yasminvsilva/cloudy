import { motion } from 'framer-motion';
import Header from "./Header"
import bolinhas from "../assets/bolinhasGuia.svg"
import confsImg from "../assets/confsIniciais.svg"
import personal from "../assets/personal.svg"
import manutencao from "../assets/manutencao.svg"
import experimente from "../assets/experimente.svg"


export default function Guia() {
  return (
    <div>
        <Header />
        <div>
            <h1 className="font-karla font-bold text-[25px] mt-16 mb-16 text-center leading-[125%]">Veja como é <span className="text-roxo-titulo">fácil</span> <br></br> utilizar o Cloudy</h1>
            <img className="mb-16 m-auto w-[8px]" src={bolinhas} />
        </div>

        <div>
            <div>
                <p className="text-roxo-titulo font-karla font-bold uppercase text-[12px] mb-2">Configurações iniciais</p>
                <h2 className="text-[21px] font-karla font-bold mb-12">Dê o primeiro passo <br></br> iniciando o <span className="text-roxo-titulo">Cloudy</span></h2>
                <p className="font-overpass text-[16px] text-justify mb-12">Primeiro, conecte o Cloudy à energia elétrica usando o cabo fornecido. Depois, configure o relógio de acordo com suas preferências. Por último, adicione água e óleo de lavanda ao reservatório para iniciar a aromaterapia.</p>
            </div>
            <div className="mb-20 w-[280px] m-auto">
                <img src={confsImg} alt="" />
            </div>
        </div>

        <div>
            <div>
                <p className="text-azul-titulo font-karla font-bold uppercase text-[12px] mb-2">Personalização das configurações</p>
                <h2 className="text-[21px] font-karla font-bold mb-12">Aqui trabalhamos <br></br> à <span className="text-azul-titulo">sua</span> maneira</h2>
                <p className="font-overpass text-[16px] text-justify mb-12">Ajuste a duração da difusão do óleo essencial para se adequar ao seu ciclo de sono e escolha entre músicas relaxantes e ruídos brancos. Ajuste o volume do som conforme necessário.</p>
            </div>

            <div className="mb-20 w-[280px] m-auto">
                <img src={personal} alt="" />
            </div>
        </div>
        
        <div> {/* div para aplicar flex e deixar bolinhas-textos-bolinhas */}
            <div>
                {/* div para colocar as bolinhas */}
            </div>

            <div className="bg-guia py-12 -mx-8 px-8">
                <div>
                    <p className="flex justify-center text-verde-titulo font-karla font-bold uppercase text-[12px] mb-2">Utilização diária</p>
                    <h2 className="flex flex-col justify-center items-center  text-[21px] font-karla font-bold mb-12">Se atente ao <br></br> <span className="text-verde-titulo">uso diário</span> </h2>
                </div>

                <div className="px-10 flex flex-col items-center">
                    <p className="font-overpass text-[16px] text-center mb-8">Verifique se todas as configurações estão ajustadas.</p>
                    <p className="font-overpass text-[16px] text-center">Ative o Cloudy pressionando o botão de ligar/desligar.</p>
                </div>
            </div>

            <div>
                {/* div para colocar as bolinhas */}
            </div>
        </div>

        <div>

            <div>
                <p className="text-roxo-titulo font-karla font-bold uppercase text-[12px] mb-2  mt-20">Manutenção e cuidados</p>
                <h2 className="text-[21px] font-karla font-bold mb-12">Cuidar do <span className="text-roxo-titulo">Cloudy</span> é <br></br> cuidar de <span className="text-roxo-titulo">você</span></h2>
                <p className="font-overpass text-[16px] text-justify mb-12">Limpe regularmente o reservatório de água e o difusor de aromaterapia e substitua o óleo essencial de lavanda conforme necessário. Armazene o Cloudy em local fresco e seco quando não estiver em uso.</p>
            </div>

            <div className="mb-20 w-[280px] m-auto">
                <img src={manutencao} alt="" />
            </div>
        </div>

        <div className="flex justify-center items-center bg-azul-guia h-24 -mx-8 mb-16">
            <p className="font-karla font-bold text-[21px]">Experimente <span className="text-azul-titulo">agora!</span></p>
        </div>

        <div>
            <div>
                <p className="font-overpass text-[16px] text-justify mb-12">Agora é só desfrutar dos benefícios do Cloudy! Transforme sua rotina de sono e desfrute de uma noite verdadeiramente rejuvenescedora.</p>
                
                <div className="flex justify-center">
                    <button className="text-roxo-claro border-roxo-claro border-2 rounded-2xl w-[120px] h-[42px] font-overpass text-[16px] text-center mb-12">Voltar</button>
                </div>
            </div>

            <div className="mb-10 w-[280px] m-auto">
                <img src={experimente} alt="" />
            </div>
        </div>
    </div>
  )
}
