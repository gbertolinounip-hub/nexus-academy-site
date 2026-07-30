/**
 * Conteúdo das páginas internas.
 *
 * O bloco de problemas aparece aqui em versão curta: a tese completa vive no
 * Diagnóstico da home, e repetir o argumento por extenso faria quem navega
 * home → Sobre ler a mesma coisa duas vezes.
 */

export const about = {
  eyebrow: "Sobre o Nexus",
  title: "Registros acadêmicos viram inteligência de gestão.",
  lead:
    "O Nexus Academy centraliza dados acadêmicos e transforma registros dispersos em inteligência para a gestão do curso.",

  what: {
    title: "O que é o Nexus Academy",
    body: [
      "O Nexus Academy é uma plataforma de gestão acadêmica inteligente desenvolvida para cursos da área da saúde que precisam transformar registros acadêmicos em informações úteis para ensino, supervisão, coordenação e tomada de decisão.",
      "Mais do que organizar dados, o Nexus conecta processos que normalmente ficam fragmentados: avaliações, estágios, clínica supervisionada, documentos, indicadores de desempenho, relatórios institucionais e devolutivas pedagógicas.",
      "Com o apoio da NexusIA, a plataforma amplia a leitura dos dados acadêmicos, identifica padrões, aponta riscos, organiza evidências e apoia professores e gestores na construção de ações pedagógicas mais precisas.",
    ],
  },

  who: {
    title: "Para quem foi criado",
    lead:
      "Criado para instituições de ensino superior que desejam qualificar a gestão acadêmica, especialmente em cursos da área da saúde, onde a formação envolve avaliação contínua, estágios, práticas supervisionadas, clínica-escola, documentos obrigatórios e acompanhamento individualizado.",
    items: [
      {
        who: "Gestores e coordenações de curso",
        body: "Acompanham indicadores acadêmicos, desempenho por turma, risco discente, relatórios de avaliação, evolução longitudinal e evidências para decisões pedagógicas.",
      },
      {
        who: "Professores e supervisores",
        body: "Registram avaliações, acompanham estudantes, analisam desempenho, corrigem questões dissertativas com apoio da NexusIA e geram devolutivas formativas.",
      },
      {
        who: "Alunos",
        body: "Acessam feedbacks claros, desempenho individual, comparação anônima com a turma, devolutivas das avaliações e planos de estudo personalizados.",
      },
      {
        who: "NDE, colegiados e gestão institucional",
        body: "Contam com dados organizados para apoiar revisão curricular, planejamento acadêmico, análise de resultados e melhoria contínua do curso.",
      },
    ],
    highlight:
      "Criado para coordenadores, professores, supervisores, alunos e gestores que precisam enxergar o curso com mais clareza.",
  },

  // versão curta: o argumento completo está no Diagnóstico da home
  problem: {
    title: "Qual problema resolve",
    body:
      "Em muitas instituições os dados acadêmicos já existem, mas estão espalhados em planilhas, formulários, documentos, e-mails e registros manuais. O desafio não é registrar: é transformar esse registro em leitura, acompanhamento e decisão.",
    link: { label: "Ver o diagnóstico completo", href: "/#diagnostico" },
  },

  management: {
    title: "Como apoia a gestão acadêmica",
    lead:
      "O Nexus organiza os principais processos do curso em uma única plataforma, permitindo que coordenadores e gestores acompanhem o que antes ficava invisível ou difícil de consolidar.",
    items: [
      {
        k: "Acompanhar o desempenho das turmas",
        d: "Resultados consolidados por aluno, turma, disciplina, competência, conteúdo, módulo e nível de complexidade, revelando padrões de aprendizagem e pontos de atenção.",
      },
      {
        k: "Identificar alunos em risco",
        d: "Indicadores ajudam professores e coordenadores a reconhecer quem precisa de acompanhamento pedagógico antes que o problema se agrave.",
      },
      {
        k: "Qualificar avaliações",
        d: "Análise de questões objetivas, distratores, dificuldade real, discriminação e ponto-bisserial, apoiando a revisão da qualidade dos instrumentos.",
      },
      {
        k: "Apoiar estágios e práticas supervisionadas",
        d: "Registros, critérios avaliativos, documentos e histórico organizados por perfil, semestre, turma e contexto institucional.",
      },
      {
        k: "Gerar relatórios para decisão",
        d: "Relatórios institucionais, exportações e painéis transformam dados acadêmicos em evidências para reuniões pedagógicas, NDE e coordenação.",
      },
      {
        k: "Acompanhar evolução longitudinal",
        d: "Mudanças observadas ao longo do tempo, identificando avanços, recorrências, lacunas e tendências no percurso formativo.",
      },
    ],
    highlight:
      "O Nexus apoia a coordenação com dados objetivos, relatórios claros e indicadores que orientam decisões pedagógicas.",
  },

  ia: {
    title: "Como a NexusIA amplia a leitura dos dados",
    lead:
      "A NexusIA é a camada de inteligência do Nexus Academy. Ela não substitui o professor, o coordenador ou o gestor: organiza, interpreta e sintetiza os dados acadêmicos para apoiar decisões mais rápidas, consistentes e fundamentadas.",
    items: [
      {
        k: "Análise pedagógica de avaliações",
        d: "Interpreta provas, sugere pré-blueprints e identifica conteúdos, competências, níveis cognitivos e pontos de revisão antes da aplicação ou da análise dos resultados.",
      },
      {
        k: "Correção assistida de questões dissertativas",
        d: "Apoia a correção por rubrica e sugere notas e devolutivas, mas a decisão final permanece com o professor, que revisa e confirma o resultado.",
      },
      {
        k: "Devolutivas formativas ao aluno",
        d: "Depois da publicação dos resultados, transforma indicadores em planos de estudo personalizados, com prioridades, pontos fortes e orientações práticas.",
      },
      {
        k: "Recomendações para professores e gestores",
        d: "Identifica dimensões críticas, alunos em risco, questões problemáticas e ações sugeridas para intervenção acadêmica.",
      },
      {
        k: "Sínteses institucionais",
        d: "Transforma dados complexos em relatórios mais claros, apoiando coordenação, NDE e gestão na leitura do curso.",
      },
    ],
    guardrail:
      "A NexusIA usa apenas os dados já estruturados pelo sistema, respeitando permissões, privacidade e segurança. Não expõe gabaritos indevidamente, dados de colegas ou informações sensíveis. Sua função é ampliar a capacidade de leitura acadêmica com responsabilidade.",
    highlight:
      "A NexusIA transforma indicadores acadêmicos em sínteses, recomendações e planos de ação para professores, alunos e gestores.",
  },

  closing: "O Nexus Academy não é apenas um sistema de registro. É uma plataforma para entender, acompanhar e melhorar o curso.",
};

