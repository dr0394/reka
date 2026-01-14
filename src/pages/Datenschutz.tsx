import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Datenschutzerklärung | REKA Bodensysteme"
        description="Datenschutzerklärung der REKA Bodensysteme GmbH - Informationen zur Datenverarbeitung, Cookies und Ihren Rechten gemäß DSGVO."
        canonical="https://www.reka-bodensysteme.de/datenschutz"
        noindex={true}
      />
      <div className="bg-[#003A70] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-[#F07E00] mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border-2 border-gray-200 p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Allgemeine Hinweise</h3>
                <p className="leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">2. Verantwortliche Stelle</h2>
            <div className="text-gray-700 space-y-2">
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-gray-50 p-4 border-l-4 border-[#F07E00] mt-4">
                <p className="font-semibold">REKA Bodensysteme GmbH</p>
                <p>Hasari Cakmak</p>
                <p>Auf dem Sand 26</p>
                <p>67547 Worms, Deutschland</p>
                <p className="mt-2">Telefon: +49 (0) 6241 4967517</p>
                <p>E-Mail: info@reka-bodensysteme.de</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">3. Datenerfassung auf dieser Website</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Kontaktformular</h3>
                <p className="leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Cookies</h3>
                <p className="leading-relaxed">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher zu gestalten.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Google Maps</h3>
                <p className="leading-relaxed">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp-Kommunikation</h3>
                <p className="leading-relaxed">
                  Wir bieten die Möglichkeit der Kontaktaufnahme über WhatsApp an. Wenn Sie uns über WhatsApp kontaktieren, werden die von Ihnen übermittelten Daten (Name, Telefonnummer, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage verwendet. Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">E-Mail-Versand</h3>
                <p className="leading-relaxed">
                  Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (E-Mail-Adresse, Name, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">4. Ihre Rechte</h2>
            <div className="text-gray-700 space-y-4">
              <p className="leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
              <div className="bg-[#F07E00]/10 p-4 border-l-4 border-[#F07E00]">
                <p className="font-semibold mb-2">Widerspruchs- und Widerrufsrecht</p>
                <p className="leading-relaxed">
                  Sie können eine erteilte Einwilligung jederzeit widerrufen. Hierzu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">5. Speicherung von Kontaktdaten</h2>
            <div className="text-gray-700">
              <p className="leading-relaxed">
                Kontaktdaten, die über Formulare oder E-Mail übermittelt werden, werden zur Bearbeitung der Anfragen gespeichert. Die Speicherdauer richtet sich nach der Art der Anfrage und den gesetzlichen Aufbewahrungsfristen. Nach Erledigung Ihrer Anfrage werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003A70] mb-4">6. Ansprechpartner für Datenschutz</h2>
            <div className="text-gray-700">
              <p className="leading-relaxed mb-4">
                Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer personenbezogenen Daten wenden Sie sich bitte an:
              </p>
              <div className="bg-gray-50 p-4 border-l-4 border-[#F07E00]">
                <p>REKA Bodensysteme GmbH</p>
                <p>Hasari Cakmak</p>
                <p>E-Mail: info@reka-bodensysteme.de</p>
                <p>Telefon: +49 (0) 6241 4967517</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
