import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wie lang ist die Einbauzeit?',
      answer: 'Die Einbauzeit ist abhängig von der Fläche und dem gewählten System. In der Regel dauert die Umsetzung 2 bis 5 Werktage. Bei größeren Projekten können wir Ihnen nach der Besichtigung einen genauen Zeitplan erstellen.',
    },
    {
      question: 'Wie belastbar sind Epoxidharz-Beschichtungen?',
      answer: 'Epoxidharz-Beschichtungen sind für extreme mechanische Belastungen geeignet. Sie halten Gabelstaplern, schweren Maschinen und chemischen Einflüssen stand. Die Beschichtungen sind besonders abrieb- und schlagfest.',
    },
    {
      question: 'Welche Vorarbeiten sind nötig?',
      answer: 'Der Untergrund muss professionell vorbereitet werden. Dies erfolgt durch Kugelstrahlen oder Diamantschleifen, um eine optimale Haftung zu gewährleisten. Wir übernehmen alle notwendigen Vorarbeiten für Sie.',
    },
    {
      question: 'Wann kann der Boden wieder genutzt werden?',
      answer: 'Nach der Endkontrolle und Aushärtung kann der Boden in der Regel nach 24 bis 48 Stunden wieder betreten werden. Die volle Belastbarkeit ist je nach System nach 3 bis 7 Tagen erreicht.',
    },
    {
      question: 'Sind die Böden rutschhemmend?',
      answer: 'Ja, insbesondere unsere OS-8-Systeme sind rutschhemmend und erfüllen höchste Sicherheitsstandards. Auch andere Systeme können mit rutschhemmenden Eigenschaften ausgestattet werden.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Antworten auf die wichtigsten Fragen rund um Bodenbeschichtungen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#003A70] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-[#F07E00] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
