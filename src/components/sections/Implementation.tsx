import { ClipboardCheck, MonitorPlay, PlayCircle, QrCode } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const STEPS = [
  { icon: QrCode,         title: "Configure o evento",     desc: "Crie o fluxo com nome do evento e forma de acesso para envio de fotos." },
  { icon: MonitorPlay,    title: "Teste a exibição",       desc: "Veja como o slideshow aparece no monitor antes de usar com clientes." },
  { icon: PlayCircle,     title: "Rode o primeiro evento", desc: "Acompanhe os convidados enviando fotos e o slideshow rodando ao vivo." },
  { icon: ClipboardCheck, title: "Entregue o vídeo",       desc: "Depois do evento, os slides viram vídeo e você fecha a entrega." },
];

export function Implementation() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      {/* Right-side glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_100%_50%,rgba(201,151,43,0.06)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Você testa antes de vender qualquer coisa</span>
            <BlurText
              text="Veja o QR Code, o telão e o vídeo antes de oferecer ao cliente."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-blue-100/60">
            Você passa pelo fluxo completo como se fosse um convidado — e só depois decide se quer vender.
          </p>
        </div>

        <ol ref={ref} className="grid gap-4 md:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-gold-400/20 hover:bg-white/[0.065]">
                {/* Step connector line (desktop) */}
                {index < STEPS.length - 1 && (
                  <div className="absolute -right-2 top-10 hidden h-px w-4 bg-gold-400/20 md:block" />
                )}

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-300">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <h3 className="font-display text-base font-semibold text-parchment-50 md:text-lg">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-blue-100/58">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
