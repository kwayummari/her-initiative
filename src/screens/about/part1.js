import React from "react";
import './styles.css'
import { Grid, useMediaQuery } from "@mui/material";

function Part1({ heading2, heading3 }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div className="parentContainer">
            <div className="overlay">

            </div>
            <div className="Container">
                <p className="heading2">{heading2}</p>
                <p className="heading3">{heading3}</p>
            </div>
            {!isMobile &&
                <Grid container className="about" >
                    <Grid item xs={isMobile ? 12 : 4} className="Containers">
                        <div>
                            <p>
                                WHO
                            </p>
                            <p>
                                WE ARE
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 8} className="bContainers">
                        <p>
                            Her Initiative is a young women led non-profit organization
                            committed to reshaping the narrative surrounding the value
                            of girls through redefining societal norms that perpetuate
                            the cycle of poverty, and fostering financial resilience
                            among adolescent girls and young women in Tanzania through
                            the fusion of economic empowerment and technology integration.
                        </p>
                    </Grid>
                </Grid>
            }
        </div>
    )
}
export default Part1;