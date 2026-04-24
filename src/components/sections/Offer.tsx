import { Check, ArrowRight } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "flex",
    badge: null,
    name: "Flex",
    price: "R$ 150",
    period: "por cliente",
    tag: "Sem mensalidade",
    micro: "Ideal para começar sem risco",
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
    badge: "Volume escalado",
    name: "Premium",
    price: "R$ 500",
    period: "/mês",
    tag: "Sem cobrança por cliente",
    micro: "Ideal para quem já tem volume",
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
    <section id="oferta" className="relative py-24 md:py-36 bg-navy-900">
      <div className="section-divider absolute top-0 left-0 w-full" />

      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Oferta</span>
          <BlurText
            text="Dois modelos. Você escolhe como quer operar."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-5 md:gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              data-card
              className={cn(
                "relative rounded-2xl p-8 md:p-10 border transition-all duration-300 flex flex-col",
                plan.featured
                  ? "border-gold-400/40 bg-gradient-to-br from-gold-400/[0.06] via-navy-800 to-navy-800 shadow-[0_20px_70px_-20px_rgba(198,154,39,0.3)]"
                  : "border-white/10 bg-navy-800/60 hover:border-white/20"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 px-3 py-1.5 rounded-full btn-gold text-navy-900 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {plan.badge}
                </span>
              )}

              <span className="eyebrow mb-4">{plan.micro}</span>

              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display text-5xl md:text-6xl text-parchment-50 tracking-tight">
                  {plan.price}
                </span>
                <span className="text-slate-blue-100/60 text-sm">{plan.period}</span>
              </div>
              <p className="text-xs text-gold-400/80 mb-8">{plan.tag}</p>

              <ul className="space-y-3.5 flex-1">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 text-gold-400 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-[15px] text-parchment-200/90 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta-final"
                className={cn(
                  "mt-8 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300",
                  plan.featured
                    ? "btn-gold text-navy-900 hover:opacity-90"
                    : "border border-white/15 text-parchment-100 hover:border-gold-400/40 hover:text-gold-300"
                )}
              >
                Escolher {plan.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-xl mx-auto text-center">
          <p className="font-display italic text-xl md:text-2xl text-parchment-100/90 leading-snug">
            "Se você vende pouco, não assume custo.
            <br />
            Se vende muito, aumenta margem."
          </p>
        </div>
      </div>
    </section>
  );
}
