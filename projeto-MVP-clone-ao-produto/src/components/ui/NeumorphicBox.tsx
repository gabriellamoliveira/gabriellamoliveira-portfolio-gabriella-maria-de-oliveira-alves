import React from 'react';
import { cn } from '../../lib/utils';

interface NeumorphicBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'inset' | 'convex' | 'concave';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  children?: React.ReactNode;
  className?: string;
}

export const NeumorphicBox = ({ 
  variant = 'flat', 
  rounded = '2xl', 
  children, 
  className,
  ...props 
}: NeumorphicBoxProps) => {
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  const variantClasses = {
    flat: 'neumorphic-flat',
    inset: 'neumorphic-inset',
    convex: 'neumorphic-convex',
    concave: 'neumorphic-concave',
  };

  return (
    <div 
      className={cn(
        variantClasses[variant],
        roundedClasses[rounded],
        'transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
