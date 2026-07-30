export const nav = [
  { label: "A plataforma", href: "/#plataforma" },
  { label: "Inteligência", href: "/#inteligencia" },
  { label: "NexusIA", href: "/#nexus-ia" },
  { label: "Segurança", href: "/#infraestrutura" },
  { label: "Sobre o Nexus", href: "/sobre" },
];

/** O topo atende quem já é cliente; a demonstração continua nos CTAs da página. */
export const navCta = {
  label: "Acesso institucional",
  href: "https://app.nexusacad.com.br/login",
};

/**
 * Fica junto do acesso, não na lista do menu: instalar o app é assunto de quem
 * já usa o sistema, e como sexto item competiria com a navegação de produto.
 */
export const navInstall = {
  label: "Instale o app",
  href: "/instalar",
};

/** Destino dos pedidos de demonstração enquanto não houver CRM conectado. */
export const contactEmail = "contato@nexusacad.com.br";

export const hero = {
  eyebrow: "Gestão acadêmica inteligente · cursos da área da saúde",
  title: ["Registrar é fácil.", "Entender", "muda a gestão."],
  lead:
    "O Nexus Academy conecta gestão acadêmica de disciplinas, estágios, clínica supervisionada, avaliação por competências e inteligência de aprendizagem guiada (Nexus IA®) em uma única plataforma, transformando dados educacionais em decisões pedagógicas mais seguras e estratégicas.",
  primary: { label: "Agendar demonstração", href: "/#demo" },
  /**
   * O CTA secundário fecha com a assinatura da NexusIA em vez do nome escrito.
   * `label` continua existindo porque é ele que vai no aria-label: o logo é
   * imagem, e sem isso o leitor de tela anunciaria só "Conheça a".
   */
  secondary: {
    prefix: "Conheça a",
    label: "Conheça a NexusIA",
    /** um arquivo por tema: letras claras no escuro, letras escuras no azul */
    logoOnDark: "/brand/nexus-ia-wordmark-dark-bg.png",
    logoOnLight: "/brand/nexus-ia-wordmark-light-bg.png",
    href: "/#nexus-ia",
  },
  pillars: [
    { value: "Bloom + Miller", label: "avaliação mapeada por competência e nível de desempenho" },
    { value: "Clínica", label: "pacientes, casos e evoluções organizados por ciclo acadêmico" },
    { value: "IA revisável", label: "a NexusIA sugere e o docente valida, sempre" },
  ],
};

export const marquee = [
  "Estágio supervisionado",
  "Clínica supervisionada",
  "Avaliação por competências",
  "Blueprint",
  "Taxonomia de Bloom",
  "Pirâmide de Miller",
  "Análise psicométrica",
  "Mapas de aprendizagem",
  "Auditoria acadêmica",
  "Feedback individual",
  "Plano de estudo",
  "NexusIA",
];

export const problems = {
  eyebrow: "O diagnóstico",
  title: "O problema não é falta de registro. É falta de leitura.",
  lead:
    "A maioria das instituições já anota tudo, em planilhas, formulários e sistemas que não conversam. O que falta é transformar esse registro em informação útil para quem ensina, coordena e decide.",
  items: [
    {
      n: "01",
      title: "Processos fragmentados",
      body:
        "Avaliação numa planilha, estágio em outra, clínica no papel, documento no e-mail. Nada se cruza, e a trajetória do aluno nunca aparece inteira.",
    },
    {
      n: "02",
      title: "Avaliação que só classifica",
      body:
        "A prova vira nota e a análise para aí. Ninguém sabe qual questão falhou, qual competência não foi atingida ou qual conteúdo precisa ser retomado.",
    },
    {
      n: "03",
      title: "Clínica sem rastro institucional",
      body:
        "Atendimentos registrados manualmente se perdem entre semestres. O histórico do paciente morre junto com o ciclo acadêmico do aluno que o atendeu.",
    },
    {
      n: "04",
      title: "Auditoria como força-tarefa",
      body:
        "Toda avaliação institucional vira corrida para reconstruir evidências que deveriam estar organizadas desde o começo do ciclo.",
    },
  ],
};

