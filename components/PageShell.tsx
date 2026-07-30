import type { ReactNode } from "react";
import { CustomCursor, ScrollProgress, SmoothScroll } from "./Chrome";
import Footer from "./Footer";
import Nav from "./Nav";
import Reveal, { RevealWords } from "./ui/Reveal";

/** Casca das páginas internas: mesmo header e rodapé da home, sem a animação de entrada. */
export default function PageShell({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-paper/[0.06] pb-16 pt-[140px] md:pb-20 md:pt-[180px]">
          <div className="pointer-events-none absolute -right-[8%] top-0 h-[520px] w-[520px] rounded-full bg-brand-600/[0.14] blur-[150px]" />
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.3]" />

          <div className="shell relative">
            <Reveal>
              <p className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {eyebrow}
              </p>
            </Reveal>
            <h1 className="h-display mt-7 max-w-[18ch] text-[clamp(2.4rem,6vw,4.6rem)]">
              <RevealWords text={title} />
            </h1>
            <Reveal delay={0.14}>
              <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-paper/90">{lead}</p>
            </Reveal>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </>
  );
}

/** Destaque que fecha um bloco, no mesmo tom das citações da home. */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <Reveal delay={0.1}>
      <p className="mt-10 border-l-2 border-brand-400/50 pl-5 text-[15px] leading-relaxed text-paper/90">
        {children}
      </p>
    </Reveal>
  );
}
