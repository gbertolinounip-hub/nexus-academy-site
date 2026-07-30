"use client";

import { useState } from "react";

/**
 * Sinalização de área interativa.
 *
 * Três camadas, do mais discreto ao mais explícito:
 *  1. selo permanente na barra da janela, dizendo que aquilo responde;
 *  2. dica textual com ícone de cursor;
 *  3. pulso de atenção que caminha para a próxima opção ainda não vista.
 *
 * A dica e o pulso só somem quando tudo foi explorado, de modo que a
 * sinalização funciona como guia e não como aviso de uma vez só.
 */

/**
 * Controla o passeio pelas opções: guarda o que já foi visto e devolve
 * qual é o próximo alvo do pulso.
 */
export function useGuidedTabs(total: number, initial = 0) {
  const [active, setActive] = useState(initial);
  const [seen, setSeen] = useState<number[]>([initial]);

  const pick = (i: number) => {
    setActive(i);
    setSeen((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  // primeiro índice ainda não visitado; -1 quando o passeio terminou
  let hintAt = -1;
  for (let i = 0; i < total; i++) {
    if (!seen.includes(i)) {
      hintAt = i;
      break;
    }
  }

  return { active, pick, hintAt, done: hintAt === -1, seen: seen.length, total };
}

/** Selo para a barra da janela do produto. */
export function LiveBadge({ label = "Interativo" }: { label?: string }) {
  return (
    <span className="flex items-center gap-2 rounded-full bg-[#1e3a8a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1e3a8a]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1e3a8a]/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1e3a8a]" />
      </span>
      {label}
    </span>
  );
}

function CursorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <path
        d="M2.5 1.8 11 6.6l-3.6.9L5.9 11 2.5 1.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Dica com contador de progresso; some quando tudo foi visitado. */
export function ClickHint({
  children,
  done,
  seen,
  total,
  tone = "light",
}: {
  children: React.ReactNode;
  done: boolean;
  seen?: number;
  total?: number;
  tone?: "light" | "dark";
}) {
  return (
    <p
      aria-hidden={done}
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium transition-all duration-500 ${
        done ? "pointer-events-none -translate-y-1 opacity-0" : "opacity-100"
      } ${tone === "light" ? "text-[#1e3a8a]" : "text-brand-300"}`}
    >
      <CursorIcon />
      {children}
      {typeof seen === "number" && typeof total === "number" && (
        <span className={tone === "light" ? "text-slate-400" : "text-fog"}>
          ({seen} de {total})
        </span>
      )}
    </p>
  );
}

/** Anel que pulsa sobre o próximo item a explorar. */
export function PulseRing({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`pointer-events-none absolute inset-0 animate-ping rounded-full border ${
        tone === "light" ? "border-[#1e3a8a]/40" : "border-brand-400/60"
      }`}
    />
  );
}
