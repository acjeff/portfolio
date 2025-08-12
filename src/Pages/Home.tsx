import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import '../Styles/Home.scss';
import HomeLayer from "../Components/HomeLayer";
import RadialMenu from "../Components/RadialMenu";
// import ProjectSideNavigation from "../Components/ProjectSideNavigation";
import SkillsModal from "../Components/SkillsModal";
import { useTheme } from '../contexts/ThemeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import gdImage from '../images/gd/gd1.png';
import gdLogo from '../images/Brand Work/GridDuck/GridDuck-logo-no-type.png';
import meAndRuby from '../images/me-and-ruby.png';

// GridDuck Product Work Images
// @ts-ignore
import monitoringVideo from '../images/Product Work/GridDuck/General Product/video/monitoring.mp4';
import whiteLabel from '../images/Product Work/GridDuck/General Product/white-label.png';
import themesAccessibility from '../images/Product Work/GridDuck/General Product/themes-and-accessibility.png';
import integratedBilling from '../images/Product Work/GridDuck/General Product/integrated-automated-billing.png';
import automatedReports from '../images/Product Work/GridDuck/General Product/Automated-Reports.png';
import automationThermostat from '../images/Product Work/GridDuck/General Product/automation-virtual-thermostat.png';

// GridDuck AI Images
import gaiaModel from '../images/Product Work/GridDuck/AI - Gaia/gaia-model.png';
import gaiaDash1 from '../images/Product Work/GridDuck/AI - Gaia/1-Gaia-on-dash.png';
import gaiaDash2 from '../images/Product Work/GridDuck/AI - Gaia/2-Gaia-on-dash.png';
import gaiaDash3 from '../images/Product Work/GridDuck/AI - Gaia/3-Gaia-on-dash.png';

// GridDuck Brand Work Images
import marketingBanner from '../images/Brand Work/GridDuck/gridduck-marketing-banner.png';
import bookletCover from '../images/Brand Work/GridDuck/gridduck-instructional-booklet-pages-1-4.png';
import businessCardFront from '../images/Brand Work/GridDuck/gridduck-business-card-front.png';

// GridDuck Project Management Images
import clickupDashboard from '../images/Product Work/GridDuck/General Product/clickup-dashboard.png';
import clickupKanban from '../images/Product Work/GridDuck/General Product/click-up-kanban.png';
import foh from '../images/Brand Work/GridDuck/foh.png';


