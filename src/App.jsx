import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Guia from './pages/Guia';
import Materiais from './pages/Materiais';
import Referencias from './pages/Referencias';
import SobreNos from './pages/SobreNos';
import Footer from './pages/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <main className="px-[32px] py-[50px] lg:px-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/materiais" element={<Materiais />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/sobrenos" element={<SobreNos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
