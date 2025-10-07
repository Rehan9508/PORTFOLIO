import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import { FaMedal } from 'react-icons/fa';

function Achievements() {
  const achievementsData = [
    {
      title: "GeeksForGeeks CERTIFICATE",
      description: "GeeksForGeeks CERTIFICATE has successfully completed a 16-week course on GeeksForGeeks CUTM Training Program - Paralakhemundi Campus. Here's the certification link for verification",
      year: "2025",
      link: "https://drive.google.com/file/d/19pR9Vd7BD0FKDR-R2XcLQXbHTTwJmIVW/view"
    },
    {
      title: "Agentic AI Website Automation Hackathon Winner",
      description: "I Won the Agentic AI Website Automation Hackathon last month from August 13th – 15th, 2025 held at Centurion University of Technology and Management, Vizianagaram.",
      year: "2025",
      link: "https://drive.google.com/file/d/1sW8_xurrX-HQFhGHpw8SXZ3GnRey2Wb6/view"
    },
    {
      title: "CodSoft Machine Learning Internship",
      description: "I have successfully completed a 4-week virtual internship program in Machine Learning at CodSoft. This incredible opportunity allowed me to explore cutting-edge technologies, sharpen my skills, and contribute to impactful projects.",
      year: "2024",
      link: "https://drive.google.com/file/d/1DesrUBAi3V5F5Qu5du_iWr5HvcbsKCfb/view"
    },
    {
      title: "Cisco Python Essentials 1 Course",
      description: "I've successfully completed the Python Essentials 1 course with the Cisco Networking Academy, in collaboration with the OpenEDG Python Institute! 🎉",
      year: "2024",
      link: "https://drive.google.com/file/d/1r1epXLfi8S7dOd2wU-5OoI7DgO2AKUSA/view"
    },
    {
      title: "CodeTantra Data Structures and Algorithms",
      description: "I've completed the CodeTantra course in DATA STRUCTURE AND ALGORITHMS using C and received my certificate! It's been an incredible journey of learning and growth, and I can't wait to apply my newfound skills in the world of DATA SCIENCE. Here's to embracing new challenges and making a meaningful impact!",
      year: "2024",
      link: "https://drive.google.com/file/d/1c3LdNFvTw4vPyuT9C3FncE7IvEUGQL8i/view"
    },
    {
      title: "EcoSmart Hackathon 2025",
      description: "I was participated in the EcoSmart Hackathon 2025, organized by the School of Engineering and Technology, Centurion University of Technology and Management, Odisha on 18th – 19th February 2025. 🌱💡 The hackathon provided a dynamic platform to showcase innovation, problem-solving skills, and teamwork while working on creative and sustainable technology-driven solutions.",
      year: "2025",
      link: "https://drive.google.com/file/d/1jFKBewDaE464ylAfkLOCC-dR39XP0Kfx/view"
    },
    {
      title: "Intra College Games & Sports 2022-23",
      description: "Proud to have participated in the Intra College Games & Sports 2022–23 at Centurion University, representing the CSE Department in Lawn Tennis (Singles). 🏸 Grateful for the opportunity to learn, compete, and grow through sports—balancing academics and athletics builds true discipline and teamwork. 💪",
      year: "2022",
      link: "https://drive.google.com/file/d/15aMHXr-_ZNUjtypEDUa_nzcfaVSn-BKU/view"
    }
  ];

  return (
    <Container fluid className="achievements-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
            <div className="achievements-header">
              <h1 className="achievements-main-title text-rainbow">
                <FaMedal className="medal-icon" />
                Achievements
              </h1>
            </div>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10}>
            <div className="achievements-cards-container">
              {achievementsData.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-card-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                    {achievement.link && (
                      <p className="achievement-link">
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </p>
                    )}
                    <p className="achievement-year">{achievement.year}</p>
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

export default Achievements;