export const solutions = {
  eyebrow: "Soluções",
  title: "Da avaliação ao estágio, os processos críticos da formação em saúde.",
  lead:
    "Cada solução resolve uma frente do curso e leva à parte da plataforma que a sustenta.",
  items: [
    {
      n: "01",
      k: "Coordenação de curso",
      d: "Acompanhe turmas, desempenho, risco acadêmico, avaliações, documentos e relatórios institucionais em uma visão integrada.",
      href: "/#perfis",
    },
    {
      n: "02",
      k: "Professores e supervisores",
      d: "Registre avaliações, acompanhe alunos, revise respostas dissertativas, gere devolutivas e identifique pontos de atenção pedagógica.",
      href: "/#perfis",
    },
    {
      n: "03",
      k: "Inteligência de Aprendizagem",
      d: "Transforme provas em indicadores por questão, competência, Bloom, Miller, disciplina, módulo e risco acadêmico.",
      href: "/#inteligencia",
    },
    {
      n: "04",
      k: "Clínica supervisionada",
      d: "Organize pacientes, casos clínicos, registros, indicadores e histórico institucional da clínica-escola.",
      href: "/#area-clinica",
    },
    {
      n: "05",
      k: "Alunos",
      d: "Receba feedback formativo, plano de estudo personalizado, devolutiva de questões dissertativas e comparação anônima com a turma.",
      href: "/#perfis",
    },
    {
      n: "06",
      k: "Gestão institucional e NDE",
      d: "Acesse relatórios, evidências e indicadores para apoiar revisão curricular, reuniões pedagógicas e tomada de decisão.",
      href: "/#infraestrutura",
    },
  ],
};

/**
 * Página de instalação (PWA).
 *
 * O sistema roda em app.nexusacad.com.br e pode ser instalado como aplicativo.
 * As instruções mudam de nome conforme navegador e versão, por isso cada bloco
 * traz também a variação de rótulo que o usuário pode encontrar na tela.
 */
export const appUrl = "https://app.nexusacad.com.br";
export const siteUrl = "https://www.nexusacad.com.br";

