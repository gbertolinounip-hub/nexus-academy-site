"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { hero, marquee } from "@/lib/content";
import Magnetic from "./ui/Magnetic";

const NexusIntro = dynamic(() => import("./NexusIntro"), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();
  const [showIntro, setShowIntro] = useState(false);
  const animateHero = !reduced && showIntro;

  // o texto começa a surgir enquanto a marca ainda desliza para a direita
  const base = animateHero ? 1.35 : 0;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const sync = () => setShowIntro(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-[74px]">
      {/* brilho ambiente: única presença gráfica permanente do hero */}
      <div className="pointer-events-none absolute -right-[10%] top-[8%] h-[620px] w-[620px] rounded-full bg-brand-600/[0.16] blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35]" />

      {/* as partículas montam a marca e ficam estacionadas à direita da headline */}
      {showIntro && (
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <NexusIntro />
        </div>
      )}

      <Image
        src="/brand/nexus-simbolo.png"
        alt=""
        width={900}
        height={900}
        sizes="92vw"
        quality={55}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[42%] top-[13%] h-auto w-[92vw] max-w-none opacity-[0.08] mix-blend-screen md:hidden"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="shell relative flex min-h-[calc(100svh-74px)] flex-col justify-center py-24">
        <motion.p
          className="eyebrow"
          initial={animateHero ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: base, duration: 0.9 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {hero.eyebrow}
        </motion.p>

        <h1 className="h-display mt-8 max-w-[15ch] text-[clamp(3rem,9vw,7.5rem)]">
          {hero.title.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${i >= 1 ? "text-brand-300" : ""}`}
                initial={animateHero ? { y: "110%" } : false}
                animate={{ y: 0 }}
                transition={{ delay: base + 0.1 + i * 0.1, duration: 1.1, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* filete que se desenha, separando título de apoio */}
        <motion.span
          className="mt-10 block h-px w-full max-w-[520px] origin-left bg-gradient-to-r from-brand-400/70 to-transparent"
          initial={animateHero ? { scaleX: 0 } : false}
          animate={{ scaleX: 1 }}
          transition={{ delay: base + 0.45, duration: 1.2, ease: EASE }}
        />

        <motion.p
          className="mt-8 max-w-[54ch] text-[15px] leading-relaxed text-fog md:text-[17px]"
          initial={animateHero ? { opacity: 0, y: 14 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.55, duration: 1 }}
        >
          {hero.lead}
        </motion.p>

        <motion.div
          className="mt-11 flex flex-wrap items-center gap-4"
          initial={animateHero ? { opacity: 0, y: 14 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + 0.68, duration: 1 }}
        >
          <Magnetic>
            <a href={hero.primary.href} className="btn-primary">
              {hero.primary.label}
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
          </Magnetic>
          <Magnetic>
            {/* o aria-label carrega o nome porque a marca entra como imagem */}
            <a
              href={hero.secondary.href}
              className="btn-ghost !gap-2.5"
              aria-label={hero.secondary.label}
            >
              {hero.secondary.prefix}
              {/* o alt fica vazio: quem lê tela já recebe o nome pelo aria-label do link */}
              <Image
                src={hero.secondary.logoOnDark}
                alt=""
                width={322}
                height={53}
                className="ia-on-dark h-[17px] w-auto object-contain"
              />
              <Image
                src={hero.secondary.logoOnLight}
                alt=""
                width={322}
                height={53}
                className="ia-on-light h-[17px] w-auto object-contain"
              />
            </a>
          </Magnetic>
        </motion.div>

        <motion.dl
          className="mt-20 grid max-w-3xl grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-3"
          initial={animateHero ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: base + 0.85, duration: 1.1 }}
        >
          {hero.pillars.map((s) => (
            <div key={s.label} className="border-t border-paper/[0.1] pt-5">
              <dt className="font-display text-xl tracking-tight text-paper">{s.value}</dt>
              <dd className="mt-2 text-[13px] leading-snug text-fog">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        className="relative max-w-[100vw] overflow-hidden border-y border-paper/[0.16] py-4"
        initial={animateHero ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1, duration: 1 }}
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform motion-reduce:animate-none max-md:animate-none">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/62"
            >
              {m}
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_16px_rgb(var(--brand-400)/0.9)]" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
