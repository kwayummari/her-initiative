import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

function ReportsData({ programData }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(6);
    const [loadingStates, setLoadingStates] = useState({});

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    // Enable PDF.js logging for debugging
    if (process.env.NODE_ENV === 'development') {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
        setIsLoading(false);
    }, []);

    // Auto-start loading for visible PDFs
    useEffect(() => {
        if (programData && programData.length > 0) {
            programData.slice(0, displayCount).forEach((_, index) => {
                if (!loadingStates[index] && !loadingStates[index]?.loading) {
                    handlePdfLoadStart(index);
                }
            });
        }
    }, [programData, displayCount, loadingStates]);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 6);
    };

    const navigation = (programs) => {
        window.open(`https://herinitiative.or.tz/her-api/api/reports/pdf/${programs.pdf}`, '_blank');
    };

    const handlePdfLoadStart = (index) => {
        // Prevent multiple starts for the same index
        if (loadingStates[index]?.loading) return;

        console.log(`PDF ${index} loading started`);
        setLoadingStates(prev => ({ ...prev, [index]: { loading: true, progress: 0 } }));

        // Simulate progress for better UX
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10 + 5; // 5-15% increments
            if (progress >= 85) {
                clearInterval(interval);
                progress = 85;
            }
            setLoadingStates(prev => ({
                ...prev,
                [index]: { ...prev[index], progress: Math.min(progress, 85) }
            }));
        }, 300);

        // Store interval reference for cleanup
        return () => clearInterval(interval);
    };

    const handlePdfLoadProgress = (index, progress) => {
        console.log(`PDF ${index} progress:`, progress);
        setLoadingStates(prev => ({
            ...prev,
            [index]: { ...prev[index], progress: Math.min(progress, 90) }
        }));
    };

    const handlePdfLoadSuccess = (index) => {
        console.log(`PDF ${index} loaded successfully`);
        setLoadingStates(prev => ({
            ...prev,
            [index]: { ...prev[index], progress: 90, loaded: true }
        }));

        // Auto-complete after a short delay if page render doesn't fire
        setTimeout(() => {
            setLoadingStates(prev => {
                if (prev[index]?.loaded && prev[index]?.progress === 90) {
                    return {
                        ...prev,
                        [index]: { loading: false, progress: 100 }
                    };
                }
                return prev;
            });
        }, 2000);
    };

    const handlePageLoadSuccess = (index) => {
        console.log(`PDF ${index} page rendered successfully`);
        setLoadingStates(prev => ({
            ...prev,
            [index]: { loading: false, progress: 100 }
        }));

        // Hide progress after a short delay
        setTimeout(() => {
            setLoadingStates(prev => ({
                ...prev,
                [index]: { loading: false, progress: 0 }
            }));
        }, 1000);
    };

    const handlePdfLoadError = (index) => {
        console.log(`PDF ${index} failed to load`);
        setLoadingStates(prev => ({
            ...prev,
            [index]: { loading: false, progress: 0, error: true }
        }));
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProgram(null);
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

    const truncateTitle = (title, maxLength = 60) => {
        if (!title) return '';
        if (title.length <= maxLength) return title;
        return title.substring(0, maxLength) + '...';
    };

    const truncateDescription = (description, maxLength = 120) => {
        if (!description) return '';
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    return (
        <div className="reports-page">
            {/* Hero Section */}
            <section className="reports-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Research & Insights</span>
                        <h1 className="hero-title">Reports & Publications</h1>
                        <p className="hero-description">
                            Access our latest research reports, publications, and insights from Her Initiative
                        </p>
                    </div>
                </div>
            </section>

            {/* Reports Grid Section */}
            <section className="reports-section">
                <div className="container">
                    {isLoading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Loading reports...</p>
                        </div>
                    ) : (
                        <>
                            <div className="reports-grid">
                                {programData &&
                                    programData.slice(0, displayCount).map((report, index) => (
                                        <div
                                            key={index}
                                            className={`report-card ${isVisible ? 'fade-in' : ''}`}
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <div className="pdf-preview" onClick={() => navigation(report)}>
                                                <div className="pdf-container">
                                                    {/* Progress Bar */}
                                                    {(loadingStates[index]?.loading || !loadingStates[index] || !loadingStates[index]?.loaded) && (
                                                        <div className="pdf-progress">
                                                            <div className="progress-bar">
                                                                <div
                                                                    className="progress-fill"
                                                                    style={{ width: `${loadingStates[index]?.progress || 0}%` }}
                                                                ></div>
                                                            </div>
                                                            <span className="progress-text">
                                                                {loadingStates[index]?.loaded ? 'Rendering page...' : 'Loading PDF...'} {Math.round(loadingStates[index]?.progress || 0)}%
                                                            </span>
                                                        </div>
                                                    )}

                                                    <Document
                                                        file={`https://herinitiative.or.tz/her-api/api/reports/pdf/${report.pdf}`}
                                                        className="pdf-document"
                                                        onLoadStart={() => handlePdfLoadStart(index)}
                                                        onLoadProgress={(progress) => handlePdfLoadProgress(index, progress)}
                                                        onLoadSuccess={() => handlePdfLoadSuccess(index)}
                                                        onLoadError={() => handlePdfLoadError(index)}
                                                        loading={
                                                            <div className="pdf-loading">
                                                                <div className="loading-spinner"></div>
                                                                <span>Loading PDF...</span>
                                                            </div>
                                                        }
                                                        error={
                                                            <div className="pdf-error">
                                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                                    <polyline points="14,2 14,8 20,8"></polyline>
                                                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                                                    <polyline points="10,9 9,9 8,9"></polyline>
                                                                </svg>
                                                                <span>PDF Preview</span>
                                                            </div>
                                                        }
                                                    >
                                                        <Page
                                                            pageNumber={1}
                                                            width={300}
                                                            height={400}
                                                            scale={1}
                                                            onRenderSuccess={() => handlePageLoadSuccess(index)}
                                                            onRenderError={() => handlePdfLoadError(index)}
                                                        />
                                                    </Document>
                                                </div>
                                                <div className="pdf-overlay">
                                                    <div className="overlay-content">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                            <polyline points="14,2 14,8 20,8"></polyline>
                                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                                            <polyline points="10,9 9,9 8,9"></polyline>
                                                        </svg>
                                                        <span>View Report</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="report-info">
                                                <div className="report-header">
                                                    <div className="report-icon">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                            <polyline points="14,2 14,8 20,8"></polyline>
                                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                                            <polyline points="10,9 9,9 8,9"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div className="report-actions">
                                                        <button className="action-btn" onClick={() => navigation(report)}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                <polyline points="15,3 21,3 21,9"></polyline>
                                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                                            </svg>
                                                            Open
                                                        </button>
                                                        <button className="action-btn" onClick={() => window.open(`https://herinitiative.or.tz/her-api/api/reports/pdf/${report.pdf}`, '_blank')}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                                <polyline points="14,2 14,8 20,8"></polyline>
                                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                                <polyline points="10,9 9,9 8,9"></polyline>
                                                            </svg>
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                                <h3 className="report-title" onClick={() => navigation(report)}>
                                                    {truncateTitle(report.title)}
                                                </h3>
                                                <p className="report-description">
                                                    {truncateDescription(report.description)}
                                                </p>
                                                <div className="report-meta">
                                                    {report.date && (
                                                        <span className="publish-date">
                                                            {formatDate(report.date)}
                                                        </span>
                                                    )}
                                                    <button className="view-more-btn" onClick={() => navigation(report)}>
                                                        View Full Report
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

                            {/* Load More Button */}
                            {programData && displayCount < programData.length && (
                                <div className="load-more-container">
                                    <button className="load-more-btn" onClick={handleLoadMore}>
                                        <span>Load More Reports</span>
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

            <style jsx>{`
                .reports-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .reports-hero {
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

                /* Reports Section */
                .reports-section {
                    padding: 6rem 0;
                    background: white;
                }

                .reports-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .report-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(30px);
                }

                .report-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .report-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .pdf-preview {
                    position: relative;
                    height: 300px;
                    cursor: pointer;
                    overflow: hidden;
                    background: #f8f9fa;
                }

                .pdf-container {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    background: white;
                    overflow: hidden;
                }

                .pdf-document {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .pdf-document canvas {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .pdf-loading {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: #633e98;
                    gap: 1rem;
                }

                .pdf-loading .loading-spinner {
                    width: 30px;
                    height: 30px;
                    border: 3px solid #f3f3f3;
                    border-top: 3px solid #633e98;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                /* Progress Bar Styles */
                .pdf-progress {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.98);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    padding: 2rem;
                    backdrop-filter: blur(2px);
                }

                .progress-bar {
                    width: 100%;
                    max-width: 200px;
                    height: 4px;
                    background: #e9ecef;
                    border-radius: 2px;
                    overflow: hidden;
                    margin-bottom: 1rem;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #633e98, #f3ec1a);
                    border-radius: 2px;
                    transition: width 0.3s ease;
                    position: relative;
                }

                .progress-fill::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    animation: shimmer 1.5s infinite;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                .progress-text {
                    color: #633e98;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .pdf-loading, .pdf-error {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: #633e98;
                    gap: 1rem;
                }

                .pdf-loading svg, .pdf-error svg {
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .pdf-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(99, 62, 152, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .pdf-preview:hover .pdf-overlay {
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

                .report-info {
                    padding: 1.5rem;
                }

                .report-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .report-icon {
                    width: 40px;
                    height: 40px;
                    background: #633e98;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .report-actions {
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

                .report-title {
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

                .report-title:hover {
                    color: #633e98;
                }

                .report-description {
                    color: #6c757d;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .report-meta {
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

                .view-more-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                }

                .view-more-btn:hover {
                    background: #f3ec1a;
                    color: #633e98;
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

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .reports-grid {
                        grid-template-columns: 1fr;
                    }

                    .pdf-preview {
                        height: 250px;
                    }

                    .report-meta {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .view-more-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default ReportsData;
