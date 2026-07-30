"use client";

import Image from "next/image";
import { modules } from "@/lib/content";
import Reveal, { RevealWords } from "./ui/Reveal";

function Card({ item, index }: { item: (typeof modules.items)[number]; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div
        id={item.id}
        className={`card group h-full scroll-mt-28 p-7 transition-colors duration-300 md:p-9 ${
          item.accent
            ? "border-gradient-ia bg-[linear-gradient(150deg,rgba(43,182,163,0.08),rgba(216,32,127,0.06)_58%,rgba(74,92,176,0.08))]"
            : "border-paper/[0.08] bg-paper/[0.012] hover:border-paper/[0.14] hover:bg-paper/[0.025]"
        }`}
      >
        <div className="relative flex h-full flex-col">
          {/* a categoria vira pílula: precisa saltar antes do título */}
          <span
            className={
              item.accent
                ? "text-gradient-ia w-full max-w-[460px] rounded-full border border-paper/[0.10] bg-paper/[0.045] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em]"
                : "w-full max-w-[460px] rounded-full border border-paper/[0.10] bg-paper/[0.045] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-300"
            }
          >
            {item.tag}
          </span>

          {item.accent ? (
            <Image
              src="/brand/nexus-ia-wordmark-light.png"
              alt="Nexus IA"
              width={325}
              height={160}
              className="mt-9 h-9 w-auto object-contain"
            />
          ) : (
            <h3 className="mt-9 font-display text-2xl font-semibold tracking-tight text-paper">{item.title}</h3>
          )}

          <p className="mt-6 text-[15px] leading-relaxed text-fog/95">{item.body}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-10">
            {item.bullets.map((b) => (
              <li
                key={b}
                className={`rounded-full border px-3.5 py-1.5 text-[11.5px] font-medium ${
                  item.accent
                    ? "border-ia-teal/45 text-paper/90"
                    : "border-paper/15 text-paper/85"
                }`}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Modules() {
  return (
    <section id="plataforma" className="relative border-b border-paper/[0.06] py-20 md:py-28">
      <div className="shell relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{modules.eyebrow}</p>
          </Reveal>
          <h2 className="h-display mt-6 text-[clamp(2.1rem,4.8vw,3.8rem)]">
            <RevealWords text={modules.title} />
          </h2>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[54ch] text-[15px] leading-relaxed text-fog">{modules.lead}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.items.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
