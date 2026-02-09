import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';

export const Experience = () => {
  const [ref, isVisible] = useScrollObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="section">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12 md:space-y-16">
            {portfolioData.experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`md:grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:order-first' : ''}>
                  <div className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 hover:border-primary dark:hover:border-primary transition-all duration-300">
                    {/* Role and company */}
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-1">
                        {item.role}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {item.company}
                      </p>
                    </div>

                    {/* Period */}
                    <p className="text-sm text-dark-600 dark:text-dark-400 mb-4 font-medium">
                      {item.period}
                    </p>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skills used */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20 border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 dark:border-primary/30"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Open to opportunities</h3>
              <p className="text-dark-600 dark:text-dark-300">
                I'm actively looking for new challenges and collaborations. Let's connect!
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block justify-center md:justify-start"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
