import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
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

  return (
    <div id="home">
      <Header />
      <Hero />
      {/* Faixa Dourada - rola para esquerda */}
      <MarqueeBanner 
        messages={motivationalMessages1} 
        bgColor="bg-[#D4A017]"
        textColor="text-[#0A1A40]"
        direction="left"
      />
      {/* Faixa Azul - rola para direita */}
      <MarqueeBanner 
        messages={motivationalMessages2} 
        bgColor="bg-[#0A1A40]"
        textColor="text-[#D4A017]"
        direction="right"
      />
      <Sobre />
      <ComoFunciona />
      <DepoimentosVideos />
      <Diferenciais />
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
