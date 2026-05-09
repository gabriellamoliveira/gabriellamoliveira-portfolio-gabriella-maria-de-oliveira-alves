import React from 'react';
import { motion } from 'motion/react';
import { NeumorphismState } from '../../hooks/useNeumorphism';
import { colorLuminance } from '../../lib/colors';

interface PreviewProps {
  state: NeumorphismState;
}

export const Preview = ({ state }: PreviewProps) => {
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

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          boxShadow,
          background,
          borderRadius
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="w-[280px] h-[280px]"
      />
    </div>
  );
};
