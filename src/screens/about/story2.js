import React from "react";

const Story2 = () => {
  return (
    <div className="container-fluid py-5">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 position-relative" style={{height: "500px"}}>
          <img 
            src="/photos/today.jpg"
            className="w-100 h-100 object-fit-cover position-absolute start-0 top-0"
            alt="Hero"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 className="display-3 ">Our Story, Our Evolution</h1>
            <div className="mx-auto mt-3 bg-warning" style={{height: "3px", width: "100px"}}></div>
          </div>
        </div>
      </div>

      {/* First Story Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="/photos/old.jpg"
            className="img-fluid rounded shadow-lg"
            alt="Early days"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-purple">The Beginning</h2>
          <p>In 2016, Her Initiative took root, fully blossoming into action in July 2019, propelled by a visionary team led by Lydia Charles Moyo. This group of young women embarked on a mission to champion the economic independence of girls and young women, aiming to redefine their narrative and establish a 'new normal.'</p>
        </div>
      </div>

      {/* Second Story Section */}
      <div className="row align-items-center mb-5 bg-purple text-white py-5">
        <div className="col-md-6 order-md-2 mb-4 mb-md-0">
          <img 
            src="/photos/f.jpg"
            className="img-fluid rounded shadow-lg"
            alt="Personal journey"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="mb-4 text-dark">Personal Journey</h2>
          <p className="text-dark">Lydia's personal journey as a young woman striving for financial independence fueled the organisation's inception. Her own experiences inspired a commitment to seeking solutions not only for herself but for other young women facing similar financial constraints.</p>
        </div>
      </div>

      {/* Impact Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm hover-lift">
            <div className="card-body">
              <h3 className="h5 mb-3 text-purple">Target Demographic</h3>
              <p className="card-text">Targeting adolescent girls and young women aged 15 to 35, Her Initiative's team comprises resilient social change-makers intimately acquainted with the struggles of the demographic they serve.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm hover-lift">
            <div className="card-body">
              <h3 className="h5 mb-3 text-purple">Early Days</h3>
              <p className="card-text">Lydia's initial motivation stemmed from witnessing her peers drop out of school due to poverty, child marriage, and early pregnancies. In 2012, she rallied fellow high school girls, sparking self-awareness campaigns.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm hover-lift">
            <div className="card-body">
              <h3 className="h5 mb-3 text-purple">Today</h3>
              <p className="card-text">The formation of Her Initiative was a natural progression, catalyzed by a series of impactful events in colleges. Standing for self-empowerment, the organization aligns itself with the resilience of young women.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story2;