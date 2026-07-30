import { problems } from "@/lib/content";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function Problem() {
  return (
    <section id="diagnostico" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow">{problems.eyebrow}</p>
            </Reveal>
            <h2 className="h-display mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)]">
              <RevealWords text={problems.title} />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-fog">{problems.lead}</p>
            </Reveal>
          </div>

          <ul className="border-t border-paper/[0.24]">
            {problems.items.map((it, i) => (
              <Reveal key={it.n} delay={i * 0.07}>
                <li className="group grid grid-cols-[auto_1fr] gap-8 border-b border-paper/[0.22] py-11 transition-colors hover:border-brand-400/70">
                  <span className="font-display text-lg font-bold leading-tight text-brand-300 transition-colors group-hover:text-brand-200">
                    {it.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-paper md:text-[1.65rem]">
                      {it.title}
                    </h3>
                    <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-fog/95">{it.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
