import React from 'react';
import { mockDepoimentos } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1A40] mb-4">
            Histórias de sucesso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos alunos aprovados têm a dizer sobre a Transferência Academy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockDepoimentos.map((depoimento, index) => (
            <Card
              key={depoimento.id}
              className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 relative overflow-hidden group"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-[#D4A017]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.nota)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4A017] text-[#D4A017]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{depoimento.depoimento}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    src={depoimento.foto}
                    alt={depoimento.nome}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4A017]"
                  />
                  <div>
                    <h4 className="font-bold text-[#0A1A40]">{depoimento.nome}</h4>
                    <p className="text-sm text-[#D4A017] font-medium">{depoimento.curso}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-[#0A1A40] rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#D4A017] mb-2">500+</div>
              <div className="text-white">Alunos Aprovados</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4A017] mb-2">50+</div>
              <div className="text-white">Universidades Parceiras</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4A017] mb-2">4.9/5</div>
              <div className="text-white">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
