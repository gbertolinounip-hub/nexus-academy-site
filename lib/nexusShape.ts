/**
 * Converte o símbolo da Nexus Academy em posições 3D para o campo de partículas.
 *
 * A silhueta vem de `public/brand/nexus-mask.png` — a própria logo enviada,
 * recortada e reduzida a um canal alpha. Como a imagem é servida da mesma
 * origem, o canvas não fica "tainted" e o alpha pode ser lido diretamente.
 */

const MASK_SRC = "/brand/nexus-mask.png";
const RES = 340; // resolução de amostragem

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Posições que reproduzem a marca. Cai para um "X" simples se a imagem falhar. */
export async function sampleNexusMark(count: number, spread = 2.9): Promise<Float32Array> {
  const out = new Float32Array(count * 3);
  let hits: number[] = [];

  try {
    const img = await loadImage(MASK_SRC);
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = RES;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) throw new Error("sem contexto 2d");
    ctx.drawImage(img, 0, 0, RES, RES);
    const data = ctx.getImageData(0, 0, RES, RES).data;
    for (let i = 0; i < RES * RES; i++) {
      if (data[i * 4 + 3] > 140) hits.push(i);
    }
  } catch {
    hits = [];
  }

  if (!hits.length) return fallbackCross(count, spread);

  for (let i = 0; i < count; i++) {
    const idx = hits[(Math.random() * hits.length) | 0];
    const x = idx % RES;
    const y = (idx / RES) | 0;
    out[i * 3] = ((x + Math.random()) / RES - 0.5) * spread;
    out[i * 3 + 1] = -((y + Math.random()) / RES - 0.5) * spread;
    out[i * 3 + 2] = (Math.random() - 0.5) * 0.24; // profundidade: a marca ganha volume
  }
  return out;
}

/** Plano B puramente geométrico, caso a máscara não carregue. */
function fallbackCross(count: number, spread: number): Float32Array {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random() - 0.5;
    const arm = i % 2 === 0 ? 1 : -1;
    out[i * 3] = t * spread + (Math.random() - 0.5) * 0.08;
    out[i * 3 + 1] = t * spread * arm + (Math.random() - 0.5) * 0.08;
    out[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
  }
  return out;
}

/** Nuvem inicial: esfera dispersa de onde as partículas se materializam. */
export function sphereCloud(count: number, radius = 5.5): Float32Array {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random() * 2 - 1;
    const theta = Math.random() * Math.PI * 2;
    const r = radius * (0.55 + Math.random() * 0.45);
    const s = Math.sqrt(1 - u * u);
    out[i * 3] = r * s * Math.cos(theta);
    out[i * 3 + 1] = r * s * Math.sin(theta) * 0.7;
    out[i * 3 + 2] = r * u * 0.5 - 1.5;
  }
  return out;
}

/** Estado final: campo de rede aberto, para onde tudo se espalha no scroll. */
export function networkField(count: number): Float32Array {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    out[i * 3] = (Math.random() - 0.5) * 14;
    out[i * 3 + 1] = (Math.random() - 0.5) * 8;
    out[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
  }
  return out;
}

/**
 * Paleta rebaixada de propósito: com blending aditivo as cores somam,
 * e o hero precisa ficar atrás do texto, não competir com ele.
 * Os acentos do gradiente NexusIA entram dessaturados e em minoria.
 */
export const PALETTE: [number, number, number][] = [
  [0.13, 0.34, 0.55], // brand-600
  [0.18, 0.45, 0.68], // brand-500
  [0.26, 0.55, 0.78], // brand-400
  [0.42, 0.64, 0.85], // realce discreto
  [0.14, 0.44, 0.42], // NexusIA · teal (dessaturado)
  [0.42, 0.14, 0.32], // NexusIA · magenta (dessaturado)
  [0.46, 0.36, 0.12], // NexusIA · âmbar (dessaturado)
];

/**
 * Paleta do tema azul.
 *
 * Aqui o fundo é claro, e blending aditivo sobre fundo claro simplesmente
 * apaga a marca: somar luz ao que já é quase branco dá branco. Neste tema as
 * partículas viram tinta escura em blending normal, e por isso os valores são
 * baixos em vez de altos.
 */
export const PALETTE_AZUL: [number, number, number][] = [
  [0.11, 0.24, 0.45], // azul profundo
  [0.15, 0.32, 0.58],
  [0.2, 0.42, 0.7],
  [0.3, 0.52, 0.78],
  [0.09, 0.42, 0.38], // NexusIA · teal
  [0.55, 0.1, 0.36], // NexusIA · magenta
  [0.6, 0.44, 0.08], // NexusIA · âmbar
];

/** Proporção de partículas que recebem cor de acento. */
export const ACCENT_RATIO = 0.04;
