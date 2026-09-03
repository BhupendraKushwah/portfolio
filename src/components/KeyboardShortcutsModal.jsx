import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Command, Navigation, Moon, Sun, FileText, Send, HelpCircle } from 'lucide-react';

export const KeyboardShortcutsModal = ({
  isOpen,
  onClose,
  onTriggerShortcut,
  darkMode
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const shortcuts = [
    {
      keyLabel: 'C',
      action: 'Contact',
      description: 'Scroll to contact form and focus name input',
      category: 'Navigation',
      icon: <Send className="w-3.5 h-3.5 text-emerald-500" />
    },
    {
      keyLabel: 'R',
      action: 'Resume',
      description: 'Open interactive printable resume modal',
      category: 'Actions',
      icon: <FileText className="w-3.5 h-3.5 text-sky-500" />
    },
    {
      keyLabel: 'P',
      action: 'Projects',
      description: 'Jump to Case Studies & featured projects',
      category: 'Navigation',
      icon: <Navigation className="w-3.5 h-3.5 text-indigo-500" />
    },
    {
      keyLabel: 'S',
      action: 'Skills',
      description: 'Jump to Technical skills and stack categories',
      category: 'Navigation',
      icon: <Navigation className="w-3.5 h-3.5 text-violet-500" />
    },
    {
      keyLabel: 'E',
      action: 'Experience',
      description: 'Jump to Work history and education timeline',
      category: 'Navigation',
      icon: <Navigation className="w-3.5 h-3.5 text-amber-500" />
    },
    {
      keyLabel: 'A',
      action: 'About',
      description: 'Jump to About & engineering philosophy',
      category: 'Navigation',
      icon: <Navigation className="w-3.5 h-3.5 text-teal-500" />
    },
    {
      keyLabel: 'H',
      action: 'Top / Home',
      description: 'Smoothly scroll back to the top hero section',
      category: 'Navigation',
      icon: <Navigation className="w-3.5 h-3.5 text-neutral-400" />
    },
    {
      keyLabel: 'T',
      action: 'Toggle Theme',
      description: `Switch between dark and light themes (currently ${darkMode ? 'Dark' : 'Light'})`,
      category: 'Actions',
      icon: darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-blue-500" />
    },
    {
      keyLabel: '?',
      action: 'Shortcuts Guide',
      description: 'Toggle this keyboard shortcuts dialog',
      category: 'Actions',
      icon: <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
    },
    {
      keyLabel: 'Esc',
      action: 'Close',
      description: 'Dismiss active modal or overlay',
      category: 'Actions',
      icon: <X className="w-3.5 h-3.5 text-neutral-400" />
    }
  ];

  const navigationShortcuts = shortcuts.filter((s) => s.category === 'Navigation');
  const actionShortcuts = shortcuts.filter((s) => s.category === 'Actions');

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="keyboard-shortcuts-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="shortcuts-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/75 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  <Command className="w-4 h-4" />
                </span>
                <div>
                  <h2
                    id="shortcuts-dialog-title"
                    className="text-sm font-semibold text-neutral-900 dark:text-white"
                  >
                    Keyboard Shortcuts
                  </h2>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    Press any key or click to trigger directly
                  </p>
                </div>
              </div>
              <button
                id="close-shortcuts-modal-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close shortcuts dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content List */}
            <div className="p-5 max-h-[70vh] overflow-y-auto space-y-5">
              {/* Navigation Section */}
              <div className="space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium">
                  // Navigation
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {navigationShortcuts.map((s) => (
                    <button
                      key={s.keyLabel}
                      onClick={() => {
                        onTriggerShortcut(s.keyLabel.toLowerCase());
                        onClose();
                      }}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="p-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                          {s.icon}
                        </span>
                        <div>
                          <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                            {s.action}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                            {s.description}
                          </div>
                        </div>
                      </div>
                      <kbd className="inline-flex items-center justify-center min-w-6 h-6 px-1.5 text-xs font-mono font-semibold rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-2xs group-hover:scale-105 transition-transform">
                        {s.keyLabel}
                      </kbd>
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions Section */}
              <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-medium">
                  // Actions & Controls
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {actionShortcuts.map((s) => (
                    <button
                      key={s.keyLabel}
                      onClick={() => {
                        if (s.keyLabel === 'Esc') {
                          onClose();
                        } else {
                          onTriggerShortcut(s.keyLabel.toLowerCase());
                          if (s.keyLabel !== 'T') onClose();
                        }
                      }}
                      className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="p-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                          {s.icon}
                        </span>
                        <div>
                          <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                            {s.action}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                            {s.description}
                          </div>
                        </div>
                      </div>
                      <kbd className="inline-flex items-center justify-center min-w-6 h-6 px-1.5 text-xs font-mono font-semibold rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-2xs group-hover:scale-105 transition-transform">
                        {s.keyLabel}
                      </kbd>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <span>Shortcuts are inactive while typing in inputs</span>
              <span className="flex items-center gap-1 text-[11px]">
                <span>Press</span>
                <kbd className="px-1 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[10px]">
                  Esc
                </kbd>
                <span>to close</span>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
