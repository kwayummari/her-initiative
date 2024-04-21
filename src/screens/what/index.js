import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import ProgramsData from "./programs";
import Approach from "../home/approach";
import Donations from "../about/donation";

function What() {
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'What we do'} heading3={'Home/What we do'} />
            <ProgramsData />
            <Approach />
            <img src="/photos/what.png" alt="what" style={{marginTop: '0px', width: '100vw', marginBottom: '40px'}} />
            <Donations />
        </div>
    );
}
export default What;