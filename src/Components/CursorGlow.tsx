import React, { useEffect, useRef } from 'react';

// Line icons from the world of the work (code, data, vehicles, design), in Feather's 24px style
const ICONS = [
    '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
    '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>',
    '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
    '<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 8 7 12 13 12 9 16"/>',
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
];

const CELL = 22;       // grid spacing in CSS pixels
const ICON = 12;       // icon size in CSS pixels
const RADIUS = 300;    // how far from the cursor icons are drawn
const PEAK_ALPHA = .32;

// Mix two hex colours, like CSS color-mix
const mix = (a: string, b: string, t: number) => {
    const pa = a.match(/\w\w/g)!.map(h => parseInt(h, 16));
    const pb = b.match(/\w\w/g)!.map(h => parseInt(h, 16));
    return `rgb(${pa.map((v, i) => Math.round(v * t + pb[i] * (1 - t))).join(',')})`;
};

const iconImages = (colour: string) => ICONS.map(body => {
    const img = new Image();
    img.src = `data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="${colour}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`
    )}`;
    return img;
});

// A soft light that drifts after the cursor, tinted by whatever the page is showing.
// Inside it, a dense grid of small icons slowly cross-fades from one icon to another
// in drifting waves. Hidden on touch screens and when the visitor prefers reduced motion.
function CursorGlow({ tint }: { tint: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        imagesRef.current = iconImages(mix(tint.replace('#', ''), '17191e', .6));
    }, [tint]);

    useEffect(() => {
        const el = ref.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!finePointer || reducedMotion) return;

        const ctx = canvas.getContext('2d')!;
        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();

        const target = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.3 };
        const pos = { ...target };
        let frame = 0;
        let last = 0;

        const draw = (t: number) => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            const images = imagesRef.current;
            const n = images.length;
            const x0 = Math.floor((pos.x - RADIUS) / CELL), x1 = Math.ceil((pos.x + RADIUS) / CELL);
            const y0 = Math.floor((pos.y - RADIUS) / CELL), y1 = Math.ceil((pos.y + RADIUS) / CELL);
            for (let i = x0; i <= x1; i++) {
                for (let j = y0; j <= y1; j++) {
                    const cx = i * CELL + CELL / 2, cy = j * CELL + CELL / 2;
                    const d = Math.hypot(cx - pos.x, cy - pos.y) / RADIUS;
                    if (d >= 1) continue;
                    // Overlapping slow waves give each cell a value that drifts over time;
                    // its whole part picks the icon, its fraction fades it out and back in
                    // around each change, so icons flicker gently into the next one
                    const v = 2.2 * (
                        Math.sin(i * .31 + t * .00055) +
                        Math.cos(j * .27 - t * .00042) +
                        Math.sin((i + j) * .17 + t * .00031)
                    ) + 7;
                    const icon = ((Math.floor(v) % n) + n) % n;
                    const frac = v - Math.floor(v);
                    const fade = Math.sin(Math.PI * frac);
                    const falloff = (1 - d) * (1 - d);
                    const alpha = PEAK_ALPHA * falloff * fade;
                    if (alpha < .01 || !images[icon].complete) continue;
                    ctx.globalAlpha = alpha;
                    ctx.drawImage(images[icon], cx - ICON / 2, cy - ICON / 2, ICON, ICON);
                }
            }
            ctx.globalAlpha = 1;
        };

        const loop = (t: number) => {
            frame = requestAnimationFrame(loop);
            if (t - last < 33) return; // ~30fps is plenty for a slow shimmer
            last = t;
            pos.x += (target.x - pos.x) * 0.16;
            pos.y += (target.y - pos.y) * 0.16;
            el.style.setProperty('--x', `${pos.x}px`);
            el.style.setProperty('--y', `${pos.y}px`);
            draw(t);
        };
        const onMove = (e: PointerEvent) => {
            target.x = e.clientX;
            target.y = e.clientY;
        };

        el.classList.add('active');
        frame = requestAnimationFrame(loop);
        window.addEventListener('pointermove', onMove, { passive: true });
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div ref={ref} className="cursor-glow" style={{ '--glow': tint } as React.CSSProperties} aria-hidden="true">
            <canvas ref={canvasRef} className="cursor-icons" />
        </div>
    );
}

export default CursorGlow;
