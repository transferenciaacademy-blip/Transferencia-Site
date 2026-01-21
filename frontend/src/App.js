import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CrossedBanners from "./components/CrossedBanners";
import Sobre from "./components/Sobre";
import ComoFunciona from "./components/ComoFunciona";
import DepoimentosVideos from "./components/DepoimentosVideos";
import Diferenciais from "./components/Diferenciais";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Home = () => {
  const motivationalMessages1 = [
    "Conquiste sua vaga em Medicina na universidade dos seus sonhos",
    "Sua aprovação começa aqui - Método comprovado por centenas de alunos",
    "Transforme seu futuro - Prepare-se para a transferência em Medicina",
  ];

  const motivationalMessages2 = [
    "Realize seu sonho de estudar Medicina nas melhores universidades",
    "Não desista! A Transferência Academy está com você em cada passo",
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
      {/* Faixas cruzadas entre Hero e Sobre */}
      <CrossedBanners 
        messages1={motivationalMessages1}
        messages2={motivationalMessages2}
      />
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
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
