import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "O que é",       href: "#o-que-e" },
  { label: "Problema",      href: "#problema" },
  { label: "Como funciona", href: "#mecanismo" },
  { label: "Planos",        href: "#oferta" },
  { label: "Objeções",      href: "#objecoes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-navy-950/8 bg-white/95 backdrop-blur-xl shadow-[0_2px_16px_-4px_rgba(6,16,24,0.08)]"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="/" onClick={close} className="shrink-0" aria-label="Eterneasy">
            <img
              src="/logo.webp"
              alt="Eterneasy"
              width={180}
              height={48}
              className="h-8 w-auto object-contain md:h-9"
              decoding="async"
            />
          </a>

          {/* Desktop nav */}
          <nav
            className={cn(
              "hidden items-center gap-1 rounded-full border p-1 md:flex transition-colors duration-300",
              scrolled
                ? "border-navy-950/8 bg-navy-950/[0.03]"
                : "border-white/10 bg-white/[0.06]"
            )}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  scrolled
                    ? "text-navy-700 hover:bg-navy-950/5 hover:text-gold-500"
                    : "text-parchment-100/75 hover:bg-white/10 hover:text-gold-200"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#oferta"
            className="hidden items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.9)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Cadastrar grátis
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={cn(
              "relative z-50 flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
              scrolled
                ? "border-navy-950/10 bg-navy-950/[0.04] text-navy-900 hover:border-gold-400/40"
                : "border-white/10 bg-white/5 text-parchment-50 hover:border-gold-400/40"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay — stays dark for visual contrast */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-navy-950/97 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-x flex h-full flex-col justify-center gap-2 pt-20 pb-12">
          <img
            src="/logo.webp"
            alt="Eterneasy"
            width={180}
            height={48}
            className="mb-8 h-10 w-auto object-contain"
            decoding="async"
          />

          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              style={{ animationDelay: open ? `${i * 60}ms` : "0ms" }}
              className={cn(
                "border-b border-white/10 py-4 font-display text-4xl text-parchment-50 transition-colors hover:text-gold-200",
                open && "animate-menu-in"
              )}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#oferta"
            onClick={close}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full btn-gold px-6 py-4 text-base font-extrabold text-navy-950"
          >
            Cadastrar grátis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
