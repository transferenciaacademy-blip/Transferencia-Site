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
  const motivationalMessages = [
    "Conquiste sua vaga em Medicina na universidade dos seus sonhos",
    "Sua aprovação começa aqui - Método comprovado por centenas de alunos",
    "Transforme seu futuro - Prepare-se para a transferência em Medicina",
    "Realize seu sonho de estudar Medicina nas melhores universidades",
    "Não desista! A Transferência Academy está com você em cada passo",
  ];

  return (
    <div id="home">
      <Header />
      <Hero />
      <MarqueeBanner messages={motivationalMessages} />
      <Sobre />
      <MarqueeBanner messages={motivationalMessages} />
      <ComoFunciona />
      <MarqueeBanner messages={motivationalMessages} />
      <DepoimentosVideos />
      <MarqueeBanner messages={motivationalMessages} />
      <Diferenciais />
      <MarqueeBanner messages={motivationalMessages} />
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
