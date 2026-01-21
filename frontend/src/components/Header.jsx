import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como Funciona', href: '#como-funciona' },
  ];

  const handleCTA = () => {
    window.open('https://transferenciaacademy.classbuild.com/payments/classpay-asaas/purchase/transferencia-academy-2', '_blank');
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A1A40]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img 
              src="https://customer-assets.emergentagent.com/job_transferprep/artifacts/kafcrfcg_Logo_alta_qualidade-removebg-preview.png" 
              alt="Transferência Academy Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Transferência</h1>
              <p className="text-xs text-[#D4A017] -mt-1">Academy</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-[#D4A017] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleCTA}
              className="bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold transition-all duration-300 hover:scale-105"
            >
              Inscreva-se Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A1A40] border-t border-[#D4A017]/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-[#D4A017] transition-colors duration-300 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleCTA}
              className="bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold w-full"
            >
              Inscreva-se Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
