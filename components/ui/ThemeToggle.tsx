"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  readActiveTheme,
  storeTheme,
  THEME_EVENT,
  THEME_LABEL,
  type Theme,
} from "@/lib/theme";

/**
 * Alternador escuro ↔ azul.
 *
 * DORMENTE: hoje o site publica só o escuro e este componente não está montado
 * em lugar nenhum. Fica guardado, junto do tema azul em globals.css, para o dia
 * em que a troca voltar. Para religar bastam duas coisas: montar <ThemeToggle />
 * no Nav e devolver o THEME_INIT_SCRIPT ao <head> em app/layout.tsx.
 *
 * Com dois temas não há o que rotular: um ícone de 34px basta, e é o que cabe no
 * cabeçalho. O `aria-label` anuncia sempre o destino, nunca o estado atual.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  // começa no padrão para casar com o HTML do servidor e não dar erro de hidratação
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readActiveTheme());
  }, []);

  const alvo: Theme = theme === "azul" ? "dark" : "azul";
  const rotulo = `Mudar para o tema ${THEME_LABEL[alvo]}`;

  const trocar = () => {
    setTheme(alvo);
    applyTheme(alvo);
    storeTheme(alvo);
    // a animação do hero tem paleta própria por tema e precisa se refazer
    window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: alvo }));
  };

  return (
    <button
      type="button"
      onClick={trocar}
      title={rotulo}
      aria-label={rotulo}
      aria-pressed={theme === "azul"}
      className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border border-paper/12 text-fog transition-colors duration-300 hover:border-paper/35 hover:text-paper ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        {/* a metade cheia gira para indicar o tema de destino */}
        <path
          d="M12 3a9 9 0 0 1 0 18z"
          fill="currentColor"
          className="origin-center transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)]"
          style={{ transform: theme === "azul" ? "rotate(180deg)" : "none" }}
        />
      </svg>
    </button>
  );
}
