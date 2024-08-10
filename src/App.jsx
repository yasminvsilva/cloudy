// import { createBrowserRouter, RouterProvider } from "react-router-dom"

//import { Home } from "./pages/Home"

//const router = createBrowserRouter([
  //  //path: "/",
    //element: <Home />
  //}
//])

import Home from "./pages/Home"
import Guia from "./pages/Guia"
import Materiais from "./pages/Materiais"
import Referencias from "./pages/Referencias"
import SobreNos from "./pages/SobreNos"
import Footer from "./pages/Footer"

export default function App() {
  return (

    // <RouterProvider  router={router} />
    <div>
      <main className="px-[30px] py-[50px] lg:px-[100px]">
        <Home />
        {/* <Guia /> */}
        {/* <Materiais /> */}
        {/* <Referencias /> */}
        {/* <SobreNos /> */}
      </main>
      <Footer />
    </div>
  )
}
