import { Droplet, Shield, Layers, ParkingCircle, Sparkles, Drill } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Droplet,
      title: 'Epoxidharz-Beschichtungen',
      description: 'Höchste Beständigkeit gegen Chemikalien, Abrieb und mechanische Belastungen; ideal für Werkstätten, Lagerhallen, Produktionsbereiche.',
    },
    {
      icon: Shield,
      title: 'PU-Basis-Beschichtungen',
      description: 'Elastisch, UV-beständig, angenehm begehbar; optimal für Büros, Ausstellungsräume, Bereiche mit Temperaturschwankungen.',
    },
    {
      icon: Layers,
      title: 'OS-8-Bodenbeschichtungssysteme',
      description: 'Rutschhemmend, abriebfest und wasserdicht; geeignet für Parkhäuser, Tiefgaragen und stark belastete Betonflächen.',
    },
    {
      icon: ParkingCircle,
      title: 'Tiefgaragenbeschichtungen',
      description: 'Schutz vor Wasser, Streusalz und mechanischer Beanspruchung; sorgt für Langlebigkeit und klare Verkehrsführung.',
    },
    {
      icon: Sparkles,
      title: 'Kugelstrahlen',
      description: 'Optimale Untergrundvorbereitung durch Reinigung und Aufrauen für perfekte Haftung der Beschichtung.',
    },
    {
      icon: Drill,
      title: 'Diamantschleifen',
      description: 'Anschleifen alter Beschichtungen für extrem verschleißfeste, abriebbeständige Oberflächen.',
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Bodensysteme für jeden Einsatzbereich – von der Vorbereitung bis zur Versiegelung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 border-2 border-gray-200 hover:border-[#F07E00] hover:shadow-lg transition-all group"
              >
                <Icon className="text-[#F07E00] mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-[#003A70] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <button className="text-[#F07E00] font-semibold hover:underline">
                  Mehr erfahren →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
