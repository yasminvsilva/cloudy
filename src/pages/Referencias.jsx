import Header from './Header'

export default function SobreNos() {
  return (
    <div>
        <Header />
        <div>   
            <h1 className='font-karla font-bold text-[25px] mt-16 mb-16 text-center'>A <span style={{background: 'linear-gradient(to right, #735EA0 0%, #5EA079 50%, #4C8293 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>credibilidade</span> é a chave para a confiança</h1>
            <p className='font-overpass text-[14px] text-justify mb-6'>A ciência comprova que o sono é de extrema importância para promover a saúde e o bem-estar. Um sono de má qualidade pode propiciar má disposição, um desempenho ruim em atividades, estresse e ocasionar distúrbios do sono, como a insônia.</p>
            <p className='font-overpass text-[14px] text-justify mb-6'>Apesar de os mitos populares relatarem que a aromaterapia é uma medida ineficaz, pesquisas indicam que a utilização terapêutica dos óleos essenciais surge como uma estratégia promissora na melhoria da qualidade do sono.</p>
            <p className='font-overpass text-[14px] text-justify mb-6'>Estudos aprofundam ainda mais essa questão, revelando que o óleo essencial de lavanda demonstra efeitos relaxantes e sedativos, atuando no sistema nervoso central para reduzir sintomas de ansiedade e insônia.</p>
            <p className='font-overpass text-[14px] text-justify mb-12'>Portanto, não há como negar que a aromaterapia é uma opção valiosa para aqueles que buscam aprimorar seu sono de maneira natural, pois, além de melhorar a qualidade do sono, melhora a qualidade de vida.</p>
        </div>

        <div className='flex flex-col items-center justify-center px-[16px]'>
            <h2 className='font-karla font-medium text-[19px] mb-3 text-center'>Artigos de embasamento científico</h2>
            <p className='font-overpass text-cinza mb-8 text-[14px]'>Clique para ser direcionado</p>
        </div>

        <div className='text-roxo-titulo text-[14px] font-medium text-justify flex flex-col justify-center items-center px-[10px]'>
            <a className='hover:cursor-pointer mb-6 text-center' href="https://recima21.com.br/index.php/recima21/article/view/2415" target="_blank">Influência dos ruídos brancos na qualidade do sono</a>
            <a className='hover:cursor-pointer mb-6 text-center' href="http://www.mastereditora.com.br/periodico/20140702_165353.pdf" target="_blank">Transtornos do ciclo sono-vigília/circadiano</a>
            <a className='hover:cursor-pointer text-center' href="https://bjihs.emnuvens.com.br/bjihs/article/view/1462" target="_blank">Influência dos óleos essenciais na melhoria do sono</a>
        </div>
    </div>
  )
}
