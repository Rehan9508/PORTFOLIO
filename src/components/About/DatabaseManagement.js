import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

function DatabaseManagement() {
  const databaseTools = [
    { name: 'SQL', icon: <FaDatabase />, color: '#336791' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'NoSQL', icon: <FaDatabase />, color: '#4DB33D' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  ]

  return (
    <div className="database-management-container">
      <Row className="database-management-row">
        {databaseTools.map((tool, index) => (
          <Col xs={6} md={2} key={index} className="database-tool-card-col">
            <div 
              className="database-tool-card" 
              style={{ backgroundColor: tool.color }}
            >
              <div className="database-tool-icon">{tool.icon}</div>
              <div className="database-tool-name">{tool.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default DatabaseManagement
