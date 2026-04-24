import { Gift, MessageSquareHeart, MonitorPlay, QrCode, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const STEPS = [
  {
    icon: QrCode,
    title: "Escaneie o QR Code",
    desc: "Convidados e familiares escaneiam o QR Code com o celular — sem app, sem cadastro.",
  },
  {
    icon: MessageSquareHeart,
    title: "Envie foto + mensagem",
    desc: "Cada convidado posta sua foto e deixa uma mensagem especial para o homenageado.",
  },
  {
    icon: MonitorPlay,
    title: "Aparece na hora",
    desc: "Tudo aparece em tempo real no telão, TV ou projetor durante o evento.",
  },
  {
    icon: Video,
    title: "Virou vídeo",
    desc: "Após o evento, todas as fotos e mensagens viram um vídeo emocionante e personalizado.",
  },
  {
    icon: Gift,
    title: "Lembrança entregue",
    desc: "O cliente recebe o vídeo + lembranças exclusivas que ficam para a vida toda.",
  },
];

export function Mechanism() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section id="mecanismo" className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,151,43,0.06)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="eyebrow">Como funciona</span>
          <BlurText
            text="Do QR Code no celular ao vídeo na mão do cliente."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
          <p className="mt-6 text-base leading-8 text-slate-blue-100/65">
            Você vende. A Eterneasy cuida do QR Code, do slideshow no telão e da entrega final.
          </p>
        </div>

        <ol ref={ref} className="grid gap-3 md:grid-cols-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative surface p-5 md:min-h-[230px] transition-colors duration-300 hover:border-gold-400/20">
                {/* Connector */}
                {index < STEPS.length - 1 && (
                  <div className="absolute -right-1.5 top-10 z-10 hidden h-px w-3 bg-gold-400/25 md:block" />
                )}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/15 text-gold-200">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-base font-semibold leading-6 text-parchment-50 md:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-blue-100/60">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
