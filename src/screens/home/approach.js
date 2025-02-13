import React from 'react';

const Approach = () => {
  const approaches = [
    {
      title: "Skills Development",
      icon: "💡",
      description: "Providing comprehensive training in entrepreneurship, digital skills, and financial literacy"
    },
    {
      title: "Girls Agency Empowerment",
      icon: "✊",
      description: "Fostering independence and leadership through mentorship and capacity building"
    },
    {
      title: "Linkages to Resources and Opportunities",
      icon: "🔗",
      description: "Creating connections to financial resources, markets, and growth opportunities"
    },
    {
      title: "Creation of an Enabling Environment",
      icon: "🌱",
      description: "Building supportive ecosystems and breaking down systemic barriers"
    }
  ];

  return (
    <div className="approach-section py-5 mt-4">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-4" style={{ color: '#633e98' }}>Our Approach</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="lead mb-5">
                Our approach elevates from breaking barriers to changing behavior, advancing skills, and amplifying voices. Our holistic approach creates a comprehensive pathway to advancement and resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Center Circle - Economic Empowerment */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 text-center">
            <div className="central-circle">
              <div className="inner-content">
                <div className="money-icon mb-2" style={{ fontSize: '2rem' }}>💰</div>
                <h3 className="mb-0">Economic Rights and Justice</h3>
                {/* <p className="small mb-0">Economic Rights and Justice</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Approach Components */}
        <div className="row g-4">
          {approaches.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="approach-card h-100">
                <div className="approach-icon">
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                </div>
                <h4 className="approach-title">{item.title}</h4>
                <p className="approach-description mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <img 
                src="/photos/where2.png" 
                alt="Tanzania Map"
                className="img-fluid"
                useMap="#tanzania-map"
              />

        {/* Bottom Description */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="bottom-text p-4">
              <p className="mb-0">
                At the heart of our programs is the Economic Rights and Justice Program, which includes entrepreneurship and digital inclusion and digital skills training, financial literacy, and mentorship. By addressing these four components, we aim to break the cycles of poverty and violence, leading to a more equitable and empowered future for young women in Tanzania.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .approach-section {
          background-color: #f8f9fa;
        }

        .central-circle {
          width: 200px;
          height: 200px;
          background-color: #633e98;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          border: 3px solid #f3ec1a;
        }

        .inner-content {
          padding: 20px;
          text-align: center;
        }

        .approach-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          position: relative;
          border: 2px solid #633e98;
        }

        .approach-card:hover {
          transform: translateY(-10px);
        }

        .approach-icon {
          width: 60px;
          height: 60px;
          background-color: #633e98;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .approach-title {
          color: #633e98;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .approach-description {
          color: #666;
          font-size: 0.9rem;
        }

        .bottom-text {
          background-color: #f3ec1a;
          border-radius: 15px;
          color: #333;
        }

        @media (max-width: 768px) {
          .central-circle {
            width: 200px;
            height: 200px;
          }

          .approach-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Approach;