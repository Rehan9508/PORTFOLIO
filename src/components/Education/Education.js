import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const educationData = [
    {
      institution: "Centurion University of Technology and Management, Paralakhemundi",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Paralakhemundi, Odisha, India",
      period: "2022 – 2026"
    },
    {
      institution: "Allama Iqbal College",
      degree: "12th Grade",
      location: "BiharSharif(Nalanda), India",
      period: "Intermediate – 79%, May 2020",
      certificate: "https://drive.google.com/file/d/14-feDJWll8l1EwIWLkp_aBe93iOCxNPR/view?usp=drive_link"
    },
    {
      institution: "ShantiKunj Public School",
      degree: "10th Grade",
      location: "Jehanabad, India",
      period: "Matriculation – 63%, May 2018",
      certificate: "https://drive.google.com/file/d/1wS5rAPER-tPJ6Eo84z54Y5WJM_XyqvoG/view?usp=drive_link"
    }
  ];

  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="education-header">
              <h1 className="education-main-title text-rainbow">
                <FaGraduationCap className="graduation-icon" />
                Education
              </h1>
            </div>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10}>
            <div className="education-cards-container">
              {educationData.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-card-content">
                    <h3 className="education-institution">{edu.institution}</h3>
                    <p className="education-degree">{edu.degree}</p>
                    <p className="education-location"><em>{edu.location}</em></p>
                    <p className="education-period">{edu.period}</p>
                    {edu.certificate && (
                      <p className="education-certificate">
                        <a 
                          href={edu.certificate} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#00bcd4', textDecoration: 'none' }}
                        >
                          🔗 View Certificate
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;