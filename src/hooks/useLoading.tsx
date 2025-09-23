'use client';

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingStates: Record<string, boolean>;
  setLoadingState: (key: string, loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const setLoadingState = (key: string, loading: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: loading
    }));
  };

  const contextValue: LoadingContextType = {
    isLoading,
    setIsLoading,
    loadingStates,
    setLoadingState
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

// Custom hook for component-specific loading states
export function useComponentLoading(key: string) {
  const { loadingStates, setLoadingState } = useLoading();

  return {
    isLoading: loadingStates[key] || false,
    setLoading: (loading: boolean) => setLoadingState(key, loading)
  };
}