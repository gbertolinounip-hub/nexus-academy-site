import { flow } from "@/lib/content";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function Flow() {
  return (
    <section id="ciclo" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">{flow.eyebrow}</p>
            </Reveal>
            <h2 className="h-display mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)]">
              <RevealWords text={flow.title} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-fog">
                A avaliação ganha uma trilha clara: cadastro, blueprint, respostas, processamento,
                análise e ação pedagógica ficam no mesmo fluxo.
              </p>
            </Reveal>
          </div>

          <ol className="relative space-y-5">
            <span className="absolute left-[27px] top-8 hidden h-[calc(100%-4rem)] w-px bg-paper/[0.08] lg:block" />
            {flow.steps.map((s, i) => (
              <Reveal key={s.k} delay={(i % 3) * 0.06}>
                <li>
                  <div className="relative flex gap-6 rounded-2xl border border-paper/[0.08] bg-paper/[0.02] p-6 transition-colors duration-300 hover:border-brand-400/30 hover:bg-brand-500/[0.05]">
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand-400/30 bg-ink font-display text-sm text-brand-300">
                      {s.k}
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-tight text-paper">{s.title}</h3>
                      <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-fog">{s.body}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
