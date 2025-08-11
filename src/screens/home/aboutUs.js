import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <section className="about-section py-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="about-content">
              <div className="section-badge mb-3">
                <span>About Her Initiative</span>
              </div>

              <h2 className="section-title mb-4">
                A girl who is financially <br />
                <span className="highlight">independent is confident</span>
              </h2>

              <p className="section-description mb-4">
                We are a young women-led non-profit organization committed to reshaping
                the narrative surrounding the value of girls through redefining societal
                norms that perpetuate the cycle of poverty, and fostering financial
                resilience among adolescent girls and young women in Tanzania through
                the fusion of economic empowerment and technology integration.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">30,000+</div>
                  <div className="stat-label">Women Empowered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">31</div>
                  <div className="stat-label">Regions Reached</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Businesses Launched</div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-visual">
              <div className="image-grid">
                <div className="image-item main-image">
                  <img
                    src="/photos/_YTE8636.jpg"
                    alt="Women empowerment workshop"
                    className="img-fluid rounded-3 shadow-lg"
                  />
                </div>
                <div className="image-item secondary-image">
                  <img
                    src="/photos/_YTE6786.jpg"
                    alt="Digital skills training"
                    className="img-fluid rounded-3 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #633e98 50%, transparent 100%);
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
          line-height: 1.2;
        }

        .section-title .highlight {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #633e98;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6c757d;
          font-weight: 500;
        }

        .about-visual {
          position: relative;
        }

        .image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1rem;
          height: 400px;
        }

        .image-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .image-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-item:hover img {
          transform: scale(1.05);
        }

        .main-image {
          grid-column: 1 / 3;
          grid-row: 1 / 2;
        }

        .secondary-image {
          grid-column: 1 / 3;
          grid-row: 2 / 3;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .image-grid {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutUs;