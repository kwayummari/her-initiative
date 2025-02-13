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
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h6 className="text-secondary">MAKING A DIFFERENCE</h6>
            <h2 className="display-4" style={{ color: '#633e98' }}>Our Impact</h2>
            <p style={{fontSize: "50px", fontWeight: "bolder"}}>Total Reach 31,823 <br /> Total Media Reach 25,000,000</p>
          </div>
        </div>

        {/* Impact Cards Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {counters.map((impact, index) => (
            <div key={index} className="col">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="approach-icon p-3 me-3" style={{ backgroundColor: '#633e98' }}>
                      <div className="text-warning fw-bold fs-7">✓✓</div>
                    </div>
                    <h3 className="display-6 fw-bold mb-0" style={{ color: '#633e98' }}>
                      {impact.count.toLocaleString()}
                    </h3>
                  </div>
                  <p className="text-muted fw-bold mb-0">{impact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="row mt-5">
          <div className="col-12 col-md-8 mx-auto">
            <div className="card border-0 shadow overflow-hidden">
              <img 
                src="/photos/impact1.jpg" 
                alt="Impact" 
                className="card-img-top img-hover"
                style={{
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: translateY(-5px);
        }
        .img-hover {
          transition: transform 0.3s ease;
        }
        .img-hover:hover {
          transform: scale(1.05);
        }
          .approach-icon {
          width: 60px;
          height: 60px;
          background-color: #633e98;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          margin: 0;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Impact;