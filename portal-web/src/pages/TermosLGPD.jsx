import React from 'react';
import { ShieldCheck, Lock, Scale } from 'lucide-react';

export default function TermosLGPD() {
  return (
    <div className="min-h-screen bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-800">
        
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Transparência & Conformidade Legal
          </span>
          <h1 className="text-3xl font-black text-slate-900">
            Termos de Uso, Política de Privacidade e Regras da OAB
          </h1>
          <p className="text-xs text-slate-500">Última atualização: Outubro de 2026</p>
        </div>

        <section className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <span>1. Natureza da Plataforma (Compliance com o Provimento 205/2021 da OAB)</span>
          </h2>
          <p>
            O <strong>portaldoindenizado.com.br</strong> é uma plataforma tecnológica de informação e facilitação de triagem prévia de direitos do consumidor. Esclarecemos de forma expressa que:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>A plataforma <strong>não é um escritório de advocacia</strong> e não presta serviços jurídicos privativos.</li>
            <li>A simulação e triagem disponibilizadas no site constituem ferramentas matemáticas e informativas de caráter preliminar.</li>
            <li>A eventual prestação de serviços jurídicos é realizada de forma autônoma e independente por advogados e sociedades de advogados devidamente inscritos na Ordem dos Advogados do Brasil (OAB).</li>
            <li>Não há intermediação de honorários sucumbenciais privativos ou mercantilização da atividade jurídica.</li>
          </ul>
        </section>

        <section className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            <span>2. Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</span>
          </h2>
          <p>
            Valorizamos a sua privacidade. Os dados fornecidos (como nome, telefone, email e relatos de ocorrência):
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>São coletados com base no consentimento expresso e na execução de procedimentos preliminares a pedido do titular (art. 7º da LGPD).</li>
            <li>São utilizados exclusivamente para a qualificação do caso e direcionamento seguro aos advogados parceiros autorizados.</li>
            <li>Não são vendidos, alugados ou compartilhados com empresas de marketing ou terceiros não envolvidos no atendimento.</li>
            <li>O titular pode solicitar a exclusão definitiva de seus dados a qualquer momento pelo canal de privacidade.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
