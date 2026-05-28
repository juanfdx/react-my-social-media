import { create } from 'zustand';

type ThemeState = {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (value: boolean) => void;
};

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  const systemPrefersDark =
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  return saved ? saved === 'dark' : systemPrefersDark;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  isDark: getInitialTheme(),

  toggleTheme: () => {
    const next = !get().isDark;
    set({ isDark: next });

    localStorage.setItem('theme', next ? 'dark' : 'light');

    document.documentElement.dataset.theme = next ? 'dark' : '';
  },

  setTheme: (value: boolean) => {
    set({ isDark: value });

    localStorage.setItem('theme', value ? 'dark' : 'light');

    document.documentElement.dataset.theme = value ? 'dark' : '';
  },
}));