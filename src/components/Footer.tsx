import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#003A70] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://i.imgur.com/ORMHI5Q.png"
              alt="REKA Bodensysteme Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Ihr Partner für perfekte Böden – langlebig, belastbar und optisch überzeugend.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-[#F07E00] transition-colors">
                  Start
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('leistungen')} className="text-white/80 hover:text-[#F07E00] transition-colors">
                  Leistungen
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('vorteile')} className="text-white/80 hover:text-[#F07E00] transition-colors">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('kontakt')} className="text-white/80 hover:text-[#F07E00] transition-colors">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/impressum" className="text-white/80 hover:text-[#F07E00] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white/80 hover:text-[#F07E00] transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Folgen Sie uns</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 hover:bg-[#F07E00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2025 REKA Bodensysteme GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
