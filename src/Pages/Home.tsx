import React, {useState, useEffect, useRef} from 'react';
import '../Styles/Home.scss';
import HomeLayer from "../Components/HomeLayer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import gdImage from '../images/gd/gd1.png';

const projects = [
    {
        id: 1, name: 'GridDuck', range: '2017 - 2025', items: [
            {image: gdImage, description: 'This is an image description'},
            {image: gdImage, description: 'This is an image description'},
            {image: gdImage, description: 'This is an image description'},
            {image: gdImage, description: 'This is an image description'}
        ]
    },
    {
        id: 2, name: 'UTC Hub', range: '2016 - 2017', items: [
            {image: gdImage, description: 'This is an image description'}
        ]
    },
    {
        id: 3, name: 'Gigbloc', range: '2015 - 2016', items: [
            {image: gdImage, description: 'This is an image description'}
        ]
    },
    {
        id: 4, name: 'WIREWAX', range: '2013 - 2015', items: [
            {image: gdImage, description: 'This is an image description'}
        ]
    }
];

function Home() {
    const [width, setWidth] = useState('41%');
    const [targetWidth, setTargetWidth] = useState('41%');
    const [showingProject, setShowingProject] = useState<{
        items: Array<{ image: string, description: string }>;
        id: number, name: string, range: string
    } | null>(null);

    const projectsRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const mouseMoving = useRef(false);
    const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = (event: MouseEvent) => {
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
    };

    useEffect(() => {
        const projectsElement = projectsRef.current;

        if (projectsElement) {
            projectsElement.addEventListener('mousemove', handleMouseMove);
        }

        const animateWidth = () => {
            const currentWidth = parseFloat(width);
            const target = parseFloat(targetWidth);
            const difference = target - currentWidth;
            const newWidth = currentWidth + difference * 0.1;
            setWidth(newWidth.toFixed(2) + '%');
            animationRef.current = requestAnimationFrame(animateWidth);
        };

        animationRef.current = requestAnimationFrame(animateWidth);

        return () => {
            if (projectsElement) {
                projectsElement.removeEventListener('mousemove', handleMouseMove);
            }
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
        };
    }, [width, targetWidth]);

    const col = '#fa6f6f';
    const colStyle = {color: col};

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
        <div className={'home-wrapper'} style={{top: showingProject ? 'calc(-100% + 120px)' : '0'}}>
            <div>
                <HomeLayer backgroundCol={col} textCol="white"/>
                <HomeLayer width={width} backgroundCol="white" textCol={col}/>
            </div>

            <div className="projects" ref={projectsRef} style={{bottom: showingProject ? 'calc(100% - 120px)' : '0'}}>
                {showingProject ? (
                    <p className="p-title" style={colStyle}>
                        <span className={'clickable'} onClick={() => setShowingProject(null)}>
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
                        <div className={`project ${showingProject?.name === project.name ? 'selected' : ''}`} key={project.id} onClick={() => setShowingProject(project)}>
                            <p style={{color: showingProject?.name === project.name ? col : 'grey'}}>{project.name}</p>
                            <p className="details" style={{color: showingProject?.name === project.name ? col : 'grey'}}>{project.range}</p>
                        </div>
                    ))}
                </Slider>
                {/*</div>*/}
            </div>

            <div className={'project-contents'} style={{top: showingProject ? '120px' : '100%'}}>
                <div className={'project-content-inner'}>
                    <h1>{showingProject?.name}</h1>
                        {/*<Slider {...sliderSettings}>*/}
                            {showingProject && showingProject.items.map((item, index) => (
                                <div key={index}>
                                    <div
                                        style={{
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            width: '100%',
                                            height: '500px',
                                            backgroundImage: `url(${item.image})`
                                        }}
                                    />
                                    <p style={{textAlign: 'center'}}>{item.description}</p>
                                </div>
                            ))}
                        {/*</Slider>*/}
                </div>
            </div>
        </div>
    );
}

export default Home;
