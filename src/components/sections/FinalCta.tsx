import { ArrowRight, MessageCircle } from "lucide-react";
import { Aurora } from "@/components/bits/Aurora";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function FinalCta() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-reveal]" });

  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy-950 py-24 md:py-40">
      <div className="section-divider absolute left-0 top-0" />

      <div className="absolute inset-0 z-0 opacity-55">
        <Aurora colorStops={["#061018", "#C9972B", "#163644"]} amplitude={0.7} blend={0.44} speed={0.30} />
      </div>
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,16,24,0.82),rgba(6,16,24,0.60))]" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,151,43,0.12)_0%,transparent_70%)]" />

      <div className="container-x relative z-10">
        <div ref={ref} className="mx-auto max-w-3xl text-center">

          <div data-reveal className="mx-auto mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400/70">Demonstração gratuita</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>

          <h2 data-reveal className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-parchment-50 md:text-6xl lg:text-7xl">
            Em 15 minutos você vê{" "}
            <span className="text-gold-300">tudo funcionando.</span>
          </h2>

          <p data-reveal className="mt-7 text-base leading-8 text-slate-blue-100/70 md:text-lg md:leading-9">
            Você escaneia o QR Code, envia uma foto com mensagem, vê aparecer no telão em segundos e recebe o vídeo depois. Aí você decide se vale.
          </p>

          <div data-reveal className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full btn-gold px-10 py-5 text-base font-extrabold text-navy-950 shadow-[0_20px_60px_-18px_rgba(242,215,122,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-16px_rgba(242,215,122,1)] sm:w-auto"
            >
              Quero ver a demonstração
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-10 py-5 text-base font-extrabold text-navy-950 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20b859] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <p data-reveal className="mt-8 text-xs font-semibold uppercase tracking-widest text-slate-blue-100/38">
            Sem custo · Sem compromisso · Você vê antes de decidir
          </p>
        </div>
      </div>
    </section>
  );
}
