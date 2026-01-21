import React from 'react';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const DepoimentosVideos = () => {
  const videos = [
    {
      id: 1,
      url: 'https://customer-assets.emergentagent.com/job_transferprep/artifacts/64m6dsgp_0114%20%285%29%285%29.mp4',
      nome: 'Aluno Aprovado - USP',
      descricao: 'Depoimento sobre aprovação em Medicina',
    },
    {
      id: 2,
      url: 'https://customer-assets.emergentagent.com/job_transferprep/artifacts/t1emjwcl_Diogo.mp4',
      nome: 'Diogo - Transferência Medicina',
      descricao: 'História de sucesso na transferência',
    },
    {
      id: 3,
      url: 'https://customer-assets.emergentagent.com/job_transferprep/artifacts/3c8prozn_0114%20%285%29%282%29.mp4',
      nome: 'Aluno Aprovado - UNICAMP',
      descricao: 'Experiência com a Transferência Academy',
    },
    {
      id: 4,
      url: 'https://customer-assets.emergentagent.com/job_transferprep/artifacts/w6slre6v_La%C3%ADs.mp4',
      nome: 'Laís - Aprovada em Medicina',
      descricao: 'Jornada de sucesso na transferência',
    },
    {
      id: 5,
      url: 'https://customer-assets.emergentagent.com/job_transferprep/artifacts/9g74l8rm_Mila.mp4',
      nome: 'Mila - Transferência Medicina',
      descricao: 'Como conquistei minha vaga dos sonhos',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Depoimentos em Vídeo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1A40] mb-4">
            Histórias reais de aprovação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos alunos aprovados em Medicina têm a dizer sobre a Transferência Academy
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-0 shadow-2xl overflow-hidden bg-white">
                      <CardContent className="p-0">
                        {/* Video Container - 9:16 Aspect Ratio */}
                        <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                          <video
                            controls
                            className="w-full h-full object-cover bg-black"
                            preload="metadata"
                            playsInline
                          >
                            <source src={video.url} type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                          </video>
                        </div>

                        {/* Video Info */}
                        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
                          <h3 className="text-lg font-bold text-[#0A1A40] mb-1">
                            {video.nome}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {video.descricao}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-[#D4A017] hover:bg-[#B8900F] text-white border-0" />
            <CarouselNext className="hidden md:flex -right-12 bg-[#D4A017] hover:bg-[#B8900F] text-white border-0" />
          </Carousel>

          {/* Mobile Navigation Hint */}
          <div className="md:hidden text-center mt-6 text-sm text-gray-500">
            👈 Deslize para ver mais depoimentos 👉
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-[#0A1A40] rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#D4A017] mb-2">500+</div>
              <div className="text-white">Alunos Aprovados em Medicina</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4A017] mb-2">50+</div>
              <div className="text-white">Universidades</div>
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

export default DepoimentosVideos;
