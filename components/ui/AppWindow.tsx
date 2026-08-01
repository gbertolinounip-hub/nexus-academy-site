import type { ReactNode } from "react";

/**
 * Moldura de "janela do produto": o conteúdo é claro, como no sistema real,
 * e flutua sobre o fundo escuro do site.
 */
export default function AppWindow({
  title,
  badge,
  children,
  className,
}: {
  title: string;
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-full overflow-hidden rounded-2xl border border-paper/12 bg-white shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] ${className ?? ""}`}
    >
      <div className="flex min-w-0 items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 truncate text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
          {title}
        </span>
        {badge ? <span className="ml-auto shrink-0">{badge}</span> : null}
      </div>
      <div className="min-w-0 bg-white text-slate-800">{children}</div>
    </div>
  );
}
