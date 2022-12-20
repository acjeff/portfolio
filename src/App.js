import React from "react";
import './App.scss';
import Menu from "./Components/Menu";
import SiteSettings from "./Components/SiteSettings";
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Container,
    IconButton,
    Card, CardHeader, CardContent
} from "@mui/material";
import blue from '@mui/material/colors/blue';
import orange from '@mui/material/colors/orange';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';
import pink from '@mui/material/colors/pink';
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
                summary: <span>When I joined there were two people who had just landed a small 6 month government grant to develop DSR Energy Technology.<br/><br/>6 Years later and we have built a full scale energy management system capable of complex monitoring and control, installed in hundreds of sites.<br/><br/>My role has encompassed the full spectrum of disciplines, but my main responsibilities were mainly that of:</span>,
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
                title: 'UI/UX',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Development',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Brand Design',
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
                title: 'Design',
                summary: <span></span>,
                video: '',
                cards: []
            },
            {
                title: 'Development',
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
let colours = [pink, purple, blue, orange, green];

class App extends React.Component {

    constructor(props) {
        super(props);

        const queryString = window.location.search;
        this.urlParams = new URLSearchParams(queryString);
        const project = this.urlParams.get('project');
        const section = this.urlParams.get('section');
        const themeTod = this.urlParams.get('themeTod');
        const colour = this.urlParams.get('colour');
        console.log(project, ' : project');
        console.log(section, ' : section');
        console.log(colour, ' : colour');

        this.state = {
            themeTod: themeTod || 'dark',
            themeFont: 'Poppins, sans-serif',
            project: parseInt(project) || 0,
            section: section || '0',
            colour: colour || 0
        }
        this.updateParam = this.updateParam.bind(this);
    }

    updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            return uri + separator + key + "=" + value;
        }
    }

    updateParam(param, newValue) {
        let updateObj = {};
        window.history.pushState(null, null, this.updateQueryStringParameter(window.location.search, param, newValue + ''));
        updateObj[param] = newValue;
        this.setState(updateObj);
    }

    render() {

        const theme = createTheme({
            palette: {
                mode: this.state.themeTod,
                primary: colours[this.state.colour]
            },
            typography: {
                fontFamily: this.state.themeFont
            }
        });
        let section;
        let project = Projects[this.state.project];
        if (project) {
            section = project.breakdown[parseInt(this.state.section)];
        }
        console.log(section, ' : section');

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline className={"Main"}>
                    <Menu section={this.state.section} project={this.state.project}
                          projects={Projects}
                          selectProject={this.updateParam}
                          selectSection={this.updateParam}/>

                </CssBaseline>
                <div className={'Content'}>
                    <div className={'Content-header'}>
                        <h1>{project.link ? <IconButton
                            onClick={() => window.open(project.link, '_blank')}><LinkOutlined/></IconButton> : null} {project.name} > {section.title}</h1>
                        <SiteSettings
                            font={this.state.themeFont}
                            colours={colours}
                            colour={this.state.colour}
                            theme={this.state.themeTod}
                            changeColour={(c) => {
                                console.log(c, ' : colour');
                                this.updateParam('colour', c);
                            }}
                            changeThemeFont={(font) => this.setState({themeFont: font})}
                            changethemeTod={() => {
                                let theme = this.state.themeTod === 'light' ? 'dark' : 'light';
                                this.updateParam('themeTod', theme);
                            }}/>
                    </div>
                    <div className={'Content-body'}>
                        <Container>
                            <div className={'column'}>
                                <p>{section.summary}</p>
                                {section.cards ? section.cards.map((c) => {
                                    return <Card key={c.title}>
                                        <CardHeader title={c.title}/>
                                        <CardContent>
                                            {c.body}
                                        </CardContent>
                                    </Card>
                                }) : null}
                            </div>
                        </Container>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
