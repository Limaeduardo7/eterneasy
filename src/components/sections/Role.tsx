import { CheckCircle2 } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const YOU = ["Fecha o evento", "Registra no sistema", "Ativa o fluxo"];
const US = ["Organiza", "Processa", "Garante execução"];

export function Role() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-col]" });

  return (
    <section className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Papel</span>
          <BlurText
            text="Você vende. A estrutura executa."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-2">
          <div data-col className="surface p-7 md:p-8">
            <span className="text-sm font-extrabold uppercase text-slate-blue-100/72">Você</span>
            <ul className="mt-7 space-y-4">
              {YOU.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xl font-semibold text-parchment-50">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-parchment-300/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-col className="surface border-gold-400/30 bg-gold-400/[0.07] p-7 md:p-8">
            <span className="text-sm font-extrabold uppercase text-gold-200">Eterneasy</span>
            <ul className="mt-7 space-y-4">
              {US.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xl font-semibold text-parchment-50">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-blue-100/74">
          Seu foco continua no relacionamento e na venda. O restante ganha processo, cadência e responsabilidade.
        </p>
      </div>
    </section>
  );
}
