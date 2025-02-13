import React from 'react';

const Missions = ({ home }) => {
  return (
    <div className="container-fluid px-4">
      <div className="row g-4">
        {/* Mission Card */}
        <div className="col-12 col-md-6">
          <div className="mission-card">
            <div className="top-card d-flex justify-content-center align-items-center">
              <p className="top-card-text mb-0 me-3">Mission</p>
              <img src="/icons/mission.png" width="80" height="80" alt="mission" className="mission-icon" />
            </div>
            <div className="bottom-card d-flex justify-content-center align-items-center">
              <p className="bottom-card-text mb-0">
                We are committed to economic rights and justice, and digital inclusion,
                supporting young women and girls to achieve economic resilience,
                financial autonomy, enabling them to overcome barriers and live with dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="col-12 col-md-6">
          <div className="mission-card">
            <div className="top-card d-flex justify-content-center align-items-center">
              <p className="top-card-text mb-0 me-3">Vision</p>
              <img src="/icons/vision.png" width="80" height="80" alt="vision" className="mission-icon" />
            </div>
            <div className="bottom-card d-flex justify-content-center align-items-center">
              <p className="bottom-card-text mb-0">
                We envision an inclusive society where adolescent girls
                and young women have the power to choose and create opportunities
                for themselves as they achieve economic resilience, overcome barriers,
                and live with dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section - Only shown when home prop is false */}
        {!home && (
          <div className="col-12 mt-4">
            <img 
              src="/photos/screen2.png" 
              alt="about" 
              className="img-fluid w-100 mission-image" 
            />
          </div>
        )}
      </div>

      <style>{`
        .mission-card {
          cursor: pointer;
        }

        .top-card {
          height: 100px;
          background-color: #633e98;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
          margin-top: 100px;
        }

        .top-card-text {
          font-size: 50px;
          font-weight: 600;
          color: #ffffff;
          padding-right: 50px;
        }

        .bottom-card {
          height: 200px;
          background-color: #f3ec1a;
          padding: 20px;
        }

        .bottom-card-text {
          font-size: 25px;
          font-weight: 500;
          color: #000000;
          text-align: left;
        }

        .mission-image {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .top-card {
            height: 80px;
          }

          .top-card-text {
            font-size: 30px;
            padding-right: 20px;
          }

          .bottom-card {
            height: 300px;
          }

          .bottom-card-text {
            font-size: 20px;
          }

          .mission-image {
            height: 250px;
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default Missions;