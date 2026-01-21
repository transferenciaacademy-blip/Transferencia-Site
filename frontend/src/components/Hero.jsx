import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleCTA = () => {
    window.open('https://transferenciaacademy.classbuild.com/payments/classpay-asaas/purchase/transferencia-academy-2', '_blank');
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b"
          alt="Campus Universitário"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A40]/95 via-[#0A1A40]/90 to-[#0A1A40]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#D4A017]" />
            <span className="text-[#D4A017] text-sm font-medium">A melhor escolha para sua transferência</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Realize seu sonho de estudar na
            <span className="text-[#D4A017] block mt-2">universidade ideal</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl animate-slide-up animation-delay-200">
            A Transferência Academy prepara você para conquistar sua vaga nas melhores universidades do Brasil através de transferência externa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4A017]/50"
            >
              Quero me Inscrever
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A1A40] font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in animation-delay-600">
            {[
              { valor: '500+', label: 'Alunos Aprovados' },
              { valor: '50+', label: 'Universidades' },
              { valor: '95%', label: 'Satisfação' },
              { valor: '24/7', label: 'Suporte' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#D4A017] mb-2">{stat.valor}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-[#D4A017] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#D4A017] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
