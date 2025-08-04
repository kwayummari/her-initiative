import React, { useState, useEffect } from "react";

const steps = [
    {
        year: '2024',
        date: '2024',
        title: 'KBF Africa Prize Lauraute 2023-2024',
        description: 'A prestigious recognition for outstanding contributions to African development and innovation.',
        image: '/photos/africa.jpg',
        category: 'International Award'
    },
    {
        year: '2024',
        date: '2024',
        title: '2024 Global Citizen Prize',
        description: 'Recognition for global impact and commitment to citizen empowerment and social change.',
        image: '/photos/global.jpeg',
        category: 'Global Recognition'
    },
    {
        year: '2023',
        date: 'July 2023',
        title: 'Tanzania Digital Awards',
        description: 'Her Initiative, through Panda Digital, was honoured with an award for championing justice advocacy using digital platforms at the Tanzania Digital Awards.',
        image: null,
        category: 'Digital Innovation'
    },
    {
        year: '2022',
        date: 'April 27, 2022',
        title: '+1 Global Fund Recognition',
        description: 'Panda Digital was acknowledged by the +1 Global Fund under the Roddenberry Foundation, receiving a USD 12,000 prize for its substantial contribution to advancing education in Africa through digital technology.',
        image: null,
        category: 'Funding Award'
    },
    {
        year: '2021',
        date: 'October 14, 2021',
        title: 'Ministry of Health Recognition',
        description: 'Panda Digital was recognized by the Ministry of Health, Community Development, Gender, Elders, and Children for being the first Swahili-focused digital platform dedicated to girls\' education in Tanzania.',
        image: null,
        category: 'Government Recognition'
    },
];

