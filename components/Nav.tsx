"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, navCta, navInstall } from "@/lib/content";
import Magnetic from "./ui/Magnetic";

/** Ícone de instalar: seta entrando no aparelho. */
function InstallIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M7 2v6m0 0L4.6 5.9M7 8l2.4-2.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6 9.6v1.2a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V9.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Pontos de corte medidos, não herdados do Tailwind.
 *
 * A frase sob a marca é o item mais caro do cabeçalho: sozinha ela alarga o
 * bloco de 148 para 322px, porque é mais larga que o próprio nome. Como ela
 * fica sempre visível a partir de 780px, tudo o mais entra depois:
 *   780px   frase "Gestão acadêmica inteligente"
 *   1200px  links do menu
 *   1240px  "Instale o app"
 *
 * Medido em toda a faixa de 360 a 2000px, a pior folga é 46px.
 */
export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        solid ? "border-b border-paper/[0.06] bg-ink/70 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="shell flex h-[74px] items-center justify-between gap-5">
        <a
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Nexus Academy, ir para o início"
        >
          <Image
            src="/brand/nexus-simbolo.png"
            alt=""
            width={38}
            height={38}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="block leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-paper">
              Nexus Academy
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-fog/70 min-[780px]:block">
              Gestão acadêmica inteligente
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 min-[1200px]:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="group relative whitespace-nowrap text-sm text-fog transition-colors hover:text-paper"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          {/* acompanha o botão de acesso: mesmo grupo, peso menor */}
          <a
            href={navInstall.href}
            className="hidden items-center gap-1.5 whitespace-nowrap text-[13px] text-fog transition-colors hover:text-paper min-[1240px]:inline-flex"
          >
            <InstallIcon />
            {navInstall.label}
          </a>
          <Magnetic strength={0.25}>
            <a href={navCta.href} className="btn-primary hidden !px-6 !py-2.5 sm:inline-flex">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <rect
                  x="2.6"
                  y="6.2"
                  width="8.8"
                  height="6"
                  rx="1.6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M4.8 6.2V4.4a2.2 2.2 0 0 1 4.4 0v1.8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              {navCta.label}
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-paper/12 min-[1200px]:hidden"
          >
            <span
              className={`h-px w-4 bg-paper transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-paper transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-paper/[0.06] bg-ink/95 backdrop-blur-xl transition-[max-height] duration-500 min-[1200px]:hidden ${
          // cinco links + acesso + instalar: 96 (24rem) cortava o último item
          open ? "max-h-[34rem]" : "max-h-0"
        }`}
      >
        <ul className="shell flex flex-col gap-1 py-5">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl text-paper/85"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={navCta.href} onClick={() => setOpen(false)} className="btn-primary w-full">
              {navCta.label}
            </a>
          </li>
          {/* no celular é onde instalar o app importa mais: fica logo abaixo do acesso */}
          <li className="pt-2">
            <a
              href={navInstall.href}
              onClick={() => setOpen(false)}
              className="btn-ghost w-full !py-3 text-[13px]"
            >
              <InstallIcon />
              {navInstall.label}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
