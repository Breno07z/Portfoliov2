import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Componente de Navegação - Design Minimalista Moderno
 * 
 * Filosofia de Design:
 * - Navegação fixa no topo com fundo branco e borda sutil
 * - Logo/nome em Poppins Bold grande
 * - Links em Inter com hover effect em azul neon
 * - Menu mobile responsivo com ícone hamburger
 * - Sem sombras pesadas, apenas linhas geométricas
 */

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground font-poppins">
            <span className="text-accent">Breno07z</span>
            <span className="text-foreground">.</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-inter font-medium transition-colors duration-300 hover:text-accent relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground font-inter font-medium transition-colors duration-300 hover:text-accent relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            )
          )}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-accent/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-accent" />
            ) : (
              <Moon size={20} className="text-foreground" />
            )}
          </button>
          
          <button
            onClick={() => scrollToSection('#contato')}
            className="btn-primary"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-accent/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-accent" />
            ) : (
              <Moon size={20} className="text-foreground" />
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-left text-foreground font-inter font-medium py-2 transition-colors duration-300 hover:text-accent block"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-foreground font-inter font-medium py-2 transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection('#contato')}
              className="btn-primary w-full"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
