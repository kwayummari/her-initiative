import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import Donation from "../home/donation";
import Programs from "../home/programs";
import { useMediaQuery } from "@mui/material";

function Impacts() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Our Impact'} heading3={'Home/Impacts'} />
            <Programs />
            {!isMobile ? (<img src="/photos/mission.png" alt="mission" style={{ marginTop: '100px', width: '100vw' }} />)
                : (<img src="/photos/mission1.png" alt="mission" style={{ marginTop: '100px', width: '100vw' }} />)}
            <Donation />
        </div>
    );
}
export default Impacts;