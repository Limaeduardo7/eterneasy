import { ArrowRight } from "lucide-react";
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
    <section id="objecoes" className="section-band bg-white">
      <div className="section-divider absolute left-0 top-0" />

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
            <div
              key={item.q}
              data-card
              className="group rounded-xl border border-navy-950/8 bg-white p-6 shadow-[0_2px_16px_-4px_rgba(6,16,24,0.06)] transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_32px_-8px_rgba(6,16,24,0.1)]"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400/60 group-hover:bg-gold-500 transition-colors" />
                <h3 className="font-display text-lg font-semibold text-navy-950">{item.q}</h3>
              </div>
              <p className="pl-5 text-sm leading-7 text-navy-700">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-[0_12px_34px_-18px_rgba(242,215,122,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Cadastrar grátis agora
            <ArrowRight className="h-4 w-4" />
          </a>
          <span className="text-sm text-navy-700">Sem mensalidade obrigatória · Ativação imediata</span>
        </div>
      </div>
    </section>
  );
}
