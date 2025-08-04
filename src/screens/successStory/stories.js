import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function Stories() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedStory, setSelectedStory] = useState(null);
    const [storiesData, setStoriesData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(6);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
        fetchStoriesData();
    }, []);

    const fetchStoriesData = async () => {
        try {
            const response = await fetch('https://herinitiative.or.tz/her-api/api/blog/get_stories.php', {
                method: 'GET',
            });
            const data = await response.json();
            setStoriesData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching stories data:', error);
            setIsLoading(false);
        }
    };

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 6);
    };

    const navigation = (story) => {
        setSelectedStory(story);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedStory(null);
    };

    const filterSpecialCharacters = (str) => {
        return str.replace(/[^\w\s]/gi, '');
    };

    const truncateTitle = (title, maxLength = 60) => {
        if (title.length <= maxLength) return title;
        return title.substring(0, maxLength) + '...';
    };

    const truncateDescription = (description, maxLength = 120) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderBlocks = (blocks) => {
        return blocks.map((block, index) => {
            switch (block.type) {
                case 'paragraph':
                    return <p key={index}>{parse(block.data.text)}</p>;
                case 'header':
                    const Tag = `h${block.data.level}`;
                    return <Tag key={index}>{block.data.text}</Tag>;
                case 'list':
                    return (
                        <ul key={index}>
                            {block.data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parse(item)}</li>
                            ))}
                        </ul>
                    );
                case 'ordered-list':
                    return (
                        <ol key={index}>
                            {block.data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parse(item)}</li>
                            ))}
                        </ol>
                    );
                case 'image':
                    return <img key={index} src={block.data.file.url} alt={block.data.caption} />;
                case 'linkTool':
                    return (
                        <p key={index}>
                            Tagged <a href={block.data.link}>{block.data.meta.hashtag}</a>
                        </p>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className="stories-page">
            {/* Hero Section */}
            {/* <section className="stories-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Impact Stories</span>
                        <h1 className="hero-title">Success Stories</h1>
                        <p className="hero-description">
                            Discover the inspiring journeys and transformative impact of our programs through the real stories of girls and women we've empowered
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Stories Grid Section */}
            <section className="stories-section">
                <div className="container">
                    {isLoading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Loading success stories...</p>
                        </div>
                    ) : (
                        <>
                            <div className="stories-grid">
                                {storiesData &&
                                    storiesData.slice(0, displayCount).map((story, index) => (
                                        <div
                                            key={index}
                                            className={`story-card ${isVisible ? 'fade-in' : ''}`}
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <div className="story-image" onClick={() => navigation(story)}>
                                                <img
                                                    src={`https://herinitiative.or.tz/her-api/api/blog/images/${story.image}`}
                                                    alt={filterSpecialCharacters(story.title)}
                                                    className="story-img"
                                                />
                                                <div className="image-overlay">
                                                    <div className="overlay-content">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                            <circle cx="12" cy="12" r="3" />
                                                        </svg>
                                                        <span>Read Story</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="story-info">
                                                <div className="story-header">
                                                    <div className="story-icon">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                            <polyline points="14,2 14,8 20,8"></polyline>
                                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                                            <polyline points="10,9 9,9 8,9"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div className="story-actions">
                                                        <button className="action-btn" onClick={() => navigation(story)}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                                <circle cx="12" cy="12" r="3" />
                                                            </svg>
                                                            Read
                                                        </button>
                                                        <button className="action-btn share-btn" onClick={() => {
                                                            if (navigator.share) {
                                                                navigator.share({
                                                                    title: filterSpecialCharacters(story.title),
                                                                    text: story.description,
                                                                    url: window.location.href
                                                                });
                                                            } else {
                                                                navigator.clipboard.writeText(window.location.href);
                                                                alert('Link copied to clipboard!');
                                                            }
                                                        }}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <circle cx="18" cy="5" r="3"></circle>
                                                                <circle cx="6" cy="12" r="3"></circle>
                                                                <circle cx="18" cy="19" r="3"></circle>
                                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                            </svg>
                                                            Share
                                                        </button>
                                                    </div>
                                                </div>
                                                <h3 className="story-title" onClick={() => navigation(story)}>
                                                    {truncateTitle(filterSpecialCharacters(story.title))}
                                                </h3>
                                                <p className="story-description">
                                                    {truncateDescription(story.description)}
                                                </p>
                                                <div className="story-meta">
                                                    <button className="view-more-btn" onClick={() => navigation(story)}>
                                                        Read Full Story
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            {storiesData && displayCount < storiesData.length && (
                                <div className="load-more-container">
                                    <button className="load-more-btn" onClick={handleLoadMore}>
                                        Load More Stories
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 13l5 5 5-5"></path>
                                            <path d="M7 6l5 5 5-5"></path>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Story Modal */}
            {openModal && selectedStory && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14,2 14,8 20,8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10,9 9,9 8,9"></polyline>
                                </svg>
                            </div>
                            <div className="modal-info">
                                <h2 className="modal-title">{filterSpecialCharacters(selectedStory.title)}</h2>
                                <div className="modal-meta">
                                    <span className="story-category">Success Story</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body">
                            {selectedStory.image && (
                                <div className="modal-image">
                                    <img
                                        src={`https://herinitiative.or.tz/her-api/api/blog/images/${selectedStory.image}`}
                                        alt={filterSpecialCharacters(selectedStory.title)}
                                    />
                                </div>
                            )}

                            <div className="modal-description">
                                {selectedStory.full_description && renderBlocks(JSON.parse(selectedStory.full_description).blocks)}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .stories-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .stories-hero {
                    padding: 6rem 0;
                    background: linear-gradient(135deg, #633e98 0%, #f3ec1a 100%);
                    text-align: center;
                    color: white;
                    position: relative;
                }

                .stories-hero::before {
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
                    margin: 0 auto;
                    line-height: 1.7;
                    opacity: 0.9;
                }

                /* Stories Section */
                .stories-section {
                    padding: 6rem 0;
                    background: white;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .loading-container {
                    text-align: center;
                    padding: 4rem 0;
                }

                .loading-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f4f6;
                    border-top: 4px solid #633e98;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .stories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .story-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                    opacity: 0;
                    transform: translateY(30px);
                }

                .story-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .story-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .story-image {
                    position: relative;
                    height: 250px;
                    overflow: hidden;
                }

                .story-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
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
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .story-card:hover .image-overlay {
                    opacity: 1;
                }

                .story-card:hover .story-img {
                    transform: scale(1.05);
                }

                .overlay-content {
                    color: white;
                    text-align: center;
                }

                .overlay-content svg {
                    margin-bottom: 0.5rem;
                }

                .story-info {
                    padding: 1.5rem;
                }

                .story-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .story-icon {
                    width: 40px;
                    height: 40px;
                    background: #f8f9fa;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #633e98;
                }

                .story-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    padding: 0.5rem 0.8rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn:hover {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: translateY(-2px);
                }

                .share-btn {
                    background: #f8f9fa;
                    color: #633e98;
                }

                .share-btn:hover {
                    background: #633e98;
                    color: white;
                }

                .story-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .story-title:hover {
                    color: #633e98;
                }

                .story-description {
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 0.95rem;
                    margin-bottom: 1.5rem;
                }

                .story-meta {
                    border-top: 1px solid #f1f3f4;
                    padding-top: 1rem;
                }

                .view-more-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 0.8rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .view-more-btn:hover {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: translateY(-2px);
                }

                .load-more-container {
                    text-align: center;
                    margin-top: 3rem;
                }

                .load-more-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 2rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .load-more-btn:hover {
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
                    max-width: 800px;
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

                .modal-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                }

                .modal-meta {
                    margin-bottom: 1rem;
                }

                .story-category {
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

                .modal-image {
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    margin-bottom: 1.5rem;
                }

                .modal-image img {
                    width: 100%;
                    height: auto;
                }

                .modal-description {
                    color: #6c757d;
                    line-height: 1.7;
                    font-size: 1rem;
                }

                .modal-description h1,
                .modal-description h2,
                .modal-description h3,
                .modal-description h4,
                .modal-description h5,
                .modal-description h6 {
                    color: #2c3e50;
                    margin-top: 1.5rem;
                    margin-bottom: 1rem;
                }

                .modal-description p {
                    margin-bottom: 1rem;
                }

                .modal-description ul,
                .modal-description ol {
                    margin-bottom: 1rem;
                    padding-left: 2rem;
                }

                .modal-description li {
                    margin-bottom: 0.5rem;
                }

                .modal-description img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px;
                    margin: 1rem 0;
                }

                .modal-description a {
                    color: #633e98;
                    text-decoration: none;
                    font-weight: 600;
                }

                .modal-description a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .stories-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
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

                    .story-actions {
                        flex-direction: column;
                        gap: 0.3rem;
                    }

                    .action-btn {
                        font-size: 0.7rem;
                        padding: 0.4rem 0.6rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Stories;
