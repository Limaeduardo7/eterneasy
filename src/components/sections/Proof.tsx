import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const POINTS = [
  { title: "Entrada sem barreira", desc: "Começa no Flex, sem assumir custo fixo antes de validar volume." },
  { title: "Crescimento sem travas", desc: "A estrutura acompanha o aumento de vendas sem refazer seu processo comercial." },
  { title: "Receita proporcional ao volume", desc: "Quanto mais você vende, mais margem consegue capturar na operação." },
  { title: "Gargalos mais visíveis", desc: "O que era manual ganha padrão. O que era perdido passa a ser medido." },
  { title: "Migração natural", desc: "Troca de plano quando fizer sentido, sem atrito e sem custo de transição." },
];

export function Proof() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <span className="eyebrow">Por que funciona</span>
            <BlurText
              text="Estrutura antes da escala."
              animateBy="words"
              direction="bottom"
              delay={70}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-7 max-w-md text-lg leading-8 text-slate-blue-100/72">
              O modelo reduz risco no início e cria base operacional para capturar mais margem quando o volume cresce.
            </p>
          </div>

          <ol ref={ref} className="md:col-span-7">
            {POINTS.map((point, index) => (
              <li key={point.title} className="grid gap-5 border-t border-white/10 py-6 first:border-t-0 md:grid-cols-[72px_1fr] md:py-8">
                <span className="font-display text-3xl font-bold text-gold-300/84">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-parchment-50">{point.title}</h3>
                  <p className="mt-2 text-base leading-8 text-slate-blue-100/68">{point.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
