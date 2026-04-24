import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { Handshake, FileText, CheckCircle2, Cog, Sparkles } from "lucide-react";

const STEPS = [
  { icon: Handshake,    title: "Você fecha o evento",             desc: "Segue vendendo do seu jeito, sem nenhuma mudança." },
  { icon: FileText,     title: "Cria dentro da plataforma",       desc: "Registro rápido, direto, sem fricção." },
  { icon: CheckCircle2, title: "O sistema valida automaticamente", desc: "Nada passa sem conferência." },
  { icon: Cog,          title: "A operação roda organizada",       desc: "Processos padronizados, sem retrabalho." },
  { icon: Sparkles,     title: "O evento é entregue com padrão",  desc: "Execução previsível, margem garantida." },
];

export function Mechanism() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section id="mecanismo" className="relative py-24 md:py-36 bg-navy-800">
      <div className="section-divider absolute top-0 left-0 w-full" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="eyebrow">Mecanismo</span>
          <BlurText
            text="O que muda quando a estrutura entra"
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <ol
          ref={ref}
          className="relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0"
        >
          {/* Horizontal connector */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center px-2"
              >
                {/* Icon circle */}
                <div className="relative z-10 shrink-0 w-20 h-20 rounded-full bg-navy-700 border-2 border-navy-600 group-hover:border-gold-400/60 flex items-center justify-center transition-all duration-400 md:mx-auto">
                  <Icon className="w-7 h-7 text-gold-400" strokeWidth={1.4} />
                </div>

                {/* Text */}
                <div className="md:mt-6 flex-1 md:px-1">
                  <h3 className="text-base font-semibold text-parchment-100 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-blue-100/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile vertical connector */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden absolute left-10 top-20 bottom-0 w-px bg-gradient-to-b from-gold-400/30 to-transparent -z-0" />
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-14 text-center text-slate-blue-100/60 italic text-base md:text-lg max-w-xl mx-auto">
          Você não muda o que faz. Só deixa de perder eficiência.
        </p>
      </div>
    </section>
  );
}
