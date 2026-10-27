import React from 'react';
import { useSearchParams } from 'react-router-dom';
import TriageWidget from '../components/TriageWidget';
import { ShieldCheck, Clock, CheckCircle2, FileText, HelpCircle } from 'lucide-react';

export default function Simulacao() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('tipo') || 'voo';

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA PÁGINA */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100/60 text-cyan-800 border border-cyan-200">
            Calculadora & Triagem Gratuita
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Descubra se o seu caso tem direito a indenização
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Responda em 3 passos rápidos. Nossa tecnologia valida os requisitos jurídicos e conecta você a advogados parceiros sem nenhum custo inicial.
          </p>
        </div>

        {/* ÁREA CENTRAL COM O WIDGET */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7">
            <TriageWidget initialProblem={initialType} />
          </div>

          {/* COLUNA LATERAL DE APOIO / GARANTIAS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Garantias da Nossa Plataforma</span>
              </h3>

              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>100% Gratuito para simular:</strong> Não cobramos nada pela triagem ou cálculo do seu direito.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Só pague se ganhar:</strong> Nossos advogados parceiros trabalham no modelo de êxito (no cure, no pay).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Prazo legal de 5 anos:</strong> Problemas ocorridos nos últimos 5 anos ainda podem ser indenizados pelo CDC.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Segurança LGPD:</strong> Seus dados são protegidos por criptografia e usados exclusivamente para a análise.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-6 text-white space-y-3 shadow-md">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Valores Médios Conforme Tribunais
              </span>
              <h4 className="text-xl font-black">Quanto posso receber?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                As decisões judiciais brasileiras (STJ e Tribunais Estaduais) costumam fixar indenizações por danos morais entre <strong>R$ 3.000 e R$ 15.000</strong> dependendo da gravidade e das provas apresentadas.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
