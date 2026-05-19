'use client';

import { useEffect, useState } from 'react';

export function ScreenSizeDetector() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  // Determine breakpoint based on width
  const getBreakpoint = (w: number): string => {
    if (w >= 1536) return '2xl';
    if (w >= 1280) return 'xl';
    if (w >= 1024) return 'lg';
    if (w >= 768) return 'md';
    if (w >= 640) return 'sm';
    return 'xs';
  };

  const breakpoint = getBreakpoint(width);

  return (
    <div className="fixed bottom-2 right-2 p-2 bg-background/80 backdrop-blur rounded border border-border text-sm z-50">
      Screen: {breakpoint} ({width}px)
    </div>
  );
}