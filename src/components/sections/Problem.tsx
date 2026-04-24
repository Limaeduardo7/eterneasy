import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const ITEMS = [
  { title: "Eventos vendidos sem padrão",         desc: "Cada venda segue um fluxo diferente. O caos se acumula." },
  { title: "Processos manuais e desorganizados",  desc: "Planilhas, mensagens soltas, retrabalho invisível." },
  { title: "Falta de previsibilidade",            desc: "Você não sabe quanto entra no fim do mês." },
  { title: "Perda de margem sem perceber",        desc: "Dinheiro escapa em gargalos que você sequer enxerga." },
];

export function Problem() {
  const ref = useRevealOnScroll<HTMLUListElement>({ selector: "li" });

  return (
    <section id="problema" className="relative py-24 md:py-36 bg-navy-900">
      <div className="section-divider absolute top-0 left-0 w-full" />

      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left */}
          <div className="md:col-span-5">
            <span className="eyebrow">Diagnóstico</span>
            <BlurText
              text="O problema não está na venda. Está na estrutura."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-4xl lg:text-5xl"
            />
            <p className="mt-7 text-lg font-display italic text-gold-300/90 md:mt-10">
              "Você já gera receita. Só não está capturando tudo."
            </p>
          </div>

          {/* Right — cards */}
          <ul ref={ref} className="md:col-span-7 space-y-3">
            {ITEMS.map((item) => (
              <li
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-navy-800/40 hover:border-gold-400/30 hover:bg-navy-800/70 transition-all duration-400 cursor-default"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400/0 via-gold-400/60 to-gold-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 md:p-7">
                  <h3 className="text-lg md:text-xl font-semibold text-parchment-100 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-blue-100/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
