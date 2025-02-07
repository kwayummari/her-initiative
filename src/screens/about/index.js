import React, { useEffect } from "react";
import AboutCarousel from "./aboutCarousel";
import Part1 from "./part1";
import Story2 from "./story2";
import ImageRows from "./imageRows";
import Missions from "./mission";
import Values from "./value";
import Where from "./where";
import Donations from "./donation";

function OurStory() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

       return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'About Us'} heading3={'Home/About Us'} />
            <Story2 />
            <ImageRows />
            <Missions />
            <Values />
            <Where />
            <Donations />
        </div>
    );
}

export default OurStory;