import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import '../Styles/SkillsModal.scss';

const SkillsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Skills Button */}
      <div className="skills-button-container">
        <button 
          className="skills-button"
          onClick={toggleModal}
          aria-label="Open skills"
        >
          {/* @ts-ignore */}
        <FaLightbulb/>
        </button>
        <div className="skills-label">Skills</div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="skills-modal-overlay" onClick={closeModal}>
          <div className="skills-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Skills & Expertise</h2>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            
            <div className="skills-grid">
              <div className="skill-category frontend">
                <div className="category-header">
                  <h3>Frontend Development</h3>
                </div>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">React.js</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">JavaScript</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">HTML5/CSS</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">AngularJS</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">React Native</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">jQuery/Bootstrap</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-category backend">
                <div className="category-header">
                  <h3>Backend & Infrastructure</h3>
                </div>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Node.js</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Git</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">PostgreSQL</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">AWS</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">CI/CD</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-category design">
                <div className="category-header">
                  <h3>Design & Creative</h3>
                </div>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">UI/UX Design</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Branding</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Adobe Illustrator</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Photoshop</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Premiere Pro</span>
                      <div className="skill-level competent">Competent</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-category management">
                <div className="category-header">
                  <h3>Product & Management</h3>
                </div>
                <div className="skill-items">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Product Development</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Rapid Prototyping</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Team Leadership</span>
                      <div className="skill-level expert">Expert</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Product Management</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Roadmap Planning</span>
                      <div className="skill-level advanced">Advanced</div>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsModal; 