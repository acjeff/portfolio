import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import './SiteSettings.scss';
import {IconButton} from "@mui/material";

const fonts = ['Asap, sans-serif', 'Poppins, sans-serif', 'M PLUS Code Latin, sans-serif'];

class SiteSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFonts: false
        }
        this.fontRef = React.createRef();
    }

    render() {
        return (
            <div className="Site-Settings">
                <div className={'me-container'}>
                    <IconButton color={'primary'} onClick={this.props.changeThemeColor}>{!this.props.theme ?
                        <DarkModeIcon/> : <LightModeIcon/>}</IconButton>
                    <IconButton color={'primary'} ref={this.fontRef}
                                onClick={() => this.setState({showFonts: true})}><TextFormatIcon/></IconButton>
                    <Menu
                        id="account-menu"
                        anchorEl={this.fontRef.current}
                        open={this.state.showFonts}
                        onClose={() => this.setState({showFonts: false})}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                        {fonts.filter(f => f !== this.props.font).map(f => <MenuItem key={f}
                                                                                     className={'font-menu-item'}
                                                                                     style={{
                                                                                         fontFamily: f,
                                                                                         fontWeight: 900
                                                                                     }}
                                                                                     onClick={() => {
                                                                                         this.setState({showFonts: false});
                                                                                         this.props.changeThemeFont(f);
                                                                                     }}>A</MenuItem>)}
                    </Menu>

                </div>
            </div>
        );
    }
}

export default SiteSettings;
