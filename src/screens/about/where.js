import React, { useState } from 'react';

const Where = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  
  const regions = {
    'Dar es Salaam': true,
    'Morogoro': true,
    'Dodoma': true,
    'Pwani': true,
    'Mwanza': true,
    'Iringa': true,
    'Arusha': true,
    'Zanzibar': true
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="display-4 text-center text-purple mb-4">Where We Work</h2>
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="position-relative">
              <img 
                src="/photos/tanzania.png" 
                alt="Tanzania Map"
                className="img-fluid"
                useMap="#tanzania-map"
              />
              <map name="tanzania-map">
                {Object.keys(regions).map(region => (
                  <area 
                    key={region}
                    shape="poly"
                    coords={getRegionCoords(region)}
                    alt={region}
                    onMouseEnter={() => setActiveRegion(region)}
                    onMouseLeave={() => setActiveRegion(null)}
                    className={`region ${regions[region] ? 'active' : ''}`}
                  />
                ))}
              </map>
              {/* Overlay for active regions */}
              {Object.keys(regions).map(region => (
                <div
                  key={region}
                  className={`region-overlay ${regions[region] ? 'active' : ''} 
                             ${activeRegion === region ? 'hover' : ''}`}
                  style={getRegionStyle(region)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-3">Our Active Regions</h3>
                <ul className="list-unstyled mb-0">
                  {Object.keys(regions).filter(region => regions[region]).map(region => (
                    <li 
                      key={region}
                      className={`py-2 d-flex align-items-center ${activeRegion === region ? 'text-purple fw-bold' : ''}`}
                      onMouseEnter={() => setActiveRegion(region)}
                      onMouseLeave={() => setActiveRegion(null)}
                    >
                      <div className="me-2 bg-purple rounded-circle" style={{width: '8px', height: '8px'}}></div>
                      {region}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get region coordinates (you'll need to define these based on your map)
const getRegionCoords = (region) => {
  const coords = {
    'Dar es Salaam': '100,100,120,120', // Example coordinates
    'Morogoro': '130,130,150,150',
    // Add coordinates for other regions
  };
  return coords[region];
};

// Helper function to get region overlay styles
const getRegionStyle = (region) => {
  const styles = {
    'Dar es Salaam': { top: '60%', left: '70%', width: '10%', height: '10%' },
    'Morogoro': { top: '50%', left: '60%', width: '15%', height: '15%' },
    // Add styles for other regions
  };
  return styles[region];
};

export default Where;