'use client';

import { Info, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Demo Banner Component
 * 
 * Shows a dismissible banner at the top of the site to indicate
 * this is a demonstration project by InfiniTechnologies
 */
export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 relative z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Info className="w-5 h-5 shrink-0" />
            <p className="text-sm md:text-base">
              <strong className="font-semibold">Demo Site</strong>
              {' • '}
              This is a demonstration e-commerce platform built by{' '}
              <a 
                href="https://infinitechnologies.co.ke" 
                className="underline hover:text-blue-100 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                InfiniTechnologies
              </a>
              {'. '}
              <span className="hidden sm:inline">
                Need a site like this? Contact us for a quote.
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="shrink-0 p-1 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
