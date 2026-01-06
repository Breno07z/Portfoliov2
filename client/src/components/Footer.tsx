import { ArrowUp } from 'lucide-react';

/**
 * Componente Footer - Design Minimalista Moderno
 * 
 * Filosofia de Design:
 * - Rodapé limpo e discreto
 * - Informações essenciais apenas
 * - Botão "Voltar ao Topo" com hover effect
 * - Linha divisória sutil no topo
 */

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-background/20">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-2">
                <span className="text-accent">Breno07z</span>
                <span className="text-background">.</span>
              </h3>
              <p className="text-background/70 font-inter">
                Desenvolvedor Full Stack | ADS
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-6 py-3 border border-background/30 rounded-lg text-background font-inter font-semibold transition-all duration-300 hover:bg-background hover:text-foreground group"
            >
              Voltar ao Topo
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 text-center">
            <p className="text-background/70 font-inter text-sm">
              © {currentYear} Todos os direitos reservados. Desenvolvido com dedicação e paixão por código.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
