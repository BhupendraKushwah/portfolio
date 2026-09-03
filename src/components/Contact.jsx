import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = ({
  onCopyText,
  copiedKey,
  onShowToast
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast(
        'Message Sent',
        `Thanks ${formData.name}! Your note has been received.`,
        'success'
      );
      setFormData({
        name: '',
        email: '',
        subject: 'Engineering Opportunity',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <motion.section
      id="contact"
      aria-label="Contact and Communication"
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
              <span className="uppercase tracking-wider font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Let's Build Something Together
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Available for full-time engineering roles, technical consultations, and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Direct Contact Info (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-4 shadow-2xs">
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  // Contact Channels
                </div>

                {/* Email Item */}
                <div className="space-y-1">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Email</div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-neutral-900 dark:text-white hover:underline truncate mr-2"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                      className="p-1 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                      title="Copy email"
                    >
                      {copiedKey === PERSONAL_INFO.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="space-y-1">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Phone</div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <a
                      href={`tel:${PERSONAL_INFO.rawPhone}`}
                      className="text-neutral-900 dark:text-white hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <button
                      onClick={() => onCopyText(PERSONAL_INFO.rawPhone, 'Phone number')}
                      className="p-1 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedKey === PERSONAL_INFO.rawPhone ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Location Item */}
                <div className="space-y-1">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Location</div>
                  <div className="text-xs font-mono text-neutral-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>

                {/* Socials */}
                <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 px-1">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Response time: &lt; 24 hours</span>
              </div>
            </motion.div>

            {/* Clean Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-7 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-4 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                    // Send a Direct Message
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                    <span>Shortcut:</span>
                    <kbd className="px-1 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                      C
                    </kbd>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name-input" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Your Name
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors cursor-pointer"
                  >
                    <option value="Engineering Opportunity">Full-Time Engineering Opportunity</option>
                    <option value="Consulting / Freelance">Technical Consulting / Project</option>
                    <option value="General Question">General Developer Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, team, or challenge..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 dark:text-neutral-950 dark:bg-neutral-100 dark:hover:bg-white transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : submitted ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Message Received!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
