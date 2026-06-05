import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const Projects = () => {
  const [ref, isVisible] = useScrollObserver();

  return (
    <section id="projects" className="section bg-dark-50 dark:bg-dark-800/50">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">My work</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary dark:hover:border-primary transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-800 dark:to-dark-700">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={600}
                  height={340}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20 border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-dark-50">
                  {project.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-5 pt-4 border-t border-dark-200 dark:border-dark-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary font-semibold transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-dark-600 dark:text-dark-300 hover:text-accent dark:hover:text-accent font-semibold transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div variants={itemVariants} className="mt-14 text-center">
          <p className="text-sm text-dark-600 dark:text-dark-300 mb-5">
            Want to see more? Check out all my repos on GitHub.
          </p>
          <motion.a
            href="https://github.com/iamddas"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary"
          >
            <Github className="w-4 h-4" />
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
