import React from "react";
import { useMediaQuery } from "@mui/material";

function Approach() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div className="approach">
            <div className="approachHeader">
                <p></p>
                <p>Our Approach</p>
            </div>
            <div className="approachBody">
            <img src="/icons/approach.png" alt="logo" width={isMobile ? '90%' : '60%'} />
            </div>
        </div>
    )
}
export default Approach;
