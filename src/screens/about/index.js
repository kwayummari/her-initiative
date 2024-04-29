import { React, useEffect } from "react";
import AboutCarousel from "./aboutCarousel";
import Part1 from "./part1";
import Story2 from "./story2";
import { useMediaQuery } from "@mui/material";
import ImageRows from "./imageRows";
import Missions from "./mission";
import Values from "./value";
import Where from "./where";
import Donations from "./donation";

function OurStory() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // const isMobile = useMediaQuery('(max-width:600px)');
    const paragraph = `In 2016, Her Initiative took root, fully
    blossoming into action in July 2019, propelled by a visionary
     team led by Lydia Charles Moyo. This group of young women
     embarked on a mission to champion the economic independence
      of girls and young women, aiming to redefine their narrative
       and establish a ‘new normal’. Lydia's personal journey as
       a young woman striving for financial independence fueled the
        organization's inception. Her own experiences inspired a
        commitment to seeking solutions not only for herself but
         for other young women facing similar financial constraints.`;
    const moreParagraph = `Today, Her Initiative stands as a testament to a girl who
    empowers herself to confront social and economic challengesTargeting adolescent girls and young women
     aged 15 to 35, Her Initiative's team comprises resilient social
      change-makers intimately acquainted with the struggles of the
      demographic they serve. In the face of Tanzania's challenging
      economy, they lead a bold initiative, channelling the tenacity
      of young women and girls to drive transformative change.
    Lydia's initial motivation stemmed from witnessing her peers
    drop out of school due to poverty, child marriage, and early
    pregnancies. In 2012, she rallied fellow high school girls,
    sparking self-awareness campaigns and events on girls' rights and
     relevant laws across more than 10 schools in Dar es Salaam.
     Transitioning to university, Lydia spearheaded entrepreneurship
     campaigns like Panda events, fostering knowledge on entrepreneurship
      and facilitating connections with successful industry leaders.
       `;
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'About Us'} heading3={'Home/About Us'} />
            <Story2 smallTitle={'The Story'} bigTitle={'Her Initiative Organization'} moreParagraph={moreParagraph} isAbout={true} Paragraph={paragraph} buttonText={"More About Us"} imageUrl={"/photos/old.jpg"} imageUrl2={"/photos/f.jpg"} />
            {/* {!isMobile ? (<img src="/photos/values.png" style={{ marginTop: '100px', width: '80vw', marginBottom: '200px' }} />)
                : (<img src="/photos/values2.png" style={{ marginTop: '100px', width: '90vw' }} />)}
            <Donation /> */}
            <ImageRows />
            <Missions />
            <Values />
            <Where />
            <Donations />
        </div>
    );
}
export default OurStory;