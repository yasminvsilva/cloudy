import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './pages/Header';
import Inicial from './pages/Inicial.jsx';
import Beneficios from './pages/Beneficios.jsx';
import Apresentacao from './pages/Apresentacao.jsx';
import Diferencial from './pages/Diferencial.jsx';
import Guia from './pages/Guia';
import Jogo from './pages/Jogo.jsx';
import Materiais from './pages/Materiais';
import Referencias from './pages/Referencias';
import SobreNos from './pages/SobreNos';
import Footer from './pages/Footer';
import BotaoSubir from './components/BotaoSubir.jsx'

import { useState, useEffect } from 'react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark', isDarkMode); // Adiciona ou remove a classe 'dark'
  }, [isDarkMode]);

  return (
    <Router>
      <div>
        <BotaoSubir isDarkMode={isDarkMode} />
        <main className="2xl:px-[300px] lg:px-[110px] lg:py-[55px] md:px-[48px] md:py-[55px] px-[32px] py-[50px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  <Inicial isDarkMode={isDarkMode} />
                  <Apresentacao />
                  <Diferencial isDarkMode={isDarkMode} />
                  <Beneficios isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route
              path="/guia"
              element={
                <>
                  <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  <Guia isDarkMode={isDarkMode} />
                </>
              } />
            <Route
              path="/jogo"
              element={
                <>
                  <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  <Jogo isDarkMode={isDarkMode} />
                </>
              } />
            <Route
              path="/materiais"
              element={
                <>
                  <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  <Materiais isDarkMode={isDarkMode} />
                </>
              } />
            <Route
              path="/referencias"
              element={
                <>
                  <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  <Referencias />
                </>
              } />
            <Route
              path="/sobrenos"
              element={
                <>
                  <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                  <SobreNos isDarkMode={isDarkMode} />
                </>
              } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