export const install = {
  eyebrow: "Acesso rápido ao app",
  title: "Como instalar o Nexus Academy no seu dispositivo.",
  lead:
    "O Nexus Academy pode ser usado direto pelo navegador ou instalado como aplicativo no computador, no iPhone e iPad ou no Android. Instalado, ele abre em janela própria e ganha ícone na tela inicial ou na área de trabalho.",

  start: {
    title: "Comece por aqui",
    body: "Todo o acesso ao sistema, incluindo login e uso diário, acontece no endereço do app. Abra este endereço no dispositivo em que você quer instalar e depois siga as instruções da sua plataforma.",
    cta: "Abrir o app",
  },

  platforms: [
    {
      id: "computador",
      kicker: "Computador",
      title: "Google Chrome ou Microsoft Edge",
      steps: [
        "Acesse o endereço do app no navegador.",
        "Faça login normalmente.",
        "No canto direito da barra de endereço, procure o ícone de instalação do app.",
        "Clique em Instalar e confirme.",
        "O Nexus Academy passa a abrir como aplicativo, com atalho na área de trabalho, no menu Iniciar ou no dock, conforme o sistema.",
      ],
      note: "Se o ícone não aparecer na barra de endereço, abra o menu de três pontos do navegador. A opção costuma estar como Instalar Nexus Academy, Instalar aplicativo, Instalar página como app ou Adicionar à área de trabalho, dependendo da versão.",
      source: {
        label: "Chrome · usar apps da web no computador",
        href: "https://support.google.com/chrome/answer/9658361?hl=pt-BR&co=GENIE.Platform%3DDesktop",
      },
    },
    {
      id: "ios",
      kicker: "iPhone e iPad",
      title: "Safari",
      steps: [
        "Abra o Safari. No iPhone e no iPad a instalação só funciona por ele.",
        "Acesse o endereço do app.",
        "Toque no botão de compartilhamento.",
        "Role as opções e toque em Adicionar à Tela de Início.",
        "Confirme o nome Nexus Academy e toque em Adicionar.",
        "O ícone aparece na tela inicial e abre o sistema como um aplicativo.",
      ],
      note: "Se Adicionar à Tela de Início não estiver na lista, role até o fim, toque em Editar ações e ative a opção. Em versões recentes do iOS o Safari também oferece Abrir como app web, que faz o sistema abrir sem a barra do navegador.",
      source: {
        label: "Apple · transformar um site em app no Safari",
        href: "https://support.apple.com/pt-br/guide/iphone/iphea86e5236/ios",
      },
    },
    {
      id: "android",
      kicker: "Android",
      title: "Google Chrome",
      steps: [
        "Abra o Chrome.",
        "Acesse o endereço do app.",
        "Toque no menu de três pontos, à direita da barra de endereço.",
        "Escolha Instalar app ou Adicionar à tela inicial.",
        "Confirme a instalação.",
        "O ícone aparece na tela inicial e abre o sistema como um aplicativo.",
      ],
      note: "O nome da opção varia conforme o aparelho e a versão do navegador. Em alguns casos aparece primeiro Adicionar à tela inicial e depois Instalar, na mesma sequência.",
      source: {
        label: "Chrome · usar apps da web no Android",
        href: "https://support.google.com/chrome/answer/9658361?hl=pt-BR&co=GENIE.Platform%3DAndroid",
      },
    },
  ],

  addresses: {
    title: "Endereços oficiais",
    lead: "Guarde os dois endereços. Um é o sistema, o outro é o site institucional. Use sempre estes para evitar páginas falsas.",
    items: [
      {
        k: "Acesso ao sistema",
        url: "https://app.nexusacad.com.br",
        d: "Login, uso diário da plataforma e instalação do aplicativo.",
      },
      {
        k: "Site institucional",
        url: "https://www.nexusacad.com.br",
        d: "Apresentação da plataforma, soluções e contato comercial.",
      },
    ],
  },

  tips: {
    title: "Recomendações",
    items: [
      "Mantenha o navegador atualizado. A instalação como aplicativo depende de recursos das versões recentes.",
      "Instale a partir do próprio dispositivo que você vai usar: o app não se transfere de um aparelho para outro.",
      "Se a instituição usa perfis gerenciados no navegador, pode ser necessário liberar a instalação com o setor de TI.",
      "Em caso de dúvida sobre o acesso, fale com a coordenação do seu curso ou escreva para o nosso contato.",
    ],
  },
};
