import React, { useState } from 'react';
import {
  Plane,
  CreditCard,
  ShieldAlert,
  Zap,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageCircle,
  FileCheck
} from 'lucide-react';

export default function TriageWidget({ initialProblem = 'voo', compact = false }) {
  const [step, setStep] = useState(1);
  const [problem, setProblem] = useState(initialProblem);
  const [formData, setFormData] = useState({
    empresa: '',
    tempoOcorrido: 'menos_3_meses',
    detalhes: '',
    nome: '',
    whatsapp: '',
    email: '',
    aceitouTermos: true
  });
  const [finished, setFinished] = useState(false);

  const problemas = [
    { id: 'voo', title: 'Voo Cancelado/Atrasado', icon: Plane, estimativa: 'R$ 4.000 a R$ 10.000' },
    { id: 'negativado', title: 'Nome Negativado', icon: CreditCard, estimativa: 'R$ 5.000 a R$ 15.000' },
    { id: 'pix', title: 'Golpes Bancários/Pix', icon: ShieldAlert, estimativa: 'Recuperação do Valor + Danos' },
    { id: 'luz_agua', title: 'Corte de Luz/Água', icon: Zap, estimativa: 'R$ 5.000 a R$ 12.000' },
    { id: 'outro', title: 'Outro Problema', icon: HelpCircle, estimativa: 'Avaliação Individual' },
  ];

  const currentProblemData = problemas.find(p => p.id === problem) || problemas[0];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePrevStep = handlePrev;
  const handleNextStep = handleNext;

  return (
    <div className={`bg-white/95 backdrop-blur-xl rounded-[28px] ${compact ? 'p-5 sm:p-6 shadow-lg' : 'p-6 sm:p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.12)]'} border border-slate-100 relative transition-all`}>
      
      {/* Badge Superior */}
      <div className="flex justify-center mb-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 border border-cyan-100">
          <Sparkles className="w-3 h-3 text-cyan-600" />
          <span>Triagem Rápida</span>
        </span>
      </div>

      {!finished ? (
        <>
          <h2 className={`${compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} font-extrabold text-center text-slate-800 mb-6`}>
            {step === 1 && 'Qual é o seu problema?'}
            {step === 2 && 'Detalhes do que aconteceu'}
            {step === 3 && 'Onde enviamos o resultado da análise?'}
          </h2>

          {/* PASSO 1: Seleção do Problema */}
          {step === 1 && (
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-3">
                {problemas.slice(0, 2).map((item) => {
                  const Icon = item.icon;
                  const isSelected = problem === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProblem(item.id)}
                      className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-sm ring-1 ring-blue-500'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`} />
                      <span className="text-[12px] font-bold leading-tight">{item.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {problemas.slice(2, 5).map((item) => {
                  const Icon = item.icon;
                  const isSelected = problem === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProblem(item.id)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 text-blue-900 shadow-sm ring-1 ring-blue-500'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-1.5 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`} />
                      <span className="text-[11px] font-bold leading-tight">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* PASSO 2: Detalhes do Caso */}
          {step === 2 && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Qual empresa gerou o transtorno?
                </label>
                <input
                  type="text"
                  placeholder="Ex: Latam, Gol, Azul, Enel, Nubank, Banco do Brasil..."
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Quando ocorreu o problema?
                </label>
                <select
                  value={formData.tempoOcorrido}
                  onChange={(e) => setFormData({ ...formData, tempoOcorrido: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                >
                  <option value="menos_3_meses">Nos últimos 3 meses</option>
                  <option value="3_a_12_meses">Entre 3 e 12 meses atrás</option>
                  <option value="mais_1_ano">Entre 1 e 5 anos atrás (Ainda no prazo legal de 5 anos)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Resumo rápido do ocorrido (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Voo cancelado em cima da hora sem hotel, conta paga e luz cortada..."
                  value={formData.detalhes}
                  onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>
            </div>
          )}

          {/* PASSO 3: Contato */}
          {step === 3 && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome Completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp com DDD (para envio da análise)</label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  required
                />
              </div>

              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <input
                  type="checkbox"
                  id="lgpd"
                  checked={formData.aceitouTermos}
                  onChange={(e) => setFormData({ ...formData, aceitouTermos: e.target.checked })}
                  className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="lgpd">
                  Concordo em receber a avaliação gratuita do meu caso por advogados parceiros conforme a LGPD.
                </label>
              </div>
            </div>
          )}

          {/* Barra de Progresso */}
          <div className="mb-5">
            <div className="flex justify-between items-center text-[12px] text-slate-500 font-medium mb-1.5">
              <span className="text-cyan-700 font-bold">
                {step === 1 && '1. Categoria'}
                {step === 2 && '2. Qualificação'}
                {step === 3 && '3. Conclusão'}
              </span>
              <span>Passo {step} de 3</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-2">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-3.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                aria-label="Voltar etapa"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600 hover:opacity-95 text-white font-bold py-3.5 px-6 rounded-full shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 text-sm sm:text-base transition-all transform active:scale-[0.99]"
            >
              <span>{step === 3 ? 'Calcular Minha Indenização' : 'Avançar para o Resultado'}</span>
              <ArrowRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </>
      ) : (
        /* TELA DE SUCESSO / CÁLCULO FINAL */
        <div className="py-4 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-2">
              94% de Probabilidade de Êxito
            </span>
            <h3 className="text-2xl font-extrabold text-slate-800">Caso Elegível para Indenização!</h3>
            <p className="text-xs text-slate-500 mt-1">
              Com base no Código de Defesa do Consumidor e normas da ANAC para <strong>{formData.empresa || currentProblemData.title}</strong>:
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
              Estimativa Média de Indenização
            </span>
            <span className="text-3xl font-black text-blue-900 block mt-1">
              {currentProblemData.estimativa}
            </span>
            <span className="text-[11px] text-slate-500 block mt-1">
              Só pague se ganhar. Sem taxas ou adiantamentos ao ingressar com o pedido.
            </span>
          </div>

          <div className="space-y-2">
            <a
              href={`https://wa.me/5521997506921?text=Ol%C3%A1%2C%20fiz%20a%20triagem%20no%20Portal%20do%20Indenizado%20para%20o%20caso%20de%20${encodeURIComponent(currentProblemData.title)}%20(${encodeURIComponent(formData.empresa || 'empresa')})%20e%20gostaria%20de%20falar%20com%20o%20advogado%20parceiro.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-full shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Conectar com Escritório Parceiro no WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setFinished(false);
                setStep(1);
              }}
              className="text-xs text-slate-500 hover:text-slate-700 underline block mx-auto pt-1"
            >
              Fazer outra simulação
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
