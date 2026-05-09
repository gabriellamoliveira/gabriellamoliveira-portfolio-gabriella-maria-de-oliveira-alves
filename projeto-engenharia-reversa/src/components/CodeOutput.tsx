import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeOutputProps {
  cssCode: string;
}

export function CodeOutput({ cssCode }: CodeOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mt-16 space-y-4">
      <div className="flex justify-between items-end px-4">
        <label className="text-xs font-bold opacity-40 uppercase tracking-widest">Código CSS Gerado</label>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-xs font-bold border border-white/5"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-green-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      
      <div className="relative group">
        <pre className="p-8 rounded-[40px] bg-black/20 backdrop-blur-md border border-white/5 overflow-x-auto font-mono text-sm leading-relaxed text-white/90 shadow-inner">
          <code>{cssCode}</code>
        </pre>
        
        {/* Decorative elements for the code block */}
        <div className="absolute top-6 left-8 flex space-x-1.5 opacity-20">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        <div className="absolute bottom-6 right-8 text-[10px] opacity-20 font-mono uppercase tracking-widest">
          Autoupdate: ON
        </div>
      </div>
    </div>
  );
}

