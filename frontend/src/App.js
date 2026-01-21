import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import ComoFunciona from "./components/ComoFunciona";
import DepoimentosVideos from "./components/DepoimentosVideos";
import Diferenciais from "./components/Diferenciais";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Hero />
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
