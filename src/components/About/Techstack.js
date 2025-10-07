import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import {
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiCss3,
  DiJava,
} from 'react-icons/di'
import {
  SiFlask,
} from 'react-icons/si'

function Techstack() {
  const programmingLanguages = [
    { name: 'Python', icon: <DiPython />, color: '#3776ab' },
    { name: 'Java', icon: <DiJava />, color: '#f89820' },
    { name: 'C++', icon: <CgCPlusPlus />, color: '#00599c' },
    { name: 'Flask', icon: <SiFlask />, color: '#000000' },
    { name: 'HTML5', icon: <DiHtml5 />, color: '#e34f26' },
    { name: 'CSS3', icon: <DiCss3 />, color: '#1572b6' },
    { name: 'JavaScript', icon: <DiJavascript1 />, color: '#f7df1e' },
  ]


  return (
    <div className="techstack-container">
      {/* Programming Languages Section */}
      <div className="programming-languages-section">
        <Row className="techstack-row">
          {programmingLanguages.map((skill, index) => (
            <Col xs={6} md={2} key={index} className="tech-card-col">
              <div 
                className="tech-card" 
                style={{ backgroundColor: skill.color }}
              >
                <div className="tech-icon">{skill.icon}</div>
                <div className="tech-name">{skill.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Techstack
