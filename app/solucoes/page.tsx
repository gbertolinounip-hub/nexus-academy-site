import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/ui/Reveal";
import { solutions } from "@/lib/pages";

export const metadata: Metadata = {
  alternates: { canonical: "/solucoes" },
  title: "Soluções · Nexus Academy",
  description:
    "Da avaliação ao estágio, o Nexus organiza os processos críticos da formação em saúde para coordenação, docentes, alunos e gestão.",
};

export default function SolucoesPage() {
  return (
    <PageShell eyebrow={solutions.eyebrow} title={solutions.title} lead={solutions.lead}>
      <section className="relative py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.items.map((it, i) => (
              <Reveal key={it.k} delay={(i % 3) * 0.07}>
                {/* cada solução leva à parte da plataforma que a sustenta */}
                <a
                  href={it.href}
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <span className="font-display text-sm font-bold tracking-tight text-brand-300">
                    {it.n}
                  </span>
                  <h2 className="mt-4 font-display text-xl leading-snug tracking-tight text-paper">
                    {it.k}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{it.d}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-brand-300">
                    Ver na plataforma
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path
                        d="M3 7h8M7.6 3.6 11 7l-3.4 3.4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-paper/[0.08] pt-10">
              <a href="/#demo" className="btn-primary">
                Agendar demonstração
              </a>
              <a href="/sobre" className="btn-ghost">
                Sobre o Nexus
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
