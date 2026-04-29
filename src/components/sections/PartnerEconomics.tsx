import { ArrowUpRight, BadgePercent, BarChart3, ShieldCheck } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const CARD_ICONS = [BadgePercent, BarChart3, ShieldCheck];

export function PartnerEconomics() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">{T.partnerEconomics.eyebrow}</span>
          <BlurText
            text={T.partnerEconomics.title}
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          {T.partnerEconomics.cards.map((card, i) => {
            const Icon = CARD_ICONS[i];
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
            <span className="text-xs font-bold uppercase tracking-widest text-gold-500/70">
              {T.partnerEconomics.flexLabel}
            </span>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between gap-4 border-b border-navy-950/8 pb-3">
                <span className="text-sm text-navy-700">{T.partnerEconomics.row1Label}</span>
                <span className="font-display text-lg font-bold text-navy-950">{T.partnerEconomics.row1Value}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-navy-950/8 pb-3">
                <span className="text-sm text-navy-700">{T.partnerEconomics.row2Label}</span>
                <span className="font-display text-lg font-bold text-navy-700/70">{T.partnerEconomics.row2Value}</span>
              </div>
              <div className="flex items-center justify-between gap-4 pt-1">
                <span className="text-sm font-bold text-navy-950">{T.partnerEconomics.row3Label}</span>
                <span className="font-display text-2xl font-bold text-gold-500">{T.partnerEconomics.row3Value}</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-navy-700/50">
              {T.partnerEconomics.disclaimer}
            </p>
          </div>

          <div className="surface flex flex-col justify-between gap-6 p-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500/70">
                {T.partnerEconomics.premiumTag}
              </span>
              <p className="mt-4 font-display text-2xl font-semibold leading-tight text-navy-950">
                {T.partnerEconomics.premiumTitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-navy-700">
                {T.partnerEconomics.premiumDesc}
              </p>
            </div>
            <a
              href="#oferta"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/35 px-5 py-3 text-sm font-extrabold text-gold-600 transition-colors hover:bg-gold-400/8"
            >
              {T.partnerEconomics.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
