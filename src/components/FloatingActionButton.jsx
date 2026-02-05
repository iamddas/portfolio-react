import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks';

export const FloatingActionButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating menu */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Menu items */}
        <motion.div
          animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-20 right-0 flex flex-col gap-3"
          pointerEvents={isOpen ? 'auto' : 'none'}
        >
          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full bg-dark-100 dark:bg-dark-800 shadow-lg hover:shadow-xl flex items-center justify-center text-dark-900 dark:text-dark-50"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          {/* Contact button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="w-12 h-12 rounded-full bg-secondary shadow-lg hover:shadow-xl flex items-center justify-center text-white"
            aria-label="Contact me"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.button>

          {/* Scroll to top */}
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-primary shadow-lg hover:shadow-xl flex items-center justify-center text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </motion.div>

        {/* Main toggle button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:shadow-xl flex items-center justify-center text-white"
        >
          <motion.div
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
};
