import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Gift, MonitorPlay, QrCode } from "lucide-react";
import { Aurora } from "@/components/bits/Aurora";

const PILLARS = [
  { Icon: QrCode,      label: "QR Code instantâneo",  sub: "Convidados escaneiam e enviam foto + mensagem" },
  { Icon: MonitorPlay, label: "Aparece no telão",      sub: "Slideshow ao vivo na TV, telão ou projetor" },
  { Icon: Gift,        label: "Lembrança garantida",   sub: "Vídeo + produtos exclusivos entregues ao cliente" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-h]", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-navy-950">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity"
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950/95" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/95 via-navy-950/50 to-transparent" />

      {/* Aurora */}
      <div className="absolute inset-0 z-[1] opacity-45">
        <Aurora colorStops={["#061018", "#C9972B", "#163644"]} amplitude={0.9} blend={0.38} speed={0.28} />
      </div>

      {/* Gold radial glow */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_70%_40%_at_65%_30%,rgba(201,151,43,0.10)_0%,transparent_70%)]" />

      <div ref={ref} className="container-x relative z-10 pb-14 pt-28 md:pt-36">

        {/* Eyebrow */}
        <div data-h className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold-200">Sistema para eventos</span>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-20 md:items-center">

          {/* Left — copy */}
          <div>
            <h1 data-h className="font-display font-bold leading-[1.06] tracking-tight text-parchment-50 text-[2.75rem] md:text-5xl lg:text-[3.75rem]">
              Fotos e mensagens{" "}
              <span className="text-gold-300">no telão.</span>
              <br className="hidden md:block" />
              {" "}Lembrança entregue{" "}
              <span className="text-gold-300">depois.</span>
            </h1>

            <p data-h className="mt-6 max-w-md text-base leading-7 text-slate-blue-100/72 md:text-lg md:leading-8">
              Convidados escaneiam o QR Code, enviam foto e mensagem — aparece no telão na hora. Depois, vira vídeo e lembranças exclusivas para o cliente.
            </p>

            <div data-h className="mt-9 flex flex-wrap gap-3">
              <a
                href="#cta-final"
                className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_16px_48px_-16px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_56px_-14px_rgba(242,215,122,0.9)]"
              >
                Solicitar demonstração
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#o-que-e"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-parchment-100 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-200"
              >
                Ver como funciona
              </a>
            </div>

            <p data-h className="mt-7 text-xs font-semibold text-slate-blue-100/38 uppercase tracking-widest">
              Sem mensalidade obrigatória · Ativação imediata
            </p>
          </div>

          {/* Right — pillar cards */}
          <div data-h className="grid gap-3">
            {PILLARS.map(({ Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/20 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400/12 text-gold-300 border border-gold-400/20">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-parchment-50">{label}</p>
                  <p className="text-sm text-slate-blue-100/58">{sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
    </section>
  );
}
