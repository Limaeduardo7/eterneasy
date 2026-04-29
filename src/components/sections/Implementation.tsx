import { ArrowRight, ClipboardCheck, MonitorPlay, PlayCircle, QrCode } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const STEP_ICONS = [QrCode, MonitorPlay, PlayCircle, ClipboardCheck];

export function Implementation() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-parchment-50">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{T.implementation.eyebrow}</span>
            <BlurText
              text={T.implementation.title}
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-navy-700">
            {T.implementation.rightText}
          </p>
        </div>

        <ol ref={ref} className="grid gap-4 md:grid-cols-4">
          {T.implementation.steps.map((step, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <li key={step.title} className="relative surface p-6 transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_32px_-8px_rgba(6,16,24,0.1)]">
                {index < T.implementation.steps.length - 1 && (
                  <div className="absolute -right-2 top-10 hidden h-px w-4 bg-gold-400/25 md:block" />
                )}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-500">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-base font-semibold text-navy-950 md:text-lg">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-navy-700">{step.desc}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {T.implementation.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
