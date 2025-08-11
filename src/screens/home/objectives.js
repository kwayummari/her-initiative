import React, { useEffect, useState } from 'react';

const Objectives = () => {
  const [counters, setCounters] = useState([
    { count: 0, targetCount: 210, label: "Young women launched new businesses in sectors such as beauty, agriculture, and baking." },
    { count: 0, targetCount: 7289, label: "Young women accessed skills and opportunities through the Panda Digital website and SMS services" },
    { count: 0, targetCount: 222, label: "Youth business owners trained with digital business skills" },
    { count: 0, targetCount: 500, label: "Adolescent girls engaged in financial literacy and entrepreneurship training" }
  ]);

  const strategicObjectives = [
    {
      title: "Enabling Economic and Financial Freedom",
      description: "Empowering women through financial literacy and economic opportunities",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Equipping Adolescent Girls and Young Women",
      description: "Breaking down barriers and creating pathways for success",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="m22 21-2-2" />
          <path d="M16 16h6" />
        </svg>
      )
    },
    {
      title: "Developing Innovative Partnerships",
      description: "Building strong collaborations for effective program delivery",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="m23 21-2-2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Strengthening Institutional Capacity",
      description: "Ensuring sustainable and impactful organizational growth",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    }
  ];

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
    <section className="objectives-section py-5">
      <div className="container">
        {/* Strategic Objectives Section */}
        <div className="text-center mb-5">
          <div className="section-badge mb-3">
            <span>Our Mission</span>
          </div>
          <h2 className="section-title mb-4">Strategic Objectives</h2>
          <p className="section-subtitle">
            We focus on four key pillars to create lasting impact in women's empowerment
          </p>
        </div>

        <div className="row g-4 mb-5">
          {strategicObjectives.map((objective, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="objective-card">
                <div className="objective-icon">
                  {objective.icon}
                </div>
                <h4 className="objective-title">
                  {objective.title}
                </h4>
                <p className="objective-description">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Numbers Section */}
        {/* <div className="impact-section">
          <div className="text-center mb-5">
            <h3 className="impact-title">Our Impact in Numbers</h3>
            <p className="impact-subtitle">
              Real change through measurable outcomes
            </p>
          </div>

          <div className="row g-4">
            {counters.map((counter, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="impact-card">
                  <div className="impact-number">
                    {counter.count.toLocaleString()}+
                  </div>
                  <div className="impact-label">
                    {counter.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .objectives-section {
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
        }

        .objective-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid rgba(99, 62, 152, 0.1);
        }

        .objective-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(99, 62, 152, 0.2);
        }

        .objective-icon {
          color: #633e98;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .objective-card:hover .objective-icon {
          transform: scale(1.1);
        }

        .objective-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .objective-description {
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        .impact-section {
          margin-top: 4rem;
          padding-top: 4rem;
          border-top: 1px solid rgba(99, 62, 152, 0.1);
        }

        .impact-title {
          font-size: 2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .impact-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 0;
        }

        .impact-card {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          color: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 30px rgba(99, 62, 152, 0.2);
        }

        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(99, 62, 152, 0.3);
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f3ec1a;
        }

        .impact-label {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .objective-card {
            padding: 1.5rem;
          }
          
          .impact-card {
            padding: 1.5rem;
          }
          
          .impact-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Objectives;