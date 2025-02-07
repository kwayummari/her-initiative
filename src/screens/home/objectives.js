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
      icon: "💰",
      description: "Empowering women through financial literacy and economic opportunities"
    },
    {
      title: "Equipping Adolescent Girls and Young Women",
      icon: "💪",
      description: "Breaking down barriers and creating pathways for success"
    },
    {
      title: "Developing Innovative Partnerships",
      icon: "🤝",
      description: "Building strong collaborations for effective program delivery"
    },
    {
      title: "Strengthening Institutional Capacity",
      icon: "🏛️",
      description: "Ensuring sustainable and impactful organizational growth"
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
    <div className="impact-section py-5">
      {/* Strategic Objectives Section */}
      <div className="container mb-5">
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold" style={{ color: '#633e98' }}>Our Vision</h6>
          <h2 className="display-4 fw-bold mb-4">Strategic Objectives</h2>
          <div className="mx-auto" style={{ width: '50px', height: '4px', backgroundColor: '#f3ec1a' }}></div>
        </div>

        <div className="row g-4">
          {strategicObjectives.map((objective, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm objective-card">
                <div className="card-body text-center p-4">
                  <div className="objective-icon mb-3" style={{ fontSize: '2.5rem' }}>
                    {objective.icon}
                  </div>
                  <h4 className="card-title h5 mb-3" style={{ color: '#633e98' }}>
                    {objective.title}
                  </h4>
                  <p className="card-text text-muted">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <style>{`
        .objective-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .objective-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .impact-card {
          transition: transform 0.3s ease;
          background: linear-gradient(145deg, #633e98 0%, #8257b9 100%);
        }
        
        .impact-card:hover {
          transform: scale(1.05);
        }
        
        .impact-card p {
          color: white !important;
        }
        
        .objective-icon {
          transition: transform 0.3s ease;
        }
        
        .objective-card:hover .objective-icon {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Objectives;