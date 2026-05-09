import React from 'react';
import { NeumorphicBox } from '../ui/NeumorphicBox';
import { NeumorphismState } from '../../hooks/useNeumorphism';

interface ControlsProps {
  state: NeumorphismState;
  onUpdate: (key: keyof NeumorphismState, value: any) => void;
}

export const Controls = ({ state, onUpdate }: ControlsProps) => {
  return (
    <div className="theme-card p-5 flex flex-col gap-[15px] rounded-[24px]">
      <div className="flex flex-col gap-2">
        <label className="text-[12px] uppercase tracking-[0.05em] opacity-80">Escolha uma cor</label>
        <input 
          type="color" 
          value={state.color}
          onChange={(e) => onUpdate('color', e.target.value)}
          className="w-full h-[35px] border-none rounded-lg bg-shadow-dark p-[2px] cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-[12px] uppercase tracking-[0.05em] opacity-80">Distância</label>
          <span className="text-[10px] opacity-60">{state.distance}px</span>
        </div>
        <input 
          type="range" 
          min="0" max="50" 
          value={state.distance}
          onChange={(e) => onUpdate('distance', parseInt(e.target.value))}
          className="theme-slider cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-[12px] uppercase tracking-[0.05em] opacity-80">Intensidade</label>
          <span className="text-[10px] opacity-60">{state.intensity}</span>
        </div>
        <input 
          type="range" 
          min="0" max="1" step="0.01"
          value={state.intensity}
          onChange={(e) => onUpdate('intensity', parseFloat(e.target.value))}
          className="theme-slider cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-[12px] uppercase tracking-[0.05em] opacity-80">Desfoque</label>
          <span className="text-[10px] opacity-60">{state.blur}px</span>
        </div>
        <input 
          type="range" 
          min="0" max="100" 
          value={state.blur}
          onChange={(e) => onUpdate('blur', parseInt(e.target.value))}
          className="theme-slider cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-[12px] uppercase tracking-[0.05em] opacity-80">Raio de Borda</label>
          <span className="text-[10px] opacity-60">{state.radius}px</span>
        </div>
        <input 
          type="range" 
          min="0" max="150" 
          value={state.radius}
          onChange={(e) => onUpdate('radius', parseInt(e.target.value))}
          className="theme-slider cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[12px] uppercase tracking-[0.05em] opacity-80">Forma</label>
        <div className="grid grid-cols-4 gap-2">
          {([
            { id: 'rounded', icon: <div className="w-[15px] h-[15px] bg-text-primary rounded-[2px]" /> },
            { id: 'square', icon: <div className="w-[15px] h-[15px] border-2 border-text-primary rounded-none" /> },
            { id: 'circle', icon: <div className="w-[15px] h-[15px] bg-text-primary rounded-full" /> },
            { id: 'convex', icon: <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-bottom-[12px] border-bottom-text-primary" /> }
          ] as const).map((shape) => (
            <button
              key={shape.id}
              onClick={() => onUpdate('shape', shape.id === 'convex' ? 'rounded' : shape.id)}
              className={`aspect-square rounded-lg flex items-center justify-center transition-all ${
                state.shape === shape.id 
                ? 'neumorphic-inset-thick' 
                : 'shadow-[4px_4px_8px_var(--color-shadow-dark),-4px_-4px_8px_var(--color-shadow-light)]'
              }`}
            >
              {shape.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
