import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Libraries from "./Libraries";
import DataAnalysis from "./DataAnalysis";
import DatabaseManagement from "./DatabaseManagement";
import Aboutcard from "./AboutCard";
import Experience from "./Experience";
import laptopImg from "../../Assets/MyPhoto.jpg";
import Toolstack from "./Toolstack";
import Concepts from "./Concepts";
import ReactGA from "react-ga";
import { FaCog } from "react-icons/fa";

function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              LET ME <strong className="purple">INTRODUCE</strong> MYSELF
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img 
              src={laptopImg} 
              alt="about" 
              className="img-fluid" 
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid rgba(190, 80, 244, 0.3)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                display: "block",
                margin: "0 auto"
              }}
            />
          </Col>
        </Row>
        
        <Experience />
        
            <div className="skills-section-wrapper">
              <div className="skills-header">
                <h1 className="skills-main-title text-rainbow">
                  <FaCog className="gear-icon-left" />
                  Skills
                  <FaCog className="gear-icon-right" />
                </h1>
              </div>
              <Techstack />
            </div>

            <div className="libraries-section-wrapper">
              <div className="libraries-header">
                <h1 className="libraries-main-title text-rainbow">
                  Libraries & Frameworks
                </h1>
              </div>
              <Libraries />
            </div>

            <div className="data-analysis-section-wrapper">
              <div className="data-analysis-header">
                <h1 className="data-analysis-main-title text-rainbow">
                  Data Handling & Analysis
                </h1>
              </div>
              <DataAnalysis />
            </div>

            <div className="data-analysis-section-wrapper">
              <div className="data-analysis-header">
                <h1 className="data-analysis-main-title text-rainbow">
                  Concepts
                </h1>
              </div>
              <Concepts />
            </div>

            <div className="database-management-section-wrapper">
              <div className="database-management-header">
                <h1 className="database-management-main-title text-rainbow">
                  Database Management
                </h1>
              </div>
              <DatabaseManagement />
            </div>

        <div className="tools-section-wrapper">
          <div className="tools-header">
            <h1 className="tools-main-title text-rainbow">
              Tools I use
            </h1>
          </div>
          <Toolstack />
        </div>

      </Container>
    </Container>
  );
}

export default About;
