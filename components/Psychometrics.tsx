import { psychometrics } from "@/lib/content";
import { ITEMS, READING } from "@/lib/product";
import AppWindow from "./ui/AppWindow";
import Reveal, { RevealWords } from "./ui/Reveal";

const COLS = [
  "Questão",
  "% de acerto",
  "Dificuldade esperada",
  "Dificuldade real",
  "Discriminação",
  "Ponto-bisserial",
  "Brancos",
  "Inválidas",
];

export default function Psychometrics() {
  return (
    <section id="psicometria" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">{psychometrics.eyebrow}</p>
            </Reveal>
            <h2 className="h-display mt-6 max-w-[16ch] text-[clamp(2rem,4.4vw,3.4rem)]">
              <RevealWords text={psychometrics.title} />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-fog">{psychometrics.lead}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-10 space-y-6">
                {psychometrics.metrics.map((m) => (
                  <div key={m.k} className="border-t border-paper/[0.09] pt-5">
                    <dt className="font-display text-[15px] tracking-tight text-paper">{m.k}</dt>
                    <dd className="mt-2 max-w-[46ch] text-[13px] leading-relaxed text-fog">{m.d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <AppWindow title="Análise psicométrica dos itens">
              {/* leitura pedagógica gerada a partir dos indicadores */}
              <div className="m-4 rounded-xl bg-slate-50 p-5">
                <h3 className="text-[14px] font-bold text-slate-800">{READING.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{READING.body}</p>
                <p className="mt-3 text-[12px] leading-relaxed text-slate-400">{READING.note}</p>
              </div>

              <div className="overflow-x-auto px-4 pb-5">
                <table className="w-max min-w-full text-left text-[12px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] uppercase tracking-[0.1em] text-slate-500">
                      {COLS.map((h) => (
                        <th key={h} className="whitespace-nowrap px-3 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ITEMS.map((it) => (
                      <tr key={it.q} className="border-b border-slate-100 last:border-0">
                        <td className="px-3 py-3.5 font-bold text-slate-800">{it.q}</td>
                        <td className="whitespace-nowrap px-3 py-3.5 tabular-nums text-slate-600">{it.acerto}</td>
                        <td className="whitespace-nowrap px-3 py-3.5 text-slate-600">{it.esperada}</td>
                        <td className="whitespace-nowrap px-3 py-3.5">
                          {/* divergir do previsto é o achado que interessa */}
                          <span
                            className={`block font-bold ${
                              it.real !== it.esperada ? "text-amber-700" : "text-slate-800"
                            }`}
                          >
                            {it.real}
                          </span>
                          <span className="block text-[11px] text-slate-400">{it.realNota}</span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3.5">
                          <span className="block font-bold tabular-nums text-slate-800">{it.disc}</span>
                          <span className="block text-[11px] text-slate-400">{it.discLabel}</span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3.5">
                          <span className="block font-bold tabular-nums text-slate-800">{it.bis}</span>
                          <span className="block text-[11px] text-slate-400">{it.bisLabel}</span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3.5 tabular-nums text-slate-500">{it.brancos}</td>
                        <td className="whitespace-nowrap px-3 py-3.5 tabular-nums text-slate-500">{it.invalidas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="border-t border-slate-200 px-4 py-3 text-[11px] text-slate-400">
                Tela do produto com dados de demonstração.
              </p>
            </AppWindow>

            {/* a tabela precisa concluir alguma coisa, não só existir */}
            <div className="mt-8">
              <p className="flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.18em] text-brand-300">
                <span className="h-0.5 w-6 rounded-full bg-brand-400" />
                {psychometrics.findings.title}
              </p>
              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-paper/[0.08] bg-paper/[0.07] sm:grid-cols-3">
                {psychometrics.findings.items.map((f) => (
                  <div key={f.k} className="bg-ink p-6">
                    <p className="font-display text-[clamp(1.7rem,3vw,2.2rem)] leading-none tracking-tight text-brand-300">
                      {f.n}
                    </p>
                    <p className="mt-3 text-[13px] font-semibold leading-snug text-paper">{f.k}</p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-fog">{f.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-brand-400/50 pl-5 text-[14px] leading-relaxed text-paper/85">
                {psychometrics.findings.bridge}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
