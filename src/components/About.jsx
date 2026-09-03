import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  const principles = [
    {
      tag: '01',
      title: 'Performance & API Tuning',
      desc: 'Achieved an 80% improvement in API response times through MongoDB indexing, aggregation pipeline restructuring, and REST caching.'
    },
    {
      tag: '02',
      title: 'Legacy Modernization',
      desc: 'Deconstructed rigid monolithic PHP systems into modular, responsive React.js SPAs with clear state boundaries.'
    },
    {
      tag: '03',
      title: 'Cross-Platform Mobile',
      desc: 'Engineered hybrid Android APK features via Capacitor.js, integrating native push notification mechanisms and encrypted file storage.'
    },
    {
      tag: '04',
      title: 'Cloud & Resilient Pipelines',
      desc: 'Configured AWS S3 buckets for secure institutional document storage paired with automated snapshot database backups.'
    }
  ];

  return (
    <motion.section
      id="about"
      aria-label="About Bhupendra Kushwah"
      className="py-16 md:py-20 border-t border-neutral-200/80 dark:border-neutral-800/80"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header */}
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            <span className="text-emerald-600 dark:text-emerald-400">&gt;</span>
            <span className="uppercase tracking-wider font-semibold">About & Engineering Focus</span>
          </div>

          {/* Narrative Overview + Principles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Software Engineer at <strong className="text-neutral-900 dark:text-white font-semibold">Agami Technologies</strong> with
                hands-on experience engineering scalable web applications and hybrid mobile platforms.
                Graduated with a Bachelor of Technology in Computer Science from <strong className="text-neutral-900 dark:text-white font-semibold">RGPV University</strong>.
              </p>
              <p>
                My engineering philosophy revolves around simplicity, performance discipline, and shipping real product value.
                Whether modernizing an educational ERP to handle multi-cycle student billing or building automated loan recovery CRM workflows,
                I focus on maintainable clean code and quantifiable performance wins.
              </p>
              <div className="p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 font-mono text-xs text-neutral-700 dark:text-neutral-300 space-y-1.5">
                <div className="text-neutral-400 dark:text-neutral-500">// Engineering Profile</div>
                <div>Role: <span className="font-semibold text-neutral-900 dark:text-white">Software Engineer (Full Stack)</span></div>
                <div>Focus: <span className="font-semibold text-neutral-900 dark:text-white">MERN • Mobile Hybrid • Cloud</span></div>
                <div>Experience: <span className="font-semibold text-neutral-900 dark:text-white">Agami Technologies (2024–Present)</span></div>
              </div>
            </div>

            {/* Core Principles Grid (Reduced side padding, spacious 7-column layout) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((item, idx) => (
                <motion.div
                  key={item.tag}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
                  className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 font-semibold">
                      // {item.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
