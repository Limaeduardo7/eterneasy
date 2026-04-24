import { BookOpen, Frame, MonitorSmartphone, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const PRODUCTS = [
  {
    icon: BookOpen,
    title: "Álbum de Lembranças",
    desc: "Um álbum físico com as melhores fotos e mensagens do evento — impresso e encadernado para guardar para sempre.",
    tag: "Produto físico",
  },
  {
    icon: Frame,
    title: "Quadros Personalizados",
    desc: "Momentos especiais do evento transformados em quadros decorativos. O cliente escolhe a foto, você entrega o quadro.",
    tag: "Produto físico",
  },
  {
    icon: MonitorSmartphone,
    title: "Porta Retrato Digital",
    desc: "Um porta retrato digital exclusivo com as melhores fotos do evento. O cliente revive cada momento quando quiser.",
    tag: "Produto digital",
  },
];

export function Keepsakes() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(201,151,43,0.07)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow">Lembranças exclusivas</span>
          <BlurText
            text="O cliente não recebe só memórias. Recebe lembranças que duram."
            animateBy="words"
            direction="bottom"
            delay={55}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
          <p className="mt-6 text-base leading-8 text-slate-blue-100/65 md:text-lg">
            Além do vídeo final, você pode oferecer produtos físicos e digitais que aumentam o valor percebido — e a sua margem.
          </p>
        </div>

        {/* Video featured card */}
        <div className="mb-5 surface-featured p-7 md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 border border-gold-400/30 text-gold-300">
              <Video className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400/70">Entrega principal</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-parchment-50 md:text-3xl">Vídeo do Evento</h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-slate-blue-100/70">
                Transformamos todas as fotos e mensagens enviadas pelos convidados em um vídeo emocionante e personalizado. O cliente recebe uma lembrança única para reviver cada instante do evento.
              </p>
            </div>
          </div>
        </div>

        {/* Physical products grid */}
        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.title} data-card className="surface group p-6 transition-all duration-300 hover:border-gold-400/20">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/15 text-gold-300 group-hover:bg-gold-400/15 transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-blue-100/50">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-parchment-50">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-blue-100/62">{product.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm leading-7 text-slate-blue-100/48">
          Os produtos físicos são opcionais e podem ser oferecidos como upgrade pelo parceiro — cada um é uma nova fonte de receita.
        </p>
      </div>
    </section>
  );
}
