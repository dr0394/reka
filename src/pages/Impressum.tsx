import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Impressum | REKA Bodensysteme"
        description="Impressum der REKA Bodensysteme GmbH - Angaben gemäß § 5 TMG, Kontaktdaten und rechtliche Informationen."
        canonical="https://www.reka-bodensysteme.de/impressum"
        noindex={true}
      />
      <div className="bg-[#003A70] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-[#F07E00] mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Impressum</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border-2 border-gray-200 p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">REKA Bodensysteme GmbH</p>
              <p>Auf dem Sand 26</p>
              <p>67547 Worms, Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">Kontakt</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Telefon:</strong> +49 (0) 6241 4967517</p>
              <p><strong>E-Mail:</strong> <a href="mailto:info@reka-bodensysteme.de" className="text-[#F07E00] hover:underline">info@reka-bodensysteme.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">Vertreten durch</h2>
            <div className="text-gray-700">
              <p><strong>Geschäftsführer:</strong> Hasari Cakmak</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">Registereintrag</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Registergericht:</strong> Amtsgericht Mainz</p>
              <p><strong>Registernummer:</strong> HRB 50492</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">Umsatzsteuer-ID</h2>
            <div className="text-gray-700">
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
              <p className="font-semibold">DE 300 58 37 21</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">Haftungsbeschränkung</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Inhalt des Onlineangebotes</h3>
                <p className="leading-relaxed">
                  Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Verweise und Links</h3>
                <p className="leading-relaxed">
                  Bei direkten oder indirekten Verweisen auf fremde Webseiten, die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Urheber- und Leistungsschutzrechte</h3>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
