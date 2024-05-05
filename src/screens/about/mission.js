import { React } from "react";
import './styles.css'
import { Grid, Card, useMediaQuery } from "@mui/material";

function Missions({ home }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <Grid container spacing={4} item xs={12} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <Grid item xs={isMobile ? 10 : 6} >
                    <Card elevation={0} style={{ cursor: 'pointer', width: isMobile && '90vw' }}>
                        <div className="topCard">
                            <p className="topCardParagraph">Mission</p>
                            <img src="/icons/mission.png" width={'80px'} height={'80%'} alt="logo" />
                        </div>
                        <div className="bottomCard">
                            <p className="bottomCardParagraph">
                                To promote financial resilience and digital
                                inclusion amongst girls and young women
                                and enable them to challenge oppressive and
                                discriminatory practices.
                            </p>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={isMobile ? 10 : 6} >
                    <Card elevation={0} style={{ cursor: 'pointer', width: isMobile && '90vw' }}>
                        <div className="topCard">
                            <p className="topCardParagraph">Vision</p>
                            <img src="/icons/vision.png" width={'80px'} height={'80%'} alt="logo" />
                        </div>
                        <div className="bottomCard">
                            <p className="bottomCardParagraph">
                                We envision an inclusive society where adolescent
                                girls and young women have the power to
                                choose and create opportunities for themselves
                                and others.
                            </p>
                        </div>
                    </Card>
                </Grid>
                {!home && <Grid item xs={isMobile ? 12 : 12}>
                    <img src="/photos/screen2.png" alt="logo" style={{
                        maxWidth: isMobile ? '100vw' : '100%',
                        width: '100%',
                        height: isMobile ? '250px' : '100%',
                    }} />
                </Grid>}
            </Grid>
        </div>
    );
}
export default Missions;