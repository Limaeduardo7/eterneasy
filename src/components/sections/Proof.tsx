import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const POINTS = [
  {
    title: "Você começa sem arriscar nada",
    desc: "No Flex, o custo só existe quando você vende. Sem mensalidade, sem contrato, sem risco no primeiro mês — ou no décimo.",
  },
  {
    title: "O cliente entende na primeira demonstração",
    desc: "Você não precisa explicar com slides. Você mostra: ele escaneia, a foto aparece no telão, o vídeo chega depois. A venda acontece na demo.",
  },
  {
    title: "Você não compete mais só no preço",
    desc: "Quando você tem um serviço que ninguém mais oferece localmente, a conversa deixa de ser sobre desconto e passa a ser sobre disponibilidade.",
  },
  {
    title: "A operação não depende de você estar lá",
    desc: "O QR Code, o slideshow e o vídeo rodam sem intervenção manual. Você configura antes e entrega depois — o evento acontece no meio sem sua operação.",
  },
  {
    title: "Cada evento vira uma indicação",
    desc: "Convidados que participaram no telão comentam, compartilham e perguntam sobre o serviço. O próximo cliente muitas vezes já estava no evento anterior.",
  },
];

export function Proof() {
  const ref = useRevealOnScroll<HTMLOListElement>({ selector: "li" });

  return (
    <section className="section-band bg-navy-950">
      <div className="section-divider absolute left-0 top-0" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,rgba(201,151,43,0.06)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <span className="eyebrow">Por que funciona na prática</span>
            <BlurText
              text="Cinco razões para começar agora."
              animateBy="words"
              direction="bottom"
              delay={70}
              className="headline-display mt-5 text-3xl md:text-5xl"
            />
            <p className="mt-6 text-base leading-8 text-slate-blue-100/65">
              Não é teoria. É o que acontece nos primeiros eventos de quem começa com a Eterneasy.
            </p>
          </div>

          <ol ref={ref} className="md:col-span-8">
            {POINTS.map((point, index) => (
              <li
                key={point.title}
                className={`relative py-8 pl-6 ${index !== 0 ? "border-t border-white/8" : ""}`}
              >
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
