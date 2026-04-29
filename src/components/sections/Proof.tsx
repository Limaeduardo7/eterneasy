import { ArrowRight } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

export function Proof() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-parchment-50">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <span className="eyebrow">{T.proof.eyebrow}</span>
            <BlurText
              text={T.proof.title}
              animateBy="words"
              direction="bottom"
              delay={70}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-base leading-8 text-navy-700">
              {T.proof.subtitle}
            </p>
          </div>

          <div className="md:col-span-8">
            <ol ref={ref}>
              {T.proof.points.map((point, index) => (
                <li
                  key={point.title}
                  className={`relative py-8 pl-6 ${index !== 0 ? "border-t border-navy-950/8" : ""}`}
                >
                  <div className="absolute left-0 top-8 h-8 w-[3px] rounded-full bg-gradient-to-b from-gold-400 to-gold-400/15" />
                  <h3 className="font-display text-xl font-semibold text-navy-950 md:text-2xl">{point.title}</h3>
                  <p className="mt-2 text-base leading-7 text-navy-700">{point.desc}</p>
                </li>
              ))}
            </ol>
            <div className="pt-6 border-t border-navy-950/8">
              <a
                href="#oferta"
                className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
              >
                {T.proof.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
