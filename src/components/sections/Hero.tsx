import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Aurora } from "@/components/bits/Aurora";
import { BlurText } from "@/components/bits/BlurText";

const HIGHLIGHTS = ["Ativação imediata", "Sem custo inicial", "Operação estruturada"];

export function Hero() {
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-h]", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.35,
      });
    }, metaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[94svh] items-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=80"
          alt=""
          className="h-full w-full object-cover opacity-35 mix-blend-luminosity"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(6,16,24,0.96)_0%,rgba(6,16,24,0.72)_48%,rgba(6,16,24,0.3)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,16,24,0.25)_0%,rgba(6,16,24,0.88)_100%)]" />
      <div className="absolute inset-0 z-[1] opacity-45">
        <Aurora colorStops={["#061018", "#C9972B", "#163644"]} amplitude={0.85} blend={0.42} speed={0.35} />
      </div>

      <div className="container-x relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl">
          <div
            data-h
            className="mb-6 inline-flex items-center rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1.5 text-sm font-extrabold text-gold-100"
          >
            Eterneasy para eventos
          </div>

          <BlurText
            text="Mais margem em cada evento vendido."
            animateBy="words"
            direction="bottom"
            delay={70}
            className="headline-display max-w-4xl text-5xl md:text-7xl lg:text-8xl"
          />

          <p
            data-h
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-blue-100/86 md:text-xl"
          >
            Você continua vendendo normalmente. A Eterneasy organiza o fluxo, processa a operação e viabiliza a entrega com mais previsibilidade.
          </p>

          <div ref={metaRef} className="mt-10 flex">
            <a
              data-h
              href="#cta-final"
              className="inline-flex items-center justify-center gap-2 rounded-full btn-gold px-7 py-4 text-base font-extrabold text-navy-950 shadow-[0_18px_50px_-22px_rgba(242,215,122,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-20px_rgba(242,215,122,0.85)]"
            >
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div data-h className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-parchment-100/88">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
