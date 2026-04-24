export function Footer() {
  return (
    <footer className="relative py-12 bg-navy-950 border-t border-white/5">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="#">
            <img
              src="/logo.png"
              alt="Eterneasy"
              className="h-8 w-auto object-contain"
            />
          </a>

          <p className="text-sm text-slate-blue-100/50 max-w-xs">
            Você já faz isso. Só não estrutura.
          </p>

          <nav className="flex items-center gap-6 text-sm text-slate-blue-100/50">
            <a href="#" className="hover:text-gold-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Contato</a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-slate-blue-100/30">
          <span>© {new Date().getFullYear()} Eterneasy. Todos os direitos reservados.</span>
          <span>Receita que acompanha seu volume.</span>
        </div>
      </div>
    </footer>
  );
}
