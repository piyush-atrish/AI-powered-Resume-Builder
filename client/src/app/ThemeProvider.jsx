import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

const presets = {
  emerald: {
    name: 'Emerald',
    primary: '#10b981',
    secondary: '#34d399',
    soft: 'rgba(16, 185, 129, 0.16)',
  },
  blue: {
    name: 'Blue',
    primary: '#2563eb',
    secondary: '#60a5fa',
    soft: 'rgba(37, 99, 235, 0.16)',
  },
  violet: {
    name: 'Violet',
    primary: '#7c3aed',
    secondary: '#a78bfa',
    soft: 'rgba(124, 58, 237, 0.16)',
  },
  rose: {
    name: 'Rose',
    primary: '#e11d48',
    secondary: '#fb7185',
    soft: 'rgba(225, 29, 72, 0.16)',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('resume-theme') || 'emerald');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('resume-dark-mode') === 'true');

  useEffect(() => {
    localStorage.setItem('resume-theme', theme);
    localStorage.setItem('resume-dark-mode', darkMode ? 'true' : 'false');

    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-dark', darkMode ? 'true' : 'false');
    root.classList.toggle('dark', darkMode);

    root.style.setProperty('--accent-primary', presets[theme].primary);
    root.style.setProperty('--accent-secondary', presets[theme].secondary);
    root.style.setProperty('--accent-soft', presets[theme].soft);
    root.style.setProperty('--surface', darkMode ? '#0f172a' : '#ffffff');
    root.style.setProperty('--surface-muted', darkMode ? '#111827' : '#f8fafc');
    root.style.setProperty('--border-color', darkMode ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.08)');
    root.style.setProperty('--text-primary', darkMode ? '#f8fafc' : '#0f172a');
    root.style.setProperty('--text-secondary', darkMode ? '#cbd5e1' : '#475569');
    root.style.setProperty('--bg-main', darkMode ? '#020617' : '#f8fafc');
  }, [theme, darkMode]);

  const value = useMemo(
    () => ({ theme, setTheme, darkMode, setDarkMode, presets }),
    [theme, darkMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }
  return context;
};
