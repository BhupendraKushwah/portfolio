import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, FileText, Send, Menu, X, Command } from 'lucide-react';

export const Navbar = ({
  darkMode,
  onToggleDarkMode,
  onOpenResume,
  onOpenShortcuts
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#case-studies', label: 'Projects', id: 'case-studies' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#skills', label: 'Stack', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'skills', 'experience', 'case-studies', 'about'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-50/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-neutral-200/70 dark:border-neutral-800/70'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Developer Moniker Logo */}
          <a
            id="navbar-brand-logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-neutral-900 dark:text-white cursor-pointer"
          >
            <span className="w-7 h-7 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center font-bold text-xs transition-transform group-hover:scale-105">
              &gt;_
            </span>
            <div className="flex items-center gap-1.5 font-semibold">
              <span>bhupendra</span>
              <span className="text-neutral-400 dark:text-neutral-500">.dev</span>
            </div>
          </a>

          {/* Desktop Navigation Links with animated gliding pill */}
          <nav
            id="desktop-navigation"
            aria-label="Desktop navigation"
            className="hidden md:flex items-center gap-1 bg-neutral-200/50 dark:bg-neutral-900/50 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 backdrop-blur-xs"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 dark:text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-2xs -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2">
            {onOpenShortcuts && (
              <button
                id="keyboard-shortcuts-nav-btn"
                onClick={onOpenShortcuts}
                className="flex items-center gap-1 p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
                aria-label="View keyboard shortcuts"
                title="Keyboard shortcuts: press '?'"
              >
                <Command className="w-3.5 h-3.5" />
                <kbd className="hidden lg:inline-flex items-center justify-center w-4 h-4 text-[10px] font-mono rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  ?
                </kbd>
              </button>
            )}

            <button
              id="theme-toggle-btn"
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode (T)' : 'Switch to dark mode (T)'}
              title={darkMode ? 'Switch to light mode (press T)' : 'Switch to dark mode (press T)'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="view-resume-btn-nav"
              onClick={onOpenResume}
              title="Open resume (press R)"
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              <span>Resume</span>
              <kbd className="hidden lg:inline-flex items-center justify-center w-4 h-4 text-[10px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                R
              </kbd>
            </button>

            <a
              id="navbar-contact-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              title="Jump to contact (press C)"
              className="group flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 dark:text-neutral-950 dark:bg-neutral-100 dark:hover:bg-white transition-colors cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Contact</span>
              <kbd className="hidden lg:inline-flex items-center justify-center w-4 h-4 text-[10px] font-mono rounded bg-neutral-800 text-neutral-300 dark:bg-neutral-200 dark:text-neutral-700">
                C
              </kbd>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              id="mobile-theme-toggle"
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-xl px-4 py-4 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
              {onOpenShortcuts && (
                <button
                  id="mobile-shortcuts-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShortcuts();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer"
                >
                  <Command className="w-3.5 h-3.5" />
                  <span>Keyboard Shortcuts (?)</span>
                </button>
              )}
              <button
                id="mobile-view-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>Resume (PDF)</span>
              </button>
              <a
                id="mobile-contact-cta"
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg text-white bg-neutral-900 dark:text-neutral-950 dark:bg-neutral-100 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
