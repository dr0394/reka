import { Award, Ruler, Hammer, Clock, Users } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: Award,
      title: '20+ Jahre Erfahrung',
      description: 'Hunderte erfolgreich realisierte Projekte in Industrie, Gewerbe und Privatbereich.',
    },
    {
      icon: Ruler,
      title: 'Monolithischer Bodenaufbau',
      description: 'Nach DIN 18202 – laserpräzise Ebenheitstoleranzen für perfekte Ergebnisse.',
    },
    {
      icon: Hammer,
      title: 'Hartstoffeinstreuung',
      description: 'Nach DIN 1100 für höhere Schlagfestigkeit und maximale Abriebfestigkeit.',
    },
    {
      icon: Clock,
      title: 'Schnelle Umsetzung',
      description: 'Termintreue und Einhaltung der Projektzeitpläne für minimale Ausfallzeiten.',
    },
    {
      icon: Users,
      title: 'Individuelle Beratung',
      description: 'Passgenaue Lösungen für jedes Objekt – von der Planung bis zur Umsetzung.',
    },
  ];

  return (
    <section id="vorteile" className="py-20 bg-gradient-to-br from-[#003A70] to-[#004a8f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ihre Vorteile mit REKA Bodensysteme
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Unsere Böden sind nicht nur robust und langlebig, sondern auch wirtschaftlich – dank präziser Planung und langlebiger Materialien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.slice(0, 3).map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Icon className="text-[#F07E00] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-white/90 leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {advantages.slice(3).map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Icon className="text-[#F07E00] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-white/90 leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
