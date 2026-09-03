import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

export const CaseStudyModal = ({
  caseStudy,
  onClose,
  onOpenContact
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        id="case-study-modal-content"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {caseStudy.category}
              </span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="text-neutral-500">{caseStudy.period}</span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {caseStudy.liveStatus}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {caseStudy.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              {caseStudy.subtitle}
            </p>
          </div>

          <button
            id="close-case-study-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          {/* Tech Stack */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">
              // Tech Stack & Tooling
            </div>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="font-mono text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-[11px] text-neutral-500 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* The Engineering Challenge */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
              {caseStudy.challenge.title}
            </h3>
            <p className="leading-relaxed">
              {caseStudy.challenge.description}
            </p>
            <div className="pt-2 space-y-1.5 font-mono text-xs text-neutral-600 dark:text-neutral-400">
              {caseStudy.challenge.painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">!</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Solution */}
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
              {caseStudy.solution.title}
            </h3>
            <p className="leading-relaxed">
              {caseStudy.solution.description}
            </p>
            <ul className="pt-2 space-y-2 text-neutral-700 dark:text-neutral-300">
              {caseStudy.solution.architecturalHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-mono mt-0.5">&gt;</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Modular Features */}
          <div className="space-y-3 pt-2">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold">
              // Core Engineered Modules
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-neutral-900 dark:text-white">
                      {feat.title}
                    </span>
                    {feat.badge && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between gap-3">
          <button
            id="modal-close-action-btn"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-medium rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
          >
            Close
          </button>
          <button
            id="modal-discuss-project-btn"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white transition-colors cursor-pointer"
          >
            Discuss Architecture
          </button>
        </div>
      </motion.div>
    </div>
  );
};
