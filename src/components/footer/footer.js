import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
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
            footerContainer.appendChild(widgetContainer);
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
        <footer className="footer bg-dark text-white pt-5">
            <div className="container">
                <div className="row">
                    {/* Logo and Description */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <img src="/logo192.png" alt="logo" className="footer-logo mb-3" />
                        <p className="text-white-50">
                            Her Initiative, a young women driven non-profit, aims to redefine
                            societal norms in Tanzania, promoting financial resilience
                            among adolescent girls and young women by integrating economic
                            empowerment and technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Quick Links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><span onClick={() => navigate('/about')}>About Us</span></li>
                            <li><span onClick={() => navigate('/news')}>Blog</span></li>
                            <li><span onClick={() => navigate('/what')}>Projects</span></li>
                            <li><span onClick={() => navigate('/reports')}>Reports and Publications</span></li>
                            <li><span onClick={() => navigate('/admins')}>Admin</span></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Get In Touch</h5>
                        <p className="contact-info">
                            <strong>Physical Address:</strong><br />
                            Asmara Street, Mikocheni,<br />
                            Dar es Salaam, Tanzania<br />
                            <strong>Postal Address:</strong> P.O.Box 66<br />
                            <strong>Tel:</strong> +255 (0) 734283347<br />
                            <strong>Email:</strong> info@herinitiative.or.tz<br />
                            <strong>Web:</strong> www.herinitiative.co.tz
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Newsletter</h5>
                        <form onSubmit={handleSubscription}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button className="btn btn-primary" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        {message && <p className="text-warning">{message}</p>}
                        <div className="donation mt-4"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bottom-footer mt-5">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0">© Copyright 2024 | Her Initiative | Designed & Developed by Serengeti Bytes</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="social-icons">
                                <img
                                    src="/icons/twitter.png"
                                    alt="Twitter"
                                    onClick={() => window.open(socialUrls.twitter, '_blank')}
                                />
                                <Instagram style={{color: '#f3ec1a'}} className="mx-2" onClick={() => openSocialMedia(socialUrls.instagram)} />
                                <Facebook style={{color: '#f3ec1a'}} className="mx-2" onClick={() => openSocialMedia(socialUrls.facebook)} />
                                <LinkedIn style={{color: '#f3ec1a'}} className="mx-2" onClick={() => openSocialMedia(socialUrls.linkedin)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: #212121;
        }

        .footer-logo {
          width: 200px;
          height: auto;
        }

        .quick-links li {
          margin-bottom: 0.5rem;
        }

        .quick-links li span {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .quick-links li span:hover {
          color: #f3ec1a;
        }

        .contact-info {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .bottom-footer {
          background-color: #633e98;
        }

        .social-icons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }

        .social-icons img,
        .social-icons i {
          width: 24px;
          height: 24px;
          color: #f3ec1a;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .social-icons img:hover,
        .social-icons i:hover {
          transform: scale(1.2);
        }

        .btn-primary {
          background-color: #633e98;
          border-color: #633e98;
        }

        .btn-primary:hover {
          background-color: #f3ec1a;
          border-color: #f3ec1a;
          color: #633e98;
        }

        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }

          .social-icons {
            justify-content: center;
            margin-top: 1rem;
          }

          .quick-links {
            margin-bottom: 2rem;
          }

          .contact-info {
            margin-bottom: 2rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;