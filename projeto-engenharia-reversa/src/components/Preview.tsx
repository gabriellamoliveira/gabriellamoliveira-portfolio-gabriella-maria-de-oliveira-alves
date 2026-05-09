import React from 'react';
import { motion } from 'motion/react';

interface PreviewProps {
  background: string;
  boxShadow: string;
  radius: number;
  size: number;
}

export function Preview({ background, boxShadow, radius, size }: PreviewProps) {
  return (
    <div className="lg:col-span-7 flex items-center justify-center min-h-[500px] lg:min-h-0 relative group">
      {/* Decorative background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[85%] h-[85%] border-4 border-dashed border-white/10 rounded-[80px] animate-pulse" />
      </div>

      <motion.div 
        layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="relative flex items-center justify-center z-10"
        style={{ width: size, height: size }}
      >
        <div 
          className="w-full h-full transition-all duration-500 ease-out"
          style={{ 
            background, 
            boxShadow, 
            borderRadius: `${radius}px` 
          }}
        />
        
        {/* Size Indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-30 uppercase tracking-widest whitespace-nowrap">
          {size}px × {size}px • r:{radius}px
        </div>

        {/* Corner handles simulation (visual only) */}
        <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-white/10 border border-white/20 shadow-sm" />
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/10 border border-white/20 shadow-sm" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-white/10 border border-white/20 shadow-sm" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-white/10 border border-white/20 shadow-sm" />
      </motion.div>
    </div>
  );
}

