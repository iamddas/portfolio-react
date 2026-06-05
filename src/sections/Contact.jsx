import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollObserver } from '../hooks';
import { portfolioData } from '../utils/portfolioData';
import { Mail, Send, Check, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'Email',
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
    accent: '#3b82f6',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'View Profile',
    href: portfolioData.linkedin,
    accent: '#0077b5',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'iamddas',
    href: portfolioData.github,
    accent: '#6366f1',
  },
];

const SOCIAL_ICON_MAP = { Github, Linkedin, Twitter, Mail, ExternalLink };

export const Contact = () => {
  const [ref, isVisible] = useScrollObserver();
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Name is required';
    if (!formData.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  e.email   = 'Please enter a valid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.trim().length < 10)
                                  e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const inputBase =
    'w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none transition-colors duration-200';

  return (
    <section id="contact" className="section bg-dark-50 dark:bg-dark-800/50">
      <motion.div
        ref={ref}
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Let's talk</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="flex flex-col p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 hover:border-primary dark:hover:border-primary transition-colors duration-300"
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${card.accent}18` }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.accent }} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-400 mb-1">
                  {card.title}
                </p>
                <p className="text-sm font-semibold text-dark-900 dark:text-dark-50 truncate">
                  {card.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Form */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-dark-600 dark:text-dark-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className={`${inputBase} ${errors.name ? 'border-red-500' : 'border-dark-200 dark:border-dark-700 focus:border-primary'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-dark-200 dark:border-dark-700 focus:border-primary'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-500' : 'border-dark-200 dark:border-dark-700 focus:border-primary'}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="mt-14 text-center">
          <p className="text-sm text-dark-500 dark:text-dark-400 mb-5">You can also find me on</p>
          <div className="flex justify-center gap-4">
            {portfolioData.socialLinks.map((link) => {
              const Icon = SOCIAL_ICON_MAP[link.icon] ?? ExternalLink;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-sm hover:shadow-md transition-shadow"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
