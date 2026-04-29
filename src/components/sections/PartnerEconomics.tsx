import { ArrowUpRight, BadgePercent, BarChart3, ShieldCheck } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const CARDS = [
  { icon: BadgePercent, title: "Flex — zero custo fixo",         desc: "Paga R$150 por cliente. Se não vender no mês, não paga nada. Ideal para quem está validando." },
  { icon: BarChart3,    title: "Premium — margem em escala",     desc: "R$500/mês fixo, clientes ilimitados. A partir de 4 eventos/mês, já é mais barato que o Flex." },
  { icon: ShieldCheck,  title: "Fácil de apresentar ao cliente", desc: "Uma demonstração de 15 minutos é suficiente para o cliente entender — e querer." },
];

export function PartnerEconomics() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Quanto você pode ganhar</span>
          <BlurText
            text="A conta é simples. A margem é real."
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
              <div key={card.title} data-card className="surface p-6 transition-all duration-300 hover:border-gold-400/30">
                <Icon className="mb-8 h-7 w-7 text-gold-500" strokeWidth={1.7} />
                <h3 className="font-display text-xl font-semibold text-navy-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy-700">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ROI calculator */}
        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1.4fr]">
          <div className="surface p-7">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500/70">Exemplo prático — plano Flex</span>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between gap-4 border-b border-navy-950/8 pb-3">
                <span className="text-sm text-navy-700">4 eventos/mês × ticket R$500</span>
                <span className="font-display text-lg font-bold text-navy-950">R$2.000</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-navy-950/8 pb-3">
                <span className="text-sm text-navy-700">Custo Flex (4 × R$150)</span>
                <span className="font-display text-lg font-bold text-navy-700/70">− R$600</span>
              </div>
              <div className="flex items-center justify-between gap-4 pt-1">
                <span className="text-sm font-bold text-navy-950">Margem líquida</span>
                <span className="font-display text-2xl font-bold text-gold-500">R$1.400</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-navy-700/50">
              Sem equipe extra. Sem operação manual. O ticket é o que você definir com o cliente.
            </p>
          </div>

          <div className="surface flex flex-col justify-between gap-6 p-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500/70">Por que o Premium vale a pena</span>
              <p className="mt-4 font-display text-2xl font-semibold leading-tight text-navy-950">
                A partir de 4 eventos/mês, R$500 fixo é mais barato que pagar R$150 por cliente.
              </p>
              <p className="mt-4 text-sm leading-7 text-navy-700">
                E com o Premium, cada evento extra que você fechar entra direto na margem — sem aumentar o custo.
              </p>
            </div>
            <a href="#oferta" className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/35 px-5 py-3 text-sm font-extrabold text-gold-600 transition-colors hover:bg-gold-400/8">
              Ver os planos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
