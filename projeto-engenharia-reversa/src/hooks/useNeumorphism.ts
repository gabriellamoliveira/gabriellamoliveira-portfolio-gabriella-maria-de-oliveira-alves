import { useState, useMemo } from 'react';

export interface NeumorphismState {
  size: number;
  radius: number;
  distance: number;
  intensity: number;
  blur: number;
  shape: 'flat' | 'concave' | 'convex' | 'pressed';
  color: string;
}

export function useNeumorphism() {
  const [state, setState] = useState<NeumorphismState>({
    size: 300,
    radius: 50,
    distance: 20,
    intensity: 0.15,
    blur: 60,
    shape: 'flat',
    color: '#562f54',
  });

  const updateState = (updates: Partial<NeumorphismState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const reset = () => {
    setState({
      size: 300,
      radius: 50,
      distance: 20,
      intensity: 0.15,
      blur: 60,
      shape: 'flat',
      color: '#562f54',
    });
  };

  const colors = useMemo(() => {
    const color = state.color;
    
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 86, g: 47, b: 84 };
    };

    const rgbToHex = (r: number, g: number, b: number) => {
      const toHex = (c: number) => {
        const hex = Math.max(0, Math.min(255, Math.round(c))).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const rgb = hexToRgb(color);
    
    // Cálculos precisos de sombra baseados na intensidade
    const darkShadow = rgbToHex(
      rgb.r * (1 - state.intensity),
      rgb.g * (1 - state.intensity),
      rgb.b * (1 - state.intensity)
    );

    const lightShadow = rgbToHex(
      Math.min(255, rgb.r + (255 - rgb.r) * state.intensity),
      Math.min(255, rgb.g + (255 - rgb.g) * state.intensity),
      Math.min(255, rgb.b + (255 - rgb.b) * state.intensity)
    );

    const firstGradient = state.shape === 'convex' ? lightShadow : (state.shape === 'concave' ? darkShadow : color);
    const secondGradient = state.shape === 'convex' ? darkShadow : (state.shape === 'concave' ? lightShadow : color);

    return {
      base: color,
      darkShadow,
      lightShadow,
      firstGradient,
      secondGradient
    };
  }, [state.color, state.intensity, state.shape]);

  const boxShadow = useMemo(() => {
    const { distance, blur, shape } = state;
    const { darkShadow, lightShadow } = colors;
    
    if (shape === 'pressed') {
      return `inset ${distance}px ${distance}px ${blur}px ${darkShadow}, inset -${distance}px -${distance}px ${blur}px ${lightShadow}`;
    }
    return `${distance}px ${distance}px ${blur}px ${darkShadow}, -${distance}px -${distance}px ${blur}px ${lightShadow}`;
  }, [state.distance, state.blur, state.shape, colors]);

  const background = useMemo(() => {
    const { shape } = state;
    const { base, firstGradient, secondGradient } = colors;
    
    if (shape === 'concave' || shape === 'convex') {
      return `linear-gradient(145deg, ${firstGradient}, ${secondGradient})`;
    }
    return base;
  }, [state.shape, colors]);

  const cssCode = useMemo(() => {
    const { radius } = state;
    return `border-radius: ${radius}px;
background: ${background};
box-shadow: ${boxShadow};`;
  }, [state.radius, background, boxShadow]);

  const getNeumorphicStyle = (type: 'flat' | 'pressed' = 'flat', distanceFactor = 1) => {
    const dist = Math.round(state.distance * distanceFactor);
    const blr = Math.round(state.blur * distanceFactor);
    const { darkShadow, lightShadow } = colors;
    
    return {
      backgroundColor: state.color,
      borderRadius: `${state.radius}px`,
      boxShadow: type === 'pressed' 
        ? `inset ${dist}px ${dist}px ${blr}px ${darkShadow}, inset -${dist}px -${dist}px ${blr}px ${lightShadow}`
        : `${dist}px ${dist}px ${blr}px ${darkShadow}, -${dist}px -${dist}px ${blr}px ${lightShadow}`
    };
  };

  return {
    state,
    updateState,
    reset,
    colors,
    boxShadow,
    background,
    cssCode,
    getNeumorphicStyle
  };
}
