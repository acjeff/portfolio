import React from "react";
import './Menu.scss';
import {Step, Stepper, StepLabel, Typography, Card, IconButton} from "@mui/material";
import {LinkedIn, MusicNote} from "@mui/icons-material";

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
                        </Step>
                    ))}
                </Stepper>
            </Card>
        );
    }
}

export default Menu;
