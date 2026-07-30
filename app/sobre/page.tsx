import type { Metadata } from "next";
import PageShell, { Highlight } from "@/components/PageShell";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import { about } from "@/lib/pages";

export const metadata: Metadata = {
  alternates: { canonical: "/sobre" },
  title: "Sobre o Nexus Academy · Gestão acadêmica inteligente",
  description:
    "O Nexus Academy centraliza dados acadêmicos e transforma registros dispersos em inteligência para a gestão do curso.",
};

export default function SobrePage() {
  return (
    <PageShell eyebrow={about.eyebrow} title={about.title} lead={about.lead}>
      {/* o que é */}
      <section className="relative border-b border-paper/[0.06] py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="h-display text-[clamp(1.9rem,4vw,3rem)] lg:sticky lg:top-28">
              {about.what.title}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {about.what.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <p className="text-[16px] leading-relaxed text-fog">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* para quem */}
      <section className="relative border-b border-paper/[0.06] py-20 md:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="h-display text-[clamp(1.9rem,4vw,3rem)]">
              <RevealWords text={about.who.title} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 text-[15px] leading-relaxed text-fog">{about.who.lead}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {about.who.items.map((it, i) => (
              <Reveal key={it.who} delay={(i % 2) * 0.07}>
                <div className="card card-hover h-full p-7">
                  <h3 className="font-display text-xl tracking-tight text-paper">{it.who}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Highlight>{about.who.highlight}</Highlight>
        </div>
      </section>

      {/* problema em versão curta: a tese completa está no diagnóstico da home */}
      <section className="relative border-b border-paper/[0.06] py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="h-display text-[clamp(1.9rem,4vw,3rem)]">{about.problem.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-[16px] leading-relaxed text-paper/90">{about.problem.body}</p>
              <a
                href={about.problem.link.href}
                className="mt-6 inline-flex items-center gap-2 border-b border-brand-400/40 pb-1 text-sm font-medium text-brand-300 transition-colors hover:border-brand-300"
              >
                {about.problem.link.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M3 7h8M7.6 3.6 11 7l-3.4 3.4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* como apoia a gestão */}
      <section className="relative border-b border-paper/[0.06] py-20 md:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="h-display text-[clamp(1.9rem,4vw,3rem)]">
              <RevealWords text={about.management.title} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 text-[15px] leading-relaxed text-fog">{about.management.lead}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
            {about.management.items.map((it, i) => (
              <Reveal key={it.k} delay={(i % 3) * 0.07}>
                <div className="border-t border-paper/[0.09] pt-6">
                  <h3 className="font-display text-[17px] leading-snug tracking-tight text-paper">
                    {it.k}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-fog">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Highlight>{about.management.highlight}</Highlight>
        </div>
      </section>

      {/* NexusIA */}
      <section className="relative overflow-hidden border-b border-paper/[0.06] py-20 md:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[440px] w-[1000px] max-w-[130vw] -translate-x-1/2 opacity-[0.16] blur-[110px]"
          style={{ background: "var(--ia-gradient)" }}
        />
        <div className="shell relative">
          <div className="max-w-3xl">
            <h2 className="h-display text-[clamp(1.9rem,4vw,3rem)]">
              <RevealWords text={about.ia.title} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 text-[15px] leading-relaxed text-fog">{about.ia.lead}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {about.ia.items.map((it, i) => (
              <Reveal key={it.k} delay={(i % 3) * 0.07}>
                <div className="card card-hover h-full p-6">
                  <h3 className="font-display text-[16px] leading-snug tracking-tight text-paper">
                    {it.k}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-fog">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 rounded-xl border border-paper/10 bg-paper/[0.03] p-6">
              <p className="max-w-[86ch] text-[14px] leading-relaxed text-paper/85">
                {about.ia.guardrail}
              </p>
            </div>
          </Reveal>

          <Highlight>{about.ia.highlight}</Highlight>
        </div>
      </section>

      {/* fechamento */}
      <section className="relative py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <p className="h-display max-w-[24ch] text-[clamp(1.8rem,4.4vw,3.2rem)] text-paper">
              {about.closing}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/#demo" className="btn-primary">
                Agendar demonstração
              </a>
              <a href="/solucoes" className="btn-ghost">
                Ver as soluções
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
