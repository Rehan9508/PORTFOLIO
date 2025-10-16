import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  SiNumpy,
  SiPandas,
  SiTableau,
} from 'react-icons/si'
import { FaFileExcel } from 'react-icons/fa'
import { DiPython } from 'react-icons/di'

function DataAnalysis() {
  const dataTools = [
    { name: 'NumPy', icon: <SiNumpy />, color: '#4dabcf' },
    { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
    { name: 'Matplotlib/Seaborn', icon: <DiPython />, color: '#3776ab' },
    { name: 'Excel', icon: <FaFileExcel />, color: '#217346' },
    { name: 'Tableau', icon: <SiTableau />, color: '#e97627' },
  ]

  return (
    <div className="data-analysis-container">
      <Row className="data-analysis-row">
        {dataTools.map((tool, index) => (
          <Col xs={6} md={2} key={index} className="data-tool-card-col">
            <div 
              className="data-tool-card" 
              style={{ backgroundColor: tool.color }}
            >
              <div className="data-tool-icon">{tool.icon}</div>
              <div className="data-tool-name">{tool.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default DataAnalysis
