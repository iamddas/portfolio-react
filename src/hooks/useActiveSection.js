import { useEffect, useRef, useState } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  // Use a ref so the scroll handler always reads the latest ids
  // without being listed in the effect's dependency array
  const idsRef = useRef(sectionIds);
  idsRef.current = sectionIds;

  useEffect(() => {
    let rafPending = false;

    const handleScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        let current = '';
        for (const id of idsRef.current) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 160) {
            current = id;
          }
        }
        setActiveSection(current);
        rafPending = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // stable — no deps needed thanks to ref

  return activeSection;
};
