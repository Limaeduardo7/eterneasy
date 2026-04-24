import { ArrowRight, MessageCircle } from "lucide-react";
import { Aurora } from "@/components/bits/Aurora";
import { BlurText } from "@/components/bits/BlurText";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function FinalCta() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-reveal]" });

  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy-950 py-20 md:py-32">
      <div className="section-divider absolute left-0 top-0" />
      <div className="absolute inset-0 z-0 opacity-48">
        <Aurora colorStops={["#061018", "#C9972B", "#163644"]} amplitude={0.65} blend={0.42} speed={0.32} />
      </div>
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,16,24,0.88),rgba(6,16,24,0.68))]" />

      <div className="container-x relative z-10">
        <div ref={ref} className="max-w-4xl">
          <span className="eyebrow" data-reveal>Decisão</span>

          <BlurText
            text="Continuar sem estrutura é deixar margem na operação."
            animateBy="words"
            direction="bottom"
            delay={55}
            className="headline-display mt-6 text-4xl md:text-6xl lg:text-7xl"
          />

          <p data-reveal className="mt-7 max-w-2xl text-lg leading-8 text-slate-blue-100/78">
            A demonstração mostra como sua venda atual pode entrar em um fluxo mais organizado, com menos perda e mais previsibilidade.
          </p>

          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full btn-gold px-8 py-4 text-base font-extrabold text-navy-950 shadow-[0_18px_50px_-22px_rgba(242,215,122,0.9)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-extrabold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20b859]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <p data-reveal className="mt-8 text-sm font-semibold text-slate-blue-100/52">
            Sem mudança no processo comercial. Sem custo fixo obrigatório. Ativação imediata.
          </p>
        </div>
      </div>
    </section>
  );
}
