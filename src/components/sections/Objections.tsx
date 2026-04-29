import { ArrowRight } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

export function Objections() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="objecoes" className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">{T.objections.eyebrow}</span>
          <BlurText
            text={T.objections.title}
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-3 md:grid-cols-2">
          {T.objections.items.map((item) => (
            <div
              key={item.q}
              data-card
              className="group rounded-xl border border-navy-950/8 bg-white p-6 shadow-[0_2px_16px_-4px_rgba(6,16,24,0.06)] transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_32px_-8px_rgba(6,16,24,0.1)]"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400/60 group-hover:bg-gold-500 transition-colors" />
                <h3 className="font-display text-lg font-semibold text-navy-950">{item.q}</h3>
              </div>
              <p className="pl-5 text-sm leading-7 text-navy-700">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {T.objections.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <span className="text-sm text-navy-700">{T.objections.smallText}</span>
        </div>
      </div>
    </section>
  );
}
