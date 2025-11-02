import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Centurion University of Technology and Management",
      location: "Paralakhemundi, Odisha, India",
      period: "08/2022 - 05/2026",
      gpa: "GPA: 9.0/10",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Allama Iqbal College",
      location: "BiharSharif(Nalanda), India",
      period: "May 2020",
      gpa: "GPA: 79%",
      description: "Completed Intermediate education with excellent academic performance, establishing a strong foundation for future studies."
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "ShantiKunj Public School",
      location: "Jehanabad, India",
      period: "May 2018",
      gpa: "GPA: 63%",
      description: "Successfully completed matriculation with good academic results, building a solid foundation for higher education."
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{ flex: 1 }}>
                        <h3 className="education-degree" style={{ color: '#4169E1', fontWeight: 'bold', marginBottom: '8px', fontSize: '1.3em' }}>
                          {edu.degree}
                        </h3>
                        <p className="education-institution" style={{ fontSize: '1.1em', marginBottom: '10px' }}>
                          {edu.institution}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <p className="education-location" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                            <FaMapMarkerAlt style={{ color: '#666' }} />
                            <span>{edu.location}</span>
                          </p>
                          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                            <FaGraduationCap style={{ color: '#666' }} />
                            <span>{edu.gpa}</span>
                          </p>
                        </div>
                        <p className="education-description" style={{ marginTop: '15px', color: '#666', fontSize: '0.95em' }}>
                          {edu.description}
                        </p>
                      </div>
                      <div style={{ marginLeft: '20px' }}>
                        <p className="education-period" style={{ color: '#00bcd4', fontWeight: '500', fontSize: '1em' }}>
                          {edu.period}
                        </p>
                      </div>
                    </div>
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