import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações', '_blank');
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1A40] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_transferprep/artifacts/kx5apoal_Logo_alta_qualidade-removebg-preview__1_-removebg-preview%20%281%29.png"
                alt="Transferência Academy Logo"
                className="h-14 w-auto" />

              <div>
                <h3 className="text-xl font-bold">Transferência</h3>
                <p className="text-sm text-[#D4A017]">Academy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A maior plataforma especializada em preparação para transferências universitárias do Brasil.
            </p>
            <div className="flex gap-4">
              {[
              { icon: Facebook, link: '#' },
              { icon: Instagram, link: '#' },
              { icon: Linkedin, link: '#' },
              { icon: Youtube, link: '#' }].
              map((social, index) =>
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#D4A017] rounded-lg flex items-center justify-center transition-colors duration-300 border border-white/10">

                  <social.icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4A017]">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
              { label: 'Início', href: '#home' },
              { label: 'Sobre Nós', href: '#sobre' },
              { label: 'Como Funciona', href: '#como-funciona' }].
              map((link, index) =>
              <li key={index}>
                  <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-[#D4A017] transition-colors duration-300 text-left">

                    {link.label}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Cursos Populares */}
          <div className="!opacity-[0%]">
            <h4 className="text-lg font-bold mb-6 text-[#D4A017]">Cursos Populares</h4>
            <ul className="space-y-3">
              {['Medicina', 'Direito', 'Engenharia', 'Administração', 'Arquitetura', 'Psicologia'].map((curso, index) =>
              <li key={index}>
                  <button
                  onClick={handleCTA}
                  className="text-gray-300 hover:text-[#D4A017] transition-colors duration-300 text-left">

                    {curso}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="!font-bold !text-lg mb-6 text-[#D4A017]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@transferencia.academy" className="text-gray-300 hover:text-[#D4A017] transition-colors duration-300">
                  contato@transferencia.academy
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-[#D4A017] transition-colors duration-300">(17) 99671-2860 

                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  São Paulo, SP<br />Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Transferência Academy. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={handleCTA}
                className="text-gray-400 hover:text-[#D4A017] transition-colors duration-300">

                Política de Privacidade
              </button>
              <button
                onClick={handleCTA}
                className="text-gray-400 hover:text-[#D4A017] transition-colors duration-300">

                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;