import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Command } from 'lucide-react';

export const ShortcutHUD = ({ activeShortcut, onOpenShortcuts }) => {
  return (
    <>
      {/* Transient Keypress Feedback Pill (Bottom Center) */}
      <div
        id="shortcut-hud-container"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        aria-live="polite"
      >
        <AnimatePresence>
          {activeShortcut && (
            <motion.div
              key={`${activeShortcut.key}-${activeShortcut.label}`}
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-900/90 dark:bg-neutral-100/90 text-white dark:text-neutral-900 shadow-xl backdrop-blur-md font-mono text-xs"
            >
              <kbd className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 font-bold text-[11px] border border-neutral-700 dark:border-neutral-300">
                {activeShortcut.key}
              </kbd>
              <span className="font-sans font-medium text-xs">
                {activeShortcut.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Bottom-Left Shortcuts Trigger Pill */}
      <div className="fixed bottom-5 left-4 sm:left-6 z-30 hidden sm:block">
        <button
          id="floating-shortcuts-trigger-btn"
          onClick={onOpenShortcuts}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200/90 dark:border-neutral-800/90 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all text-xs font-mono cursor-pointer"
          aria-label="View keyboard shortcuts"
          title="Keyboard shortcuts: press '?' anytime"
        >
          <Command className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors" />
          <span className="font-sans text-[11px] font-medium hidden md:inline">Shortcuts</span>
          <kbd className="inline-flex items-center justify-center min-w-4 h-4 px-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] border border-neutral-200 dark:border-neutral-700">
            ?
          </kbd>
        </button>
      </div>
    </>
  );
};
