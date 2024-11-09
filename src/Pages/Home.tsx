import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Home.scss';
import HomeLayer from "../Components/HomeLayer";

const projects = [
    { id: 1, name: 'GridDuck', range: '2010 - 2024' },
    { id: 2, name: 'UTC Hub', range: '2010 - 2024' },
    { id: 3, name: 'Gigbloc', range: '2010 - 2024' },
    { id: 4, name: 'WIREWAX', range: '2010 - 2024' }
];

const colors = [
    '#1a1a1a',
    '#007bff',
    '#ff6f61',
    '#20c997',
    '#6f42c1',
    '#ffc107'
];

function Home() {
    const [width, setWidth] = useState('41%');
    const [col, setCol] = useState(colors[0]);
    const [targetWidth, setTargetWidth] = useState('41%');
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

            // Reset stop timer on every mouse move
            if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);

            // Set a timeout to mark the mouse as stopped if no movement happens for 200ms
            stopTimeoutRef.current = setTimeout(() => {
                mouseMoving.current = false;
            }, 200);
        }
    };

    useEffect(() => {
        const projectsElement = projectsRef.current; // Store ref value in a local variable

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

    let colStyle = { color: col };

    return (
        <div style={{ position: 'absolute', height: 'calc(100% - 120px)', width: '100%' }}>
            <div className="colours">
                {colors.map((color, index) => (
                    <div className="colour" key={index} style={{ backgroundColor: color }} onClick={() => setCol(color)} />
                ))}
            </div>
            <div>
                <HomeLayer backgroundCol={col} textCol="white" />
                <HomeLayer width={width} backgroundCol="white" textCol={col} />
            </div>
            <div className="projects" ref={projectsRef}>
                <p className="p-title" style={colStyle}>projects</p>
                <div className="row">
                    {projects.map((project) => (
                        <div className="project" key={project.id}>
                            <p style={colStyle}>{project.name}</p>
                            <p className="details" style={colStyle}>{project.range}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
