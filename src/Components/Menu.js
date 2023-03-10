import React from "react";
import './Menu.scss';
import {Step, Stepper, StepLabel, Typography, Card, IconButton, StepContent, Tooltip} from "@mui/material";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {LinkedIn, MusicNote, ExpandMore, ChevronRight, Email, GitHub} from "@mui/icons-material";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        }
    }

    render() {
        return (
            <Card className={"Menu " + (this.props.mobile ? 'mobile' : '') + (this.props.theme === 'dark' ? ' dark' : '')}>
                {!this.props.mobile ? <div className={'me-container'}>
                    <div className={'pic'}/>
                    <div className={'name'}>
                        <h3 style={{margin: 0}}>Alex Jefferies</h3>
                        <Tooltip title={'Email'}><IconButton color={'primary'}><Email/></IconButton></Tooltip>
                        <Tooltip title={'LinkedIn'}><IconButton color={'primary'}><LinkedIn/></IconButton></Tooltip>
                        <Tooltip title={'Github'}><IconButton color={'primary'}><GitHub/></IconButton></Tooltip>
                        <Tooltip title={'Spotify'}><IconButton color={'primary'}><MusicNote/></IconButton></Tooltip>
                    </div>
                </div> : null}
                <Stepper nonLinear activeStep={this.props.project} orientation="vertical">
                    {this.props.projects.map((step, index) => (
                        <Step key={step.label} onClick={() => {
                            this.props.selectProject('section', '0');
                            this.props.selectProject('project', index);
                        }}>
                            <StepLabel
                                optional={<Typography variant="caption">{step.timeline}</Typography>}>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <TreeView
                                    selected={[this.props.section]}
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMore/>}
                                    defaultExpandIcon={<ChevronRight/>}
                                    sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}>
                                    {step.breakdown.map((b, i) => {
                                        return <TreeItem onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            this.props.selectSection('section', i + '');
                                        }}
                                                         key={i} nodeId={i + ''} label={b.title}/>
                                    })}
                                </TreeView>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Card>
        );
    }
}

export default Menu;
