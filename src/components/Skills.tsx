import { skills } from '../data/skills';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tecnologias e práticas"
      description="Stack principal voltada a backend .NET, integrações, dados e suporte frontend."
    >
      <div className="skills-list" aria-label="Lista de tecnologias">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
