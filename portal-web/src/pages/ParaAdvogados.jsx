import React, { useState } from 'react';
import { Scale, ShieldCheck, CheckCircle2, Users, FileCheck, ArrowRight, Building, Award } from 'lucide-react';

export default function ParaAdvogados() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    oab: '',
    estado: 'SP',
    email: '',
    telefone: '',
    especialidade: 'Consumidor / Aéreo'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO B2B */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900 border border-cyan-200">
            Parceria Tecnológica B2B • Conforme OAB
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Receba Casos Qualificados e Documentados para seu Escritório
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Elimine o custo e o tempo de triagem manual. O Portal do Indenizado educa o consumidor, organiza as provas e entrega casos prontos para ajuizamento, em estrito cumprimento ao Provimento 205/2021 da OAB.
          </p>
        </div>

        {/* BENEFÍCIOS DO MODELO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Triagem Prévia & Provas</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Você não recebe apenas um nome e telefone. O cliente já passou pelo questionário de elegibilidade e já reúne os comprovantes essenciais (bilhetes, faturas pagas, boletins de ocorrência).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% em Compliance com a OAB</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Não atuamos com captação predatória nem divisão de honorários privativos. Nosso modelo operacional baseia-se em tecnologia, licença de software e triagem documental (Provimento 205/2021).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Demanda Qualificada em Escala</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Com nosso ecossistema de SEO transacional em massa, capturamos milhares de consumidores buscando ativamente reparação para voos, negativações indevidas e fraudes bancárias.
            </p>
          </div>

        </div>

        {/* FORMULÁRIO DE CREDENCIAMENTO */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900">Cadastre seu Escritório</h3>
            <p className="text-xs text-slate-600">
              Preencha os dados abaixo para receber o contato da nossa equipe de parcerias institucionais:
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nome do Advogado Responsável</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr(a). Nome Completo"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Número de Inscrição OAB</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 123456/SP"
                    value={form.oab}
                    onChange={(e) => setForm({ ...form, oab: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Institucional</label>
                  <input
                    type="email"
                    required
                    placeholder="contato@seuescritorio.adv.br"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">WhatsApp de Contato</label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Principal Nicho de Atuação</label>
                <select
                  value={form.especialidade}
                  onChange={(e) => setForm({ ...form, especialidade: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 bg-slate-50"
                >
                  <option value="Consumidor / Aéreo">Direito do Passageiro Aéreo</option>
                  <option value="Bancário / Golpes Pix">Direito Bancário e Fraudes Pix</option>
                  <option value="Negativação Indevida">Indenizações por Nome Negativado</option>
                  <option value="Serviços Públicos">Corte de Luz e Água / Energia</option>
                  <option value="Geral">Cível e Consumidor em Geral</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-full shadow-md transition-all text-sm mt-4 flex items-center justify-center gap-2"
              >
                <span>Solicitar Acesso à Plataforma de Parceiros</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Solicitação Enviada com Sucesso!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Nossa equipe de relacionamento institucional entrará em contato via WhatsApp e e-mail em até 24 horas úteis com os termos de adesão tecnológica.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
