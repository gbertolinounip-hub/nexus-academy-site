"use client";

import { useEffect, useRef, useState } from "react";
import { flow } from "@/lib/content";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function Flow() {
  const [active, setActive] = useState(0);
  const section = useRef<HTMLElement>(null);

  // o passo ativo acompanha a posição do scroll dentro da seção
  useEffect(() => {
    const onScroll = () => {
      const el = section.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / total));
      setActive(Math.min(flow.steps.length - 1, Math.floor(p * flow.steps.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={section}
      id="ciclo"
      className="relative border-b border-paper/[0.06] lg:h-[230vh]"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <div className="shell w-full py-20 lg:py-0">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow">{flow.eyebrow}</p>
              </Reveal>
              <h2 className="h-display mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)]">
                <RevealWords text={flow.title} />
              </h2>
              <Reveal delay={0.1}>
                <div className="mt-10 hidden items-center gap-3 lg:flex">
                  {flow.steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-[3px] rounded-full transition-all duration-500 ${
                        i === active ? "w-12 bg-brand-400" : "w-6 bg-paper/12"
                      }`}
                    />
                  ))}
                </div>
              </Reveal>
            </div>

            <ol className="relative space-y-2">
              <span className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-paper/[0.08] lg:block" />
              {flow.steps.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.k}>
                    <div
                      className={`relative flex gap-6 rounded-2xl border p-6 transition-all duration-500 ${
                        on
                          ? "border-brand-400/40 bg-brand-500/[0.07]"
                          : "border-transparent bg-transparent lg:opacity-45"
                      }`}
                    >
                      <span
                        className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border font-display text-sm transition-all duration-500 ${
                          on
                            ? "border-brand-400 bg-ink text-brand-300 shadow-[0_0_34px_-6px_rgba(74,159,224,0.85)]"
                            : "border-paper/12 bg-ink text-fog"
                        }`}
                      >
                        {s.k}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-tight text-paper">{s.title}</h3>
                        <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-fog">{s.body}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
