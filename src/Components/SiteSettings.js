import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './SiteSettings.scss';
import {IconButton, ButtonGroup} from "@mui/material";
import {Colorize} from "@mui/icons-material";

// const fonts = ['Poppins, sans-serif', 'M PLUS Code Latin, sans-serif'];

class SiteSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFonts: false,
            showColors: false
        }
        this.fontRef = React.createRef();
        this.colorRef = React.createRef();
    }

    render() {
        return (
            <div className="Site-Settings">
                <div className={'me-container'}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <IconButton color={'primary'}
                                    onClick={this.props.changethemeTod}>{this.props.theme === 'light' ?
                            <DarkModeIcon/> : <LightModeIcon/>}</IconButton>
                        {/*<IconButton color={'primary'} ref={this.fontRef}*/}
                        {/*            onClick={() => this.setState({showFonts: true})}><TextFormatIcon/></IconButton>*/}
                        {/*<Menu*/}
                        {/*    id="account-menu"*/}
                        {/*    anchorEl={this.fontRef.current}*/}
                        {/*    open={this.state.showFonts}*/}
                        {/*    onClose={() => this.setState({showFonts: false})}*/}
                        {/*    transformOrigin={{horizontal: 'right', vertical: 'top'}}*/}
                        {/*    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>*/}
                        {/*    {fonts.filter(f => f !== this.props.font).map(f => <MenuItem key={f}*/}
                        {/*                                                                 className={'font-menu-item'}*/}
                        {/*                                                                 style={{*/}
                        {/*                                                                     fontFamily: f,*/}
                        {/*                                                                     fontWeight: 900*/}
                        {/*                                                                 }}*/}
                        {/*                                                                 onClick={() => {*/}
                        {/*                                                                     this.setState({showFonts: false});*/}
                        {/*                                                                     this.props.changeThemeFont(f);*/}
                        {/*                                                                 }}>A</MenuItem>)}*/}
                        {/*</Menu>*/}
                        <IconButton color={'primary'} ref={this.colorRef}
                                    onClick={() => this.setState({showColors: true})}><Colorize/></IconButton>
                        <Menu
                            id="account-menu"
                            anchorEl={this.colorRef.current}
                            open={this.state.showColors}
                            onClose={() => this.setState({showColors: false})}
                            transformOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                            {this.props.colours.map((c, i) => <MenuItem key={i}
                                                                        className={'font-menu-item'}
                                                                        onClick={() => {
                                                                            this.setState({showColors: false});
                                                                            this.props.changeColour(i);
                                                                        }}>
                                <div className={'colour-circle'} style={{backgroundColor: c[500]}}/>
                            </MenuItem>)}
                        </Menu>
                    </ButtonGroup>

                </div>
            </div>
        );
    }
}

export default SiteSettings;
