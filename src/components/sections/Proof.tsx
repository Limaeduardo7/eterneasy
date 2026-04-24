import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const POINTS = [
  { title: "Entrada sem risco",                desc: "Você começa no Flex, sem mensalidade, pagando só pelo que vender." },
  { title: "Cresce sem travar",                desc: "A estrutura acompanha seu volume. Você não refaz o processo." },
  { title: "Margem proporcional ao volume",    desc: "Quanto mais você vende, mais margem captura — especialmente no Premium." },
  { title: "Operação que não depende de você", desc: "O envio, o slideshow e o vídeo rodam sem você precisar operar manualmente." },
  { title: "Migração sem atrito",              desc: "Quando o volume justificar, você migra para o Premium sem custo de transição." },
];

export function Proof() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      {/* Subtle side glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,rgba(201,151,43,0.06)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <span className="eyebrow">Por que funciona</span>
            <BlurText
              text="Estrutura antes da escala."
              animateBy="words"
              direction="bottom"
              delay={70}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-base leading-8 text-slate-blue-100/65">
              Você não precisa ter volume para começar. Você começa para ter volume.
            </p>
          </div>

          <ol ref={ref} className="md:col-span-8">
            {POINTS.map((point, index) => (
              <li
                key={point.title}
                className={`relative py-8 pl-6 ${index !== 0 ? "border-t border-white/8" : ""}`}
              >
                {/* Gold left accent */}
                <div className="absolute left-0 top-8 h-8 w-[3px] rounded-full bg-gradient-to-b from-gold-400/70 to-gold-400/10" />

                <h3 className="font-display text-xl font-semibold text-parchment-50 md:text-2xl">{point.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-blue-100/62">{point.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
