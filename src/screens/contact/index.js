import React from "react";
import AboutCarousel from "../about/aboutCarousel";
import Part1 from "../about/part1";
import Donations from "../about/donation";
import Contacts from "./contact";

function Contact() {
    return (
        <div>
            <AboutCarousel />
            <Part1 heading2={'Contact us'} heading3={'Home/Contact us'} />
            <Contacts />
            <Donations />
        </div>
    );
}
export default Contact;