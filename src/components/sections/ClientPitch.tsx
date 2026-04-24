import { ImagePlus, MonitorPlay, PackageCheck, QrCode, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const FLOW = [
  { icon: QrCode,        title: "Você cria o evento",          desc: "Gera o link ou QR Code para os convidados enviarem fotos." },
  { icon: ImagePlus,     title: "Convidados mandam fotos",     desc: "Durante o evento, as pessoas participam pelo celular em tempo real." },
  { icon: MonitorPlay,   title: "Fotos aparecem no monitor",   desc: "As imagens entram direto no slideshow exibido no telão ou TV." },
  { icon: Video,         title: "Slides viram vídeo",          desc: "Depois do evento, geramos o vídeo final com todos os momentos." },
  { icon: PackageCheck,  title: "Você entrega ao cliente",     desc: "Uma experiência durante o evento e uma lembrança pronta depois." },
];

export function ClientPitch() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="o-que-e" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">O que é</span>
            <BlurText
              text="Interação durante o evento. Lembrança entregue depois."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-slate-blue-100/72">
              Você não vende "um sistema". Vende participação ao vivo e um vídeo final que o cliente guarda.
            </p>
          </div>

          <div ref={ref} className="grid gap-3 md:col-span-7">
            {FLOW.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} data-card className="surface grid gap-4 p-5 sm:grid-cols-[48px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-400/10 text-gold-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-parchment-50">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-blue-100/68">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
