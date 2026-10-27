import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Smartphone, Users, ShieldCheck, ArrowRight, XCircle, CheckCircle, Scale } from 'lucide-react';

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-white py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            Processo 100% Digital e Descomplicado
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Como Funciona o Portal do Indenizado
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Criamos uma ponte tecnológica para eliminar o "juridiquês", organizar seus comprovantes e garantir que seu direito seja defendido por especialistas.
          </p>
        </div>

        {/* OS 3 PASSOS DETALHADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Passo 1 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-cyan-300 transition-colors">
            <div className="space-y-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600 text-white font-extrabold text-sm">
                01
              </span>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Faça a Simulação Rápida</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Você responde poucas perguntas sobre o problema que enfrentou (voo cancelado, nome sujo, golpe do Pix ou corte de luz). Nosso algoritmo checa na hora se o caso é elegível.
              </p>
            </div>
            <span className="text-[11px] font-bold text-cyan-700">Duração: menos de 2 minutos</span>
          </div>

          {/* Passo 2 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-cyan-300 transition-colors">
            <div className="space-y-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-sm">
                02
              </span>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Envie seus Comprovantes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sem filas, sem imprimir papel e sem deslocamento. Basta fotografar seus comprovantes (prints, bilhetes, faturas ou boletim de ocorrência) diretamente pelo celular.
              </p>
            </div>
            <span className="text-[11px] font-bold text-blue-700">100% pelo celular</span>
          </div>

          {/* Passo 3 */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 flex flex-col justify-between hover:border-cyan-300 transition-colors">
            <div className="space-y-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold text-sm">
                03
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Nossos Parceiros Resolvem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conectamos seu caso documentado a advogados especialistas parceiros que cuidam de todo o processo judicial ou acordo extrajudicial até a indenização cair na sua conta.
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-700">Só pague se ganhar</span>
          </div>

        </div>

        {/* COMPARATIVO: SOZINHO VS PORTAL */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="bg-slate-900 text-white p-6 text-center sm:text-left">
            <h3 className="text-xl font-bold">Por que fazer pelo Portal do Indenizado?</h3>
            <p className="text-xs text-slate-400 mt-1">Veja a diferença entre tentar resolver burocracias sozinho e usar nossa triagem:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Sozinho */}
            <div className="p-6 sm:p-8 space-y-4 bg-slate-50/50">
              <h4 className="text-base font-bold text-rose-800 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>Tentando Reclamar Sozinho</span>
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Horas no SAC e atendentes que desligam na sua cara</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Empresas oferecendo créditos ou vouchers ridículos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Incerteza sobre prazos, documentos e leis aplicáveis</span>
                </li>
              </ul>
            </div>

            {/* Com o Portal */}
            <div className="p-6 sm:p-8 space-y-4 bg-white">
              <h4 className="text-base font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Com o Portal do Indenizado</span>
              </h4>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Triagem jurídica em 2 minutos sem custo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Advogados experientes brigando pelo valor máximo da indenização</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Risco Zero: se não houver ganho, você não paga absolutamente nada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center pt-4">
          <Link
            to="/simulacao"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-teal-500/20 hover:opacity-95 transition-all"
          >
            <span>Fazer Minha Simulação Gratuita Agora</span>
            <ArrowRight className="w-5 h-5 stroke-[2.2]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
