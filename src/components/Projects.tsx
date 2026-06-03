import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';
import { Section } from './Section';

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Soluções para backend, web e operações"
      description="Exemplos de projetos voltados a integrações, portais web, gestão operacional e produtos digitais."
    >
      <div className="grid grid--two">
        {projects.map((project) => (
          <article className="card project-card" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tag-list" aria-label="Tecnologias usadas">
              {project.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
            <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
              Ver projeto
              <FiExternalLink aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
