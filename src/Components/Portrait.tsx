import React, { useEffect, useRef, useState } from 'react';
import mixed from '../images/portrait/default.webp';
import bw from '../images/portrait/bw.webp';
import halftone from '../images/portrait/halftone.webp';
import dither from '../images/portrait/dither.webp';
import pixel from '../images/portrait/pixel.webp';
import colour from '../images/portrait/colour.webp';

// The same cutout rendered in different styles. Where the cursor is, relative to
// where it first appeared, decides the mix: the starting spot shows the default
// (half dither, half colour), the direction picks one of the styles spaced evenly
// around it, and the distance sets how strongly that style shows.
const DEFAULT = mixed;
const AROUND = [halftone, dither, bw, pixel, colour]; // clockwise from the right
const STYLES = [DEFAULT, ...AROUND];
const FULL_AT = 0.45; // fraction of the smaller viewport side at which a style is fully in

function Portrait({ alt }: { alt: string }) {
    const layers = useRef<(HTMLImageElement | null)[]>([]);
    // Without a mouse the styles never mix, so only the default is loaded
    const [interactive] = useState(() =>
        window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    useEffect(() => {
        if (!interactive) return;

        let origin: { x: number; y: number } | null = null;
        const target: number[] = STYLES.map((_, i) => (i === 0 ? 1 : 0));
        const shown = [...target];
        let frame = 0;

        const render = () => {
            let moving = false;
            layers.current.forEach((img, i) => {
                shown[i] += (target[i] - shown[i]) * 0.12;
                if (Math.abs(target[i] - shown[i]) > 0.002) moving = true;
                if (img) img.style.opacity = shown[i].toFixed(3);
            });
            frame = moving ? requestAnimationFrame(render) : 0;
        };
        const onMove = (e: PointerEvent) => {
            if (!origin) origin = { x: e.clientX, y: e.clientY };
            const dx = e.clientX - origin.x, dy = e.clientY - origin.y;
            const reach = Math.min(window.innerWidth, window.innerHeight) * FULL_AT;
            const strength = Math.min(1, Math.hypot(dx, dy) / reach);
            // Angle as a position around the ring of styles, starting from the right
            const n = AROUND.length;
            const around = ((Math.atan2(dy, dx) / (2 * Math.PI / n)) % n + n) % n;
            target[0] = 1 - strength;
            AROUND.forEach((_, i) => {
                const d = Math.min(Math.abs(around - i), n - Math.abs(around - i));
                target[i + 1] = strength * Math.max(0, 1 - d);
            });
            if (!frame) frame = requestAnimationFrame(render);
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            cancelAnimationFrame(frame);
        };
    }, [interactive]);

    return (
        <div className="portrait">
            {(interactive ? STYLES : [DEFAULT]).map((src, i) => (
                <img
                    key={src}
                    ref={el => { layers.current[i] = el; }}
                    src={src}
                    alt={i === 0 ? alt : ''}
                    aria-hidden={i === 0 ? undefined : true}
                    style={{ opacity: i === 0 ? 1 : 0 }}
                />
            ))}
        </div>
    );
}

export default Portrait;
