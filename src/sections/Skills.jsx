import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';

export const Skills = () => {
  const [ref, isVisible] = useScrollObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: portfolioData.skills.frontend,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: portfolioData.skills.backend,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & DevOps',
      skills: portfolioData.skills.tools,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="section">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full`} />
              </div>

              {/* Skill tags */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="p-4 rounded-lg bg-white dark:bg-dark-800 border-2 border-dark-200 dark:border-dark-700 hover:border-primary dark:hover:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-semibold text-dark-900 dark:text-dark-50">
                      {skill}
                    </span>
                    {/* Animated progress bar */}
                    <div className="w-full h-1 bg-dark-100 dark:bg-dark-700 rounded-full mt-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: '85%' } : { width: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 dark:border-primary/30 text-center"
        >
          <p className="text-dark-700 dark:text-dark-300 mb-4">
            Interested in collaborating or learning more about my technical capabilities?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Schedule a Chat
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
