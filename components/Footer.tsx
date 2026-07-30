import Image from "next/image";
import { contactEmail, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/[0.07] pt-20">
      <div className="shell">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/brand/nexus-simbolo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-semibold tracking-tight">Nexus Academy</span>
            </div>
            <p className="mt-5 max-w-[38ch] text-[13px] leading-relaxed text-fog">{footer.tagline}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-6 inline-block border-b border-brand-400/40 pb-0.5 text-sm text-brand-300 transition-colors hover:border-brand-300"
            >
              {contactEmail}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footer.columns.map((c) => (
              <div key={c.title}>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-paper/45">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13px] text-fog transition-colors hover:text-paper"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/[0.07] py-7 text-[12px] text-fog/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nexus Academy. Todos os direitos reservados.</p>
          {/* páginas legais ainda não escritas: por ora levam à seção que explica a LGPD */}
          <div className="flex flex-wrap gap-6">
            <a href="#infraestrutura" className="transition-colors hover:text-paper">
              Privacidade e LGPD
            </a>
            <a href="#faq" className="transition-colors hover:text-paper">
              Perguntas frequentes
            </a>
            <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-paper">
              Contato
            </a>
          </div>
        </div>
      </div>

      {/* wordmark gigante de rodapé */}
      <p className="mask-fade-b select-none whitespace-nowrap text-center font-display text-[19vw] font-semibold leading-[0.72] tracking-[-0.045em] text-paper/[0.035]">
        NEXUS
      </p>
    </footer>
  );
}
