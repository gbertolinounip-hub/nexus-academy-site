"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  ACCENT_RATIO,
  PALETTE,
  PALETTE_AZUL,
  sampleNexusMark,
  sphereCloud,
} from "@/lib/nexusShape";
import { readActiveTheme, THEME_EVENT, type Theme } from "@/lib/theme";

/**
 * Entrada e permanência da marca.
 *
 * As partículas chegam dispersas, montam o símbolo da Nexus no centro,
 * sustentam por um instante e então deslizam para a direita, onde ficam —
 * menores, respirando devagar e acompanhando o ponteiro de leve.
 */

// linha do tempo, em segundos
const T = { assemble: 1.2, hold: 1.5, park: 2.9 };

const VERT = /* glsl */ `
attribute vec3 aStart;
attribute vec3 aTarget;
attribute vec3 aColor;
attribute float aSize;
attribute float aSeed;

uniform float uTime;
uniform float uAssemble;
uniform float uPixelRatio;
uniform float uGain;

varying vec3 vColor;
varying float vAlpha;

float easeOut(float t){ return 1.0 - pow(1.0 - t, 3.0); }

void main() {
  // atraso por partícula: a marca se escreve, não aparece de uma vez
  float staggered = clamp((uAssemble - aSeed * 0.32) / 0.68, 0.0, 1.0);
  float a = easeOut(staggered);

  vec3 pos = mix(aStart, aTarget, a);

  float t = uTime * 0.5 + aSeed * 6.2831;
  pos += vec3(sin(t) * 0.022, cos(t * 1.3) * 0.022, 0.0);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixelRatio * (26.0 / max(-mv.z, 0.1));

  vColor = aColor;
  vAlpha = a * (0.72 + 0.28 * sin(t * 2.0)) * uGain;
}
`;

const FRAG = /* glsl */ `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;

void main() {
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;
  float core = smoothstep(0.5, 0.0, dist);
  gl_FragColor = vec4(vColor, core * core * vAlpha);
}
`;

export default function NexusIntro({ onSettled }: { onSettled?: () => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const settled = useRef(onSettled);
  settled.current = onSettled;

  // começa no padrão para casar com o HTML do servidor; corrige no primeiro efeito
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readActiveTheme());
    const onTheme = (e: Event) => setTheme((e as CustomEvent<Theme>).detail);
    window.addEventListener(THEME_EVENT, onTheme);
    return () => window.removeEventListener(THEME_EVENT, onTheme);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      settled.current?.();
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    } catch {
      settled.current?.();
      return;
    }

    const COUNT = window.innerWidth < 768 ? 6000 : 14000;
    let disposed = false;
    let teardown = () => {};

    const start = (target: Float32Array) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, host.clientWidth / host.clientHeight, 0.1, 100);
      camera.position.z = 4.4;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(host.clientWidth, host.clientHeight);
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const startPos = sphereCloud(COUNT, 6);
      const colors = new Float32Array(COUNT * 3);
      const sizes = new Float32Array(COUNT);
      const seeds = new Float32Array(COUNT);

      // no escuro as cores somam luz e o ganho compensa a paleta rebaixada;
      // no azul são tinta escura em blending normal, sem ganho nenhum
      const azul = theme === "azul";
      const paleta = azul ? PALETTE_AZUL : PALETTE;
      const ganho = azul ? 1 : 1.9;

      for (let i = 0; i < COUNT; i++) {
        const c =
          paleta[Math.random() > ACCENT_RATIO ? (Math.random() * 4) | 0 : 4 + ((Math.random() * 3) | 0)];
        colors[i * 3] = c[0] * ganho;
        colors[i * 3 + 1] = c[1] * ganho;
        colors[i * 3 + 2] = c[2] * ganho;
        sizes[i] = 0.5 + Math.random() * 1.5;
        seeds[i] = Math.random();
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(target.slice(), 3));
      geo.setAttribute("aTarget", new THREE.BufferAttribute(target, 3));
      geo.setAttribute("aStart", new THREE.BufferAttribute(startPos, 3));
      geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
      geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
      geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

      const uniforms = {
        uTime: { value: 0 },
        uAssemble: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
        uGain: { value: 1 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthWrite: false,
        // aditivo só faz sentido sobre fundo escuro: no azul apagaria a marca
        blending: azul ? THREE.NormalBlending : THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geo, material);
      scene.add(points);

      // destino do pouso: à direita da headline
      const parkTarget = () =>
        host.clientWidth >= 1024
          ? { x: 1.45, y: 0.18, s: 0.66, a: 1 }
          : { x: 0, y: 0.95, s: 0.48, a: 0.5 };
      let park = parkTarget();

      const onResize = () => {
        if (!host.clientWidth) return;
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(host.clientWidth, host.clientHeight);
        uniforms.uPixelRatio.value = renderer.getPixelRatio();
        park = parkTarget();
      };
      window.addEventListener("resize", onResize);

      const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
      const onPointer = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        ptr.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        ptr.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      // fora da tela não gasta GPU.
      // lê a ÚLTIMA entrada do lote: o navegador pode enfileirar "saiu" e "entrou"
      // no mesmo callback, e usar a primeira deixaria `visible` travado em false.
      let visible = true;
      const io = new IntersectionObserver(
        (es) => (visible = es[es.length - 1].isIntersecting),
        { threshold: 0 },
      );
      io.observe(host);

      const clock = new THREE.Clock();
      const ease = (v: number) => 1 - Math.pow(1 - v, 3);
      let raf = 0;
      let announced = false;

      const tick = () => {
        raf = requestAnimationFrame(tick);
        const e = clock.getElapsedTime();
        if (!visible) return;

        uniforms.uTime.value = e;
        uniforms.uAssemble.value = Math.min(1.6, e / T.assemble);

        // 0 durante a montagem, 1 quando já estacionou
        const p = ease(Math.max(0, Math.min(1, (e - T.hold) / (T.park - T.hold))));
        ptr.x += (ptr.tx - ptr.x) * 0.05;
        ptr.y += (ptr.ty - ptr.y) * 0.05;

        points.position.x = park.x * p + ptr.x * 0.12 * p;
        points.position.y = park.y * p + Math.sin(e * 0.5) * 0.05 * p + ptr.y * 0.08 * p;
        points.scale.setScalar(1 + (park.s - 1) * p);
        points.rotation.y = ptr.x * 0.18 * p + Math.sin(e * 0.14) * 0.05;
        points.rotation.x = -ptr.y * 0.1 * p;
        uniforms.uGain.value = 1 - (1 - park.a) * p;

        renderer.render(scene, camera);

        if (!announced && e > T.hold) {
          announced = true;
          settled.current?.();
        }
      };
      tick();

      return () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointer);
        geo.dispose();
        material.dispose();
      };
    };

    sampleNexusMark(COUNT, 2.7).then((target) => {
      if (!disposed) teardown = start(target);
    });

    return () => {
      disposed = true;
      teardown();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
    // a cena inteira é refeita na troca de tema: paleta e blending mudam junto
  }, [theme]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="absolute inset-0 h-full w-full [&>canvas]:!h-full [&>canvas]:!w-full"
    />
  );
}
