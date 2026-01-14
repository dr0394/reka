import { Star, CheckCircle, Award, Clock } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 bg-gradient-to-br from-[#003A70] via-[#004a8f] to-[#003A70] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white px-5 py-3 shadow-lg mb-6">
              <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <Star className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                  <Star className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                  <Star className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                  <Star className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                  <Star className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                  <span className="ml-2 text-sm font-semibold text-gray-800">5,0</span>
                </div>
                <div className="text-xs text-gray-600">Google Bewertungen</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Perfekte Bodenlösungen für jede Anforderung
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Ob Industriehalle, Tiefgarage oder Privatanwesen – wir beschichten Böden auf Epoxidharz- und PU-Basis, OS-8-Systeme, Kugelstrahlen und mehr. Langlebig, belastbar und optisch überzeugend.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start">
                <Clock className="text-[#F07E00] mr-3 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold">Über 20 Jahre</div>
                  <div className="text-sm text-white/80">Erfahrung</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#F07E00] mr-3 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold">Hundertfach</div>
                  <div className="text-sm text-white/80">erfolgreich realisiert</div>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-[#F07E00] mr-3 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold">TÜV-geprüft</div>
                  <div className="text-sm text-white/80">Materialien</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenForm}
                className="bg-[#F07E00] text-white px-8 py-4 text-lg font-semibold hover:bg-[#d96f00] transition-colors"
              >
                Jetzt kostenlos beraten lassen
              </button>
              <button
                onClick={() => scrollToSection('leistungen')}
                className="bg-white text-[#003A70] px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Unsere Leistungen
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full h-[500px] border-4 border-white/20 overflow-hidden">
              <img
                src="https://i.imgur.com/E15MjJX.jpeg"
                alt="REKA Bodensysteme - Professionelle Bodenbeschichtung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
