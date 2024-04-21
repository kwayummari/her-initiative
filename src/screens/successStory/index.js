import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
// import { useMediaQuery } from "@mui/material";
import Donations from "../about/donation";
import Stories from "./stories";

function SuccessStories() {
    // const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Success Stories'} heading3={'Home/Stories'} />
            <Stories />
            <Donations />
        </div>
    );
}
export default SuccessStories;