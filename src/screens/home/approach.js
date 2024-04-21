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
                {/* <div className="circleContainer">
                    <div className="circle">
                        <img src="/icons/money.png" alt="logo" width={'60px'} />
                    </div>
                    <p>Economic Empowerment</p>
                </div>
                <div className="circleContainer">
                    <div className="circle">
                        <img src="/icons/protest.png" alt="logo" width={'60px'} />
                    </div>
                    <p>Girls Agency Empowerment</p>
                </div>
                <div className="circleContainer">
                    <div className="circle">
                        <img src="/icons/creative-thinking.png" alt="logo" width={'60px'} />
                    </div>
                    <p>Skills Development</p>
                </div>
                <div className="circleContainer">
                    <div className="circle">
                        <img src="/icons/opportunity.png" alt="logo" width={'60px'} />
                    </div>
                    <p>Linkages to Resources and Opportunities</p>
                </div>
                <div className="circleContainer">
                    <div className="circle">
                        <img src="/icons/sustainable.png" alt="logo" width={'60px'} />
                    </div>
                    <p>Creation of an Enabling Environment</p>
                </div> */}
            </div>
        </div>
    )
}
export default Approach;
