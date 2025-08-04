import React, { useState, useEffect } from 'react';

const YouTubeChannelPreviews = ({ channelIds }) => {
  const [videosData, setVideosData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    fetchVideos();
  }, [channelIds]);

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const requests = channelIds.map((channelId) =>
        fetch(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhauCQSNazmw9IxohDEhTxDvxZFEXns7c&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
        )
      );
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map((res) => res.json()));
      setVideosData(data.map((item) => item.items));
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 8);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateTitle = (title, maxLength = 60) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="youtube-page">
      {/* Hero Section */}
      <section className="youtube-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Video Content</span>
            <h1 className="hero-title">YouTube Channel</h1>
            <p className="hero-description">
              Watch our latest videos, tutorials, and insights from Her Initiative
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="videos-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading videos...</p>
            </div>
          ) : (
            <>
              <div className="videos-grid">
                {videosData &&
                  videosData.map((videos, channelIndex) => (
                    videos &&
                    videos.slice(0, displayCount).map((video, index) => (
                      <div
                        key={video.id.videoId}
                        className={`video-card ${isVisible ? 'fade-in' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="video-thumbnail" onClick={() => handleVideoClick(video)}>
                          <img
                            src={getThumbnailUrl(video.id.videoId)}
                            alt={video.snippet.title}
                            className="thumbnail-image"
                          />
                          <div className="play-overlay">
                            <div className="play-button">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="5,3 19,12 5,21"></polygon>
                              </svg>
                            </div>
                          </div>
                          <div className="video-duration">
                            <span>Watch Now</span>
                          </div>
                        </div>
                        <div className="video-info">
                          <h3 className="video-title" onClick={() => handleVideoClick(video)}>
                            {truncateTitle(video.snippet.title)}
                          </h3>
                          <p className="video-description">
                            {truncateTitle(video.snippet.description, 100)}
                          </p>
                          <div className="video-meta">
                            <span className="publish-date">
                              {formatDate(video.snippet.publishedAt)}
                            </span>
                            <div className="video-actions">
                              <button className="action-btn" onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15,3 21,3 21,9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Open
                              </button>
                              <button className="action-btn" onClick={() => handleVideoClick(video)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ))}
              </div>

              {/* Load More Button */}
              {videosData && videosData[0] && displayCount < videosData[0].length && (
                <div className="load-more-container">
                  <button className="load-more-btn" onClick={handleLoadMore}>
                    <span>Load More Videos</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {showModal && selectedVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-content">
              <div className="modal-video">
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.snippet.title}
                ></iframe>
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{selectedVideo.snippet.title}</h2>
                <p className="modal-description">{selectedVideo.snippet.description}</p>
                <div className="modal-meta">
                  <span className="modal-date">Published: {formatDate(selectedVideo.snippet.publishedAt)}</span>
                  <button
                    className="youtube-link-btn"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`, '_blank')}
                  >
                    Watch on YouTube
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
                .youtube-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .youtube-hero {
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

                /* Videos Section */
                .videos-section {
                    padding: 6rem 0;
                    background: white;
                }

                .videos-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .video-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(30px);
                }

                .video-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .video-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .video-thumbnail {
                    position: relative;
                    height: 200px;
                    cursor: pointer;
                    overflow: hidden;
                }

                .thumbnail-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .video-thumbnail:hover .thumbnail-image {
                    transform: scale(1.05);
                }

                .play-overlay {
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

                .video-thumbnail:hover .play-overlay {
                    opacity: 1;
                }

                .play-button {
                    width: 60px;
                    height: 60px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #633e98;
                    transition: all 0.3s ease;
                }

                .play-button:hover {
                    transform: scale(1.1);
                    background: #f3ec1a;
                }

                .video-duration {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .video-info {
                    padding: 1.5rem;
                }

                .video-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.8rem;
                    cursor: pointer;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .video-title:hover {
                    color: #633e98;
                }

                .video-description {
                    color: #6c757d;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .video-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .publish-date {
                    color: #633e98;
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .video-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    padding: 0.5rem 1rem;
                    background: #f8f9fa;
                    border: none;
                    border-radius: 20px;
                    color: #633e98;
                    font-size: 0.8rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn:hover {
                    background: #633e98;
                    color: white;
                    transform: translateY(-2px);
                }

                /* Load More Button */
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
                    border-radius: 30px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(99, 62, 152, 0.3);
                }

                .load-more-btn:hover {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(99, 62, 152, 0.4);
                }

                .load-more-btn svg {
                    transition: transform 0.3s ease;
                }

                .load-more-btn:hover svg {
                    transform: translateY(2px);
                }

                /* Loading Spinner */
                .loading-container {
                    text-align: center;
                    padding: 4rem 0;
                }

                .loading-spinner {
                    width: 50px;
                    height: 50px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #633e98;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Video Modal */
                .video-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 2rem;
                    backdrop-filter: blur(5px);
                }

                .video-modal {
                    background: white;
                    border-radius: 20px;
                    max-width: 900px;
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

                .modal-content {
                    padding: 2rem;
                }

                .modal-video {
                    margin-bottom: 2rem;
                    border-radius: 15px;
                    overflow: hidden;
                }

                .modal-info {
                    text-align: center;
                }

                .modal-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                }

                .modal-description {
                    color: #6c757d;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    font-size: 1rem;
                }

                .modal-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .modal-date {
                    color: #633e98;
                    font-weight: 500;
                }

                .youtube-link-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    background: #ff0000;
                    color: white;
                    border: none;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .youtube-link-btn:hover {
                    background: #cc0000;
                    transform: translateY(-2px);
                }

                @media (max-width: 1200px) {
                    .videos-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 900px) {
                    .videos-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .videos-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .video-thumbnail {
                        height: 180px;
                    }

                    .modal-content {
                        padding: 1.5rem;
                    }

                    .modal-title {
                        font-size: 1.5rem;
                    }

                    .modal-meta {
                        flex-direction: column;
                        align-items: center;
                    }

                    .video-modal {
                        margin: 1rem;
                        max-height: 95vh;
                    }
                }
            `}</style>
    </div>
  );
};

export default YouTubeChannelPreviews;
