import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onOpenForm: () => void;
}

export default function CTA({ onOpenForm }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F07E00] to-[#d96f00] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Bodenlösungen auf höchstem Niveau
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/95">
          Langlebig, belastbar und optisch perfekt – starten Sie jetzt Ihr Projekt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenForm}
            className="bg-white text-[#F07E00] px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors flex items-center group"
          >
            Jetzt Angebot anfordern
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
          </button>
          <div className="text-white/90 text-sm">
            ✓ Kostenloses Beratungsgespräch<br />
            ✓ Unverbindliche Besichtigung
          </div>
        </div>
      </div>
    </section>
  );
}
