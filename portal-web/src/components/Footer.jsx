import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, Lock, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Coluna 1: Sobre */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                <Scale className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-tight">Portal do</span>
                <span className="block text-base font-extrabold text-white uppercase tracking-tight">Indenizado</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plataforma tecnológica de triagem prévia, organização documental e educação sobre direitos do consumidor. Facilitamos o acesso à justiça conectando cidadãos qualificados a escritórios de advocacia parceiros em todo o Brasil.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Seguro</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Conforme LGPD</span>
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link></li>
              <li><Link to="/simulacao" className="hover:text-cyan-400 transition-colors">Simulação Rápida</Link></li>
              <li><Link to="/como-funciona" className="hover:text-cyan-400 transition-colors">Como Funciona</Link></li>
              <li><Link to="/noticias" className="hover:text-cyan-400 transition-colors">Buscar Direitos (Notícias)</Link></li>
              <li><Link to="/duvidas-frequentes" className="hover:text-cyan-400 transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Principais Direitos</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/simulacao?tipo=voo" className="hover:text-cyan-400 transition-colors">Voo Atrasado ou Cancelado</Link></li>
              <li><Link to="/simulacao?tipo=negativado" className="hover:text-cyan-400 transition-colors">Nome Negativado Indevido</Link></li>
              <li><Link to="/simulacao?tipo=pix" className="hover:text-cyan-400 transition-colors">Golpe do Pix e Fraudes</Link></li>
              <li><Link to="/simulacao?tipo=luz_agua" className="hover:text-cyan-400 transition-colors">Corte de Energia ou Água</Link></li>
              <li><Link to="/simulacao?tipo=outro" className="hover:text-cyan-400 transition-colors">Outras Cobranças Abusivas</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Para Advogados & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Profissionais & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/para-advogados" className="text-cyan-400 font-semibold hover:underline">Seja um Escritório Parceiro</Link></li>
              <li><Link to="/termos" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-cyan-400 transition-colors">Política de Privacidade (LGPD)</Link></li>
              <li><Link to="/compliance-oab" className="hover:text-cyan-400 transition-colors">Compliance com a OAB</Link></li>
            </ul>
          </div>

        </div>

        {/* AVISO REGULATÓRIO OAB E COPYRIGHT */}
        <div className="pt-8 space-y-4 text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
          <p>
            <strong>Aviso Legal & Regras da OAB:</strong> O <em>portaldoindenizado.com.br</em> não é um escritório de advocacia e não presta consultoria jurídica privativa. Atuamos como ferramenta tecnológica de triagem, cálculo preliminar e organização documental, em estrita conformidade com o Código de Ética da OAB e o Provimento nº 205/2021. Os serviços jurídicos eventualmente contratados são prestados de forma autônoma por advogados devidamente inscritos na OAB.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <p>© {new Date().getFullYear()} Portal do Indenizado. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1 text-slate-400">
              Feito com excelência para descomplicar a justiça.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
