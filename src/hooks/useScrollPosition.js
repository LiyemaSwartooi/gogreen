import { useState, useEffect, useCallback } from 'react';

const useScrollPosition = (options = {}) => {
  const {
    threshold = 0,
    sectionIds = [],
    throttleMs = 100,
    offset = 0,
  } = options;

  const [scrollData, setScrollData] = useState({
    scrolled: false,
    scrollY: 0,
    scrollDirection: 'up',
    activeSection: null,
    progress: 0,
    isAtTop: true,
    isAtBottom: false,
    metrics: {
      velocity: 0,
      acceleration: 0,
    },
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    setScrollData(prevData => ({
      ...prevData,
      scrolled: currentScrollY > threshold,
      scrollY: currentScrollY,
      scrollDirection: currentScrollY > prevData.scrollY ? 'down' : 'up',
      progress: Math.min((currentScrollY / maxScroll) * 100, 100),
      isAtTop: currentScrollY <= offset,
      isAtBottom: Math.abs(maxScroll - currentScrollY) <= offset,
    }));
  }, [threshold, offset]);

  useEffect(() => {
    const throttledScroll = () => {
      let waiting = false;
      return () => {
        if (!waiting) {
          waiting = true;
          setTimeout(() => {
            handleScroll();
            waiting = false;
          }, throttleMs);
        }
      };
    };

    const throttled = throttledScroll();
    window.addEventListener('scroll', throttled, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttled);
  }, [handleScroll, throttleMs]);

  return scrollData;
};

export default useScrollPosition;
