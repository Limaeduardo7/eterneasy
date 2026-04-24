import { ImagePlus, MonitorPlay, PackageCheck, QrCode, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const STEPS = [
  { icon: QrCode,       title: "Você ativa o evento",      desc: "Cria o link e libera o acesso para envio de fotos." },
  { icon: ImagePlus,    title: "Convidados participam",    desc: "Mandam fotos pelo celular durante o evento." },
  { icon: MonitorPlay,  title: "Slideshow ao vivo",        desc: "As fotos aparecem no monitor em tempo real." },
  { icon: Video,        title: "Slides viram vídeo",       desc: "Geramos o vídeo final depois do evento." },
  { icon: PackageCheck, title: "Você entrega",             desc: "O cliente recebe a lembrança pronta." },
];

export function Mechanism() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section id="mecanismo" className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="eyebrow">Como funciona</span>
          <BlurText
            text="Da foto enviada no celular ao vídeo final do evento."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
          <p className="mt-6 text-base leading-8 text-slate-blue-100/70">
            Você vende. A Eterneasy cuida do fluxo completo — envio, exibição e entrega.
          </p>
        </div>

        <ol ref={ref} className="grid gap-3 md:grid-cols-5">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="surface p-5 md:min-h-[220px]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-400/10 text-gold-200">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-7 text-parchment-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-blue-100/64">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
