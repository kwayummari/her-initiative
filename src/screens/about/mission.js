import React from 'react';

const Missions = ({ home }) => {
  return (
    <section className="mission-vision-section py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="section-badge mb-3">
            <span>Our Foundation</span>
          </div>
          <h2 className="section-title mb-4">Mission & Vision</h2>
          <p className="section-subtitle">
            The driving force behind everything we do at Her Initiative
          </p>
        </div>

        <div className="row g-4">
          {/* Mission Card */}
          <div className="col-12 col-lg-6">
            <div className="mission-card">
              <div className="card-header">
                <div className="header-content">
                  <div className="mission-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="card-title text-white">Our Mission</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  We are committed to economic rights and justice, and digital inclusion,
                  supporting young women and girls to achieve economic resilience,
                  financial autonomy, enabling them to overcome barriers and live with dignity.
                </p>
                <div className="mission-highlight">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                  </svg>
                  <span>Empowering through economic rights and digital inclusion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-12 col-lg-6">
            <div className="vision-card">
              <div className="card-header">
                <div className="header-content">
                  <div className="vision-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="card-title text-white">Our Vision</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  We envision an inclusive society where adolescent girls
                  and young women have the power to choose and create opportunities
                  for themselves as they achieve economic resilience, overcome barriers,
                  and live with dignity.
                </p>
                <div className="vision-highlight">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                  </svg>
                  <span>Creating an inclusive society with empowered women</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Only shown when home prop is false */}
        {!home && (
          <div className="row mt-5">
            <div className="col-12">
              <div className="mission-image-container">
                <img
                  src="/photos/_YTE4838.jpg"
                  alt="Her Initiative Impact"
                  className="mission-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Building a Better Future</h3>
                    <p>Together, we're creating lasting change in Tanzania</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .mission-vision-section {
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

        .mission-card, .vision-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(99, 62, 152, 0.1);
          height: 100%;
        }

        .mission-card:hover, .vision-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(99, 62, 152, 0.2);
        }

        .card-header {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          color: white;
          padding: 2rem;
          position: relative;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mission-icon, .vision-icon {
          color: #f3ec1a;
          transition: transform 0.3s ease;
        }

        .mission-card:hover .mission-icon,
        .vision-card:hover .vision-icon {
          transform: scale(1.1);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          color: white;
        }

        .card-body {
          padding: 2rem;
          background: white;
        }

        .card-text {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .mission-highlight, .vision-highlight {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 12px;
          border-left: 4px solid #633e98;
        }

        .mission-highlight svg, .vision-highlight svg {
          color: #633e98;
          flex-shrink: 0;
        }

        .mission-highlight span, .vision-highlight span {
          font-size: 0.95rem;
          font-weight: 500;
          color: #2c3e50;
        }

        .mission-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .mission-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .mission-image-container:hover .mission-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent 0%, rgba(99, 62, 152, 0.9) 100%);
          color: white;
          padding: 3rem 2rem 2rem;
        }

        .overlay-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .overlay-content p {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .card-header {
            padding: 1.5rem;
          }
          
          .header-content {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .card-title {
            font-size: 1.25rem;
          }
          
          .card-body {
            padding: 1.5rem;
          }
          
          .card-text {
            font-size: 1rem;
          }

          .mission-image {
            height: 300px;
          }
          
          .image-overlay {
            padding: 2rem 1.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Missions;