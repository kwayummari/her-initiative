import React, { useEffect, useState } from "react";

const Story2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="story-page">
      {/* Hero Section */}
      <section className="story-hero">
        <div className="hero-background">
          <img
            src="/photos/today.jpg"
            alt="Our Story Hero"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <span className="hero-badge">Our Journey</span>
              <h1 className="hero-title">
                Our Story, <span className="highlight">Our Evolution</span>
              </h1>
              <p className="hero-subtitle">
                From humble beginnings to empowering thousands of young women across Tanzania
              </p>
              <div className="hero-divider"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="story-timeline">
        <div className="container">
          <div className="timeline-header">
            <h2 className="section-title">The Journey Begins</h2>
            <p className="section-subtitle">
              A timeline of our growth and impact in empowering young women
            </p>
          </div>

          {/* The Beginning */}
          <div className={`timeline-item ${isVisible ? 'fade-in' : ''}`}>
            <div className="timeline-content">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-image">
                  <img src="/photos/old.jpg" alt="The Beginning" />
                </div>
                <div className="timeline-text">
                  <div className="timeline-year">2016-2019</div>
                  <h3 className="timeline-title">The Beginning</h3>
                  <p className="timeline-description">
                    In 2016, Her Initiative took root, fully blossoming into action in July 2019,
                    propelled by a visionary team led by Lydia Charles Moyo. This group of young
                    women embarked on a mission to champion the economic independence of girls and
                    young women, aiming to redefine their narrative and establish a 'new normal.'
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Journey */}
          <div className={`timeline-item ${isVisible ? 'fade-in' : ''}`}>
            <div className="timeline-content reverse">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-image">
                  <img src="/photos/f.jpg" alt="Personal Journey" />
                </div>
                <div className="timeline-text">
                  <div className="timeline-year">2012-2016</div>
                  <h3 className="timeline-title">Personal Journey</h3>
                  <p className="timeline-description">
                    Lydia's initial motivation stemmed from witnessing her peers drop out of school
                    due to poverty, child marriage, and early pregnancies. In 2012, she rallied
                    fellow high school girls, sparking self-awareness campaigns and events on girls'
                    rights and relevant laws across more than 10 schools in Dar es Salaam.
                    Transitioning to university, Lydia spearheaded entrepreneurship campaigns like
                    Panda events, fostering knowledge on entrepreneurship and facilitating connections
                    with successful industry leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Cards Section */}
      <section className="story-impact">
        <div className="container">
          <div className="impact-header">
            <h2 className="section-title">Our Evolution</h2>
            <p className="section-subtitle">
              Key milestones that shaped our organization's growth
            </p>
          </div>

          <div className="impact-grid">
            <div className={`impact-card ${isVisible ? 'slide-up' : ''}`}>
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="card-title">Early Days</h3>
              <p className="card-description">
                Lydia's initial motivation stemmed from witnessing her peers drop out of school
                due to poverty, child marriage, and early pregnancies. In 2012, she rallied
                fellow high school girls, sparking self-awareness campaigns.
              </p>
            </div>

            <div className={`impact-card ${isVisible ? 'slide-up' : ''}`}>
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <h3 className="card-title">Today</h3>
              <p className="card-description">
                The formation of Her Initiative was a natural progression, catalyzed by a series
                of impactful events in colleges. Standing for self-empowerment, the organization
                aligns itself with the resilience of young women.
              </p>
            </div>

            <div className={`impact-card ${isVisible ? 'slide-up' : ''}`}>
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="card-title">Target Demography</h3>
              <p className="card-description">
                Targeting adolescent girls and young women aged 15 to 35, Her Initiative's team
                comprises resilient social change-makers intimately acquainted with the struggles
                of the demographic they serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .story-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .story-hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(99, 62, 152, 0.7);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .highlight {
          color: #f3ec1a;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-divider {
          width: 100px;
          height: 4px;
          background: #f3ec1a;
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Timeline Section */
        .story-timeline {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .timeline-header {
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

        .timeline-item {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .timeline-item.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-content {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .timeline-content.reverse {
          flex-direction: row-reverse;
        }

        .timeline-marker {
          position: relative;
          flex-shrink: 0;
        }

        .marker-dot {
          width: 20px;
          height: 20px;
          background: #633e98;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(99, 62, 152, 0.3);
        }

        .marker-line {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100px;
          background: #633e98;
        }

        .timeline-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 2rem;
          align-items: center;
          flex: 1;
          transition: transform 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
        }

        .timeline-image {
          flex-shrink: 0;
          width: 200px;
          height: 150px;
          border-radius: 15px;
          overflow: hidden;
        }

        .timeline-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .timeline-text {
          flex: 1;
        }

        .timeline-year {
          display: inline-block;
          background: #633e98;
          color: white;
          padding: 0.3rem 1rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: #6c757d;
          line-height: 1.6;
        }

        /* Impact Section */
        .story-impact {
          padding: 6rem 0;
          background: white;
        }

        .impact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .impact-card {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .impact-card.slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        .impact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          background: #633e98;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .card-description {
          color: #6c757d;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .timeline-content,
          .timeline-content.reverse {
            flex-direction: column;
            gap: 1.5rem;
          }

          .timeline-card {
            flex-direction: column;
            text-align: center;
          }

          .timeline-image {
            width: 100%;
            height: 200px;
          }

          .impact-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .timeline-card {
            padding: 1.5rem;
          }

          .impact-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Story2;