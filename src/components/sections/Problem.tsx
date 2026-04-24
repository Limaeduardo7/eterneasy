import { AlertTriangle, Camera, MonitorX, VideoOff } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const ITEMS = [
  { icon: Camera,        title: "Fotos ficam perdidas",        desc: "Convidados registram tudo pelo celular, mas o material fica espalhado em grupos e galerias pessoais." },
  { icon: MonitorX,      title: "Sem interação visual",        desc: "As fotos não chegam ao telão. O evento perde uma atração simples de implementar." },
  { icon: VideoOff,      title: "Pós-evento sem entrega",      desc: "Quando acaba a festa, o cliente não recebe nada. A experiência some junto com o evento." },
  { icon: AlertTriangle, title: "Difícil de vender sem mostrar", desc: "Sem uma demonstração clara, fica difícil explicar o valor e fechar a venda." },
];

export function Problem() {
  const ref = useRevealOnScroll<HTMLUListElement>({ selector: "li" });

  return (
    <section id="problema" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">Problema</span>
            <BlurText
              text="Todo mundo tira foto. Poucos eventos fazem algo com isso."
              animateBy="words"
              direction="bottom"
              delay={60}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-slate-blue-100/72">
              A oportunidade está em pegar essas fotos e transformar em participação ao vivo e lembrança entregue depois.
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
