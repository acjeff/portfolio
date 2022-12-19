import React from "react";
import './Menu.scss';

class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <div className={'me-container'}>
                    <div className={'pic'}/>
                    <div className={'name'}>
                        Alex Jefferies
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
