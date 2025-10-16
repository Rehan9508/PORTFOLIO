import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Experience() {
  return (
    <div className="experience-section-wrapper">
      <div className="experience-header">
        <h1 className="experience-main-title text-rainbow">
          Experience
        </h1>
      </div>
      
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="experience-card">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-content">
                <div className="experience-title">
                  <span className="experience-emoji">👨‍💻</span>
                  Programming Skill
                </div>
                
                <div className="experience-subtitle">
                  Self-Learning & Coding Platforms
                </div>
                
                <div className="experience-date">
                  July 2024 - Present
                </div>
                
                <div className="experience-description">
                  <p>
                    Solved 500+ coding problems across GeeksForGeeks, HackerRank, and Codeforces.
                  </p>
                  <p>
                    Achieved Gold Badge in Python and Silver Badge in Java on HackerRank.
                  </p>
                  <p>
                    Focused on optimizing algorithms for time and space efficiency, mastering data structures and problem-solving techniques.
                  </p>
                  <p>
                    Developed strong analytical thinking and systematic approach to complex programming challenges.
                  </p>
                  
                  <a href="#" className="see-more-link">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Experience
