import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  FileText,
  Copy,
  Check,
  Mail,
  MapPin,
  Github,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO, METRIC_HIGHLIGHTS } from '../data/portfolioData';

export const Hero = ({ onOpenResume, onCopyText, copiedKey }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState('profile');
  const [terminalCmd, setTerminalCmd] = useState('skills');

  const getTerminalOutput = () => {
    switch (terminalCmd) {
      case 'skills':
        return '["React.js", "Node.js", "MongoDB", "Express", "TypeScript", "AWS S3", "Capacitor.js"]';
      case 'status':
        return '● Actively open to Full-Time Software Engineer / Full Stack roles.';
      case 'contact':
        return `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}`;
      default:
        return 'Available commands: skills, status, contact';
    }
  };

  return (
    <motion.section
      id="hero"
      aria-label="Introduction & Overview"
      className="pt-28 pb-16 md:pt-36 md:pb-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Intro Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Main Hero Grid: Left content, Right interactive console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (7 cols): Headline, Bio, Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge & Location */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for roles</span>
                </span>

                <span className="text-neutral-400 dark:text-neutral-600">•</span>

                <span className="text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>

                <span className="text-neutral-400 dark:text-neutral-600">•</span>

                <span className="text-neutral-500 dark:text-neutral-400">
                  SE @ Agami Technologies
                </span>
              </div>

              {/* Primary Name & Developer Headline */}
              <div>
                <h1
                  id="hero-title"
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]"
                >
                  Bhupendra Kushwah
                </h1>
                <p className="font-mono text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-2 flex items-center gap-1">
                  <span>Full Stack Developer</span>
                  <span className="text-neutral-400 dark:text-neutral-600">/</span>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    React • Node.js • MongoDB
                  </span>
                  <span className="animate-pulse text-neutral-400 ml-0.5">_</span>
                </p>
              </div>

              {/* Bio statement */}
              <p
                id="hero-summary"
                className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed"
              >
                I build performant web applications and hybrid mobile platforms. Focused on
                database query optimization (<span className="text-neutral-900 dark:text-white font-medium">+80% API speed</span>),
                frontend architecture (<span className="text-neutral-900 dark:text-white font-medium">+60% faster render</span>),
                and production deployments on AWS.
              </p>

              {/* Minimal Action Controls & Quick Links */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Primary Action */}
                <a
                  id="hero-cta-case-studies"
                  href="#case-studies"
                  title="View Projects (press P)"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white transition-colors cursor-pointer"
                >
                  <span>View Projects</span>
                  <kbd className="hidden sm:inline-flex items-center justify-center w-4 h-4 text-[10px] font-mono rounded bg-white/20 dark:bg-black/20 text-white dark:text-neutral-900">
                    P
                  </kbd>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Resume Trigger */}
                <button
                  id="hero-cta-resume"
                  onClick={onOpenResume}
                  title="Open Resume (press R)"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Resume (PDF)</span>
                  <kbd className="hidden sm:inline-flex items-center justify-center w-4 h-4 text-[10px] font-mono rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    R
                  </kbd>
                </button>

                {/* Direct Email Copy with instant feedback */}
                <div className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-0.5">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-mono cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                    <span className="sm:hidden">Email</span>
                  </a>
                  <button
                    id="copy-hero-email-btn"
                    onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                    className="p-1.5 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    aria-label="Copy email address"
                    title="Copy email to clipboard"
                  >
                    {copiedKey === PERSONAL_INFO.email ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-1 sm:ml-auto">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Interactive Developer Console */}
            <div className="lg:col-span-5">
              <div
                id="hero-dev-console"
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-2xs font-mono text-xs"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
                    <span className="ml-2 text-neutral-400 text-[11px]">engineer.config.js</span>
                  </div>

                  {/* Tab Toggles */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveConsoleTab('profile')}
                      className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                        activeConsoleTab === 'profile'
                          ? 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                          : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                      }`}
                    >
                      config.js
                    </button>
                    <button
                      onClick={() => setActiveConsoleTab('bash')}
                      className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                        activeConsoleTab === 'bash'
                          ? 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                          : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                      }`}
                    >
                      interactive.sh
                    </button>
                  </div>
                </div>

                {/* Console Body */}
                <div className="p-4 text-neutral-700 dark:text-neutral-300 leading-relaxed overflow-x-auto">
                  {activeConsoleTab === 'profile' ? (
                    <div className="space-y-1">
                      <div>
                        <span className="text-violet-600 dark:text-violet-400">export const</span>{' '}
                        <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-500 dark:text-neutral-400">name:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">"{PERSONAL_INFO.name}"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-500 dark:text-neutral-400">role:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">"Full Stack Developer"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-500 dark:text-neutral-400">currentOrg:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">"Agami Technologies"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-500 dark:text-neutral-400">stack:</span>{' '}
                        <span className="text-neutral-700 dark:text-neutral-300">
                          [<span className="text-amber-600 dark:text-amber-400">"React.js"</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">"Node.js"</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">"MongoDB"</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">"AWS S3"</span>,{' '}
                          <span className="text-amber-600 dark:text-amber-400">"Capacitor.js"</span>]
                        </span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-neutral-500 dark:text-neutral-400">impact:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">"80% faster APIs • 60% faster page loads"</span>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-neutral-500">
                        <span>$ select command:</span>
                        <div className="flex items-center gap-1.5">
                          {['skills', 'status', 'contact'].map((cmd) => (
                            <button
                              key={cmd}
                              onClick={() => setTerminalCmd(cmd)}
                              className={`px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${
                                terminalCmd === cmd
                                  ? 'border-neutral-400 dark:border-neutral-600 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800'
                                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
                              }`}
                            >
                              ${cmd}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="pt-1 text-emerald-600 dark:text-emerald-400">
                        &gt; {getTerminalOutput()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Metrics Strip (Full width, balanced across 4 columns) */}
          <div
            id="hero-metrics-strip"
            className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
          >
            {METRIC_HIGHLIGHTS.map((metric, idx) => (
              <div key={idx} className="space-y-1 p-3.5 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60">
                <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {metric.label}
                </div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
