import React, { useEffect, useState } from 'react';

const Impact = () => {
  const [counters, setCounters] = useState([
    { count: 0, targetCount: 210, label: "Young women launched new businesses in sectors such as beauty, agriculture, and baking." },
    { count: 0, targetCount: 8735, label: "Young women accessed skills and opportunities through the Panda Digital website and SMS services" },
    { count: 0, targetCount: 222, label: "Youth business owners trained with digital business skills" },
    { count: 0, targetCount: 4173, label: "Youth and young women entrepreneurs adopted digital operations" },
    { count: 0, targetCount: 5, label: "Established clubs across public secondary schools in Ubungo Municipal Council" },
    { count: 0, targetCount: 500, label: "Adolescent girls engaged in financial literacy and entrepreneurship training" },
    { count: 0, targetCount: 500, label: "Parents, teachers, and officials engaged to support girl's education" },
    { count: 0, targetCount: 245, label: "Youth graduates improved job search techniques" },
    { count: 0, targetCount: 103, label: "AGYW living with HIV received economic empowerment training" },
    { count: 0, targetCount: 38, label: "Youth-led organizations strengthened" },
    { count: 0, targetCount: 108, label: "School drop-out girls empowered to address gender-based violence" },
    { count: 0, targetCount: 90, label: "School drop-out girls established new businesses" }
  ]);

  useEffect(() => {
    const animateCounters = () => {
      counters.forEach((counter, index) => {
        const interval = setInterval(() => {
          if (counter.count < counter.targetCount) {
            setCounters(prevCounters => {
              const newCounters = [...prevCounters];
              newCounters[index].count += Math.ceil((counter.targetCount - counter.count) / 100);
              if (newCounters[index].count > counter.targetCount) {
                newCounters[index].count = counter.targetCount;
              }
              return newCounters;
            });
          } else {
            clearInterval(interval);
          }
        }, 30);
      });
    };

    animateCounters();
  }, []);

  return (
    <section className="impact-section py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="section-badge mb-3">
            <span>Making a Difference</span>
          </div>
          <h2 className="section-title mb-4">Our Impact</h2>
          <div className="impact-highlights">
            <div className="highlight-item">
              <div className="highlight-number">31,823</div>
              <div className="highlight-label">Total Reach</div>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <div className="highlight-number">25M+</div>
              <div className="highlight-label">Media Reach</div>
            </div>
          </div>
        </div>

        {/* Impact Cards Grid */}
        <div className="row g-4 mb-5">
          {counters.map((impact, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="impact-card">
                <div className="impact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                  </svg>
                </div>
                <div className="impact-number">
                  {impact.count.toLocaleString()}
                </div>
                <div className="impact-label">
                  {impact.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="featured-impact">
              <img
                src="/photos/_YTE6773.jpg"
                alt="Impact Stories"
                className="featured-image"
              />
              <div className="featured-overlay">
                <div className="overlay-content">
                  <h3>Real Stories, Real Impact</h3>
                  <p>Every number represents a life changed, a dream realized, and a future transformed through our programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .impact-section {
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
          margin-bottom: 2rem;
        }

        .impact-highlights {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .highlight-item {
          text-align: center;
        }

        .highlight-number {
          font-size: 3rem;
          font-weight: 700;
          color: #633e98;
          line-height: 1;
        }

        .highlight-label {
          font-size: 1rem;
          color: #6c757d;
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .highlight-divider {
          width: 2px;
          height: 60px;
          background: linear-gradient(180deg, transparent 0%, #633e98 50%, transparent 100%);
        }

        .impact-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(99, 62, 152, 0.1);
          height: 100%;
        }

        .impact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(99, 62, 152, 0.2);
        }

        .impact-icon {
          color: #633e98;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .impact-card:hover .impact-icon {
          transform: scale(1.1);
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #633e98;
          margin-bottom: 1rem;
          line-height: 1;
        }

        .impact-label {
          color: #6c757d;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .featured-impact {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .featured-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .featured-impact:hover .featured-image {
          transform: scale(1.05);
        }

        .featured-overlay {
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
          
          .impact-highlights {
            flex-direction: column;
            gap: 1rem;
          }
          
          .highlight-divider {
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #633e98 50%, transparent 100%);
          }
          
          .impact-card {
            padding: 1.5rem;
          }
          
          .impact-number {
            font-size: 2rem;
          }
          
          .featured-image {
            height: 300px;
          }
          
          .featured-overlay {
            padding: 2rem 1.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Impact;