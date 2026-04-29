import { ArrowRight, Gift, MessageSquareHeart, MonitorPlay, QrCode, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const FLOW_ICONS = [QrCode, MessageSquareHeart, MonitorPlay, Video, Gift];

export function ClientPitch() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="o-que-e" className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">{T.clientPitch.eyebrow}</span>
            <BlurText
              text={T.clientPitch.title}
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-navy-700">
              {T.clientPitch.subtitle}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-950/8 bg-navy-950/[0.02] shadow-[0_4px_24px_-8px_rgba(6,16,24,0.1)]">
              <div className="relative">
                <img
                  src="/event-participation-ai.webp"
                  alt="Convidados usando o celular para participar de uma experiência interativa em um evento"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover opacity-90 saturate-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="rounded-full border border-gold-400/40 bg-gold-400/20 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-widest text-gold-200">
                    {T.clientPitch.imageBadge}
                  </span>
                </div>
              </div>
              <p className="border-t border-navy-950/8 p-4 text-sm leading-6 text-navy-700">
                {T.clientPitch.imageCaption}
              </p>
            </div>
          </div>

          <div ref={ref} className="grid gap-3 md:col-span-7">
            {T.clientPitch.flow.map((item, i) => {
              const Icon = FLOW_ICONS[i];
              return (
                <div key={item.title} data-card className="surface grid gap-4 p-5 sm:grid-cols-[48px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20 text-gold-500">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-navy-700">{item.desc}</p>
                  </div>
                </div>
              );
            })}
            <a
              href="#oferta"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {T.clientPitch.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
