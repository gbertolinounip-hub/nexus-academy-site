"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/** Altura do cabeçalho fixo: a âncora precisa parar abaixo dele. */
const OFFSET_CABECALHO = -96;

/**
 * Scroll suave global (estilo estúdio) com respeito a prefers-reduced-motion.
 *
 * Os links de âncora passam pelo Lenis de propósito. Deixados no comportamento
 * nativo, o salto do navegador e a interpolação do Lenis discordam sobre onde a
 * página deveria estar e brigam por alguns quadros — era isso que fazia a
 * navegação do menu travar.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      // deixa passar clique com modificador, botão do meio e link de outra página
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = (e.target as HTMLElement)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href) return;

      // aceita "#secao" e também "/#secao" quando já estamos na home
      const hash = href.startsWith("#")
        ? href
        : href.startsWith("/#") && window.location.pathname === "/"
          ? href.slice(1)
          : null;
      if (!hash || hash === "#") return;

      const alvo = document.querySelector(hash);
      if (!alvo) return;

      e.preventDefault();
      lenis.scrollTo(alvo as HTMLElement, { offset: OFFSET_CABECALHO });
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}

/** Cursor customizado: ponto + anel que cresce sobre elementos interativos. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const pos = { x: 0, y: 0, rx: 0, ry: 0 };
    let raf = 0;

    const move = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const el = (e.target as HTMLElement)?.closest("a,button,[data-cursor='grow']");
      ring.current?.classList.toggle("is-active", Boolean(el));
    };

    const loop = () => {
      pos.rx += (pos.x - pos.rx) * 0.16;
      pos.ry += (pos.y - pos.ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate(${pos.x - 3}px, ${pos.y - 3}px)`;
      if (ring.current) {
        const s = ring.current.offsetWidth / 2;
        ring.current.style.transform = `translate(${pos.rx - s}px, ${pos.ry - s}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}

/** Barra de progresso de leitura no topo. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-px bg-paper/5">
      <div ref={bar} className="h-full origin-left bg-gradient-to-r from-brand-500 to-brand-300" />
    </div>
  );
}
