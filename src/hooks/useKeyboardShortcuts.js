import { useEffect } from 'react';

export function useKeyboardShortcuts(handlers) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Allow browser shortcuts like Cmd+C, Cmd+R, Ctrl+Shift+I, etc.
      if (e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }

      // Check if user is currently typing in an editable field
      const target = e.target;
      const isEditable =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target !== null && target.isContentEditable);

      // Escape key handles closing modals or blurring inputs
      if (e.key === 'Escape') {
        if (isEditable && target) {
          target.blur();
        }
        handlers.onCloseModals?.();
        return;
      }

      // If user is typing in a form field, don't hijack alphanumeric keys
      if (isEditable) {
        return;
      }

      const key = e.key.toLowerCase();

      switch (key) {
        case 'c': {
          e.preventDefault();
          handlers.onContact?.();
          handlers.onFeedback?.('C', 'Jumped to Contact');
          break;
        }
        case 'r': {
          e.preventDefault();
          handlers.onResume?.();
          handlers.onFeedback?.('R', 'Resume Opened');
          break;
        }
        case 'p': {
          e.preventDefault();
          handlers.onProjects?.();
          handlers.onFeedback?.('P', 'Jumped to Projects');
          break;
        }
        case 's': {
          e.preventDefault();
          handlers.onSkills?.();
          handlers.onFeedback?.('S', 'Jumped to Skills');
          break;
        }
        case 'e': {
          e.preventDefault();
          handlers.onExperience?.();
          handlers.onFeedback?.('E', 'Jumped to Experience');
          break;
        }
        case 'a': {
          e.preventDefault();
          handlers.onAbout?.();
          handlers.onFeedback?.('A', 'Jumped to About');
          break;
        }
        case 'h': {
          e.preventDefault();
          handlers.onHome?.();
          handlers.onFeedback?.('H', 'Jumped to Top');
          break;
        }
        case 't': {
          e.preventDefault();
          handlers.onToggleTheme?.();
          handlers.onFeedback?.('T', 'Theme Toggled');
          break;
        }
        case '?':
        case '/': {
          e.preventDefault();
          handlers.onToggleShortcuts?.();
          handlers.onFeedback?.('?', 'Shortcuts Guide');
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
