import { ArrowRight } from 'lucide-react';

/**
 * Seção Hero - Design Minimalista Moderno
 * 
 * Filosofia de Design:
 * - Tipografia em grande escala (Poppins Bold 80-96px)
 * - Imagem de fundo geométrica minimalista
 * - Muito espaço em branco estratégico
 * - CTA com hover effect em laranja coral
 * - Animação fade-in ao carregar
 */

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="sobre"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay para garantir legibilidade */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Subtítulo */}
          <div className="mb-6 flex items-center gap-3">
            <div className="w-12 h-px bg-accent" />
            <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-widest">
              Bem-vindo ao meu portfólio
            </p>
          </div>

          {/* Título Principal */}
          <h1 className="text-6xl md:text-8xl font-bold font-poppins text-foreground mb-6 leading-tight">
            Desenvolvedor <span className="text-accent">Full Stack</span>
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-foreground/80 font-inter mb-8 leading-relaxed max-w-2xl">
            Recém-formado em Análise e Desenvolvimento de Sistemas com expertise em Frontend, Backend, 
            metodologias ágeis e banco de dados. Pronto para criar soluções inovadoras e impactantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={() => scrollToSection('#projetos')}
              className="btn-primary flex items-center gap-2 group"
            >
              Ver Meus Projetos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/5581983224690?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-foreground text-foreground font-semibold rounded-md transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Entre em Contato
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-border grid grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl md:text-5xl font-bold font-poppins text-accent mb-2">7+</p>
              <p className="text-foreground/70 font-inter">Projetos Reais</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl md:text-5xl font-bold font-poppins text-accent mb-2">15+</p>
              <p className="text-foreground/70 font-inter">Tecnologias Dominadas</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl md:text-5xl font-bold font-poppins text-accent mb-2">100%</p>
              <p className="text-foreground/70 font-inter">Dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
