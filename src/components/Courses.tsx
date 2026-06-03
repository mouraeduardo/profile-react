import { courses } from '../data/courses';
import { Section } from './Section';

export function Courses() {
  return (
    <Section
      id="cursos"
      eyebrow="Cursos e certificações"
      title="Aprendizado contínuo"
      description="Formações e estudos que reforçam a base técnica em backend, APIs, dados e arquitetura."
    >
      <div className="timeline">
        {courses.map((course) => (
          <article className="timeline__item" key={`${course.name}-${course.year}`}>
            <div>
              <h3>{course.name}</h3>
              <p>{course.institution}</p>
            </div>
            <div className="timeline__meta">
              <span>{course.year}</span>
              <strong>{course.status}</strong>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
