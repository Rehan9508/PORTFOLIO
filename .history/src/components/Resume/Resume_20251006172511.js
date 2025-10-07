import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Mohit_SDE_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="TEXT AND IMAGE SUMMARIZATION"
              date="November 2024"
              content={[
                "Built a Flask-based web application integrating BERT, SBERT, GPT, TEXTRANK for automated text and image summarization from diverse data sources.",
                "Utilized PyTesseract and PIL for OCR-driven image to text extraction and a Transformer-based model to strengthen summary accuracy.",
                "Developed a feedback-enabled architecture with database integration to evaluate and optimize model performance based on user input.",
              ]}
            />
            <Resumecontent
              title="SATELLITE IMAGE SEGMENTATION"
              date="December 2024"
              content={[
                "Developed a deep learning-based model to segment satellite images and classify different land cover types (e.g., water bodies, forest area, street).",
                "Preprocessed large satellite imagery datasets and applied data augmentation techniques.",
                "Trained a U-Net-based Convolutional Neural Network for pixel-wise image segmentation.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [Centurion University Of Technology and Management] "
              date="2022 - 2026"
              content={[
                `CGPA: 9.0/10 `,
                "Pursuing B.Tech in Computer Science and Engineering with focus on Machine Learning and Data Science.",
              ]}
            />

            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content={[
                `LAWN TENNIS (2022)`,
                `CODE TANTRA (2024)`,
                `INTERNSHIP (2024)`,
                `PYTHON (2024)`,
                `ECO HACKATHON (2025)`,
                `AGENTIC AI HACKATHON (2025)`,
                `GEEKS FOR GEEKS (2025)`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
