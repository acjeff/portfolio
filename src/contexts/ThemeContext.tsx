import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
  floatingCircle: {
    background: string;
    border: string;
    shadow: string;
  };
  doodle: {
    color: string;
    animation: string;
  };
}

export interface ThemeFonts {
  primary: string;
  secondary: string;
  heading: string;
}

export interface ThemeShapes {
  borderRadius: string;
  floatingCircleShape: string;
  doodleShapes: string[];
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  shapes: ThemeShapes;
  description: string;
}

export const themes: Theme[] = [
  {
    id: 'original',
    name: 'Original',
    description: 'Your current clean and modern design',
    colors: {
      primary: '#fa6f6f',
      secondary: '#ff8a8a',
      accent: '#ffffff',
      background: '#ffffff',
      text: '#fa6f6f',
      textSecondary: '#666666',
      border: '#e8e8e8',
      shadow: 'rgba(250, 111, 111, 0.4)',
      floatingCircle: {
        background: 'linear-gradient(45deg, #fa6f6f, #ff8a8a, #fa6f6f)',
        border: '#fa6f6f',
        shadow: 'rgba(250, 111, 111, 0.4)'
      },
      doodle: {
        color: '#ffffff',
        animation: 'subtleTwinkle'
      }
    },
    fonts: {
      primary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      secondary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      heading: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    },
    shapes: {
      borderRadius: '5px',
      floatingCircleShape: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      doodleShapes: ['circle', 'square', 'triangle']
    }
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon lights and futuristic vibes',
    colors: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: '#0a0a0a',
      text: '#00ffff',
      textSecondary: '#888888',
      border: '#00ffff',
      shadow: 'rgba(0, 255, 255, 0.6)',
      floatingCircle: {
        background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
        border: '#00ffff',
        shadow: 'rgba(0, 255, 255, 0.8)'
      },
      doodle: {
        color: '#00ffff',
        animation: 'cyberpunkGlow'
      }
    },
    fonts: {
      primary: '"Orbitron", "Courier New", monospace',
      secondary: '"Orbitron", "Courier New", monospace',
      heading: '"Orbitron", "Courier New", monospace'
    },
    shapes: {
      borderRadius: '0px',
      floatingCircleShape: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      doodleShapes: ['square', 'diamond', 'cross']
    }
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Bold colors and comic book style',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#ffd23f',
      background: '#ffffff',
      text: '#ff6b35',
      textSecondary: '#666666',
      border: '#000000',
      shadow: 'rgba(255, 107, 53, 0.4)',
      floatingCircle: {
        background: 'linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f, #ff6b35)',
        border: '#000000',
        shadow: 'rgba(255, 107, 53, 0.6)'
      },
      doodle: {
        color: '#ff6b35',
        animation: 'popArtBounce'
      }
    },
    fonts: {
      primary: '"Comic Sans MS", "Comic Sans", cursive',
      secondary: '"Comic Sans MS", "Comic Sans", cursive',
      heading: '"Impact", "Arial Black", sans-serif'
    },
    shapes: {
      borderRadius: '20px',
      floatingCircleShape: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      doodleShapes: ['star', 'burst', 'zigzag']
    }
  },
  {
    id: 'modernart',
    name: 'Modern Art',
    description: 'Abstract and artistic expression',
    colors: {
      primary: '#e74c3c',
      secondary: '#3498db',
      accent: '#f1c40f',
      background: '#ecf0f1',
      text: '#2c3e50',
      textSecondary: '#7f8c8d',
      border: '#bdc3c7',
      shadow: 'rgba(231, 76, 60, 0.3)',
      floatingCircle: {
        background: 'linear-gradient(45deg, #e74c3c, #3498db, #f1c40f, #9b59b6)',
        border: '#2c3e50',
        shadow: 'rgba(231, 76, 60, 0.5)'
      },
      doodle: {
        color: '#e74c3c',
        animation: 'modernArtFlow'
      }
    },
    fonts: {
      primary: '"Helvetica Neue", Arial, sans-serif',
      secondary: '"Helvetica Neue", Arial, sans-serif',
      heading: '"Futura", "Helvetica Neue", sans-serif'
    },
    shapes: {
      borderRadius: '50%',
      floatingCircleShape: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      doodleShapes: ['circle', 'wave', 'spiral']
    }
  },
  {
    id: 'cartoony',
    name: 'Cartoony',
    description: 'Fun and playful cartoon style',
    colors: {
      primary: '#ff6b9d',
      secondary: '#4ecdc4',
      accent: '#ffe66d',
      background: '#f7f7f7',
      text: '#2d3436',
      textSecondary: '#636e72',
      border: '#ddd',
      shadow: 'rgba(255, 107, 157, 0.4)',
      floatingCircle: {
        background: 'linear-gradient(45deg, #ff6b9d, #4ecdc4, #ffe66d, #ff6b9d)',
        border: '#2d3436',
        shadow: 'rgba(255, 107, 157, 0.6)'
      },
      doodle: {
        color: '#ff6b9d',
        animation: 'cartoonWiggle'
      }
    },
    fonts: {
      primary: '"Fredoka One", "Comic Sans MS", cursive',
      secondary: '"Fredoka One", "Comic Sans MS", cursive',
      heading: '"Fredoka One", "Comic Sans MS", cursive'
    },
    shapes: {
      borderRadius: '25px',
      floatingCircleShape: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
      doodleShapes: ['heart', 'star', 'cloud']
    }
  }
];

export interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
  updateThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  const updateThemeColor = (color: string) => {
    setCurrentTheme(prevTheme => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        primary: color,
        text: color,
        shadow: color.replace(')', ', 0.4)').replace('rgb', 'rgba'),
        floatingCircle: {
          ...prevTheme.colors.floatingCircle,
          background: `linear-gradient(45deg, ${color}, ${color}dd, ${color})`,
          border: color,
          shadow: color.replace(')', ', 0.4)').replace('rgb', 'rgba')
        }
      }
    }));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes, updateThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}; 