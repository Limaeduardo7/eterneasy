import { Gift, MessageSquareHeart, MonitorPlay, QrCode, Video } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const FLOW = [
  {
    icon: QrCode,
    title: "Você cria o evento com QR Code",
    desc: "Em minutos você configura o evento e gera o QR Code exclusivo. O convidado escaneia — sem app, sem cadastro, sem fricção.",
  },
  {
    icon: MessageSquareHeart,
    title: "Convidados enviam foto + mensagem",
    desc: "Cada pessoa envia uma foto e escreve uma mensagem para o homenageado direto pelo celular. É simples o suficiente para qualquer convidado usar.",
  },
  {
    icon: MonitorPlay,
    title: "Tudo aparece no telão em tempo real",
    desc: "Foto e mensagem entram no slideshow e aparecem na TV, telão ou projetor em segundos. O evento inteiro vê — e todos querem participar.",
  },
  {
    icon: Video,
    title: "As memórias viram um vídeo emocionante",
    desc: "Depois do evento, transformamos tudo em um vídeo personalizado. O cliente recebe algo que vai guardar — e que nenhum concorrente seu entregava até hoje.",
  },
  {
    icon: Gift,
    title: "Você entrega e fecha com chave de ouro",
    desc: "Além do vídeo, você pode oferecer álbum físico, quadros e porta retrato digital. Cada produto adicional é mais margem no mesmo evento.",
  },
];

export function ClientPitch() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="o-que-e" className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">A experiência que você passa a vender</span>
            <BlurText
              text="Participação ao vivo. Lembrança que o cliente guarda para sempre."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-navy-700">
              Não é "mais um sistema". É um serviço que o cliente vai pagar, indicar e lembrar — porque ele nunca teve isso em um evento antes.
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
                    Sem app para o convidado
                  </span>
                </div>
              </div>
              <p className="border-t border-navy-950/8 p-4 text-sm leading-6 text-navy-700">
                A cena que você vende é simples: o convidado pega o celular, participa em segundos e vê sua memória entrar no evento.
              </p>
            </div>
          </div>

          <div ref={ref} className="grid gap-3 md:col-span-7">
            {FLOW.map((item) => {
              const Icon = item.icon;
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
          </div>
        </div>
      </div>
    </section>
  );
}
