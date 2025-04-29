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
          <h6 className="text-uppercase text-secondary mb-2">Partnerships</h6>
          <h2 className="display-5 text-primary">Our Partners</h2>
        </div>

        {/* Partners Carousel */}
        <div className="partners-carousel position-relative">
          {!isMobile && (
            <button 
              className="carousel-control prev" 
              onClick={goToPrevious}
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          )}

          <div className="partners-grid">
            {partnerLogos[currentIndex].map((logo, index) => (
              <div key={index} className="partner-item">
                <img
                  src={`/partners/${logo}`}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>

          {!isMobile && (
            <button 
              className="carousel-control next" 
              onClick={goToNext}
              aria-label="Next"
            >
              <i className="bi bi-chevron-right"></i>
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
      </div>

      <style>{`
        .partners-section {
          background-color: #fff;
        }

        .text-primary {
          color: #633e98 !important;
        }

        .partners-carousel {
          padding: 0 50px;
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

        .partner-logo {
          width: 200px;
          height: 100px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .partner-logo:hover {
          transform: scale(1.5);
        }

        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 2.5rem;
          color: #633e98;
          cursor: pointer;
          padding: 1rem;
          transition: opacity 0.3s ease;
        }

        .carousel-control:hover {
          opacity: 0.7;
        }

        .carousel-control.prev {
          left: -20px;
        }

        .carousel-control.next {
          right: -20px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ddd;
          border: none;
          padding: 0;
          transition: background-color 0.3s ease;
        }

        .indicator.active {
          background-color: #633e98;
        }

        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .partner-logo {
            width: 150px;
            height: 75px;
          }

          .partners-carousel {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .partners-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;