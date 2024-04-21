import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
// import { useMediaQuery } from "@mui/material";
import Donations from "../about/donation";
import Blogs from "./news";

function News() {
    // const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Our Blog'} heading3={'Home/Our News'} />
            <Blogs />
            <Donations />
        </div>
    );
}
export default News;