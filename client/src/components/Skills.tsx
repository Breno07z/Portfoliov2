import { Code2, Database, Zap, BookOpen } from 'lucide-react';

/**
 * Seção de Habilidades - Design Minimalista Moderno
 * 
 * Filosofia de Design:
 * - Grid de 4 categorias principais
 * - Ícones simples e geométricos
 * - Cards minimalistas com hover effect
 * - Tipografia clara e hierarquizada
 * - Muito espaço em branco entre elementos
 */

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <Code2 size={32} />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    color: 'text-accent',
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <Zap size={32} />,
    skills: ['Python(academy)', 'SQL', 'Banco de Dados Relacional', 'REST APIs'],
    color: 'text-accent',
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    icon: <Database size={32} />,
    skills: ['SQL', 'PostgreSQL', 'MySQL', 'NoSQL', 'MongoDB', 'Modelagem de Dados'],
    color: 'text-accent',
  },
  {
    id: 'metodologias',
    title: 'Metodologias & Ferramentas',
    icon: <BookOpen size={32} />,
    skills: ['Scrum', 'Kanban', 'Git', 'GitHub', 'Documentação', 'Agile'],
    color: 'text-accent',
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-widest">
              Minhas Competências
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-6">
            Habilidades & Tecnologias
          </h2>
          <p className="text-lg text-foreground/70 font-inter max-w-2xl">
            Uma seleção das tecnologias e metodologias que domino, adquiridas através de estudos 
            contínuos e projetos práticos.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="card-minimal animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`${category.color} p-3 bg-accent/10 rounded-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-foreground font-inter text-sm rounded-full border border-border transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 divider-line" />

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          <div className="text-center">
            <p className="text-sm text-foreground/60 font-inter uppercase tracking-widest mb-2">
              Aprendizado Contínuo
            </p>
            <p className="text-foreground font-inter">
              Sempre em busca de novas tecnologias e melhores práticas de desenvolvimento
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-foreground/60 font-inter uppercase tracking-widest mb-2">
              Código de Qualidade
            </p>
            <p className="text-foreground font-inter">
              Foco em clean code, documentação clara e boas práticas de engenharia
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-foreground/60 font-inter uppercase tracking-widest mb-2">
              Trabalho em Equipe
            </p>
            <p className="text-foreground font-inter">
              Experiência com metodologias ágeis e colaboração efetiva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
