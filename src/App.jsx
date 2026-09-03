import React, { useState, useEffect, useCallback, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { KeyboardShortcutsModal } from "./components/KeyboardShortcutsModal";
import { ShortcutHUD } from "./components/ShortcutHUD";
import { ToastContainer } from "./components/Toast";
import { BackgroundAtmosphere } from "./components/BackgroundAtmosphere";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";

export default function App() {
  // Dark mode state with localStorage persistence & system preference fallback
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      // return window.matchMedia("(prefers-color-scheme: dark)").matches;
      return true
    }
    return true;
  });

  // Modal states
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Transient shortcut HUD state
  const [activeShortcutFeedback, setActiveShortcutFeedback] = useState(null);
  const feedbackTimeoutRef = useRef(null);

  // Toast notifications
  const [toasts, setToasts] = useState([]);
  const [copiedKey, setCopiedKey] = useState(null);

  // Sync dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  // Toast trigger helper
  const addToast = useCallback((title, description, type = "success") => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, description, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Trigger transient feedback indicator
  const triggerShortcutFeedback = useCallback((key, label) => {
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }
    setActiveShortcutFeedback({ key, label });
    feedbackTimeoutRef.current = setTimeout(() => {
      setActiveShortcutFeedback(null);
    }, 1300);
  }, []);

  // Smooth scroll helper
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Keyboard shortcut handlers
  const handleContactShortcut = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    scrollToSection("contact");
    setTimeout(() => {
      const input = document.getElementById("contact-name-input");
      if (input) {
        input.focus();
      }
    }, 350);
  }, [scrollToSection]);

  const handleResumeShortcut = useCallback(() => {
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    setIsResumeOpen((prev) => !prev);
  }, []);

  const handleProjectsShortcut = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    scrollToSection("case-studies");
  }, [scrollToSection]);

  const handleSkillsShortcut = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    scrollToSection("skills");
  }, [scrollToSection]);

  const handleExperienceShortcut = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    scrollToSection("experience");
  }, [scrollToSection]);

  const handleAboutShortcut = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    scrollToSection("about");
  }, [scrollToSection]);

  const handleHomeShortcut = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleToggleShortcuts = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen((prev) => !prev);
  }, []);

  const handleCloseModals = useCallback(() => {
    setIsResumeOpen(false);
    setSelectedCaseStudy(null);
    setIsShortcutsOpen(false);
  }, []);

  // Register global keyboard shortcuts
  useKeyboardShortcuts({
    onContact: handleContactShortcut,
    onResume: handleResumeShortcut,
    onProjects: handleProjectsShortcut,
    onSkills: handleSkillsShortcut,
    onExperience: handleExperienceShortcut,
    onAbout: handleAboutShortcut,
    onHome: handleHomeShortcut,
    onToggleTheme: toggleDarkMode,
    onToggleShortcuts: handleToggleShortcuts,
    onCloseModals: handleCloseModals,
    hasOpenModal: isResumeOpen || Boolean(selectedCaseStudy) || isShortcutsOpen,
    onFeedback: triggerShortcutFeedback,
  });

  // Action dispatcher from the Shortcuts dialog directly
  const handleTriggerShortcutFromModal = useCallback(
    (key) => {
      switch (key.toLowerCase()) {
        case "c":
          handleContactShortcut();
          triggerShortcutFeedback("C", "Jumped to Contact");
          break;
        case "r":
          handleResumeShortcut();
          triggerShortcutFeedback("R", "Resume Opened");
          break;
        case "p":
          handleProjectsShortcut();
          triggerShortcutFeedback("P", "Jumped to Projects");
          break;
        case "s":
          handleSkillsShortcut();
          triggerShortcutFeedback("S", "Jumped to Skills");
          break;
        case "e":
          handleExperienceShortcut();
          triggerShortcutFeedback("E", "Jumped to Experience");
          break;
        case "a":
          handleAboutShortcut();
          triggerShortcutFeedback("A", "Jumped to About");
          break;
        case "h":
          handleHomeShortcut();
          triggerShortcutFeedback("H", "Jumped to Top");
          break;
        case "t":
          toggleDarkMode();
          triggerShortcutFeedback("T", "Theme Toggled");
          break;
        case "?":
          handleToggleShortcuts();
          break;
        default:
          break;
      }
    },
    [
      handleContactShortcut,
      handleResumeShortcut,
      handleProjectsShortcut,
      handleSkillsShortcut,
      handleExperienceShortcut,
      handleAboutShortcut,
      handleHomeShortcut,
      toggleDarkMode,
      handleToggleShortcuts,
      triggerShortcutFeedback,
    ],
  );

  const fallbackCopy = (text, label) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand("copy");
      setCopiedKey(text);
      addToast(
        `${label} Copied`,
        `Copied "${text}" to your clipboard.`,
        "success",
      );
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      addToast("Copy failed", "Please select and copy manually.", "error");
    }
    document.body.removeChild(el);
  };

  // Copy to clipboard helper with instant feedback
  const handleCopyText = useCallback(
    (text, label) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          () => {
            setCopiedKey(text);
            addToast(
              `${label} Copied`,
              `Copied "${text}" to your clipboard.`,
              "success",
            );
            setTimeout(() => setCopiedKey(null), 2500);
          },
          () => {
            fallbackCopy(text, label);
          },
        );
      } else {
        fallbackCopy(text, label);
      }
    },
    [addToast],
  );

  const scrollToContact = useCallback(() => {
    scrollToSection("contact");
  }, [scrollToSection]);

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-[#090b10] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950">
      {/* Engineered Atmospheric Background Pattern & Lighting */}
      <BackgroundAtmosphere />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Transient Keypress HUD & Bottom-Left Shortcut Trigger */}
      <ShortcutHUD
        activeShortcut={activeShortcutFeedback}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex-1">
        {/* Hero Section with Quick Contacts & Key Stats */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyText={handleCopyText}
          copiedKey={copiedKey}
        />

        {/* About & Engineering Philosophy */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Clear Project Case Studies Section (SCHEZY & MLOFLO) */}
        <CaseStudies
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* Core Technical Skills */}
        <Skills />

        {/* Career Experience & Education */}
        <Experience />

        {/* Contact Form with Integrated Social Links */}
        <Contact
          onCopyText={handleCopyText}
          copiedKey={copiedKey}
          onShowToast={addToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={scrollToContact}
      />

      {/* Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopyText={handleCopyText}
        copiedKey={copiedKey}
      />

      {/* Interactive Keyboard Shortcuts Cheat Sheet Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        onTriggerShortcut={handleTriggerShortcutFromModal}
        darkMode={darkMode}
      />
    </div>
  );
}
