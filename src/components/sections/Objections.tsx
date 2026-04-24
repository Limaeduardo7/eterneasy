import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const OBJECTIONS = [
  { q: "O que eu vendo exatamente?",       a: "Fotos ao vivo no evento: convidados enviam pelo celular, aparecem no monitor em slides e depois viram um vídeo que o cliente guarda." },
  { q: "O cliente precisa instalar algo?", a: "Não. O convidado acessa pelo celular, sem app. O cliente não precisa fazer nada técnico." },
  { q: "Preciso ser fotógrafo?",           a: "Não. Você vende e configura. A Eterneasy cuida do envio, do slideshow e do vídeo." },
  { q: "Por que o cliente compraria?",     a: "Porque aumenta a participação durante o evento e ainda gera uma lembrança em vídeo para guardar." },
  { q: "E se eu vender pouco?",            a: "No Flex você não tem mensalidade — paga R$150 por cliente. Zero custo fixo." },
  { q: "Quando vale o Premium?",           a: "Quando o volume recorrente tornar mais barato pagar R$500/mês do que R$150 por cliente." },
];

export function Objections() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="objecoes" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      {/* Left glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(201,151,43,0.06)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Perguntas frequentes</span>
          <BlurText
            text="Saiba responder qualquer pergunta do cliente."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-3 md:grid-cols-2">
          {OBJECTIONS.map((item) => (
            <div key={item.q} data-card className="group rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-gold-400/20 hover:bg-white/[0.07]">
              <div className="mb-4 flex items-start gap-3">
                {/* Gold dot accent */}
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400/70 group-hover:bg-gold-300 transition-colors" />
                <h3 className="font-display text-lg font-semibold text-parchment-50">{item.q}</h3>
              </div>
              <p className="pl-5 text-sm leading-7 text-slate-blue-100/62">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
