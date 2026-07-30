"use client";

import { useState } from "react";
import { contactEmail, cta } from "@/lib/content";
import Magnetic from "./ui/Magnetic";
import Reveal, { RevealWords } from "./ui/Reveal";

const field =
  "w-full rounded-xl border border-paper/12 bg-paper/[0.03] px-4 py-3.5 text-sm text-paper placeholder:text-fog/45 outline-none transition-colors focus:border-brand-400";

/** Rótulos amigáveis para montar o corpo do e-mail. */
const LABELS: Record<string, string> = {
  nome: "Nome",
  email: "E-mail institucional",
  telefone: "Telefone",
  instituicao: "Instituição",
  cargo: "Cargo",
  area: "Área do curso",
  mensagem: "Processo que mais consome tempo",
};

export default function CTA() {
  const [sent, setSent] = useState(false);

  /**
   * Sem back-end ainda: o pedido é montado como e-mail e entregue ao cliente
   * de correio do visitante. Trocar por rota de API ou CRM quando houver.
   */
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const instituicao = String(data.get("instituicao") ?? "").trim();

    const corpo = Object.keys(LABELS)
      .map((k) => {
        const v = String(data.get(k) ?? "").trim();
        return v ? `${LABELS[k]}: ${v}` : null;
      })
      .filter(Boolean)
      .join("\n");

    const assunto = instituicao
      ? `Pedido de demonstração · ${instituicao}`
      : "Pedido de demonstração";

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;
    setSent(true);
  };

  return (
    <section id="demo" className="noise relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[130px]" />

      <div className="shell relative grid gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">{cta.eyebrow}</p>
          </Reveal>
          <h2 className="h-display mt-6 max-w-[15ch] text-[clamp(2.3rem,5.2vw,4rem)]">
            <RevealWords text={cta.title} />
          </h2>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-fog">{cta.lead}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-10 space-y-3">
              {cta.checks.map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-paper/80">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <circle cx="8" cy="8" r="7" stroke="#4A9FE0" strokeWidth="1.2" />
                      <path d="m5 8.2 2 2 4-4.4" stroke="#4A9FE0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="card p-8 md:p-10">
            {sent ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-brand-400/50 text-brand-300">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                    <path d="m6 11.4 3.2 3.2L16.4 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-2xl text-paper">Quase lá</h3>
                <p className="mt-3 max-w-[38ch] text-sm text-fog">
                  Abrimos seu programa de e-mail com o pedido preenchido. Basta enviar e nossa
                  equipe responde em até um dia útil.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-5 border-b border-brand-400/40 pb-0.5 text-sm text-brand-300 transition-colors hover:border-brand-300"
                >
                  {contactEmail}
                </a>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={submit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="nome" className={field} placeholder="Nome completo" aria-label="Nome completo" />
                  <input required type="email" name="email" className={field} placeholder="E-mail institucional" aria-label="E-mail institucional" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="tel"
                    name="telefone"
                    className={field}
                    placeholder="Telefone / WhatsApp"
                    aria-label="Telefone ou WhatsApp"
                  />
                  <input required name="instituicao" className={field} placeholder="Instituição" aria-label="Instituição" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <select required name="cargo" defaultValue="" className={field} aria-label="Cargo">
                    <option value="" disabled>
                      Seu cargo
                    </option>
                    {[
                      "Reitoria / Direção",
                      "Coordenação de curso",
                      "Professor / Supervisor",
                      "NDE / Núcleo pedagógico",
                      "Secretaria acadêmica",
                      "TI",
                      "Outro",
                    ].map((o) => (
                      <option key={o} className="bg-ink-700">
                        {o}
                      </option>
                    ))}
                  </select>
                  <select required name="area" defaultValue="" className={field} aria-label="Área do curso">
                    <option value="" disabled>
                      Área do curso
                    </option>
                    {[
                      "Medicina",
                      "Odontologia",
                      "Enfermagem",
                      "Fisioterapia",
                      "Psicologia",
                      "Outro curso da saúde",
                      "Fora da área da saúde",
                    ].map((o) => (
                      <option key={o} className="bg-ink-700">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="mensagem"
                  className={`${field} min-h-[110px] resize-none`}
                  placeholder="Qual processo mais consome tempo hoje? (opcional)"
                  aria-label="Mensagem"
                />
                <Magnetic strength={0.15} className="!block">
                  <button type="submit" className="btn-primary w-full">
                    Quero a demonstração
                  </button>
                </Magnetic>
                <p className="text-center text-[11px] leading-relaxed text-fog/55">
                  Ao enviar você concorda com o tratamento dos dados conforme nossa Política de Privacidade (LGPD).
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
