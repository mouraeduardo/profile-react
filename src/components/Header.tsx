import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencias', label: 'Experiências' },
//  { href: '#projetos', label: 'Projetos' },
  { href: '#cursos', label: 'Cursos' },
//  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
];

function getInitialTheme() {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ir para o início">
        <span>CEMR</span>
      </a>

      <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
