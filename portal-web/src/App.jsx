import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Simulacao from './pages/Simulacao';
import ComoFunciona from './pages/ComoFunciona';
import Noticias from './pages/Noticias';
import ArtigoDetalhe from './pages/ArtigoDetalhe';
import ParaAdvogados from './pages/ParaAdvogados';
import DuvidasFrequentes from './pages/DuvidasFrequentes';
import TermosLGPD from './pages/TermosLGPD';

// Componente para rolar ao topo nas mudanças de rota
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulacao" element={<Simulacao />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:slug" element={<ArtigoDetalhe />} />
            <Route path="/para-advogados" element={<ParaAdvogados />} />
            <Route path="/duvidas-frequentes" element={<DuvidasFrequentes />} />
            <Route path="/termos" element={<TermosLGPD />} />
            <Route path="/privacidade" element={<TermosLGPD />} />
            <Route path="/compliance-oab" element={<TermosLGPD />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
