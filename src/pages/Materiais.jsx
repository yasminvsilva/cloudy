import { motion } from 'framer-motion';
import Header from "./Header"
import MaterialCarrossel from '../components/MaterialCarrossel'
import arduinoimg from '../assets/materiais/arduino.svg'
import jumpersimg from '../assets/materiais/jumpers.svg'
import protoboardimg from '../assets/materiais/protoboard.svg'
import resistorimg from '../assets/materiais/resistor.svg'
import umidificadora from '../assets/materiais/umidificadora.svg'
import modulorele from '../assets/materiais/modulorele.svg'
import leds from '../assets/materiais/leds.svg'
import modulotp4056 from '../assets/materiais/modulo-tp4056.svg'
import bateria from '../assets/materiais/bateria.svg'
import df from '../assets/materiais/df.svg'
import altofalante from '../assets/materiais/alto-falante.svg'
import display from '../assets/materiais/display.svg'
import rtc from '../assets/materiais/moduloRTC.svg'


export default function Materiais() {
  return (
    <div>
      <Header />

      <div className="
        2xl:px-[180px]
        xl:px-[160px]
        lg:pt-[50px] lg:px-[80px]
        md:px-[40px] md:pt-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className="
            2xl:mt-20
            xl:text-[36px]
            lg:text-[32px] lg:mb-20
            font-karla font-bold text-[25px] text-center mt-16 mb-16 leading-[125%]">Conheça os <span className="text-roxo-titulo">materiais</span> <br></br> por trás do Cloudy</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="
            xl:text-[18px]
            font-overpass text-justify mb-6 text-[16px]">Aqui você encontrará uma visão completa e detalhada dos componentes que utilizamos para dar vida ao <span className='font-bold text-azul-titulo'>Cloudy</span>. O nosso projeto é composto por várias partes integradas, cada uma desempenhando um papel crucial na funcionalidade geral.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="
            xl:text-[18px]
            font-overpass text-justify text-[16px] mb-16"> Desde o controle do <span className='font-bold text-azul-titulo'>aromatizador</span> até a reprodução de <span className='font-bold text-azul-titulo'>música</span>, iluminação <span className='font-bold text-azul-titulo'>RGB</span> e a exibição do <span className='font-bold text-azul-titulo'>tempo</span>, cada seção apresenta componentes específicos que colaboram para o funcionamento harmonioso do sistema.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='md:hidden'>

          {/* geral */}
          <div className='flex justify-center mb-12'>
            <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Geral</p>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={arduinoimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Arduíno UNO</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={jumpersimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Jumpers</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>5,60</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Cabos para conectar componentes na protoboard.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={protoboardimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Protoboard</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>7,50</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Placa de ensaio com conexões condutoras.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={resistorimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Resistor</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>1,50</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Componente que limita a corrente em um circuito.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          {/* aromatizador */}
          <div className='flex justify-center mt-12  mb-12'>
            <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Aromatizador</p>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={umidificadora} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Placa driver</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>58,04</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Aumenta a umidade do ar em ambientes fechados.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={modulorele} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo relé</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>12,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Aciona qualquer carga específica energética.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          {/* luminária */}
          <div className='flex justify-center mt-12 mb-12'>
            <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Luminária</p>
          </div>

          <hr className='md:w-1/3' />

          <div className=' mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={leds} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Fita LED WS2812B</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>24,80</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Emissores de luz utilizados em projetos eletrônicos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={modulorele} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo relé</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>12,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Aciona qualquer carga específica energética.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={modulotp4056} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo TP4056</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>5,60</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Carregador de baterias de lítio contra sobrecarga.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={bateria} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Bateria</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>32,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Carrega carga em componentes eletrônicos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          {/* reprodutor de música */}

          <div className='mt-12 mb-6'>
            <div className='flex justify-center mb-12'>
              <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Reprodutor de música</p>
            </div>

            <hr className='' />

            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={df} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>DFPlayer Mini</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>22,77</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Módulo de áudio para reproduzir sons e músicas.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={altofalante} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Alto falante</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>23,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Dispositivo para emissão de som em sistemas eletrônicos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          {/* relógio */}

          <div className='mt-12 mb-6'>
            <div className='flex justify-center mb-12'>
              <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Relógio</p>
            </div>

            <hr className='' />

            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={display} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Display LED TM1637</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>15,78</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Dispositivo que ilustra quatro dígitos do relógio.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={rtc} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo RTC</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px]'>29,99</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Módulo de relógio para controle preciso de tempo.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3' />

        </motion.div>

        {/* div que engloba todos os cards */}
        <div className='
        xl:px-[30px]
        hidden md:block'>

          {/* div geral */}
          <div>
            <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px]'>Geral</p>

            {/* div para flex */}
            <div className='md:flex md:gap-6 xl:gap-16'>

              {/* div arduíno/jumpers */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo arduíno */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={arduinoimg} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Arduíno UNO</p>
                    <p className='md:font-overpass md:text-[13px]'>Microcontrolador versátil para diversos projetos.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>89,99</p>

                </div>

                <hr className='' />

                {/* div conteúdo jumpers */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={jumpersimg} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Jumpers</p>
                    <p className='md:font-overpass md:text-[13px]'>Cabos para conectar itens na protoboard.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>5,60</p>
                </div>

                <hr className='' />
              </div>

              {/* div protoboard/resistor */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo protoboard */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={protoboardimg} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Protoboard</p>
                    <p className='md:font-overpass md:text-[13px]'>Placa de ensaio com conexões condutoras.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>7,50</p>

                </div>

                <hr className='' />

                {/* div conteúdo resistor */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={resistorimg} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Resistor</p>
                    <p className='md:font-overpass md:text-[13px]'>Componente que limita a corrente em um circuito.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>1,50</p>
                </div>

                <hr className='' />
              </div>
            </div>

          </div>

          {/* div aromatizador */}
          <div className='md:mt-[48px]'>
            <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px]'>Aromatizador</p>

            {/* div para flex */}
            <div className='md:flex md:gap-6 xl:gap-16'>

              {/* div placa driver */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo placa driver */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={umidificadora} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Placa de driver</p>
                    <p className='md:font-overpass md:text-[13px]'>Aumenta a umidade do ar em ambientes fechados.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>58,04</p>

                </div>

                <hr className='' />

              </div>

              {/* div módulo relé */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo módulo relé */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={modulorele} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Módulo relé</p>
                    <p className='md:font-overpass md:text-[13px]'>Aciona qualquer carga específica energética.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>12,00</p>

                </div>

                <hr className='' />
                
              </div>
            </div>

          </div>

          {/* div luminária */}
          <div className='md:mt-[48px]'>
            <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px]'>Luminária</p>

            {/* div para flex */}
            <div className='md:flex md:gap-6 xl:gap-16'>

              {/* div led/módulo */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo led */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={leds} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Fita LED WS2812B</p>
                    <p className='md:font-overpass md:text-[13px]'>Emissores de luz utilizados em projetos eletrônicos.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>24,80</p>

                </div>

                <hr className='' />

                {/* div conteúdo rele */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={modulorele} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Módulo relé</p>
                    <p className='md:font-overpass md:text-[13px]'>Aciona qualquer carga específica energética.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>12,00</p>
                </div>

                <hr className='' />
              </div>

              {/* div protoboard/resistor */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo protoboard */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={modulotp4056} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Módulo TP4056</p>
                    <p className='md:font-overpass md:text-[13px]'>Carregador de baterias de lítio contra sobrecarga.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>5,60</p>

                </div>

                <hr className='' />

                {/* div conteúdo resistor */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={bateria} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Bateria</p>
                    <p className='md:font-overpass md:text-[13px]'>Carrega carga em componentes eletrônicos.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>32,00</p>
                </div>

                <hr className='' />
              </div>
            </div>

          </div>

          {/* div reprodutor de música */}
          <div className='md:mt-[48px]'>
            <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px]'>Reprodutor de música</p>

            {/* div para flex */}
            <div className='md:flex md:gap-6 xl:gap-16'>

              {/* div dfplayer */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo dfplayer */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={df} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>DFPlayer Mini</p>
                    <p className='md:font-overpass md:text-[13px]'>Módulo de áudio para reproduzir sons e músicas.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>22,77</p>

                </div>

                <hr className='' />

              </div>

              {/* div alto falante */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo alto falante */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={altofalante} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Alto falante</p>
                    <p className='md:font-overpass md:text-[13px]'>Dispositivo para emissão de som em sistemas eletrônicos.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>23,00</p>

                </div>

                <hr className='' />
                
              </div>
            </div>

          </div>

          {/* div relógio */}
          <div className='md:mt-[48px]'>
            <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px]'>Relógio</p>

            {/* div para flex */}
            <div className='md:flex md:gap-6 xl:gap-16'>

              {/* div relógio/rtc */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo relogio */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={display} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Display LED TM1637</p>
                    <p className='md:font-overpass md:text-[13px]'>Dispositivo que ilustra quatro dígitos do relógio.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>15,78</p>

                </div>

                <hr className='' />

              </div>

              {/* div rtc */}
              <div className='md:w-1/2'>
                <hr className='' />

                {/* div conteúdo rtc */}
                <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                  <div className='md:flex md:items-center'><img className='md:w-20' src={rtc} alt="" /></div>

                  {/* div conjunto de textos */}
                  <div>
                    <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2'>Módulo RTC</p>
                    <p className='md:font-overpass md:text-[13px]'>Módulo de relógio para controle preciso de tempo.</p>
                  </div>

                  <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo'>29,99</p>

                </div>

                <hr className='' />
                
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
