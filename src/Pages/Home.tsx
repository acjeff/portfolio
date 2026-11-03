import React, { useCallback, useEffect, useState } from 'react';
import '../Styles/Site.scss';
import CursorGlow from '../Components/CursorGlow';
import Media from '../Components/Media';
import ProjectPage from './ProjectPage';
import { getProjectByName, links, projects, skillGroups } from '../data/projects';
import Portrait from '../Components/Portrait';

const DEFAULT_GLOW = '#8b9cff';

// The open project lives in the ?project= query string so old links keep working
const readProjectParam = () => {
    const name = new URLSearchParams(window.location.search).get('project');
    return name ? getProjectByName(name) ?? null : null;
};

function Home() {
    const [project, setProject] = useState(readProjectParam);
    const [hoverTint, setHoverTint] = useState<string | null>(null);

    const navigate = useCallback((name: string | null, scrollTo?: string) => {
        const url = new URL(window.location.href);
        url.search = '';
        url.hash = '';
        if (name) url.searchParams.set('project', name);
        const previous = project?.name;
        window.history.pushState({}, '', url.toString());
        setProject(name ? getProjectByName(name) ?? null : null);
        setHoverTint(null);
        requestAnimationFrame(() => {
            if (name) {
                window.scrollTo(0, 0);
            } else if (scrollTo) {
                document.getElementById(scrollTo)?.scrollIntoView();
            } else if (previous) {
                // Land back on the row you came from
                document.getElementById(`work-${previous}`)?.scrollIntoView({ block: 'center' });
            }
        });
    }, [project]);

    useEffect(() => {
        const onPop = () => setProject(readProjectParam());
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    useEffect(() => {
        document.title = project ? `${project.name} · Alex Jefferies` : 'Alex Jefferies · Product leader and engineer';
    }, [project]);

    const jumpTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (project) navigate(null, id);
        else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const tint = project?.brandColour ?? hoverTint ?? DEFAULT_GLOW;

    return (
        <div className="site">
            <CursorGlow tint={tint} />
            <div className="wrap">
                <header className="site-header">
                    <a className="site-name" href="./" onClick={e => { e.preventDefault(); navigate(null, 'top'); }}>Alex Jefferies</a>
                    <nav aria-label="Main">
                        <a href="#work" onClick={jumpTo('work')}>Work</a>
                        <a href="#skills" onClick={jumpTo('skills')}>Skills</a>
                        <a href={links.cv} download="alexander-jefferies-cv.pdf">CV</a>
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={links.email}>Email</a>
                    </nav>
                </header>

                {project ? (
                    <ProjectPage key={project.id} project={project} onNavigate={name => navigate(name)} />
                ) : (
                    <main id="top">
                        <section className="hero">
                            <h1>I take digital products from first sketch to production.</h1>
                            <div className="hero-side">
                                <Portrait alt="Alex Jefferies" />
                                <p>Product leader and full-stack engineer. 14 years across energy, mobility, education and video.</p>
                            </div>
                        </section>

                        <section id="work" className="work" aria-label="Work">
                            {projects.map(p => (
                                <a
                                    key={p.id}
                                    id={`work-${p.name}`}
                                    className="work-row"
                                    href={`?project=${encodeURIComponent(p.name)}`}
                                    style={{ '--c': p.brandColour } as React.CSSProperties}
                                    onClick={e => { e.preventDefault(); navigate(p.name); }}
                                    onMouseEnter={() => setHoverTint(p.brandColour)}
                                    onMouseLeave={() => setHoverTint(null)}
                                    onFocus={() => setHoverTint(p.brandColour)}
                                    onBlur={() => setHoverTint(null)}
                                >
                                    <div className="work-text">
                                        <span className="yrs">{p.range}</span>
                                        <h2>{p.name}</h2>
                                        <p>{p.role && <span className="role">{p.role}. </span>}{p.summary}</p>
                                        <span className="view">View project</span>
                                    </div>
                                    <div className="shot">
                                        <Media src={p.headlineImage} alt={`${p.name} product`} />
                                    </div>
                                </a>
                            ))}
                        </section>

                        <section id="skills" className="skills">
                            <h2>Skills</h2>
                            <div className="skill-groups">
                                {skillGroups.map(group => (
                                    <div key={group.name}>
                                        <h3>{group.name}</h3>
                                        <ul>{group.skills.map(s => <li key={s}>{s}</li>)}</ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                )}

                <footer className="site-footer">
                    <div>
                        <h2>Want to work together?</h2>
                        <a className="email" href={links.email}>labaia33@gmail.com</a>
                    </div>
                    <ul>
                        <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href={links.music} target="_blank" rel="noopener noreferrer">My music</a></li>
                        <li><a href={links.game} target="_blank" rel="noopener noreferrer">A game I made</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default Home;
