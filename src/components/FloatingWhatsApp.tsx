import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-navy-900 shadow-[0_16px_40px_-12px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20b859] md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
