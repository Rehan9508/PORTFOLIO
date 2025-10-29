import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  SiNumpy,
  SiPandas,
  SiTableau,
} from 'react-icons/si'
import { FaFileExcel } from 'react-icons/fa'
import { DiPython } from 'react-icons/di'

// Minimal Power BI SVG icon (white fill) to avoid external icon dependency issues
const PowerBIIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    fill="#ffffff"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path d="M6 12a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H28.5v-5.5h9a2.5 2.5 0 0 0 2.5-2.5V14a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v18h-2a4 4 0 0 1-4-4V12Z"/>
    <rect x="12" y="20" width="4" height="14" rx="1"/>
    <rect x="19" y="17" width="4" height="17" rx="1"/>
    <rect x="26" y="22" width="4" height="12" rx="1"/>
  </svg>
)

function DataAnalysis() {
  const dataTools = [
    { name: 'NumPy', icon: <SiNumpy />, color: '#4dabcf' },
    { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
    { name: 'Matplotlib/Seaborn', icon: <DiPython />, color: '#3776ab' },
    { name: 'Excel', icon: <FaFileExcel />, color: '#217346' },
    { name: 'Tableau', icon: <SiTableau />, color: '#e97627' },
    { name: 'Power BI', icon: <PowerBIIcon />, color: '#F2C811' },
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
