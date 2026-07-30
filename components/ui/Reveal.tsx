"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Título que revela palavra por palavra.
 *
 * Quem observa a tela é o invólucro de fora, não cada palavra.
 *
 * Isso não é detalhe: a palavra começa deslocada 110% para baixo dentro de um
 * contêiner com `overflow-hidden`, ou seja, totalmente recortada por um
 * ancestral. O IntersectionObserver leva o recorte em conta e reporta esse
 * elemento como fora da tela — então a animação que o traria de volta nunca
 * disparava, e o título ficava invisível para sempre. As palavras agora herdam
 * o estado por variante do pai, que nunca é recortado.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial={reduced ? false : "oculto"}
      whileInView="visivel"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{ oculto: { y: "110%" }, visivel: { y: 0 } }}
            transition={{ duration: 0.85, delay: delay + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
