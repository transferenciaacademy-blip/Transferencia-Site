import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  const handleCTA = () => {
    window.open('https://transferenciaacademy.classbuild.com/payments/classpay-asaas/purchase/transferencia-academy-2', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1A40] via-[#0A1A40] to-[#0d2557]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-white/10">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#D4A017]" />
                <span className="text-[#D4A017] text-sm font-medium">Vagas Limitadas</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Pronto para realizar seu sonho?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Não perca mais tempo! Garanta sua vaga na próxima turma e comece sua jornada rumo à universidade dos seus sonhos.
              </p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                {[
                { title: 'Início Imediato', desc: 'Comece hoje mesmo' },
                { title: 'Suporte 24/7', desc: 'Sempre ao seu lado' },
                { title: 'Garantia de Qualidade', desc: 'Método comprovado' }].
                map((benefit, index) =>
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-[#D4A017] font-bold mb-1">{benefit.title}</div>
                    <div className="text-gray-300 text-sm">{benefit.desc}</div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleCTA}
                size="lg"
                className="bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold text-xl px-12 py-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4A017]/50">

                Quero Começar Agora
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>500+ alunos aprovados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Avaliação 4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Suporte dedicado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTA;