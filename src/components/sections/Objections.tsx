import { CheckCircle2 } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const OBJECTIONS = [
  { q: "Vou perder o controle do cliente?", a: "Não. O parceiro continua vendendo e mantendo o relacionamento. A Eterneasy entra para estruturar o fluxo após a venda." },
  { q: "Preciso mudar meu processo comercial?", a: "Não no início. A proposta é registrar melhor o que já é vendido e padronizar a passagem para operação." },
  { q: "E se eu vender pouco?", a: "O modelo Flex existe justamente para evitar mensalidade antes de haver volume. Você paga pelo que vender." },
  { q: "E se o volume crescer?", a: "O Premium troca cobrança por cliente por mensalidade, criando previsibilidade e protegendo margem em escala." },
  { q: "Isso aumenta minha carga operacional?", a: "A intenção é o oposto: reduzir dependência de mensagens soltas, planilhas e conferências manuais." },
  { q: "Como sei qual plano escolher?", a: "Na demonstração, avaliamos frequência de vendas, ticket, rotina operacional e capacidade atual para indicar o melhor ponto de entrada." },
];

export function Objections() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="objecoes" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Objeções respondidas</span>
          <BlurText
            text="O que o parceiro precisa entender antes de avançar."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-3 md:grid-cols-2">
          {OBJECTIONS.map((item) => (
            <div key={item.q} data-card className="surface p-6">
              <div className="mb-4 flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold-300" />
                <h3 className="font-display text-xl font-semibold text-parchment-50">{item.q}</h3>
              </div>
              <p className="text-sm leading-7 text-slate-blue-100/68">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
