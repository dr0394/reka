import { Building2, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Building2,
      value: '20+',
      label: 'Jahre Erfahrung',
    },
    {
      icon: Award,
      value: '100+',
      label: 'Erfolgreiche Projekte',
    },
    {
      icon: Users,
      value: '100%',
      label: 'Kundenzufriedenheit',
    },
    {
      icon: TrendingUp,
      value: 'Top',
      label: 'Qualität',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="h-[500px] overflow-hidden border-4 border-gray-200">
              <img
                src="https://i.imgur.com/qk7GpJa.jpeg"
                alt="REKA Bodensysteme Team bei der Arbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-6">
              Über REKA Bodensysteme
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Die REKA Bodensysteme GmbH ist Ihr inhabergeführter Partner für professionelle Bodenlösungen. Unter der Leitung von Geschäftsführer Hasari Cakmak setzen wir seit über zwei Jahrzehnten Projekte in höchster Qualität um.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mit hunderten realisierten Projekten in Industrie, Gewerbe und Privatbereich haben wir uns als verlässlicher Partner etabliert. Unsere Stärke liegt in der Kombination aus technischer Expertise, Qualitätsbewusstsein und absoluter Kundenorientierung.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Als starker Partner setzen wir Ihre Visionen um – mit Sorgfalt, Präzision und Leidenschaft. Dabei sind wir Mitglied in führenden Branchenverbänden und arbeiten ausschließlich mit qualitätszertifizierten Materialien.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#F07E00] text-white px-6 py-3 font-semibold">
                Qualitätszertifiziert
              </div>
              <div className="bg-[#003A70] text-white px-6 py-3 font-semibold">
                Termintreu
              </div>
              <div className="bg-gray-200 text-[#003A70] px-6 py-3 font-semibold">
                Kundenorientiert
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#003A70] to-[#004a8f] text-white p-8 text-center"
                >
                  <Icon className="mx-auto mb-4 text-[#F07E00]" size={48} />
                  <div className="text-4xl font-bold mb-2">{highlight.value}</div>
                  <div className="text-sm text-white/90">{highlight.label}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
