// import { createBrowserRouter, RouterProvider } from "react-router-dom"

//import { Home } from "./pages/Home"

//const router = createBrowserRouter([
  //  //path: "/",
    //element: <Home />
  //}
//])

import Home from "./pages/Home"
import SobreNos from "./pages/SobreNos"
import Referencias from "./pages/Referencias"
import Footer from "./pages/Footer"

export default function App() {
  return (

    // <RouterProvider  router={router} />
    <div>
      <main className="px-[30px] py-[50px]">
        <Home />
        {/* <Referencias /> */}
        {/* <SobreNos /> */}
      </main>
      <Footer />
    </div>
  )
}
