import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { T } = useLanguage();

  return (
    <footer className="border-t border-navy-950/8 bg-white py-10">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="/" aria-label="Eterneasy">
            <img
              src="/logo.webp"
              alt="Eterneasy"
              width={180}
              height={48}
              className="h-8 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>

          <p className="max-w-sm text-sm leading-6 text-navy-700/80">
            {T.footer.description}
          </p>

          <nav className="flex items-center gap-5 text-sm font-semibold text-navy-700/80">
            <a href="#oferta"    className="transition-colors hover:text-gold-500">{T.footer.navPlans}</a>
            <a href="#objecoes"  className="transition-colors hover:text-gold-500">{T.footer.navFaq}</a>
            <a href="#cta-final" className="transition-colors hover:text-gold-500">{T.footer.navContact}</a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-navy-950/8 pt-6 text-xs text-navy-700/45 sm:flex-row">
          <span>© {new Date().getFullYear()} Eterneasy. {T.footer.copyright}</span>
          <span>{T.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
