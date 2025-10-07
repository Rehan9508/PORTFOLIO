import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Libraries from "./Libraries";
import DataAnalysis from "./DataAnalysis";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
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
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
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

        <div className="tools-section-wrapper">
          <div className="tools-header">
            <h1 className="tools-main-title text-rainbow">
              Tools I use
            </h1>
            <p className="tools-subtitle">
              Development environment and productivity tools
            </p>
          </div>
          <Toolstack />
        </div>

      </Container>
    </Container>
  );
}

export default About;
