import React, { useEffect, useRef } from 'react';

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

// Renders an image or a muted looping video. Videos only play while on screen.
function Media({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        }, { threshold: 0.25 });
        observer.observe(video);
        return () => observer.disconnect();
    }, [src]);

    if (isVideo(src)) {
        return <video ref={videoRef} className={className} src={src} muted loop playsInline preload="metadata" aria-label={alt} />;
    }
    return <img className={className} src={src} alt={alt} loading="lazy" />;
}

export default Media;
