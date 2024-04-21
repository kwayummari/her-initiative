import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import Story from "../about/story";
import Programs from "../home/programs";
import { useLocation } from "react-router-dom";
import Donations from "../about/donation";

function Single() {
    const location = useLocation();
  const { smallTitle, bigTitle, paragraph, imageUrl } = location.state;
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Our Programs'} heading3={'Home/Programs'} />
            <Story  smallTitle={smallTitle} bigTitle={bigTitle} Paragraph={paragraph} buttonText={""} seeButton = {false} imageUrl={imageUrl}/>
            <Programs />
            <Donations />
        </div>
    );
}
export default Single;