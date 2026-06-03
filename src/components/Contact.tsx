import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';
import { Section } from './Section';

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      description="Canais profissionais para oportunidades, networking e colaboração técnica."
    >
      <div className="contact">
        <a className="contact__item" href={`mailto:${profile.email}`}>
          <FiMail aria-hidden="true" />
          <span>{profile.email}</span>
        </a>
        <a className="contact__item" href={profile.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <a className="contact__item" href={profile.github} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <button className="button button--primary contact__button" type="button" onClick={handleCopyEmail}>
          {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
          {copied ? 'E-mail copiado' : 'Copiar e-mail'}
        </button>
      </div>
    </Section>
  );
}
