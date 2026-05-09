import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Github, Twitter } from 'lucide-react';
import { GitHubStar } from '../atoms/GitHubStar';

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function MainLayout({ children, backgroundColor = '#562f54' }: MainLayoutProps) {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center p-4 md:p-8 lg:p-12 transition-colors duration-500 font-sans"
      style={{ backgroundColor }}
    >
      {/* Header */}
      <header className="w-full max-w-7xl mb-12 flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter text-white">
            Neumorphism.io
          </h1>
          <p className="text-sm opacity-60 mt-2 font-medium">Generate Soft-UI CSS code</p>
        </motion.div>

        <GitHubStar />
      </header>
      
      {/* Main Content Area */}
      <main className="w-full max-w-7xl flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {children}
      </main>

      {/* Concept Section */}
      <section className="w-full max-w-7xl mt-32 py-16 border-t border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">O que é Neumorfismo?</h2>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              O neumorfismo, também conhecido como interface suave, é uma tendência de design visual que combina elementos do esqueumorfismo e do design plano. Ele cria uma aparência suave, semelhante à de plástico extrudado, utilizando sombras sutis e contrastantes para gerar a ilusão de profundidade.
            </p>
            <p>
              Esse estilo imita objetos físicos, mantendo uma estética minimalista e moderna, frequentemente apresentando esquemas de cores monocromáticos com sombras e realces de baixo contraste.
            </p>
          </div>
        </div>
      </section>

      {/* Examples Section Placeholder */}
      <section className="w-full max-w-7xl mt-20 py-16 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-8 text-white">Exemplos e Inspiração</h2>
        <p className="text-white/60 mb-10">Explore a coleção de designs de Neumorfismo com alguns elementos em 3D.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* We will populate this in the next steps */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-3xl bg-white/5 border border-white/10 animate-pulse" />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-12 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all shadow-lg">
            VEJA MAIS
          </button>
        </div>
      </section>

      {/* More Tools Section Placeholder */}
      <section className="w-full max-w-7xl mt-20 py-16 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-4 text-white">Mais ferramentas</h2>
        <p className="text-white/60 mb-10">Recursos gratuitos de desenvolvimento front-end para ajudar você a criar seu próximo projeto.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Uiverse.io</h3>
            <p className="text-white/60 leading-relaxed">
              A maior biblioteca de elementos de interface de usuário de código aberto. Explore uma vasta coleção de belos elementos de interface, incluindo botões, caixas de seleção, cartões e muito mais.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">Cssbuttons.io</h3>
            <p className="text-white/60 leading-relaxed">
              Coleção com mais de 100 botões belíssimos e personalizáveis para o seu próximo projeto. Obtenha o código necessário para aprimorar seus projetos web com botões elegantes e funcionais.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-12 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all shadow-lg">
            VEJA MAIS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mt-32 py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Neumorphism.io</h3>
              <p className="text-white/50 mt-1">Gere designs neumórficos</p>
            </div>
            <div className="flex space-x-6">
              <Instagram className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
              <Github className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
              <Twitter className="text-white/40 hover:text-white cursor-pointer transition-colors" size={24} />
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest opacity-40">Recursos</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="hover:text-white cursor-pointer">Uiverse.io</li>
                <li className="hover:text-white cursor-pointer">Neumorfismo.io</li>
                <li className="hover:text-white cursor-pointer">Cssbuttons.io</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest opacity-40">Outros elementos</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="hover:text-white cursor-pointer">Caixas de seleção</li>
                <li className="hover:text-white cursor-pointer">Botões de rádio</li>
                <li className="hover:text-white cursor-pointer">Interruptores</li>
                <li className="hover:text-white cursor-pointer">Carregadeiras</li>
                <li className="hover:text-white cursor-pointer">Entradas</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center text-[10px] opacity-20 font-medium uppercase tracking-widest">
          <p>© 2026 Neumorphism.io Clone • Senior Vibecoding Edition</p>
        </div>
      </footer>
    </div>
  );
}