const projects = [
  {
    id: 1,
    name: 'GridDuck',
    logo: gdLogo,
    headlineImage: monitoringVideo,
    company: 'GridDuck',
    range: '2017 - Present',
    brandColour: '#49b9c4',
    companyDescription: 'Comprehensive energy management platform with real-time monitoring, AI-powered analytics, and intelligent control systems. Built from concept to production, now serving 500+ sites and 10,000+ devices across diverse industries.',
    productDescription: '',
    myWork: [
      'Built complete energy management platform from zero to production serving 500+ sites.',
      'Led full-stack development, product strategy, and UX design across all features.',
      'Chief Product Officer managing entire product lifecycle and team processes.',
      'Designed brand identity, marketing materials, and user documentation.'
    ],
    sections: [
      {
        header: 'Project Management',
        jobTitle: 'Chief Product Officer',
        summary: 'Building and scaling a product from zero to serving hundreds of sites and thousands of devices.',
        highlights: [
          'Conceived and built the entire platform from concept to production',
          'Scaled the product to serve hundreds of sites and thousands of devices',
          'Created and managed processes for ticket and bug management from client to dev and back to client',
          'Established and managed product development cycles and workflows'
        ],
        images: [clickupDashboard, clickupKanban, gdImage]
      },
      {
        header: 'UI/UX Design',
        jobTitle: 'Lead UI/UX Designer',
        summary: 'Creating intuitive, accessible interfaces that make complex energy data approachable for diverse users.',
        highlights: [
          'Comprehensive theming system for accessibility and customization',
          'Intuitive data visualization for complex energy insights',
          'Conversational AI interfaces that feel approachable and trustworthy'
        ],
        images: [themesAccessibility, automatedReports, gaiaDash1]
      },
      {
        header: 'Development',
        jobTitle: 'Lead Full-Stack Engineer',
        summary: 'Building scalable technical solutions that enable seamless partner integration and intelligent automation.',
        highlights: [
          'Dynamic white-label system for seamless partner branding',
          'Intelligent automation that transforms simple devices into smart systems',
          'Real-time billing system with multiple payment integrations'
        ],
        images: [whiteLabel, automationThermostat, integratedBilling]
      },
      {
        header: 'AI Innovation',
        jobTitle: 'Lead Full-Stack Engineer',
        summary: 'Integrating AI capabilities to provide industry-specific insights and natural conversational experiences.',
        highlights: [
          'ChatGPT API integration for industry-specific energy advice',
          'AI architecture for contextual data analysis',
          'Natural conversational interfaces for complex energy insights'
        ],
        images: [gaiaDash2, gaiaModel, gaiaDash3]
      },
      {
        header: 'Brand Design',
        jobTitle: 'Brand Designer',
        summary: 'Creating visual identities and materials that build trust and communicate complex capabilities simply.',
        highlights: [
          'Visual identity that builds trust in technical space',
          'Marketing materials that communicate complex capabilities simply',
          'Instructional materials with professional aesthetics'
        ],
        images: [businessCardFront, foh, marketingBanner, bookletCover]
      }
    ],
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
  },
  {
    id: 2,
    name: 'UTC Hub',
    logo: gdImage, // Placeholder
    headlineImage: clickupDashboard, // Using existing image as placeholder
    company: 'UTC Hub',
    range: '2016 - 2017',
    brandColour: '#2c5aa0', // Blue color typical for educational/tech platforms
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
        header: 'Technical Leadership',
        jobTitle: 'Chief Technology Officer',
        summary: 'Leading technical strategy and infrastructure development for an educational collaboration platform.',
        highlights: [
          'Directed complete technical strategy and infrastructure development',
          'Oversaw product lifecycle from conception to deployment',
          'Managed technical architecture and platform scalability',
          'Led development team and technical decision-making processes'
        ],
        images: [clickupDashboard, clickupKanban, gdImage]
      },
      {
        header: 'Platform Development',
        jobTitle: 'Lead Full-Stack Engineer',
        summary: 'Building core collaboration features and classroom management tools for educational environments.',
        highlights: [
          'Developed project management dashboard for educational collaboration',
          'Built real-time communication and resource sharing features',
          'Created classroom management and student progress tracking tools',
          'Implemented secure authentication and role-based access control'
        ],
        images: [themesAccessibility, automatedReports, whiteLabel]
      },
      {
        header: 'Product Strategy',
        jobTitle: 'Product Manager',
        summary: 'Defining product vision and managing development cycles for educational technology platform.',
        highlights: [
          'Defined product vision and roadmap for educational collaboration',
          'Managed development cycles and feature prioritization',
          'Conducted user research with students and teachers',
          'Established product metrics and success criteria'
        ],
        images: [gaiaDash1, gaiaModel, integratedBilling]
      }
    ],
    background: 'linear-gradient(120deg, #2c5aa0 0%, #4a90e2 100%)'
  },
  {
    id: 3,
    name: 'Gigbloc',
    logo: gdImage, // Placeholder
    headlineImage: whiteLabel, // Using existing image as placeholder
    company: 'Gigbloc',
    range: '2015 - 2016',
    brandColour: '#e74c3c', // Red color typical for music/entertainment platforms
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
        header: 'Startup Leadership',
        jobTitle: 'Founder & Chief Technology Officer',
        summary: 'Co-founding and building the technical backbone of a live music platform from concept to market.',
        highlights: [
          'Co-founded startup and built complete technical platform from scratch',
          'Led development and product innovation for entire platform',
          'Managed technical team and development processes',
          'Established technical architecture and scalability planning'
        ],
        images: [clickupDashboard, clickupKanban, gdImage]
      },
      {
        header: 'Event Management Platform',
        jobTitle: 'Lead Full-Stack Engineer',
        summary: 'Building comprehensive event management, ticketing, and artist discovery features.',
        highlights: [
          'Developed event listing and ticketing interface for live music events',
          'Built integrated payment processing and ticket management system',
          'Created artist and venue management tools for live music ecosystem',
          'Implemented real-time event updates and notification systems'
        ],
        images: [themesAccessibility, automatedReports, whiteLabel]
      },
      {
        header: 'Payment Integration',
        jobTitle: 'Payment Systems Engineer',
        summary: 'Integrating secure payment processing and financial management for event ticketing.',
        highlights: [
          'Integrated multiple payment gateways for secure transactions',
          'Built automated billing and financial reporting systems',
          'Implemented fraud prevention and transaction monitoring',
          'Developed refund and dispute resolution workflows'
        ],
        images: [integratedBilling, automationThermostat, gaiaDash1]
      }
    ],
    background: 'linear-gradient(120deg, #e74c3c 0%, #c0392b 100%)'
  },
  {
    id: 4,
    name: 'WIREWAX',
    logo: gdImage, // Placeholder
    headlineImage: gaiaDash1, // Using existing image as placeholder
    company: 'WIREWAX',
    range: '2013 - 2015',
    brandColour: '#27ae60', // Green color typical for creative/tech companies
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
        header: 'Interactive Video Development',
        jobTitle: 'Front-End Developer',
        summary: 'Building interactive video features and clickable video experiences for content creators.',
        highlights: [
          'Developed interactive video overlay system with clickable elements',
          'Built video analytics dashboard for user engagement tracking',
          'Created interactive video editor for content creators',
          'Implemented real-time video interaction and hotspot management'
        ],
        images: [themesAccessibility, automatedReports, whiteLabel]
      },
      {
        header: 'Client Support & Design',
        jobTitle: 'Client Support & Design Specialist',
        summary: 'Providing technical support and design assistance for interactive video projects.',
        highlights: [
          'Liaised with clients to understand interactive video requirements',
          'Provided design support and technical guidance for video projects',
          'Created custom interactive video solutions for client needs',
          'Developed documentation and training materials for clients'
        ],
        images: [gaiaDash1, gaiaModel, integratedBilling]
      },
      {
        header: 'Video Analytics',
        jobTitle: 'Analytics Developer',
        summary: 'Building analytics and engagement tracking tools for interactive video content.',
        highlights: [
          'Enhanced video analytics dashboard with engagement metrics',
          'Developed user behavior tracking for interactive video elements',
          'Built reporting tools for content performance analysis',
          'Implemented A/B testing framework for video interactions'
        ],
        images: [clickupDashboard, clickupKanban, gdImage]
      }
    ],
    background: 'linear-gradient(120deg, #27ae60 0%, #2ecc71 100%)'
  }
];

