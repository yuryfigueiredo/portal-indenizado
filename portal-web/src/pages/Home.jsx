import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Lock, Clock, Smartphone, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import TriageWidget from '../components/TriageWidget';
import { articles } from '../data/articlesData';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Background Glows e Malha Decorativa */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-12 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Coluna Esquerda: Copywriting e Badges */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-500 font-medium text-base sm:text-lg">
                Teve problemas com voos, bancos ou serviços?
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
                Descubra em segundos se você tem direito a uma indenização.
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                Análise gratuita, online e sem burocracia.{' '}
                <span className="font-semibold text-slate-800">Só pague se ganhar.</span>
              </p>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
                    %
                  </div>
                  <span>Sem custos iniciais</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span>Parceiros em todo o Brasil</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
                    <Lock className="w-3 h-3" />
                  </div>
                  <span>Seguro e em conformidade com a LGPD</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: O Widget de Triagem Rápida */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30 -z-10" />
              <TriageWidget />
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA E NOTÍCIAS */}
      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Como Funciona (3 Passos) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Como Funciona
                </h2>
                <Link to="/como-funciona" className="text-xs font-bold text-blue-600 hover:underline">
                  Ver detalhes →
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative">
                {/* Passo 1 */}
                <div className="flex flex-col items-center text-center space-y-2 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 shadow-sm">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Faça a simulação rápida</h4>
                  <p className="text-xs text-slate-500 leading-snug">Simule online em 2 minutos</p>
                </div>

                <div className="hidden sm:block text-slate-300 font-bold text-lg">
                  ········➔
                </div>

                {/* Passo 2 */}
                <div className="flex flex-col items-center text-center space-y-2 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 shadow-sm">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Envie seus comprovantes</h4>
                  <p className="text-xs text-slate-500 leading-snug">Sem papelada, tudo pelo celular</p>
                </div>

                <div className="hidden sm:block text-slate-300 font-bold text-lg">
                  ········➔
                </div>

                {/* Passo 3 */}
                <div className="flex flex-col items-center text-center space-y-2 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 shadow-sm">
                    <Users className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Nossos parceiros resolvem</h4>
                  <p className="text-xs text-slate-500 leading-snug">Especialistas avaliam seu caso</p>
                </div>
              </div>

              {/* Box de Vantagens */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Modelo "Só pague se ganhar" (No Cure, No Pay)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Você não desembolsa nada para iniciar a análise. Os escritórios parceiros trabalham com foco no êxito da sua indenização.
                </p>
              </div>
            </div>

            {/* Últimas Notícias e Direitos */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Últimas Notícias e Direitos
                </h2>
                <Link to="/noticias" className="text-xs font-bold text-blue-600 hover:underline">
                  Ver todos os artigos →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {articles.slice(0, 3).map((art) => (
                  <article key={art.slug} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col">
                    <div className="h-32 bg-slate-800 relative overflow-hidden flex items-end p-3">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                      <span className={`relative z-20 text-[11px] font-bold px-2.5 py-0.5 rounded-md text-white ${art.categoryBadgeColor}`}>
                        {art.category}
                      </span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <h3 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {art.title}
                      </h3>
                      <Link
                        to={`/noticias/${art.slug}`}
                        className="text-[12px] font-semibold text-slate-500 group-hover:text-blue-600 flex items-center gap-1"
                      >
                        <span>Ler artigo completo</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BANNER B2B PARA ADVOGADOS */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Área para Profissionais do Direito
            </span>
            <h3 className="text-2xl font-black">Você é advogado ou possui escritório?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Receba leads qualificados e documentados com triagem prévia em conformidade total com o Provimento 205/2021 da OAB.
            </p>
          </div>
          <Link
            to="/para-advogados"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md shrink-0"
          >
            Quero ser Escritório Parceiro
          </Link>
        </div>
      </section>
    </div>
  );
}
