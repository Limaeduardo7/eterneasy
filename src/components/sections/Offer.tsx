import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "flex",
    name: "Flex",
    price: "R$ 150",
    period: "por evento",
    tag: "Cadastro gratuito",
    micro: "Comece hoje, sem nenhum investimento inicial",
    featured: false,
    cta: "Criar conta grátis",
    bullets: [
      "Cadastro 100% gratuito",
      "Pague R$150 apenas quando vender",
      "Zero mensalidade ou custo fixo",
      "Migra para Premium quando crescer",
    ],
  },
  {
    id: "premium",
    badge: "Mais margem em volume",
    name: "Premium",
    price: "R$ 500",
    period: "/mês",
    tag: "Eventos ilimitados",
    micro: "Para parceiros com volume recorrente",
    featured: true,
    cta: "Falar sobre o Premium",
    bullets: [
      "Eventos ilimitados inclusos",
      "Maior margem por evento",
      "Operação padronizada",
      "Suporte prioritário",
    ],
  },
];

export function Offer() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="oferta" className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Como funciona — cadastro gratuito, receita por evento</span>
            <BlurText
              text="Cadastre grátis. Pague só quando vender."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
          </div>
          <p className="max-w-xs text-sm leading-7 text-navy-700">
            Sem custo inicial. Sem mensalidade obrigatória. Cadastre agora e pague R$150 apenas quando fechar um evento.
          </p>
        </div>

        <div ref={ref} className="grid gap-5 md:grid-cols-2 md:items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              data-card
              className={cn(
                "relative flex flex-col rounded-2xl border p-7 transition-all duration-300 md:p-9",
                plan.featured
                  ? "border-gold-400/40 bg-gold-400/[0.05] shadow-[0_0_80px_-24px_rgba(201,151,43,0.35),inset_0_1px_0_rgba(201,151,43,0.15)]"
                  : "border-navy-950/8 bg-white shadow-[0_4px_32px_-8px_rgba(6,16,24,0.08)]"
              )}
            >
              {plan.featured && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold-400/25" />
              )}

              {plan.badge && (
                <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-xs font-extrabold uppercase text-navy-950">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge}
                </span>
              )}

              <span className="text-xs font-bold uppercase tracking-widest text-navy-700/60">{plan.micro}</span>

              <div className="mt-4 flex items-end gap-2">
                <span className={cn(
                  "font-display font-bold leading-none",
                  plan.featured ? "text-6xl text-navy-950" : "text-5xl text-navy-900/90"
                )}>
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm font-semibold text-navy-700/70">{plan.period}</span>
              </div>
              <p className={cn(
                "mt-2.5 text-base font-extrabold",
                plan.featured ? "text-gold-500" : "text-gold-500/75"
              )}>
                {plan.tag}
              </p>

              <div className={cn("my-7 h-px", plan.featured ? "bg-gold-400/20" : "bg-navy-950/8")} />

              <ul className="flex-1 space-y-3.5">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check
                      className={cn("mt-0.5 h-4 w-4 shrink-0", plan.featured ? "text-gold-500" : "text-gold-500/65")}
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-6 text-navy-800">{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5554991303683"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5",
                  plan.featured
                    ? "btn-gold text-navy-950 shadow-[0_12px_40px_-14px_rgba(242,215,122,0.7)]"
                    : "border border-navy-950/12 text-navy-800 hover:border-gold-400/40 hover:text-gold-600"
                )}
              >
                {plan.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base leading-8 text-navy-700/75">
          Comece grátis no Flex — sem nenhum custo até vender o primeiro evento. Quando o volume crescer, o Premium elimina o custo por evento e aumenta a sua margem.
        </p>
      </div>
    </section>
  );
}