function RecognitionsPart() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedRecognition, setSelectedRecognition] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, []);

    const handleCardClick = (recognition) => {
        setSelectedRecognition(recognition);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedRecognition(null);
    };

    return (
        <div className="recognitions-page">
            {/* Hero Section */}
            {/* <section className="recognitions-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Awards & Recognition</span>
                        <h1 className="hero-title">Our Achievements</h1>
                        <p className="hero-description">
                            Celebrating the milestones and achievements that recognize our impact and commitment to empowering girls and women across Africa
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Awards</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">4</span>
                                <span className="stat-label">Years</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3</span>
                                <span className="stat-label">Categories</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Timeline Section */}
            <section className="timeline-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Recognition Timeline</h2>
                        <p className="section-subtitle">Our journey of achievements and milestones</p>
                    </div>

                    <div className="timeline-container">
                        {steps.map((recognition, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${isVisible ? 'fade-in' : ''}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                                onClick={() => handleCardClick(recognition)}
                            >
                                <div className="timeline-marker">
                                    <div className="marker-dot"></div>
                                    <div className="marker-line"></div>
                                    <div className="marker-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <div className="timeline-date">
                                            <span className="year">{recognition.year}</span>
                                            <span className="date">{recognition.date}</span>
                                        </div>
                                        <div className="timeline-category">
                                            {recognition.category}
                                        </div>
                                    </div>

                                    <div className="timeline-body">
                                        <h3 className="timeline-title">{recognition.title}</h3>
                                        <p className="timeline-description">{recognition.description}</p>

                                        {recognition.image && (
                                            <div className="timeline-image">
                                                <img
                                                    src={recognition.image}
                                                    alt={recognition.title}
                                                    className="recognition-image"
                                                />
                                                <div className="image-overlay">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    <span>View Details</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="timeline-footer">
                                        <button className="view-details-btn">
                                            View Details
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recognition Modal */}
            {showModal && selectedRecognition && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div className="modal-info">
                                <div className="modal-meta">
                                    <span className="modal-year">{selectedRecognition.year}</span>
                                    <span className="modal-date">{selectedRecognition.date}</span>
                                </div>
                                <h2 className="modal-title">{selectedRecognition.title}</h2>
                                <div className="modal-category">
                                    {selectedRecognition.category}
                                </div>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p className="modal-description">{selectedRecognition.description}</p>

                            {selectedRecognition.image && (
                                <div className="modal-image">
                                    <img
                                        src={selectedRecognition.image}
                                        alt={selectedRecognition.title}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .recognitions-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .recognitions-hero {
                    padding: 6rem 0;
                    background: linear-gradient(135deg, #633e98 0%, #f3ec1a 100%);
                    text-align: center;
                    color: white;
                    position: relative;
                }

                .recognitions-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('/photos/background.png') center/cover;
                    opacity: 0.1;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                }

                .hero-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 1.5rem;
                    backdrop-filter: blur(10px);
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .hero-description {
                    font-size: 1.2rem;
                    max-width: 700px;
                    margin: 0 auto 3rem;
                    line-height: 1.7;
                    opacity: 0.9;
                }

                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                    margin-top: 2rem;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #f3ec1a;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .stat-label {
                    font-size: 1rem;
                    font-weight: 500;
                    opacity: 0.8;
                }

                /* Timeline Section */
                .timeline-section {
                    padding: 6rem 0;
                    background: white;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                }

                .section-subtitle {
                    font-size: 1.1rem;
                    color: #6c757d;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .timeline-container {
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 2rem 0;
                }

                .timeline-container::before {
                    content: '';
                    position: absolute;
                    left: 50px;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(to bottom, #633e98, #f3ec1a);
                    z-index: 1;
                }

                .timeline-item {
                    position: relative;
                    margin-bottom: 3rem;
                    opacity: 0;
                    transform: translateX(-50px);
                    transition: all 0.5s ease;
                    cursor: pointer;
                }

                .timeline-item.fade-in {
                    opacity: 1;
                    transform: translateX(0);
                }

                .timeline-item:hover {
                    transform: translateY(-5px);
                }

                .timeline-marker {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100px;
                    height: 100px;
                    z-index: 2;
                }

                .marker-dot {
                    position: absolute;
                    left: 41px;
                    top: 20px;
                    width: 20px;
                    height: 20px;
                    background: #633e98;
                    border: 4px solid white;
                    border-radius: 50%;
                    box-shadow: 0 4px 12px rgba(99, 62, 152, 0.3);
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .marker-dot {
                    background: #f3ec1a;
                    transform: scale(1.2);
                }

                .marker-line {
                    position: absolute;
                    left: 50px;
                    top: 40px;
                    width: 3px;
                    height: 60px;
                    background: #e9ecef;
                }

                .marker-icon {
                    position: absolute;
                    left: 25px;
                    top: 45px;
                    color: #633e98;
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .marker-icon {
                    color: #f3ec1a;
                    transform: scale(1.1);
                }

                .timeline-content {
                    margin-left: 120px;
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .timeline-item:hover .timeline-content {
                    border-color: #633e98;
                    box-shadow: 0 20px 40px rgba(99, 62, 152, 0.15);
                }

                .timeline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }

                .timeline-date {
                    display: flex;
                    flex-direction: column;
                }

                .year {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #633e98;
                }

                .date {
                    font-size: 0.9rem;
                    color: #6c757d;
                    font-weight: 500;
                }

                .timeline-category {
                    background: #f8f9fa;
                    color: #633e98;
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .timeline-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .timeline-description {
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    font-size: 1rem;
                }

                .timeline-image {
                    position: relative;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    margin-bottom: 1.5rem;
                }

                .recognition-image {
                    width: 100%;
                    height: auto;
                    transition: transform 0.3s ease;
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(99, 62, 152, 0.8);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .timeline-item:hover .image-overlay {
                    opacity: 1;
                }

                .timeline-item:hover .recognition-image {
                    transform: scale(1.05);
                }

                .timeline-footer {
                    border-top: 1px solid #f1f3f4;
                    padding-top: 1rem;
                }

                .view-details-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                }

                .view-details-btn:hover {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: translateY(-2px);
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 2rem;
                    backdrop-filter: blur(5px);
                }

                .modal-content {
                    background: white;
                    border-radius: 20px;
                    max-width: 600px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    animation: modalSlideIn 0.3s ease;
                }

                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .modal-close {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                }

                .modal-close:hover {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: scale(1.1);
                }

                .modal-header {
                    padding: 2rem 2rem 1rem;
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                }

                .modal-icon {
                    width: 80px;
                    height: 80px;
                    background: #633e98;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .modal-info {
                    flex: 1;
                }

                .modal-meta {
                    margin-bottom: 0.5rem;
                }

                .modal-year {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #633e98;
                    margin-right: 1rem;
                }

                .modal-date {
                    font-size: 1rem;
                    color: #6c757d;
                }

                .modal-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .modal-category {
                    display: inline-block;
                    background: #f8f9fa;
                    color: #633e98;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .modal-body {
                    padding: 0 2rem 2rem;
                }

                .modal-description {
                    color: #6c757d;
                    line-height: 1.7;
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                }

                .modal-image {
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }

                .modal-image img {
                    width: 100%;
                    height: auto;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-stats {
                        gap: 2rem;
                    }

                    .stat-number {
                        font-size: 2rem;
                    }

                    .timeline-container::before {
                        left: 30px;
                    }

                    .timeline-marker {
                        width: 60px;
                    }

                    .marker-dot {
                        left: 21px;
                        width: 16px;
                        height: 16px;
                    }

                    .marker-icon {
                        left: 15px;
                    }

                    .timeline-content {
                        margin-left: 80px;
                        padding: 1.5rem;
                    }

                    .modal-content {
                        margin: 1rem;
                        max-height: 95vh;
                    }

                    .modal-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }

                    .modal-icon {
                        align-self: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default RecognitionsPart;