function Home() {
    const [width, setWidth] = useState('15%');
    const [targetWidth, setTargetWidth] = useState('15%');
    // const [currentProjectSection, setCurrentProjectSection] = useState(0);
    const [showingProject, setShowingProject] = useState<
      | typeof projects[0]
      | null
    >(null);
    const [isProjectPanelOpen, setIsProjectPanelOpen] = useState(false);

    const [lightbox, setLightbox] = useState<{
      sectionIdx: number;
      itemIdx: number;
    } | null>(null);
    const [carouselStates, setCarouselStates] = useState<{ [key: string]: number }>({});
  

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
            section.images.map((image, imageIdx) => ({ 
              image, 
              description: section.highlights[imageIdx] || section.summary,
              sectionIdx, 
              itemIdx: imageIdx, 
              sectionHeader: section.header 
            }))
          )
        : [], [showingProject]
    );

    // Auto-cycling carousel functionality
    useEffect(() => {
      if (!showingProject) return;

      const intervals: NodeJS.Timeout[] = [];

      showingProject.sections.forEach((section, sectionIdx) => {
        if (section.images.length > 1) {
          const interval = setInterval(() => {
            setCarouselStates(prev => {
              const currentIndex = prev[`${sectionIdx}`] || 0;
              const nextIndex = (currentIndex + 1) % section.images.length;
              return { ...prev, [`${sectionIdx}`]: nextIndex };
            });
          }, 5000); // Change slide every 5 seconds

          intervals.push(interval);
        }
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }, [showingProject]);

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

    const { currentTheme, updateThemeColor } = useTheme();
    const col = currentTheme.colors.primary;
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
        <div ref={projectsRef} className={'home-wrapper ' + (isProjectPanelOpen ? 'showing': '')} style={{ 
          top: isProjectPanelOpen ? 'calc(-100% + 90px)' : '0',
          '--brand-colour': currentTheme.colors.primary
        } as React.CSSProperties}>
            {/* Radial Menu */}
            <RadialMenu isProjectPanelOpen={isProjectPanelOpen}/>

            {/* Skills Modal */}
            <SkillsModal />

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
                            updateThemeColor('#fa6f6f'); // Reset to default color
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
                        <div className={`project ${showingProject?.name === project.name ? 'selected' : ''}`} style={{color: showingProject?.name === project.name ? project.brandColour : 'grey'}} key={project.id} onClick={() => {
                            setShowingProject(project);
                            setIsProjectPanelOpen(true);
                            updateThemeColor(project.brandColour);
                        }}>
                            <p style={{ color: showingProject?.name === project.name ? project.brandColour : 'grey' }}>{project.name}</p>
                            <p className="details" style={{ color: showingProject?.name === project.name ? project.brandColour : 'grey' }}>{project.range}</p>
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
                '--brand-colour': showingProject?.brandColour || currentTheme.colors.primary,
                '--theme-colour': currentTheme.colors.primary,
                '--project-bg': showingProject?.background
                  ? `radial-gradient(circle at 60% 40%, ${showingProject.background.replace(/linear-gradient\([^,]+,\s*([^,]+),\s*([^,]+)\)/, '$1 0%, $2 100%').replace(/0%/g, '10%').replace(/100%/g, '90%')}, #fff 100%)`
                  : 'linear-gradient(120deg, #f6f8fa 0%, #e9ecef 100%)',
              } as React.CSSProperties}
            >
                <div className={'project-content-inner'}>
                  {showingProject && (
                    <>
                      {/* <div className="project-header-fixed-placeholder" /> */}
                      <div className="project-header project-header-fixed">
                        <img src={showingProject.logo} alt={`${showingProject.name} logo`} className="project-logo" />
                        <div>
                          <h1>{showingProject.name}</h1>
                          <p className="details">{showingProject.range}</p>
                        </div>
                      </div>
                      
                      <div className="project-content-layout">
                        <div className="project-content-left">
                          <section>
                            {/* <h2>About {showingProject.company}</h2> */}
                            <p>{showingProject.companyDescription}</p>
                          </section>
                          <section className="my-role-section">
                            <h3>My Role</h3>
                            <ul className="role-list">
                              {showingProject.myWork.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                          </section>
                        </div>
                        
                        <div className="project-content-right">
                          <div className="project-headline-image">
                            {showingProject.headlineImage.endsWith('.mp4') || showingProject.headlineImage.endsWith('.webm') ? (
                              <div className="floating-screen">
                                <video 
                                  src={showingProject.headlineImage} 
                                  className="headline-video"
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                />
                              </div>
                            ) : (
                              <img 
                                src={showingProject.headlineImage} 
                                alt={`${showingProject.name} headline`} 
                                className="headline-image"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {showingProject.sections.map((section, sectionIdx) => (
                        <section 
                          key={sectionIdx} 
                          id={`section-${sectionIdx}`} 
                          className="showcase-section"
                        >
                          <div className={`showcase-row ${sectionIdx % 2 === 0 ? 'left-image' : 'right-image'}`}>
                                      <div className="showcase-image-wrapper">
            <div className="image-showcase">
                                  <div className="showcase-carousel">
                                    {section.images.map((image, imageIdx) => (
                                      <div 
                                        key={imageIdx}
                                        className={`carousel-slide ${imageIdx === (carouselStates[sectionIdx] || 0) ? 'active' : ''}`}
                                      >
                                        <img
                                          src={image}
                                          alt={`${section.header} example ${imageIdx + 1}`}
                                          className="showcase-image"
                                          style={{ cursor: 'pointer' }}
                                          onClick={() => openLightbox(sectionIdx, imageIdx)}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  {section.images.length > 1 && (
                                    <div className="carousel-controls">
                                      <button 
                                        className="carousel-btn prev"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const currentIndex = carouselStates[sectionIdx] || 0;
                                          const prevIndex = currentIndex > 0 ? currentIndex - 1 : section.images.length - 1;
                                          setCarouselStates(prev => ({ ...prev, [sectionIdx]: prevIndex }));
                                        }}
                                      >
                                        ‹
                                      </button>
                                      <div className="carousel-dots">
                                        {section.images.map((_, dotIdx) => (
                                          <button
                                            key={dotIdx}
                                            className={`dot ${dotIdx === (carouselStates[sectionIdx] || 0) ? 'active' : ''}`}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setCarouselStates(prev => ({ ...prev, [sectionIdx]: dotIdx }));
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <button 
                                        className="carousel-btn next"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const currentIndex = carouselStates[sectionIdx] || 0;
                                          const nextIndex = currentIndex < section.images.length - 1 ? currentIndex + 1 : 0;
                                          setCarouselStates(prev => ({ ...prev, [sectionIdx]: nextIndex }));
                                        }}
                                      >
                                        ›
                                      </button>
                                    </div>
                                  )}
                                </div>
                            </div>
                            <div className="showcase-text">
                              <h2>{section.header}</h2>
                              <div className="job-title">{section.jobTitle}</div>
                              <p className="section-summary">{section.summary}</p>
                              <ul className="highlights-list">
                                {section.highlights.map((highlight, highlightIdx) => (
                                  <li key={highlightIdx}>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </section>
                      ))}
                    </>
                  )}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightbox && (
              <div className="lightbox-modal" onClick={() => setLightbox(null)}>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                  <button className="lightbox-close" onClick={() => setLightbox(null)}>
                    ×
                  </button>
                  {allGalleryImages[currentLightboxIndex] && (
                    <>
                      <img 
                        src={allGalleryImages[currentLightboxIndex].image} 
                        alt={allGalleryImages[currentLightboxIndex].description}
                        className="lightbox-image"
                      />
                      <div className="lightbox-info">
                        <h3>{allGalleryImages[currentLightboxIndex].sectionHeader}</h3>
                        <p>{allGalleryImages[currentLightboxIndex].description}</p>
                      </div>
                      {allGalleryImages.length > 1 && (
                        <div className="lightbox-navigation">
                          <button 
                            className="lightbox-nav prev" 
                            onClick={prevLightbox}
                            disabled={currentLightboxIndex === 0}
                          >
                            ‹
                          </button>
                          <span>{currentLightboxIndex + 1} / {allGalleryImages.length}</span>
                          <button 
                            className="lightbox-nav next" 
                            onClick={nextLightbox}
                            disabled={currentLightboxIndex === allGalleryImages.length - 1}
                          >
                            ›
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
        </div>
    );
}

export default Home;