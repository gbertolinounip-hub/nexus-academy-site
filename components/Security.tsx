import { differentials, faq } from "@/lib/content";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function Security() {
  return (
    <section id="diferenciais" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{differentials.eyebrow}</p>
          </Reveal>
          <h2 className="h-display mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)]">
            <RevealWords text={differentials.title} />
          </h2>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {differentials.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.07}>
              <div className="border-t border-paper/[0.09] pt-6">
                <h3 className="font-display text-[17px] tracking-tight text-paper">{it.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-fog">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="faq" className="mt-20 grid scroll-mt-28 gap-12 lg:grid-cols-[0.6fr_1fr]">
          <Reveal>
            <h2 className="h-display text-[clamp(1.9rem,3.6vw,2.7rem)]">Perguntas frequentes</h2>
          </Reveal>
          <div>
            {faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group border-b border-paper/[0.09] py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg tracking-tight text-paper marker:hidden">
                    {f.q}
                    <span className="relative mt-2 h-3 w-3 shrink-0">
                      <span className="absolute left-0 top-1/2 h-px w-3 bg-brand-400" />
                      <span className="absolute left-1/2 top-0 h-3 w-px bg-brand-400 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-fog">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
