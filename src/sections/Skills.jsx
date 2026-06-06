import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend',        accent: '#3b82f6' },
  { key: 'backend',  label: 'Backend',          accent: '#8208f6' },
  { key: 'database', label: 'Database',         accent: '#10b981' },
    { key: 'cloud', label: 'Cloud',         accent: '#b310b9' },
  { key: 'tools',    label: 'Tools & DevOps',   accent: '#f97316' },
  { key: 'practices',label: 'Practices',        accent: '#eab308' },
];

export const Skills = () => {
  const [ref, isVisible] = useScrollObserver();

  return (
    <section id="skills" className="section">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Grid — 1→2→3 cols, never squishes at md */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.key}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary dark:hover:border-primary transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.accent }}
                />
                <h3 className="text-base font-bold text-dark-900 dark:text-dark-50">
                  {cat.label}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors duration-200 cursor-default"
                    style={{
                      backgroundColor: `${cat.accent}14`,
                      borderColor: `${cat.accent}40`,
                      color: cat.accent,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA card — fills remaining space in the grid row */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 dark:border-primary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p className="font-semibold text-dark-900 dark:text-dark-50 mb-1">Interested in collaborating?</p>
              <p className="text-sm text-dark-600 dark:text-dark-400">
                I'm always open to learning, building, and solving interesting problems.
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
        </div>
      </motion.div>
    </section>
  );
};
