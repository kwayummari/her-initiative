import React from 'react';

const Approach = () => {
  const approaches = [
    {
      title: "Girls Agency Empowerment",
      description: "Fostering independence and leadership through mentorship and capacity building",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Skills Development",
      description: "Providing comprehensive training in entrepreneurship, digital skills, and financial literacy",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "Linkages to Resources and Opportunities",
      description: "Creating connections to financial resources, markets, and growth opportunities",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    {
      title: "Creation of an Enabling Environment",
      description: "Building supportive ecosystems and breaking down systemic barriers",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    }
  ];

  return (
    <section className="approach-section py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="section-badge mb-3">
            <span>Our Methodology</span>
          </div>
          <h2 className="section-title mb-4">Our Approach</h2>
          <p className="section-subtitle">
            Our approach elevates from breaking barriers to changing behavior, advancing skills, and amplifying voices.
            Our holistic approach creates a comprehensive pathway to advancement and resilience.
          </p>
        </div>

        {/* Center Circle - Economic Empowerment */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 text-center">
            <div className="central-circle">
              <div className="inner-content">
                <div className="central-icon mb-3">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="mb-0">Economic Rights and Justice</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Components */}
        <div className="row g-4 mb-5">
          {approaches.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="approach-card">
                <div className="approach-icon">
                  {item.icon}
                </div>
                <h4 className="approach-title">{item.title}</h4>
                <p className="approach-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bottom-text">
              <p>
                At the heart of our programs is the Economic Rights and Justice Program, which includes entrepreneurship
                and digital inclusion and digital skills training, financial literacy, and mentorship. By addressing
                these four components, we aim to break the cycles of poverty and violence, leading to a more equitable
                and empowered future for young women in Tanzania.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .approach-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
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
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .central-circle {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          border: 4px solid #f3ec1a;
          box-shadow: 0 8px 30px rgba(99, 62, 152, 0.3);
          transition: transform 0.3s ease;
        }

        .central-circle:hover {
          transform: scale(1.05);
        }

        .inner-content {
          padding: 1rem;
          text-align: center;
        }

        .central-icon {
          color: #f3ec1a;
        }

        .inner-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .approach-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(99, 62, 152, 0.1);
          height: 100%;
        }

        .approach-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(99, 62, 152, 0.2);
        }

        .approach-icon {
          color: #633e98;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .approach-card:hover .approach-icon {
          transform: scale(1.1);
        }

        .approach-title {
          color: #2c3e50;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .approach-description {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .bottom-text {
          background: linear-gradient(135deg, #f3ec1a 0%, #f7d794 100%);
          border-radius: 20px;
          color: #2c3e50;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(243, 236, 26, 0.3);
        }

        .bottom-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .central-circle {
            width: 180px;
            height: 180px;
          }
          
          .inner-content h3 {
            font-size: 1rem;
          }
          
          .approach-card {
            padding: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .bottom-text {
            padding: 1.5rem;
          }
          
          .bottom-text p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Approach;