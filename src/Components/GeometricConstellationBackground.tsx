import React, { useEffect, useRef } from 'react';
import '../Styles/GeometricConstellationBackground.scss';

const GeometricConstellationBackground = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const nodesRef = useRef<HTMLDivElement[]>([]);
    const linesRef = useRef<SVGLineElement[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const nodeCount = 15;
        const nodes: HTMLDivElement[] = [];
        const lines: SVGLineElement[] = [];

        // Clear existing elements
        nodesRef.current.forEach(node => {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });
        linesRef.current.forEach(line => {
            if (line.parentNode) {
                line.parentNode.removeChild(line);
            }
        });
        nodesRef.current = [];
        linesRef.current = [];

        // Create SVG for lines
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.pointerEvents = 'none';
        svg.style.zIndex = '1';
        container.appendChild(svg);

        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div') as HTMLDivElement;
            node.classList.add('constellation-node');
            
            // Random position
            const x = Math.random() * 80 + 10; // 10% to 90% of viewport
            const y = Math.random() * 80 + 10;
            
            node.style.left = `${x}%`;
            node.style.top = `${y}%`;
            node.style.animationDelay = `${Math.random() * 3}s`;
            
            // Random shape type
            const shapeTypes = ['circle', 'square', 'triangle', 'diamond'];
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            node.setAttribute('data-shape', shapeType);
            
            container.appendChild(node);
            nodes.push(node);
        }

        // Create connecting lines between nearby nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const node1 = nodes[i];
                const node2 = nodes[j];
                
                const rect1 = node1.getBoundingClientRect();
                const rect2 = node2.getBoundingClientRect();
                
                const distance = Math.sqrt(
                    Math.pow(rect1.left - rect2.left, 2) + 
                    Math.pow(rect1.top - rect2.top, 2)
                );
                
                // Only connect nodes that are within a certain distance
                if (distance < 200) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', rect1.left.toString());
                    line.setAttribute('y1', rect1.top.toString());
                    line.setAttribute('x2', rect2.left.toString());
                    line.setAttribute('y2', rect2.top.toString());
                    line.classList.add('constellation-line');
                    line.style.animationDelay = `${Math.random() * 2}s`;
                    
                    svg.appendChild(line);
                    lines.push(line);
                }
            }
        }

        nodesRef.current = nodes;
        linesRef.current = lines;

        // Update line positions on window resize
        const updateLines = () => {
            lines.forEach((line, index) => {
                const node1 = nodes[Math.floor(index / (nodes.length - 1))];
                const node2 = nodes[(Math.floor(index / (nodes.length - 1)) + 1) % nodes.length];
                
                if (node1 && node2) {
                    const rect1 = node1.getBoundingClientRect();
                    const rect2 = node2.getBoundingClientRect();
                    
                    line.setAttribute('x1', rect1.left.toString());
                    line.setAttribute('y1', rect1.top.toString());
                    line.setAttribute('x2', rect2.left.toString());
                    line.setAttribute('y2', rect2.top.toString());
                }
            });
        };

        window.addEventListener('resize', updateLines);

        return () => {
            nodes.forEach(node => {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            });
            lines.forEach(line => {
                if (line.parentNode) {
                    line.parentNode.removeChild(line);
                }
            });
            if (svg.parentNode) {
                svg.parentNode.removeChild(svg);
            }
            window.removeEventListener('resize', updateLines);
            nodesRef.current = [];
            linesRef.current = [];
        };
    }, []);

    return (
        <div ref={containerRef} className="geometric-constellation-background">
        </div>
    );
};

export default GeometricConstellationBackground; 