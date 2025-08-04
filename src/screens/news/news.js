import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

function Blogs() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [programData, setProgramData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [shareMenuOpen, setShareMenuOpen] = useState(false);
    const [selectedForShare, setSelectedForShare] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
        fetchProgramData();
        const params = new URLSearchParams(location.search);
        const blogId = params.get('blogId');
        if (blogId && programData) {
            const blog = programData.find(program => program.id === parseInt(blogId));
            if (blog) {
                setSelectedProgram(blog);
                setOpenModal(true);
            }
        }
    }, [location.search, programData]);

    const fetchProgramData = async () => {
        try {
            const response = await fetch('https://herinitiative.or.tz/her-api/api/blog/get_blog.php', {
                method: 'GET',
            });
            const data = await response.json();
            setProgramData(data);
        } catch (error) {
            console.error('Error fetching program data:', error);
        }
    };

    const filterSpecialCharacters = (str) => {
        return str.replace(/[^\w\s]/gi, '');
    };

    const navigation = (programs) => {
        setSelectedProgram(programs);
        setOpenModal(true);
        navigate(`/news?blogId=${programs.id}`);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        navigate(`/news`);
    };

    const handleShareClick = (event, programs) => {
        event.stopPropagation();
        setSelectedForShare(programs);
        setShareMenuOpen(true);
    };

    const handleCloseShareMenu = () => {
        setShareMenuOpen(false);
        setSelectedForShare(null);
    };

    const shareOnPlatform = (platform) => {
        if (!selectedForShare) return;

        const url = `https://herinitiative.or.tz/#/news?blogId=${selectedForShare.id}`;
        const encodedUrl = encodeURIComponent(url);
        const text = encodeURIComponent(selectedForShare.title);
        const imageUrl = `https://herinitiative.or.tz/her-api/api/blog/images/${selectedForShare.image}`;

        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&image-src=${imageUrl}&url=${encodedUrl}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'instagram':
                alert('Instagram does not support direct URL sharing. You can copy the link and share it manually.');
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
        handleCloseShareMenu();
    };

    const replaceSpecialCharacters = (text) => {
        return text.replace(/â€œ/g, '').replace(/â€/g, '').replace(/â€™/g, `'`).replace(/â€"/g, `"`);
    };

    const renderBlocks = (blocks) => {
        return blocks.map((block, index) => {
            switch (block.type) {
                case 'paragraph':
                    return <p key={index}>{parse(replaceSpecialCharacters(block.data.text))}</p>;
                case 'header':
                    const Tag = `h${block.data.level}`;
                    return <Tag key={index}>{replaceSpecialCharacters(block.data.text)}</Tag>;
                case 'list':
                    return (
                        <ul key={index}>
                            {block.data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parse(replaceSpecialCharacters(item))}</li>
                            ))}
                        </ul>
                    );
                case 'ordered-list':
                    return (
                        <ol key={index}>
                            {block.data.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{parse(replaceSpecialCharacters(item))}</li>
                            ))}
                        </ol>
                    );
                case 'image':
                    return <img key={index} src={block.data.file.url} alt={block.data.caption} width={'100%'} />;
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
        <div className="news-page">
            {/* Hero Section */}
            <section className="news-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Latest Updates</span>
                        <h1 className="hero-title">Our Blog</h1>
                        <p className="hero-description">
                            Stay updated with our latest news, insights, and stories of impact from Her Initiative
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid-section">
                <div className="container">
                    <div className="blog-grid">
                        {programData && programData.map((blog, index) => (
                            <div
                                key={index}
                                className={`blog-card ${isVisible ? 'fade-in' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="card-image-container" onClick={() => navigation(blog)}>
                                    <img
                                        src={`https://herinitiative.or.tz/her-api/api/blog/images/${blog.image}`}
                                        alt={blog.title}
                                        className="card-image"
                                    />
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span>Read More</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <div className="blog-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                            </svg>
                                        </div>
                                        <div className="share-button" onClick={(e) => handleShareClick(e, blog)}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                                <polyline points="16,6 12,2 8,6" />
                                                <line x1="12" y1="2" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="blog-title" onClick={() => navigation(blog)}>
                                        {filterSpecialCharacters(blog.title)}
                                    </h3>
                                    <p className="blog-description" onClick={() => navigation(blog)}>
                                        {blog.description}
                                        <button className="read-more-btn">
                                            View More
                                        </button>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Modal */}
            {openModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {selectedProgram && (
                            <div className="modal-body">
                                <div className="modal-header">
                                    <div className="modal-image">
                                        <img
                                            src={`https://herinitiative.or.tz/her-api/api/blog/images/${selectedProgram.image}`}
                                            alt={selectedProgram.title}
                                        />
                                    </div>
                                    <div className="modal-info">
                                        <h2 className="modal-title">{filterSpecialCharacters(selectedProgram.title)}</h2>
                                    </div>
                                </div>
                                <div className="modal-description">
                                    {renderBlocks(JSON.parse(selectedProgram.full_description).blocks)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Share Menu */}
            {shareMenuOpen && (
                <div className="share-menu-overlay" onClick={handleCloseShareMenu}>
                    <div className="share-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="share-menu-header">
                            <h3>Share this article</h3>
                            <button className="share-close" onClick={handleCloseShareMenu}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="share-options">
                            <button className="share-option" onClick={() => shareOnPlatform('twitter')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                                Twitter
                            </button>
                            <button className="share-option" onClick={() => shareOnPlatform('facebook')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                                Facebook
                            </button>
                            <button className="share-option" onClick={() => shareOnPlatform('linkedin')}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .news-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .news-hero {
                    padding: 6rem 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    text-align: center;
                }

                .hero-badge {
                    display: inline-block;
                    background: #633e98;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 1.5rem;
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1.5rem;
                }

                .hero-description {
                    font-size: 1.1rem;
                    color: #6c757d;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* Blog Grid Section */
                .blog-grid-section {
                    padding: 6rem 0;
                    background: white;
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                }

                .blog-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(30px);
                }

                .blog-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .blog-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .card-image-container {
                    position: relative;
                    height: 250px;
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

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .blog-icon {
                    width: 40px;
                    height: 40px;
                    background: #633e98;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .share-button {
                    width: 40px;
                    height: 40px;
                    background: #f8f9fa;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: #633e98;
                }

                .share-button:hover {
                    background: #633e98;
                    color: white;
                    transform: scale(1.1);
                }

                .blog-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    cursor: pointer;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .blog-title:hover {
                    color: #633e98;
                }

                .blog-description {
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 0.95rem;
                    cursor: pointer;
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
                    max-width: 900px;
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
                    width: 150px;
                    height: 150px;
                    border-radius: 20px;
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
                    font-size: 2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .modal-description {
                    color: #6c757d;
                    line-height: 1.7;
                    font-size: 1rem;
                }

                .modal-description p {
                    margin-bottom: 1rem;
                }

                /* Share Menu Styles */
                .share-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1100;
                    padding: 2rem;
                }

                .share-menu {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    max-width: 400px;
                    width: 100%;
                    animation: modalSlideIn 0.3s ease;
                }

                .share-menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .share-menu-header h3 {
                    margin: 0;
                    color: #2c3e50;
                    font-size: 1.3rem;
                }

                .share-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #6c757d;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .share-close:hover {
                    background: #f8f9fa;
                    color: #633e98;
                }

                .share-options {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .share-option {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    background: #f8f9fa;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: #2c3e50;
                    font-weight: 500;
                }

                .share-option:hover {
                    background: #633e98;
                    color: white;
                    transform: translateX(5px);
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .blog-grid {
                        grid-template-columns: 1fr;
                    }

                    .card-image-container {
                        height: 200px;
                    }

                    .modal-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }

                    .modal-image {
                        width: 120px;
                        height: 120px;
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

                    .share-menu {
                        margin: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Blogs;
