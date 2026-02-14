import { motion } from 'framer-motion';
import {portfolioData} from "../utils/portfolioData.js";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-50 dark:bg-dark-950 text-dark-900 dark:text-dark-50 py-12 border-t border-dark-200 dark:border-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">DD</h3>
            <p className="text-dark-600 dark:text-dark-400">
              Full-stack developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-900 dark:text-dark-50">Quick Links</h4>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-900 dark:text-dark-50">Contact</h4>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              <li>
                <a href={`mailto:${portfolioData.email}`} className="hover:text-primary transition-colors">
                  {portfolioData.email}
                </a>
              </li>
              {/*<li>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +91 {portfolioData.phone}
                </a>
              </li>*/}
              <li>{portfolioData.location}</li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-200 dark:border-dark-800 py-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center text-dark-600 dark:text-dark-400 text-sm"
        >
          <p>
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <p>
            Designed & built with{' '}
            <span className="text-red-500">♥</span>
            {' '}using React, Tailwind & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
