/**
 * Dados de demonstração reproduzindo as telas reais do Nexus Academy.
 * Os alunos já vêm anonimizados no próprio produto ("Aluno Fisio A10").
 * Substituir por capturas ou por uma conta de demonstração quando houver.
 */

export const BANDS = [
  { key: "critico", label: "Crítico", range: "0% a 39,99%", swatch: "#fecaca", text: "#b91c1c", bg: "#fee2e2" },
  { key: "baixo", label: "Baixo", range: "40% a 59,99%", swatch: "#fed7aa", text: "#c2410c", bg: "#ffedd5" },
  { key: "moderado", label: "Moderado", range: "60% a 74,99%", swatch: "#fde68a", text: "#a16207", bg: "#fef3c7" },
  { key: "bom", label: "Bom", range: "75% a 89,99%", swatch: "#bfdbfe", text: "#1d4ed8", bg: "#dbeafe" },
  { key: "excelente", label: "Excelente", range: "90% a 100%", swatch: "#bbf7d0", text: "#15803d", bg: "#dcfce7" },
] as const;

export const EXTRA_BANDS = [
  { key: "branco", label: "Branco", swatch: "#ffffff" },
  { key: "invalida", label: "Inválida", swatch: "#fbcfe8" },
  { key: "sem-dado", label: "Sem dado", swatch: "#ffffff" },
] as const;

export function band(v: number) {
  if (v >= 90) return BANDS[4];
  if (v >= 75) return BANDS[3];
  if (v >= 60) return BANDS[2];
  if (v >= 40) return BANDS[1];
  return BANDS[0];
}

export const STUDENTS = [
  { ra: "20260010", name: "Aluno 1" },
  { ra: "20260004", name: "Aluno 2" },
  { ra: "20260002", name: "Aluno 3" },
  { ra: "20260011", name: "Aluno 4" },
  { ra: "20260012", name: "Aluno 5" },
  { ra: "20260014", name: "Aluno 6" },
  { ra: "20260005", name: "Aluno 7" },
  { ra: "20260006", name: "Aluno 8" },
  { ra: "20260008", name: "Aluno 9" },
  { ra: "20260013", name: "Aluno 10" },
  { ra: "20260015", name: "Aluno 11" },
  { ra: "20260007", name: "Aluno 12" },
];

type Matrix = { rowLabel: string; rows: { label: string; values: number[] }[] };

export const MATRICES: Record<string, Matrix> = {
  Questões: {
    rowLabel: "Questão",
    rows: [
      { label: "Q1", values: [100, 100, 100, 0, 100, 100, 0, 100, 100, 0, 0, 0] },
      { label: "Q2", values: [100, 100, 0, 100, 0, 0, 100, 0, 0, 100, 100, 100] },
      { label: "Q3", values: [100, 100, 100, 0, 100, 0, 0, 100, 0, 100, 100, 100] },
      { label: "Q4", values: [100, 100, 100, 0, 100, 100, 0, 100, 100, 0, 100, 0] },
      { label: "Q5", values: [100, 100, 100, 100, 0, 100, 100, 0, 100, 100, 0, 100] },
      { label: "Q6", values: [100, 100, 100, 100, 0, 100, 100, 0, 100, 100, 0, 100] },
      { label: "Q7", values: [100, 100, 0, 100, 100, 0, 100, 100, 0, 100, 100, 100] },
      { label: "Q8", values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 100, 0] },
      { label: "Q9", values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 100] },
      { label: "Q10", values: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100] },
      { label: "Q11", values: [100, 100, 0, 100, 100, 100, 100, 100, 100, 0, 100, 0] },
      { label: "Q12", values: [100, 100, 100, 100, 0, 100, 100, 0, 100, 100, 100, 100] },
    ],
  },
  Disciplina: {
    rowLabel: "Disciplina",
    rows: [
      { label: "Pediatria", values: [100, 100, 78.57, 71.43, 71.43, 71.43, 64.29, 71.43, 71.43, 64.29, 64.29, 64.29] },
      { label: "Clínica Médica", values: [100, 100, 75, 62.5, 75, 62.5, 75, 62.5, 75, 62.5, 75, 75] },
      { label: "Cirurgia Geral", values: [100, 100, 66.67, 83.33, 66.67, 83.33, 83.33, 66.67, 66.67, 83.33, 50, 66.67] },
    ],
  },
  Competência: {
    rowLabel: "Competência",
    rows: [
      { label: "Avaliação", values: [100, 100, 83.33, 50, 66.67, 83.33, 50, 66.67, 83.33, 33.33, 50, 33.33] },
      { label: "Execução", values: [100, 100, 83.33, 66.67, 66.67, 50, 66.67, 66.67, 50, 83.33, 83.33, 83.33] },
      { label: "Raciocínio clínico", values: [100, 100, 62.5, 87.5, 75, 75, 87.5, 75, 75, 75, 62.5, 75] },
    ],
  },
  Bloom: {
    rowLabel: "Bloom",
    rows: [
      { label: "Lembrar", values: [100, 100, 69.23, 76.92, 69.23, 76.92, 76.92, 69.23, 76.92, 61.54, 53.85, 61.54] },
      { label: "Aplicar", values: [100, 100, 85.71, 57.14, 71.43, 57.14, 57.14, 71.43, 57.14, 71.43, 85.71, 71.43] },
    ],
  },
  Miller: {
    rowLabel: "Miller",
    rows: [
      { label: "Sabe", values: [100, 100, 80, 73.33, 73.33, 73.33, 73.33, 66.67, 73.33, 66.67, 60, 66.67] },
      { label: "Sabe como", values: [100, 100, 72, 68, 64, 68, 68, 68, 64, 68, 64, 68] },
    ],
  },
  Módulo: {
    rowLabel: "Módulo",
    rows: [
      { label: "Módulo I · Avaliação funcional", values: [100, 100, 81.25, 68.75, 75, 75, 68.75, 68.75, 75, 62.5, 62.5, 62.5] },
      { label: "Módulo II · Intervenção", values: [100, 100, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70] },
    ],
  },
};

