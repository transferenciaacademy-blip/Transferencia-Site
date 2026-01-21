import React from 'react';
import { mockDiferenciais } from '../mock';
import { GraduationCap, BookOpen, Users, FileCheck } from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Users: Users,
  FileCheck: FileCheck,
};

const Diferenciais = () => {
  return (
    <section className="py-20 bg-white pb-0 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossos Diferenciais
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1A40] mb-4">
            Por que escolher a Transferência Academy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos tudo que você precisa para conquistar sua aprovação
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mockDiferenciais.map((diferencial, index) => {
            const IconComponent = iconMap[diferencial.icon];
            return (
              <div
                key={diferencial.id}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-[#D4A017] rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#0A1A40] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-[#D4A017] font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0A1A40] mb-3 text-center">
                    {diferencial.titulo}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {diferencial.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Image Section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
            alt="Sala de aula profissional"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A40]/90 to-[#0A1A40]/70 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Metodologia testada e aprovada
                </h3>
                <p className="text-xl text-gray-200 mb-6">
                  Nossa abordagem de ensino é baseada em anos de experiência e centenas de aprovações nas melhores universidades do Brasil.
                </p>
                <button
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Quero conhecer a metodologia', '_blank')}
                  className="bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Conheça Nossa Metodologia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
