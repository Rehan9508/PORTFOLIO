import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineLinkedin, 
  AiOutlineGithub,
  AiOutlineSend
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email sending functionality here
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "50px 0" }}>
          <Col md={12}>
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white", fontSize: "1.2em", marginBottom: "50px", textAlign: "center" }}>
              Ready to collaborate or have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </Col>
        </Row>
        
        <Row>
          {/* Contact Information */}
          <Col md={6} style={{ padding: "0 20px" }}>
            <div className="contact-info-section">
              <h3 style={{ color: "white", marginBottom: "30px", display: "flex", alignItems: "center" }}>
                <AiOutlineMail style={{ marginRight: "10px", color: "#be50f4" }} />
                Contact Information
              </h3>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <AiOutlineMail className="contact-icon" />
                  <span>rehanmajid95082@gmail.com</span>
                </div>
                
                <div className="contact-card">
                  <AiOutlinePhone className="contact-icon" />
                  <span>(+91) 9508205417</span>
                </div>
                
                <div className="contact-card">
                  <AiOutlineLinkedin className="contact-icon" />
                  <span>linkedin.com/in/rehan-mallick-7a83092a6</span>
                </div>
                
                <div className="contact-card">
                  <AiOutlineGithub className="contact-icon" />
                  <span>github.com/Rehan9508</span>
                </div>
              </div>
              
              <div className="follow-me-section">
                <h4 style={{ color: "white", marginTop: "40px", marginBottom: "20px" }}>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/rehan-mallick-7a83092a6/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="social-icon" />
                  </a>
                  <a href="https://github.com/Rehan9508" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                  <a href="mailto:rehanmajid95082@gmail.com">
                    <FaEnvelope className="social-icon" />
                  </a>
                  <a href="tel:+919508205417">
                    <FaPhone className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Contact Form */}
          <Col md={6} style={{ padding: "0 20px" }}>
            <div className="contact-form-section">
              <h3 style={{ color: "white", marginBottom: "30px", display: "flex", alignItems: "center" }}>
                <AiOutlineSend style={{ marginRight: "10px", color: "#be50f4" }} />
                Send Message
              </h3>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "white",
                      borderRadius: "10px"
                    }}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "white",
                      borderRadius: "10px"
                    }}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "white",
                      borderRadius: "10px"
                    }}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "white",
                      borderRadius: "10px",
                      resize: "vertical"
                    }}
                  />
                </Form.Group>
                
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#be50f4",
                    borderColor: "#be50f4",
                    fontSize: "1.1em",
                    padding: "12px 30px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto"
                  }}
                >
                  Send Message
                  <AiOutlineSend style={{ marginLeft: "10px", fontSize: "1.2em" }} />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
