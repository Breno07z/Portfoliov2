import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

/**
 * Seção de Blog - Design Moderno com Azul Neon
 * 
 * Filosofia de Design:
 * - Cards com efeitos neon e bordas luminosas
 * - Filtros por categoria com animações
 * - Preview de artigos com imagens
 * - Tempo de leitura estimado
 * - Busca em tempo real
 * - Layout responsivo e moderno
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Dominando React Hooks: Guia Completo para Iniciantes',
    excerpt: 'Aprenda como usar React Hooks para gerenciar estado e efeitos colaterais em componentes funcionais de forma elegante e eficiente.',
    content: 'React Hooks revolucionaram a forma como escrevemos componentes...',
    category: 'React',
    date: '2025-01-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['React', 'JavaScript', 'Frontend'],
    featured: true,
  },
  {
    id: '2',
    title: 'Tailwind CSS vs Bootstrap: Qual Escolher?',
    excerpt: 'Comparação detalhada entre Tailwind CSS e Bootstrap, analisando vantagens, desvantagens e casos de uso ideais para cada um.',
    content: 'Quando se trata de frameworks CSS, a escolha pode fazer uma grande diferença...',
    category: 'CSS',
    date: '2025-01-12',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    id: '3',
    title: 'Introdução ao TypeScript: Tipagem Estática em JavaScript',
    excerpt: 'Descubra como TypeScript pode melhorar a qualidade do seu código JavaScript com tipagem estática e detecção de erros em tempo de desenvolvimento.',
    content: 'TypeScript é um superset de JavaScript que adiciona tipagem estática...',
    category: 'TypeScript',
    date: '2025-01-10',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['TypeScript', 'JavaScript', 'Desenvolvimento'],
  },
  {
    id: '4',
    title: 'REST APIs com Node.js e Express: Passo a Passo',
    excerpt: 'Aprenda a construir APIs REST robustas e escaláveis usando Node.js e Express, com autenticação, validação e boas práticas.',
    content: 'Criar uma API REST é uma habilidade fundamental para desenvolvedores backend...',
    category: 'Backend',
    date: '2025-01-08',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['Node.js', 'Express', 'API'],
  },
  {
    id: '5',
    title: 'Banco de Dados SQL vs NoSQL: Quando Usar Cada Um',
    excerpt: 'Entenda as diferenças entre bancos de dados SQL e NoSQL, seus casos de uso e como escolher o melhor para seu projeto.',
    content: 'A escolha entre SQL e NoSQL é uma decisão importante no design de aplicações...',
    category: 'Banco de Dados',
    date: '2025-01-05',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['SQL', 'NoSQL', 'Banco de Dados'],
  },
  {
    id: '6',
    title: 'Git e GitHub: Controle de Versão para Iniciantes',
    excerpt: 'Guia completo sobre Git e GitHub, desde conceitos básicos até workflows avançados para colaboração em equipe.',
    content: 'Git é uma ferramenta essencial para qualquer desenvolvedor moderno...',
    category: 'Ferramentas',
    date: '2025-01-01',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['Git', 'GitHub', 'Versionamento'],
  },
];

const categories = ['Todos', 'React', 'TypeScript', 'CSS', 'Backend', 'Banco de Dados', 'Ferramentas'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredPost = blogPosts.find((post) => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="blog" className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
      {/* Efeito de fundo com gradiente neon */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-widest">
              Conhecimento Compartilhado
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-6">
            Blog & Tutoriais
          </h2>
          <p className="text-lg text-foreground/70 font-inter max-w-2xl">
            Artigos e tutoriais sobre as tecnologias que estou aprendendo e dominando. 
            Compartilho conhecimento e boas práticas de desenvolvimento.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="group relative bg-gradient-to-br from-white to-secondary rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-500 cursor-pointer">
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-xl" />
              </div>

              <div className="relative flex flex-col md:flex-row gap-8 p-8 md:p-12">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl flex-shrink-0 w-full md:w-80 h-80 group/img">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover/img:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/img:translate-y-0">
                    Destaque
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-semibold uppercase tracking-wider">
                      {featuredPost.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-foreground/70 font-inter text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-6 mb-6 text-foreground/60 font-inter text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-accent" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-accent" />
                        {featuredPost.readTime} min de leitura
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/10 text-accent font-inter text-xs font-semibold rounded-full border border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-inter font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 w-fit group/link"
                  >
                    Ler Artigo Completo
                    <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Search */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/50" size={20} />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-accent/20 rounded-lg font-inter focus:outline-none focus:border-accent transition-colors duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            <Filter size={20} className="text-accent self-center" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-inter font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/50'
                    : 'bg-white border-2 border-accent/20 text-foreground hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <a
                key={post.id}
                href="#"
                className="group animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden h-48 group/img">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover/img:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/img:translate-y-0">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 p-6 flex flex-col">
                    <h3 className="text-lg font-bold font-poppins text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 font-inter text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-foreground/60 font-inter text-xs mb-4 pb-4 border-b border-accent/10">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-accent" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-accent" />
                        {post.readTime}min
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-accent/10 text-accent font-inter text-xs font-semibold rounded-full border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-accent font-inter font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Ler Mais
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/60 font-inter text-lg">
                Nenhum artigo encontrado. Tente ajustar seus filtros.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-accent/20 text-center animate-fade-in-up">
          <p className="text-lg text-foreground/70 font-inter mb-8">
            Quer receber notificações de novos artigos?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="seu.email@exemplo.com"
              className="px-6 py-3 bg-white border-2 border-accent/20 rounded-lg font-inter focus:outline-none focus:border-accent transition-colors duration-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-accent to-accent/80 text-white font-poppins font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1">
              Se Inscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
