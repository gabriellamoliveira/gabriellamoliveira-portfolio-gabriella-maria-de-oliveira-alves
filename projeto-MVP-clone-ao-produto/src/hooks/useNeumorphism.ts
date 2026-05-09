import { useState } from 'react';

export type NeumorphismState = {
  size: number;
  radius: number;
  distance: number;
  intensity: number;
  blur: number;
  color: string;
  shape: 'square' | 'rounded' | 'circle';
  variant: 'flat' | 'inset' | 'convex' | 'concave';
};

export const useNeumorphism = (initialColor: string = '#562f54') => {
  const [state, setState] = useState<NeumorphismState>({
    size: 300,
    radius: 50,
    distance: 20,
    intensity: 0.15,
    blur: 60,
    color: initialColor,
    shape: 'rounded',
    variant: 'flat',
  });

  const update = (key: keyof NeumorphismState, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return { state, update };
};
