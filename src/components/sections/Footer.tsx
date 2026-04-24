export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="/" aria-label="Eterneasy">
            <img src="/logo.webp" alt="Eterneasy" width={180} height={48} className="h-8 w-auto object-contain" loading="lazy" decoding="async" />
          </a>

          <p className="max-w-sm text-sm leading-6 text-slate-blue-100/58">
            Venda envio de fotos ao vivo, slideshow no telão e vídeo final pós-evento para os clientes que você já atende.
          </p>

          <nav className="flex items-center gap-5 text-sm font-semibold text-slate-blue-100/58">
            <a href="#oferta" className="transition-colors hover:text-gold-200">Planos</a>
            <a href="#objecoes" className="transition-colors hover:text-gold-200">Dúvidas</a>
            <a href="#cta-final" className="transition-colors hover:text-gold-200">Contato</a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-blue-100/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Eterneasy. Todos os direitos reservados.</span>
          <span>Receita que acompanha seu volume.</span>
        </div>
      </div>
    </footer>
  );
}
