import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';
import { Briefcase } from 'lucide-react';

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Experience = () => {
  const [ref, isVisible] = useScrollObserver();

  return (
    <section id="experience" className="section">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Career</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Left-aligned timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-10">
            {portfolioData.experience.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white dark:border-dark-900 shadow-md -translate-x-1/2" />

                {/* Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary dark:hover:border-primary transition-colors duration-300">
                  {/* Role & period */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
                      {item.role}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-4">
                    <Briefcase className="w-4 h-4" />
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20 border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 dark:border-primary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold mb-1">Open to opportunities</h3>
            <p className="text-sm text-dark-600 dark:text-dark-400">
              Looking for new challenges and collaborations — let's connect!
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex-shrink-0"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
