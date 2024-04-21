import React from "react";
import Carousel from "./carousel";
import AboutUs from "./aboutUs";
import Approach from "./approach";
import Partners from "./partners";
import Impact from "./impact";
import Programs from "./programs";
import { useMediaQuery } from "@mui/material";
import Missions from "../about/mission";
// import Donations from "../about/donation";

function Home() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <Carousel />
            <AboutUs />
            <Approach />
            <Impact />
            {/* {!isMobile ? (<img src="/photos/mission.png" style={{ marginTop: '10px', width: '100vw' }} />)
                : (<img src="/photos/mission1.png" style={{ marginTop: '400px', width: '100vw' }} />)} */}
            {isMobile && <div style={{ marginTop: '400px' }}></div>}
            <Missions home={true} />
            <Programs />
            <Partners />
            {/* <Donations /> */}
        </div>
    );
}
export default Home;