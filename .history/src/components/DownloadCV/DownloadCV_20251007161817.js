import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Contact from "../Contact/Contact";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function DownloadCV() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Container fluid className="download-cv-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "50px 0" }}>
            <Col md={8} style={{ textAlign: "center" }}>
              <h1 className="project-heading">
                Download My <strong className="purple">Resume</strong>
              </h1>
              <p style={{ color: "white", fontSize: "1.2em", marginBottom: "30px" }}>
                Get a copy of my detailed resume to learn more about my experience and skills.
              </p>
              <Button 
                variant="primary" 
                href="https://drive.google.com/file/d/1_j5mdxVOQFtbPondscrW-TZjC8xWTjb0/view?usp=drive_link"
                target="_blank"
                size="lg"
                style={{
                  backgroundColor: "#be50f4",
                  borderColor: "#be50f4",
                  fontSize: "1.2em",
                  padding: "15px 30px",
                  borderRadius: "25px",
                  fontWeight: "600"
                }}
              >
                <AiOutlineDownload style={{ marginRight: "10px", fontSize: "1.3em" }} />
                Download CV
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Contact Section */}
      <Contact />
    </>
  );
}

export default DownloadCV;
