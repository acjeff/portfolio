import React, { useRef } from 'react';

const MIN_DISTANCE = 40;

// Touch handlers that report a horizontal swipe: 1 for the next item, -1 for the previous.
// `swiped` stays set until the next touch, so a click handler can ignore the tap a swipe ends in.
function useSwipe(onSwipe: (direction: 1 | -1) => void) {
    const start = useRef<{ x: number; y: number } | null>(null);
    const swiped = useRef(false);

    const handlers = {
        onTouchStart: (e: React.TouchEvent) => {
            const t = e.touches[0];
            start.current = { x: t.clientX, y: t.clientY };
            swiped.current = false;
        },
        onTouchEnd: (e: React.TouchEvent) => {
            const s = start.current;
            start.current = null;
            if (!s) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - s.x, dy = t.clientY - s.y;
            // Mostly sideways, so a vertical scroll that drifts doesn't count
            if (Math.abs(dx) < MIN_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.5) return;
            swiped.current = true;
            onSwipe(dx < 0 ? 1 : -1);
        },
    };

    return { handlers, swiped };
}

export default useSwipe;
