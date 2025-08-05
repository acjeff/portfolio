import React, { useState, useEffect } from 'react';
import '../Styles/ProjectSideNavigation.scss';

interface ProjectSection {
  header: string;
}

interface ProjectSideNavigationProps {
  sections: ProjectSection[];
  currentSection: number;
  onSectionChange: (index: number) => void;
}

const ProjectSideNavigation: React.FC<ProjectSideNavigationProps> = ({ 
  sections, 
  currentSection, 
  onSectionChange 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [blobPosition, setBlobPosition] = useState(0);

  // Update blob position when current section changes
  useEffect(() => {
    setBlobPosition(currentSection);
  }, [currentSection]);

  const handleDotClick = (index: number) => {
    onSectionChange(index);
    setBlobPosition(index);
    
    // Smooth scroll to the section
    const sectionElement = document.getElementById(`section-${index}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDotClick(index);
    }
  };

  return (
    <nav className="project-side-navigation">
      <div className="nav-dots">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentSection ? 'active' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
            onClick={() => handleDotClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            role="button"
            aria-label={`Navigate to ${section.header} section`}
          >
            <div className="dot-circle"></div>
            <div className="dot-label">
              {section.header}
            </div>
          </div>
        ))}
      </div>
      
      {/* Animated blob that follows the active section */}
      <div 
        className="nav-blob"
        style={{
          transform: `translateY(${blobPosition * 60}px)`
        }}
      ></div>
    </nav>
  );
};

export default ProjectSideNavigation; 