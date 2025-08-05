import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import '../Styles/Home.scss';
import HomeLayer from "../Components/HomeLayer";
import RadialMenu from "../Components/RadialMenu";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import gdImage from '../images/gd/gd1.png';
import meAndRuby from '../images/me-and-ruby.png';

const projects = [
  {
    id: 1,
    name: 'GridDuck',
    logo: gdImage, // Placeholder, replace with actual logo if available
    company: 'GridDuck',
    range: '2017 - Present',
    brandColour: '#fa6f6f',
    companyDescription: 'GridDuck is a smart energy management platform for commercial buildings, helping businesses monitor and optimize their energy usage.',
    productDescription: 'A comprehensive energy management platform that provides real-time monitoring, analytics, and control systems for commercial building energy consumption.',
    myWork: [
      'Lead full-stack engineering, product development, and UI/UX design across all GridDuck software.',
      'Maintain platform stability, oversee the product roadmap, and manage client feedback loops.',
      'Drive R&D and new feature planning while shaping and executing the company\'s brand identity.',
      'Serve as Chief Product Officer (CPO) with end-to-end responsibility for technical and product strategy.'
    ],
    sections: [
      {
        header: 'Platform Overview',
        items: [
          { image: gdImage, description: 'Main energy management dashboard with real-time monitoring capabilities.' },
          { image: gdImage, description: 'Analytics and reporting interface for energy consumption insights.' }
        ]
      },
      {
        header: 'Mobile Experience',
        items: [
          { image: gdImage, description: 'Mobile app providing on-the-go energy monitoring and control.' }
        ]
      }
    ],
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
  },
  {
    id: 2,
    name: 'UTC Hub',
    logo: gdImage, // Placeholder
    company: 'UTC Hub',
    range: '2016 - 2017',
    brandColour: '#a1c4fd',
    companyDescription: 'UTC Hub was a collaborative platform for students and teachers, facilitating project management and communication in educational environments.',
    productDescription: 'A web-based platform that connected students and teachers for project collaboration, resource sharing, and educational workflow management.',
    myWork: [
      'Directed technical strategy and infrastructure development as Chief Technology Officer (CTO).',
      'Oversaw product lifecycle from conception to deployment.',
      'Led development of core collaboration features and classroom management tools.',
      'Managed technical architecture and platform scalability.'
    ],
    sections: [
      {
        header: 'Platform Features',
        items: [
          { image: gdImage, description: 'Project management dashboard for educational collaboration.' }
        ]
      }
    ],
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
  },
  {
    id: 3,
    name: 'Gigbloc',
    logo: gdImage, // Placeholder
    company: 'Gigbloc',
    range: '2015 - 2016',
    brandColour: '#fbc2eb',
    companyDescription: 'Gigbloc was a live music platform startup that connected music venues, artists, and audiences.',
    productDescription: 'A comprehensive platform for live music event management, ticketing, and artist discovery, helping organizers and attendees manage gigs and events.',
    myWork: [
      'Co-founded and built the technical backbone of a live music platform as Founder/CTO.',
      'Lead development and product innovation for the entire platform.',
      'Built ticketing and event listing features with integrated payment processing.',
      'Developed artist and venue management tools for the live music ecosystem.'
    ],
    sections: [
      {
        header: 'Event Management',
        items: [
          { image: gdImage, description: 'Event listing and ticketing interface for live music events.' }
        ]
      }
    ],
    background: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)'
  },
  {
    id: 4,
    name: 'WIREWAX',
    logo: gdImage, // Placeholder
    company: 'WIREWAX',
    range: '2013 - 2015',
    brandColour: '#96e6a1',
    companyDescription: 'WIREWAX is an interactive video technology company that enables clickable, interactive video experiences.',
    productDescription: 'Advanced interactive video platform that allows creators to add clickable elements, hotspots, and interactive overlays to video content.',
    myWork: [
      'Developed interactive video features as a front-end developer.',
      'Enhanced video analytics dashboard and user engagement tools.',
      'Liaised with clients and provided design support for interactive video projects.',
      'Worked on interactive video overlays and clickable video elements.'
    ],
    sections: [
      {
        header: 'Interactive Video',
        items: [
          { image: gdImage, description: 'Interactive video overlay example with clickable elements.' }
        ]
      }
    ],
    background: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'
  }
];

