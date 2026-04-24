import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Problema", href: "#problema" },
  { label: "Como funciona", href: "#mecanismo" },
  { label: "Planos", href: "#oferta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-navy-900/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <a href="#" onClick={close} className="shrink-0">
            <img
              src="/logo.png"
              alt="Eterneasy"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-blue-100/70 hover:text-gold-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta-final"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full btn-gold text-navy-900 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar ativação
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-parchment-100 hover:border-gold-400/40 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-xl flex flex-col md:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-x flex flex-col justify-center h-full gap-2 pt-20 pb-12">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Eterneasy"
              className="h-10 w-auto object-contain"
            />
          </div>

          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              style={{ animationDelay: open ? `${i * 60}ms` : "0ms" }}
              className={cn(
                "text-4xl font-display text-parchment-50 py-4 border-b border-white/10 hover:text-gold-400 transition-colors",
                open && "animate-menu-in"
              )}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#cta-final"
            onClick={close}
            className="mt-10 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full btn-gold text-navy-900 text-base font-semibold"
          >
            Solicitar ativação
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/15 text-parchment-100 text-base font-medium hover:border-gold-400/40 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
