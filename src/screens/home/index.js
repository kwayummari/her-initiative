import React from "react";
import Carousel from "./carousel";
import AboutUs from "./aboutUs";
import Approach from "./approach";
import Partners from "./partners";
import Impact from "./impact";
import Programs from "./programs";
import { useMediaQuery } from "@mui/material";
import Missions from "../about/mission";
import Objectives from "./objectives";
// import Donations from "../about/donation";

function Home() {
    return (
        <div>
            <Carousel />
            <AboutUs />
            <Approach />
            <Impact />
            <Objectives />
            <Missions home={true} />
            <Programs />
            <Partners />
            {/* <Donations /> */}
        </div>
    );
}
export default Home;