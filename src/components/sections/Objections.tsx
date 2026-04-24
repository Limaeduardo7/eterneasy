import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const OBJECTIONS = [
  {
    q: "O que eu vendo exatamente?",
    a: "Uma experiência que o cliente não esquece: convidados participam ao vivo pelo QR Code, as fotos e mensagens aparecem no telão em segundos e o cliente recebe um vídeo depois. É fácil de mostrar e fácil de comprar.",
  },
  {
    q: "O cliente precisa instalar algo?",
    a: "Nada. O convidado escaneia o QR Code, abre pelo navegador do celular, envia a foto com mensagem — e aparece no telão em segundos. O cliente não precisa fazer nada técnico.",
  },
  {
    q: "Preciso ser fotógrafo?",
    a: "Não. Você não tira nenhuma foto. Você vende o serviço, cria o evento e coloca o QR Code disponível. Os próprios convidados fazem o resto — e a Eterneasy entrega o vídeo no final.",
  },
  {
    q: "Por que o cliente pagaria por isso?",
    a: "Porque é algo que ninguém mais oferece no mercado local. O cliente vê os convidados enviando fotos no telão em tempo real, leva um vídeo com as mensagens de todos — e não tem preço pra esse tipo de lembrança.",
  },
  {
    q: "E se eu vender pouco no começo?",
    a: "Zero problema. No Flex você só paga R$150 quando vender. Pode fechar um único evento no mês e já tem margem. Não existe custo fixo para travar você nos primeiros meses.",
  },
  {
    q: "Quando vale migrar para o Premium?",
    a: "A conta é simples: se você fecha 4 ou mais eventos por mês, o Premium (R$500 fixo) já é mais barato que o Flex (4 × R$150 = R$600). E cada evento extra entra direto na margem, sem custo adicional.",
  },
];

export function Objections() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-card]" });

  return (
    <section id="objecoes" className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(201,151,43,0.06)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">O que seus clientes vão perguntar — e como responder</span>
          <BlurText
            text="Cada dúvida tem uma resposta que fecha a venda."
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
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400/70 group-hover:bg-gold-300 transition-colors" />
                <h3 className="font-display text-lg font-semibold text-parchment-50">{item.q}</h3>
              </div>
              <p className="pl-5 text-sm leading-7 text-slate-blue-100/65">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
