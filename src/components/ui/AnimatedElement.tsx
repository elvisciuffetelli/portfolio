'use client';

import { ReactNode, createElement } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/cn';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  className?: string;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimatedElement({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className,
  threshold = 0.1,
  as = 'div',
}: AnimatedElementProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold });

  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';
  const animationClass = isIntersecting ? `animate-${animation}` : 'opacity-0';

  return createElement(
    as,
    {
      ref,
      className: cn(animationClass, delayClass, className),
    },
    children
  );
}