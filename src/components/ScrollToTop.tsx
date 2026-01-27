import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [location.pathname, location.search]);

  return null;
}