function Home() {
    const [width, setWidth] = useState('15%');
    const [targetWidth, setTargetWidth] = useState('15%');
    const [showingProject, setShowingProject] = useState<
      | typeof projects[0]
      | null
    >(null);
    const [isProjectPanelOpen, setIsProjectPanelOpen] = useState(false);
    const [lightbox, setLightbox] = useState<{
      sectionIdx: number;
      itemIdx: number;
    } | null>(null);
    const [skillsExpanded, setSkillsExpanded] = useState(false);

    const projectsRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const mouseMoving = useRef(false);
    const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        if (projectsRef.current) {
            const rect = projectsRef.current.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const relativeMouseX = Math.max(0, Math.min(mouseX, rect.width));
            const newTargetWidth = (relativeMouseX / rect.width) * 100;
            setTargetWidth(newTargetWidth + '%');
            mouseMoving.current = true;

            if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);

            stopTimeoutRef.current = setTimeout(() => {
                mouseMoving.current = false;
            }, 200);
        }
    }, []);

    // Set up mousemove event listener
    useEffect(() => {
        const projectsElement = projectsRef.current;

        if (projectsElement) {
            projectsElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (projectsElement) {
                projectsElement.removeEventListener('mousemove', handleMouseMove);
            }
            if (stopTimeoutRef.current) {
                clearTimeout(stopTimeoutRef.current);
            }
        };
    }, [handleMouseMove]);

    // Animation loop - separate from event listener setup
    useEffect(() => {
        const animateWidth = () => {
            const currentWidth = parseFloat(width);
            const target = parseFloat(targetWidth);
            const difference = target - currentWidth;

            // Only continue animation if there's a meaningful difference
            if (Math.abs(difference) > 0.01) {
                const newWidth = currentWidth + difference * 0.1;
                setWidth(newWidth.toFixed(2) + '%');
                animationRef.current = requestAnimationFrame(animateWidth);
            } else {
                // Stop animation when close enough to target
                setWidth(targetWidth);
                animationRef.current = null;
            }
        };

        animationRef.current = requestAnimationFrame(animateWidth);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        };
    }, [width, targetWidth]);

    // Helper to get all images in the current project
    const allGalleryImages = useMemo(() => 
      showingProject
        ? showingProject.sections.flatMap((section, sectionIdx) =>
            section.items.map((item, itemIdx) => ({ ...item, sectionIdx, itemIdx, sectionHeader: section.header }))
          )
        : [], [showingProject]
    );

    const openLightbox = (sectionIdx: number, itemIdx: number) => {
      setLightbox({ sectionIdx, itemIdx });
    };

    const currentLightboxIndex = lightbox
      ? allGalleryImages.findIndex(
          img => img.sectionIdx === lightbox.sectionIdx && img.itemIdx === lightbox.itemIdx
        )
      : -1;
    
    const prevLightbox = useCallback(() => {
      if (currentLightboxIndex > 0) {
        const prev = allGalleryImages[currentLightboxIndex - 1];
        setLightbox({ sectionIdx: prev.sectionIdx, itemIdx: prev.itemIdx });
      }
    }, [currentLightboxIndex, allGalleryImages]);
    
    const nextLightbox = useCallback(() => {
      if (currentLightboxIndex < allGalleryImages.length - 1) {
        const next = allGalleryImages[currentLightboxIndex + 1];
        setLightbox({ sectionIdx: next.sectionIdx, itemIdx: next.itemIdx });
      }
    }, [currentLightboxIndex, allGalleryImages]);

    // Lightbox close and navigation on ESC/arrow keys
    useEffect(() => {
      if (lightbox === null) return;
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [lightbox, prevLightbox, nextLightbox]);

    const col = '#fa6f6f';
    const colStyle = { color: col };

    const projectSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        arrows: true, // or true if you want arrows
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 3000, // large screens
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    };

    return (
        <div ref={projectsRef} className={'home-wrapper'} style={{ top: isProjectPanelOpen ? 'calc(-100% + 120px)' : '0' }}>
            {/* Radial Menu */}
            <RadialMenu />

            {/* Floating Circle */}
            <div className="floating-circle">
                <img src={meAndRuby} alt="Me and Ruby" />
            </div>

            {/* Personal Description */}
            <div className="personal-description">
                <p className="description-text">
                    Product-minded full-stack engineer & UI/UX designer crafting digital experiences for over a decade
                </p>
            </div>

            <div>
                <HomeLayer backgroundCol={col} textCol="white" />
                <HomeLayer width={width} backgroundCol="white" textCol={col} />
            </div>

            {/* <div className="projects" style={{bottom: showingProject ? 'calc(100% - 120px)' : '0'}}> */}
            <div className="projects" style={{ bottom: '0' }}>
                {isProjectPanelOpen ? (
                    <p className="p-title" style={colStyle}>
                        <span className={'clickable'} onClick={() => { 
                            setIsProjectPanelOpen(false);
                            window.setTimeout(() => {
                                setShowingProject(null);
                            }, 800);
                        }}>
                            {'^ back '}
                        </span>
                    </p>
                ) : (
                    <p className="p-title" style={colStyle}>
                        <span className={'clickable'}>
                            {'my work'}
                        </span>
                    </p>
                )}
                {/*<div className="row">*/}
                <Slider {...projectSliderSettings}>
                    {projects.map((project) => (
                        <div className={`project ${showingProject?.name === project.name ? 'selected' : ''}`} key={project.id} onClick={() => {
                            setShowingProject(project);
                            setIsProjectPanelOpen(true);
                        }}>
                            <p style={{ color: showingProject?.name === project.name ? col : 'grey' }}>{project.name}</p>
                            <p className="details" style={{ color: showingProject?.name === project.name ? col : 'grey' }}>{project.range}</p>
                        </div>
                    ))}
                </Slider>
                {/*</div>*/}
            </div>

            <div
              className={'project-contents'}
              style={{
                top: isProjectPanelOpen ? '0' : '100%',
                // Use a very subtle background color or pattern
                // The actual background is handled by SCSS ::before, but we set a CSS var here
                // Fallback to a very light version of the brand colour
                '--brand-colour': showingProject?.brandColour || '#fa6f6f',
                '--theme-colour': col,
                '--project-bg': showingProject?.background
                  ? `radial-gradient(circle at 60% 40%, ${showingProject.background.replace(/linear-gradient\([^,]+,\s*([^,]+),\s*([^,]+)\)/, '$1 0%, $2 100%').replace(/0%/g, '10%').replace(/100%/g, '90%')}, #fff 100%)`
                  : 'linear-gradient(120deg, #f6f8fa 0%, #e9ecef 100%)',
              } as React.CSSProperties}
            >
                <div className={'project-content-inner'}>
                  {showingProject && (
                    <>
                      <div className="project-header-fixed-placeholder" />
                      <div className="project-header project-header-fixed">
                        <img src={showingProject.logo} alt={`${showingProject.name} logo`} className="project-logo" />
                        <div>
                          <h1>{showingProject.name}</h1>
                          <p className="details">{showingProject.range}</p>
                        </div>
                      </div>
                      <section>
                        <h2>About {showingProject.company}</h2>
                        <p>{showingProject.companyDescription}</p>
                        <h3>Product</h3>
                        <p>{showingProject.productDescription}</p>
                      </section>
                      <section>
                        <h2>What I Did</h2>
                        <ul>
                          {showingProject.myWork.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </section>
                      <section>
                        <h2>Skills & Expertise</h2>
                        <div className="skills-summary">
                          <div className="skills-preview">
                            <div className="skill-tags">
                              <span className="skill-tag">React.js</span>
                              <span className="skill-tag">Node.js</span>
                              <span className="skill-tag">UI/UX Design</span>
                              <span className="skill-tag">Product Development</span>
                              <span className="skill-tag">AWS</span>
                              <span className="skill-tag">+12 more</span>
                            </div>
                            <button 
                              className="expand-skills-btn"
                              onClick={() => setSkillsExpanded(!skillsExpanded)}
                            >
                              {skillsExpanded ? 'Show Less' : 'View All Skills'}
                            </button>
                          </div>
                          
                          {skillsExpanded && (
                            <div className="skills-grid">
                              <div className="skill-category">
                                <h3>🚀 Frontend Development</h3>
                                <div className="skill-items">
                                  <div className="skill-item">
                                    <span className="skill-name">React.js</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">JavaScript</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">HTML5/CSS</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">AngularJS</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">React Native</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">jQuery/Bootstrap</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                </div>
                              </div>
                              <div className="skill-category">
                                <h3>⚙️ Backend & Infrastructure</h3>
                                <div className="skill-items">
                                  <div className="skill-item">
                                    <span className="skill-name">Node.js</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Git</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">PostgreSQL</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">AWS</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">CI/CD</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                </div>
                              </div>
                              <div className="skill-category">
                                <h3>🎨 Design & Creative</h3>
                                <div className="skill-items">
                                  <div className="skill-item">
                                    <span className="skill-name">UI/UX Design</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Branding</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Adobe Illustrator</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Photoshop</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Premiere Pro</span>
                                    <div className="skill-rating">★★★☆☆</div>
                                  </div>
                                </div>
                              </div>
                              <div className="skill-category">
                                <h3>📊 Product & Management</h3>
                                <div className="skill-items">
                                  <div className="skill-item">
                                    <span className="skill-name">Product Development</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Rapid Prototyping</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Team Leadership</span>
                                    <div className="skill-rating">★★★★★</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Product Management</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                  <div className="skill-item">
                                    <span className="skill-name">Roadmap Planning</span>
                                    <div className="skill-rating">★★★★☆</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </section>
                      <nav className="bolo-nav">
                        {showingProject.sections.map((section, idx) => (
                          <a key={idx} href={`#section-${idx}`}>{section.header}</a>
                        ))}
                      </nav>
                      {showingProject.sections.map((section, sectionIdx) => (
                        <section key={sectionIdx} id={`section-${sectionIdx}`} className="showcase-section">
                          <div className={`showcase-row ${sectionIdx % 2 === 0 ? 'left-image' : 'right-image'}`}>
                            <div className="showcase-image-wrapper">
                              <img
                                src={section.items[0].image}
                                alt={section.items[0].description}
                                className="showcase-image"
                                style={{ cursor: 'pointer' }}
                                onClick={() => openLightbox(sectionIdx, 0)}
                              />
                            </div>
                            <div className="showcase-text">
                              <h2>{section.header}</h2>
                              <p>{section.items[0].description}</p>
                            </div>
                          </div>
                          {section.items.slice(1).map((item, itemIdx) => (
                            <div key={itemIdx} className={`showcase-row sub-row ${((itemIdx + sectionIdx + 1) % 2 === 0) ? 'left-image' : 'right-image'}`}>
                              <div className="showcase-image-wrapper">
                                <img
                                  src={item.image}
                                  alt={item.description}
                                  className="showcase-image"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => openLightbox(sectionIdx, itemIdx + 1)}
                                />
                              </div>
                              <div className="showcase-text">
                                <p>{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </section>
                      ))}
                    </>
                  )}
                </div>
            </div>
        </div>
    );
}

export default Home;