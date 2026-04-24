import { AlertTriangle, DollarSign, TrendingDown, Users } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const ITEMS = [
  {
    icon: TrendingDown,
    title: "Sem diferencial, você compete no preço",
    desc: "Se o que você oferece é igual ao concorrente, a única conversa é sobre desconto. Um serviço exclusivo muda essa dinâmica.",
  },
  {
    icon: Users,
    title: "O cliente quer mais — e ainda não sabe o que",
    desc: "Eventos com participação ativa dos convidados geram mais engajamento e mais indicações. Mas poucos fornecedores entregam isso.",
  },
  {
    icon: DollarSign,
    title: "Receita parada nos eventos que você já faz",
    desc: "Você já tem a relação com o cliente e o acesso ao evento. Faltava apenas um serviço para monetizar isso sem aumentar equipe.",
  },
  {
    icon: AlertTriangle,
    title: "Seu concorrente vai chegar lá antes",
    desc: "Quem apresentar isso primeiro ao mercado local fica com a posição. A janela de vantagem existe agora — mas não vai durar para sempre.",
  },
];

export function Problem() {
  const ref = useRevealOnScroll<HTMLUListElement>({ selector: "li" });

  return (
    <section id="problema" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">A oportunidade que seu concorrente ainda não viu</span>
            <BlurText
              text="Você já está nos eventos. Só faltava o serviço certo."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-slate-blue-100/72">
              Quem chegar primeiro com participação ao vivo e lembranças exclusivas vai dominar esse nicho localmente.
            </p>
          </div>

          <ul ref={ref} className="grid gap-3 md:col-span-7 sm:grid-cols-2">
            {ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/10 text-gold-200">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-parchment-50">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-slate-blue-100/66">{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
