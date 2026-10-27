import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DuvidasFrequentes() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Quanto custa para fazer a simulação no Portal do Indenizado?',
      a: 'A simulação e a triagem são 100% gratuitas. Você não paga absolutamente nada para saber se tem direito e calcular a estimativa da sua indenização.'
    },
    {
      q: 'Como funciona o modelo "Só pague se ganhar" (No Cure, No Pay)?',
      a: 'Os advogados parceiros credenciados na nossa plataforma atuam no modelo de êxito. Isso significa que você não desembolsa nenhum valor no início. Caso o processo seja vencedor, uma porcentagem do valor recuperado é repassada aos advogados conforme contrato prévio de honorários. Se você não ganhar, você não paga nada.'
    },
    {
      q: 'Até quanto tempo após o ocorrido eu ainda posso buscar indenização?',
      a: 'Pelo Código de Defesa do Consumidor (art. 27 do CDC), você tem até 5 anos para pedir reparação por danos morais e materiais causados por má prestação de serviços (incluindo companhias aéreas, bancos e concessionárias de energia).'
    },
    {
      q: 'Quanto tempo costuma demorar para receber a indenização?',
      a: 'Em média, acordos extrajudiciais podem ser concluídos entre 30 e 90 dias. Processos nos Juizados Especiais Cíveis (JEC) costumam levar de 4 a 10 meses dependendo da comarca.'
    },
    {
      q: 'O Portal do Indenizado é um escritório de advocacia?',
      a: 'Não. O Portal do Indenizado é uma plataforma tecnológica de triagem, cálculo preliminar e organização documental. Conectamos os consumidores diretamente a advogados autônomos e escritórios parceiros regularmente inscritos na OAB, em rigorosa conformidade com o Provimento 205/2021 da OAB.'
    },
    {
      q: 'Meus dados e documentos estão seguros?',
      a: 'Sim, seguimos padrões rigorosos da Lei Geral de Proteção de Dados (LGPD). Seus documentos e dados de contato são criptografados e utilizados única e exclusivamente para a avaliação técnica do seu caso.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* CABEÇALHO */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900 border border-cyan-200">
            Perguntas & Respostas Frequentes
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Tire Todas as Suas Dúvidas
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Entenda como funciona a triagem, os prazos legais e por que você não tem nenhum risco financeiro ao buscar seus direitos.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOX DE CONTATO DIRETO */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900">Ainda tem alguma dúvida específica?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Fale diretamente com nossa equipe de suporte pelo WhatsApp e tire suas dúvidas em tempo real:
          </p>
          <a
            href="https://wa.me/5521997506921"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
