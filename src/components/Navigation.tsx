import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Start', id: 'hero' },
    { label: 'Leistungen', id: 'leistungen' },
    { label: 'Vorteile', id: 'vorteile' },
    { label: 'Prozess', id: 'prozess' },
    { label: 'Referenzen', id: 'referenzen' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#003A70] shadow-lg' : 'bg-[#003A70]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://i.imgur.com/ORMHI5Q.png"
              alt="REKA Bodensysteme Logo"
              className="h-14 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#F07E00] transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('kontakt')}
              className="bg-[#F07E00] text-white px-6 py-3 font-semibold hover:bg-[#d96f00] transition-colors"
            >
              Jetzt Beratung anfordern
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#003A70] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-[#F07E00] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('kontakt')}
              className="w-full bg-[#F07E00] text-white px-6 py-3 font-semibold hover:bg-[#d96f00] transition-colors"
            >
              Jetzt Beratung anfordern
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
