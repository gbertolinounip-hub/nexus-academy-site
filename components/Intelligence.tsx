import { intelligence } from "@/lib/content";
import ProductMatrix from "./ProductMatrix";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function Intelligence() {
  return (
    <section id="inteligencia" className="relative overflow-hidden border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{intelligence.eyebrow}</p>
          </Reveal>
          <h2 className="h-display mt-6 max-w-[18ch] text-[clamp(2.1rem,4.8vw,3.8rem)]">
            <RevealWords text={intelligence.title} />
          </h2>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[58ch] text-[15px] leading-relaxed text-fog">{intelligence.lead}</p>
          </Reveal>
        </div>

        {/* tela real: matriz de desempenho com as seis leituras */}
        <Reveal delay={0.1}>
          <div className="mt-14">
            <ProductMatrix />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Reveal>
            <div>
              {/* rótulo de seção com peso, não sussurro */}
              <p className="flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.18em] text-brand-300">
                <span className="h-0.5 w-6 rounded-full bg-brand-400" />
                O que a análise revela
              </p>
              <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {intelligence.reveals.map((r) => (
                  <li key={r} className="flex gap-3 text-[15px] leading-snug text-paper/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {intelligence.frameworks.map((f, i) => (
              <Reveal key={f.k} delay={(i % 2) * 0.07}>
                <div className="card card-hover h-full p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-paper">{f.k}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-8 border-t border-paper/[0.08] pt-10 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap gap-3">
              {intelligence.outputs.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-paper/15 px-4 py-2.5 text-[13px] font-medium text-paper/90"
                >
                  {o}
                </li>
              ))}
            </ul>
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-paper/90">{intelligence.closing}</p>
          </div>
        </Reveal>

        {/* as três janelas em que a leitura entra na rotina do curso */}
        <div className="mt-16">
          <Reveal>
            <h3 className="h-display text-[clamp(1.5rem,2.6vw,2rem)]">{intelligence.windows.title}</h3>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {intelligence.windows.items.map((w, i) => (
              <Reveal key={w.when} delay={i * 0.08}>
                <div className="card card-hover h-full p-7">
                  <span className="flex items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-300">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500/25 font-display text-[11px] text-brand-300">
                      {i + 1}
                    </span>
                    {w.when}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-fog">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
