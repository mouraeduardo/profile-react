import { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section reveal" id={id} ref={ref} aria-labelledby={`${id}-title`}>
      <div className="section__header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 id={`${id}-title`}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}
