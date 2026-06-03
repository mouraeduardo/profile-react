import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Desenvolvido com React e TypeScript.</p>
    </footer>
  );
}
