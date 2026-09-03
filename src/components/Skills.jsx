import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Front-End Development', 'Back-End & API Services', 'Databases & Storage', 'Mobile, Cloud & Tooling'];

  const tabLabels = {
    'All': 'All',
    'Front-End Development': 'Frontend',
    'Back-End & API Services': 'Backend',
    'Databases & Storage': 'Databases',
    'Mobile, Cloud & Tooling': 'Cloud & Mobile'
  };

  const displayedCategories =
    activeTab === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeTab);

  return (
    <motion.section
      id="skills"
      aria-label="Technical Skills & Competencies"
      className="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section Header & Animated Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                <span className="text-emerald-600 dark:text-emerald-400">&gt;</span>
                <span className="uppercase tracking-wider font-semibold">Technical Arsenal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Skills & Technologies
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    id={`skill-tab-${tab.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      isActive
                        ? 'text-neutral-900 dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skillPill"
                        className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-md shadow-2xs -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {tabLabels[tab]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skill Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedCategories.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                className="p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs">#</span>
                    <span>{group.category}</span>
                  </h3>
                  <span className="font-mono text-[11px] text-neutral-400">
                    {group.skills.length} techs
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 transition-colors"
                    >
                      <span className="font-mono text-xs font-medium text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
