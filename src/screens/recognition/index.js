import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import RecognitionsPart from "./recognitions";
import Donations from "../about/donation";

function Recognitions() {
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Recognitions'} heading3={'Home/Recognitions'} />
            <RecognitionsPart />
            <Donations />
        </div>
    );
}
export default Recognitions;