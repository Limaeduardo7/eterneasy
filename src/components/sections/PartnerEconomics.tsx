import { ArrowUpRight, BadgePercent, BarChart3, ShieldCheck } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const CARDS = [
  { icon: BadgePercent, title: "Custo acompanha a venda", desc: "No Flex, o parceiro não assume mensalidade antes de ter receita associada." },
  { icon: BarChart3, title: "Volume melhora previsibilidade", desc: "Quando a recorrência aumenta, o Premium reduz atrito e melhora a margem por evento." },
  { icon: ShieldCheck, title: "Menos perda operacional", desc: "Processo padronizado reduz erro, retrabalho, desalinhamento e promessa comercial mal executada." },
];

export function PartnerEconomics() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Modelo de ganho</span>
          <BlurText
            text="A parceria precisa fechar na conta, não só no discurso."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} data-card className="surface p-6">
                <Icon className="mb-8 h-7 w-7 text-gold-300" strokeWidth={1.7} />
                <h3 className="font-display text-xl font-semibold text-parchment-50">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-blue-100/66">{card.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1.3fr]">
          <div className="surface p-6">
            <span className="text-sm font-bold text-gold-200">Leitura simples</span>
            <p className="mt-4 font-display text-3xl font-semibold leading-tight text-parchment-50">
              Venda primeiro. Estruture sem inflar custo fixo.
            </p>
          </div>
          <div className="surface flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center">
            <p className="max-w-xl text-base leading-8 text-slate-blue-100/72">
              O objetivo não é trocar sua operação por outra. É dar uma camada de processo para que cada evento vendido tenha caminho, responsável e margem acompanhada.
            </p>
            <a href="#cta-final" className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/30 px-5 py-3 text-sm font-extrabold text-gold-100 transition-colors hover:bg-gold-400/10">
              Ver na prática
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
