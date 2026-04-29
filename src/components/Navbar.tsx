import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/i18n/translations";

const LANGS: { code: Lang; flag: string; name: string }[] = [
  { code: "pt", flag: "🇧🇷", name: "Português" },
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
];

export function Navbar() {
  const { lang, setLang, T } = useLanguage();
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const langRef                     = useRef<HTMLDivElement>(null);

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

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const close = () => setOpen(false);
  const currentLang = LANGS.find((l) => l.code === lang)!;

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
          {/* Logo */}
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
            {T.nav.items.map((item) => (
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

          {/* Desktop right: lang switcher + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                aria-label="Mudar idioma"
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-bold transition-colors duration-200",
                  scrolled
                    ? "border-navy-950/12 text-navy-700 hover:border-gold-400/40 hover:text-gold-600"
                    : "border-white/15 text-parchment-100/80 hover:border-gold-400/40 hover:text-gold-200"
                )}
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span>{lang.toUpperCase()}</span>
                <ChevronDown
                  className={cn("h-3 w-3 transition-transform duration-200", langOpen && "rotate-180")}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[140px] rounded-xl border border-navy-950/8 bg-white p-1 shadow-[0_8px_32px_-8px_rgba(6,16,24,0.18)]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-navy-950/[0.04]",
                        lang === l.code ? "text-gold-500" : "text-navy-700"
                      )}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.9)] transition-transform hover:-translate-y-0.5"
            >
              {T.nav.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

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

      {/* Mobile overlay */}
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

          {T.nav.items.map((item, i) => (
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

          {/* Language switcher — mobile */}
          <div className="mt-6 flex items-center gap-2">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-bold transition-colors",
                  lang === l.code
                    ? "border-gold-400/50 bg-gold-400/15 text-gold-300"
                    : "border-white/15 text-parchment-100/50 hover:border-white/30 hover:text-parchment-100/80"
                )}
              >
                <span>{l.flag}</span>
                <span>{l.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <a
            href="#oferta"
            onClick={close}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full btn-gold px-6 py-4 text-base font-extrabold text-navy-950"
          >
            {T.nav.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
