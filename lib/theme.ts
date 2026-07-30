/**
 * Temas do site: escuro (padrão) e azul.
 *
 * A escolha é gravada no navegador. Na primeira visita o tema é sempre o escuro,
 * mesmo que o sistema operacional esteja no modo claro — o escuro é a identidade
 * da marca e a primeira impressão precisa ser previsível.
 */
export type Theme = "dark" | "azul";

export const THEME_KEY = "nexus-theme";
export const DEFAULT_THEME: Theme = "dark";

export const THEME_LABEL: Record<Theme, string> = {
  dark: "escuro",
  azul: "azul",
};

/** O escuro não põe atributo nenhum: é o estado do `:root`. */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === DEFAULT_THEME) root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}

/**
 * Tema realmente aplicado no documento.
 *
 * É esta a fonte de verdade, não o armazenamento: hoje o site publica só o
 * escuro e ignora qualquer escolha antiga que tenha ficado gravada no
 * navegador. Ler o DOM mantém tudo coerente se o alternador voltar.
 */
export function readActiveTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "azul" ? "azul" : DEFAULT_THEME;
}

export function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "azul" ? "azul" : DEFAULT_THEME;
  } catch {
    // modo privado ou armazenamento bloqueado: cai no padrão sem quebrar
    return DEFAULT_THEME;
  }
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* silencioso de propósito: a troca funciona na sessão mesmo sem poder gravar */
  }
}

/**
 * Roda antes da primeira pintura, dentro do <head>.
 *
 * Sem isso o navegador desenha o escuro e só depois o React aplicaria o azul,
 * produzindo um flash do tema errado a cada carregamento.
 */
export const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("${THEME_KEY}")==="azul")document.documentElement.setAttribute("data-theme","azul")}catch(e){}})();`;

/** Evento interno: a animação de partículas precisa reconstruir a cena na troca. */
export const THEME_EVENT = "nexus:theme";
