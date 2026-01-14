import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'none');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-md bg-white border-2 border-gray-300 shadow-2xl z-50">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <Cookie className="text-[#F07E00] mr-3" size={24} />
            <h3 className="text-lg font-bold text-[#003A70]">Cookie-Einstellungen</h3>
          </div>
          <button onClick={handleRejectAll} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige Cookies sind notwendig für die Funktionalität der Website, während andere uns helfen, die Nutzung zu analysieren.
        </p>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleAcceptAll}
            className="w-full bg-[#F07E00] text-white px-4 py-3 text-sm font-semibold hover:bg-[#d96f00] transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={handleEssentialOnly}
            className="w-full bg-[#003A70] text-white px-4 py-3 text-sm font-semibold hover:bg-[#004a8f] transition-colors"
          >
            Nur essenzielle
          </button>
          <button
            onClick={handleRejectAll}
            className="w-full bg-gray-200 text-gray-700 px-4 py-3 text-sm font-semibold hover:bg-gray-300 transition-colors"
          >
            Alles ablehnen
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Weitere Informationen finden Sie in unserer{' '}
          <a href="/datenschutz" className="text-[#F07E00] hover:underline">
            Datenschutzerklärung
          </a>
          .
        </div>
      </div>
    </div>
  );
}
