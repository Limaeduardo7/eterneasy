import { ArrowRight, Check, Sparkles } from "lucide-react";
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
    micro: "Para começar sem custo fixo",
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
    tag: "Clientes ilimitados",
    micro: "Para quem tem volume recorrente",
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

      {/* Subtle top glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,151,43,0.07)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Planos — comece agora, escale no seu ritmo</span>
            <BlurText
              text="Zero risco para validar. Custo previsível para escalar."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
          </div>
          <p className="max-w-xs text-sm leading-7 text-slate-blue-100/60">
            Você escolhe: paga por cliente quando vender, ou trava um fixo baixo quando o volume justificar.
          </p>
        </div>

        <div ref={ref} className="grid gap-5 md:grid-cols-2 md:items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              data-card
              className={cn(
                "relative flex flex-col rounded-2xl border p-7 md:p-9 transition-all duration-300",
                plan.featured
                  ? "border-gold-400/50 bg-gold-400/[0.07] shadow-[0_0_100px_-28px_rgba(201,151,43,0.55),inset_0_1px_0_rgba(201,151,43,0.2)]"
                  : "border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.6)]"
              )}
            >
              {/* Featured glow ring */}
              {plan.featured && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold-400/30" />
              )}

              {plan.badge && (
                <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-xs font-extrabold uppercase text-navy-950">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge}
                </span>
              )}

              <span className="text-xs font-bold uppercase tracking-widest text-slate-blue-100/50">{plan.micro}</span>

              <div className="mt-4 flex items-end gap-2">
                <span className={cn(
                  "font-display font-bold leading-none",
                  plan.featured ? "text-6xl text-parchment-50" : "text-5xl text-parchment-100/90"
                )}>
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm font-semibold text-slate-blue-100/55">{plan.period}</span>
              </div>
              <p className={cn(
                "mt-2.5 text-base font-extrabold",
                plan.featured ? "text-gold-300" : "text-gold-400/80"
              )}>
                {plan.tag}
              </p>

              <div className={cn("my-7 h-px", plan.featured ? "bg-gold-400/20" : "bg-white/10")} />

              <ul className="flex-1 space-y-3.5">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      plan.featured ? "text-gold-300" : "text-gold-400/70"
                    )} strokeWidth={2.5} />
                    <span className="text-sm leading-6 text-parchment-100/82">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta-final"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5",
                  plan.featured
                    ? "btn-gold text-navy-950 shadow-[0_12px_40px_-14px_rgba(242,215,122,0.8)]"
                    : "border border-white/15 text-parchment-50 hover:border-gold-400/40 hover:text-gold-100"
                )}
              >
                Entender {plan.name}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base leading-8 text-parchment-100/55">
          Se vende pouco, o Flex evita custo fixo. Se vende muito, o Premium elimina cobrança por cliente e aumenta previsibilidade.
        </p>
      </div>
    </section>
  );
}
