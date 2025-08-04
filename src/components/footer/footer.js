import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const socialUrls = {
    twitter: 'https://twitter.com/herinitiative?lang=en',
    instagram: 'https://www.instagram.com/herinitiative/?hl=en',
    facebook: 'https://www.facebook.com/teengirlstanzania/',
    linkedin: 'https://www.linkedin.com/'
  };

  useEffect(() => {
    const addWidget = () => {
      const existingWidget = document.getElementById('ngos-ed-on-file-widget-script-17336c1f-917d-492b-bc53-225c95e103da');
      if (existingWidget) {
        existingWidget.parentNode.removeChild(existingWidget);
      }

      const widgetImg = document.createElement("img");
      widgetImg.src = '/photos/ngo.png';
      widgetImg.alt = 'NGOsource Equivalency Determination on File';
      widgetImg.style.marginTop = '20px';
      widgetImg.style.width = '100%';

      const widgetLink = document.createElement("a");
      const theUrl = 'http://www.ngosource.org/about-equivalency-determination-on-file-badge';
      widgetLink.href = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      widgetLink.title = 'About Equivalency Determination on File badge';
      widgetLink.appendChild(widgetImg);

      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'ngos-ed-on-file-widget-script-17336c1f-917d-492b-bc53-225c95e103da';
      widgetContainer.appendChild(widgetLink);

      const footerContainer = document.querySelector('.donation');
      if (footerContainer) {
        footerContainer.appendChild(widgetContainer);
      }
    };

    addWidget();
  }, []);

  const openSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await fetch('https://herinitiative.or.tz/her-api/api/newsLetter/add_email.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      {/* Background Pattern */}
      <div className="footer-pattern"></div>

      <div className="footer-content">
        <div className="container">
          <div className="row g-4">
            {/* Logo and Description */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <div className="footer-logo-container mb-4">
                  <img src="/logo192.png" alt="Her Initiative" className="footer-logo" />
                </div>
                <p className="footer-description">
                  Her Initiative, a young women driven non-profit, aims to redefine
                  societal norms in Tanzania, promoting financial resilience
                  among adolescent girls and young women by integrating economic
                  empowerment and technology.
                </p>
                <div className="social-links">
                  <button
                    className="social-btn"
                    onClick={() => openSocialMedia(socialUrls.twitter)}
                    aria-label="Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </button>
                  <button
                    className="social-btn"
                    onClick={() => openSocialMedia(socialUrls.instagram)}
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </button>
                  <button
                    className="social-btn"
                    onClick={() => openSocialMedia(socialUrls.facebook)}
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </button>
                  <button
                    className="social-btn"
                    onClick={() => openSocialMedia(socialUrls.linkedin)}
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-section">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li><button onClick={() => navigate('/about')}>About Us</button></li>
                  <li><button onClick={() => navigate('/news')}>Blog</button></li>
                  <li><button onClick={() => navigate('/what')}>Projects</button></li>
                  <li><button onClick={() => navigate('/reports')}>Reports</button></li>
                  <li><button onClick={() => navigate('/admins')}>Admin</button></li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h5 className="footer-title">Get In Touch</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <strong>Address:</strong><br />
                      Asmara Street, Mikocheni,<br />
                      Dar es Salaam, Tanzania
                    </div>
                  </div>
                  <div className="contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <strong>Phone:</strong><br />
                      +255 (0) 734283347
                    </div>
                  </div>
                  <div className="contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <strong>Email:</strong><br />
                      info@herinitiative.or.tz
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h5 className="footer-title">Newsletter</h5>
                <p className="newsletter-text">Stay updated with our latest news and initiatives.</p>
                <form onSubmit={handleSubscription} className="newsletter-form">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
                {message && <p className="newsletter-message">{message}</p>}
                <div className="donation mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © Copyright 2024 | Her Initiative | Designed & Developed by Serengeti Bytes
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
                    position: relative;
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    color: white;
                    overflow: hidden;
                }

                .footer-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle 200px at 20% 30%, rgba(99, 62, 152, 0.15) 0%, transparent 60%),
                        radial-gradient(circle 150px at 80% 25%, rgba(243, 236, 26, 0.12) 0%, transparent 60%),
                        radial-gradient(circle 250px at 30% 70%, rgba(99, 62, 152, 0.1) 0%, transparent 60%),
                        radial-gradient(circle 120px at 70% 75%, rgba(243, 236, 26, 0.08) 0%, transparent 60%),
                        radial-gradient(circle 300px at 50% 50%, rgba(99, 62, 152, 0.06) 0%, transparent 60%),
                        radial-gradient(ellipse 400px 150px at 15% 60%, rgba(243, 236, 26, 0.07) 0%, transparent 60%),
                        radial-gradient(ellipse 350px 120px at 85% 45%, rgba(99, 62, 152, 0.05) 0%, transparent 60%);
                    background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%;
                    pointer-events: none;
                    animation: cloudFloat 20s ease-in-out infinite;
                    opacity: 0.9;
                }

                @keyframes cloudFloat {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                        opacity: 0.8;
                    }
                    20% {
                        transform: translateY(-8px) scale(1.02);
                        opacity: 0.9;
                    }
                    40% {
                        transform: translateY(-3px) scale(0.98);
                        opacity: 0.7;
                    }
                    60% {
                        transform: translateY(-12px) scale(1.01);
                        opacity: 0.85;
                    }
                    80% {
                        transform: translateY(-5px) scale(0.99);
                        opacity: 0.75;
                    }
                }

                .footer-content {
                    position: relative;
                    z-index: 1;
                    padding: 4rem 0 2rem;
                }

                .footer-section {
                    margin-bottom: 2rem;
                }

                .footer-logo-container {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 1rem;
                    border-radius: 12px;
                    backdrop-filter: blur(10px);
        }

        .footer-logo {
                    width: 150px;
          height: auto;
                    filter: brightness(0) invert(1);
                }

                .footer-description {
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                }

                .social-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .social-btn:hover {
                    background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(99, 62, 152, 0.4);
                }

                .footer-title {
                    color: #f3ec1a;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                }

                .footer-title::after {
                    content: '';
                    position: absolute;
                    bottom: -0.5rem;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(90deg, #f3ec1a 0%, transparent 100%);
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links li {
                    margin-bottom: 0.75rem;
                }

                .footer-links button {
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
                    transition: all 0.3s ease;
                    padding: 0;
                    font-size: 0.95rem;
        }

                .footer-links button:hover {
          color: #f3ec1a;
                    transform: translateX(5px);
        }

        .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          line-height: 1.6;
        }

                .contact-item svg {
                    color: #f3ec1a;
                    flex-shrink: 0;
                    margin-top: 0.25rem;
                }

                .newsletter-text {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                }

                .newsletter-form .input-group {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50px;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .newsletter-form .form-control {
                    background: transparent;
                    border: none;
                    color: white;
                    padding: 0.75rem 1.5rem;
                }

                .newsletter-form .form-control::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                .newsletter-form .form-control:focus {
                    box-shadow: none;
                    background: transparent;
                    color: white;
                }

                .newsletter-form .btn {
                    background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
                    border: none;
                    border-radius: 50px;
                    padding: 0.75rem 1rem;
                    color: white;
                    transition: all 0.3s ease;
                }

                .newsletter-form .btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(99, 62, 152, 0.4);
                }

                .newsletter-message {
          color: #f3ec1a;
                    font-size: 0.9rem;
                    margin-top: 1rem;
                }

                .footer-bottom {
                    background: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    z-index: 1;
                }

                .footer-bottom-content {
                    padding: 1.5rem 0;
                    text-align: center;
                }

                .copyright {
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0;
                    font-size: 0.9rem;
        }

        @media (max-width: 768px) {
                    .footer-content {
                        padding: 3rem 0 1.5rem;
                    }

                    .footer-section {
            text-align: center;
          }

                    .social-links {
            justify-content: center;
                    }

                    .footer-title::after {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .contact-item {
                        justify-content: center;
                    }

                    .newsletter-form .input-group {
                        max-width: 300px;
                        margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;