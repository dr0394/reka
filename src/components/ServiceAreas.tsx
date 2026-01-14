import { MapPin, Building2, Factory, Home as HomeIcon } from 'lucide-react';

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Einsatzgebiete & Zielgruppen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Bodenlösungen in der gesamten Region – für jeden Bedarf.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start mb-6">
              <MapPin className="text-[#F07E00] mr-4 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-[#003A70] mb-3">Regionale Schwerpunkte</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Wir sind hauptsächlich in Rheinland-Pfalz, Hessen und Baden-Württemberg aktiv. Auf Anfrage realisieren wir Projekte auch deutschlandweit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#003A70] text-white px-4 py-2 text-sm font-semibold">
                    Rheinland-Pfalz
                  </span>
                  <span className="bg-[#003A70] text-white px-4 py-2 text-sm font-semibold">
                    Hessen
                  </span>
                  <span className="bg-[#003A70] text-white px-4 py-2 text-sm font-semibold">
                    Baden-Württemberg
                  </span>
                  <span className="bg-gray-200 text-[#003A70] px-4 py-2 text-sm font-semibold">
                    Deutschlandweit
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 border-2 border-gray-200 text-center">
              <Factory className="text-[#F07E00] mx-auto mb-4" size={48} />
              <h4 className="text-lg font-bold text-[#003A70] mb-2">Industrie</h4>
              <p className="text-gray-600 text-sm">
                Produktionshallen, Lagerflächen, Werkstätten
              </p>
            </div>
            <div className="bg-gray-50 p-6 border-2 border-gray-200 text-center">
              <Building2 className="text-[#F07E00] mx-auto mb-4" size={48} />
              <h4 className="text-lg font-bold text-[#003A70] mb-2">Gewerbe</h4>
              <p className="text-gray-600 text-sm">
                Parkhäuser, Tiefgaragen, öffentliche Einrichtungen
              </p>
            </div>
            <div className="bg-gray-50 p-6 border-2 border-gray-200 text-center">
              <HomeIcon className="text-[#F07E00] mx-auto mb-4" size={48} />
              <h4 className="text-lg font-bold text-[#003A70] mb-2">Privat</h4>
              <p className="text-gray-600 text-sm">
                Garagen, Keller, Privathäuser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
