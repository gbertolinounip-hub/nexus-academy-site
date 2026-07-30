"use client";

import { useEffect, useRef, useState } from "react";

/** Scroll suave nativo: evita disputar o controle do scroll com o navegador. */
export function SmoothScroll() {
  return null;
}

/** Cursor customizado limitado a desktop com ponteiro fino. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canUseCursor);
    if (!canUseCursor) return;

    const pos = { x: 0, y: 0, rx: 0, ry: 0 };
    let raf = 0;

    const move = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const el = (e.target as HTMLElement)?.closest("a,button,[data-cursor='grow']");
      ring.current?.classList.toggle("is-active", Boolean(el));
      dot.current?.classList.add("is-visible");
      ring.current?.classList.add("is-visible");
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

  if (!enabled) return null;

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
