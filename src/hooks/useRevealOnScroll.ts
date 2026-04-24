import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useRevealOnScroll<T extends HTMLElement>(options?: {
  delay?: number;
  y?: number;
  selector?: string;
}) {
  const ref = useRef<T | null>(null);
  const { delay = 0, y = 32, selector } = options ?? {};

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = selector
      ? (Array.from(node.querySelectorAll(selector)) as HTMLElement[])
      : [node];

    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.08,
              delay,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, y, selector]);

  return ref;
}
