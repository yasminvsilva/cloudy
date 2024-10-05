import { motion } from 'framer-motion';
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

import arduinoDark from '../assets/materiais_dark/arduinoDark.svg'
import jumpersDark from '../assets/materiais_dark/jumpersDark.svg'
import protoboardDark from '../assets/materiais_dark/protoboardDark.svg'
import resistorDark from '../assets/materiais_dark/resistorDark.svg'
import umidificadoraDark from '../assets/materiais_dark/umidificadoraDark.svg'
import releDark from '../assets/materiais_dark/releDark.svg'
import litioDark from '../assets/materiais_dark/litioDark.svg'
import ledsDark from '../assets/materiais_dark/ledsDark.svg'
import bateriaDark from '../assets/materiais_dark/bateriaDark.svg'
import rtcDark from '../assets/materiais_dark/rtcDark.svg'
import afDark from '../assets/materiais_dark/afDark.svg'
import dfDark from '../assets/materiais_dark/dfDark.svg'
import displayDark from '../assets/materiais_dark/displayDark.svg'

export default function Materiais({ isDarkMode }) {
  return (
    <div>
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
            font-karla font-bold text-[25px] text-center mt-16 mb-16 leading-[125%] dark:text-white">Conheça os <span className="text-roxo-titulo">materiais</span> <br></br> por trás do Cloudy</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="
            xl:text-[18px]
            font-overpass text-justify mb-6 text-[16px] dark:text-white">Aqui você encontrará uma visão completa e detalhada dos componentes que utilizamos para dar vida ao <span className='font-bold text-azul-titulo'>Cloudy</span>. O nosso projeto é composto por várias partes integradas, cada uma desempenhando um papel crucial na funcionalidade geral.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="
            xl:text-[18px]
            font-overpass text-justify text-[16px] mb-16 dark:text-white"> Desde o controle do <span className='font-bold text-azul-titulo'>aromatizador</span> até a reprodução de <span className='font-bold text-azul-titulo'>música</span>, iluminação <span className='font-bold text-azul-titulo'>RGB</span> e a exibição do <span className='font-bold text-azul-titulo'>tempo</span>, cada seção apresenta componentes específicos que colaboram para o funcionamento harmonioso do sistema.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='md:hidden'>

          {/* geral */}
          <div className='flex justify-center mb-12'>
            <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase dark:text-roxo-claro'>Geral</p>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? arduinoDark : arduinoimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Arduíno UNO</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>94,90</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Microcontrolador versátil para diversos projetos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? jumpersDark : jumpersimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Jumpers</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>5,60</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Cabos para conectar componentes na protoboard.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? protoboardDark : protoboardimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Protoboard</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>7,50</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Placa de ensaio com conexões condutoras.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? resistorDark : resistorimg} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Resistor</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>1,50</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Componente que limita a corrente em um circuito.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          {/* aromatizador */}
          <div className='flex justify-center mt-12  mb-12'>
            <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase dark:text-roxo-claro'>Aromatizador</p>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? umidificadoraDark : umidificadora} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Placa driver</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>58,04</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Aumenta a umidade do ar em ambientes fechados.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? releDark : modulorele} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Módulo relé</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>12,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Aciona qualquer carga específica energética.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          {/* luminária */}
          <div className='flex justify-center mt-12 mb-12'>
            <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase dark:text-roxo-claro'>Luminária</p>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className=' mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? ledsDark : leds} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Fita LED WS2812B</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>24,80</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Emissores de luz utilizados em projetos eletrônicos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? releDark : modulorele} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Módulo relé</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>12,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Aciona qualquer carga específica energética.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? litioDark : modulotp4056} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Módulo TP4056</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>5,60</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Carregador de baterias de lítio contra sobrecarga.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? bateriaDark : bateria} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Bateria</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>32,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Carrega carga em componentes eletrônicos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          {/* reprodutor de música */}

          <div className='mt-12 mb-6'>
            <div className='flex justify-center mb-12'>
              <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase dark:text-roxo-claro'>Reprodutor de música</p>
            </div>

            <hr className='dark:border-linha' />

            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? dfDark : df} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>DFPlayer Mini</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>22,77</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Módulo de áudio para reproduzir sons e músicas.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? afDark : altofalante} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Alto falante</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>23,00</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Dispositivo para emissão de som em sistemas eletrônicos.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          {/* relógio */}

          <div className='mt-12 mb-6'>
            <div className='flex justify-center mb-12'>
              <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase dark:text-roxo-claro'>Relógio</p>
            </div>

            <hr className='dark:border-linha' />

            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? displayDark : display} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Display LED TM1637</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>15,78</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Dispositivo que ilustra quatro dígitos do relógio.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

          <div className='mb-6'>
            <div className='flex mt-6 gap-6'>
              <div className='flex items-center'>
                <img className='w-[70px]' src={isDarkMode ? rtcDark : rtc} alt="" />
              </div>

              <div className=''>
                <div className='flex justify-between'>
                  <h2 className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>Módulo RTC</h2>
                  <p className='text-roxo-titulo font-karla font-bold text-[14px] dark:text-roxo-claro'>29,99</p>
                </div>
                <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5 dark:text-white'>Módulo de relógio para controle preciso de tempo.</p>
              </div>
            </div>
          </div>

          <hr className='md:w-1/3 dark:border-linha' />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* div que engloba todos os cards */}
          <div className='
        xl:px-[30px]
        hidden md:block'>

            {/* div geral */}
            <div>
              <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px] dark:text-roxo-claro'>Geral</p>

              {/* div para flex */}
              <div className='md:flex md:gap-6 xl:gap-16 2xl:gap-32'>

                {/* div arduíno/jumpers */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo arduíno */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? arduinoDark : arduinoimg} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Arduíno UNO</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Microcontrolador versátil para diversos projetos.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>89,99</p>

                  </div>

                  <hr className='dark:border-linha' />

                  {/* div conteúdo jumpers */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? jumpersDark : jumpersimg} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Jumpers</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Cabos para conectar componentes na protoboard.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>5,60</p>
                  </div>

                  <hr className='dark:border-linha' />
                </div>

                {/* div protoboard/resistor */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo protoboard */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? protoboardDark : protoboardimg} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Protoboard</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Placa de ensaio com conexões condutoras.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>7,50</p>

                  </div>

                  <hr className='dark:border-linha' />

                  {/* div conteúdo resistor */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? resistorDark : resistorimg} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Resistor</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Componente que limita a corrente em um circuito.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>1,50</p>
                  </div>

                  <hr className='dark:border-linha' />
                </div>
              </div>

            </div>

            {/* div aromatizador */}
            <div className='md:mt-[48px]'>
              <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px] dark:text-roxo-claro'>Aromatizador</p>

              {/* div para flex */}
              <div className='md:flex md:gap-6 xl:gap-16 2xl:gap-32'>

                {/* div placa driver */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo placa driver */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? umidificadoraDark : umidificadora} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Placa de driver</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Aumenta a umidade do ar em ambientes fechados.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>58,04</p>

                  </div>

                  <hr className='dark:border-linha' />

                </div>

                {/* div módulo relé */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo módulo relé */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? releDark : modulorele} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Módulo relé</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Aciona qualquer carga específica energética.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>12,00</p>

                  </div>

                  <hr className='dark:border-linha' />

                </div>
              </div>

            </div>

            {/* div luminária */}
            <div className='md:mt-[48px]'>
              <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px] dark:text-roxo-claro'>Luminária</p>

              {/* div para flex */}
              <div className='md:flex md:gap-6 xl:gap-16 2xl:gap-32'>

                {/* div led/módulo */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo led */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? ledsDark : leds} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Fita LED WS2812B</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Emissores de luz utilizados em projetos eletrônicos.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>24,80</p>

                  </div>

                  <hr className='dark:border-linha' />

                  {/* div conteúdo rele */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? releDark : modulorele} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Módulo relé</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Aciona qualquer carga específica energética.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>12,00</p>
                  </div>

                  <hr className='dark:border-linha' />
                </div>

                {/* div protoboard/resistor */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo protoboard */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? litioDark : modulotp4056} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Módulo TP4056</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Carregador de baterias de lítio contra sobrecarga.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>5,60</p>

                  </div>

                  <hr className='dark:border-linha' />

                  {/* div conteúdo resistor */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? bateriaDark : bateria} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Bateria</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Carrega carga em componentes eletrônicos.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>32,00</p>
                  </div>

                  <hr className='dark:border-linha' />
                </div>
              </div>

            </div>

            {/* div reprodutor de música */}
            <div className='md:mt-[48px]'>
              <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px] dark:text-roxo-claro'>Reprodutor de música</p>

              {/* div para flex */}
              <div className='md:flex md:gap-6 xl:gap-16 2xl:gap-32'>

                {/* div dfplayer */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo dfplayer */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? dfDark : df} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>DFPlayer Mini</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Módulo de áudio para reproduzir sons e músicas.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>22,77</p>

                  </div>

                  <hr className='dark:border-linha' />

                </div>

                {/* div alto falante */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo alto falante */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? afDark : altofalante} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Alto falante</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Dispositivo para emissão de som em sistemas eletrônicos.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>23,00</p>

                  </div>

                  <hr className='dark:border-linha' />

                </div>
              </div>

            </div>

            {/* div relógio */}
            <div className='md:mt-[48px]'>
              <p className='md:font-karla md:font-bold md:uppercase md:text-[14px] md:text-roxo-titulo md:text-center md:mb-[48px] dark:text-roxo-claro'>Relógio</p>

              {/* div para flex */}
              <div className='md:flex md:gap-6 xl:gap-16 2xl:gap-32'>

                {/* div relógio/rtc */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo relogio */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? displayDark : display} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Display LED TM1637</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Dispositivo que ilustra quatro dígitos do relógio.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>15,78</p>

                  </div>

                  <hr className='dark:border-linha' />

                </div>

                {/* div rtc */}
                <div className='md:w-1/2'>
                  <hr className='dark:border-linha' />

                  {/* div conteúdo rtc */}
                  <div className='md:flex md:mt-[24px] md:mb-[24px] md:gap-5'>
                    <div className='md:flex md:items-center'><img className='md:w-20' src={isDarkMode ? rtcDark : rtc} alt="" /></div>

                    {/* div conjunto de textos */}
                    <div>
                      <p className='md:font-karla md:font-bold md:text-[14px] md:text-roxo-titulo md:mb-2 dark:text-roxo-claro'>Módulo RTC</p>
                      <p className='md:font-overpass md:text-[13px] dark:text-white'>Módulo de relógio para controle preciso de tempo.</p>
                    </div>

                    <p className='md:font-karla md:font-bold md:text-[13px] md:text-roxo-titulo dark:text-roxo-claro'>29,99</p>

                  </div>

                  <hr className='dark:border-linha' />

                </div>
              </div>

            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}
