import React, { useState, useEffect } from 'react';

const Where = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const regions = [
    { name: 'Dar es Salaam', active: true, description: 'Our main operational hub' },
    { name: 'Morogoro', active: true, description: 'Expanding our reach' },
    { name: 'Dodoma', active: true, description: 'Capital city operations' },
    { name: 'Pwani', active: true, description: 'Coastal region impact' },
    { name: 'Mwanza', active: true, description: 'Lake zone initiatives' },
    { name: 'Iringa', active: true, description: 'Southern highlands' },
    { name: 'Arusha', active: true, description: 'Northern region programs' },
    { name: 'Zanzibar', active: true, description: 'Island outreach' }
  ];

  return (
    <section className="where-section">
      <div className="container">
        <div className="where-header">
          <span className="section-badge">Our Reach</span>
          <h2 className="section-title">Where We Work</h2>
          <p className="section-subtitle">
            Expanding our impact across Tanzania to empower young women in every region
          </p>
        </div>

        <div className="where-content">
          <div className="map-container">
            <div className="map-wrapper">
              <img
                src="/photos/tanzania.png"
                alt="Tanzania Map"
                className="tanzania-map"
              />
              <div className="map-overlay">
                {regions.map((region, index) => (
                  <div
                    key={region.name}
                    className={`region-marker ${region.active ? 'active' : ''} ${activeRegion === region.name ? 'hover' : ''}`}
                    style={getRegionPosition(region.name)}
                    onMouseEnter={() => setActiveRegion(region.name)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <div className="marker-dot"></div>
                    <div className="marker-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="regions-list">
            <h3 className="list-title">Our Active Regions</h3>
            <div className="regions-grid">
              {regions.filter(region => region.active).map((region, index) => (
                <div
                  key={region.name}
                  className={`region-card ${isVisible ? 'slide-up' : ''} ${activeRegion === region.name ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveRegion(region.name)}
                  onMouseLeave={() => setActiveRegion(null)}
                >
                  <div className="region-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="region-info">
                    <h4 className="region-name">{region.name}</h4>
                    <p className="region-description">{region.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .where-section {
          padding: 6rem 0;
          background: white;
        }

        .where-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: #633e98;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
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

        .where-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .map-container {
          position: relative;
        }

        .map-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .tanzania-map {
          width: 100%;
          height: auto;
          display: block;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .region-marker {
          position: absolute;
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .marker-dot {
          width: 12px;
          height: 12px;
          background: #633e98;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(99, 62, 152, 0.3);
          transition: all 0.3s ease;
        }

        .marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background: rgba(99, 62, 152, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .region-marker.active .marker-dot {
          background: #f3ec1a;
          box-shadow: 0 2px 8px rgba(243, 236, 26, 0.4);
        }

        .region-marker.hover .marker-dot {
          transform: scale(1.5);
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        .regions-list {
          padding: 2rem;
        }

        .list-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 2rem;
        }

        .regions-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .region-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .region-card.slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        .region-card:hover,
        .region-card.active {
          background: #633e98;
          color: white;
          transform: translateX(10px);
        }

        .region-card:hover .region-icon,
        .region-card.active .region-icon {
          background: #f3ec1a;
          color: #633e98;
        }

        .region-icon {
          width: 50px;
          height: 50px;
          background: #633e98;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .region-info {
          flex: 1;
        }

        .region-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: inherit;
        }

        .region-description {
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
          color: inherit;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .where-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .regions-list {
            padding: 1rem;
          }

          .region-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

// Helper function to get region positions on the map
const getRegionPosition = (regionName) => {
  const positions = {
    'Dar es Salaam': { top: '60%', left: '70%' },
    'Morogoro': { top: '50%', left: '60%' },
    'Dodoma': { top: '45%', left: '55%' },
    'Pwani': { top: '65%', left: '75%' },
    'Mwanza': { top: '35%', left: '45%' },
    'Iringa': { top: '55%', left: '50%' },
    'Arusha': { top: '25%', left: '55%' },
    'Zanzibar': { top: '55%', left: '80%' }
  };
  return positions[regionName] || { top: '50%', left: '50%' };
};

export default Where;