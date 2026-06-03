import { FiBriefcase } from 'react-icons/fi';
import { experiences } from '../data/experiences';
import { Section } from './Section';

export function Experience() {
  return (
    <Section
      id="experiencias"
      eyebrow="Experiências"
      title="Atuação em sistemas corporativos"
      description="Vivência em desenvolvimento, manutenção, integrações e evolução de aplicações com foco em regras de negócio e estabilidade."
    >
      <div className="grid grid--two">
        {experiences.map((experience) => (
          <article className="card" key={`${experience.company}-${experience.role}`}>
            <div className="card__icon">
              <FiBriefcase aria-hidden="true" />
            </div>
            <div className="card__meta">
              <span>{experience.period}</span>
              <strong>{experience.company}</strong>
            </div>
            <h3>{experience.role}</h3>
            <p>{experience.description}</p>
            <div className="tag-list" aria-label="Tecnologias utilizadas">
              {experience.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
