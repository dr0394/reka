import { useState } from 'react';
import { X } from 'lucide-react';

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://i.imgur.com/rElAfDI.jpeg', alt: 'Industriehalle Bodenbeschichtung' },
    { src: 'https://i.imgur.com/LFbjyEQ.jpeg', alt: 'Tiefgarage OS-8-System' },
    { src: 'https://i.imgur.com/NGrnjhh.jpeg', alt: 'Privatgarage PU-Beschichtung' },
    { src: 'https://i.imgur.com/pr1C8eX.jpeg', alt: 'Gewerbefläche Showroom' },
    { src: 'https://i.imgur.com/ZdeIIju.jpeg', alt: 'Epoxidharz Industrieboden' },
    { src: 'https://i.imgur.com/3x6IwFz.jpeg', alt: 'Bodenbeschichtung Detail' },
    { src: 'https://i.imgur.com/xU1lcHm.jpeg', alt: 'Professionelle Bodensanierung' },
    { src: 'https://i.imgur.com/dnlZ0du.jpeg', alt: 'Kugelstrahlen Vorbereitung' },
    { src: 'https://i.imgur.com/O7ZS50L.png', alt: 'REKA Bodensysteme Projekt' },
    { src: 'https://i.imgur.com/vBI8oAj.jpeg', alt: 'Hochwertige Bodenlösung' },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
              Unsere Projekte im Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Auswahl unserer erfolgreich realisierten Bodenbeschichtungen – von Industrie bis Privatbereich.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#003A70]/0 group-hover:bg-[#003A70]/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Vergrößern
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#F07E00] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Vergrößerte Ansicht"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
