import React, { useState } from "react";
import './carousel.css';
import { Button } from "@mui/material";

function Carousel() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', position: 'relative',
        }}>
            <video autoPlay muted loop style={{
                position: 'absolute',
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
            }}>
                <source src="/photos/malaika.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <div className="textContainer">
                    <p className="header2">Yes! To Financial  <br /> Freedom</p>
                    <div 
                        style={{ display: "flex", marginTop: '40px', position: 'relative' }} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className="header3">MAKE A DIFFERENCE</p>
                        <Button 
                            variant="contained" 
                            className="button" 
                            sx={{ fontSize: '16px', fontWeight: 'bold', borderRadius: '5px' }}
                        >
                            DONATE NOW
                        </Button>
                        {dropdownOpen && (
                            <div className="dropdown" style={{ 
                                marginTop: '10px', 
                                backgroundColor: '#633E98',
                                color: '#ffffff',
                                padding: '10px', 
                                borderRadius: '5px', 
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                position: 'absolute', 
                                top: '60%', 
                                left: 100, 
                                zIndex: 1 
                            }}>
                                <p><a style={{color: '#ffffff'}} href="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate/card" target="_blank" rel="noopener noreferrer">Donate via Myriad USA</a></p>
                                <p><a style={{ color: '#ffffff' }} href="https://myriadaustralia.org/services/donate/her-initiative/" target="_blank" rel="noopener noreferrer">Donate via Myriad Australia</a></p>
                                <p><a style={{ color: '#ffffff' }} href="https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN" target="_blank" rel="noopener noreferrer">Donate Myriad EUROPEAN</a></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