export const modules = {
  eyebrow: "A plataforma",
  title: "Seis áreas. Uma trajetória acadêmica inteira.",
  lead:
    "Cada área resolve um processo real do curso. Juntas, dão à coordenação uma visão integrada da formação do aluno e da qualidade do ensino.",
  items: [
    {
      id: "area-estagios",
      tag: "Formação prática",
      title: "Estágios e avaliações",
      body:
        "Acompanhamento do desempenho em estágio supervisionado com critérios avaliativos organizados, lançamento por professores e supervisores e histórico de evolução visualizável por área, semestre, turma e aluno.",
      bullets: ["Critérios padronizados", "Lançamento por supervisor", "Histórico de evolução"],
    },
    {
      id: "area-clinica",
      tag: "Área da saúde",
      title: "Clínica supervisionada",
      body:
        "Organiza pacientes, casos clínicos, registros, evoluções e indicadores de atendimento. O cadastro do paciente é permanente; o caso clínico é vinculado ao ciclo acadêmico, de modo que o histórico institucional sobrevive à troca de turma.",
      bullets: ["Paciente x caso clínico", "Evoluções e registros", "Indicadores de atendimento"],
    },
    {
      id: "area-documentos",
      tag: "Conformidade",
      title: "Documentos acadêmicos",
      body:
        "Gestão de documentos obrigatórios, registros institucionais, relatórios e fluxos ligados à vida acadêmica e aos estágios, reduzindo retrabalho e dispersão de arquivos.",
      bullets: ["Documentos obrigatórios", "Fluxos de estágio", "Organização central"],
    },
    {
      id: "area-indicadores",
      tag: "Governança",
      title: "Indicadores e auditoria",
      body:
        "Coordenação e gestão superior consultam dados consolidados, históricos de lançamento, semestres encerrados, relatórios e exportações, com trilha para auditoria interna.",
      bullets: ["Dados consolidados", "Semestres encerrados", "Exportações auditáveis"],
    },
    {
      id: "area-inteligencia",
      tag: "Diferencial",
      title: "Inteligência de Aprendizagem",
      body:
        "Transforma avaliações em dados pedagógicos: desempenho por questão, disciplina, competência, Taxonomia de Bloom e Pirâmide de Miller, com mapas de aprendizagem e recomendações.",
      bullets: ["Blueprint", "Análise por competência", "Mapas de aprendizagem"],
    },
    {
      id: "area-ia",
      tag: "IA",
      title: "NexusIA",
      body:
        "Camada de inteligência artificial que interpreta os indicadores produzidos pelo próprio sistema e devolve sínteses, análises, recomendações e planos de ação, sempre como sugestão revisável, que deve ser aprovada por um professor para prosseguir.",
      bullets: ["Análise de provas", "Pré-blueprint", "Correção assistida"],
      accent: true,
    },
  ],
};

