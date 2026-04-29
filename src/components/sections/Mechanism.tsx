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
    <section id="mecanismo" className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

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
          <p className="mt-6 text-base leading-8 text-navy-700">
            Você vende. A Eterneasy cuida do QR Code, do slideshow no telão e da entrega final.
          </p>
        </div>

        {/* Featured insight card */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-gold-400/25 bg-gold-400/[0.04] shadow-[0_8px_40px_-16px_rgba(201,151,43,0.2)]">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] md:items-stretch">
            <div className="flex flex-col justify-center p-6 md:p-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold-500/80">Momento de virada</span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-navy-950 md:text-3xl">
                Quando a foto aparece no telão, todo mundo entende o valor.
              </h3>
              <p className="mt-4 text-sm leading-7 text-navy-700">
                A demonstração fica visual: o cliente não compra uma promessa, ele enxerga a participação acontecendo ao vivo.
              </p>
            </div>

            <div className="relative min-h-[280px] border-t border-navy-950/8 md:border-l md:border-t-0">
              <img
                src="/live-slideshow-ai.webp"
                alt="Convidados olhando para fotos aparecendo em um telão durante o evento"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-90 saturate-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/20" />
            </div>
          </div>
        </div>

        <ol ref={ref} className="grid gap-3 md:grid-cols-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative surface p-5 md:min-h-[230px] transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_32px_-8px_rgba(6,16,24,0.1)]">
                {index < STEPS.length - 1 && (
                  <div className="absolute -right-1.5 top-10 z-10 hidden h-px w-3 bg-gold-400/30 md:block" />
                )}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-500">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-base font-semibold leading-6 text-navy-950 md:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-700">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
