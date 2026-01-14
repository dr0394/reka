import { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface MultistepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MultistepForm({ isOpen, onClose }: MultistepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: '',
    size: '',
    coating: '',
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    const message = `Neue Anfrage über Multistep-Formular:%0A%0AZweck: ${formData.purpose}%0AGröße: ${formData.size}%0ABeschichtung: ${formData.coating}%0A%0AName: ${formData.name}%0AE-Mail: ${formData.email}%0ATelefon: ${formData.phone}`;

    window.open(`https://wa.me/4962414967517?text=${message}`, '_blank');

    const emailSubject = 'Neue Anfrage über Website';
    const emailBody = `Neue Anfrage über Multistep-Formular:\n\nZweck: ${formData.purpose}\nGröße: ${formData.size}\nBeschichtung: ${formData.coating}\n\nName: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}`;
    window.location.href = `mailto:info@reka-bodensysteme.de?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    onClose();
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    if (step === 1) return formData.purpose !== '';
    if (step === 2) return formData.size !== '';
    if (step === 3) return formData.coating !== '';
    if (step === 4) return formData.name !== '' && formData.email !== '';
    return false;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-[#003A70] text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Ihre Anfrage</h3>
            <p className="text-sm text-white/80 mt-1">Schritt {step} von 4</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-[#F07E00]">
            <X size={28} />
          </button>
        </div>

        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-[#F07E00] transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div>
              <h4 className="text-2xl font-bold text-[#003A70] mb-6">
                Wofür benötigen Sie eine Bodenlösung?
              </h4>
              <div className="space-y-3">
                {['Industriehalle', 'Tiefgarage', 'Privathaus', 'Sonstiges'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, purpose: option })}
                    className={`w-full p-4 border-2 text-left font-semibold transition-all ${
                      formData.purpose === option
                        ? 'border-[#F07E00] bg-[#F07E00]/10 text-[#003A70]'
                        : 'border-gray-300 hover:border-[#F07E00] text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 className="text-2xl font-bold text-[#003A70] mb-6">
                Welche Größe hat die Fläche?
              </h4>
              <div className="space-y-3">
                {['bis 100 m²', '100–500 m²', '500–1.000 m²', 'über 1.000 m²'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, size: option })}
                    className={`w-full p-4 border-2 text-left font-semibold transition-all ${
                      formData.size === option
                        ? 'border-[#F07E00] bg-[#F07E00]/10 text-[#003A70]'
                        : 'border-gray-300 hover:border-[#F07E00] text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 className="text-2xl font-bold text-[#003A70] mb-6">
                Welche Art von Beschichtung ist von Interesse?
              </h4>
              <div className="space-y-3">
                {['Epoxidharz', 'PU', 'OS-8', 'Unsicher / Beratung nötig'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, coating: option })}
                    className={`w-full p-4 border-2 text-left font-semibold transition-all ${
                      formData.coating === option
                        ? 'border-[#F07E00] bg-[#F07E00]/10 text-[#003A70]'
                        : 'border-gray-300 hover:border-[#F07E00] text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h4 className="text-2xl font-bold text-[#003A70] mb-6">
                Ihre Kontaktdaten
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#003A70] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#003A70] mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#003A70] mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center px-6 py-3 font-semibold transition-colors ${
                step === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#003A70] hover:text-[#F07E00]'
              }`}
            >
              <ChevronLeft size={20} className="mr-1" />
              Zurück
            </button>

            {step < 4 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-3 font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-[#F07E00] text-white hover:bg-[#d96f00]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Weiter
                <ChevronRight size={20} className="ml-1" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`px-6 py-3 font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-[#F07E00] text-white hover:bg-[#d96f00]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Anfrage senden
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
