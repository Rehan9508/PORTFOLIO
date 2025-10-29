import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCubes, FaNetworkWired, FaCodeBranch } from 'react-icons/fa'

function Concepts() {
  const concepts = [
    { name: 'OOPs', icon: <FaCubes />, color: '#6a5acd' },
    { name: 'Microservices (Foundational)', icon: <FaNetworkWired />, color: '#20b2aa' },
    { name: 'Data Structures & Algorithms', icon: <FaCodeBranch />, color: '#ff8c00' },
  ]

  return (
    <div className="data-analysis-container">
      <Row className="data-analysis-row">
        {concepts.map((item, index) => (
          <Col xs={6} md={2} key={index} className="data-tool-card-col">
            <div className="data-tool-card" style={{ backgroundColor: item.color }}>
              <div className="data-tool-icon">{item.icon}</div>
              <div className="data-tool-name">{item.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Concepts


