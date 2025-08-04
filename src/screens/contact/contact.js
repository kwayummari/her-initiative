import React, { useState, useEffect } from "react";

function Contacts() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: "Phone",
            details: ["+255 123 456 789", "+255 987 654 321"],
            color: "#633e98"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: "Email",
            details: ["info@herinitiative.or.tz", "contact@herinitiative.or.tz"],
            color: "#f3ec1a"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "Address",
            details: ["Dar es Salaam, Tanzania", "P.O. Box 12345"],
            color: "#633e98"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16 10,8" />
                </svg>
            ),
            title: "Social Media",
            details: ["@herinitiative", "Facebook, Twitter, Instagram"],
            color: "#f3ec1a"
        }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            {/* <section className="contact-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Get In Touch</span>
                        <h1 className="hero-title">Contact Us</h1>
                        <p className="hero-description">
                            We'd love to hear from you. Your feedback, suggestions, and ideas help us continue our mission to empower girls and women across Africa.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Contact Information Section */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">Reach out to us through any of these channels</p>
                    </div>

                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`contact-info-card ${isVisible ? 'fade-in' : ''}`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    '--accent-color': info.color
                                }}
                            >
                                <div className="info-icon" style={{ backgroundColor: info.color }}>
                                    {info.icon}
                                </div>
                                <div className="info-content">
                                    <h3 className="info-title">{info.title}</h3>
                                    {info.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="info-detail">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <div className="form-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className="form-info">
                                <h2 className="form-title">Send Us a Message</h2>
                                <p className="form-subtitle">We'll get back to you as soon as possible</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="What is this about?"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13" />
                                            <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="map-header">
                        <h2 className="map-title">Find Us</h2>
                        <p className="map-subtitle">Visit our office in Dar es Salaam, Tanzania</p>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406011.95791463555!2d39.18264657345294!3d-6.792354933892746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18405c336d3cf8d7%3A:2a00d8d9b6d1a320!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sin!4v1648147263086!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            loading="lazy"
                            title="Dar es Salaam Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-page {
                    overflow-x: hidden;
                }

                /* Hero Section */
                .contact-hero {
                    padding: 6rem 0;
                    background: linear-gradient(135deg, #633e98 0%, #f3ec1a 100%);
                    text-align: center;
                    color: white;
                    position: relative;
                }

                .contact-hero::before {
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

                /* Contact Info Section */
                .contact-info-section {
                    padding: 6rem 0;
                    background: white;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
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

                .contact-info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .contact-info-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                    transform: translateY(30px);
                    border: 2px solid transparent;
                }

                .contact-info-card.fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .contact-info-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent-color);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .info-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin-bottom: 1.5rem;
                }

                .info-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                }

                .info-detail {
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 0.5rem;
                }

                /* Contact Form Section */
                .contact-form-section {
                    padding: 6rem 0;
                    background: #f8f9fa;
                }

                .form-container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }

                .form-header {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                    margin-bottom: 2rem;
                }

                .form-icon {
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

                .form-info {
                    flex: 1;
                }

                .form-title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .form-subtitle {
                    color: #6c757d;
                    font-size: 1.1rem;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                }

                .form-group label {
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group textarea {
                    padding: 1rem;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: white;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #633e98;
                    box-shadow: 0 0 0 3px rgba(99, 62, 152, 0.1);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 120px;
                }

                .submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem 2rem;
                    background: #633e98;
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                }

                .submit-btn:hover:not(:disabled) {
                    background: #f3ec1a;
                    color: #633e98;
                    transform: translateY(-2px);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .submit-btn.loading {
                    background: #6c757d;
                }

                .spinner {
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .success-message {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: #d4edda;
                    color: #155724;
                    border-radius: 12px;
                    margin-top: 1rem;
                    animation: slideIn 0.3s ease;
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Map Section */
                .map-section {
                    padding: 6rem 0;
                    background: white;
                }

                .map-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .map-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                }

                .map-subtitle {
                    font-size: 1.1rem;
                    color: #6c757d;
                }

                .map-container {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .form-container {
                        margin: 1rem;
                        padding: 2rem;
                    }

                    .form-header {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }

                    .form-icon {
                        align-self: center;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .contact-info-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Contacts;
