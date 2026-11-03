import React, { useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import Media from '../Components/Media';
import { Project, projects } from '../data/projects';

// react-icons' typings clash with React 18's JSX types, so call the icon as a function
const Icon = ({ icon }: { icon: IconType }) => <>{icon({ 'aria-hidden': true })}</>;

type Lightbox = { images: string[]; index: number; label: string } | null;

function SectionGallery({ images, label, onOpen }: { images: string[]; label: string; onOpen: (index: number) => void }) {
    const [active, setActive] = useState(0);
    if (!images.length) return null;
    return (
        <div className="gallery">
            <button className="shot shot-button" onClick={() => onOpen(active)} aria-label={`Enlarge ${label} image ${active + 1}`}>
                <Media src={images[active]} alt={`${label}, image ${active + 1}`} />
            </button>
            {images.length > 1 && (
                <div className="thumbs">
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
        </div>
    );
}

function ProjectPage({ project, onNavigate }: { project: Project; onNavigate: (name: string | null) => void }) {
    const [lightbox, setLightbox] = useState<Lightbox>(null);
    const index = projects.findIndex(p => p.id === project.id);
    const next = projects[(index + 1) % projects.length];

    const step = useCallback((delta: number) => {
        setLightbox(lb => lb && { ...lb, index: (lb.index + delta + lb.images.length) % lb.images.length });
    }, []);

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
        <article className="project-page" style={{ '--c': project.brandColour } as React.CSSProperties}>
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

            <section className="project-block">
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

            {project.sections.map((section: Project['sections'][number], idx: number) => {
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
                        <section className="project-block" key={idx}>
                            <h2>{section.header}</h2>
                            <div>{details}</div>
                        </section>
                    );
                }
                return (
                    <section className="project-block with-gallery" key={idx}>
                        <div>
                            <h2>{section.header}</h2>
                            {details}
                        </div>
                        <SectionGallery
                            images={section.images}
                            label={section.header}
                            onOpen={i => setLightbox({ images: section.images, index: i, label: section.header })}
                        />
                    </section>
                );
            })}

            <a
                className="next-project"
                href={`?project=${encodeURIComponent(next.name)}`}
                style={{ '--c': next.brandColour } as React.CSSProperties}
                onClick={e => { e.preventDefault(); onNavigate(next.name); }}
            >
                <span className="yrs">Next project</span>
                <span className="next-name">{next.name}</span>
            </a>

            {lightbox && (
                <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.label} onClick={() => setLightbox(null)}>
                    <button className="lightbox-btn close" onClick={() => setLightbox(null)} aria-label="Close"><Icon icon={FiX} /></button>
                    {lightbox.images.length > 1 && (
                        <button className="lightbox-btn prev" onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><Icon icon={FiChevronLeft} /></button>
                    )}
                    <div className="lightbox-media" onClick={e => e.stopPropagation()}>
                        <Media src={lightbox.images[lightbox.index]} alt={`${lightbox.label}, image ${lightbox.index + 1}`} />
                    </div>
                    {lightbox.images.length > 1 && (
                        <button className="lightbox-btn next" onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next image"><Icon icon={FiChevronRight} /></button>
                    )}
                </div>
            )}
        </article>
    );
}

export default ProjectPage;
