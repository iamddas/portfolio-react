import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';

export const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="section bg-dark-50 dark:bg-dark-800/50">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 hover:border-primary dark:hover:border-primary transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-800 dark:to-dark-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20 border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-dark-900 dark:text-dark-50">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-dark-200 dark:border-dark-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary font-semibold"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-accent dark:hover:text-accent font-semibold"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            Want to see more? Check out my GitHub for all projects and contributions.
          </p>
          <motion.a
            href="https://github.com/iamddas"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
