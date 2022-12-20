import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './SiteSettings.scss';
import {IconButton, ButtonGroup, Tooltip} from "@mui/material";
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
                        <Tooltip title={(this.props.theme === 'light' ? 'Dark' : 'Light') + ' Mode'}><IconButton
                            color={'primary'}
                            onClick={this.props.changeThemeTod}>{this.props.theme === 'light' ?
                            <DarkModeIcon/> : <LightModeIcon/>}</IconButton></Tooltip>
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
                        <Tooltip title={'Change Colour'}><IconButton
                            color={'primary'} ref={this.colorRef}
                            onClick={() => this.setState({showColors: true})}><Colorize/></IconButton></Tooltip>
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
