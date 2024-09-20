import { motion } from 'framer-motion';
import Header from "./Header"
import MaterialCarrossel from '../components/MaterialCarrossel'
import arduinoimg from '../assets/materiais/arduino.svg'

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
        </div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}>
            
            {/* geral */}

            <div className='mb-6'>
              <div className='flex justify-center mb-12'>
                <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Geral</p>
              </div>

              <hr />

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

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Jumpers</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Protoboard</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Resistor</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            {/* aromatizador */}

            <div className='mt-12 mb-6'>
              <div className='flex justify-center mb-12'>
                <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Aromatizador</p>
              </div>

              <hr />

              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Placa driver</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo relé</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            {/* luminária */}

            <div className='mt-12 mb-6'>
              <div className='flex justify-center mb-12'>
                <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Luminária</p>
              </div>

              <hr />

              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Fita LED WS2812B</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo relé</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo TP4056</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Bateria</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            {/* reprodutor de música */}

            <div className='mt-12 mb-6'>
              <div className='flex justify-center mb-12'>
                <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Reprodutor de música</p>
              </div>

              <hr />

              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>DFPlayer Mini</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Alto falante</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            {/* relógio */}

            <div className='mt-12 mb-6'>
              <div className='flex justify-center mb-12'>
                <p className='text-roxo-titulo font-karla font-bold text-[14px] uppercase'>Relógio</p>
              </div>

              <hr />

              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Display LED TM1637</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />

            <div className='mb-6'>
              <div className='flex mt-6 gap-6'>
                <div className='flex items-center'>
                  <img className='w-[70px]' src={arduinoimg} alt="" />
                </div>

                <div className=''>
                  <div className='flex justify-between'>
                    <h2 className='text-roxo-titulo font-karla font-bold text-[14px]'>Módulo RTC</h2>
                    <p className='text-roxo-titulo font-karla font-bold text-[14px]'>94,90</p>
                  </div>
                  <p className='text-texto-materiais font-overpass text-[14px] mt-2 w-4/5'>Microcontrolador versátil para diversos projetos.</p>
                </div>
              </div>
            </div>

            <hr />
            
        </motion.div>
    </div>
  )
}
