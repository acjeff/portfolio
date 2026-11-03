import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import Icon from '../Components/Icon';
import Media from '../Components/Media';
import useReveal from '../Components/useReveal';
import useSwipe from '../Components/useSwipe';
import { Project, Section, projects } from '../data/projects';

type Lightbox = { images: string[]; captions: string[]; index: number; label: string } | null;

function SectionGallery({ images, captions, label, onOpen }: { images: string[]; captions: string[]; label: string; onOpen: (index: number) => void }) {
    const [active, setActive] = useState(0);
    const thumbs = useRef<HTMLDivElement | null>(null);
    const swipe = useSwipe(d => setActive(a => (a + d + images.length) % images.length));

    // Keep the active thumbnail in view when swiping through a long strip
    useEffect(() => {
        const strip = thumbs.current;
        const thumb = strip?.children[active] as HTMLElement | undefined;
        if (!strip || !thumb || strip.scrollWidth <= strip.clientWidth) return;
        strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2, behavior: 'smooth' });
    }, [active]);

    if (!images.length) return null;
    return (
        <figure className="gallery">
            <button
                className="shot shot-button"
                onClick={() => { if (!swipe.swiped.current) onOpen(active); }}
                {...(images.length > 1 ? swipe.handlers : {})}
                aria-label={`Enlarge ${label} image ${active + 1}`}
            >
                <Media src={images[active]} alt={captions[active] ?? `${label}, image ${active + 1}`} />
            </button>
            {captions[active] && <figcaption aria-live="polite">{captions[active]}</figcaption>}
            {images.length > 1 && (
                <div className="thumbs" ref={thumbs}>
                    {images.map((image, idx) => (
                        <button
                            key={idx}
                            className={`thumb ${idx === active ? 'active' : ''}`}
                            onClick={() => setActive(idx)}
                            aria-label={`Show ${label} image ${idx + 1}`}
                            aria-pressed={idx === active}
                        >
                            <Media src={image} alt="" />
                        </button>
                    ))}
                </div>
            )}
        </figure>
    );
}

function ProjectPage({ project, onNavigate }: { project: Project; onNavigate: (name: string | null) => void }) {
    const [lightbox, setLightbox] = useState<Lightbox>(null);
    const page = useRef<HTMLElement | null>(null);
    const index = projects.findIndex(p => p.id === project.id);
    const next = projects[(index + 1) % projects.length];

    useReveal(page, project.id);

    const step = useCallback((delta: number) => {
        setLightbox(lb => lb && { ...lb, index: (lb.index + delta + lb.images.length) % lb.images.length });
    }, []);
    const swipe = useSwipe(step);
    const lightboxOpen = lightbox !== null;

    // Stop the page scrolling behind the lightbox
    useEffect(() => {
        if (!lightboxOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previous; };
    }, [lightboxOpen]);

    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightbox(null);
            if (e.key === 'ArrowLeft') step(-1);
            if (e.key === 'ArrowRight') step(1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightbox, step]);

    return (
        <article ref={page} className="project-page" style={{ '--c': project.brandColour } as React.CSSProperties}>
            <a className="back-link" href="./" onClick={e => { e.preventDefault(); onNavigate(null); }}>
                <Icon icon={FiArrowLeft} /> All work
            </a>

            <header className="project-intro">
                <span className="yrs">{project.range}</span>
                <h1>{project.name}</h1>
                {project.role && <p className="role">{project.role}</p>}
                <p className="lede">{project.companyDescription}</p>
            </header>

            <div className="shot shot-hero">
                <Media src={project.headlineImage} alt={`${project.name} product`} />
            </div>

            {project.story && (
                <section className="story" aria-label="The short version" data-reveal>
                    <div>
                        <h2>The problem</h2>
                        <p>{project.story.problem}</p>
                    </div>
                    <div>
                        <h2>The decision</h2>
                        <p>{project.story.decision}</p>
                    </div>
                    <div>
                        <h2>The result</h2>
                        <p>{project.story.result}</p>
                    </div>
                </section>
            )}

            <section className="project-block" data-reveal>
                <h2>What I did</h2>
                <div>
                    <ul className="plain-list">
                        {project.myWork.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                    {project.techStack?.length > 0 && (
                        <>
                            <h3>Built with</h3>
                            <ul className="tags">
                                {project.techStack.map(tech => <li key={tech.name}>{tech.name}</li>)}
                            </ul>
                        </>
                    )}
                </div>
            </section>

            {project.sections.map((section: Section, idx: number) => {
                const details = (
                    <>
                        <p className="role">{section.jobTitle}</p>
                        <p className="summary">{section.summary}</p>
                        <ul className="plain-list">
                            {section.highlights.map((h: string, hIdx: number) => <li key={hIdx}>{h}</li>)}
                        </ul>
                    </>
                );
                // Without images, lay the section out like "What I did": heading left, text right
                if (!section.images.length) {
                    return (
                        <section className="project-block" key={idx} data-reveal>
                            <h2>{section.header}</h2>
                            <div>{details}</div>
                        </section>
                    );
                }
                const captions = section.captions ?? [];
                return (
                    <section className="project-block with-gallery" key={idx} data-reveal>
                        <div>
                            <h2>{section.header}</h2>
                            {details}
                        </div>
                        <SectionGallery
                            images={section.images}
                            captions={captions}
                            label={section.header}
                            onOpen={i => setLightbox({ images: section.images, captions, index: i, label: section.header })}
                        />
                    </section>
                );
            })}

            <a
                className="next-project"
                href={`?project=${encodeURIComponent(next.name)}`}
                style={{ '--c': next.brandColour } as React.CSSProperties}
                onClick={e => { e.preventDefault(); onNavigate(next.name); }}
                data-reveal
            >
                <span className="yrs">Next project</span>
                <span className="next-name">{next.name}</span>
            </a>

            {lightbox && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.label}
                    onClick={() => { if (!swipe.swiped.current) setLightbox(null); }}
                    {...(lightbox.images.length > 1 ? swipe.handlers : {})}
                >
                    <button className="lightbox-btn close" onClick={() => setLightbox(null)} aria-label="Close"><Icon icon={FiX} /></button>
                    {lightbox.images.length > 1 && (
                        <span className="lightbox-count" aria-live="polite">{lightbox.index + 1} / {lightbox.images.length}</span>
                    )}
                    {lightbox.images.length > 1 && (
                        <button className="lightbox-btn prev" onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><Icon icon={FiChevronLeft} /></button>
                    )}
                    <figure className="lightbox-media" onClick={e => e.stopPropagation()}>
                        <Media
                            src={lightbox.images[lightbox.index]}
                            alt={lightbox.captions[lightbox.index] ?? `${lightbox.label}, image ${lightbox.index + 1}`}
                        />
                        {lightbox.captions[lightbox.index] && <figcaption>{lightbox.captions[lightbox.index]}</figcaption>}
                    </figure>
                    {lightbox.images.length > 1 && (
                        <button className="lightbox-btn next" onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next image"><Icon icon={FiChevronRight} /></button>
                    )}
                </div>
            )}
        </article>
    );
}

export default ProjectPage;