export const MATRIX_TABS = Object.keys(MATRICES);

export type ItemRow = {
  q: string;
  acerto: string;
  esperada: string;
  real: string;
  realNota: string;
  disc: string;
  discLabel: string;
  bis: string;
  bisLabel: string;
  brancos: string;
  invalidas: string;
};

export const ITEMS: ItemRow[] = [
  { q: "Q1", acerto: "60,00%", esperada: "Moderada", real: "Fácil", realNota: "60,00% de acerto", disc: "1,000", discLabel: "Excelente", bis: "0,644", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
  { q: "Q2", acerto: "53,33%", esperada: "Moderada", real: "Moderada", realNota: "53,33% de acerto", disc: "1,000", discLabel: "Excelente", bis: "0,604", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
  { q: "Q3", acerto: "53,33%", esperada: "Fácil", real: "Moderada", realNota: "53,33% de acerto", disc: "0,500", discLabel: "Excelente", bis: "0,367", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
  { q: "Q4", acerto: "66,67%", esperada: "Moderada", real: "Fácil", realNota: "66,67% de acerto", disc: "0,750", discLabel: "Excelente", bis: "0,452", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
  { q: "Q5", acerto: "60,00%", esperada: "Fácil", real: "Fácil", realNota: "60,00% de acerto", disc: "0,750", discLabel: "Excelente", bis: "0,520", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
  { q: "Q6", acerto: "60,00%", esperada: "Difícil", real: "Fácil", realNota: "60,00% de acerto", disc: "0,500", discLabel: "Excelente", bis: "0,459", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
  { q: "Q7", acerto: "60,00%", esperada: "Moderada", real: "Fácil", realNota: "60,00% de acerto", disc: "0,750", discLabel: "Excelente", bis: "0,343", bisLabel: "Boa", brancos: "0,00%", invalidas: "0,00%" },
];

export const READING = {
  title: "Leitura pedagógica",
  body:
    "Há itens críticos que merecem revisão antes de decisões acadêmicas. Questões com discriminação negativa devem ser verificadas quanto ao gabarito, clareza e alinhamento ao conteúdo.",
  note: "KR-20 adequada; interprete o coeficiente junto ao tamanho e à composição da turma.",
};

export const SYNTHESIS = {
  title: "Sínteses pedagógicas assistidas",
  lead:
    "Transforme os indicadores calculados pelo Nexus em materiais de apoio para planejamento, devolutiva, intervenção pedagógica e revisão de itens.",
  disclaimer:
    "Texto gerado por IA com base nos indicadores da avaliação. Revise antes de utilizar em documentos oficiais ou devolutivas.",
  badge: "Sugestão revisável",
  placeholder:
    "Ex.: Gere uma atividade para 40 minutos, com foco em raciocínio clínico e mobilização articular, para alunos do 3º semestre.",
  tabs: [
    {
      label: "Síntese executiva",
      heading: "Síntese executiva",
      body:
        "A Avaliação teste 2, prova objetiva publicada em 17/07/2026, processou resultados de 15 estudantes no Estágio Ortopedia. A turma apresentou média de 6,57, mediana de 7 e percentual médio de 65,67%. Foram registrados 197 lançamentos válidos, sem questões em branco ou anuladas.",
    },
    {
      label: "Intervenção docente",
      heading: "Intervenção docente",
      body:
        "O desempenho mais frágil concentra-se na competência Avaliação, com quatro estudantes abaixo de 50%. Sugere-se retomada dirigida de testes especiais de ombro e joelho, com prática supervisionada em duplas antes da próxima avaliação prática.",
    },
    {
      label: "Devolutiva para turma",
      heading: "Devolutiva para turma",
      body:
        "A turma demonstrou domínio consistente nos itens de Lembrar, mas rendimento inferior nas questões de Aplicar. Isso indica que o conteúdo está memorizado, porém ainda não transferido para o raciocínio clínico diante do caso concreto.",
    },
    {
      label: "Revisão dos itens",
      heading: "Revisão dos itens",
      body:
        "Cinco dos sete itens divergiram da dificuldade prevista: quatro saíram mais fáceis e um mais difícil. A Q6 foi planejada como difícil e registrou 60% de acerto; a Q3 era esperada como fácil e ficou moderada. Vale revisar o calibre das questões antes da próxima aplicação.",
    },
    {
      label: "Atividades Bloom/Miller",
      heading: "Atividades Bloom/Miller",
      body:
        "Proposta de atividade de 40 minutos no nível “sabe como” de Miller: três estações de caso clínico com progressão de dificuldade, rubrica por competência e rodízio cronometrado, seguidas de discussão coletiva dos achados.",
    },
  ],
};
