"use client";

import Image from "next/image";
import { SYNTHESIS } from "@/lib/product";
import AppWindow from "./ui/AppWindow";
import { ClickHint, PulseRing, useGuidedTabs } from "./ui/Interactive";

export default function Synthesis() {
  const { active: i, pick, hintAt, done, seen, total } = useGuidedTabs(SYNTHESIS.tabs.length);
  const active = SYNTHESIS.tabs[i];

  return (
    <AppWindow
      title="NexusIA · sínteses pedagógicas"
      badge={
        <span className="rounded-full bg-[#1e3a8a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1e3a8a]">
          {SYNTHESIS.badge}
        </span>
      }
    >
      <div className="p-6 md:p-7">
        <Image
          src="/brand/nexus-ia-wordmark.png"
          alt="NexusIA"
          width={325}
          height={160}
          className="h-8 w-auto object-contain"
        />

        <h3 className="mt-5 text-[22px] font-bold leading-tight text-slate-900">{SYNTHESIS.title}</h3>
        <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-slate-500">{SYNTHESIS.lead}</p>

        <p className="mt-5 border-l-[3px] border-amber-400 py-1 pl-4 text-[13px] leading-relaxed text-slate-600">
          {SYNTHESIS.disclaimer}
        </p>

        <p className="mt-7 text-[13px] font-bold text-slate-800">Tipo de apoio</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SYNTHESIS.tabs.map((t, n) => (
            <button
              key={t.label}
              onClick={() => pick(n)}
              aria-pressed={n === i}
              className={`relative rounded-full border px-4 py-2 text-[12px] font-semibold transition-colors ${
                n === i
                  ? "border-[#1e3a8a] bg-[#1e3a8a] text-white"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {n === hintAt && <PulseRing />}
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <ClickHint done={done} seen={seen} total={total}>
            Troque o tipo de apoio para ver outro texto gerado
          </ClickHint>
        </div>

        <p className="mt-6 text-[13px] font-bold text-slate-800">Orientação adicional para a NexusIA</p>
        <div className="mt-2 min-h-[74px] rounded-xl border border-slate-200 px-4 py-3 text-[13px] leading-relaxed text-slate-400">
          {SYNTHESIS.placeholder}
        </div>
        <p className="mt-2 text-[11px] text-slate-400">Opcional. Máximo de 1.500 caracteres.</p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-[13px] font-semibold text-slate-700">
          Gerar nova versão
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[14px] font-bold text-slate-900">Texto gerado</p>
              <p className="mt-0.5 text-[12px] text-slate-400">Gerado em 22/07/2026, 00:46.</p>
            </div>
            <span className="rounded-lg border border-slate-200 px-4 py-2 text-[12px] font-semibold text-slate-600">
              Copiar texto
            </span>
          </div>

          <div key={i} className="mt-4 animate-fade-up rounded-xl bg-slate-50 p-5">
            <p className="text-[14px] font-bold text-[#1e3a8a]">{active.heading}</p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-700">{active.body}</p>
          </div>
        </div>
      </div>

      <p className="border-t border-slate-200 px-4 py-3 text-[11px] text-slate-400">
        Tela do produto com dados de demonstração.
      </p>
    </AppWindow>
  );
}
