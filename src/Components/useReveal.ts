import { RefObject, useEffect } from 'react';

// Fades and lifts each [data-reveal] element inside the container as it scrolls into view.
// The hiding class is only added here, so the content stays visible without JavaScript,
// and nothing moves when the visitor prefers reduced motion.
function useReveal(container: RefObject<HTMLElement>, key: unknown) {
    useEffect(() => {
        const root = container.current;
        if (!root) return;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion || !('IntersectionObserver' in window)) return;

        const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -12% 0px' });

        targets.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
        return () => {
            observer.disconnect();
            targets.forEach(el => el.classList.remove('reveal', 'in'));
        };
    }, [container, key]);
}

export default useReveal;
