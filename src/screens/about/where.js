import { React } from "react";
import './styles.css'
import { Grid, useMediaQuery } from "@mui/material";

function Where() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <p className="valuesTitle">Where we work</p>
            <Grid container spacing={4} item xs={12} style={{paddingLeft: '20px', paddingRight: '20px', justifyContent: "center"}}>
                <Grid item xs={isMobile ? 12 : 8}>
                    <img src="/photos/tanzania.png" alt="logo" width={"100%"} style={{borderRadius: '50px'}}  />
                </Grid>
            </Grid>
        </div>
    );
}
export default Where;