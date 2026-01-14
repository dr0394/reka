import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Industriehalle – Produktionsbereich',
      description: 'Epoxidharz-Beschichtung für eine 2.500 m² große Produktionshalle mit extremen Belastungsanforderungen.',
      testimonial: 'Unsere Produktionshalle sieht aus wie neu und ist extrem belastbar. Die Arbeit wurde termingerecht und professionell durchgeführt.',
      client: 'Fertigungsbetrieb, Rheinland-Pfalz',
      image: 'https://i.imgur.com/rElAfDI.jpeg',
    },
    {
      title: 'Tiefgarage – Parkhaus',
      description: 'OS-8-System für eine 1.200 m² Tiefgarage mit rutschhemmenden und wasserdichten Eigenschaften.',
      testimonial: 'Die Beschichtung hält seit Jahren allen Witterungsbedingungen stand. Absolut empfehlenswert!',
      client: 'Wohnanlage, Hessen',
      image: 'https://i.imgur.com/LFbjyEQ.jpeg',
    },
    {
      title: 'Privatgarage – Wohnhaus',
      description: 'PU-Beschichtung für eine 80 m² Garage mit optisch ansprechendem Finish und pflegeleichten Eigenschaften.',
      testimonial: 'Sehr zufrieden mit dem Ergebnis. Die Garage wirkt jetzt hochwertig und ist leicht zu reinigen.',
      client: 'Privathaushalt, Baden-Württemberg',
      image: 'https://i.imgur.com/NGrnjhh.jpeg',
    },
    {
      title: 'Gewerbefläche – Showroom',
      description: 'PU-Beschichtung für einen modernen Showroom mit hohen ästhetischen Anforderungen.',
      testimonial: 'Die perfekte Kombination aus Funktionalität und Design. Unsere Kunden sind begeistert!',
      client: 'Autohaus, Baden-Württemberg',
      image: 'https://i.imgur.com/pr1C8eX.jpeg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="referenzen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="ml-3 text-3xl font-bold text-gray-800">Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Kundenbewertungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das sagen unsere Kunden über uns – echte Bewertungen von echten Projekten.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 shadow-lg overflow-hidden">
            <div className="h-[400px] overflow-hidden">
              <img
                src={projects[currentSlide].image}
                alt={projects[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {projects[currentSlide].client.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{projects[currentSlide].client}</div>
                  <div className="flex items-center mt-1">
                    <Star className="fill-[#FBBC05] text-[#FBBC05]" size={16} />
                    <Star className="fill-[#FBBC05] text-[#FBBC05]" size={16} />
                    <Star className="fill-[#FBBC05] text-[#FBBC05]" size={16} />
                    <Star className="fill-[#FBBC05] text-[#FBBC05]" size={16} />
                    <Star className="fill-[#FBBC05] text-[#FBBC05]" size={16} />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {projects[currentSlide].title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{projects[currentSlide].testimonial}"
              </p>

              <p className="text-sm text-gray-500">
                {projects[currentSlide].description}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#F07E00] text-white p-3 hover:bg-[#d96f00] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#F07E00] text-white p-3 hover:bg-[#d96f00] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 transition-all ${
                  currentSlide === index ? 'bg-[#F07E00] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
