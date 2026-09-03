import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      aria-label="Professional Experience and Education"
      className="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-1">
              <span className="text-emerald-600 dark:text-emerald-400">&gt;</span>
              <span className="uppercase tracking-wider font-semibold">Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Experience & Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side overview / highlights summary */}
            <div className="lg:col-span-4 space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Over 1.5+ years of production experience shipping high-throughput web portals, payment modules, and multi-tenant ERP platforms.
              </p>
              <div className="p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 font-mono text-xs space-y-2 text-neutral-700 dark:text-neutral-300">
                <div className="text-neutral-400 dark:text-neutral-500">// Key Milestones</div>
                <div className="flex items-center justify-between">
                  <span>API Response:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">+80% faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Frontend Render:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">+60% boost</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bug Density:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">-40% issues</span>
                </div>
              </div>
            </div>

            {/* Right side timeline (8 cols) */}
            <div className="lg:col-span-8 relative border-l border-neutral-200 dark:border-neutral-800 ml-2 sm:ml-3 pl-6 sm:pl-8 space-y-10">
              {/* Work Experiences */}
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  id={`exp-item-${exp.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                  className="relative group"
                >
                  {/* Node indicator */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-neutral-50 dark:border-neutral-950 ${
                      idx === 0
                        ? 'bg-emerald-500 ring-4 ring-emerald-500/20'
                        : 'bg-neutral-300 dark:bg-neutral-700'
                    }`}
                  />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                      {exp.highlights.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-neutral-400 dark:text-neutral-600 font-mono mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Education Item */}
              {EDUCATION.map((edu) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15, ease: 'easeOut' }}
                  className="relative group pt-2"
                >
                  {/* Node indicator */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-3.5 w-3 h-3 rounded-full border-2 border-neutral-50 dark:border-neutral-950 bg-neutral-300 dark:bg-neutral-700" />

                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {edu.institution}
                      </span>
                      <span> • {edu.location}</span>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-1">
                      {edu.highlights.join(' ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
