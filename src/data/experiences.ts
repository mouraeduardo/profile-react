export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor de Software PL',
    company: 'ManyMinds',
    period: '09/2023 - 05/2026',
    description:
      'Desenvolvimento e manutenção de ecossistema Web utilizando .NET focado em soluções de ERP; Arquitetura e implementação de Microsserviços, garantindo escalabilidade e modularização do sistema; Implementação e gestão de esteiras de CI/CD para automação de deploys e garantia de qualidade; Atuação em Sustentação e Suporte de nível avançado, garantindo a estabilidade de ambientes produtivos.',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'SQLServer', 'Entity Framework', 'React', 'Angular', 'SAP B1', 'Microserviços', 'Sustentação'],
  },
  {
    role: 'Desenvolvedor FullStack Jr',
    company: 'FitBank 360',
    period: '01/2022 - 09/2023',
    description:
      'Desenvolvimento de funcionalidades para serviços financeiros utilizando C# e .NET; Modelagem e otimização de queries em SQL Server paramanipulação de grandes volumes de dados; Manutenção de serviços em nuvem utilizando a plataforma Azure; Desenvolvimento de interfaces dinâmicas utilizando JQuery e integração com Back-End',
    technologies: ['C#', '.NET Framework', 'APIs REST', 'SQL', 'TypeScript', 'Razor', 'Microserviços', 'JQuery', 'React'],
  },
];
