import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';
import profileImage from '../assets/dd.jpg';

// Defined outside component — never recreated on re-render
const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const STATS = [
  { number: `${Math.max(new Date().getFullYear() - 2024, 1)}+`, label: 'Years Experience' },
  { number: '20+',   label: 'Projects Completed' },
  { number: '100%',  label: 'Client Satisfaction' },
  { number: '2',     label: 'Roles at TTS' },
];

export const About = () => {
  const [ref, isVisible] = useScrollObserver();

  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-800/50">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Who I am</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src={profileImage}
                alt="Debasish Das — profile photo"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative blob */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-secondary to-accent rounded-2xl opacity-20 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Bio + stats */}
          <motion.div variants={itemVariants}>
            <p className="text-base text-dark-700 dark:text-dark-300 mb-8 leading-relaxed">
              {portfolioData.about}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800"
                >
                  <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-dark-500 dark:text-dark-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
