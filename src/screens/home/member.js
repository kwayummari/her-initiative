// Members.js
import React, { useState, useEffect } from 'react';

function Members({ programData, teamData }) {
    const [selectedMember, setSelectedMember] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setTimeout(() => setSelectedMember(null), 300);
    };

    const renderSection = (data, title, subtitle) => (
        <section className="team-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">{title === "Our Board" ? "Leadership" : "Team"}</span>
                    <h2 className="section-title">{title}</h2>
                    {subtitle && <p className="section-subtitle">{subtitle}</p>}
                </div>

                <div className="team-grid">
                    {data.map((member, index) => (
                        <div
                            key={index}
                            className={`team-card ${isVisible ? 'fade-in' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-image-container" onClick={() => handleMemberClick(member)}>
                                <img
                                    src={`/photos/${member.image}`}
                                    alt={member.title}
                                    className="card-image"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span>View Profile</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="member-name">{member.title}</h3>
                                <p className="member-role">{member.subTitle}</p>
                                {member.description && (
                                    <p className="member-description">
                                        {member.description}
                                        <button
                                            className="read-more-btn"
                                            onClick={() => handleMemberClick(member)}
                                        >
                                            Read More
                                        </button>
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="team-page">
            {renderSection(programData, "Our Board")}
            {renderSection(teamData, "Our Team", "At the heart of our mission, we are a dynamic team of young women leaders who intimately understand and resonate with the challenges faced by our peers. Our identity is rooted in being girl-centric, where the needs and aspirations of young women and girls are at the forefront of every endeavor we undertake.")}

            {/* Modern Modal */}
            {openModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {selectedMember && (
                            <div className="modal-body">
                                <div className="modal-header">
                                    <div className="modal-image">
                                        <img
                                            src={`/photos/${selectedMember.image}`}
                                            alt={selectedMember.title}
                                        />
                                    </div>
                                    <div className="modal-info">
                                        <h2 className="modal-title">{selectedMember.title}</h2>
                                        <p className="modal-role">{selectedMember.subTitle}</p>
                                    </div>
                                </div>
                                <div className="modal-description">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: selectedMember.fullDescription }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style jsx>{`
                .team-page {
                    overflow-x: hidden;
                }

                .team-section {
                    padding: 6rem 0;
                    background: white;
                }

                .team-section:nth-child(even) {
                    background: #f8f9fa;
                }

                .section-header {
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
                    margin-bottom: 1rem;
                }

                .section-subtitle {
                    font-size: 1.1rem;
                    color: #6c757d;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .team-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(30px);
                }

                .team-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .team-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .card-image-container {
                    position: relative;
                    height: 350px;
                    cursor: pointer;
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .card-image-container:hover .card-image {
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

                .card-image-container:hover .image-overlay {
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
                    font-size: 1rem;
                }

                .card-content {
                    padding: 1.5rem;
                }

                .member-name {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .member-role {
                    font-size: 0.9rem;
                    color: #633e98;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .member-description {
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 0.9rem;
                }

                .read-more-btn {
                    background: none;
                    border: none;
                    color: #633e98;
                    font-weight: 600;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 0.5rem;
                    transition: color 0.3s ease;
                }

                .read-more-btn:hover {
                    color: #f3ec1a;
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
                    max-width: 800px;
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

                .modal-body {
                    padding: 2rem;
                }

                .modal-header {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 2rem;
                    align-items: center;
                }

                .modal-image {
                    flex-shrink: 0;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 4px solid #633e98;
                }

                .modal-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .modal-info {
                    flex: 1;
                }

                .modal-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .modal-role {
                    font-size: 1.1rem;
                    color: #633e98;
                    font-weight: 600;
                    margin: 0;
                }

                .modal-description {
                    color: #6c757d;
                    line-height: 1.7;
                    font-size: 1rem;
                }

                .modal-description p {
                    margin-bottom: 1rem;
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }

                    .team-grid {
                        grid-template-columns: 1fr;
                    }

                    .card-image-container {
                        height: 300px;
                    }

                    .modal-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }

                    .modal-image {
                        width: 100px;
                        height: 100px;
                    }

                    .modal-title {
                        font-size: 1.5rem;
                    }

                    .modal-content {
                        margin: 1rem;
                        max-height: 95vh;
                    }

                    .modal-body {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Members;