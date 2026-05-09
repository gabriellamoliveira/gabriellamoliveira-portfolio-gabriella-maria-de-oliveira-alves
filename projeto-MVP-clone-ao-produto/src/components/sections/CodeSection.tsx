import React from 'react';
import { NeumorphismState } from '../../hooks/useNeumorphism';
import { colorLuminance } from '../../lib/colors';

interface CodeSectionProps {
  state: NeumorphismState;
}

export const CodeSection = ({ state }: CodeSectionProps) => {
  const lightColor = colorLuminance(state.color, state.intensity);
  const darkColor = colorLuminance(state.color, -state.intensity);
  
  const boxShadow = state.variant === 'inset' 
    ? `inset ${state.distance}px ${state.distance}px ${state.blur}px ${darkColor}, inset -${state.distance}px -${state.distance}px ${state.blur}px ${lightColor}`
    : `${state.distance}px ${state.distance}px ${state.blur}px ${darkColor}, -${state.distance}px -${state.distance}px ${state.blur}px ${lightColor}`;

  const background = state.variant === 'convex'
    ? `linear-gradient(145deg, ${lightColor}, ${darkColor})`
    : state.variant === 'concave'
    ? `linear-gradient(145deg, ${darkColor}, ${lightColor})`
    : state.color;

  const borderRadius = state.shape === 'circle' ? '50%' : state.shape === 'square' ? '0px' : `${state.radius}px`;

  const cssString = `border-radius: ${borderRadius};\nbackground: ${background};\nbox-shadow: ${boxShadow};`;

  return (
    <div className="bg-shadow-dark p-[15px] rounded-[12px] font-mono text-[13px] text-code-green relative border border-white/5 overflow-hidden group">
      <div className="whitespace-pre-wrap leading-relaxed">
        {cssString}
      </div>
      <button 
        onClick={() => navigator.clipboard.writeText(cssString)}
        className="absolute right-[10px] top-[10px] text-[10px] bg-accent text-white px-2 py-1 rounded cursor-pointer font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
      >
        COPY
      </button>
    </div>
  );
};
