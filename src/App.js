import React from "react";
import './App.scss';
import Menu from "./Components/Menu";
import SiteSettings from "./Components/SiteSettings";
import {ThemeProvider, createTheme, CssBaseline} from "@mui/material";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            themeColor: 'dark',
            themeFont: 'M PLUS Code Latin, sans-serif'
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

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline className={"Main"}>
                    <Menu/>
                    <SiteSettings
                        font={this.state.themeFont}
                        theme={this.state.themeColor}
                        changeThemeFont={(font) => this.setState({themeFont: font})}
                        changeThemeColor={() => this.setState({themeColor: this.state.themeColor === 'light' ? 'dark' : 'light'})}/>
                </CssBaseline>
            </ThemeProvider>
        );
    }
}

export default App;
