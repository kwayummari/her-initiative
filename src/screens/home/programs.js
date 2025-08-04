import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Programs = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const programData = [
        {
            image: "panda.jpg",
            title: "Panda Digital",
            description: "A Swahili hybrid e-learning platform empowering young women with digital skills and business support.",
            fullDescription: `Panda Digital is a Swahili hybrid e-learning platform using a website and AI SMS to empower young women with skills, business support, and social justice. It tackles unemployment by promoting self-employment and has impacted over 8735 women, bridging the digital gender gap and addressing sextortion. The platform has reached 31 regions and aims to support 50,000 women over the next five years.`
        },
        {
            image: "planB.jpg",
            title: "Plan B Project",
            description: "Supporting out-of-school adolescent girls to overcome gender-based violence through entrepreneurship.",
            fullDescription: `Plan B project aims to support out of school adolescent girls, unemployed and young mothers aged (15-24) in Tanzania overcoming barriers of gender based violence whilst building their financial resilience through entrepreneurship skills and seed support resources. Since its inception, Plan B has empowered 108 girls in Kisarawe District, helping 40 of them start businesses and join saving groups.`
        },
        {
            image: "mshiko.jpg",
            title: "Mshiko Clubs",
            description: "Keeping girls in school through economic empowerment and financial literacy training.",
            fullDescription: `Mshiko clubs is a project that aims at setting a road map to financial freedom for girls (14-19) in schools by using a hybrid model of economic empowerment that includes the adoption of good financial behaviours, extracurricular income-generating activities, and girls agency empowerment to promote girl's self-esteem and self-efficacy that help girls stay and enjoy school.`
        }
    ];

    const handleProgramClick = (program) => {
        setSelectedProgram(program);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProgram(null);
    };

    return (
        <section className="programs-section py-5">
            <Container>
                <div className="text-center mb-5">
                    <div className="section-badge mb-3">
                        <span>What We Do</span>
                    </div>
                    <h2 className="section-title mb-4">Our Featured Programs</h2>
                    <p className="section-subtitle">
                        Discover how we're creating lasting change through innovative programs
                        that combine technology, education, and economic empowerment.
                    </p>
                </div>

                <Row className="g-4 mb-5">
                    {programData.map((program, index) => (
                        <Col key={index} lg={4} md={6}>
                            <div className="program-card" onClick={() => handleProgramClick(program)}>
                                <div className="program-image">
                                    <img
                                        src={`/photos/${program.image}`}
                                        alt={program.title}
                                        className="img-fluid"
                                    />
                                    <div className="program-overlay">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="program-content">
                                    <h4 className="program-title">{program.title}</h4>
                                    <p className="program-description">{program.description}</p>
                                    <div className="program-link">
                                        Learn More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center">
                    <a href="#/what" className="btn btn-primary btn-lg view-all-btn">
                        View All Programs
                        <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </Container>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProgram?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedProgram?.fullDescription}</p>
                </Modal.Body>
            </Modal>

            <style jsx>{`
        .programs-section {
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
        }

        .program-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
          border: 1px solid rgba(99, 62, 152, 0.1);
        }

        .program-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(99, 62, 152, 0.2);
        }

        .program-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .program-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .program-card:hover .program-image img {
          transform: scale(1.05);
        }

        .program-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(99, 62, 152, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
        }

        .program-card:hover .program-overlay {
          opacity: 1;
        }

        .program-content {
          padding: 1.5rem;
        }

        .program-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .program-description {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .program-link {
          color: #633e98;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        .program-card:hover .program-link {
          color: #8257b9;
        }

        .view-all-btn {
          background: linear-gradient(135deg, #633e98 0%, #8257b9 100%);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 62, 152, 0.3);
        }

        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 62, 152, 0.4);
          background: linear-gradient(135deg, #8257b9 0%, #633e98 100%);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .program-content {
            padding: 1rem;
          }
          
          .program-image {
            height: 200px;
          }
        }
      `}</style>
        </section>
    );
};

export default Programs;
