import { ExternalLink, Github, Zap, Code2, Database } from 'lucide-react';
import { useState } from 'react';

/**
 * Seção de Projetos - Design Moderno e Tecnológico
 * 
 * Filosofia de Design:
 * - Layout assimétrico com cards flutuantes
 * - Efeitos de glow e neon
 * - Hover effects com transformação 3D
 * - Badges de tecnologias com animação
 * - Fundo com gradiente sutil
 * - Cards com bordas neon
 */

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Sistemas para Clínica',
    description: 'Gestão completa para clínicas médicas, incluindo prontuário eletrônico, agendamento de consultas e controle de fluxo de pacientes com interface intuitiva.',
    technologies: ['html', 'Css'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    github: 'https://github.com/Breno07z',
    featured: true,
    icon: <Database size={24} />,
  },
  {
    id: '2',
    title: 'Rede Social App',
    description: 'Plataforma interativa com feed em tempo real, sistema de amizades, curtidas e perfis personalizáveis. Focada em performance e escalabilidade de dados.',
    technologies: ['html', 'tailwind css', 'php', 'mysql'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    github: 'https://github.com/Breno07z',
    icon: <Zap size={24} />,
  },
  {
    id: '3',
    title: 'Sistema Posto de Saúde',
    description: 'Solução dedicada à Saúde Pública, otimizando o atendimento em UBSs, triagem de pacientes e controle de vacinação em massa.',
    technologies: ['html', 'bootstrap', 'javascript'],
    image: 'https://images.unsplash.com/photo-1538108149393-fdfd816959d5?w=600&h=400&fit=crop',
    github: 'https://github.com/Breno07z',
    icon: <Database size={24} />,
  },
  {
    id: '4',
    title: 'E-commerce Joalheria',
    description: 'Experiência de compra premium para o mercado de luxo. Catálogo interativo, checkout seguro e design sofisticado focado em conversão.',
    technologies: ['html', 'bootstrap', 'javascript'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
    github: 'https://github.com/Breno07z',
    icon: <Code2 size={24} />,
  },
  {
    id: '5',
    title: 'Sistema Mercadinho',
    description: 'Controle de estoque e vendas para pequenos empreendimentos. Inclui relatórios financeiros e gestão de fornecedores simplificada.',
    technologies: ['html', 'bootstrap', 'javascript'],
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop',
    github: 'https://github.com/Breno07z',
    icon: <Database size={24} />,
  },
  {
    id: '6',
    title: 'One Piece Universe',
    description: 'Site interativo com enciclopédia de personagens e arcos do anime. Focado em animações fluidas e design temático imersivo.',
    technologies: ['HTML', 'CSS3 Moderno', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1613333627628-874db8150495?w=600&h=400&fit=crop',
    github: 'https://github.com/Breno07z',
    icon: <Code2 size={24} />,
  },
  {
    id: '7',
    title: 'Portfólio Educador Físico',
    description: 'Landing page para personal trainers e consultoria online. Sistema de agendamento e apresentação de planos de treino.',
    technologies: ['html', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    github: 'https://github.com/Breno07z',
    icon: <Zap size={24} />,
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="projetos"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden"
    >
      {/* Efeito de fundo com gradiente neon */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-widest">
              Meu Trabalho
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-foreground/70 font-inter max-w-2xl">
            Explore meus projetos mais recentes que demonstram expertise em desenvolvimento full stack, 
            design responsivo e soluções inovadoras.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div
            className="group relative bg-gradient-to-br from-card to-secondary rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setHoveredId('featured')}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl" />
            </div>

            <div className="relative flex flex-col md:flex-row gap-8 p-8 md:p-12">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl flex-shrink-0 w-full md:w-80 h-80 group/img">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-accent text-white p-3 rounded-full opacity-0 group-hover/img:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/img:translate-y-0">
                  {projects[0].icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-semibold uppercase tracking-wider">
                    Projeto em Destaque
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
                    {projects[0].title}
                  </h3>
                  <p className="text-foreground/70 font-inter text-lg mb-6 leading-relaxed">
                    {projects[0].description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {projects[0].technologies.map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 text-accent font-inter text-sm font-semibold rounded-lg border border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {projects[0].github && (
                    <a
                      href={projects[0].github}
                      className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-inter font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 group/link"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                  )}
                  {projects[0].demo && (
                    <a
                      href={projects[0].demo}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-inter font-semibold rounded-lg transition-all duration-300 hover:bg-accent/10 group/link"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div
              key={project.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-card rounded-xl overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
                </div>

                {/* Image */}
                <div className="relative overflow-hidden h-48 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 bg-accent text-white p-2 rounded-lg opacity-0 group-hover/img:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/img:translate-y-0">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold font-poppins text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 font-inter text-sm mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent font-inter text-xs font-semibold rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-3 py-1 bg-accent/10 text-accent font-inter text-xs font-semibold rounded-full border border-accent/20">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-accent/10">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-accent font-inter font-semibold transition-all duration-300 hover:bg-accent/10 rounded-lg group/link"
                      >
                        <Github size={16} />
                        <span className="text-sm">GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-accent font-inter font-semibold transition-all duration-300 hover:bg-accent/10 rounded-lg group/link"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-accent/20 text-center animate-fade-in-up">
          <p className="text-lg text-foreground/70 font-inter mb-8">
            Quer ver mais projetos? Visite meu GitHub para explorar meu trabalho completo!
          </p>
          <a
            href="https://github.com/Breno07z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white font-poppins font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 group"
          >
            <Github size={24} />
            Explorar no GitHub
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
