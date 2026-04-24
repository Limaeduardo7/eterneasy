import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const POINTS = [
  { title: "Entrada sem barreira",               desc: "Começa no Flex, sem assumir custo fixo. Zero risco." },
  { title: "Crescimento sem travas",             desc: "A estrutura acompanha seu volume sem refazer processo." },
  { title: "Receita proporcional ao volume",     desc: "Quanto mais você vende, mais margem você captura." },
  { title: "Estrutura elimina gargalos",         desc: "O que era manual vira automático. O que era perdido é recuperado." },
  { title: "Migração natural conforme evolução", desc: "Troca de plano quando fizer sentido — sem atrito, sem custo de transição." },
];

export function Proof() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="relative py-24 md:py-36 bg-navy-800">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <span className="eyebrow">Por que funciona</span>
            <BlurText
              text="Por que esse modelo funciona"
              animateBy="words"
              direction="bottom"
              delay={70}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-8 font-display italic text-xl text-gold-300/90 leading-snug">
              "Você não precisa escalar primeiro para estruturar.
              <br />
              Você estrutura para escalar."
            </p>
          </div>

          <ol ref={ref} className="md:col-span-7 space-y-0">
            {POINTS.map((p, i) => (
              <li
                key={p.title}
                className={`py-8 ${i !== 0 ? "border-t border-white/8" : ""}`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-parchment-50 mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-blue-100/65 leading-relaxed">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
