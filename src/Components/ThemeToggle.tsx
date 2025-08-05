import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../Styles/ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="theme-toggle-container">
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme selector"
        style={{
          backgroundColor: currentTheme.colors.primary,
          color: currentTheme.colors.accent,
          borderRadius: currentTheme.shapes.borderRadius,
          fontFamily: currentTheme.fonts.primary
        }}
      >
        🎨
      </button>

      {/* Theme Selector Panel */}
      {isOpen && (
        <div className="theme-selector-panel">
          <div className="theme-selector-header">
            <h3 style={{ 
              color: currentTheme.colors.text,
              fontFamily: currentTheme.fonts.heading
            }}>
              Choose Theme
            </h3>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              style={{ color: currentTheme.colors.text }}
            >
              ✕
            </button>
          </div>
          
          <div className="theme-options">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`theme-option ${currentTheme.id === theme.id ? 'active' : ''}`}
                onClick={() => handleThemeChange(theme.id)}
                style={{
                  borderColor: currentTheme.colors.border,
                  backgroundColor: currentTheme.id === theme.id ? currentTheme.colors.primary : 'transparent',
                  borderRadius: currentTheme.shapes.borderRadius,
                  fontFamily: currentTheme.fonts.primary
                }}
              >
                <div className="theme-preview">
                  <div
                    className="theme-color-preview"
                    style={{
                      background: theme.colors.floatingCircle.background,
                      borderRadius: theme.shapes.borderRadius
                    }}
                  />
                  <div
                    className="theme-doodle-preview"
                    style={{
                      backgroundColor: theme.colors.doodle.color,
                      borderRadius: theme.shapes.borderRadius
                    }}
                  />
                </div>
                <div className="theme-info">
                  <h4 style={{ 
                    color: currentTheme.id === theme.id ? currentTheme.colors.accent : currentTheme.colors.text,
                    fontFamily: currentTheme.fonts.heading
                  }}>
                    {theme.name}
                  </h4>
                  <p style={{ 
                    color: currentTheme.id === theme.id ? currentTheme.colors.accent : currentTheme.colors.textSecondary,
                    fontFamily: currentTheme.fonts.secondary
                  }}>
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle; 