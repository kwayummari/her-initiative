import { React, useEffect, useState } from "react";

function Donations() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
                            <button className="donate-button">
                                <span>DONATE NOW</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="donation-pattern"></div>
                </div>
            </div>

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
                    overflow: hidden;
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
                }
            `}</style>
        </section>
    );
}

export default Donations;