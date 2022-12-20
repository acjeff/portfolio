import React from "react";
import './App.scss';
import Menu from "./Components/Menu";
import SiteSettings from "./Components/SiteSettings";
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Container,
    IconButton
} from "@mui/material";
import {LinkOutlined} from "@mui/icons-material";

const Projects = [
    {
        name: 'GridDuck',
        link: 'https://gridduck.com',
        label: 'GridDuck - CPO / Co-Founder',
        description: 'The Intelligent Energy Management System',
        timeline: `Sep 2017 - Present`,
        breakdown: [
            {
                title: 'Overview',
                summary: <span>When I joined there were two people who had just landed a small 6 month government grant to develop DSR Energy Technology.<br/><br/>6 Years later and we have built a full scale energy management system capable of complex monitoring and control, installed in hundreds of sites.<br/><br/>My role has encompassed the full spectrum of disciplines, as is often the case being an start up co-founder, but my main responsibilities were mainly:</span>,
                video: '',
                cards: [
                    {
                        title: 'Chief Product Officer',
                        'body': <span>Talking to clients about their experience and then translating that into actionable improvements or features.<br/><br/>Then creating and managing the pipeline (Spec > Design > Build > Release)</span>
                    },
                    {
                        title: 'UI/UX Designer',
                        'body':
                            <span>Designing the Dashboard, Installer App, Mobile Webapp and all accompanying tools.</span>
                    },
                    {
                        title: 'Full Stack Developer',
                        'body': <span>Developing everything from the front to the back. (React JS, React Native, Node JS, PostgreSQL). Also assisting in managing the entire range of the AWS suite.</span>
                    },
                    {
                        title: 'Brand Designer',
                        'body': <span>Designing the logo and branding, brochures, flyers, business cards, conference banners & the front-of-house website content.</span>
                    }
                ]
            },
            {
                title: 'UI/UX Designer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Full Stack Developer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Brand Designer',
                summary: <span></span>,
                video: '',
                cards: []
            }
        ]
    },
    {
        name: 'Cymbal',
        link: 'https://cymbal-802e6.web.app',
        label: 'Cymbal - Personal Project',
        timeline: 'Sep 2022 - Present',
        breakdown: [
            {
                title: 'Overview',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'UI/UX Designer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Full Stack Developer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Brand Designer',
                summary: <span></span>,
                video: '',
                cards: []
            }
        ]
    },
    {
        name: 'UTC Hub',
        link: 'https://www.utchub.com',
        label: 'UTC Hub - CTO',
        timeline:
            'Jun 2016 - Sep 2017',
        breakdown: [
            {
                title: 'Overview',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'UI/UX Designer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Full Stack Developer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Brand Designer',
                summary: <span></span>,
                video: '',
                cards: []
            }
        ]
    },
    {
        name: 'Gigbloc',
        label: 'Gigbloc - CTO / Co-Founder',
        timeline:
            'Nov 2015 - Nov 2017',
        breakdown: [
            {
                title: 'Overview',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'UI/UX Designer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Full Stack Developer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Brand Designer',
                summary: <span></span>,
                video: '',
                cards: []
            }
        ]
    },
    {
        name: 'WIREWAX',
        link: 'https://www.wirewax.com/studio/',
        label: 'WIREWAX - Designer / Software Developer',
        timeline:
            'Jul 2013 - Nov 2015',
        breakdown: [
            {
                title: 'Overview',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'UI/UX Designer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Full Stack Developer',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Brand Designer',
                summary: <span></span>,
                video: '',
                cards: []
            }
        ]
    }
];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            themeColor: 'dark',
            themeFont: 'Poppins, sans-serif',
            activeProject: 0
        }
    }

    render() {

        const theme = createTheme({
            palette: {
                mode: this.state.themeColor
            },
            typography: {
                fontFamily: this.state.themeFont
            }
        });

        let activeProject = Projects[this.state.activeProject];

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline className={"Main"}>
                    <Menu activeProject={this.state.activeProject} projects={Projects}
                          selectProject={(project) => this.setState({activeProject: project})}/>
                    <SiteSettings
                        font={this.state.themeFont}
                        theme={this.state.themeColor}
                        changeThemeFont={(font) => this.setState({themeFont: font})}
                        changeThemeColor={() => this.setState({themeColor: this.state.themeColor === 'light' ? 'dark' : 'light'})}/>
                </CssBaseline>
                <Container>
                    <h1>{activeProject.name}{activeProject.link ? <IconButton
                        onClick={() => window.open(activeProject.link, '_blank')}><LinkOutlined/></IconButton> : null}</h1>
                    <h2>{activeProject.description}</h2>
                    <p>{activeProject.overview}</p>
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
