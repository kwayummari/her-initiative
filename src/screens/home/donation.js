import React from "react";
import { Grid, Button, useMediaQuery } from "@mui/material";

function Donation() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleButtonClick = () => {
        window.location.href = "https://www.every.org/her-initiative/";
      };
    return (
        <div className="donation">
            <Grid container spacing={isMobile ? 0 :3} className="containerDonation">
                <Grid item xs={isMobile ? 12 : 8} className="donationContainer">
                    <p>
                    Join us in making a difference with your generosity - every donation counts in fueling our mission forward!
                    </p>
                </Grid>
                <Grid item xs={isMobile ? 12 : 4} >
                    <Button variant="contained" onClick={handleButtonClick} className="donationButton">Donate Now</Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default Donation;