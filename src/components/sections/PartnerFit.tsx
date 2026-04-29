import { ArrowRight, Building2, CalendarCheck, CircleAlert, HandCoins, Users } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const IDEAL_ICONS = [CalendarCheck, Users, HandCoins];

export function PartnerFit() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-parchment-50">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">{T.partnerFit.eyebrow}</span>
            <BlurText
              text={T.partnerFit.title}
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-navy-700">
              {T.partnerFit.subtitle}
            </p>
          </div>

          <div ref={ref} className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {T.partnerFit.ideal.map((item, i) => {
                const Icon = IDEAL_ICONS[i];
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
                {T.partnerFit.notIdealTitle}
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {T.partnerFit.notIdeal.map((item) => (
                  <p key={item} className="text-sm leading-6 text-navy-800/65">{item}</p>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-lg border border-navy-950/8 bg-white p-5 shadow-[0_2px_16px_-4px_rgba(6,16,24,0.06)]">
              <Building2 className="h-5 w-5 shrink-0 text-gold-500" />
              <p className="text-sm leading-6 text-navy-700">
                {T.partnerFit.demoNote}
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#oferta"
                className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
              >
                {T.partnerFit.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
