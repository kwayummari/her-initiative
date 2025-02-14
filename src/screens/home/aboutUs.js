import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  // Custom styles for specific effects
  const styles = {
    aboutUsSection: {
      backgroundColor: '#633e98',
      position: 'absolute',
      bottom: '-50px',
    //   left: '50%',
    //   transform: 'translateX(-50%)',
      width: '100vw',
      zIndex: 1,
    },
    whoWeAre: {
      fontSize: '25px',
      fontWeight: 500,
      color: '#ffffff',
      marginBottom: 0
    },
    weAre: {
      fontSize: '60px',
      fontWeight: 800,
      color: '#f3ec1a',
      marginBottom: 0
    },
    biography: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#ffffff',
      paddingRight: '80px'
    }
  };

  return (
    <div className="d-none d-md-block" style={styles.aboutUsSection}>
      <Container fluid className="py-4">
        <Row className="align-items-center">
          <Col md={4}>
            <div className="ps-4">
              <p style={styles.whoWeAre}>WHO</p>
              <p style={styles.weAre}>WE ARE</p>
            </div>
          </Col>
          
          <Col md={8}>
            <p style={styles.biography}>
              We are a young women led non-profit organization
              committed to reshaping the narrative surrounding the value
              of girls through redefining societal norms that perpetuate
              the cycle of poverty, and fostering financial resilience
              among adolescent girls and young women in Tanzania through
              the fusion of economic empowerment and technology integration.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;