import React, { useState } from 'react';
import { FaRocket, FaCogs, FaPalette, FaChartLine, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';
import { FiBriefcase, FiX } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import '../Styles/SkillsModal.scss';

const SkillsModal: React.FC = () => {
  const { currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveSection('overview');
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveSection('overview');
  };

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: FaRocket,
      color: '#007bff',
      description: 'Building responsive, accessible user interfaces',
      keySkills: ['React.js', 'JavaScript', 'HTML5/CSS'],
      allSkills: [
        { name: 'React.js', level: 'expert', progress: 100, years: '13 years' },
        { name: 'JavaScript', level: 'expert', progress: 100, years: '13 years' },
        { name: 'HTML5/CSS', level: 'expert', progress: 100, years: '13 years' },
        { name: 'React Native', level: 'advanced', progress: 85, years: '13 years' },
        { name: 'AngularJS', level: 'advanced', progress: 80, years: '13 years' },
        { name: 'jQuery/Bootstrap', level: 'advanced', progress: 75, years: '13 years' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & Infrastructure',
      icon: FaCogs,
      color: '#28a745',
      description: 'Scalable server-side development and cloud infrastructure',
      keySkills: ['Node.js', 'Git', 'PostgreSQL'],
      allSkills: [
        { name: 'Node.js', level: 'expert', progress: 100, years: '13 years' },
        { name: 'Git', level: 'expert', progress: 100, years: '13 years' },
        { name: 'PostgreSQL', level: 'advanced', progress: 85, years: '13 years' },
        { name: 'AWS', level: 'advanced', progress: 80, years: '13 years' },
        { name: 'CI/CD', level: 'advanced', progress: 75, years: '13 years' }
      ]
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      icon: FaPalette,
      color: '#e83e8c',
      description: 'Creating intuitive, beautiful user experiences',
      keySkills: ['UI/UX Design', 'Branding', 'Adobe Illustrator'],
      allSkills: [
        { name: 'UI/UX Design', level: 'expert', progress: 100, years: '13 years' },
        { name: 'Branding', level: 'advanced', progress: 85, years: '13 years' },
        { name: 'Adobe Illustrator', level: 'advanced', progress: 80, years: '13 years' },
        { name: 'Photoshop', level: 'advanced', progress: 75, years: '13 years' },
        { name: 'Premiere Pro', level: 'competent', progress: 65, years: '13 years' }
      ]
    },
    {
      id: 'management',
      name: 'Product & Leadership',
      icon: FaChartLine,
      color: '#6f42c1',
      description: 'Leading teams and driving product development',
      keySkills: ['Product Development', 'Team Leadership', 'Rapid Prototyping'],
      allSkills: [
        { name: 'Product Development', level: 'expert', progress: 100, years: '13 years' },
        { name: 'Rapid Prototyping', level: 'expert', progress: 100, years: '6+ years' },
        { name: 'Team Leadership', level: 'expert', progress: 100, years: '6 years' },
        { name: 'Product Management', level: 'advanced', progress: 85, years: '6 years' },
        { name: 'Roadmap Planning', level: 'advanced', progress: 80, years: '6 years' }
      ]
    }
  ];

  return (
    <>
      {/* Fixed Skills Button */}
      <div className="radial-menu-button-container skills">
        <button 
          className="radial-menu-button"
          onClick={toggleModal}
          aria-label="Open skills"
          style={{
            '--brand-colour': currentTheme.colors.primary
          } as React.CSSProperties}>
          <div className="radial-menu-icon">
            {/* @ts-ignore */}
            <FiBriefcase/>
          
          </div>
          <div className="menu-label">Skills</div>
        </button>
      
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="skills-modal-overlay" onClick={closeModal}>
          <div className="skills-modal" onClick={(e) => e.stopPropagation()} style={{
            '--brand-colour': currentTheme.colors.primary
          } as React.CSSProperties}>
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal}>
              {/* @ts-ignore */}
              <FiX />
            </button>

            {/* Main Content */}
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <h1>Skills & Expertise</h1>
                <p>Full-stack engineer & UI/UX designer with 13 years building digital products</p>
              </div>

              {/* Navigation */}
              <div className="modal-nav">
                <button 
                  className={`nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveSection('overview')}
                >
                  {/* @ts-ignore */}
                  <FaLightbulb />
                  <span>Overview</span>
                </button>
                <button 
                  className={`nav-btn ${activeSection === 'technical' ? 'active' : ''}`}
                  onClick={() => setActiveSection('technical')}
                >
                  {/* @ts-ignore */}
                  <FaCode />
                  <span>Technical</span>
                </button>
                <button 
                  className={`nav-btn ${activeSection === 'leadership' ? 'active' : ''}`}
                  onClick={() => setActiveSection('leadership')}
                >
                  {/* @ts-ignore */}
                  <FaUsers />
                  <span>Leadership</span>
                </button>
              </div>

              {/* Content Sections */}
              <div className="modal-sections">
                {activeSection === 'overview' && (
                  <div className="overview-section">
                    <div className="hero-stats">
                      <div className="stat-card">
                        <div className="stat-number">13+</div>
                        <div className="stat-label">Years Experience</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Expert Skills</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number">4</div>
                        <div className="stat-label">Core Areas</div>
                      </div>
                    </div>

                    <div className="value-proposition">
                      <h2>What I Bring to Your Team</h2>
                      <div className="proposition-grid">
                        <div className="proposition-item">
                          <h3>Full-Stack Expertise</h3>
                          <p>From frontend to backend, I can build complete solutions. No handoffs, no delays.</p>
                        </div>
                        <div className="proposition-item">
                          <h3>Design-Driven Development</h3>
                          <p>I don't just code - I create experiences. Every pixel matters to me.</p>
                        </div>
                        <div className="proposition-item">
                          <h3>Rapid Execution</h3>
                          <p>Ideas to working prototypes in days, not weeks. Speed without sacrificing quality.</p>
                        </div>
                        <div className="proposition-item">
                          <h3>Team Leadership</h3>
                          <p>I've led development teams and can help scale your engineering organization.</p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-highlights">
                      <h2>Core Skills</h2>
                      <div className="highlights-grid">
                        {skillCategories.map((category) => (
                          <div key={category.id} className="highlight-card" style={{ '--category-color': category.color } as React.CSSProperties}>
                            <div className="highlight-header">
                              {/* @ts-ignore */}
                              {/* <category.icon /> */}
                              <h3>{category.name}</h3>
                            </div>
                            <p>{category.description}</p>
                            <div className="highlight-skills">
                              {category.keySkills.map(skill => (
                                <span key={skill} className="highlight-skill">{skill}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'technical' && (
                  <div className="technical-section">
                    <div className="section-intro">
                      <h2>Technical Skills Deep Dive</h2>
                      <p>Detailed breakdown of my technical capabilities across all areas</p>
                    </div>
                    
                    <div className="skills-detail-grid">
                      {skillCategories.map((category) => (
                        <div key={category.id} className="skill-category-detail" style={{ '--category-color': category.color } as React.CSSProperties}>
                          <div className="category-header">
                            {/* @ts-ignore */}
                            {/* <category.icon /> */}
                            <h3>{category.name}</h3>
                        
                            <p>{category.description}</p>
                          </div>
                          
                          <div className="skills-list">
                            {category.allSkills.map((skill, index) => (
                              <div key={skill.name} className="skill-item" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                                <div className="skill-info">
                                  <div className="skill-name-level">
                                    <span className="skill-name">{skill.name}</span>
                                    <div className={`skill-level ${skill.level}`}>{skill.level.toUpperCase()}</div>
                                  </div>
                                  {/* <span className="skill-years">{skill.years}</span> */}
                                </div>
                                <div className="skill-progress">
                                  <div className="progress-bar">
                                    <div 
                                      className="progress-fill" 
                                      style={{ width: `${skill.progress}%` }}
                                    ></div>
                                  </div>
                                  {/* <span className="progress-text">{skill.progress}%</span> */}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'leadership' && (
                  <div className="leadership-section">
                    <div className="section-intro">
                      <h2>Leadership & Product Experience</h2>
                      <p>Beyond technical skills - how I drive product development and lead teams</p>
                    </div>

                    <div className="leadership-grid">
                      <div className="leadership-card">
                        <h3>Product Development</h3>
                        <p>I've led the development of multiple successful products from concept to launch. I understand the full product lifecycle and can bridge the gap between business requirements and technical implementation.</p>
                        <div className="leadership-stats">
                          <div className="leadership-stat">
                            <span className="stat-number">3</span>
                            <span className="stat-label">Products Launched</span>
                          </div>
                          <div className="leadership-stat">
                            <span className="stat-number">1</span>
                            <span className="stat-label">Company Exited</span>
                          </div>
                          {/* <div className="leadership-stat">
                            <span className="stat-number">6+</span>
                            <span className="stat-label">Years Leading Teams</span>
                          </div> */}
                        </div>
                      </div>

                      <div className="leadership-card">
                        <h3>Rapid Prototyping</h3>
                        <p>I can turn ideas into working prototypes fast. This ability to quickly validate concepts has saved companies months of development time and millions in potential losses.</p>
                        <div className="leadership-stats">                        
                          {/* <div className="leadership-stat">
                            <span className="stat-number">3-5</span>
                            <span className="stat-label">Days Average</span>
                          </div> */}
                        </div>
                      </div>                      

                      <div className="leadership-card">
                        <h3>Technical Strategy</h3>
                        <p>I can help architect technical solutions that scale. From choosing the right technologies to designing system architecture, I ensure your technical decisions support business growth.</p>
                        <div className="leadership-stats">
                          {/* <div className="leadership-stat">
                            <span className="stat-number">13+</span>
                            <span className="stat-label">Systems Architected</span>
                          </div>
                          <div className="leadership-stat">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Uptime Achieved</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsModal; 