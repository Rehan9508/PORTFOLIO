import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiKeras,
} from 'react-icons/si'

function Libraries() {
  const libraries = [
    { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#f7931e' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#ff6f00' },
    { name: 'Keras', icon: <SiKeras />, color: '#d00000' },
    { name: 'PyTorch', icon: <SiPytorch />, color: '#ee4c2c' },
    { name: 'OpenCV', icon: <SiOpencv />, color: '#5c3ee8' },
  ]

  return (
    <div className="libraries-container">
      <Row className="libraries-row">
        {libraries.map((library, index) => (
          <Col xs={6} md={2} key={index} className="library-card-col">
            <div 
              className="library-card" 
              style={{ backgroundColor: library.color }}
            >
              <div className="library-icon">{library.icon}</div>
              <div className="library-name">{library.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Libraries
