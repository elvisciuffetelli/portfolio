'use client';

import { ReactNode, useState, useEffect } from 'react';

interface LoadingWrapperProps {
  children: ReactNode;
  skeleton: ReactNode;
  delay?: number;
  isLoading?: boolean;
}

export function LoadingWrapper({
  children,
  skeleton,
  delay = 1000,
  isLoading: externalLoading
}: LoadingWrapperProps) {
  const [internalLoading, setInternalLoading] = useState(true);
  const isLoading = externalLoading !== undefined ? externalLoading : internalLoading;

  useEffect(() => {
    if (externalLoading === undefined) {
      const timer = setTimeout(() => {
        setInternalLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, externalLoading]);

  return isLoading ? <>{skeleton}</> : <>{children}</>;
}