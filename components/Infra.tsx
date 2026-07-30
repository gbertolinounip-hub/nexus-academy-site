import { infra } from "@/lib/content";
import Reveal, { RevealWords } from "./ui/Reveal";

function Shield() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden>
      <path
        d="M9 1.6 15.2 4.2v4.6c0 3.7-2.5 6.3-6.2 7.5-3.7-1.2-6.2-3.8-6.2-7.5V4.2L9 1.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Infra() {
  return (
    <section id="infraestrutura" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[820px] max-w-[110vw] -translate-x-1/2 rounded-full bg-brand-700/20 blur-[140px]" />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <Shield />
                {infra.eyebrow}
              </p>
            </Reveal>
            <h2 className="h-display mt-6 max-w-[16ch] text-[clamp(2.1rem,4.6vw,3.5rem)]">
              <RevealWords text={infra.title} />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-fog">{infra.lead}</p>
            </Reveal>

            {/* selo de infraestrutura */}
            <Reveal delay={0.18}>
              <div className="mt-10 inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-paper/[0.09] bg-paper/[0.02] px-6 py-5">
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-fog/60">
                    {infra.badge.label}
                  </span>
                  <span className="mt-1 block font-display text-xl tracking-tight text-paper">
                    {infra.badge.value}
                  </span>
                </span>
                <span className="h-8 w-px bg-paper/10" />
                <span className="flex items-center gap-2.5 text-[13px] text-fog">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {infra.badge.note}
                </span>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {infra.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 2) * 0.07}>
                  <div className="border-t border-paper/[0.09] pt-6">
                    <h3 className="flex items-start gap-2.5 font-display text-[16px] leading-snug tracking-tight text-paper">
                      <span className="mt-[3px] text-brand-400">
                        <Shield />
                      </span>
                      {it.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-fog">{it.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.14}>
              <p className="mt-12 border-l-2 border-brand-400/50 pl-5 text-[14px] leading-relaxed text-paper/85">
                {infra.clinical}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
