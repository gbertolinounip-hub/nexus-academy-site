import Image from "next/image";
import { exams, nexusIA } from "@/lib/content";
import Synthesis from "./Synthesis";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function NexusIA() {
  return (
    <section id="nexus-ia" className="relative overflow-hidden border-b border-paper/[0.06] py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[1100px] max-w-[130vw] -translate-x-1/2 opacity-[0.18] blur-[110px]"
        style={{ background: "var(--ia-gradient)" }}
      />

      <div className="shell relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1fr]">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/nexus-ia-loop.png"
                  alt=""
                  width={156}
                  height={128}
                  className="h-9 w-auto object-contain"
                />
                <span className="font-display text-2xl font-semibold tracking-tight text-paper">
                  Nexus<span className="text-gradient-ia">IA</span>
                </span>
              </div>
            </Reveal>

            <h2 className="h-display mt-8 max-w-[16ch] text-[clamp(2.1rem,4.6vw,3.5rem)]">
              <RevealWords text="Inteligência artificial aplicada à" />{" "}
              <span className="text-gradient-ia animate-shimmer">
                <RevealWords text="gestão pedagógica." delay={0.15} />
              </span>
            </h2>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-[50ch] text-[15px] leading-relaxed text-fog">{nexusIA.lead}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-xl border border-paper/10 bg-paper/[0.03] p-5">
                <p className="flex gap-3 text-[13px] leading-relaxed text-paper/80">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="mt-0.5 shrink-0" aria-hidden>
                    <path
                      d="M8.5 1.5 14.5 4v4.4c0 3.5-2.4 6-6 7.1-3.6-1.1-6-3.6-6-7.1V4l6-2.5Z"
                      stroke="#2BB6A3"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m6 8.4 1.9 1.9L11.4 6.8"
                      stroke="#2BB6A3"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {nexusIA.guardrail}
                </p>
              </div>
            </Reveal>
          </div>

          {/* tela real da NexusIA */}
          <Reveal delay={0.08}>
            <Synthesis />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nexusIA.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06}>
              <div className="card card-hover h-full p-5">
                <h3 className="font-display text-[15px] leading-snug tracking-tight text-paper">{c.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-fog">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* formatos de avaliação */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-10 border-t border-paper/[0.08] pt-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">{exams.eyebrow}</p>
              <h3 className="h-display mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)]">{exams.title}</h3>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {["Objetivas", "Discursivas", "Mistas"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-paper/12 px-4 py-2 text-[12px] text-paper/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="max-w-[58ch] text-[15px] leading-relaxed text-fog">{exams.lead}</p>
              <p className="mt-6 border-l-2 border-ia-teal/60 pl-5 text-[14px] leading-relaxed text-paper/85">
                {exams.highlight}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
