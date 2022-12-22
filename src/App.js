import React from "react";
import './App.scss';
import Menu from "./Components/Menu";
import SiteSettings from "./Components/SiteSettings";
import {isMobile} from 'react-device-detect';

import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Container,
    Grid, Box, Button, Divider, SwipeableDrawer, Tooltip, IconButton
} from "@mui/material";
import blue from '@mui/material/colors/blue';
import orange from '@mui/material/colors/orange';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';
import pink from '@mui/material/colors/pink';
import {
    ArrowDownward,
    ArrowUpward,
    AutoStoriesTwoTone,
    DesignServicesTwoTone, Email,
    FormatPaintTwoTone, GitHub,
    IntegrationInstructionsTwoTone, LinkedIn,
    LocalPoliceTwoTone, MusicNote
} from "@mui/icons-material";
import GridDuckLogo from './Images/gridduck.png';
import GridDuckMonitoringMP4 from './Images/GD-DASH.mp4';
// import GridDuckMonitoringWEBM from './Images/GD-DASH.webm';
// import GridDuckHeader from './Images/GridDuck-Header.png';

let colours = [blue, pink, purple, orange, green];

class App extends React.Component {

    constructor(props) {
        super(props);

        window.location.lasthash = [];
        const self = this;
        this.state = this.breakdownURLParams(window.location.hash);
        this.state.mobileMenuOpen = false;
        this.updateParam = this.updateParam.bind(this);

        window.onhashchange = function (loc) {
            console.log('Window changed: ', loc);
            console.log(self.breakdownURLParams(loc.newURL), ' : self.breakdownURLParams()');
            self.setState(self.breakdownURLParams(loc.newURL));
        }

    }

    extractUrlValue(key, url) {
        if (typeof (url) === 'undefined')
            url = window.location.href;
        let match = url.match('[?&]' + key + '=([^&]+)');
        return match ? match[1] : null;
    }

    breakdownURLParams(url) {
        url = url.replace("/#", "");

        return {
            themeTod: this.extractUrlValue('themeTod', url) || 'light',
            themeFont: 'Poppins, sans-serif',
            project: parseInt(this.extractUrlValue('project', url)) || 0,
            section: this.extractUrlValue('section', url) || '0',
            colour: this.extractUrlValue('colour', url) || 0
        }

    }

    updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            return (uri + separator + key + "=" + value);
        }
    }

    updateParam(param, newValue) {
        this.setState({mobileMenuOpen: false});
        // let updateObj = {};
        window.location.lasthash.push(window.location.hash);
        window.location.hash = this.updateQueryStringParameter(window.location.hash, param, newValue + '');
        // window.history.pushState(null, null, this.updateQueryStringParameter(window.location.hash, param, newValue + ''));
        // updateObj[param] = newValue;
        // this.setState(updateObj);
    }

    goToPage(page) {
        console.log('Go to page');
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
                                <video muted loop autoPlay disablePictureInPicture src={GridDuckMonitoringMP4}/>
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
                    {!isMobile ? <Menu section={this.state.section} project={this.state.project}
                                       projects={Projects}
                                       selectProject={this.updateParam}
                                       selectSection={this.updateParam}/> : <SwipeableDrawer
                        // container={window.document.body}
                        anchor="bottom"
                        open={this.state.mobileMenuOpen}
                        onClose={() => this.setState({mobileMenuOpen: false})}
                        onOpen={() => this.setState({mobileMenuOpen: true})}
                        swipeAreaWidth={130}
                        disableSwipeToOpen={false}
                        ModalProps={{
                            keepMounted: true,
                        }}>

                        <Box className={'puller ' + (this.state.themeTod === 'dark' ? ' dark' : '') + (this.state.mobileMenuOpen ? ' open' : '')}>
                            {!this.state.mobileMenuOpen ?
                                <p className={'dragger'}><ArrowUpward/> Drag up for menu <ArrowUpward/></p> :
                                <p className={'dragger'}><ArrowDownward/> Drag down to close <ArrowDownward/></p>}
                            <div className={'me-container'}>
                                <div className={'pic'}/>
                                <div className={'name'}>
                                    <h3 style={{margin: 0}}>Alex Jefferies</h3>
                                    <Tooltip title={'Email'}><IconButton
                                        color={'primary'}><Email/></IconButton></Tooltip>
                                    <Tooltip title={'LinkedIn'}><IconButton
                                        color={'primary'}><LinkedIn/></IconButton></Tooltip>
                                    <Tooltip title={'Github'}><IconButton
                                        color={'primary'}><GitHub/></IconButton></Tooltip>
                                    <Tooltip title={'Spotify'}><IconButton
                                        color={'primary'}><MusicNote/></IconButton></Tooltip>
                                </div>
                            </div>
                            {/*<MenuTwoTone onClick={(e) => {*/}
                            {/*    e.preventDefault();*/}
                            {/*    e.stopPropagation();*/}
                            {/*    this.setState({mobileMenuOpen: true});*/}
                            {/*}} color={'primary'} style={{fontSize: '40px'}}/>*/}
                        </Box>
                        <Menu mobile={isMobile}
                              section={this.state.section}
                              project={this.state.project}
                              projects={Projects}
                              theme={this.state.themeTod}
                              selectProject={this.updateParam}
                              selectSection={this.updateParam}/>
                    </SwipeableDrawer>}

                </CssBaseline>
                <div className={'Content'}>
                    <div
                        className={'Content-header ' + (isMobile ? ' mobile' : '') + (this.state.themeTod === 'dark' ? ' dark' : '')}>
                        <div className={'row'}>
                            {/*{project.link ? <IconButton*/}
                            {/*    onClick={() => window.open(project.link, '_blank')}><LinkOutlined/></IconButton> : null}*/}
                            <div style={{backgroundImage: 'url("' + project.logoURL + '")'}}
                                 className={'logo ' + (isMobile ? ' mobile' : '')}/>
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
                            // changeThemeFont={(font) => this.setState({themeFont: font})}
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
                                                                <Button onClick={(e) => this.goToPage(c.linkOut)}
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
