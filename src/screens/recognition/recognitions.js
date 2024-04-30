import React from "react";
import './styles.css'
import { Grid, useMediaQuery } from "@mui/material";
import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';

const steps = [
    {
        label: 'October 14, 2021',
        description: `Panda Digital was 
      recognized by the Ministry of Health,
       Community Development, Gender, Elders,
        and Children for being the first Swahili-focused
         digital platform dedicated to girls’ education in Tanzania.`,
    },
    {
        label: 'April 27, 2022',
        description:
            `Panda Digital was acknowledged by the +1 
        Global Fund under the Roddenberry Foundation,
        receiving a USD 12,000 prize for its substantial
        contribution to advancing education in Africa through
         digital technology.`,
    },
    {
        label: 'July 2023',
        description: `Her Initiative, through Panda Digital,
       was honoured with an award for championing justice
        advocacy using digital platforms at the Tanzania Digital Awards.`,
    },
    // {
    //     label: '2024',
    //     description: `Her Initiative is officially recognized
    //      as the Laureate of the King Baudouin Foundation Africa
    //       Prize 2023-2024, receiving a significant prize of 200,000 euros.`,
    // },
];
function RecognitionsPart() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div style={{background: "url(/photos/background.png)"}}>
            <Grid container spacing={isMobile ? 0 : 4} item xs={isMobile ? 10 : 12} style={{
                paddingLeft: !isMobile && '20px',
                paddingRight: !isMobile && '20px',
                justifyContent: 'center'
            }}>
                <Grid item xs={isMobile ? 10 : 8} style={{justifyContent: "center"}} >
                <Box sx={{ justifyContent: "center" }}>
                <Stepper activeStep={activeStep} style={{justifyContent: "center"}} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <p style={{fontSize: '20px', fontWeight: '700', color: '#633e98'}}>Last step</p>
                                    ) : null
                                }
                            >
                               <p className="stepperLabel">{step.label}</p>
                            </StepLabel>
                            <StepContent>
                                <p className="stepperDescription">{step.description}</p>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            className="storyButton"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                            style={{fontSize: '20px', fontWeight: '700', color: '#633e98'}}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <p style={{fontSize: '20px'}}>All recognitions completed</p>
                        <Button className="storyButton" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
                </Grid>
            </Grid>
        </div>
    );
}
export default RecognitionsPart;