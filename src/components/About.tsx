import { FiCode, FiDatabase, FiGitBranch } from 'react-icons/fi';
import { Section } from './Section';

const highlights = [
  { icon: <FiCode aria-hidden="true" />, label: 'Desenvolvimento backend com C# e .NET' },
  { icon: <FiGitBranch aria-hidden="true" />, label: 'Integrações entre sistemas e APIs REST' },
  { icon: <FiDatabase aria-hidden="true" />, label: 'Bancos relacionais e aplicações corporativas' },
];

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Perfil analítico, foco em solução">
      <div className="about">
        <p>
          Sou desenvolvedor de software com cerca de 4 anos de experiência, atuando principalmente
          com C#/.NET, APIs REST, integrações entre sistemas, bancos de dados SQL e aplicações
          corporativas. Tenho perfil analítico, gosto de resolver problemas complexos, entender
          regras de negócio e criar soluções eficientes.
        </p>
        <div className="about__highlights">
          {highlights.map((item) => (
            <div className="mini-card" key={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
