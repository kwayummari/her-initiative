import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hero-section position-relative vh-100 overflow-hidden">
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <video
          className="w-100 h-100 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/photos/malaika.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

      {/* Content */}
      <div className="position-relative h-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} md={10}>
              <div className="hero-content">
                <div className="hero-badge mb-4">
                  <span>Empowering Women Through Technology</span>
                </div>

                <h1 className="hero-title mb-4">
                  Yes! To Financial <br />
                  <span className="highlight">Freedom</span>
                </h1>

                <p className="hero-subtitle mb-5">
                  We empower adolescent girls and young women in Tanzania through
                  economic empowerment and technology integration, breaking barriers
                  and creating sustainable pathways to financial independence.
                </p>

                <div className="hero-actions d-flex flex-wrap gap-3 align-items-center">
                  <div className="donate-section position-relative">
                    <button
                      className="btn btn-primary btn-lg donate-btn"
                      onClick={toggleDropdown}
                      aria-expanded={isOpen}
                    >
                      <span>Support Our Mission</span>
                      <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="donate-dropdown">
                        <div className="dropdown-header">
                          <h6>Choose Your Donation Platform</h6>
                        </div>
                        <a
                          className="dropdown-item"
                          href="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate/card"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="item-content">
                            <span className="item-title">Myriad USA</span>
                            <span className="item-subtitle">Tax-deductible donations for US residents</span>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://myriadaustralia.org/services/donate/her-initiative/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="item-content">
                            <span className="item-title">Myriad Australia</span>
                            <span className="item-subtitle">Tax-deductible donations for Australian residents</span>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="item-content">
                            <span className="item-title">Myriad Europe</span>
                            <span className="item-subtitle">Tax-deductible donations for European residents</span>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>

                  <a href="#about" className="btn btn-outline-light btn-lg learn-more-btn">
                    Learn More
                    <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .hero-overlay {
          background: linear-gradient(
            135deg, 
            rgba(99, 62, 152, 0.8) 0%, 
            rgba(130, 87, 185, 0.6) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }

        .hero-content {
          animation: fadeInUp 1.2s ease-out;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
        }

        .hero-badge span {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: white;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-title .highlight {
          background: linear-gradient(135deg, #f3ec1a 0%, #f7d794 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          max-width: 600px;
        }

        .donate-btn {
          background: linear-gradient(135deg, #f3ec1a 0%, #f7d794 100%);
          border: none;
          color: #633e98;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(243, 236, 26, 0.3);
        }

        .donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(243, 236, 26, 0.4);
          background: linear-gradient(135deg, #f7d794 0%, #f3ec1a 100%);
          color: #633e98;
        }

        .learn-more-btn {
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-weight: 500;
          padding: 1rem 2rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .learn-more-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
          transform: translateY(-2px);
        }

        .donate-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          margin-top: 0.5rem;
          overflow: hidden;
          z-index: 1000;
          min-width: 320px;
        }

        .dropdown-header {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          color: white;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown-header h6 {
          margin: 0;
          font-weight: 600;
        }

        .dropdown-item {
          display: block;
          padding: 1rem 1.5rem;
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f0f0f0;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #633e98;
          text-decoration: none;
        }

        .item-content {
          display: flex;
          flex-direction: column;
        }

        .item-title {
          font-weight: 600;
          color: #333;
          margin-bottom: 0.25rem;
        }

        .item-subtitle {
          font-size: 0.875rem;
          color: #666;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          
          .donate-dropdown {
            left: 50%;
            transform: translateX(-50%);
            min-width: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;