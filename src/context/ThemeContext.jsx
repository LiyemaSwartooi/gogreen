import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved ? JSON.parse(saved) : prefersDark;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = {
    colors: {
      primary: {
        light: 'emerald',
        dark: 'teal',
      },
      secondary: {
        light: 'sky',
        dark: 'cyan',
      },
      accent: {
        light: 'violet',
        dark: 'purple',
      },
      background: isDark ? 'gray-900' : 'white',
      text: isDark ? 'gray-100' : 'gray-900',
      muted: isDark ? 'gray-400' : 'gray-600',
    },
    gradients: {
      primary: isDark 
        ? 'from-emerald-600 to-teal-600'
        : 'from-emerald-500 to-teal-500',
      secondary: isDark
        ? 'from-sky-600 to-cyan-600'
        : 'from-sky-500 to-cyan-500',
      accent: isDark
        ? 'from-violet-600 to-purple-600'
        : 'from-violet-500 to-purple-500',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
    },
    animations: {
      fast: 'duration-200',
      normal: 'duration-300',
      slow: 'duration-500',
      bounce: 'transition-all duration-300 hover:scale-105 active:scale-95',
      slide: 'transition-all duration-300 hover:-translate-y-1',
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Utility functions for theme
export const getThemeColor = (color, shade = 500) => {
  return `${color}-${shade}`;
};

export const getThemeGradient = (type = 'primary') => {
  return `bg-gradient-to-r from-${type}-500 to-${type}-600`;
};

export const getThemeShadow = (size = 'md') => {
  return `shadow-${size}`;
};

export const getThemeRounded = (size = 'md') => {
  return `rounded-${size}`;
};
