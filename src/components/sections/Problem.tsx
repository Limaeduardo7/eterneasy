import { AlertTriangle, CircleDollarSign, ClipboardList, TrendingDown } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const ITEMS = [
  { icon: ClipboardList, title: "Vendas sem padrão", desc: "Cada evento nasce com um fluxo diferente e a operação passa a depender de memória, mensagens e improviso." },
  { icon: AlertTriangle, title: "Processos manuais", desc: "Planilhas, repasses soltos e tarefas sem dono criam retrabalho invisível antes da entrega." },
  { icon: TrendingDown, title: "Baixa previsibilidade", desc: "Sem uma esteira clara, fica difícil antecipar gargalos, margem real e capacidade de atendimento." },
  { icon: CircleDollarSign, title: "Margem escapando", desc: "O dinheiro se perde em pequenas falhas de processo que parecem rotina, mas corroem o resultado." },
];

export function Problem() {
  const ref = useRevealOnScroll<HTMLUListElement>({ selector: "li" });

  return (
    <section id="problema" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">Diagnóstico</span>
            <BlurText
              text="O problema não está na venda. Está na estrutura."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-7 max-w-md text-lg leading-8 text-slate-blue-100/78">
              Você já gera demanda. O próximo salto vem de transformar cada venda em uma operação previsível.
            </p>
          </div>

          <ul ref={ref} className="grid gap-3 md:col-span-7 sm:grid-cols-2">
            {ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30 hover:bg-white/[0.065]">
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/10 text-gold-200">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-parchment-50">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-blue-100/66">{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
