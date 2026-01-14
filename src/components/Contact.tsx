import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hallo, ich interessiere mich für eine Bodenlösung.%0A%0AName: ${formData.name}%0AE-Mail: ${formData.email}%0ATelefon: ${formData.phone}%0AAnliegen: ${formData.message}`;
    window.open(`https://wa.me/4962414967517?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A70] mb-4">
            Kontakt & Standort
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nehmen Sie Kontakt mit uns auf – wir beraten Sie gerne persönlich.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-[#003A70] mb-6">Kontaktinformationen</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#F07E00] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#003A70] mb-1">REKA Bodensysteme GmbH</div>
                    <div className="text-gray-600">Auf dem Sand 26</div>
                    <div className="text-gray-600">67547 Worms, Deutschland</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-[#F07E00] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#003A70] mb-1">Telefon</div>
                    <a href="tel:+4962414967517" className="text-gray-600 hover:text-[#F07E00]">
                      +49 (0) 6241 4967517
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#F07E00] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#003A70] mb-1">E-Mail</div>
                    <a href="mailto:info@reka-bodensysteme.de" className="text-gray-600 hover:text-[#F07E00]">
                      info@reka-bodensysteme.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#F07E00] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#003A70] mb-1">Öffnungszeiten</div>
                    <div className="text-gray-600">Mo–Fr: 8:00 – 17:00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589.1!2d8.35!3d49.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM3JzQ4LjAiTiA4wrAyMScwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-[#003A70] mb-6">Kontaktformular</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#003A70] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#003A70] mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#003A70] mb-2">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#003A70] mb-2">
                  Ihr Anliegen *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#F07E00] focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="text-sm text-gray-600">
                Mit dem Absenden des Formulars erklären Sie sich mit unserer{' '}
                <a href="/datenschutz" className="text-[#F07E00] hover:underline">
                  Datenschutzerklärung
                </a>{' '}
                einverstanden.
              </div>

              <button
                type="submit"
                className="w-full bg-[#F07E00] text-white px-8 py-4 text-lg font-semibold hover:bg-[#d96f00] transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
