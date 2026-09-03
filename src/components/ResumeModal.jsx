import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Printer
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATION,
  CASE_STUDIES,
  SKILL_CATEGORIES
} from '../data/portfolioData';

export const ResumeModal = ({
  isOpen,
  onClose,
  onCopyText,
  copiedKey
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        id="resume-modal-card"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden print:m-0 print:p-0 print:border-none print:shadow-none print:max-h-none"
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 print:hidden font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">&gt;</span>
            <span className="text-neutral-900 dark:text-white font-semibold">
              resume_bhupendra_kushwah.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium rounded-lg text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-neutral-900 dark:text-neutral-100 font-sans space-y-6 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Full Stack Developer • React.js • Node.js • MongoDB
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-300 mt-2 font-mono">
              <a href={`tel:${PERSONAL_INFO.rawPhone}`} className="hover:underline">
                {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1.5">
              // Summary
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">
              // Technical Skills
            </div>
            <div className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-neutral-900 dark:text-white min-w-44 text-xs font-mono">
                    {cat.category}:
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-3">
              // Professional Experience
            </div>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                      {exp.role} <span className="font-normal text-neutral-500">— {exp.company}</span>
                    </span>
                    <span className="font-mono text-xs text-neutral-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-300 space-y-1 pt-1">
                    {exp.highlights.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Production Projects */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-3">
              // Featured Case Studies
            </div>
            <div className="space-y-3">
              {CASE_STUDIES.map((study) => (
                <div key={study.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                      {study.title}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-400">{study.period}</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">
                    {study.summary}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-500">
                    Stack: {study.techStack.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">
              // Education
            </div>
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white">{edu.degree}</span>
                  <span className="text-neutral-600 dark:text-neutral-400"> — {edu.institution}</span>
                </div>
                <span className="font-mono text-neutral-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
