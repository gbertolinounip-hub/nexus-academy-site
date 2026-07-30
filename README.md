# Nexus Academy — site institucional

Landing page B2B para captação de instituições de ensino superior. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind, com hero WebGL em three.js e animações via `motion`.

Build validado: `next build` compila sem erros e a página é pré-renderizada como conteúdo estático.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy recomendado: Vercel (`vercel --prod`) ou Netlify. Nenhuma variável de ambiente é necessária.

## Estrutura

```
app/
  layout.tsx        metadados, fontes (Space Grotesk + Inter)
  page.tsx          composição das seções
  globals.css       design system em CSS + camadas Tailwind
components/
  Chrome.tsx        cursor customizado, scroll suave (Lenis), barra de progresso
  Nav.tsx           header fixo + menu mobile
  Hero.tsx          hero limpo: headline em cascata, filete, pilares, marquee
  NexusIntro.tsx    animação de entrada em WebGL — monta a marca e se dissolve
  Problem.tsx       diagnóstico: registro sem leitura
  Modules.tsx       6 áreas da plataforma, com brilho seguindo o cursor
  Intelligence.tsx  Inteligência de Aprendizagem, com a matriz de desempenho real
  ProductMatrix.tsx tela do produto: 6 abas (Questões…Módulo), legenda de faixas e matriz aluno × linha
  Psychometrics.tsx análise de itens: dificuldade, discriminação, ponto-bisserial, KR-20
  Flow.tsx          ciclo da avaliação em 6 etapas, sincronizado com o scroll
  NexusIA.tsx       seção-destaque da IA + formatos de avaliação
  Synthesis.tsx     tela real das sínteses pedagógicas assistidas
  Profiles.tsx      benefícios por perfil (professor, coordenador, gestor, aluno)
  Infra.tsx         segurança e infraestrutura: AWS, criptografia, LGPD, monitoramento
  Security.tsx      diferenciais + FAQ
  CTA.tsx           formulário de demonstração
  Footer.tsx
  ui/AppWindow.tsx  moldura clara de "janela do produto" sobre o fundo escuro
lib/
  content.ts        TODO o texto do site — edite aqui, não nos componentes
  product.ts        dados das telas do produto (faixas, matrizes, itens, sínteses)
  nexusShape.ts     amostragem da logo em pontos 3D
public/brand/
  nexus-simbolo.png       símbolo original (nav e rodapé)
  nexus-mask.png          silhueta em alpha usada pelo hero
  nexus-ia-loop.png       laço colorido do NexusIA, recortado do fundo branco
  nexus-ia-wordmark.png   wordmark NexusIA com fundo removido (uso em fundo claro)
  nexus-academy-lockup.jpg / nexus-academy-header.png
```

## Como a entrada funciona

A animação é **entrada, não plano de fundo**. `lib/nexusShape.ts` carrega `public/brand/nexus-mask.png` — a logo reduzida a um canal alpha —, desenha num canvas fora de tela e converte os pixels opacos em ~14.000 posições 3D. Como o arquivo é servido da mesma origem, o canvas não fica *tainted*.

Linha do tempo (constante `T` em `components/NexusIntro.tsx`):

| tempo | o que acontece |
| --- | --- |
| 0 – 1,2s | partículas chegam dispersas e montam o símbolo, com atraso individual |
| 1,2 – 1,5s | a marca sustenta |
| 1,35s | o texto começa a subir, enquanto a marca ainda existe |
| 1,5 – 2,45s | dissolução radial para fora, com recuo de câmera |
| 2,6s | `onDone` dispara, o React desmonta o canvas e libera a GPU |

Depois disso o hero fica limpo: um brilho azul difuso à direita, a grade em 35% e tipografia. Não há mais nada animando atrás do texto.

Ajustes rápidos:

- ritmo: objeto `T` no topo de `components/NexusIntro.tsx` (mexeu aqui, ajuste `base` em `Hero.tsx`)
- densidade: constante `COUNT` no mesmo arquivo
- silhueta: troque `public/brand/nexus-mask.png` (PNG quadrado, marca opaca, fundo transparente)
- cores: `PALETTE` em `lib/nexusShape.ts` e `tailwind.config.ts`

Fallbacks tratados: sem WebGL a entrada é pulada e o texto aparece direto; `prefers-reduced-motion` desliga a animação e o scroll suave; em telas < 768px a contagem de partículas cai.

## Posicionamento

O site vende gestão acadêmica para cursos superiores da área da saúde. A tese é: a instituição já registra tudo, o que falta é leitura. Por isso o argumento sobe em três degraus — diagnóstico (registro sem leitura) → Inteligência de Aprendizagem (a prova vira dado pedagógico) → NexusIA (a IA interpreta, o docente decide).

Todo texto vive em `lib/content.ts`. Nenhum número de resultado é afirmado — não há métricas de eficiência inventadas na página.

## Telas do produto

Três seções reproduzem a interface real em HTML, não em imagem: a matriz de desempenho (`ProductMatrix`), a análise de itens (`Psychometrics`) e as sínteses da NexusIA (`Synthesis`). Todas usam a moldura clara de `ui/AppWindow.tsx`, que contrasta com o fundo escuro do site.

Vantagem sobre print: as abas funcionam de verdade — o visitante clica em Competência, Bloom ou Miller e vê a matriz mudar, e troca o tipo de síntese para ler outro texto gerado. Os dados vivem em `lib/product.ts` e vieram das telas do sistema, com os alunos já anonimizados na origem. Cada janela declara "dados de demonstração" no rodapé.

## Alegações de segurança — confirmar antes de publicar

A seção `Infra.tsx` afirma AWS, criptografia em repouso e em trânsito, backup com redundância geográfica, conformidade LGPD, isolamento por contexto, trilha de auditoria e monitoramento 24/7. Nada disso é opinião de marketing: são compromissos contratuais que a instituição vai cobrar. Confirme cada item com quem cuida da infraestrutura e ajuste o texto em `lib/content.ts` → `infra` antes de ir ao ar.

## Pendências antes de publicar

1. **Formulário** — `components/CTA.tsx` hoje só troca o estado local. Conectar a uma rota `app/api/demo/route.ts`, ao RD Station/HubSpot ou a um serviço como Resend.
2. **Prova social** — reservar uma faixa de logos de instituições entre `Profiles` e `Security` assim que houver autorização de uso de marca.
3. **Ambiente de demonstração** — um login público com dados fictícios converte ainda mais que a reprodução das telas.
4. **Resultados** — quando houver dado de piloto, criar uma seção de métricas com fonte declarada.
5. **OG image** — adicionar `app/opengraph-image.png` (1200×630).
6. **Analytics** — Vercel Analytics ou Plausible; marcar conversão no envio do formulário.
7. **Domínio e favicon** — trocar `metadataBase` em `app/layout.tsx` e adicionar `app/icon.png`.
