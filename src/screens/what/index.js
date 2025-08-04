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
            <section className="what-image-section">
                <div className="container">
                    <img src="/photos/what.png" alt="What We Do" className="what-image" />
                </div>
            </section>
            <Donations />

            <style jsx>{`
                .what-image-section {
                    padding: 4rem 0;
                    background: #f8f9fa;
                }

                .what-image {
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .what-image:hover {
                    transform: translateY(-5px);
                }

                @media (max-width: 768px) {
                    .what-image-section {
                        padding: 2rem 0;
                    }
                }
            `}</style>
        </div>
    );
}
export default What;