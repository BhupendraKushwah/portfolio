import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudies = ({ onSelectCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['All', 'EdTech & ERP', 'FinTech & CRM'];

  const filteredCaseStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      id="case-studies"
      aria-label="Featured Projects & Case Studies"
      className="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section Header with Category Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                <span className="text-emerald-600 dark:text-emerald-400">&gt;</span>
                <span className="uppercase tracking-wider font-semibold">Featured Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Engineering Case Studies
              </h2>
            </div>

            {/* Filter Pills with animated layout */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 self-start sm:self-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`filter-case-study-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      isActive
                        ? 'text-neutral-900 dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="caseStudyCat"
                        className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-md shadow-2xs -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Studies List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {filteredCaseStudies.map((study, idx) => {
              const isExpanded = expandedId === study.id;
              return (
                <motion.article
                  key={study.id}
                  id={`case-study-card-${study.id}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-7 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">
                          {study.category}
                        </span>
                        <span className="text-neutral-400 dark:text-neutral-600">•</span>
                        <span className="text-neutral-500 dark:text-neutral-400">{study.period}</span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{study.liveStatus}</span>
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        {study.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Brief Summary */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Minimal Metric Badges (Inline, clean) */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {study.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-800 text-xs"
                        >
                          <span className="font-mono font-bold text-neutral-900 dark:text-white">
                            {metric.value}
                          </span>
                          <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Architecture Snippet */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 space-y-3"
                        >
                          <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                            // Architectural Highlights
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                            {study.solution.architecturalHighlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2">
                                <span className="text-emerald-500 font-mono mt-0.5">&gt;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer: Tech Stack & Actions */}
                  <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => toggleExpand(study.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Less' : 'Architecture'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        id={`read-case-study-btn-${study.id}`}
                        onClick={() => onSelectCaseStudy(study)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-neutral-900 dark:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                      >
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
