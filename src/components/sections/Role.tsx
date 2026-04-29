import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

export function Role() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-col]" });

  return (
    <section className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">{T.role.eyebrow}</span>
          <BlurText
            text={T.role.title}
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          <RoleColumn title={T.role.youLabel}      items={T.role.you}     tone="neutral" />
          <RoleColumn title={T.role.eternalLabel}  items={T.role.eternal} tone="gold" />
          <RoleColumn title={T.role.clientLabel}   items={T.role.client}  tone="neutral" />
        </div>

        <p className="mt-10 text-base leading-8 text-navy-700">
          {T.role.disclaimer}
        </p>

        <div className="mt-6">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {T.role.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function RoleColumn({ title, items, tone }: { title: string; items: string[]; tone: "neutral" | "gold" }) {
  return (
    <div
      data-col
      className={tone === "gold" ? "surface-featured p-7" : "surface p-7"}
    >
      <span className={
        tone === "gold"
          ? "text-xs font-extrabold uppercase tracking-widest text-gold-500"
          : "text-xs font-extrabold uppercase tracking-widest text-navy-700/65"
      }>
        {title}
      </span>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-base font-semibold text-navy-950 md:text-lg">
            <CheckCircle2 className={
              tone === "gold"
                ? "h-5 w-5 shrink-0 text-gold-500"
                : "h-5 w-5 shrink-0 text-navy-700/35"
            } />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