export const intelligence = {
  eyebrow: "Inteligência de Aprendizagem",
  title: "A prova acabou. É aqui que ela começa a ensinar.",
  lead:
    "O módulo vai muito além da correção. A instituição cadastra a avaliação, importa o blueprint, registra as respostas e processa os resultados. O sistema devolve então leitura pedagógica em várias camadas ao mesmo tempo.",
  reveals: [
    "quais conteúdos tiveram melhor e pior desempenho",
    "quais questões foram mais difíceis",
    "quais itens precisam de revisão",
    "quais competências exigem retomada",
    "quais alunos estão em risco acadêmico",
    "quais padrões se repetem ao longo do tempo",
    "quais ações pedagógicas podem ser planejadas",
  ],
  frameworks: [
    { k: "Bloom", d: "Nível cognitivo exigido por cada questão, do lembrar ao criar." },
    { k: "Miller", d: "Do saber ao fazer: onde a avaliação toca a prática profissional." },
    { k: "Competências", d: "Desempenho lido pela matriz do curso, não só pela disciplina." },
    { k: "Psicometria", d: "Dificuldade e comportamento dos itens em provas objetivas." },
  ],
  outputs: [
    "Relatórios institucionais",
    "Feedback individual",
    "Mapas de aprendizagem",
    "Recomendações pedagógicas",
  ],
  closing:
    "O resultado é uma cultura de avaliação formativa: a prova deixa de apenas classificar e passa a orientar intervenção, recuperação e ajuste curricular.",
  // a leitura não acontece só no dia do resultado
  windows: {
    title: "A leitura acompanha o semestre inteiro",
    items: [
      {
        when: "Antes da prova",
        body:
          "O blueprint declara conteúdos, competências e dificuldade esperada de cada item. A avaliação nasce alinhada ao que o curso pretende medir, não ao que sobrou do plano de aula.",
      },
      {
        when: "Depois da prova",
        body:
          "Os resultados abrem por questão, disciplina, competência, Bloom e Miller. A devolutiva sai da nota e passa a apontar o que precisa ser retomado, com quem e em qual nível.",
      },
      {
        when: "Ao longo do curso",
        body:
          "As mesmas leituras se acumulam semestre após semestre. O que era a foto de uma turma vira a trajetória de uma formação, com padrões que só aparecem no tempo.",
      },
    ],
  },
};

export const psychometrics = {
  eyebrow: "Análise psicométrica",
  title: "A prova também é avaliada.",
  lead:
    "Nas provas objetivas, cada item é analisado antes de virar decisão acadêmica. O sistema compara a dificuldade prevista no blueprint com a que de fato aconteceu, calcula discriminação, ponto-bisserial e consistência interna, e explica o que aquilo significa em linguagem pedagógica.",
  metrics: [
    {
      k: "Dificuldade esperada × real",
      d: "O blueprint declara a dificuldade prevista para cada item; o sistema mede a que de fato aconteceu e mostra as duas lado a lado. Divergência é sinal de item mal calibrado.",
    },
    {
      k: "Discriminação",
      d: "O quanto o item separa quem domina o conteúdo de quem não domina. Discriminação fraca sinaliza questão que não mede o que deveria.",
    },
    {
      k: "Ponto-bisserial",
      d: "Correlação entre acertar o item e ir bem na prova inteira. Valor negativo é alerta vermelho: os melhores alunos erraram mais.",
    },
    {
      k: "KR-20",
      d: "Consistência interna da avaliação, sempre interpretada junto ao tamanho e à composição da turma.",
    },
  ],
  // o que a própria tabela ao lado está dizendo
  findings: {
    title: "O que esta prova revelou",
    items: [
      { n: "5 de 7", k: "itens fora do previsto", d: "Quatro saíram mais fáceis e um mais difícil que o blueprint declarava." },
      { n: "100%", k: "discriminação excelente", d: "Todos os itens separam bem quem domina o conteúdo de quem não domina." },
      { n: "0", k: "questões em branco ou anuladas", d: "Os sete itens entram íntegros na análise, sem perda de amostra." },
    ],
    bridge:
      "É essa leitura que a NexusIA transforma em devolutiva para a turma e em plano de revisão dos itens, na seção seguinte.",
  },
};

