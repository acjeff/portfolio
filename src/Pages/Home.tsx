import React, {useState, useEffect, useRef} from 'react';
import '../Styles/Home.scss';
import HomeLayer from "../Components/HomeLayer";
import gdImage from '../images/gd/gd1.png';

const projects = [
    {
        id: 1, name: 'GridDuck', range: '2010 - 2024', items: [
            {image: gdImage, description: 'This is an image description'},
            {image: gdImage, description: 'This is an image description'},
            {image: gdImage, description: 'This is an image description'},
            {image: gdImage, description: 'This is an image description'}
        ]
    },
    {
        id: 2, name: 'UTC Hub', range: '2010 - 2024', items: [
            {image: gdImage, description: 'This is an image description'}
        ]
    },
    {
        id: 3, name: 'Gigbloc', range: '2010 - 2024', items: [
            {image: gdImage, description: 'This is an image description'}
        ]
    },
    {
        id: 4, name: 'WIREWAX', range: '2010 - 2024', items: [
            {
                image: gdImage, description: 'This is an image description'
            }]
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

            // Smooth damping towards target
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
    let colStyle = {color: col};

    return (
        <div className={'home-wrapper'} style={{top: showingProject ? 'calc(-100% + 120px)' : '0'}}>
            <div>
                <HomeLayer backgroundCol={col} textCol="white"/>
                <HomeLayer width={width} backgroundCol="white" textCol={col}/>
            </div>
            <div className="projects" ref={projectsRef} style={{bottom: showingProject ? 'calc(100% - 120px)' : '0'}}>
                {showingProject ? <p className="p-title" style={colStyle}><span className={'clickable'} onClick={() => setShowingProject(null)}>{'^ back '}</span></p> : null}
                <div className="row">
                    {projects.map((project) => (
                        <div className="project" key={project.id} onClick={() => setShowingProject(project)}>
                            <p style={colStyle}>{project.name}</p>
                            <p className="details" style={colStyle}>{project.range}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'project-contents'} style={{top: showingProject ? '120px' : '100%'}}>
                <div className={'project-content-inner'}>
                    <h1>{showingProject?.name}</h1>
                    {showingProject && showingProject.items.map((item) => (
                        <div>
                            <div style={{
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '500px',
                                backgroundImage: `url(${item.image})`
                            }}/>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
