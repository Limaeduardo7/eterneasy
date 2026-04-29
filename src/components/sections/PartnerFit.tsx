import { ArrowRight, Building2, CalendarCheck, CircleAlert, HandCoins, Users } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const IDEAL = [
  { icon: CalendarCheck, title: "Já vende eventos",        desc: "Mesmo sem alto volume, você tem demanda recorrente ou oportunidade clara de venda." },
  { icon: Users,         title: "Mantém o relacionamento", desc: "Você continua sendo o ponto de confiança do cliente — a Eterneasy entra na entrega." },
  { icon: HandCoins,     title: "Quer mais margem",        desc: "Sem aumentar equipe. A estrutura reduz atrito antes que a venda vire custo." },
];

const NOT_IDEAL = [
  "Não quer abrir uma frente de vendas em eventos.",
  "Prefere operar tudo manualmente.",
  "Não quer registrar informações básicas do evento.",
];

export function PartnerFit() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-parchment-50">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">Você se encaixa aqui?</span>
            <BlurText
              text="Se você já entra em eventos, já tem tudo que precisa."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-navy-700">
              Fotógrafos, cerimonialistas, buffets, produtores de eventos, decoradores — qualquer profissional que já tem acesso ao evento pode vender isso.
            </p>
          </div>

          <div ref={ref} className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {IDEAL.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} data-card className="surface p-5 transition-all duration-300 hover:border-gold-400/30">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20 text-gold-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-7 text-navy-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-navy-700">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-lg border border-amber-400/25 bg-amber-50 p-6">
              <div className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase text-amber-600">
                <CircleAlert className="h-4 w-4" />
                Não é para você se
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {NOT_IDEAL.map((item) => (
                  <p key={item} className="text-sm leading-6 text-navy-800/65">{item}</p>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-lg border border-navy-950/8 bg-white p-5 shadow-[0_2px_16px_-4px_rgba(6,16,24,0.06)]">
              <Building2 className="h-5 w-5 shrink-0 text-gold-500" />
              <p className="text-sm leading-6 text-navy-700">
                A demonstração mostra tudo: envio de fotos, slideshow no monitor e vídeo final entregue ao cliente.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#oferta"
                className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Me encaixo — quero ver os planos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
