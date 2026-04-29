import { AlertTriangle, ArrowRight, DollarSign, TrendingDown, Users } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [TrendingDown, Users, DollarSign, AlertTriangle];

export function Problem() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLUListElement>({ selector: "li" });

  return (
    <section id="problema" className="section-band bg-parchment-50">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">{T.problem.eyebrow}</span>
            <BlurText
              text={T.problem.title}
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-navy-700">
              {T.problem.subtitle}
            </p>
          </div>

          <ul ref={ref} className="grid gap-3 md:col-span-7 sm:grid-cols-2">
            {T.problem.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <li key={item.title} className="surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30 hover:shadow-[0_8px_32px_-8px_rgba(6,16,24,0.12)]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/10 text-gold-500">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-navy-700">{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {T.problem.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
