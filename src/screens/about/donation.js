import { React } from "react";
import './styles.css'
import { Grid, useMediaQuery, Button } from "@mui/material";

function Donations() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <Grid container spacing={4} item xs={12} style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                justifyContent: "center",
                marginTop: "40px",
                alignItems: "center",
            }}>
                <Grid item xs={isMobile ? 12 : 8} style={{
                    backgroundColor: '#633e98',
                    borderRadius: "50px", display: isMobile ? 'block' : 'flex',
                    justifyContent: isMobile && 'center',
                    margin: isMobile && "20px 20px"
                }}>
                    <Grid xs={isMobile ? 12 : 6}>
                        <p style={{
                            textAlign: 'left',
                            color: '#ffffff',
                            fontWeight: '600',
                            alignItems: "center",
                            paddingBottom: "25px"
                        }}>
                            Join us in making a difference with your generosity
                            every donation counts in fueling our mission forward!
                            {isMobile && <Button variant="contained" className="donationButton">DONATE NOW</Button>}
                        </p>
                    </Grid>
                    <Grid xs={isMobile ? 12 : 6}>
                    {!isMobile && <Button variant="contained" className="donationButton">DONATE NOW</Button>}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default Donations;