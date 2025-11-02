import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Achievements from "../Achievements/Achievements";

import taskify from "../../Assets/Projects/Taskify.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import newImage from "../../Assets/Projects/1.jpg";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently in Machine Learning and Data Science.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={newImage}
              title="TEXT AND IMAGE SUMMARIZATION"
              description="Built a Flask-based web application integrating BERT, SBERT, GPT, TEXTRANK for automated text and image summarization from diverse data sources. Utilized PyTesseract and PIL for OCR-driven image to text extraction and a Transformer-based model to strengthen summary accuracy. Developed a feedback-enabled architecture with database integration to evaluate and optimize model performance based on user input."
              link="https://github.com/Rehan9508/TEXT-AND-IMAGE-SUMMARIZATION-"
              liveLink="#"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={newImage}
              title="SATELLITE IMAGE SEGMENTATION"
              description="Developed a deep learning-based model to segment satellite images and classify different land cover types (e.g., water bodies, forest area, street). Preprocessed large satellite imagery datasets and applied data augmentation techniques. Trained a U-Net-based Convolutional Neural Network for pixel-wise image segmentation to assist in geographic and environmental analysis using high-resolution imagery."
              link="https://github.com/Rehan9508/SATELLITE-IMAGE-SEGMENTATION"
              liveLink="#"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={newImage}
              title="GRAM TARANG FOOD TESTING LAB WEBSITE"
              description="A comprehensive full-stack web application built with MERN stack (MongoDB, Express.js, React.js, Node.js) for a NABL-accredited analytical testing laboratory. 🎯 Purpose: Serves as both a commercial testing facility portal and skill development hub for students, researchers, and industry professionals."
              link="https://github.com/Rehan9508/GRAM-TARANG-FOOD-TESTING-LAB-GTFTL-"
              liveLink="#"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={newImage}
              title="ESSE WEBSITE"
              description="ESSE Naturals & Nutrition is a full‑stack e‑commerce platform built with Next.js (TypeScript/Tailwind) and a Python Flask AI service. It delivers a modern storefront, secure authentication, cart/checkout, Razorpay payments, and an admin dashboard for products, orders, users, and content. AI features (Google Gemini and BLIP) power automated product."
              link="https://github.com/Rehan9508/ESSE-WEBSITE"
              liveLink="#"
            />
          </Col>
        </Row>
      </Container>
      
      {/* Achievements Section */}
      <Achievements />
    </Container>
  );
}

export default Projects;
