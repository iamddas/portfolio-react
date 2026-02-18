import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ParticleBackground } from '../components';

export const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background gradient and particles */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container-max text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
        >
          <span className="text-primary font-semibold text-sm">Welcome to my portfolio</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">I'm</span>
          <span className="gradient-text block">Debasish Das</span>
          <span className="text-dark-600 dark:text-dark-400 block text-2xl sm:text-3xl lg:text-4xl font-normal mt-4">
            Software Engineer (Frontend-leaning Full Stack)
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mb-8"
        >
            I design and build thoughtful web experiences from interface to API.
            Working primarily with React and TypeScript, backed by Spring Boot services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(37, 99, 235, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-gradient"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-primary opacity-60 hover:opacity-100" />
      </motion.button>
    </section>
  );
};
