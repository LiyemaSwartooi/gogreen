import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Prevent SSR mismatch
    setIsInitialized(true);
    
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    // Modern event listener
    const handler = (event) => {
      setMatches(event.matches);
    };

    // Add listener with error handling
    try {
      // Modern browsers
      mediaQuery.addEventListener('change', handler);
    } catch (err1) {
      try {
        // Legacy browsers
        mediaQuery.addListener(handler);
      } catch (err2) {
        console.error('MediaQueryList API not supported', err2);
      }
    }

    // Cleanup
    return () => {
      try {
        mediaQuery.removeEventListener('change', handler);
      } catch (err1) {
        try {
          mediaQuery.removeListener(handler);
        } catch (err2) {
          console.error('MediaQueryList API not supported', err2);
        }
      }
    };
  }, [query]);

  // Don't return a value until after hydration
  return isInitialized ? matches : false;
};

// Predefined breakpoints aligned with Tailwind CSS
export const breakpoints = {
  // Core breakpoints
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',

  // Theme preferences
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  highContrast: '(prefers-contrast: high)',

  // Device characteristics
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  touch: '(hover: none) and (pointer: coarse)',
  mouse: '(hover: hover) and (pointer: fine)',

  // Satellite data visualization optimized
  largeDisplay: '(min-width: 1920px)',
  ultrawide: '(min-width: 2560px) and (min-height: 1080px)',
  dataGrid: '(min-width: 1400px)',
  mapView: '(min-height: 800px)',
};

// Utility function to combine multiple queries
export const combineQueries = (...queries) => queries.join(' and ');

// Common composite queries
export const compositeQueries = {
  mobileLandscape: combineQueries(breakpoints.landscape, '(max-width: 767px)'),
  tabletPortrait: combineQueries(breakpoints.portrait, breakpoints.md),
  desktopRetina: combineQueries(breakpoints.lg, breakpoints.retina),
  dataVisualization: combineQueries(breakpoints.dataGrid, breakpoints.mapView),
};

export default useMediaQuery;
