import React from 'react';
import { Search, UserPlus, BookMarked, TrendingUp, Award } from 'lucide-react';

const ComoFunciona = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Escolha sua Universidade',
      description: 'Selecione a universidade alvo para sua transferência em Medicina',
      color: 'from-[#D4A017] to-[#B8900F]',
    },
    {
      icon: UserPlus,
      number: '02',
      title: 'Inscreva-se na Academia',
      description: 'Faça sua matrícula e tenha acesso a todo material e suporte',
      color: 'from-[#D4A017] to-[#B8900F]',
    },
    {
      icon: BookMarked,
      number: '03',
      title: 'Estude com Foco',
      description: 'Acesse aulas, materiais e simulados específicos para Medicina',
      color: 'from-[#D4A017] to-[#B8900F]',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Acompanhe sua Evolução',
      description: 'Receba feedback constante e ajuste sua preparação',
      color: 'from-[#D4A017] to-[#B8900F]',
    },
    {
      icon: Award,
      number: '05',
      title: 'Realize a Prova',
      description: 'Chegue preparado e confiante no dia da prova de transferência',
      color: 'from-[#D4A017] to-[#B8900F]',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Como Funciona
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1A40] mb-4">
            Seu caminho para a aprovação em 5 passos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um processo simples e eficiente que já aprovou centenas de alunos
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017]/20 via-[#D4A017]/40 to-[#D4A017]/20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#0A1A40] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-[#D4A017] font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0A1A40] mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-[#D4A017]/40 z-10">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Quero começar minha preparação agora', '_blank')}
            className="bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Comece sua Jornada Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