export const nexusIA = {
  eyebrow: "NexusIA",
  title: "Inteligência artificial aplicada à gestão pedagógica.",
  lead:
    "A NexusIA é a camada de IA integrada ao Nexus Academy. Ela apoia professores, coordenadores e gestores na interpretação dos dados acadêmicos produzidos pelo próprio sistema, atuando como assistente pedagógica e nunca como substituta da decisão docente.",
  capabilities: [
    { title: "Análise pedagógica de avaliações", body: "Lê os resultados processados e devolve síntese do que a prova revelou sobre a turma." },
    { title: "Leitura assistida de provas em PDF", body: "Recebe o caderno de questões e o PDF de gabaritos e rubricas para análise da avaliação." },
    { title: "Geração de pré-blueprint", body: "Sugere conteúdos, competências, níveis de Bloom e Miller, dificuldade esperada e tipo de questão." },
    { title: "Classificação assistida de itens", body: "Apoia o enquadramento de cada questão por competência, Bloom e Miller." },
    { title: "Sugestão de revisão de itens", body: "Aponta questões com possíveis problemas de construção ou alinhamento." },
    { title: "Análise longitudinal", body: "Acompanha a evolução do desempenho ao longo de semestres e ciclos." },
    { title: "Recomendações para a turma", body: "Traduz o diagnóstico em ações pedagógicas concretas para o próximo período." },
    { title: "Plano de estudo individual", body: "Organiza o que cada aluno precisa retomar, a partir do próprio desempenho." },
    { title: "Correção assistida por rubrica", body: "Em questões dissertativas, sugere nota, justificativa e feedback com base na resposta esperada." },
  ],
  guardrail:
    "Princípio de sugestão revisável: as análises da NexusIA não alteram automaticamente notas, gabaritos, resultados ou decisões acadêmicas. O professor e a instituição permanecem como responsáveis finais pela validação pedagógica.",
};

export const flow = {
  eyebrow: "Ciclo da avaliação",
  title: "Do caderno de questões ao plano de ação.",
  steps: [
    {
      k: "01",
      title: "Cadastro da avaliação",
      body: "A prova entra no sistema vinculada a curso, disciplina, turma e semestre, com o formato definido: objetiva, discursiva ou mista.",
    },
    {
      k: "02",
      title: "Blueprint",
      body: "A instituição importa o blueprint, ou envia o caderno de questões em PDF para que a NexusIA sugira um pré-blueprint para revisão do professor.",
    },
    {
      k: "03",
      title: "Registro de respostas",
      body: "As respostas dos alunos são registradas e associadas a cada item da avaliação.",
    },
    {
      k: "04",
      title: "Processamento",
      body: "O sistema calcula desempenho e, nas questões objetivas, gera análise psicométrica dos itens.",
    },
    {
      k: "05",
      title: "Análise",
      body: "Resultados abertos por questão, disciplina, competência, Taxonomia de Bloom, Pirâmide de Miller e evolução ao longo do tempo.",
    },
    {
      k: "06",
      title: "Ação pedagógica",
      body: "Relatórios, feedback individual, mapas de aprendizagem, plano de estudo e recomendações para a turma.",
    },
  ],
};

export const exams = {
  eyebrow: "Formatos de avaliação",
  title: "Objetivas, discursivas e mistas.",
  lead:
    "Nas questões objetivas, o sistema processa respostas, calcula desempenho e gera análises psicométricas. Nas discursivas, a NexusIA apoia a correção a partir da resposta esperada e da rubrica, sugerindo nota, justificativa e feedback.",
  highlight:
    "A nota sugerida pela IA só passa a valer após revisão e confirmação do professor. Segurança acadêmica preservada, julgamento docente intacto.",
};

