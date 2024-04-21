import React from "react";
import './carousel.css'
import { Button } from "@mui/material";

function Carousel() {
    const handleButtonClick = () => {
        window.open("https://www.every.org/her-initiative?utm_campaign=donate-link#/donate/card");
    };
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', position: 'relative',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
            <video autoPlay muted loop style={{
                position: 'absolute',
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                // zIndex: '-1'
            }}>
                <source src="/photos/malaika.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <div className="textContainer">
                    {/* <p className="header1">Ensure young women have a</p> */}
                    <p className="header2">Yes! To Financial  <br /> Freedom</p>
                    <div style={{ display: "flex", marginTop: '40px' }}>
                        <p className="header3">MAKE A DIFFERENCE</p>
                        <Button variant="contained" onClick={handleButtonClick} className="button" sx={{ fontSize: '16px', fontWeight: 'bold', borderRadius: '5px' }}>
                            DONATE NOW
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        // <div style={{
        //     height: '95vh',
        //     backgroundImage: 'url("/photos/malaika.mp4")',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        // }}>
        //     <div className="overlay">
        //         <div className="textContainer">
        //             {/* <p className="header1">Ensure young women have a</p> */}
        //             <p className="header2">Yes! To Financial  <br /> Freedom</p>
        //             <div style={{ display: "flex", marginTop: '40px' }}>
        //                 <p className="header3">MAKE A DIFFERENCE</p>
        //                 <Button variant="contained" onClick={handleButtonClick} className="button" sx={{ fontSize: '16px', fontWeight: 'bold', borderRadius: '5px' }}>
        //                     DONATE NOW
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Carousel;
