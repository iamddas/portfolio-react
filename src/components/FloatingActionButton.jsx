import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Sun, Moon, X } from 'lucide-react';
import { useTheme } from '../hooks';

export const FloatingActionButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 500);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const btnBase = 'w-12 h-12 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow duration-200';

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-3">
      {/* Expanded actions */}
      <AnimatePresence>
        {isOpen && (
          <>
            {showScrollTop && (
              <motion.button
                key="scroll-top"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.18 }}
                onClick={scrollToTop}
                className={`${btnBase} bg-primary text-white`}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}

            <motion.button
              key="contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.18, delay: 0.04 }}
              onClick={scrollToContact}
              className={`${btnBase} bg-secondary text-white`}
              aria-label="Go to contact section"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.button>

            <motion.button
              key="theme"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.18, delay: 0.08 }}
              onClick={toggleTheme}
              className={`${btnBase} bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50`}
              aria-label="Toggle colour theme"
            >
              {theme === 'dark'
                ? <Moon className="w-5 h-5 text-indigo-400" />
                : <Sun className="w-5 h-5 text-yellow-500" />}
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main toggle */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(prev => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:shadow-xl flex items-center justify-center text-white"
        aria-label={isOpen ? 'Close menu' : 'Open quick actions'}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
};
