import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiGooglecolab,
  SiAnaconda,
  SiGithub,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, color: '#000000' },
    { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
    { name: 'Google Colab', icon: <SiGooglecolab />, color: '#F9AB00' },
    { name: 'Anaconda', icon: <SiAnaconda />, color: '#44A833' },
    { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
    { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
  ];

  return (
    <div className="toolstack-container">
      <Row className="toolstack-row">
        {tools.map((tool, index) => (
          <Col xs={6} md={2} key={index} className="tool-card-col">
            <div 
              className="tool-card" 
              style={{ backgroundColor: tool.color }}
            >
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-name">{tool.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Toolstack;
