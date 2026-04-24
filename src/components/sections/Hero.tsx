import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Aurora } from "@/components/bits/Aurora";
import { BlurText } from "@/components/bits/BlurText";

export function Hero() {
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-h]", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.4,
      });
    }, metaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#102C47", "#C69A27", "#0A1826"]}
          amplitude={1.4}
          blend={0.55}
          speed={0.5}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/80 via-navy-950/30 to-transparent" />

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=70"
          alt=""
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
      </div>

      <div className="container-x relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <div
            data-h
            className="inline-flex items-center gap-2 mb-8 px-3.5 py-2 rounded-full border border-gold-400/30 bg-gold-400/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="eyebrow">Plataforma de monetização de eventos</span>
          </div>

          <BlurText
            text="Cada evento que você vende pode gerar mais margem do que hoje."
            animateBy="words"
            direction="bottom"
            delay={80}
            className="headline-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.06] mb-6"
          />

          <p
            data-h
            className="text-lg md:text-xl text-slate-blue-100/80 max-w-2xl leading-relaxed mb-3"
          >
            Você continua vendendo normalmente.{" "}
            <span className="text-parchment-100">
              A Eterneasy estrutura, processa e viabiliza cada evento.
            </span>
          </p>

          <p data-h className="text-sm text-slate-blue-200/60 italic mb-10">
            Sem mudança no seu processo comercial.
          </p>

          <div ref={metaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              data-h
              href="#cta-final"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-navy-900 font-semibold text-base shadow-[0_10px_40px_-10px_rgba(198,154,39,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-8px_rgba(198,154,39,0.65)]"
              style={{
                background:
                  "linear-gradient(110deg, #C69A27 0%, #F0D98A 35%, #C69A27 65%, #A87E1A 100%)",
                backgroundSize: "200% 100%",
              }}
            >
              Solicitar demonstração
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              data-h
              href="#cta-final"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 text-parchment-100 font-medium text-base hover:border-gold-400/40 hover:text-gold-300 transition-all duration-300"
            >
              Solicitar demonstração
            </a>
            <a
              data-h
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="sm:hidden inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-navy-900 font-semibold text-base"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <div
            data-h
            className="mt-10 flex flex-row flex-wrap items-center gap-4 text-[10px] text-slate-blue-100/45 uppercase tracking-[0.18em]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-400/50" />
              Ativação imediata
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-400/50" />
              Sem custo inicial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-400/50" />
              Operação estruturada
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-blue-100/40">Role</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold-400/50 to-transparent" />
      </div>
    </section>
  );
}
