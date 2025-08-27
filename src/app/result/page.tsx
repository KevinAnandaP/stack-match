'use client';

import { Suspense } from 'react';
import ResultContent from './ResultContent';
import PageTransition from '@/components/PageTransition';

export default function Result() {
  return (
    <PageTransition>
      <Suspense fallback={
        <div className="min-h-screen bg-[#1c1a5e] flex items-center justify-center px-4">
          <div className="text-lg sm:text-xl text-white text-center">Loading result...</div>
        </div>
      }>
        <ResultContent />
      </Suspense>
    </PageTransition>
  );
}
