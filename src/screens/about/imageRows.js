import { React, useEffect, useState } from "react";

function ImageRows() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const programData = [
        { image: "fika.jpg" },
        { image: "_YTE2638.jpg"},
        { image: "_YTE8636.jpg" }
    ];

    return (
        <section className="image-gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <div className="header-content">
                        <span className="section-badge">Our Impact</span>
                        <h2 className="section-title">Making a Difference</h2>
                        <p className="section-description">
                            The formation of Her Initiative was a natural progression,
                            catalyzed by a series of impactful events in colleges.
                            Standing for self-empowerment, the organization aligns
                            itself with the resilience of young women and girls who
                            navigate life's challenges with determination.
                        </p>
                    </div>
                </div>

                <div className="gallery-grid">
                    {programData.map((program, index) => (
                        <div 
                            key={index} 
                            className={`gallery-item ${isVisible ? 'fade-in' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="image-container">
                                <img 
                                    src={`/photos/${program.image}`} 
                                    alt="Her Initiative Impact"
                                    className="gallery-image"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                        <span>View Impact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .image-gallery-section {
                    padding: 6rem 0;
                    background: white;
                }

                .gallery-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-badge {
                    display: inline-block;
                    background: #633e98;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 1.5rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1.5rem;
                }

                .section-description {
                    font-size: 1.1rem;
                    color: #6c757d;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                }

                .gallery-item {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease;
                }

                .gallery-item.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .image-container {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }

                .image-container:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .gallery-image {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .image-container:hover .gallery-image {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(99, 62, 152, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .image-container:hover .image-overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                    color: white;
                }

                .overlay-content svg {
                    margin-bottom: 0.5rem;
                }

                .overlay-content span {
                    display: block;
                    font-weight: 600;
                    font-size: 1.1rem;
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }

                    .gallery-grid {
                        grid-template-columns: 1fr;
                    }

                    .gallery-image {
                        height: 250px;
                    }
                }
            `}</style>
        </section>
    );
}

export default ImageRows;