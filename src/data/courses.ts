export type Course = {
  name: string;
  institution: string;
  year: string;
  status: 'Concluído' | 'Em andamento' | 'Planejado';
};

export const courses: Course[] = [
  {
    name: 'Sistemas de Informação | Graduação',
    institution: 'Universidade Federal do Ceará (UFC)',
    year: '2019',
    status: 'Em andamento',
  },
  {
    name: 'ASP.NET Core Web APIs | Curso',
    institution: 'Universidade Federal do Ceará (UFC)',
    year: '2022',
    status: 'Concluído',
  }
];
