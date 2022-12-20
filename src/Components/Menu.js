import React from "react";
import './Menu.scss';
import {Step, Stepper, StepLabel, Typography, Card, IconButton, StepContent} from "@mui/material";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import {LinkedIn, MusicNote, ExpandMore, ChevronRight, Email} from "@mui/icons-material";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        }
    }

    render() {
        return (
            <Card className="Menu">
                <div className={'me-container'}>
                    <div className={'pic'}/>
                    <div className={'name'}>
                        <h3 style={{margin: 0}}>Alex Jefferies</h3>
                        <IconButton><Email/></IconButton>
                        <IconButton><LinkedIn/></IconButton>
                        <IconButton><MusicNote/></IconButton>
                    </div>
                </div>
                <Stepper nonLinear activeStep={this.props.activeProject} orientation="vertical">
                    {this.props.projects.map((step, index) => (
                        <Step key={step.label} onClick={() => this.props.selectProject(index)}>
                            <StepLabel
                                optional={
                                    <Typography variant="caption">{step.timeline}</Typography>
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <TreeView
                                    aria-label="file system navigator"
                                    defaultCollapseIcon={<ExpandMore/>}
                                    defaultExpandIcon={<ChevronRight/>}
                                    sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}>
                                    {step.breakdown.map((b, i) => {
                                        return <TreeItem key={i} nodeId={i + ''} label={b.title}/>
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
