import { Gift, MessageSquareHeart, MonitorPlay, QrCode, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const FLOW = [
  {
    icon: QrCode,
    title: "Você cria o evento com QR Code",
    desc: "Gera o QR Code exclusivo do evento. O convidado escaneia e já pode participar — sem app, sem cadastro.",
  },
  {
    icon: MessageSquareHeart,
    title: "Convidados enviam foto + mensagem",
    desc: "Pelo celular, cada convidado envia uma foto e escreve uma mensagem especial para o aniversariante, noivos ou homenageado.",
  },
  {
    icon: MonitorPlay,
    title: "Aparece no telão em tempo real",
    desc: "Foto e mensagem entram direto no slideshow exibido na TV, telão ou projetor — todo mundo vê na hora.",
  },
  {
    icon: Video,
    title: "Tudo vira um vídeo emocionante",
    desc: "Depois do evento, transformamos todas as fotos e mensagens em um vídeo personalizado para o cliente guardar.",
  },
  {
    icon: Gift,
    title: "Você entrega a lembrança completa",
    desc: "Além do vídeo, o cliente pode receber álbum físico, quadros personalizados ou porta retrato digital.",
  },
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
              text="Participação ao vivo. Lembrança entregue depois."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-slate-blue-100/72">
              Você não vende "um sistema". Vende a experiência de ver fotos e mensagens dos convidados no telão — e uma lembrança em vídeo que o cliente guarda para sempre.
            </p>
          </div>

          <div ref={ref} className="grid gap-3 md:col-span-7">
            {FLOW.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} data-card className="surface grid gap-4 p-5 sm:grid-cols-[48px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/15 text-gold-200">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-parchment-50">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-blue-100/65">{item.desc}</p>
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
