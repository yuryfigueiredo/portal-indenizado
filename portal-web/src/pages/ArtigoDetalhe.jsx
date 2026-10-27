import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, CheckSquare, ShieldCheck, ArrowRight, Sparkles, Scale } from 'lucide-react';
import { articles } from '../data/articlesData';
import TriageWidget from '../components/TriageWidget';

export default function ArtigoDetalhe() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <article className="min-h-screen bg-slate-50/40 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* LINK VOLTAR */}
        <div>
          <Link
            to="/noticias"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todas as notícias</span>
          </Link>
        </div>

        {/* CABEÇALHO DO ARTIGO */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full text-white ${article.categoryBadgeColor}`}>
              {article.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-medium">
            {article.summary}
          </p>
        </header>

        {/* IMAGEM PRINCIPAL */}
        <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden relative shadow-sm border border-slate-200">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ========================================================
            BLOCO 1: RESPOSTA DIRETA NO 1º PARÁGRAFO (FEATURED SNIPPET)
            ======================================================== */}
        <section className="bg-blue-50/70 border-l-4 border-blue-600 p-6 sm:p-7 rounded-2xl shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Resposta Rápida (Direito Resumido)</span>
          </div>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
            {article.featuredSnippet}
          </p>
        </section>

        {/* ========================================================
            BLOCO 2: CTA / WIDGET INTERATIVO NO MEIO DO TEXTO
            ======================================================== */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-950 p-6 sm:p-8 rounded-3xl text-white shadow-lg space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              Simulação Instantânea
            </span>
            <h3 className="text-xl sm:text-2xl font-black">{article.midCta.headline}</h3>
            <p className="text-xs text-slate-300">
              Faça a triagem do seu caso em 1 minuto sem custos iniciais.
            </p>
          </div>
          <Link
            to={`/simulacao?tipo=${article.midCta.problemType}`}
            className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:opacity-95 text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>{article.midCta.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ========================================================
            BLOCO 3: EXPLICAÇÃO PRÁTICA DOS DIREITOS (SEM JURIDIQUÊS)
            ======================================================== */}
        <section className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
          <h2 className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-3">
            O que diz a lei e quais são os seus direitos
          </h2>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            {article.legalExplanation.map((block, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">{block.title}</h3>
                <p className="text-slate-600 leading-relaxed">{block.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            BLOCO 4: CHECKLIST DE PROVAS NECESSÁRIAS
            ======================================================== */}
        <section className="bg-emerald-50/50 border border-emerald-200/80 p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-lg">
            <CheckSquare className="w-5 h-5 text-emerald-600" />
            <span>Checklist de Provas: O que você precisa guardar agora</span>
          </div>

          <p className="text-xs text-slate-600">
            Quanto mais comprovantes você tiver, mais rápido os advogados parceiros conseguem apurar o valor da sua indenização:
          </p>

          <ul className="space-y-2.5 pt-2">
            {article.proofChecklist.map((proof, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                <span className="w-4 h-4 rounded-md bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{proof}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ========================================================
            BLOCO 5: BOX DE FECHAMENTO / FORMULÁRIO DE FUNDO DE ARTIGO
            ======================================================== */}
        <section className="space-y-4 pt-4">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900">
              Calcule sua Indenização Agora Mesmo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Agora que você já sabe quais são os seus direitos e as provas necessárias, faça a simulação abaixo para iniciar a qualificação do seu caso:
            </p>
          </div>

          <TriageWidget initialProblem={article.midCta.problemType} compact={true} />
        </section>

      </div>
    </article>
  );
}
