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
    Grid,
    Box,
    Divider,
    SwipeableDrawer,
    Tooltip,
    IconButton,
    Button,
    Card,
    Typography,
    CardContent,
    CardMedia
} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
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
    LocalPoliceTwoTone, MusicNote, WorkTwoTone
} from "@mui/icons-material";
import GridDuckLogo from './Images/gridduck.png';
import GridDuckMonitoringMP4 from './Images/GD-DASH.mp4';
import GridDuckHeader from './Images/GridDuck-Header.png';
import GridDuckPM from './Images/gd-project-management.png';
import UXDesignSketch from './Images/ux-design-sketch.png';
import GdCode from './Images/gd-code.png';
import GdBranding from './Images/gd-branding.jpeg';

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
                        banner: <div className={'banner gridduck'}>
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={10} sm={10} xs={10} style={{paddingTop: '40px'}}>
                                    <h1 style={{
                                        color: colours[this.state.colour][500],
                                        fontSize: '40px'
                                    }}>The Intelligent<br/>
                                        <span style={{fontStyle: 'underlined'}}>Energy Saving System</span></h1>
                                    <h3 style={{
                                        color: colours[this.state.colour][500]
                                    }}>Helping you save money and reduce your carbon emissions.</h3>
                                    <Typography className={'section-body'} variant="body2" color="text.secondary">GridDuck is an Energy Management System that provides businesses with the ability
                                        to
                                        monitor and control their energy usage.</Typography>
                                </Grid>
                                <Grid item lg={1} md={2} sm={2} xs={2}/>
                                <Grid style={{display: !isMobile ? 'none' : 'auto'}} item md={1} sm={1} xs={1}/>
                                <Grid item lg={5} md={10} sm={10} xs={10} style={{paddingTop: '40px'}}>
                                    <img className={'header'} alt={'GridDuck'} src={GridDuckHeader}
                                         style={{width: '100%'}}/>
                                </Grid>
                            </Grid>
                            <Divider/>
                        </div>,
                        summary: <Grid container spacing={2}>
                            <Grid item lg={4} md={12} sm={12} xs={12} style={{paddingTop: '40px'}}>
                                <div className={'row'} style={{alignItems: 'center', marginBottom: '20px'}}>
                                    <AutoStoriesTwoTone style={{fontSize: '35px'}} color={'primary'}/>
                                    <h2 style={{
                                        color: colours[this.state.colour][500],
                                        paddingLeft: '15px',
                                        margin: 0
                                    }}>Overview</h2>
                                </div>
                                <Typography className={'section-body'} variant="body2" color="text.secondary">
                                    When I joined there were two people who had just landed a small 6 month government
                                    grant to develop DSR Energy Technology.<br/><br/>
                                    Now six years on and we have built a full scale energy management system capable of
                                    complex monitoring and control, installed in hundreds of sites.
                                </Typography>
                            </Grid>
                            <Grid item lg={8} md={12} sm={12} xs={12}>
                                <video muted loop autoPlay disablePictureInPicture src={GridDuckMonitoringMP4}/>
                            </Grid>


                        </Grid>,
                        cardsTitle: 'My Roles',
                        cardsSubTitle: 'My role has encompassed a wide range of disciplines, but my primary responsibilities are listed below.',
                        cardsTitleIcon: <WorkTwoTone style={{fontSize: '35px'}} color={'primary'}/>,
                        cards: [
                            {
                                title: 'Chief Product Officer',
                                imageURL: GridDuckPM,
                                'body': <span>Talking to clients about their experience and then translating that into actionable improvements or features.</span>,
                                icon: <LocalPoliceTwoTone color={'primary'} className={'card-header-icon'}/>,
                                linkOut: {project: 0, section: 1}
                            },
                            {
                                title: 'UI/UX Designer',
                                imageURL: UXDesignSketch,
                                'body': <span>Designing the Dashboard, Installer App, Mobile Webapp and all accompanying tools.</span>,
                                icon: <FormatPaintTwoTone color={'primary'} className={'card-header-icon'}/>,
                                linkOut: {project: 0, section: 2}
                            },
                            {
                                title: 'Full Stack Developer',
                                imageURL: GdCode,
                                'body': <span>Developing everything from the front to the back. (React JS, React Native, Node JS, PostgreSQL). Also assisting in managing the entire range of the AWS suite.</span>,
                                icon: <IntegrationInstructionsTwoTone color={'primary'} className={'card-header-icon'}/>,
                                linkOut: {project: 0, section: 3}
                            },
                            {
                                title: 'Brand Designer',
                                imageURL: GdBranding,
                                'body': <span>Designing the logo and branding, brochures, flyers, business cards, conference banners & the front-of-house website content.</span>,
                                icon: <DesignServicesTwoTone color={'primary'} className={'card-header-icon'}/>,
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

                        <Box
                            className={'puller ' + (this.state.themeTod === 'dark' ? ' dark' : '') + (this.state.mobileMenuOpen ? ' open' : '')}>
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
                            <a href={project.link} rel="noreferrer" target='_blank'>
                                <div style={{backgroundImage: 'url("' + project.logoURL + '")'}}
                                     className={'logo ' + (isMobile ? ' mobile' : '')}/>
                            </a>
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
                            <div className={'column'} style={{padding: isMobile ? '0' : '50px 0'}}>
                                {/*<video className={'header-video'} autoPlay src={section.video}/>*/}
                                {section.banner}
                                {section.summary}
                                <Divider/>
                                <div className={'row'} style={{alignItems: 'center', marginBottom: 0}}>
                                    {section.cardsTitleIcon}
                                    <h2 style={{
                                        color: colours[this.state.colour][500],
                                        paddingLeft: '15px',
                                        margin: 0
                                    }}>{section.cardsTitle}</h2>
                                </div>
                                <Typography className={'section-body'} variant="body2" color="text.secondary">{section.cardsSubTitle}</Typography>
                                <Masonry container columns={isMobile ? 1 : 2} spacing={2}>

                                    {section.cards ? section.cards.map((c) => {
                                        return <div className={'column'}>
                                            <Card style={{backgroundColor: 'rgba(200,200,200,0.05)'}} variant={"outlined"}>
                                                    <CardMedia
                                                        component="img"
                                                        height="200"
                                                        image={c.imageURL}
                                                        style={{objectPosition: '0 0'}}
                                                        alt={c.title}
                                                    />
                                                    {/*<div style={{backgroundImage: 'url("' + c.imageURL + '")'}}*/}
                                                    {/*     className={'card-image'}/>*/}
                                                    <CardContent>

                                                        <div className={'row'}
                                                             style={{alignItems: 'center', marginBottom: '10px'}}>
                                                            {c.icon}
                                                            <Typography fontStyle={{fontWeight: 700, paddingLeft: '10px', fontSize: '20px'}} variant="h6" color="primary">{c.title}</Typography>
                                                        </div>
                                                        {/*<div style={{height: '150px', overflow: 'auto'}}>*/}
                                                        <Typography variant="body2" color="text.secondary">
                                                            {c.body}
                                                        </Typography>
                                                        {/*</div>*/}
                                                        <div className={'row'} style={{marginTop: '20px'}}>
                                                            {c.linkOut ?
                                                                <Button onClick={(e) => this.goToPage(c.linkOut)}
                                                                        variant={'outlined'}>More</Button> : null}
                                                        </div>
                                                    </CardContent>

                                            </Card>
                                        </div>

                                    }) : null}
                                </Masonry>
                            </div>
                        </Container>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
