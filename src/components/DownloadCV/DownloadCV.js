import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Contact from "../Contact/Contact";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function DownloadCV() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Container fluid className="download-cv-section" style={{
        background: "linear-gradient(135deg, rgba(12, 5, 19, 0.95) 0%, rgba(26, 10, 46, 0.95) 50%, rgba(22, 33, 62, 0.95) 100%)",
        minHeight: "70vh",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        <style>{`
          .download-cv-section #tsparticles,
          .download-cv-section canvas,
          .download-cv-section [id*="particle"],
          .download-cv-section [class*="particle"],
          .download-cv-section::before,
          .download-cv-section::after {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
          .download-cv-section {
            background-image: none !important;
            background: linear-gradient(135deg, rgba(12, 5, 19, 0.95) 0%, rgba(26, 10, 46, 0.95) 50%, rgba(22, 33, 62, 0.95) 100%) !important;
          }
          /* Hide stars from parent containers */
          .page-background-container .download-cv-section {
            background-image: none !important;
          }
          /* Ensure no radial gradients (stars) show */
          body:has(.download-cv-section),
          html:has(.download-cv-section) {
            background-image: none !important;
          }
        `}</style>
        <Container>
          <Row style={{ justifyContent: "center", padding: "50px 0" }}>
            <Col md={8} style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
              <h1 className="project-heading" style={{
                fontSize: "3.5em",
                marginBottom: "25px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "800",
                lineHeight: "1.2"
              }}>
                Download My <strong style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>Resume</strong>
              </h1>
              <p style={{ 
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "1.3em", 
                marginBottom: "50px",
                fontWeight: "500",
                lineHeight: "1.6"
              }}>
                Get a copy of my detailed resume to learn more about my experience and skills.
              </p>
              <Button 
                variant="primary" 
                href="https://drive.google.com/file/d/19_oLRvFqeQjridJVKzMV58tsB2ePcHki/view?usp=drive_link"
                target="_blank"
                size="lg"
                className="download-cv-btn"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  border: "none",
                  fontSize: "1.3em",
                  padding: "18px 50px",
                  borderRadius: "35px",
                  fontWeight: "700",
                  color: "white",
                  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.5), 0 4px 15px rgba(240, 147, 251, 0.3)",
                  transition: "all 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.08)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(102, 126, 234, 0.6), 0 6px 20px rgba(240, 147, 251, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.5), 0 4px 15px rgba(240, 147, 251, 0.3)";
                }}
              >
                <AiOutlineDownload style={{ fontSize: "1.4em", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
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
