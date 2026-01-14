import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Hallo, ich interessiere mich für eine Bodenlösung...';
    window.open(`https://wa.me/4962414967517?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 z-40 group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#003A70] text-white px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-sm font-semibold">
        Schreiben Sie uns auf WhatsApp
      </span>
    </button>
  );
}
