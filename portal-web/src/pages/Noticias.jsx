import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, ArrowRight, Clock } from 'lucide-react';
import { articles } from '../data/articlesData';

export default function Noticias() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Direito do Passageiro', 'Serviços Públicos', 'Direito do Consumidor'];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* CABEÇALHO DO HUB DE NOTÍCIAS */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100/60 text-cyan-800 border border-cyan-200">
            Hub de Conteúdo & Direitos do Cidadão
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Buscar Direitos & Notícias Jurídicas
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Guias práticos e notícias sem "juridiquês" para você entender exatamente quando uma dor de cabeça dá direito a indenização em dinheiro.
          </p>
        </div>

        {/* BARRA DE PESQUISA E FILTROS */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          
          {/* Input de Busca */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar por assunto: voo cancelado, Enel, golpe do Pix, nome sujo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/60"
            />
          </div>

          {/* Categorias Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Categorias:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* GRID DE ARTIGOS */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full text-white ${art.categoryBadgeColor} shadow-xs`}>
                      {art.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300">
                    <span>{art.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link to={`/noticias/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/noticias/${art.slug}`}
                      className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>Ler guia completo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/simulacao?tipo=${art.midCta.problemType}`}
                      className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md hover:bg-emerald-100"
                    >
                      Calcular valor
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-600">Nenhum artigo encontrado para os filtros selecionados.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
