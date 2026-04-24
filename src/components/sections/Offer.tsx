import { ArrowRight, Check } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "flex",
    name: "Flex",
    price: "R$ 150",
    period: "por cliente",
    tag: "Sem mensalidade",
    micro: "Para começar com baixo compromisso",
    featured: false,
    bullets: [
      "Pague apenas pelo que vender",
      "Zero custo fixo obrigatório",
      "Ativação imediata",
      "Migra para Premium conforme cresce",
    ],
  },
  {
    id: "premium",
    badge: "Mais margem em volume",
    name: "Premium",
    price: "R$ 500",
    period: "/mês",
    tag: "Sem cobrança por cliente",
    micro: "Para quem já vende com frequência",
    featured: true,
    bullets: [
      "Clientes ilimitados inclusos",
      "Maior margem por evento",
      "Operação padronizada",
      "Suporte prioritário",
    ],
  },
];

export function Offer() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="oferta" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Planos</span>
            <BlurText
              text="Dois modelos para operar com margem."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-blue-100/68">
            Escolha pelo momento do seu volume. O modelo acompanha a operação, não trava o crescimento.
          </p>
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              data-card
              className={cn(
                "surface relative flex flex-col p-7 md:p-8",
                plan.featured && "border-gold-400/40 bg-gold-400/[0.075]"
              )}
            >
              {plan.badge && (
                <span className="mb-6 inline-flex w-fit rounded-full bg-gold-400 px-3 py-1 text-xs font-extrabold uppercase text-navy-950">
                  {plan.badge}
                </span>
              )}

              <span className="text-sm font-bold text-gold-200">{plan.micro}</span>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-parchment-50 md:text-6xl">{plan.price}</span>
                <span className="pb-2 text-sm font-semibold text-slate-blue-100/66">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-gold-200/82">{plan.tag}</p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" strokeWidth={2.5} />
                    <span className="text-sm leading-6 text-parchment-100/86">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta-final"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5",
                  plan.featured
                    ? "btn-gold text-navy-950"
                    : "border border-white/15 text-parchment-50 hover:border-gold-400/40 hover:text-gold-100"
                )}
              >
                Escolher {plan.name}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-parchment-100/78">
          Se vende pouco, não assume custo fixo. Se vende muito, aumenta margem com operação padronizada.
        </p>
      </div>
    </section>
  );
}
