'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import MarqueeBanner from '../components/MarqueeBanner'
import CrossedBanners from '../components/CrossedBanners'
import Sobre from '../components/Sobre'
import ComoFunciona from '../components/ComoFunciona'
import DepoimentosVideos from '../components/DepoimentosVideos'
import Diferenciais from '../components/Diferenciais'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  const heroMessages = [
    "Conquiste sua vaga em Medicina na universidade dos seus sonhos",
    "Sua aprovação começa aqui - Método comprovado por centenas de alunos",
    "Transforme seu futuro - Prepare-se para a transferência em Medicina",
    "Realize seu sonho de estudar Medicina nas melhores universidades",
    "500+ alunos aprovados - Junte-se aos vencedores",
  ];

  const ctaMessages1 = [
    "Últimas vagas disponíveis - Garanta a sua agora",
    "Matrículas abertas - Comece sua preparação hoje",
    "Aproveite a oportunidade de realizar seu sonho",
  ];

  const ctaMessages2 = [
    "Investimento que transforma vidas - Sua aprovação vale cada esforço",
    "Método exclusivo e comprovado - Resultados garantidos",
    "Não deixe para depois - Sua vaga em Medicina te espera",
  ];

  return (
    <div id="home">
      <Header />
      <Hero />
      {/* Faixa única dourada entre Hero e Sobre */}
      <div className="-my-8 relative z-20">
        <MarqueeBanner 
          messages={heroMessages}
          bgColor="bg-[#D4A017]"
          textColor="text-[#0A1A40]"
          direction="left"
        />
      </div>
      <Sobre />
      <ComoFunciona />
      <DepoimentosVideos />
      <Diferenciais />
      {/* Faixas cruzadas entre Diferenciais e CTA */}
      <CrossedBanners 
        messages1={ctaMessages1}
        messages2={ctaMessages2}
      />
      <CTA />
      <Footer />
    </div>
  )
}
