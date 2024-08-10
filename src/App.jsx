import Header from "./pages/Header"
import Inicial from "./pages/Inicial"
import Apresentacao from "./pages/Apresentacao"
import Diferencial from "./pages/Diferencial"
import Beneficios from "./pages/Beneficios"

export default function App() {
  return (
    <div>
      <main className="px-[30px] py-[50px]">
        <Header />
        <Inicial />
        <Apresentacao />
        <Diferencial />
        <Beneficios />
      </main>
    </div>
  )
}
