import React, { useState, useEffect } from 'react';
import {FiPlayCircle, FiDownload, FiMusic, FiGithub, FiMail, FiLinkedin, FiArrowUp, FiLink, FiArrowDown } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import '../Styles/RadialMenu.scss';

interface MenuItem {
  id: string;
  icon: any;
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 'email',
    icon: FiMail,
    label: 'Email',
    href: 'mailto:labaia33@gmail.com',
    external: true
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/acjefferies',
    external: true
  },
  {
    id: 'github',
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/acjeff',
    external: true
  },
  {
    id: 'music',
    icon: FiMusic,
    label: 'Music',
    href: 'https://open.spotify.com/artist/0O0SPhRVzekSaEHDxUvaUB',
    external: true
  },
  {
    id: 'game',
    icon: FiPlayCircle,
    label: 'Game',
    href: 'https://acjeff.github.io/deeper',
    external: true
  },
  {
    id: 'cv',
    icon: FiDownload,
    label: 'CV',
    href: './Alex-Jefferies-CV.pdf',
    download: true
  }
];

const RadialMenu: React.FC<{ isProjectPanelOpen: boolean }> = ({ isProjectPanelOpen }) => {
  const { currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  // Close radial menu when project panel opens, reopen when it closes
  useEffect(() => {
    if (isProjectPanelOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isProjectPanelOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.download) {
      // Create a temporary link for download
      const link = document.createElement('a');
      link.href = item.href;
      link.download = 'alexander-jefferies-cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setIsOpen(false);
  };

  return (
    <div className="radial-menu-container">
      <div className="radial-menu-button-container">
        {/* Menu Button */}
        <button
          className={`radial-menu-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          style={{
            '--brand-colour': currentTheme.colors.primary
          } as React.CSSProperties}
        >
          <div className="radial-menu-icon">
            {/* @ts-ignore */}
            {isOpen ? !isProjectPanelOpen ? <FiArrowUp /> : <FiArrowDown /> : <FiLink />}
          </div>
          <div className="menu-label">{`${isOpen ? 'Hide' : 'Links'}`}</div>

        </button>
      </div>

      {/* Radial Menu Items */}
      <div className={`radial-menu ${isOpen ? 'open' : ''}`}>
        {
          menuItems.map((item, index) => (
            <div
              key={item.id}
              className="menu-item"
              style={{
                '--item-index': index,
                '--total-items': menuItems.length
              } as React.CSSProperties}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.download) {
                    e.preventDefault();
                    handleItemClick(item);
                  }
                }}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="menu-item-link"
                title={item.label}
              >
                <span className="menu-item-icon">{React.createElement(item.icon, {})}</span>
                <span className="menu-item-label">{item.label}</span>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RadialMenu; 