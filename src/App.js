import React from "react";
import './App.scss';
import Menu from "./Components/Menu";
import SiteSettings from "./Components/SiteSettings";
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Card,
    CardHeader,
    Container,
    CardContent,
    CardActions, IconButton
} from "@mui/material";
import {LinkOutlined, ViewInArOutlined} from "@mui/icons-material";

const Projects = [
    {
        name: 'GridDuck',
        link: 'https://gridduck.com',
        label: 'GridDuck - CPO / Co-Founder',
        description: 'The Intelligent Energy Management System',
        timeline: `Sep 2017 - Present`,
        overview: <span>When I joined there were two people who had just landed a small government grant to develop DSR Energy Technology.<br/><br/>6 Years later and we have built a full scale energy management system capable of complex monitoring and control, installed in hundreds of sites.</span>,
        breakdown: []
    },
    {
        name: 'Cymbal',
        link: 'https://cymbal-802e6.web.app',
        label: 'Cymbal - Personal Project',
        timeline:
            'Sep 2022 - October 2022',
    },
    {
        name: 'UTC Hub',
        link: 'https://www.utchub.com',
        label: 'UTC Hub - CTO',
        timeline:
            'Jun 2016 - Sep 2017',
    },
    {
        name: 'Gigbloc',
        label: 'Gigbloc - CTO / Co-Founder',
        timeline:
            'Nov 2015 - Nov 2017'
    },
    {
        name: 'WIREWAX',
        link: 'https://www.wirewax.com/studio/',
        label: 'WIREWAX - Designer / Software Developer',
        timeline:
            'Jul 2013 - Nov 2015'
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
                    {/*<Card>*/}
                    {/*    <CardContent>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
