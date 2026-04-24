import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BlurText } from "@/components/bits/BlurText";

const YOU = [
  { label: "Fecha o evento" },
  { label: "Registra no sistema" },
  { label: "Ativa o fluxo" },
];

const US = [
  { label: "Organiza" },
  { label: "Processa" },
  { label: "Garante execução" },
];

export function Role() {
  const ref = useRevealOnScroll<HTMLDivElement>({ selector: "[data-col]" });

  return (
    <section className="relative py-24 md:py-36 bg-navy-900">
      <div className="section-divider absolute top-0 left-0 w-full" />

      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Papel</span>
          <BlurText
            text="Você não vira operador. Continua vendedor."
            animateBy="words"
            direction="bottom"
            delay={60}
            className="headline-display mt-5 text-3xl md:text-5xl"
          />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div
            data-col
            className="rounded-2xl border border-white/10 bg-navy-800/50 p-8 md:p-10"
          >
            <span className="eyebrow mb-8 block">Você</span>
            <ul className="space-y-5">
              {YOU.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-parchment-300/40 shrink-0" />
                  <span className="text-xl md:text-2xl text-parchment-50 font-light">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-col
            className="rounded-2xl border border-gold-400/20 bg-gradient-to-br from-gold-400/[0.05] via-navy-800/80 to-navy-800/80 p-8 md:p-10"
          >
            <span className="eyebrow mb-8 block">Eterneasy</span>
            <ul className="space-y-5">
              {US.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60 shrink-0" />
                  <span className="text-xl md:text-2xl text-parchment-50 font-light">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center font-display italic text-2xl md:text-3xl text-parchment-100">
          Você foca em vender. O resto roda.
        </p>
      </div>
    </section>
  );
}
