import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Página Home - Portfólio Profissional
 * 
 * Design: Minimalismo Moderno com Tipografia Ousada
 * 
 * Estrutura:
 * 1. Navegação fixa
 * 2. Hero section com tipografia em grande escala
 * 3. Seção de habilidades com categorias
 * 4. Seção de projetos
 * 5. Seção de contato com formulário
 * 6. Rodapé
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
