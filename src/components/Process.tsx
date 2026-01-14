import { Search, Sparkles, Layers, Paintbrush, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Besichtigung & Beratung',
      description: 'Aufnahme aller Anforderungen und Gegebenheiten vor Ort. Wir analysieren Ihre Bedürfnisse und beraten Sie umfassend.',
    },
    {
      icon: Sparkles,
      title: 'Untergrund-vorbereitung',
      description: 'Kugelstrahlen oder Diamantschleifen – Reinigung und Aufrauen für optimale Haftung der Beschichtung.',
    },
    {
      icon: Layers,
      title: 'Grundierung',
      description: 'Auftrag der Grundierung für eine optimale Haftbasis zwischen Untergrund und Beschichtung.',
    },
    {
      icon: Paintbrush,
      title: 'Beschichtung',
      description: 'Materialwahl gemäß Nutzung – Epoxidharz, PU oder OS-8-System für maximale Belastbarkeit.',
    },
    {
      icon: CheckCircle,
      title: 'Versiegelung & Endkontrolle',
      description: 'Abschließende Schutzschicht und umfassende Qualitätssicherung für langanhaltende Perfektion.',
    },
  ];

  return (
    <section id="prozess" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Unser Prozess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 5 Schritten zu Ihrem perfekten Boden – transparent, professionell und zuverlässig.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#F07E00]/30 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 border-2 border-gray-200 hover:border-[#F07E00] transition-all h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-[#F07E00] flex items-center justify-center relative z-10">
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#F07E00] font-bold text-sm mb-2">Schritt {index + 1}</div>
                      <h3 className="text-lg font-bold text-[#003A70] mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
