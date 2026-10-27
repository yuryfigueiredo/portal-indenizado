import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Simulação Rápida', path: '/simulacao' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'Buscar Direitos (Notícias)', path: '/noticias' },
    { name: 'Dúvidas Frequentes', path: '/duvidas-frequentes' },
  ];

  return (
    <header className="w-full border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center text-cyan-600 border border-cyan-100 shadow-sm transition-colors">
            <Scale className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="leading-tight">
            <span className="block text-xs font-bold tracking-tight text-blue-950 uppercase">
              Portal do
            </span>
            <span className="block text-base font-extrabold tracking-tight text-blue-900 uppercase">
              Indenizado
            </span>
          </div>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors py-1 relative ${
                  isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOTÕES DE AÇÃO */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/para-advogados"
            className="bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm"
          >
            Para Advogados
          </Link>
          <a
            href="https://wa.me/5521997506921?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20meus%20direitos%20sobre%20uma%20indeniza%C3%A7%C3%A3o"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-800 text-[13px] font-semibold px-4 py-2.5 rounded-full transition-colors bg-white shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MENU MOBILE EXPANSÍVEL */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/para-advogados"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-full"
            >
              Para Advogados (B2B)
            </Link>
            <a
              href="https://wa.me/5521997506921"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-800 text-sm font-semibold py-2.5 rounded-full bg-white"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
