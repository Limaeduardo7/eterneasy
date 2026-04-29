import { ArrowRight, BookOpen, Frame, MonitorSmartphone, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const PRODUCT_ICONS = [BookOpen, Frame, MonitorSmartphone];

export function Keepsakes() {
  const { T } = useLanguage();
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-parchment-50">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow">{T.keepsakes.eyebrow}</span>
          <BlurText
            text={T.keepsakes.title}
            animateBy="words"
            direction="bottom"
            delay={55}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
          <p className="mt-6 text-base leading-8 text-navy-700 md:text-lg">
            {T.keepsakes.subtitle}
          </p>
        </div>

        {/* Video featured card */}
        <div className="mb-5 surface-featured overflow-hidden p-0">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
            <div className="flex flex-col gap-6 p-7 md:flex-row md:items-center md:gap-12 md:p-9">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 border border-gold-400/30 text-gold-500">
                <Video className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-500/70">
                  {T.keepsakes.videoTag}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy-950 md:text-3xl">
                  {T.keepsakes.videoTitle}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-navy-700">
                  {T.keepsakes.videoDesc}
                </p>
              </div>
            </div>
            <div className="relative min-h-[300px] border-t border-navy-950/8 md:border-l md:border-t-0">
              <img
                src="/final-keepsake-ai.webp"
                alt="Cliente recebendo vídeo final, álbum e fotos impressas depois do evento"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-88 saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent md:bg-gradient-to-r md:from-gold-50/10 md:to-transparent" />
            </div>
          </div>
        </div>

        {/* Physical products grid */}
        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          {T.keepsakes.products.map((product, i) => {
            const Icon = PRODUCT_ICONS[i];
            return (
              <div key={product.title} data-card className="surface group p-6 transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_32px_-8px_rgba(6,16,24,0.1)]">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-500 group-hover:bg-gold-400/15 transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <span className="rounded-full border border-navy-950/10 px-2.5 py-1 text-xs font-semibold text-navy-700/70">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-950">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy-700">{product.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm leading-7 text-navy-700/60">
          {T.keepsakes.disclaimer}
        </p>

        <div className="mt-8">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {T.keepsakes.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
