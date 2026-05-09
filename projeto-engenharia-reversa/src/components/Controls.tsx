import React from 'react';
import { NeumorphismState } from '../hooks/useNeumorphism';
import { Square, Circle, Box, Layers, RotateCcw } from 'lucide-react';

interface ControlsProps {
  state: NeumorphismState;
  onUpdate: (updates: Partial<NeumorphismState>) => void;
  onReset: () => void;
  getStyle: (type?: 'flat' | 'pressed', factor?: number) => React.CSSProperties;
}

export function Controls({ state, onUpdate, onReset, getStyle }: ControlsProps) {
  const shapes: { id: NeumorphismState['shape']; icon: React.ReactNode; label: string }[] = [
    { id: 'flat', icon: <Square size={16} />, label: 'Elevado' },
    { id: 'concave', icon: <Box size={16} />, label: 'Côncavo' },
    { id: 'convex', icon: <Layers size={16} />, label: 'Convexo' },
    { id: 'pressed', icon: <Circle size={16} />, label: 'Insetado' },
  ];

  return (
    <div 
      className="lg:col-span-5 space-y-8 p-8 border border-white/5 transition-all duration-300 rounded-[40px]"
      style={getStyle('flat', 0.5)}
    >
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <label className="block text-xs font-bold opacity-50 uppercase tracking-widest">Cor Base</label>
          <div className="flex items-center space-x-3">
            <input 
              type="color" 
              value={state.color}
              onChange={(e) => onUpdate({ color: e.target.value })}
              className="w-10 h-10 rounded-full cursor-pointer bg-transparent border-2 border-white/10 overflow-hidden"
            />
            <span className="font-mono text-sm font-bold opacity-60 uppercase">{state.color}</span>
          </div>
        </div>
        
        <button 
          onClick={onReset}
          className="p-3 rounded-full transition-all hover:scale-110 active:scale-95"
          style={getStyle('flat', 0.2)}
        >
          <RotateCcw size={18} className="opacity-70" />
        </button>
      </div>

      <div className="space-y-6">
        <ControlSlider 
          label="Tamanho" 
          value={state.size} 
          min={50} 
          max={450} 
          onChange={(v) => onUpdate({ size: v })} 
        />
        <ControlSlider 
          label="Raio de Borda" 
          value={state.radius} 
          min={0} 
          max={state.size / 2} 
          onChange={(v) => onUpdate({ radius: v })} 
        />
        <ControlSlider 
          label="Distância" 
          value={state.distance} 
          min={0} 
          max={50} 
          onChange={(v) => onUpdate({ distance: v })} 
        />
        <ControlSlider 
          label="Intensidade" 
          value={state.intensity} 
          min={0.01} 
          max={0.6} 
          step={0.01}
          onChange={(v) => onUpdate({ intensity: v })} 
        />
        <ControlSlider 
          label="Desfoque (Blur)" 
          value={state.blur} 
          min={0} 
          max={100} 
          onChange={(v) => onUpdate({ blur: v })} 
        />
      </div>

      <div className="space-y-4">
        <label className="block text-xs font-bold opacity-50 uppercase tracking-widest">Tipo de Estilo</label>
        <div className="grid grid-cols-2 gap-4">
          {shapes.map((s) => (
            <button
              key={s.id}
              onClick={() => onUpdate({ shape: s.id })}
              className={`flex items-center justify-center space-x-2 py-3 px-4 text-xs font-bold transition-all duration-200 rounded-2xl ${
                state.shape === s.id 
                  ? 'text-white scale-[0.98]' 
                  : 'text-white/50 hover:text-white'
              }`}
              style={getStyle(state.shape === s.id ? 'pressed' : 'flat', 0.3)}
            >
              {s.icon}
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

function ControlSlider({ label, value, min, max, step = 1, onChange }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium opacity-60">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
      />
    </div>
  );
}
