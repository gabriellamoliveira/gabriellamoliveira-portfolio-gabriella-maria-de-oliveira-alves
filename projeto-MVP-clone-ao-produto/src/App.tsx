/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Star, Instagram, Twitter } from 'lucide-react';
import { useNeumorphism } from './hooks/useNeumorphism';
import { Controls } from './components/sections/Controls';
import { Preview } from './components/sections/Preview';
import { CodeSection } from './components/sections/CodeSection';

export default function App() {
  const { state, update } = useNeumorphism('#301259');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <header className="flex justify-end p-4 md:px-[30px] md:py-[15px]">
        <div className="bg-header-box text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-[13px] font-semibold shadow-[2px_2px_5px_rgba(0,0,0,0.2)]">
          <Github size={16} fill="#FF00FF" className="text-[#FF00FF]" />
          <div className="flex items-center gap-1 border-l border-white/20 pl-2">
            <Star size={14} fill="#f7d917" className="text-star" />
            <span className="font-bold">6079</span>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-[30px] px-4 md:px-[30px] pb-5 flex-1 min-h-0">
        <aside className="h-full">
          <Controls state={state} onUpdate={update} />
          
          <div className="mt-8 text-[11px] leading-[1.4] opacity-60 hidden lg:block space-y-4">
            <div>
              <strong>O que é Neumorfismo?</strong><br />
              O neumorfismo, também conhecido como interface suave, é uma tendência de design visual que combina elementos do esqueumorfismo e do design plano. Ele cria uma aparência suave, semelhante à de plástico extrudado, utilizando sombras sutis e contrastantes para gerar a ilusão de profundidade. Esse estilo imita objetos físicos, mantendo uma estética minimalista e moderna.
            </div>
          </div>
        </aside>

        <section className="flex flex-col gap-5 min-h-0">
          <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
            <Preview state={state} />
          </div>

          <CodeSection state={state} />

          {/* Examples Grid Section */}
          <div className="space-y-4 pt-10">
            <h3 className="text-xl font-bold opacity-90">Exemplos & Inspiração</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-[15px] items-center justify-between">
              <div className="example-item w-[45px] h-[45px] rounded-xl theme-card flex items-center justify-center text-[8px] uppercase font-bold text-center p-1 active:neumorphic-inset-thick cursor-pointer">Aperte-me</div>
              <div className="example-item w-[45px] h-[45px] rounded-xl theme-card flex items-center justify-center text-[8px] uppercase font-bold text-center p-1 cursor-pointer">Clique Aqui</div>
              <div className="example-item w-[45px] h-[45px] rounded-xl theme-card flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-transparent border-t-text-primary rounded-full animate-spin"></div>
              </div>
              <div className="example-item w-[45px] h-[45px] rounded-xl theme-card flex items-center justify-center neumorphic-inset-thick">
                <div className="w-4 h-4 rounded-sm bg-accent shadow-[0_0_8px_var(--color-accent)]" />
              </div>
              {/* Push Slider Example */}
              <div className="example-item w-[80px] h-[45px] rounded-xl theme-card flex items-center px-2">
                 <div className="w-6 h-6 rounded-lg bg-[#301259] shadow-inner flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                 </div>
                 <div className="flex-1 h-1 bg-white/5 mx-2 rounded-full" />
              </div>
              
              <button className="w-[120px] h-[45px] bg-accent rounded-[30px] font-bold text-[10px] flex items-center justify-center shadow-none uppercase tracking-widest text-white hover:brightness-110 active:scale-95 transition-all">
                VEJA MAIS
              </button>
            </div>
          </div>
          
          {/* Mais Ferramentas Section */}
          <section className="space-y-8 bg-shadow-dark/20 p-8 rounded-[30px] border border-white/5 mt-10">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Mais ferramentas</h3>
              <p className="text-[11px] opacity-60">Recursos gratuitos de desenvolvimento front-end para ajudar você a criar seu próximo projeto.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="theme-card p-6 rounded-2xl space-y-3 cursor-pointer hover:scale-[1.02] transition-transform">
                <h4 className="font-bold text-accent">Uiverse.io</h4>
                <p className="opacity-70 text-[11px] leading-relaxed">
                  A maior biblioteca de elementos de interface de usuário de código aberto. Explore uma vasta coleção de belos elementos de interface, incluindo botões, caixas de seleção, cartões e muito mais.
                </p>
              </div>
              <div className="theme-card p-6 rounded-2xl space-y-3 cursor-pointer hover:scale-[1.02] transition-transform">
                <h4 className="font-bold text-accent">Cssbuttons.io</h4>
                <p className="opacity-70 text-[11px] leading-relaxed">
                  Coleção com mais de 100 botões belíssimos e personalizáveis para o seu próximo projeto. Obtenha o código necessário para aprimorar seus projetos web com botões elegantes e funcionais.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-bg-primary px-8 py-3 rounded-xl theme-card font-bold text-[10px] tracking-widest uppercase">
                Veja Mais
              </button>
            </div>
          </section>

          {/* Sobre o SoftMorphic Section */}
          <section className="space-y-6 pt-10">
            <h3 className="text-2xl font-bold tracking-tight">Sobre o SoftMorphic</h3>
            <div className="space-y-4 opacity-70 text-[13px] leading-relaxed font-light">
              <p>
                O SoftMorphic é uma abordagem moderna de design que utiliza os princípios do neumorfismo para criar interfaces que parecem moldadas diretamente na superfície da tela. A proposta combina minimalismo, profundidade e consistência visual para entregar uma experiência mais natural ao usuário.
              </p>
              <p>
                Ao invés de elementos planos ou excessivamente destacados, o SoftMorphic aposta em equilíbrio: sombras suaves, iluminação estratégica e cores harmônicas que trabalham juntas para guiar a interação.
              </p>
            </div>
          </section>
        </section>
      </main>

      <footer className="p-4 md:px-[30px] md:py-[15px] flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/5 gap-8">
        <div className="space-y-4">
          <h2 className="text-[14px] font-bold">SoftMorphic.io</h2>
          <p className="text-[11px] opacity-50">Gere designs neumórficos</p>
          <div className="flex gap-4 opacity-70">
            <Instagram size={18} className="cursor-pointer hover:text-accent transition-colors" />
            <Github size={18} className="cursor-pointer hover:text-accent transition-colors" />
            <Twitter size={18} className="cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[40px] md:gap-[80px] text-[11px]">
          <div className="flex flex-col gap-1.5">
            <span className="font-bold opacity-40 uppercase tracking-[0.05em] mb-1">Recursos</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Uiverse.io</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Neumorfismo.io</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Cssbuttons.io</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-bold opacity-40 uppercase tracking-[0.05em] mb-1">Outros elementos</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Caixas de seleção</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Botões de rádio</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Interruptores</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Carregadeiras</span>
            <span className="cursor-pointer hover:opacity-100 opacity-70">Entradas</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
