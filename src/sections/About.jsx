import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';
import profileImage from '../assets/dd.jpeg'; // Placeholder image path

export const About = () => {
  const [ref, isVisible] = useScrollObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-800/50">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >

              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">

                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-primary/30"
                    />
                  </div>
                </div>

              {/* Floating accent */}
              <motion.div
                className="absolute top-8 right-8 w-24 h-24 bg-accent rounded-full opacity-10"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-2xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Right side - Bio and highlights */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-8 leading-relaxed">
              {portfolioData.about}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { number: `${Math.max(new Date().getFullYear() - 2024, 0)}+`, label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '3', label: 'Team Lead' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8 inline-block"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
