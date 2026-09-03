import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = ({ onOpenResume, onOpenShortcuts }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      id="site-footer"
      aria-label="Site Footer"
      className="border-t border-neutral-200/80 dark:border-neutral-800/80 py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <span>&copy; {new Date().getFullYear()} Bhupendra Kushwah</span>
            <span>•</span>
            <span>Noida / Gwalior, India</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            {onOpenShortcuts && (
              <button
                onClick={onOpenShortcuts}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                title="View keyboard shortcuts (?)"
              >
                <span>Shortcuts</span>
                <kbd className="px-1 text-[10px] rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  ?
                </kbd>
              </button>
            )}
            <button
              onClick={onOpenResume}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={scrollToTop}
              className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>top</span>
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
