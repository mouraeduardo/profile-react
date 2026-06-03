import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="hero reveal" id="home" ref={ref}>
      <div className="hero__content">
        <span className="eyebrow">Backend • APIs • Integrações • SQL</span>
        <h1>{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions" aria-label="Links profissionais">
          <a className="button button--primary" href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a className="button button--secondary" href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
      <div className="hero__panel" aria-label="Resumo técnico">
        <div>
          <span>4+</span>
          <p>anos de experiência em software</p>
        </div>
        <div>
          <span>.NET</span>
          <p>APIs REST, C# e sistemas corporativos</p>
        </div>
        <div>
          <span>SQL</span>
          <p>modelagem, consultas e integrações de dados</p>
        </div>
      </div>
    </section>
  );
}
