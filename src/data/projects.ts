export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: 'Sistema de Integração com APIs',
    description:
      'Solução backend para comunicação entre sistemas, consumo de APIs externas, tratamento de dados e padronização de respostas para aplicações internas.',
    technologies: ['C#', '.NET Core', 'APIs REST', 'SQL Server', 'Postman'],
    link: 'https://github.com/mouraeduardo',
  },
  {
    name: 'Portal Web em .NET',
    description:
      'Portal corporativo com autenticação, telas administrativas, serviços backend e persistência em banco relacional.',
    technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'React'],
    link: 'https://github.com/mouraeduardo',
  },
  {
    name: 'Aplicação de Gestão de Imóveis',
    description:
      'Aplicação para cadastro, controle e consulta de imóveis, clientes, negociações e informações operacionais.',
    technologies: ['C#', '.NET', 'SQL Server', 'Angular', 'TypeScript'],
    link: 'https://github.com/mouraeduardo',
  },
  {
    name: 'Sistema de Controle para Rachas/Esportes',
    description:
      'Sistema para organizar jogadores, partidas, presença, resultados e histórico de eventos esportivos.',
    technologies: ['React', 'TypeScript', '.NET Core', 'APIs REST'],
    link: 'https://github.com/mouraeduardo',
  },
];
