import { CheckCircle2 } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const YOU     = ["Vende ao cliente", "Configura o evento", "Orienta no dia"];
const ETERNAL = ["Recebe as fotos", "Exibe no slideshow", "Gera o vídeo final"];
const CLIENT  = ["Convida os convidados", "Assiste ao monitor", "Recebe a lembrança"];

export function Role() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-col]" });

  return (
    <section className="section-band bg-navy-900">
      <div className="section-divider absolute left-0 top-0" />

      {/* Center radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,151,43,0.07)_0%,transparent_70%)]" />

      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Quem faz o quê — e quem lucra</span>
          <BlurText
            text="Você vende. A Eterneasy opera. O cliente fica encantado."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          <RoleColumn title="Você"          items={YOU}     tone="neutral" />
          <RoleColumn title="Eterneasy"     items={ETERNAL} tone="gold" />
          <RoleColumn title="Cliente final" items={CLIENT}  tone="neutral" />
        </div>

        <p className="mt-10 text-base leading-8 text-slate-blue-100/62">
          Você fecha o contrato e orienta no dia. Tudo que envolve tecnologia, operação e entrega é com a Eterneasy.
        </p>
      </div>
    </section>
  );
}

function RoleColumn({ title, items, tone }: { title: string; items: string[]; tone: "neutral" | "gold" }) {
  return (
    <div
      data-col
      className={
        tone === "gold"
          ? "surface-featured p-7"
          : "surface p-7"
      }
    >
      <span className={
        tone === "gold"
          ? "text-xs font-extrabold uppercase tracking-widest text-gold-300"
          : "text-xs font-extrabold uppercase tracking-widest text-slate-blue-100/55"
      }>
        {title}
      </span>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-base font-semibold text-parchment-50 md:text-lg">
            <CheckCircle2 className={
              tone === "gold"
                ? "h-5 w-5 shrink-0 text-gold-300"
                : "h-5 w-5 shrink-0 text-parchment-300/55"
            } />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
