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
                <div className="experience-title" style={{ textAlign: 'center' }}>
                  <span className="experience-emoji">👨‍💻</span>
                  Programming Skill
                </div>
                
                
                <div className="experience-date">
                  September 2025 - Present
                </div>
                
                <div className="experience-description">
                  <p>
                    Solved 500+ coding problems across GeeksForGeeks, HackerRank, and Codeforces.
                  </p>
                  <p>
                    <strong>GeeksForGeeks Certificate</strong> Successfully completed a 16-week course on GeeksForGeeks CUTM Training Program - Paralakhemundi Campus.
                  </p>
                  <p>
                    <a 
                      href="https://www.geeksforgeeks.org/batch/placement-prep-paralakhemundi?tab=Contest" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#4169E1', textDecoration: 'none' }}
                    >
                      🔗 View Link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Second Experience Card - AGENTIC AI HACKATHON */}
        <Row className="justify-content-center" style={{ marginTop: '40px' }}>
          <Col md={8}>
            <div className="experience-card">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-content">
                <div className="experience-title" style={{ textAlign: 'center' }}>
                  <span className="experience-emoji">🏆</span>
                  AGENTIC AI HACKATHON
                </div>
                
                
                <div className="experience-date">
                  August 2025 - Recent
                </div>
                
                <div className="experience-description">
                  <p>
                    Participated in Agentic AI Hackathon for 3 days in Vizianagraram campus of centurion university of technology and management where I won in Hackathon of 50k prize pool.
                  </p>
                  <p>
                    Now I am working on Gram Tarang Food Testing Lab Website of my University in which Designing and adding machine learning tools for Automation.
                  </p>
                  <p>
                    <a 
                      href="https://drive.google.com/file/d/1sW8_xurrX-HQFhGHpw8SXZ3GnRey2Wb6/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#4169E1', textDecoration: 'none' }}
                    >
                      🔗 View Link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Third Experience Card - MERCHANT NAVY */}
        <Row className="justify-content-center" style={{ marginTop: '40px' }}>
          <Col md={8}>
            <div className="experience-card">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-content">
                <div className="experience-title" style={{ textAlign: 'center' }}>
                  <span className="experience-emoji">⚓</span>
                  MERCHANT NAVY
                </div>
                
                <div className="experience-date">
                  2021 - 2022
                </div>
                
                <div className="experience-description">
                  <p>
                    I was Cleared the Indian Maritime University Common Entrance Text (IMUCET) exam. I have Provisional Rank Certificate where I got a overall Rank of 4883.
                  </p>
                  <p>
                    <a 
                      href="https://drive.google.com/file/d/1xLlid_Q94RjDp-urfXnUMa1zh-q_-FTD/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#4169E1', textDecoration: 'none' }}
                    >
                      🔗 View Link
                    </a>
                  </p>
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
