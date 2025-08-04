import React, {useEffect, useRef} from 'react';
import '../Styles/MovingDoodleBackground.scss';

const MovingDoodleBackground = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const doodlesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const doodleCount = 100;
        const doodles: HTMLDivElement[] = [];

        // Clear any existing doodles first
        doodlesRef.current.forEach(doodle => {
            if (doodle.parentNode) {
                doodle.parentNode.removeChild(doodle);
            }
        });
        doodlesRef.current = [];

        for (let i = 0; i < doodleCount; i++) {
            const doodle = document.createElement('div') as HTMLDivElement;
            doodle.classList.add('doodle-shape');
            doodle.style.top = `${Math.random() * 100}vh`;
            doodle.style.left = `${Math.random() * 100}vw`;
            doodle.style.opacity = `${0.3 + Math.random() * 0.7}`;
            doodle.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(doodle);
            doodles.push(doodle);
        }

        doodlesRef.current = doodles;

        return () => {
            doodles.forEach(doodle => {
                if (doodle.parentNode) {
                    doodle.parentNode.removeChild(doodle);
                }
            });
            doodlesRef.current = [];
        };
    }, []); // Empty dependency array - only run once on mount

    return (
        <div ref={containerRef} className="doodle-background">
            <svg width="0" height="0">
                <defs>
                    <pattern id="doodlePattern" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="10" fill="#ff6f61"/>
                        <rect x="50" y="50" width="10" height="10" fill="#20c997"/>
                        <circle cx="75" cy="75" r="5" fill="#6f42c1"/>
                    </pattern>
                </defs>
            </svg>
        </div>
    );
};

export default MovingDoodleBackground;