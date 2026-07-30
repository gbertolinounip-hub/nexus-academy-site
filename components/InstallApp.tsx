import { contactEmail } from "@/lib/content";
import { appUrl, install } from "@/lib/pages";
import Reveal from "./ui/Reveal";

function AddressBox({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex max-w-full items-center gap-2.5 rounded-xl border border-paper/[0.1] bg-paper/[0.03] px-4 py-3 font-mono text-[13px] text-brand-300 transition-colors hover:border-brand-400/40 hover:bg-paper/[0.06] hover:text-paper md:text-sm"
    >
      <span className="truncate">{url}</span>
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        className="shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden
      >
        <path
          d="M4 10 10 4M10 4H5.4M10 4v4.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function InstallApp() {
  return (
    <section id="instalar" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{install.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-display mt-6 text-[clamp(2.1rem,4.8vw,3.8rem)]">
              {install.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-[62ch] text-[15px] leading-relaxed text-fog">
              {install.lead}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="card mt-12 p-8 md:p-10">
            <h3 className="font-display text-2xl tracking-tight text-paper">
              {install.start.title}
            </h3>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-fog">
              {install.start.body}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href={appUrl} target="_blank" rel="noreferrer" className="btn-primary">
                {install.start.cta}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                  <path
                    d="M3 7.5h9M8.2 3.8 12 7.5l-3.8 3.7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <AddressBox url={appUrl} />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {install.platforms.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div id={`instalar-${p.id}`} className="card flex h-full scroll-mt-28 flex-col p-7 md:p-8">
                <span className="w-fit rounded-full border border-paper/12 bg-paper/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-300">
                  {p.kicker}
                </span>
                <h3 className="mt-5 font-display text-xl tracking-tight text-paper">{p.title}</h3>

                <ol className="mt-6 space-y-3.5">
                  {p.steps.map((s, n) => (
                    <li key={s} className="flex gap-3.5 text-sm leading-relaxed text-fog">
                      <span
                        className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-400/30 bg-brand-900/40 font-display text-[12px] font-semibold text-brand-300"
                        aria-hidden
                      >
                        {n + 1}
                      </span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-7 border-l-2 border-brand-400/40 pl-4 text-[13px] leading-relaxed text-paper/70">
                  {p.note}
                </p>

                <a
                  href={p.source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[12px] text-fog/70 transition-colors hover:text-brand-300"
                >
                  {p.source.label}
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M4 10 10 4M10 4H5.4M10 4v4.6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {install.addresses.items.map((a, i) => (
            <Reveal key={a.url} delay={i * 0.08}>
              <div className="card h-full p-7">
                <h3 className="font-display text-lg tracking-tight text-paper">{a.k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{a.d}</p>
                <div className="mt-6">
                  <AddressBox url={a.url} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href={appUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Abrir o app
            </a>
            <a href={`mailto:${contactEmail}`} className="btn-ghost">
              Falar com o suporte
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
