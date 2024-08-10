import Home from "./pages/Home"
import SobreNos from "./pages/SobreNos"
import Referencias from "./pages/Referencias"
import Footer from "./pages/Footer"

export default function App() {
  return (
    <div>
      <main className="px-[30px] py-[50px]">
        <Home />
        <Referencias />
        <SobreNos />
      </main>
      <Footer />
    </div>
  )
}
