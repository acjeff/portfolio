import React from "react";
import './App.scss';
import Menu from "./Components/Menu";
import SiteSettings from "./Components/SiteSettings";
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Container,
    Grid, Box, Button, Divider
} from "@mui/material";
import blue from '@mui/material/colors/blue';
import orange from '@mui/material/colors/orange';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';
import pink from '@mui/material/colors/pink';
import {
    AutoStoriesTwoTone,
    DesignServicesTwoTone,
    FormatPaintTwoTone,
    IntegrationInstructionsTwoTone,
    LocalPoliceTwoTone
} from "@mui/icons-material";
import GridDuckLogo from './Images/gridduck.png';
import GridDuckMonitoringMP4 from './Images/GD-DASH.mp4';
// import GridDuckMonitoringWEBM from './Images/GD-DASH.webm';
// import GridDuckHeader from './Images/GridDuck-Header.png';

let colours = [blue, pink, purple, orange, green];

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
            themeTod: themeTod || 'light',
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

    goToPage(page) {
        this.updateParam('project', page.project);
        this.updateParam('section', page.section + '');
    }

    render() {

        const Projects = [
            {
                name: 'GridDuck',
                link: 'https://gridduck.com',
                label: 'GridDuck - CPO / Co-Founder',
                description: 'The Intelligent Energy Management System',
                timeline: `Sep 2017 - Present`,
                logoURL: GridDuckLogo,
                breakdown: [
                    {
                        title: 'Overview',
                        summary: <Grid container spacing={2}>
                            <Grid item lg={4} md={12} sm={12} xs={12} style={{paddingTop: '40px'}}>
                                <div className={'row'} style={{alignItems: 'center', marginBottom: '20px'}}>
                                    <AutoStoriesTwoTone style={{fontSize: '30px'}} color={'primary'}/>
                                    <h2 style={{
                                        color: colours[this.state.colour][500],
                                        paddingLeft: '15px',
                                        margin: 0
                                    }}>Overview</h2>
                                </div>
                                <p>
                                    GridDuck is an Energy Management System that provides businesses with the ability to
                                    monitor and control their energy usage.
                                    <br/><br/>
                                    When I joined there were two people who had just landed a small 6 month government
                                    grant to develop DSR Energy Technology.<br/><br/>
                                    Years later and we have built a full scale energy management system capable of
                                    complex monitoring and control, installed in hundreds of sites.
                                    <br/><br/>
                                    My role has encompassed the full spectrum of disciplines, but my main
                                    responsibilities can be described best as below.
                                </p>
                            </Grid>
                            <Grid item lg={8} md={12} sm={12} xs={12}>
                                <video loop autoPlay>
                                    <source src={GridDuckMonitoringMP4} type="video/mp4"/>
                                    {/*<source src={GridDuckMonitoringWEBM} type="video/webm"/>*/}
                                </video>
                            </Grid>


                        </Grid>,
                        cards: [
                            {
                                title: 'Chief Product Officer',
                                'body': <span>Talking to clients about their experience and then translating that into actionable improvements or features.<br/><br/>Then creating and managing the pipeline (Spec > Design > Build > Release)</span>,
                                icon: <LocalPoliceTwoTone color={'primary'} style={{fontSize: '30px'}}/>,
                                linkOut: {project: 0, section: 1}
                            },
                            {
                                title: 'UI/UX Designer',
                                'body':
                                    <span>Designing the Dashboard, Installer App, Mobile Webapp and all accompanying tools.</span>,
                                icon: <FormatPaintTwoTone color={'primary'} style={{fontSize: '30px'}}/>,
                                linkOut: {project: 0, section: 2}
                            },
                            {
                                title: 'Full Stack Developer',
                                'body': <span>Developing everything from the front to the back. (React JS, React Native, Node JS, PostgreSQL). Also assisting in managing the entire range of the AWS suite.</span>,
                                icon: <IntegrationInstructionsTwoTone color={'primary'} style={{fontSize: '30px'}}/>,
                                linkOut: {project: 0, section: 3}
                            },
                            {
                                title: 'Brand Designer',
                                'body': <span>Designing the logo and branding, brochures, flyers, business cards, conference banners & the front-of-house website content.</span>,
                                icon: <DesignServicesTwoTone color={'primary'} style={{fontSize: '30px'}}/>,
                                linkOut: {project: 0, section: 4}
                            }
                        ]
                    },
                    {
                        title: 'Chief Product Officer',
                        summary: <span></span>,
                        video: '',
                        cards: []
                    },
                    {
                        title: 'UI/UX Design',
                        summary: <span></span>,
                        video: '',
                        cards: []
                    },
                    {
                        title: 'Software Development',
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
                        <div className={'row'}>
                            {/*{project.link ? <IconButton*/}
                            {/*    onClick={() => window.open(project.link, '_blank')}><LinkOutlined/></IconButton> : null}*/}
                            <div style={{backgroundImage: 'url("' + project.logoURL + '")'}} className={'logo'}/>
                        </div>
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
                            changeThemeTod={() => {
                                let theme = this.state.themeTod === 'light' ? 'dark' : 'light';
                                this.updateParam('themeTod', theme);
                            }}/>
                    </div>
                    <div className={'Content-body'}>
                        <Container>
                            <div className={'column'} style={{paddingBottom: '50px'}}>
                                {/*<video className={'header-video'} autoPlay src={section.video}/>*/}
                                {section.summary}
                                <Divider/>
                                <Grid container spacing={6}>
                                    {section.cards ? section.cards.map((c) => {
                                        return <Grid item lg={6} md={6} xs={12} key={c.title}>
                                            <Box>
                                                <div className={'column'}>
                                                    <div>
                                                        <div className={'row'} style={{alignItems: 'center'}}>
                                                            {c.icon}
                                                            <h3 style={{
                                                                color: colours[this.state.colour][500],
                                                                paddingLeft: '15px'
                                                            }}>{c.title}</h3>
                                                        </div>
                                                        <p>
                                                            {c.body}
                                                        </p>
                                                        <div className={'row'}>
                                                            {c.linkOut ?
                                                                <Button onClick={() => this.goToPage(c.linkOut)}
                                                                        variant={'outlined'}>More</Button> : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Box>
                                        </Grid>
                                    }) : null}
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
