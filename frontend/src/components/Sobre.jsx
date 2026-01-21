import React from 'react';
import { Target, Award, TrendingUp, Heart } from 'lucide-react';

const Sobre = () => {
  const features = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Nossa metodologia é 100% direcionada para aprovação em transferências externas.',
    },
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description: 'Mais de 500 alunos aprovados nas melhores universidades do Brasil.',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Constante',
      description: 'Acompanhamento individual para garantir sua evolução contínua.',
    },
    {
      icon: Heart,
      title: 'Compromisso Total',
      description: 'Estamos ao seu lado em cada etapa da sua jornada de transferência.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Estudantes colaborando"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A40]/60 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#D4A017] rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A1A40]">95%</div>
                  <div className="text-sm text-gray-600">Taxa de Aprovação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sobre a Transferência Academy
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1A40] mb-6">
              Transformando sonhos em realidade na Medicina
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <span className="font-bold text-[#0A1A40]">Transferência Academy</span> é a primeira e maior plataforma especializada em preparação para transferências de Medicina do Brasil.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa missão é tornar acessível o sonho de estudar Medicina nas melhores universidades do país. Com uma equipe de professores altamente qualificados e um método de ensino comprovadamente eficaz, já ajudamos centenas de alunos a conquistarem suas vagas nas instituições mais concorridas.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A017]/10 rounded-lg flex items-center justify-center group-hover:bg-[#D4A017] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#D4A017] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1A40] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
