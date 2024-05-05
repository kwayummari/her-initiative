import React from "react";
import './style.css'
import { Grid, useMediaQuery } from "@mui/material";

function AboutUs() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        !isMobile &&
        <Grid container spacing={isMobile && 3} className="aboutUs">
            <Grid item xs={isMobile ? 12 : 4} className="textContainers">
                <div>
                    <p>
                        WHO
                    </p>
                    <p>
                        WE ARE
                    </p>
                </div>
            </Grid>
            <Grid item xs={isMobile ? 12 : 8} className="biographyContainer">
                {isMobile ? <p>Her Initiative is a Tanzanian non-profit empowering
                    adolescent girls and young women by reshaping societal norms,
                    fostering financial resilience, and integrating technology for
                    economic empowerment.</p> :
                    <p>
                        We are a young women led non-profit organization
                        committed to reshaping the narrative surrounding the value
                        of girls through redefining societal norms that perpetuate
                        the cycle of poverty, and fostering financial resilience
                        among adolescent girls and young women in Tanzania through
                        the fusion of economic empowerment and technology integration.
                    </p>}
            </Grid>
        </Grid>
    )
}
export default AboutUs;