export const profiles = {
  eyebrow: "Para quem",
  title: "Cada perfil enxerga o que precisa decidir.",
  groups: [
    {
      who: "Professores e supervisores",
      items: [
        "Registro organizado de avaliações",
        "Acompanhamento da evolução dos alunos",
        "Apoio na correção e na análise de provas",
        "Identificação das dificuldades da turma",
        "Geração de recomendações pedagógicas",
        "Redução de retrabalho",
      ],
    },
    {
      who: "Coordenadores",
      items: [
        "Visão consolidada por turma, semestre e área",
        "Acompanhamento de estágios e clínica supervisionada",
        "Análise de indicadores acadêmicos",
        "Apoio à tomada de decisão",
        "Maior controle sobre registros e históricos",
      ],
    },
    {
      who: "Gestores institucionais",
      items: [
        "Auditoria acadêmica",
        "Relatórios consolidados",
        "Acompanhamento multicurso e multiunidade",
        "Padronização de processos",
        "Melhoria da governança acadêmica",
      ],
    },
    {
      who: "Alunos",
      items: [
        "Acompanhamento da própria evolução",
        "Feedback mais claro",
        "Plano de estudo orientado",
        "Compreensão dos pontos fortes e das fragilidades",
        "Apoio ao desenvolvimento contínuo",
      ],
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Não é um sistema genérico com um curso de graduação encaixado.",
  items: [
    {
      title: "Desenhado para a realidade acadêmica",
      body:
        "Construído a partir das necessidades concretas de cursos superiores da área da saúde: estágio, clínica supervisionada, avaliação por competências e acompanhamento longitudinal.",
    },
    {
      title: "Gestão baseada em dados",
      body:
        "Registros acadêmicos viram indicadores compreensíveis, para que professores e gestores decidam com base em evidência, não em impressão.",
    },
    {
      title: "Segurança e rastreabilidade",
      body:
        "Dados organizados por perfil de acesso, contexto institucional, curso, unidade, turma, semestre e aluno, com histórico de lançamentos preservado.",
    },
    {
      title: "Apoio à avaliação formativa",
      body:
        "A avaliação deixa de ser só classificatória e passa a orientar intervenção pedagógica, recuperação, ajuste curricular e desenvolvimento discente.",
    },
    {
      title: "IA com supervisão docente",
      body:
        "A NexusIA amplia a capacidade de análise, mas mantém o professor como responsável final. A IA sugere, interpreta e organiza, mas não decide.",
    },
    {
      title: "Continuidade institucional",
      body:
        "O histórico não se perde na virada de semestre: paciente, caso clínico, avaliação e trajetória do aluno permanecem conectados ao longo do curso.",
    },
  ],
};

export const infra = {
  eyebrow: "Segurança e infraestrutura",
  title: "Dado de aluno e de paciente exige outro patamar.",
  lead:
    "O Nexus Academy roda sobre a infraestrutura da Amazon Web Services, com o mesmo padrão de disponibilidade, escalabilidade e proteção usado por instituições que não podem falhar.",
  badge: { label: "Powered by", value: "AWS Cloud", note: "Monitoramento 24/7" },
  items: [
    {
      title: "Criptografia ponta a ponta",
      body:
        "Os dados são criptografados em repouso e em trânsito, seguindo os protocolos mais rígidos do mercado. Nada trafega ou descansa em texto aberto.",
    },
    {
      title: "Backup e redundância geográfica",
      body:
        "Cópias automáticas distribuídas em mais de uma região, com plano de recuperação testado. A informação da instituição não depende de uma única máquina.",
    },
    {
      title: "Privacidade e LGPD",
      body:
        "Ambiente em conformidade com a Lei Geral de Proteção de Dados, com base legal mapeada por tipo de dado e controle de acesso granular por papel.",
    },
    {
      title: "Isolamento por contexto",
      body:
        "Cada consulta respeita instituição, curso, unidade, turma, semestre e aluno. Um coordenador não alcança dado que não é da sua alçada.",
    },
    {
      title: "Trilha de auditoria",
      body:
        "Todo evento relevante registra autor, data e valor anterior. O histórico de lançamentos permanece consultável mesmo em semestres encerrados.",
    },
    {
      title: "Monitoramento contínuo",
      body:
        "Acompanhamento 24/7 de disponibilidade e integridade, com alerta automático antes que a operação da instituição sinta qualquer efeito.",
    },
  ],
  clinical:
    "Na clínica supervisionada o cuidado é redobrado: dado de paciente é informação sensível de saúde e recebe tratamento próprio, com acesso restrito ao vínculo acadêmico que justifica a consulta.",
};

export const faq = [
  {
    q: "A NexusIA pode alterar notas ou gabaritos automaticamente?",
    a: "Não. Todo o funcionamento segue o princípio de sugestão revisável: a IA propõe nota, justificativa, classificação ou recomendação, e nada disso entra em vigor sem revisão e confirmação do professor. A responsabilidade pela validação pedagógica permanece integralmente com o docente e com a instituição.",
  },
  {
    q: "Como funciona a análise de prova em PDF?",
    a: "O professor envia o caderno de questões e o PDF de gabaritos e rubricas. A NexusIA faz a leitura assistida e sugere um pré-blueprint, identificando conteúdos, competências, níveis de Bloom e de Miller, dificuldade esperada, tipo de questão e possíveis pontos de atenção. Tudo fica aberto para revisão antes de ser aplicado.",
  },
  {
    q: "O sistema serve para cursos fora da área da saúde?",
    a: "Sim. A gestão acadêmica, o módulo de avaliações e a Inteligência de Aprendizagem atendem cursos superiores em geral. O que é específico da saúde é a clínica supervisionada, com pacientes, casos clínicos e evoluções, construída para essa realidade.",
  },
  {
    q: "O que acontece com o histórico do paciente quando o semestre acaba?",
    a: "A plataforma separa o cadastro permanente do paciente do caso clínico vinculado ao ciclo acadêmico. Assim, o aluno e a turma mudam, mas o histórico institucional do paciente permanece, preservando a continuidade do cuidado e a memória da clínica.",
  },
  {
    q: "Onde os dados ficam hospedados?",
    a: "Na infraestrutura da Amazon Web Services, com criptografia em repouso e em trânsito, backup automático e redundância geográfica. O acesso é controlado por papel e por contexto institucional de curso, unidade, turma, semestre e aluno, e há monitoramento contínuo de disponibilidade e integridade.",
  },
  {
    q: "Como a plataforma apoia auditoria e avaliação institucional?",
    a: "Os lançamentos ficam registrados com contexto de curso, unidade, turma, semestre e aluno, e os semestres encerrados mantêm o histórico consultável. Coordenação e gestão superior acessam dados consolidados, relatórios e exportações ao longo do ciclo, em vez de reconstruir evidência na véspera.",
  },
];

export const cta = {
  eyebrow: "Vamos conversar",
  title: "Traga uma avaliação real do seu curso. Devolvemos a leitura pedagógica dela.",
  lead:
    "Demonstração conduzida por quem entende de gestão acadêmica na área da saúde. Sem apresentação genérica: usamos o contexto do seu curso.",
  checks: [
    "Diagnóstico dos seus processos atuais",
    "Demonstração com o contexto do seu curso",
    "Caminho de implantação por etapas",
  ],
};

/**
 * Todo link do rodapé aponta para uma seção que existe.
 * Páginas ainda não escritas (Blog, Documentação, Casos) ficam de fora até nascerem:
 * link que não leva a lugar nenhum custa mais confiança do que a ausência dele.
 */
export const footer = {
  tagline:
    "Gestão acadêmica inteligente, segura e orientada por dados para cursos superiores da área da saúde.",
  columns: [
    {
      title: "Plataforma",
      links: [
        { label: "Estágios e avaliações", href: "/#area-estagios" },
        { label: "Clínica supervisionada", href: "/#area-clinica" },
        { label: "Documentos acadêmicos", href: "/#area-documentos" },
        { label: "Indicadores e auditoria", href: "/#area-indicadores" },
        { label: "Inteligência de Aprendizagem", href: "/#area-inteligencia" },
        { label: "NexusIA", href: "/#area-ia" },
      ],
    },
    {
      title: "Como funciona",
      links: [
        { label: "Inteligência de Aprendizagem", href: "/#inteligencia" },
        { label: "Análise psicométrica", href: "/#psicometria" },
        { label: "Ciclo da avaliação", href: "/#ciclo" },
        { label: "NexusIA", href: "/#nexus-ia" },
        { label: "Para quem", href: "/#perfis" },
      ],
    },
    {
      title: "Institucional",
      links: [
        { label: "Sobre o Nexus", href: "/sobre" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Instale o app", href: "/instalar" },
        { label: "Segurança e LGPD", href: "/#infraestrutura" },
        { label: "Perguntas frequentes", href: "/#faq" },
        { label: "Acesso institucional", href: "https://app.nexusacad.com.br/login" },
      ],
    },
  ],
};
