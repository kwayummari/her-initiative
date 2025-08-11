import { React, useEffect, useState } from "react";

function Donations() {
    const [isVisible, setIsVisible] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showDropdown && !event.target.closest('.donate-dropdown')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);

    const donationLinks = [
        {
            name: "Donate Myriad USA",
            url: "https://www.every.org/her-initiative?utm_campaign=donate-link#/donate",
            description: "Support us through our US partner"
        },
        {
            name: "Donate Myriad AUSTRALIA",
            url: "https://myriadaustralia.org/services/donate/her-initiative/",
            description: "Support us through our Australia partner"
        },
        {
            name: "Donate Myriad EUROPEAN",
            url: "https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN",
            description: "Support us through our European partner"
        }
    ];

    const handleDonateClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDonationClick = (url) => {
        window.open(url, '_blank');
        setShowDropdown(false);
    };

    return (
        <section className="donation-section">
            <div className="container">
                <div className={`donation-card ${isVisible ? 'slide-up' : ''}`}>
                    <div className="donation-content">
                        <div className="donation-text">
                            <h3 className="donation-title">Join Us in Making a Difference</h3>
                            <p className="donation-description">
                                Every donation counts in fueling our mission forward!
                                Your generosity helps us empower more young women across Tanzania.
                            </p>
                        </div>
                        <div className="donation-action">
                            <div className="donate-dropdown">
                                <button className="donate-button" onClick={handleDonateClick}>
                                    <span>DONATE NOW</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                {showDropdown && (
                                    <div className="donate-dropdown-content">
                                        <div className="dropdown-header">
                                            <h4>Choose Donation Option</h4>
                                            <button
                                                className="close-dropdown-btn"
                                                onClick={() => setShowDropdown(false)}
                                            >
                                                ×
                                            </button>
                                        </div>
                                        {donationLinks.map((link, index) => (
                                            <button
                                                key={index}
                                                className="donate-option"
                                                onClick={() => handleDonationClick(link.url)}
                                            >
                                                <div className="donate-option-content">
                                                    <h4>{link.name}</h4>
                                                    <p>{link.description}</p>
                                                </div>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="donation-pattern"></div>
                </div>
            </div>

            {/* Mobile Backdrop Overlay */}
            {showDropdown && (
                <div className="mobile-backdrop" onClick={() => setShowDropdown(false)}></div>
            )}

            <style jsx>{`
                .donation-section {
                    padding: 4rem 0;
                    background: #f8f9fa;
                }

                .donation-card {
                    position: relative;
                    background: #633e98;
                    border-radius: 25px;
                    padding: 3rem;
                    box-shadow: 0 20px 40px rgba(99, 62, 152, 0.2);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease;
                }

                .donation-card.slide-up {
                    opacity: 1;
                    transform: translateY(0);
                }

                .donation-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 25px 50px rgba(99, 62, 152, 0.3);
                }

                .donation-content {
                    position: relative;
                    z-index: 2;
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 2rem;
                    align-items: center;
                }

                .donation-text {
                    color: white;
                }

                .donation-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                .donation-description {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    line-height: 1.6;
                    margin: 0;
                }

                .donation-action {
                    display: flex;
                    justify-content: center;
                }

                .donate-button {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #f3ec1a;
                    color: #633e98;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(243, 236, 26, 0.3);
                }

                .donate-button:hover {
                    background: white;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(243, 236, 26, 0.4);
                }

                .donate-button svg {
                    transition: transform 0.3s ease;
                }

                .donate-button:hover svg {
                    transform: translateX(3px);
                }

                .donation-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle 100px at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle 80px at 80% 70%, rgba(243, 236, 26, 0.1) 0%, transparent 50%),
                        radial-gradient(circle 120px at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                }

                .donate-dropdown {
                    position: relative;
                    display: inline-block;
                    z-index: 9999;
                }

                .donate-dropdown-content {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background-color: white;
                    min-width: 320px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 10000;
                    border-radius: 12px;
                    overflow: hidden;
                    margin-top: 0.5rem;
                    border: 1px solid rgba(99, 62, 152, 0.1);
                }

                .dropdown-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem 1.5rem;
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #e9ecef;
                    border-radius: 12px 12px 0 0;
                }

                .dropdown-header h4 {
                    margin: 0;
                    color: #633e98;
                    font-size: 1rem;
                    font-weight: 600;
                }

                .close-dropdown-btn {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #633e98;
                    cursor: pointer;
                    padding: 0.25rem 0.5rem;
                    border-radius: 50%;
                    transition: background-color 0.2s ease;
                }

                .close-dropdown-btn:hover {
                    background-color: #f0f0f0;
                }

                .donate-option {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem 1.5rem;
                    background-color: white;
                    border-bottom: 1px solid #f0f0f0;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    border: none;
                    width: 100%;
                }

                .donate-option:last-child {
                    border-bottom: none;
                }

                .donate-option:hover {
                    background-color: #f8f9fa;
                    transform: translateX(5px);
                }

                .donate-option-content {
                    flex: 1;
                }

                .donate-option-content h4 {
                    margin: 0 0 0.25rem 0;
                    color: #633e98;
                    font-size: 1rem;
                    font-weight: 600;
                }

                .donate-option-content p {
                    margin: 0;
                    color: #6c757d;
                    font-size: 0.85rem;
                    line-height: 1.4;
                }

                .donate-option svg {
                    color: #633e98;
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                    margin-left: 1rem;
                }

                .donate-option:hover svg {
                    transform: translateX(3px);
                }

                .mobile-backdrop {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 9998;
                }

                @media (max-width: 768px) {
                    .donation-card {
                        padding: 2rem;
                    }

                    .donation-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 1.5rem;
                    }

                    .donation-title {
                        font-size: 1.5rem;
                    }

                    .donation-description {
                        font-size: 1rem;
                    }

                    .donate-button {
                        padding: 0.875rem 1.5rem;
                        font-size: 0.9rem;
                    }

                    .donate-dropdown-content {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        min-width: 90vw;
                        max-width: 350px;
                        max-height: 80vh;
                        overflow-y: auto;
                        margin-top: 0;
                        border-radius: 16px;
                    }

                    .donate-option {
                        padding: 1rem 1.25rem;
                    }

                    .donate-option-content h4 {
                        font-size: 0.95rem;
                    }

                    .donate-option-content p {
                        font-size: 0.8rem;
                    }

                    .mobile-backdrop {
                        display: block;
                    }

                    .dropdown-header {
                        padding: 1rem 1.25rem;
                    }

                    .close-dropdown-btn {
                        font-size: 1.25rem;
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
}

export default Donations;