import { CheckCircle2, Cog, FileText, Handshake, Sparkles } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const STEPS = [
  { icon: Handshake, title: "Você fecha o evento", desc: "A venda segue com seu processo comercial atual." },
  { icon: FileText, title: "Registra na plataforma", desc: "A operação entra em uma esteira clara e rastreável." },
  { icon: CheckCircle2, title: "O sistema valida", desc: "As informações críticas passam por conferência antes de avançar." },
  { icon: Cog, title: "A operação roda", desc: "Tarefas, responsáveis e padrões ficam organizados." },
  { icon: Sparkles, title: "O evento é entregue", desc: "A execução ganha previsibilidade e protege sua margem." },
];

export function Mechanism() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section id="mecanismo" className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="eyebrow">Como funciona</span>
          <BlurText
            text="Uma esteira simples para vender sem perder controle."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <ol ref={ref} className="grid gap-3 md:grid-cols-5">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="surface p-5 md:min-h-[240px]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-400/10 text-gold-200">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-7 text-parchment-50">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-blue-100/64">{step.desc}</p>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 max-w-2xl text-base leading-8 text-slate-blue-100/70">
          Você não muda o que faz. Só deixa de operar no escuro depois que o evento é vendido.
        </p>
      </div>
    </section>
  );
}
