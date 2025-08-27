'use client';

import { Suspense } from 'react';
import ResultContent from './ResultContent';
import PageTransition from '@/components/PageTransition';

export default function Result() {
  return (
    <PageTransition>
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-xl text-gray-600">Loading result...</div>
        </div>
      }>
        <ResultContent />
      </Suspense>
    </PageTransition>
  );
}
