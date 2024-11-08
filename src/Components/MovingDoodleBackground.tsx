import React, { useEffect, useRef } from 'react';
import '../Styles/MovingDoodleBackground.scss';
const id = Math.random().toString(36).substr(2);
const MovingDoodleBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current as HTMLDivElement | null;
        const doodleCount = 100; // Number of doodles
        const doodles: HTMLDivElement[] = []; // Explicitly type the array as HTMLDivElement[]

        // Create doodles with random positions and subtle animation
        for (let i = 0; i < doodleCount; i++) {
            const doodle = document.createElement('div') as HTMLDivElement;
            doodle.classList.add('doodle-shape');

            // Set random initial position and opacity for a subtle twinkling effect
            doodle.style.top = `${Math.random() * 100}vh`;
            doodle.style.left = `${Math.random() * 100}vw`;
            doodle.style.opacity = `${0.3 + Math.random() * 0.7}`; // Opacity between 0.3 and 1
            doodle.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation start

            doodle.setAttribute('key', `${id}-doodle-${i}`);

            if (container) {
                container.appendChild(doodle);
                doodles.push(doodle);
            }
        }

        return () => {
            // Cleanup doodles when component unmounts
            if (container) {
                doodles.forEach(doodle => container.removeChild(doodle));
            }
        };
    }, [id]);

    return (
        <div ref={containerRef} className="doodle-background">
            {/* SVG pattern definition */}
            <svg width="0" height="0">
                <defs>
                    <pattern id="doodlePattern" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="10" fill="#ff6f61" />
                        <rect x="50" y="50" width="10" height="10" fill="#20c997" />
                        <circle cx="75" cy="75" r="5" fill="#6f42c1" />
                    </pattern>
                </defs>
            </svg>
        </div>
    );
};

export default MovingDoodleBackground;