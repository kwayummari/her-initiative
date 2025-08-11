import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the PDF.js worker source properly
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ReportsData({ programData }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(6);
    const [pdfErrors, setPdfErrors] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
        setIsLoading(false);
    }, []);

    // Test PDF URL accessibility
    useEffect(() => {
        if (programData && programData.length > 0) {
            console.log('Testing PDF URLs...');
            programData.slice(0, 3).forEach((report, index) => {
                const pdfUrl = `https://herinitiative.or.tz/her-api/api/reports/pdf/${report.pdf}`;
                console.log(`Testing PDF ${index}:`, pdfUrl);
                
                // Test if URL is accessible
                fetch(pdfUrl, { method: 'HEAD' })
                    .then(response => {
                        console.log(`PDF ${index} status:`, response.status, response.ok);
                    })
                    .catch(error => {
                        console.error(`PDF ${index} fetch error:`, error);
                    });
            });
        }
    }, [programData]);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 6);
    };

    const navigation = (programs) => {
        window.open(`https://herinitiative.or.tz/her-api/api/reports/pdf/${programs.pdf}`, '_blank');
    };

    const handlePdfError = (index, error) => {
        console.error(`PDF ${index} failed to load:`, error);
        console.error(`PDF URL was: https://herinitiative.or.tz/her-api/api/reports/pdf/${programData[index]?.pdf}`);
        setPdfErrors(prev => ({ ...prev, [index]: true }));
    };

    const handlePdfSuccess = (index) => {
        console.log(`PDF ${index} loaded successfully`);
        console.log(`PDF URL was: https://herinitiative.or.tz/her-api/api/reports/pdf/${programData[index]?.pdf}`);
        setPdfErrors(prev => ({ ...prev, [index]: false }));
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
                                                    <Document
                                                        file={`https://herinitiative.or.tz/her-api/api/reports/pdf/${report.pdf}`}
                                                        className="pdf-document"
                                                        onLoadSuccess={() => handlePdfSuccess(index)}
                                                        onLoadError={(error) => handlePdfError(index, error)}
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
                                                                <small>Click to view full report</small>
                                                                <button 
                                                                    className="retry-btn"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        window.location.reload();
                                                                    }}
                                                                >
                                                                    Retry
                                                                </button>
                                                            </div>
                                                        }
                                                    >
                                                        <Page
                                                            pageNumber={1}
                                                            width={300}
                                                            height={400}
                                                            scale={1}
                                                            renderTextLayer={false}
                                                            renderAnnotationLayer={false}
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
                                                        <button className="action-btn" onClick={() => {
                                                            window.open(`https://herinitiative.or.tz/her-api/api/reports/pdf/${report.pdf}`, '_blank');
                                                        }}>
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

                .pdf-error {
                    text-align: center;
                }

                .pdf-error small {
                    display: block;
                    margin-top: 0.5rem;
                    font-size: 0.8rem;
                    opacity: 0.8;
                }

                .retry-btn {
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .retry-btn:hover {
                    background: #8257b9;
                    transform: translateY(-2px);
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
