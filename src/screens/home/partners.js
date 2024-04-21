import * as React from 'react';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function Partners() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextIndex = (currentIndex + 1) % partnerLogos.length;
            setCurrentIndex(nextIndex);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const partnerLogos = [
        ["1.png", "2.png", "3.png", "10.png"],
        ["5.png", "6.png", "7.png", "8.png"],
        ["9.png", "6.png","5.png", "4.png"]
    ];

    const renderLogos = (logos) => {
        return logos[currentIndex].map((logo, index) => (
            <div key={index} className="circleContainer">
                <img src={`/partners/${logo}`} alt="logo" className="partnerLogo" width={'200px'} height={'100px'} />
            </div>
        ));
    };

    const goToPrevious = () => {
        const previousIndex = (currentIndex - 1 + partnerLogos.length) % partnerLogos.length;
        setCurrentIndex(previousIndex);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % partnerLogos.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="partners">
            <div className="partnersHeader">
                <p></p>
                <p>Our Partners</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ChevronLeft onClick={goToPrevious} style={{color: '#633e98', fontSize: '70px', cursor: 'pointer'}} />
                <div className="partnersBody">{renderLogos(partnerLogos)}</div>
                <ChevronRight onClick={goToNext} style={{color: '#633e98', fontSize: '70px', cursor: 'pointer'}} /> 
            </div>
        </div>
    );
}

export default Partners;
