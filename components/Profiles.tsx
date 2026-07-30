"use client";

import { profiles } from "@/lib/content";
import { PulseRing, useGuidedTabs } from "./ui/Interactive";
import Reveal, { RevealWords } from "./ui/Reveal";

export default function Profiles() {
  const { active, pick, hintAt } = useGuidedTabs(profiles.groups.length);
  const group = profiles.groups[active];

  return (
    <section id="perfis" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{profiles.eyebrow}</p>
          </Reveal>
          <h2 className="h-display mt-6 text-[clamp(2.1rem,4.6vw,3.6rem)]">
            <RevealWords text={profiles.title} />
          </h2>
        </div>

        <Reveal delay={0.1}>
          {/* aqui a seta pulsante já basta como convite; a dica escrita saía sobrando */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1fr]">
            {/* seletor de perfil */}
            <ul className="flex flex-col">
              {profiles.groups.map((g, i) => {
                const on = i === active;
                return (
                  <li key={g.who}>
                    <button
                      onClick={() => pick(i)}
                      aria-pressed={on}
                      className={`group flex w-full items-center justify-between gap-4 border-t border-paper/[0.09] py-5 text-left transition-colors ${
                        on ? "border-brand-400/50" : "hover:border-paper/25"
                      }`}
                    >
                      <span
                        className={`font-display text-xl tracking-tight transition-colors md:text-2xl ${
                          on ? "text-paper" : "text-fog group-hover:text-paper/80"
                        }`}
                      >
                        {g.who}
                      </span>
                      <span
                        className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          on
                            ? "border-brand-400 bg-brand-500/20 text-brand-300"
                            : "border-paper/12 text-fog/60 group-hover:border-paper/30"
                        }`}
                      >
                        {/* o pulso caminha para o próximo perfil ainda não visto */}
                        {i === hintAt && <PulseRing tone="dark" />}
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                          <path
                            d="M2.6 6.5h7.8M7.1 3.2l3.3 3.3-3.3 3.3"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* benefícios do perfil selecionado */}
            <div className="card p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-300/80">{group.who}</p>
              <ul className="mt-7 space-y-4">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 text-[15px] leading-snug text-paper/85 animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="mt-1 shrink-0" aria-hidden>
                      <circle cx="8.5" cy="8.5" r="7.5" stroke="#4A9FE0" strokeWidth="1.1" opacity=".55" />
                      <path
                        d="m5.4 8.7 2.1 2.1 4.2-4.6"
                        stroke="#7CC0F5"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
