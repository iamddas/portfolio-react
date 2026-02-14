import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';
import {Mail, Phone, MapPin, Send, Check, Linkedin, Github} from 'lucide-react';

export const Contact = () => {
  const [ref, isVisible] = useScrollObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section id="contact" className="section bg-dark-50 dark:bg-dark-800/50">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-xl text-dark-600 dark:text-dark-300 mt-6 max-w-2xl">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Contact info cards */}
          {[
            {
              icon: Mail,
              title: 'Email',
              value: portfolioData.email,
              href: `mailto:${portfolioData.email}`,
              color: 'text-blue-500',
            },
            {
              icon: Linkedin,
              title: 'LinkedIn',
              // value: portfolioData.linkedin,
              href: portfolioData.linkedin,
              color: 'text-purple-500',
            },
            {
              icon: Github,
              title: 'Github',
              // value: portfolioData.github,
              href: portfolioData.github,
              color: 'text-pink-500',
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 hover:border-primary transition-all duration-300"
              >
                <Icon className={`w-8 h-8 ${contact.color} mb-4`} />
                <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {contact.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact form */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-dark-600 dark:text-dark-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-dark-200 dark:border-dark-700 focus:border-primary'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-dark-200 dark:border-dark-700 focus:border-primary'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none resize-none ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-dark-200 dark:border-dark-700 focus:border-primary'
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            You can also find me on social media
          </p>
          <div className="flex justify-center gap-6">
            {portfolioData.socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white hover:shadow-lg transition-all"
                aria-label={link.label}
              >
                <span className="text-lg font-bold">
                  {link.icon === 'Github' && '→'}
                  {link.icon === 'Linkedin' && 'in'}
                  {link.icon === 'Twitter' && '𝕏'}
                  {link.icon === 'Mail' && '@'}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
