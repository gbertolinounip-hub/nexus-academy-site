"use client";

import { BANDS, EXTRA_BANDS, MATRICES, MATRIX_TABS, STUDENTS, band } from "@/lib/product";
import AppWindow from "./ui/AppWindow";
import { ClickHint, LiveBadge, PulseRing, useGuidedTabs } from "./ui/Interactive";

function fmt(v: number) {
  return Number.isInteger(v) ? `${v}%` : `${v.toFixed(2).replace(".", ",")}%`;
}

export default function ProductMatrix() {
  const { active, pick, hintAt, done, seen, total } = useGuidedTabs(MATRIX_TABS.length);
  const tab = MATRIX_TABS[active];
  const matrix = MATRICES[tab];

  return (
    <AppWindow title="Acompanhamento do professor · matriz de desempenho" badge={<LiveBadge />}>
      {/* abas reais do sistema */}
      <div className="flex gap-1.5 overflow-x-auto border-b border-slate-200 px-4 pb-2 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {MATRIX_TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => pick(i)}
            aria-pressed={i === active}
            className={`relative shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              i === active
                ? "bg-[#1e3a8a] text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            }`}
          >
            {/* o pulso caminha para a próxima aba ainda não vista */}
            {i === hintAt && <PulseRing />}
            {t}
          </button>
        ))}
      </div>

      <div className="px-4 pb-1 pt-3">
        <ClickHint done={done} seen={seen} total={total}>
          Clique nas abas para trocar a leitura da mesma prova
        </ClickHint>
      </div>

      {/* legenda das faixas de desempenho */}
      <div className="m-4 rounded-xl bg-slate-50 p-4">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {BANDS.map((b) => (
            <div key={b.key} className="flex items-start gap-2">
              <span
                className="mt-0.5 h-4 w-4 shrink-0 rounded"
                style={{ background: b.swatch }}
              />
              <span className="leading-tight">
                <span className="block text-[12px] font-semibold text-slate-700">{b.label}</span>
                <span className="block text-[11px] text-slate-400">{b.range}</span>
              </span>
            </div>
          ))}
          {EXTRA_BANDS.map((b) => (
            <div key={b.key} className="flex items-center gap-2">
              <span
                className="h-4 w-4 shrink-0 rounded border border-slate-200"
                style={{ background: b.swatch }}
              />
              <span className="text-[12px] font-semibold text-slate-700">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* matriz aluno × linha */}
      <div className="overflow-x-auto px-4 pb-5">
        <table className="w-max border-separate border-spacing-1.5 text-[12px]">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-white pr-3 text-left align-bottom">
                <span className="text-[12px] font-bold text-[#1e3a8a]">{matrix.rowLabel}</span>
              </th>
              {STUDENTS.map((s) => (
                <th key={s.ra} className="w-[74px] pb-2 align-bottom">
                  {/* nome e RA em colunas verticais próprias — juntos, um invadiria o outro */}
                  <span className="mx-auto flex h-[124px] w-[74px] items-end justify-center gap-1.5">
                    <span className="whitespace-nowrap [writing-mode:vertical-rl] rotate-180 text-[11px] font-bold leading-none text-slate-700">
                      {s.name}
                    </span>
                    <span className="whitespace-nowrap [writing-mode:vertical-rl] rotate-180 text-[10px] leading-none text-slate-400">
                      RA: {s.ra}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map((row) => (
              <tr key={row.label}>
                <td className="sticky left-0 z-10 bg-white pr-3 text-[12px] font-bold text-[#1e3a8a]">
                  <span className="block max-w-[190px] truncate">{row.label}</span>
                </td>
                {row.values.map((v, i) => {
                  const b = band(v);
                  return (
                    <td key={i}>
                      <span
                        className="grid h-[38px] w-[74px] place-items-center rounded-lg font-bold tabular-nums"
                        style={{ background: b.bg, color: b.text }}
                      >
                        {fmt(v)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="border-t border-slate-200 px-4 py-3 text-[11px] text-slate-400">
        Tela do produto com dados de demonstração. Os nomes já são anonimizados no sistema.
      </p>
    </AppWindow>
  );
}
