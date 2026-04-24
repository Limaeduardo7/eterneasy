import { ClipboardCheck, MessageSquareText, PlayCircle, Settings2 } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const STEPS = [
  { icon: MessageSquareText, title: "Diagnóstico rápido", desc: "Entendemos como você vende hoje, quais eventos aparecem mais e onde a operação costuma travar." },
  { icon: Settings2, title: "Configuração do fluxo", desc: "O processo é adaptado para registrar, validar e acompanhar cada evento sem burocracia desnecessária." },
  { icon: PlayCircle, title: "Primeiras vendas assistidas", desc: "Os primeiros registros são acompanhados para ajustar padrão, linguagem e passagem de informações." },
  { icon: ClipboardCheck, title: "Rotina operacional", desc: "Com o fluxo rodando, o parceiro ganha previsibilidade para vender mais sem improvisar cada entrega." },
];

export function Implementation() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Implantação</span>
            <BlurText
              text="Não é um projeto longo. É uma entrada guiada."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-blue-100/68">
            A implantação começa pelo que você já vende e evolui conforme o volume real aparece.
          </p>
        </div>

        <ol ref={ref} className="grid gap-3 md:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="surface p-5">
                <div className="mb-7 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-gold-300" strokeWidth={1.7} />
                  <span className="font-display text-2xl font-bold text-gold-300/70">{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-parchment-50">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-blue-100/64">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
