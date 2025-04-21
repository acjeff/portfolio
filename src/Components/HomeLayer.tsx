import React from 'react';
import '../Styles/Home.scss';
import MovingDoodleBackground from './MovingDoodleBackground';

function HomeLayer({backgroundCol, textCol, width}: { backgroundCol: string; textCol: string; width?: string }) {
    let colStyle = {color: textCol};
    return (
        <div className={`home`}
             style={{backgroundColor: backgroundCol, position: 'absolute', height: '100%', width: width || '100%'}}>
            <MovingDoodleBackground/>
            <div>
                <p className={'name first'} style={colStyle}>Alex</p>
                <p className={'name second'} style={colStyle}>Jefferies</p>
            </div>

            {/*<div className={'description'}>*/}
            {/*    <p className={'text'} style={{backgroundColor: 'white', color: textCol === 'white' ? backgroundCol : textCol, borderColor: textCol}}>Hey, I'm a front-end developer and UI/UX designer who loves building*/}
            {/*        approachable, thoughtfully designed*/}
            {/*        digital experiences.</p>*/}
            {/*    /!*<div className={'backing-plate'} style={{borderColor: textCol}}/>*!/*/}
            {/*</div>*/}
        </div>
    );
}

export default HomeLayer;
