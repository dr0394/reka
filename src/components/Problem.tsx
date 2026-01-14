import { Factory, ParkingCircle, Home } from 'lucide-react';

export default function Problem() {
  const challenges = [
    {
      icon: Factory,
      title: 'Industrie',
      description: 'Böden in Industriehallen müssen chemikalienbeständig und abriebfest sein – für maximale Belastbarkeit im täglichen Betrieb.',
    },
    {
      icon: ParkingCircle,
      title: 'Gewerbe',
      description: 'Tiefgaragen brauchen rutschhemmende, wasserdichte Beschichtungen, die Streusalz und mechanischer Beanspruchung standhalten.',
    },
    {
      icon: Home,
      title: 'Privat',
      description: 'Privathäuser wünschen ästhetische, pflegeleichte Böden, die optisch überzeugen und langlebig sind.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Ihre Herausforderung – Unsere Lösung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sie benötigen einen Boden, der hohen Belastungen standhält, optisch überzeugt und langlebig ist? Wir haben die passende Lösung.
          </p>
        </div>

        <div className="mb-12">
          <div className="h-[300px] md:h-[400px] overflow-hidden border-4 border-gray-200">
            <img
              src="https://i.imgur.com/HTIatOv.jpeg"
              alt="Professionelle Bodenbeschichtung in der Anwendung"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 border-2 border-gray-200 hover:border-[#F07E00] transition-all"
              >
                <Icon className="text-[#F07E00] mb-4" size={48} />
                <h3 className="text-2xl font-bold text-[#003A70] mb-4">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
