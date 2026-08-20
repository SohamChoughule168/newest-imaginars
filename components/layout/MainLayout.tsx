'use client';

import { ReactNode } from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/footer/Footer';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-canvas text-text-primary font-body antialiased', className)}>
      <Navigation />
      <ErrorBoundary>
        <main id="main-content" className="relative" role="main">
          {children}
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}