import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="position-relative vh-100 overflow-hidden">
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

      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="position-relative h-100 z-3">
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg={6}>
              <div className="hero-content ps-4 slide-in">
                <h1 className="text-white display-3 fw-bold mb-4">
                  Yes! To Financial <br /> Freedom
                </h1>
                
                <div className="d-flex align-items-center position-relative">
                  <span className="text-white fw-bold me-4 fs-5">
                    MAKE A DIFFERENCE
                  </span>
                  
                  <div className="custom-dropdown">
                    <button 
                      className="donate-btn"
                      onClick={toggleDropdown}
                      aria-expanded={isOpen}
                    >
                      DONATE NOW
                    </button>

                    {isOpen && (
                      <div className="dropdown-menu show position-absolute">
                        <a 
                          className="dropdown-item" 
                          href="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate/card"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Donate via Myriad USA
                        </a>
                        <a 
                          className="dropdown-item" 
                          href="https://myriadaustralia.org/services/donate/her-initiative/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Donate via Myriad Australia
                        </a>
                        <a 
                          className="dropdown-item" 
                          href="https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Donate Myriad EUROPEAN
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .hero-content {
          animation: slideFromRight 2s forwards;
        }

        .donate-btn {
          background-color: #633e98;
          color: white;
          border: none;
          border-radius: 50px;
          padding: 0.75rem 2rem;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .donate-btn:hover {
          background-color: #f3ec1a;
          color: #633e98;
          transform: scale(1.05);
        }

        .custom-dropdown {
          position: relative;
        }

        .dropdown-menu {
          background-color: #633e98;
          border: 1px solid #ffffff;
          border-radius: 5px;
          padding: 1rem;
          margin-top: 0.5rem;
          z-index: 9999;
        }

        .dropdown-item {
          color: white;
          padding: 0.5rem;
          transition: background-color 0.3s ease;
        }

        .dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }

        @keyframes slideFromRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }
          
          .donate-btn {
            padding: 0.5rem 1.5rem;
            font-size: 0.9rem;
          }

          .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
            min-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;