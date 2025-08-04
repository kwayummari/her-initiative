import React, { useEffect, useState } from 'react';

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const partnerLogos = [
    ["1.png", "2.png", "3.png", "10.png"],
    ["5.png", "6.png", "7.png", "8.png"],
    ["9.png", "6.png", "5.png", "4.png"],
    ["8.png", "11.png", "12.png", "13.png"],
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partnerLogos.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + partnerLogos.length) % partnerLogos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partnerLogos.length);
  };

  return (
    <section className="partners-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-badge mb-3">
            <span>Collaborations</span>
          </div>
          <h2 className="section-title mb-4">Our Partners</h2>
          <p className="section-subtitle">
            We work with organizations and institutions that share our vision of empowering
            women and creating sustainable change in Tanzania.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="partners-carousel position-relative">
          {!isMobile && (
            <button
              className="carousel-control prev"
              onClick={goToPrevious}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <div className="partners-grid">
            {partnerLogos[currentIndex].map((logo, index) => (
              <div key={index} className="partner-item">
                <div className="partner-logo-container">
                  <img
                    src={`/partners/${logo}`}
                    alt={`Partner ${index + 1}`}
                    className="partner-logo"
                  />
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <button
              className="carousel-control next"
              onClick={goToNext}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Indicators */}
        {isMobile && (
          <div className="carousel-indicators">
            {partnerLogos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        )}

        {/* Partnership CTA */}
        <div className="text-center mt-5">
          <div className="partnership-cta">
            <h3>Interested in Partnering?</h3>
            <p>Join us in our mission to empower women and create lasting change.</p>
            <a href="#/contact" className="btn btn-primary btn-lg partnership-btn">
              Get in Touch
              <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          position: relative;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.5px;
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
          line-height: 1.7;
        }

        .partners-carousel {
          padding: 0 60px;
          margin-bottom: 3rem;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          align-items: center;
        }

        .partner-item {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }

        .partner-logo-container {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(99, 62, 152, 0.1);
        }

        .partner-logo-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          border-color: rgba(99, 62, 152, 0.2);
        }

        .partner-logo {
          width: 180px;
          height: 90px;
          object-fit: contain;
          transition: transform 0.3s ease;
          filter: grayscale(100%);
        }

        .partner-logo-container:hover .partner-logo {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 2px solid rgba(99, 62, 152, 0.2);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #633e98;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .carousel-control:hover {
          background: #633e98;
          color: white;
          border-color: #633e98;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-control.prev {
          left: -25px;
        }

        .carousel-control.next {
          right: -25px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #e9ecef;
          border: none;
          padding: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .indicator.active {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          transform: scale(1.2);
        }

        .partnership-cta {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 20px;
          padding: 3rem;
          border: 1px solid rgba(99, 62, 152, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .partnership-cta h3 {
          color: #2c3e50;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .partnership-cta p {
          color: #6c757d;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .partnership-btn {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 62, 152, 0.3);
        }

        .partnership-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 62, 152, 0.4);
          background: linear-gradient(135deg, #8257b9 0%, #633e98 100%);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .partner-logo {
            width: 140px;
            height: 70px;
          }

          .partners-carousel {
            padding: 0 1rem;
          }
          
          .partnership-cta {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .partners-grid {
            grid-template-columns: 1fr;
          }
          
          .partner-logo {
            width: 160px;
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;