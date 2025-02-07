import React, { useState } from 'react';

const Carousel = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-wrapper">
        <video 
          className="background-video" 
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/photos/malaika.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="content-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Yes! To Financial <br /> Freedom
                </h1>
                
                <div className="cta-section" 
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                  <span className="cta-text">MAKE A DIFFERENCE</span>
                  <button className="donate-btn">
                    DONATE NOW
                  </button>

                  {dropdownOpen && (
                    <div className="donate-dropdown">
                      <a href="https://www.every.org/her-initiative?utm_campaign=donate-link#/donate/card" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        Donate via Myriad USA
                      </a>
                      <a href="https://myriadaustralia.org/services/donate/her-initiative/" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        Donate via Myriad Australia
                      </a>
                      <a href="https://donate.transnationalgiving.eu/landing/Herinitiative?lang=en_EN" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        Donate Myriad EUROPEAN
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero-content {
          padding-left: 2rem;
          animation: slideFromRight 2s forwards;
        }

        .hero-title {
          color: white;
          font-size: 4.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .cta-section {
          display: flex;
          align-items: center;
          position: relative;
        }

        .cta-text {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin-right: 1.5rem;
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

        .donate-dropdown {
          position: absolute;
          top: 100%;
          left: 180px;
          background-color: #633e98;
          border-radius: 5px;
          padding: 1rem;
          margin-top: 0.5rem;
          z-index: 2;
        }

        .donate-dropdown a {
          display: block;
          color: white;
          text-decoration: none;
          padding: 0.5rem;
          transition: background-color 0.3s ease;
        }

        .donate-dropdown a:hover {
          background-color: rgba(255, 255, 255, 0.1);
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
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .cta-text {
            font-size: 1rem;
          }

          .donate-btn {
            padding: 0.5rem 1.5rem;
            font-size: 0.9rem;
          }

          .donate-dropdown {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;