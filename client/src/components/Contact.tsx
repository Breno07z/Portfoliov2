import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Seção de Contato - Design Minimalista Moderno
 * 
 * Filosofia de Design:
 * - Formulário limpo e minimalista
 * - Campos com borda sutil e foco em laranja coral
 * - Links de redes sociais com hover effect
 * - Validação de formulário com feedback visual
 * - Animações suaves ao enviar
 */

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;
    const whatsappNumber = '5581983224690'; // Código do país + DDD + número
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    toast.success('Redirecionando para o WhatsApp...');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-accent" />
              <p className="text-accent font-poppins font-semibold text-sm uppercase tracking-widest">
                Vamos Conversar
              </p>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-foreground/70 font-inter max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre 
              desenvolvimento. Sinta-se à vontade para entrar em contato!
            </p>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-slide-in-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-foreground font-inter font-semibold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg font-inter transition-all duration-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-foreground font-inter font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg font-inter transition-all duration-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-foreground font-inter font-semibold mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem aqui..."
                    rows={5}
                    className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg font-inter transition-all duration-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:brenopereira1823@gmail.com"
                    className="flex items-center gap-3 text-foreground/70 font-inter hover:text-accent transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <span>brenopereira1823@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                  Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Breno07z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-background border border-border rounded-lg text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
                  >
                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/breno-pereira-34b29b27a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-background border border-border rounded-lg text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
                  >
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="mailto:brenopereira1823@gmail.com"
                    className="p-4 bg-background border border-border rounded-lg text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
                  >
                    <Mail size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-foreground/60 font-inter uppercase tracking-widest mb-2">
                  Disponibilidade
                </p>
                <p className="text-foreground font-inter">
                  Disponível para projetos freelance, oportunidades de emprego e consultoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
