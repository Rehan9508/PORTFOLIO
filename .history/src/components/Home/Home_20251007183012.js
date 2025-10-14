import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Education from "../Education/Education";
import ReactGA from "react-ga";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    // Trigger animations on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Mouse movement tracking for dynamic effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        
        {/* Dynamic background effects */}
        <div 
          className="dynamic-bg-effect"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.1) 0%, transparent 50%)`
          }}
        />
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className={`greeting-container ${isVisible ? 'animate-in' : ''}`}>
                <h1 className="heading">
                  <span className="text-rainbow">Hi There!</span>{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  <span className="text-rainbow">I'M</span>
                  <span className="text-rainbow"> REHAN MAJID</span>
                </h1>

                <div className="typewriter-container">
                  <Type />
                </div>

              </div>
            </Col>

            <Col md={5} className="image-container">
              <div className={`hero-image ${isVisible ? 'animate-in' : ''}`}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
                <div className="floating-elements">
                  <div className="floating-icon floating-icon-1">💻</div>
                  <div className="floating-icon floating-icon-2">⚡</div>
                  <div className="floating-icon floating-icon-3">🚀</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Education Section */}
      <Education />
    </section>
  );
}

export default Home;
