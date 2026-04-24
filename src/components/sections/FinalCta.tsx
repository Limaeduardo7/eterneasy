import { ArrowRight, MessageCircle } from "lucide-react";
import { Aurora } from "@/components/bits/Aurora";
import { BlurText } from "@/components/bits/BlurText";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function FinalCta() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-reveal]" });

  return (
    <section id="cta-final" className="relative py-28 md:py-44 overflow-hidden bg-navy-950">
      <div className="section-divider absolute top-0 left-0 w-full" />

      <div className="absolute inset-0 z-0 opacity-60">
        <Aurora
          colorStops={["#0A1826", "#C69A27", "#102C47"]}
          amplitude={0.9}
          blend={0.5}
          speed={0.4}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/80" />

      <div className="container-x relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <span className="eyebrow" data-reveal>Decisão</span>

          <BlurText
            text="Se você já vende eventos, continuar como está é perder margem."
            animateBy="words"
            direction="bottom"
            delay={55}
            className="headline-display mt-6 text-4xl md:text-6xl lg:text-[4.5rem]"
          />

          <p
            data-reveal
            className="mt-8 font-display italic text-xl md:text-2xl text-parchment-200/85 leading-snug"
          >
            A decisão não é entrar.
            <br />
            É quanto você está deixando na mesa.
          </p>

          <div
            data-reveal
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gold text-navy-900 font-bold text-base shadow-[0_14px_50px_-10px_rgba(198,154,39,0.6)] hover:shadow-[0_18px_60px_-8px_rgba(198,154,39,0.75)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar ativação agora
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-navy-900 font-semibold text-base hover:bg-[#20b859] hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>

          <p
            data-reveal
            className="mt-10 text-[10px] uppercase tracking-[0.22em] text-slate-blue-100/35"
          >
            Sem mudança no processo · Sem custo fixo obrigatório · Ativação imediata
          </p>
        </div>
      </div>
    </section>
  );
}
